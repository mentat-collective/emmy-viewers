(ns emmy.viewer.compile-test
  (:require [clojure.test :refer [deftest is testing]]
            [emmy.env :as e]
            [emmy.viewer :as v]
            [emmy.viewer.compile :as vc]))

(defn- param-1d []
  (v/with-params {:atom 'state :params [:scale]}
    (fn [scale] (fn [x] (e/* scale x)))))

(defn- param-2d []
  (v/with-params {:atom 'state :params [:scale]}
    (fn [scale] (fn [[x y]] (e/* scale (e/+ x y))))))

(deftest parameter-bound-forms-test
  (testing "scalar input is vectorized by the browser kernel contract"
    (is (= '(emmy.viewer.kernel/bind-1d compiled (clojure.core/mapv (clojure.core/deref state) [:scale]))
           (second (vc/param-1d 'compiled (param-1d))))))
  (testing "two-dimensional input keeps its state vector"
    (is (= '(emmy.viewer.kernel/bind compiled (clojure.core/mapv (clojure.core/deref state) [:scale]))
           (second (vc/param-2d 'compiled (param-2d)))))))

(def ^:private backends
  "Backends this classpath compiles with; `:raster` needs the `:raster` alias."
  (into [:js]
        (when (try (require 'emmy.viewer.raster)
                   true
                   (catch Exception e
                     (if (some #(instance? java.io.FileNotFoundException %)
                               (take-while some? (iterate ex-cause e)))
                       false
                       (throw e))))
          [:raster])))

(deftest parameter-bindings-compile-test
  (doseq [backend backends]
    (testing (str backend " compiles parameter-bound 1d and 2d kernels")
      (binding [vc/*backend* backend]
        (doseq [[compile-fn param-f] [[vc/compile-1d (param-1d)]
                                     [vc/compile-2d (param-2d)]]]
          (let [[[sym form] opts] (compile-fn {:f param-f} :f)]
            (is (symbol? sym))
            (is (seq? form))
            (is (= 'js/Function. (ffirst form)))
            (is (seq? (:f opts)))))))))
