(ns emmy.mathbox.color-test
  (:require [clojure.test :refer [is deftest testing]]
            [emmy.mathbox.color :as color]))

(defn- approx= [xs ys]
  (and (= (count xs) (count ys))
       (every? true? (map (fn [x y] (< (abs (- x y)) 1e-9)) xs ys))))

(deftest hsl->rgb-test
  (is (approx= [1 0 0] (color/hsl->rgb 0 1 0.5)) "red")
  (is (approx= [0 1 0] (color/hsl->rgb (/ 1.0 3) 1 0.5)) "green")
  (is (approx= [0 0 1] (color/hsl->rgb (/ 2.0 3) 1 0.5)) "blue")
  (is (approx= [0.25 0.25 0.25] (color/hsl->rgb 0.4 0 0.25))
      "zero saturation is a gray at the given lightness"))

(deftest color-map-test
  (testing "built-in maps return rgb triples in [0, 1]"
    (doseq [[k f] color/color-maps
            frac  [0 0.25 0.5 0.75 1]]
      (let [rgb (f frac)]
        (is (= 3 (count rgb)) (str k))
        (is (every? #(<= 0 % 1) rgb) (str k " at " frac)))))

  (is (approx= [0 0 1] ((color/color-maps :bluered) 0)))
  (is (approx= [1 0 0] ((color/color-maps :bluered) 1)))
  (is (approx= [1 0 0] ((color/color-maps :temperature) 1)))

  (testing "->color-map"
    (is (= (color/color-maps :rainbow) (color/->color-map :rainbow)))
    (let [f (fn [_] [0 0 0])]
      (is (= f (color/->color-map f)) "functions pass through"))
    (is (thrown? #?(:clj Exception :cljs js/Error)
                 (color/->color-map :not-a-map)))))

(deftest normalize-test
  (is (== 0.5 (color/normalize [0 10] 5)))
  (is (== 0 (color/normalize [0 10] -3)) "clamps below")
  (is (== 1 (color/normalize [0 10] 30)) "clamps above")
  (is (== 0.25 (color/normalize [-1 1] -0.5)))
  (is (== 0 (color/normalize [2 2] 2)) "degenerate range"))

(deftest vertex-color-expr-test
  (let [expr    (fn [emit u v _i _j _t] (emit u v (* u v)))
        seen    (atom nil)
        cfn     (fn [xs]
                  (reset! seen (vec xs))
                  (aget xs 2))
        out     (atom nil)
        emit    (fn [& rgba] (reset! out (vec rgba)))
        color-f (color/vertex-color-expr expr cfn :bluered [0 4])]
    (color-f emit 1 2 0 0 0)
    (is (= [1 2 2 1 2] (mapv int @seen))
        "color-fn receives [x y z u v]")
    (is (approx= [0.5 0 0.5 1] @out)
        "z = 2 maps halfway through [0 4], alpha 1")))
