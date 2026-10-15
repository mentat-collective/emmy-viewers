(ns emmy.mathbox.plot-color-test
  (:require [clojure.test :refer [is deftest testing]]
            [emmy.env :as e]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]))

(defn- js-fn? [form]
  (and (seq? form) (= 'js/Function. (first form))))

(deftest compile-color-fn-test
  (testing "absent or non-compilable :color-fn is left alone"
    (is (= [[] {:color "red"}]
           (plot/compile-color-fn {:color "red"})))
    (is (= [[] {:color-fn 'my-fn}]
           (plot/compile-color-fn {:color-fn 'my-fn}))))

  (testing "a plain function compiles to a js/Function of [x y z u v]"
    (let [[[sym body] opts] (plot/compile-color-fn
                             {:color-fn (fn [[_ _ z u _]] (e/* z u))})]
      (is (symbol? sym))
      (is (js-fn? body))
      (is (= 5 (count (re-seq #"y\d+" (second body))))
          "the compiled function takes five inputs")
      (is (= sym (:color-fn opts)))))

  (testing "a with-params function closes over the atom's params"
    (let [[[_ body] opts] (plot/compile-color-fn
                           {:color-fn (ev/with-params {:atom '!state :params [:k]}
                                        (fn [k] (fn [[_ _ z]] (e/* k z))))})]
      (is (js-fn? body))
      (is (seq? (:color-fn opts)))
      (is (some #{'!state} (flatten (:color-fn opts)))))))

(deftest surface-color-fn-wiring-test
  (doseq [[label frag]
          [[:of-xy (plot/of-xy {:z (fn [[x y]] (e/* x y))
                                :color-fn (fn [[_ _ z]] z)})]
           [:of-xz (plot/of-xz {:y (fn [[x z]] (e/* x z))
                                :color-fn (fn [[_ y]] y)})]
           [:of-yz (plot/of-yz {:x (fn [[y z]] (e/* y z))
                                :color-fn (fn [[x]] x)})]
           [:polar-surface (plot/polar-surface {:z (fn [[r _]] r)
                                                :color-fn (fn [[_ _ _ u]] u)})]
           [:parametric-surface (plot/parametric-surface
                                 {:f (fn [[u v]] (e/up u v (e/* u v)))
                                  :u [-1 1] :v [-1 1]
                                  :color-fn (fn [[_ _ _ _ v]] v)})]]]
    (let [[head bindings [_component opts]] frag]
      (is (= 'reagent.core/with-let head) (str label))
      (is (= 4 (count bindings)) (str label " binds the surface and color fns"))
      (is (= (nth bindings 2) (:color-fn opts))
          (str label " passes the compiled color fn to the component")))))
