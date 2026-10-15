(ns emmy.mathbox.plot-polar-test
  (:require [clojure.test :refer [deftest is testing]]
            [emmy.env :as e]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]))

(defn- component-opts
  "Returns the options map of the first `PolarCurve` component vector found in
  `form`, or nil."
  [form]
  (some (fn [x]
          (when (and (vector? x)
                     (= 'emmy.mathbox.components.plot/PolarCurve (first x)))
            (second x)))
        (tree-seq coll? seq form)))

(defn- js-functions
  "Returns every `(js/Function. ...)` constructor form nested in `form`."
  [form]
  (filter #(and (seq? %) (= 'js/Function. (first %)))
          (tree-seq coll? seq form)))

(deftest polar-curve-test
  (testing "compiles `:r` to a js/Function bound by reagent's with-let"
    (let [frag (plot/polar-curve
                {:r (fn [theta] (e/* 2 (e/cos theta)))
                 :color "red"
                 :range [0 Math/PI]})
          [op [sym ctor] [component opts]] frag]
      (is (= 'reagent.core/with-let op))
      (is (symbol? sym))
      (is (seq (js-functions ctor))
          "the compiled form constructs a js/Function.")
      (is (some #(re-find #"Math\.cos" (last %)) (js-functions ctor))
          "the compiled body evaluates the radius function.")
      (is (= 'emmy.mathbox.components.plot/PolarCurve component))
      (is (= {:r sym :color "red" :range [0 Math/PI]} opts)
          "`:r` is replaced by the compiled symbol, other options pass through.")
      (is (= plot/scene (:nextjournal.clerk/viewer (meta frag)))
          "the fragment renders inside a default scene.")))

  (testing "a quoted symbol for `:r` passes through uncompiled"
    (is (= {:r 'my-r}
           (component-opts (plot/polar-curve {:r 'my-r})))))

  (testing "parametrized `:r` compiles to a fn over the atom's params"
    (let [frag (ev/with-let [!state {:k 2}]
                 (plot/polar-curve
                  {:r (ev/with-params {:atom !state :params [:k]}
                        (fn [k]
                          (fn [theta] (e/cos (e/* k theta)))))}))
          r    (:r (component-opts frag))]
      (is (seq? r) "`:r` becomes a quoted form wrapping the compiled fn."))))
