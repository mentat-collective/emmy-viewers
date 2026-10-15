(ns emmy.viewer.raster.schema-test
  "The raster backend's malli contracts: real plans conform, every function
  schema holds under scoped instrumentation, and glue is total over generated
  plans. Needs malli (the `:raster` alias); skips without it."
  (:require [clojure.string :as str]
            [clojure.test :refer [deftest is testing]]
            [emmy.env :as e]
            [emmy.viewer.raster.glue :as glue]
            [emmy.viewer.raster.lower :as lower]
            [emmy.viewer.kernel.plan :as plan]))

(defn- missing-dependency?
  "True when `e`, or any exception in its cause chain, is a FileNotFoundException:
  a namespace that is not on the classpath. Requiring a namespace whose own
  requires are missing raises a CompilerException wrapping one."
  [e]
  (boolean (some #(instance? java.io.FileNotFoundException %)
                 (take-while some? (iterate ex-cause e)))))

(def ^:private malli?
  (try (require 'emmy.viewer.raster.schema 'malli.core 'malli.generator)
       true
       (catch Exception e
         (when-not (missing-dependency? e) (throw e))
         (when (System/getenv "EMMY_VIEWERS_REQUIRE_RASTER")
           (throw (ex-info "malli not on the classpath (EMMY_VIEWERS_REQUIRE_RASTER is set)" {})))
         (println "[schema-test] malli not on the classpath (use -M:test:raster); skipping")
         false)))

(defn- sv
  "The var `sym` of the schema namespace, resolved at run time so this file
  loads without malli."
  [sym]
  @(requiring-resolve sym))

(defn- valid? [schema x] ((sv 'malli.core/validate) schema x))

(defn- explain [schema x]
  ((sv 'malli.error/humanize) ((sv 'malli.core/explain) schema x)))

(def ^:private cases
  "Real functions in every calling convention, as the viewers compile them."
  [[(fn [x] (e/* x (e/sin x))) false [0] {:calling-convention :native}]
   [(fn [t] (e/up (e/cos t) (e/sin t))) false [0] {:calling-convention :native}]
   [(fn [a] (fn [[x y]] (e/* a x y))) '[a] [0 0] {}]
   [(fn [[u v]] (e/up u v (e/* u v))) false [0 0]
    {:calling-convention :primitive :generic-params? false}]])

(deftest plans-conform
  (when malli?
    (doseq [[f params init opts] cases
            :let [p (plan/plan f params init opts)]]
      (is (valid? (sv 'emmy.viewer.kernel.schema/Plan) p)
          (pr-str (explain (sv 'emmy.viewer.kernel.schema/Plan) p))))))

(deftest convention-enum-derives-from-the-domain
  (when malli?
    (is (= (into [:enum] plan/conventions)
           (sv 'emmy.viewer.kernel.schema/Convention)))))

(deftest backend-stays-open
  (when malli?
    (testing "a backend nobody has registered yet is still a valid Backend"
      (is (valid? (sv 'emmy.viewer.kernel.schema/Backend) :gpu)))))

(deftest function-schemas-hold-under-instrumentation
  (when malli?
    ((sv 'emmy.viewer.raster.schema/instrument!))
    (try
      (doseq [[f params init opts] cases
              :let [p (plan/plan f params init opts)]]
        (is (seq? (lower/kernel-form 'k0 p)))
        (is (string? (glue/glue p "AA==" true))))
      (testing "a call outside the contract is refused"
        (is (thrown? clojure.lang.ExceptionInfo
                     (glue/glue {:convention :nope} "AA==" true))))
      (finally
        ((sv 'emmy.viewer.raster.schema/unstrument!))))))

(deftest glue-is-total-over-generated-plans
  (when malli?
    (let [generate (sv 'malli.generator/generate)
          plan-s   (sv 'emmy.viewer.kernel.schema/Plan)]
      (dotimes [seed 50]
        (let [p   (generate plan-s {:seed seed :size 6})
              src (glue/glue p "AA==" (even? seed))]
          (is (str/ends-with? src "return f;") (pr-str p)))))))
