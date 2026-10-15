(ns emmy.mathbox.plot-implicit-test
  (:require [clojure.test :refer [deftest is testing]]
            [clojure.walk :as walk]
            [emmy.env :as e]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]))

(defn- forms [x]
  (let [acc (atom [])]
    (walk/postwalk (fn [f] (swap! acc conj f) f) x)
    @acc))

(defn- component-call
  "Returns the `[component opts]` vector inside a fragment's expanded form."
  [fragment component]
  (first (filter #(and (vector? %) (= component (first %)))
                 (forms (ev/expand fragment)))))

(deftest scalar->state-fn-test
  (let [g (plot/scalar->state-fn (fn [x y z] (+ x (* 2 y) (* 3 z))))]
    (is (= [14] (g [1 2 3]))))

  (testing "parametrized functions are adapted under their parameters"
    (let [pf (ev/with-params {:atom (atom {:k 2}) :params [:k]}
               (fn [k] (fn [x y z] (* k (+ x y z)))))
          g  (plot/scalar->state-fn pf)]
      (is (ev/param-f? g))
      (is (= [12] (((:f g) 2) [1 2 3])))))

  (testing "uncompilable inputs pass through"
    (is (= 'some-symbol (plot/scalar->state-fn 'some-symbol)))))

(deftest implicit-surface-test
  (let [frag (plot/implicit-surface
              {:f (fn [x y z] (e/+ (e/square x) (e/square y) (e/square z)))
               :level 1
               :samples 16
               :simplify? false})
        [_ opts] (component-call frag 'emmy.mathbox.components.plot/ImplicitSurface)]
    (testing "renders the ImplicitSurface component with the options intact"
      (is (some? opts))
      (is (= 1 (:level opts)))
      (is (= 16 (:samples opts)))
      (is (not (contains? opts :simplify?))))

    (testing "f is compiled to a JavaScript function"
      (is (some #(and (seq? %) (= 'js/Function. (first %)))
                (forms (ev/expand frag))))
      (is (not (fn? (:f opts)))
          "the component receives a compiled form, not a JVM function"))))
