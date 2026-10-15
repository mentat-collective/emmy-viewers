(ns emmy.viewer.raster.pure-test
  "The raster backend's pure layers (plan, lower, glue) and the :js parity of
  the backend seam. Needs neither raster nor malli."
  (:require [clojure.string :as str]
            [clojure.test :refer [deftest is testing]]
            [emmy.env :as e]
            [emmy.expression.compile :as xc]
            [emmy.mechanics.lagrange :as l]
            [emmy.viewer.compile :as vc]
            [emmy.viewer.raster.glue :as glue]
            [emmy.viewer.raster.lower :as lower]
            [emmy.viewer.kernel.plan :as plan]
            [emmy.viewer.kernel.backend :as backend]
            [emmy.viewer.kernel.adapter :as adapter]))

(deftest lower-test
  (testing "integer powers become products, so a negative base stays defined"
    (is (= '(* (* x x) x) (lower/lower '[x] '(expt x 3))))
    (is (= '(/ 1.0 (* x x)) (lower/lower '[x] '(expt x -2))))
    (is (= 1.0 (lower/lower '[x] '(expt x 0))))
    (is (= '(* x x) (lower/lower '[x] '(expt x 2.0)))))

  (testing "a fractional power goes to raster's pow"
    (is (= '(raster.numeric/pow x 0.5) (lower/lower '[x] '(expt x 1/2)))))

  (testing "variadic + and * nest into binary calls, literals become doubles"
    (is (= '(+ (+ 1.0 x) y) (lower/lower '[x y] '(+ 1 x y))))
    (is (= '(* 0.5 x) (lower/lower '[x] '(* 1/2 x))))
    (is (= '(- 0.0 x) (lower/lower '[x] '(- x)))))

  (testing "functions map to raster's, two-argument atan to atan2"
    (is (= '(raster.math/sin (raster.math/cos x))
           (lower/lower '[x] '(sin (cos x)))))
    (is (= '(raster.math/atan2 y x) (lower/lower '[x y] '(atan y x))))
    (is (= '(Math/sqrt x) (lower/lower '[x] '(sqrt x)))))

  (testing "what raster cannot compile is refused, naming the form"
    (is (thrown-with-msg? clojure.lang.ExceptionInfo #"cannot compile \(f x\)"
                          (lower/lower '[x] '(f x))))
    (is (thrown-with-msg? clojure.lang.ExceptionInfo #"cannot compile z"
                          (lower/lower '[x] '(+ x z))))))

(deftest shape-test
  (is (nil? (plan/shape 'x)))
  (is (= [0 1] (plan/shape (e/up 'a 'b))))
  (is (= [[0 1] 2] (plan/shape (e/up (e/up 'a 'b) 'c))))
  (is (= '[a b c] (plan/leaves (e/up (e/up 'a 'b) 'c)))))

(deftest adapter-source-test
  (doseq [[convention state-shape shape snippet]
          [[:native [0 1] [[0 1] 2] "fb(xs[r], xs[r + 1])"]
           [:structure [[0 1] 2] [0 1] "fb([[xs[r], xs[r + 1]], xs[r + 2]], ps)"]
           [:primitive [0 1] [0 1] "fb(row, res, ps)"]]]
    (let [src (adapter/adapter-source {:convention convention
                                       :state (vec (range (count (flatten state-shape))))
                                       :state-shape state-shape
                                       :outputs (vec (range (count (flatten shape))))
                                       :params '[p0] :shape shape})]
      (is (str/includes? src snippet))
      (is (str/includes? src "fb.ready = () => true;"))
      (is (str/includes? src "return fb;")))))

(deftest plan-test
  (testing "native calling convention, one argument"
    (let [p (plan/plan (fn [x] (e/* x (e/sin x))) false [0]
                       {:calling-convention :native})]
      (is (= :native (:convention p)))
      (is (= '[s0] (:state p)))
      (is (= [0] (:state-shape p)))
      (is (= [] (:params p)))
      (is (= '[(* s0 (sin s0))] (:outputs p)))
      (is (nil? (:shape p)))))

  (testing "a vector output becomes one output per component"
    (let [p (plan/plan (fn [t] (e/up (e/cos t) (e/sin t))) false [0]
                       {:calling-convention :native})]
      (is (= '[(cos s0) (sin s0)] (:outputs p)))
      (is (= [0 1] (:shape p)))))

  (testing "generic params come after the state"
    (let [p (plan/plan (fn [a] (fn [[x y]] (e/* a x y))) '[a] [0 0] {})]
      (is (= :structure (:convention p)))
      (is (= '[s0 s1] (:state p)))
      (is (= '[p0] (:params p)))
      (is (= '[(* p0 s0 s1)] (:outputs p)))))

  (testing "a structured state flattens depth first"
    (let [p (plan/plan (l/Lagrangian->state-derivative (l/L-harmonic 1 2))
                       false (e/up 0 0 0)
                       {:calling-convention :primitive :generic-params? false})]
      (is (= '[s0 s1 s2] (:state p)))
      (is (= '[1 s2 (* -2 s1)] (:outputs p)))))

  (testing "a scalar initial state has no state shape"
    (let [p (plan/plan identity false 0 {})]
      (is (contains? p :state-shape))
      (is (nil? (:state-shape p))))))

(deftest shared-test
  (testing "a subexpression shared by two outputs is bound once"
    (let [{:keys [bindings outputs]} (lower/shared '[(sin (* a x)) (cos (* a x))])]
      (is (= 1 (count bindings)))
      (is (= '(* a x) (second (first bindings))))
      (is (= (list 'sin (ffirst bindings)) (first outputs)))))
  (testing "constant bindings are substituted back, so exponents stay literal"
    (let [{:keys [bindings outputs]} (lower/shared '[(* (/ -1 4) (expt x 2)) (* (/ -1 4) (expt y 2))])]
      (is (empty? bindings))
      (is (= '(* (/ -1 4) (expt x 2)) (first outputs))))))

(deftest kernel-form-test
  (let [p    (plan/plan (fn [a] (fn [[x]] (e/up x (e/* a (e/expt x 2))))) '[a] [0] {})
        form (lower/kernel-form 'k0 p)]
    (testing "one batch kernel over (xs out ps n), returning n"
      (is (= '(raster.core/deftm k0
                [xs :- (Array double) out :- (Array double) ps :- (Array double) n :- Long]
                :- Long)
             (take 5 form))))
    (testing "params are read once, outside the point loop"
      (is (= '(let [p0 (aget ps 0)]) (take 2 (nth form 5)))))
    (testing "every output is written for each point, lowered"
      (let [body (pr-str form)]
        (is (re-find #"\(aset out \(\+ col 0\) s0\)" body))
        (is (re-find #"\(aset out \(\+ col 1\) \(\* p0 \(\* s0 s0\)\)\)" body))))))

(deftest glue-test
  (let [p {:convention :primitive :state '[s0 s1] :params '[p0]
           :outputs '[a b c] :shape [0 1 2]}]
    (testing "small modules load synchronously, large ones asynchronously"
      (is (str/includes? (glue/glue p "AA==" true) "new WebAssembly.Module"))
      (is (str/includes? (glue/glue p "AA==" false) "WebAssembly.instantiate")))
    (testing "a :primitive function writes inputs into memory and outputs back, one kernel call"
      (let [src (glue/glue p "AA==" true)]
        (is (str/includes? src "F[513] = ys[1];"))
        (is (str/includes? src "k(4096, 8388608, 0, 1);"))
        (is (str/includes? src "yps[2] = F[1048578];"))
        (is (str/includes? src "setPs(ps);"))
        (is (str/includes? src "f.batch = function(xs, n, ps, out)"))
        (is (str/includes? src "f.wasm = () => k !== null;"))
        (is (str/includes? src "f.ready = () => k !== null;"))
        (is (str/includes? src "f.dims = {state: 2, outputs: 3, params: 1};")))))
  (testing "a native function takes its arguments positionally and allocates only its result"
    (let [src (glue/glue {:convention :native :state '[s0] :params []
                          :outputs '[a b] :shape [0 1]}
                         "AA==" true)]
      (is (str/includes? src "function(s0)"))
      (is (str/includes? src "F[512] = s0;"))
      (is (str/includes? src "return [F[1048576], F[1048577]];"))
      (is (str/includes? src "f.dims = {state: 1, outputs: 2, params: 0};"))
      (is (str/includes? src "const f = function(s0) {\n  if (k === null) return fb(s0);\n  F[512] = s0;\n  k(4096, 8388608, 0, 1);")))))

(defrecord TestBackend []
  backend/KernelBackend
  (kernel-form [_ f params initial-state opts]
    [:custom f params initial-state opts]))

(deftest backend-test
  (let [f (fn [x] (e/* x (e/sin x)))
        opts {:calling-convention :native :arity 1}]
    (testing ":js decorates the original Emmy function without changing its source"
      (is (= :js vc/*backend*))
      (let [form (vc/compiled-fn f false [0] opts)]
        (is (= 'js/Function. (ffirst form)))
        (is (= "fb" (second (first form))))
        (is (= (list* 'js/Function.
                     (xc/compile-state-fn f false [0] (assoc opts :mode :js)))
               (second form)))))
    (testing "a backend value substitutes without registration"
      (let [b (->TestBackend)]
        (is (identical? b (backend/resolve-backend b)))
        (is (= [:custom f false [0] {}]
               (binding [vc/*backend* b] (vc/compiled-fn f false [0] {}))))))
    (testing "an open registry accepts new keyword backends"
      (try
        (backend/register-backend! :test-backend (->TestBackend))
        (is (= [:custom f false [0] {}]
               (binding [vc/*backend* :test-backend]
                 (vc/compiled-fn f false [0] {}))))
        (finally
          (backend/register-backend! :test-backend nil))))
    (testing "an unknown backend is refused"
      (is (thrown-with-msg? clojure.lang.ExceptionInfo #"Unknown compile backend :gpu"
                            (binding [vc/*backend* :gpu]
                              (vc/compiled-fn f false [0] {})))))))
