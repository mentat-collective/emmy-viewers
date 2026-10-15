(ns emmy.viewer.kernel.schema-test
  "Kernel domain contracts, optional outside the :raster alias."
  (:require [clojure.test :refer [deftest is testing]]
            [emmy.env :as e]
            [emmy.viewer.kernel.backend :as backend]
            [emmy.viewer.kernel.plan :as plan]))

(defn- missing-dependency?
  "True when `e`, or any exception in its cause chain, is a FileNotFoundException:
  a namespace that is not on the classpath. Requiring a namespace whose own
  requires are missing raises a CompilerException wrapping one."
  [e]
  (boolean (some #(instance? java.io.FileNotFoundException %)
                 (take-while some? (iterate ex-cause e)))))

(def ^:private malli?
  (try (require 'emmy.viewer.kernel.schema 'malli.core)
       true
       (catch Exception e
         (when-not (missing-dependency? e) (throw e))
         (when (System/getenv "EMMY_VIEWERS_REQUIRE_RASTER")
           (throw (ex-info "malli not on the classpath (EMMY_VIEWERS_REQUIRE_RASTER is set)" {})))
         (println "[kernel.schema-test] malli not on the classpath (use -M:test:raster); skipping")
         false)))

(defn- sv [sym] @(requiring-resolve sym))
(defn- valid? [schema x] ((sv 'malli.core/validate) schema x))

(def ^:private sample-backend
  (reify backend/KernelBackend
    (kernel-form [_ _ _ _ _] '(fn [x] x))))

(deftest plans-conform
  (when malli?
    (doseq [[f params init opts]
            [[(fn [x] (e/* x (e/sin x))) false [0] {:calling-convention :native}]
             [(fn [a] (fn [[x y]] (e/* a x y))) '[a] [0 0] {}]
             [(fn [[u v]] (e/up u v)) false [0 0]
              {:calling-convention :primitive :generic-params? false}]]]
      (is (valid? (sv 'emmy.viewer.kernel.schema/Plan)
                  (plan/plan f params init opts))))))

(deftest domain-schemas
  (when malli?
    (is (= (into [:enum] plan/conventions)
           (sv 'emmy.viewer.kernel.schema/Convention)))
    (testing "backend is an open set"
      (let [schema (sv 'emmy.viewer.kernel.schema/Backend)]
        (is (valid? schema :unregistered))
        (is (valid? schema sample-backend))
        (is (not (valid? schema "raster")))))
    (testing "dims have nonnegative integer cardinalities"
      (let [schema (sv 'emmy.viewer.kernel.schema/Dims)]
        (is (valid? schema {:state 2 :outputs 1 :params 0}))
        (is (not (valid? schema {:state -1 :outputs 1 :params 0})))
        (is (not (valid? schema {:state 2 :outputs 1})))))))

(deftest scoped-instrumentation
  (when malli?
    ((sv 'emmy.viewer.kernel.schema/instrument!))
    (try
      (is (thrown? clojure.lang.ExceptionInfo
                   (plan/plan identity false [0] {:calling-convention :unknown})))
      (is (identical? sample-backend (backend/resolve-backend sample-backend)))
      (is (thrown? clojure.lang.ExceptionInfo
                   (backend/resolve-backend "not-a-backend")))
      (finally
        ((sv 'emmy.viewer.kernel.schema/unstrument!))))))
