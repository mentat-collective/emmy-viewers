(ns emmy.viewer.raster.bench
  "Benchmark of the raster backend against Emmy's :js mode.

  For every case it measures:

  - build cost on the JVM: `compile-state-fn` in :js mode against the raster
    pipeline (plan, lowering, and raster's eval + wasm compile per output);
  - payload: characters of the form a viewer binds, for each backend;
  - runtime in node (V8), ns per point over the same inputs: :js and :raster
    each called per point and once per complete batch;
  - agreement: the largest absolute difference between either batch or raster
    per-point evaluation and :js per-point evaluation.

  Run with `clojure -J-Xmx2g -M:raster:bench`. Writes bench/results/latest.edn and
  prints a table."
  (:require [clojure.data.json :as json]
            [clojure.java.io :as io]
            [clojure.java.shell :as sh]
            [clojure.pprint :as pp]
            [emmy.env :as e]
            [emmy.expression.compile :as xc]
            [emmy.mechanics.lagrange :as l]
            [emmy.viewer.compile :as vc]
            [emmy.viewer.raster :as raster]
            [emmy.viewer.raster.lower :as lower]
            [emmy.viewer.kernel.plan :as plan])
  (:import (java.util Random)))

;; ## Cases

(defn- L-double-pendulum
  "Lagrangian of a planar double pendulum with angles θ, φ."
  [m1 m2 l1 l2 g]
  (fn [[_ [θ φ] [θdot φdot]]]
    (let [T (e/+ (e/* 1/2 (e/+ m1 m2) (e/square l1) (e/square θdot))
                 (e/* 1/2 m2 (e/square l2) (e/square φdot))
                 (e/* m2 l1 l2 θdot φdot (e/cos (e/- θ φ))))
          V (e/- (e/* -1 (e/+ m1 m2) g l1 (e/cos θ))
                 (e/* m2 g l2 (e/cos φ)))]
      (e/- T V))))

(def cases
  "Each case is compiled exactly as a viewer compiles it. `:arity` is the
  number of scalars in one input; `:params` the parameter values."
  [{:id :x-sin-x :doc "Mafs of-x: x sin x"
    :f (fn [x] (e/* x (e/sin x))) :params false :init [0]
    :opts {:calling-convention :native :arity 1} :arity 1}

   {:id :poly-7 :doc "Mafs of-x: a degree-7 polynomial (no transcendentals)"
    :f (fn [x] (e/+ (e/* 3 (e/expt x 7)) (e/* -2 (e/expt x 5)) (e/expt x 3) (e/* -4 x) 1))
    :params false :init [0]
    :opts {:calling-convention :native :arity 1} :arity 1}

   {:id :parametric :doc "Mafs parametric: (cos t, sin 2t)"
    :f (fn [t] (e/up (e/cos t) (e/sin (e/* 2 t)))) :params false :init [0]
    :opts {:calling-convention :native :arity 1} :arity 1}

   {:id :param-1d :doc "Mafs of-x with sliders a, b: a sin(bx) + x^2"
    :f (fn [a b] (fn [[x]] (e/+ (e/* a (e/sin (e/* b x))) (e/square x))))
    :params '[a b] :param-values [1.3 2.1] :init [0] :opts {} :arity 1}

   {:id :surface :doc "MathBox surface: sin x cos y exp(-(x^2+y^2)/4)"
    :f (fn [[x y]] (e/up x y (e/* (e/sin x) (e/cos y)
                                  (e/exp (e/* -1/4 (e/+ (e/square x) (e/square y)))))))
    :params false :init [0 0]
    :opts {:calling-convention :primitive :generic-params? false} :arity 2}

   {:id :surface-64 :doc "MathBox 64x64 grid: a sin(bx) cos(y)"
    :f (fn [a b] (fn [[x y]] (e/* a (e/sin (e/* b x)) (e/cos y))))
    :params '[a b] :param-values [1.3 2.1] :init [0 0]
    :opts {:calling-convention :structure} :arity 2 :grid-width 64}

   {:id :double-pendulum :doc "physics evolve: double-pendulum state derivative, 5 params"
    :f (fn [m1 m2 l1 l2 g]
         (fn [[s]] ((l/Lagrangian->state-derivative (L-double-pendulum m1 m2 l1 l2 g)) s)))
    :params '[m1 m2 l1 l2 g] :param-values [1.0 1.0 1.0 1.0 9.8]
    :init [(e/up 0 (e/up 0 0) (e/up 0 0))]
    :opts {:calling-convention :primitive :generic-params? true :simplify? true} :arity 5}])

(defn inputs
  "`n` inputs of `arity` scalars, uniform in [-3, 3), from a fixed seed."
  [arity n seed]
  (let [rng (Random. seed)]
    (vec (repeatedly n (fn [] (vec (repeatedly arity #(- (* 6.0 (.nextDouble rng)) 3.0))))))))

(defn grid-inputs
  "A full `width` by `width` MathBox grid on [-3, 3] in row-major order."
  [width]
  (vec (for [j (range width)
             i (range width)]
         [(+ -3.0 (* 6.0 (/ i (dec width))))
          (+ -3.0 (* 6.0 (/ j (dec width))))])))

;; ## Stats

(defn median [xs]
  (let [v (vec (sort xs))]
    (nth v (quot (count v) 2))))

(defn- ms-since [t0]
  (/ (- (System/nanoTime) t0) 1e6))

(defn- time-ms
  "Median wall time of `reps` calls of `thunk`, in ms."
  [reps thunk]
  (median (repeatedly reps #(let [t0 (System/nanoTime)] (thunk) (ms-since t0)))))

;; ## Boundary: build cost, payload, node run

(def ^:private wasm-bytes*
  "raster's uncached define + compile, so every timing is a real compile."
  @#'raster/wasm-bytes*)

(defn- js-compile [{:keys [f params init opts]}]
  (xc/compile-state-fn f params init (assoc opts :mode :js :cache? false)))

(defn- raster-compile [{:keys [f params init opts]}]
  (wasm-bytes* (lower/kernel-form (gensym "bench") (plan/plan f params init opts))))

(defn build-costs
  "Median ms of the :js compile and of the whole raster pipeline."
  [c reps]
  {:js-ms     (time-ms reps #(js-compile c))
   :raster-ms (time-ms reps #(raster-compile c))})

(defn node-case
  "The node runner's config for case `c` on `xs`."
  [{:keys [id f params init opts param-values]} xs]
  (let [p        (plan/plan f params init opts)
        js-form  (binding [vc/*backend* :js] (vc/compiled-fn f params init opts))
        r-form   (binding [vc/*backend* :raster] (vc/compiled-fn f params init opts))
        [[_ _ adapter] [_ & js-fb]] js-form
        [[_ _ glue] [_ & fb]] r-form
        mod      (raster/module p)]
    {:node    {:id (name id)
               :convention (name (:convention p))
               :nOut (count (:outputs p))
               :jsArgs (vec (butlast js-fb))
               :jsBody (last js-fb)
               :adapter adapter
               :glue glue
               :params (vec (or param-values []))
               :inputs xs}
     :payload {:js-chars (count (pr-str js-form))
               :raster-chars (count (pr-str r-form))
               :wasm-bytes (alength ^bytes mod)
               :outputs (count (:outputs p))}}))

(defn run-node!
  "Runs the node runner on `node-cases`; returns its parsed output."
  [node-cases {:keys [trials min-trial-ms]}]
  (let [cfg (java.io.File/createTempFile "raster-bench" ".json")]
    (spit cfg (json/write-str {:trials trials :minTrialMs min-trial-ms :cases node-cases}))
    (let [{:keys [exit out err]} (sh/sh "node" "bench/emmy/viewer/raster/bench_runner.mjs" (str cfg))]
      (io/delete-file cfg true)
      (when-not (zero? exit)
        (throw (ex-info (str "node runner failed: " err) {})))
      (json/read-str out :key-fn keyword))))

;; ## Report

(defn- fmt [x] (format "%.1f" (double x)))

(defn table-rows [results]
  (for [{:keys [id build payload runtime max-abs-diff]} results
        :let [{:keys [js js-batch raster raster-batch]} (:variants runtime)]]
    {"case"                (name id)
     "js ns/pt"            (fmt (:median js))
     "js batch ns/pt"      (fmt (:median js-batch))
     "raster ns/pt"        (fmt (:median raster))
     "raster batch ns/pt"  (fmt (:median raster-batch))
     "build js/raster ms"  (str (fmt (:js-ms build)) " / " (fmt (:raster-ms build)))
     "payload js/raster"   (str (:js-chars payload) " / " (:raster-chars payload))
     "max |raster-js|"     (format "%.1e" (double max-abs-diff))}))

(defn run
  "Runs every case; returns the results."
  [{:keys [n-inputs build-reps] :as opts}]
  ;; Warm the JVM side once, so the first case does not pay class loading.
  (build-costs (first cases) 1)
  (let [prepared (mapv (fn [c]
                         (let [xs (if-let [width (:grid-width c)]
                                    (grid-inputs width)
                                    (inputs (:arity c) n-inputs 42))]
                           (merge (node-case c xs)
                                  {:id (:id c) :doc (:doc c)
                                   :build (build-costs c build-reps)})))
                       cases)
        out      (run-node! (mapv :node prepared) opts)]
    {:node (:node out)
     :jvm (System/getProperty "java.version")
     :opts opts
     :results (mapv (fn [p r] (-> (dissoc p :node)
                                  (assoc :runtime (select-keys r [:variants])
                                         :max-abs-diff (:maxAbsDiff r))))
                    prepared (:cases out))}))

(defn -main [& _]
  (let [opts   {:n-inputs 1024 :build-reps 5 :trials 15 :min-trial-ms 40}
        report (run opts)
        file   (io/file "bench/results/latest.edn")]
    (io/make-parents file)
    (spit file (with-out-str (pp/pprint report)))
    (println "JVM" (:jvm report) "· node" (:node report))
    (pp/print-table (table-rows (:results report)))
    (println "\nwrote" (str file))
    (shutdown-agents)))
