(ns emmy.viewer.kernel-test
  (:require [cljs.test :refer [deftest is testing]]
            [emmy.viewer.kernel :as kernel]))

(defn stub-kernel []
  (let [f (fn [state ps] (+ (first state) (first ps)))]
    (set! (.-dims f) #js {:state 1 :outputs 1 :params 1})
    (set! (.-ready f) (fn [] true))
    (set! (.-batch f)
          (fn [xs n ps out]
            (let [out (or out (js/Float64Array. n))]
              (dotimes [i n]
                (aset out i (+ (aget xs i) (first ps))))
              out)))
    f))

(deftest kernel-contract-test
  (let [k (stub-kernel)
        xs (js/Float64Array. #js [1 2 3])
        out (js/Float64Array. 3)]
    (is (kernel/kernel? k))
    (is (not (kernel/kernel? (fn [s _] s))))
    (is (not (kernel/kernel? nil)))
    (is (kernel/ready? k))
    (is (= {:state 1 :outputs 1 :params 1} (kernel/dims k)))
    (is (identical? out (kernel/batch! k xs 3 [10] out)))
    (is (= [11 12 13] (vec (array-seq out))))
    (is (= [11 12 13] (vec (array-seq (kernel/batch! k xs 3 [10] nil)))))))

(deftest bound-kernel-test
  (let [k (stub-kernel)
        xs (js/Float64Array. #js [1 2 3])]
    (doseq [[label g point] [["structured" (kernel/bind k [10]) [2]]
                             ["scalar" (kernel/bind-1d k [10]) 2]]]
      (testing label
        (is (fn? g))
        (is (= 12 (g point)))
        (is (kernel/kernel? g))
        (is (kernel/ready? g))
        (is (= (kernel/dims k) (kernel/dims g)))
        (is (= [11 12 13]
               (vec (array-seq (kernel/batch! g xs 3 [:ignored] nil)))))
        (let [out (js/Float64Array. 3)]
          (is (identical? out (kernel/batch! g xs 3 nil out))))))))

(deftest grid-points-test
  (is (= [1 10 4 10 1 20 4 20 1 30 4 30]
         (vec (array-seq
               (kernel/grid-points [1 4] [10 30] 2 3 vector)))))
  (is (= [2 9 2 12]
         (vec (array-seq
               (kernel/grid-points [2 8] [9 12] 1 2 vector)))))
  (is (= [10 1 10 4 20 1 20 4]
         (vec (array-seq
               (kernel/grid-points [1 4] [10 20] 2 2
                                   (fn [x y] [y x])))))))

(deftest batched-area-expr-test
  (let [calls (atom 0)
        ready (atom true)
        k (fn [[x y] ps] (+ x (* 10 y) (or ps 0)))
        _ (set! (.-dims k) #js {:state 2 :outputs 1 :params 1})
        _ (set! (.-ready k) (fn [] @ready))
        _ (set! (.-batch k)
                (fn [xs n ps out]
                  (swap! calls inc)
                  (dotimes [idx n]
                    (aset out idx (+ (aget xs (* 2 idx))
                                     (* 10 (aget xs (inc (* 2 idx))))
                                     (or ps 0))))
                  out))
        expr (kernel/batched-area-expr
              k 7 {:x-range [1 3] :y-range [2 4]
                   :width 3 :height 2 :input vector
                   :emit (fn [emit x y v] (emit x y v))})
        run-grid (fn []
                   (let [emitted (atom [])]
                     (doseq [j (range 2) i (range 3)]
                       (let [x (+ 1 i) y (+ 2 (* 2 j))]
                         (expr (fn [& coords] (swap! emitted conj (vec coords)))
                               x y i j 0)))
                     @emitted))
        expected (vec (for [j (range 2) i (range 3)
                            :let [x (+ 1 i) y (+ 2 (* 2 j))]]
                        [x y (k [x y] 7)]))]
    (is (= expected (run-grid)))
    (is (= 1 @calls))
    (is (= expected (run-grid)))
    (is (= 2 @calls))
    (reset! ready false)
    (is (= expected (run-grid)))
    (is (= 2 @calls))))

(deftest bound-plain-function-test
  (let [f (fn [state ps] (+ (first state) (first ps)))
        g (kernel/bind f [10])
        scalar (kernel/bind-1d f [10])]
    (is (= 12 (g [2])))
    (is (= 12 (scalar 2)))
    (is (not (kernel/kernel? g)))
    (is (not (kernel/kernel? scalar)))))
