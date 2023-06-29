^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.double-ellipsoid
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial infinite?])
  (:require [emmy.env :as e :refer :all]
            [emmy.expression.compile :as xc]
            [examples.simulation.ellipsoid :as ell]
            [mathbox.core :as-alias mathbox]
            [mathbox.primitives :as-alias mb]
            [mentat.clerk-utils.show :refer [show-sci]]
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk.viewer :as viewer]))

;; ## Ellipsoid with Two

(defn elliptical->rect [_ a b c]
  (fn [[_ [theta phi theta2 phi2] _]]
    (up (* a (sin theta) (cos phi))
        (* b (sin theta) (sin phi))
        (* c (cos theta))
        (* a (sin theta2) (cos phi2))
        (* b (sin theta2) (sin phi2))
        (* c (cos theta2)))))

;; Next, the Lagrangian:

(defn L-central-triaxial [m a b c]
  (comp (- (ell/L-free-particle m)
           ;; POTENTIAL ENERGY TERM!!!!
           (fn [[_ [x1 y1 z1 x2 y2 z2]]]
             (let [k  10
                   x0 0.3
                   x  (abs
                       (- [x1 y1 z1]
                          [x2 y2 z2]))]
               (* (/ 1 2)
                  k
                  (square (- x x0))))))
        (F->C (elliptical->rect m a b c))))

;; Final Demo:

(show-sci
 ;; TODO make this generic?
 (defn Ellipse [{:keys [a b c]}]
   [:<>
    [mathbox.primitives/Area
     {:width 64
      :height 64
      :rangeX [0 (* 2 Math/PI)]
      :rangeY [0 (* 2 Math/PI)]
      :axes [1 3]
      :live false
      :expr (fn [emit theta phi _i _j _time]
              (let [sin-theta (Math/sin theta)
                    cos-theta (Math/cos theta)]
                ;; xzy
                (emit
                 (* a sin-theta (Math/cos phi))
                 (* b sin-theta (Math/sin phi))
                 (* c cos-theta))))
      :items 1
      :channels 3}]
    [mathbox.primitives/Surface
     {:shaded true
      :opacity 0.2
      :lineX true
      :lineY true
      :points "<"
      :color 0xffffff
      :width 1}]]))

^{:nextjournal.clerk/viewer
  {:transform-fn
   (comp viewer/mark-presented
         (viewer/update-val
          (fn [{:keys [L initial-state state->xyz params] :as m}]
            (assoc m
                   :L
                   (xc/compile-state-fn
                    (compose e/Lagrangian->state-derivative L)
                    params
                    initial-state
                    {:mode :js
                     :calling-convention :primitive
                     :generic-params? false})

                   :state->xyz
                   (xc/compile-state-fn
                    state->xyz
                    params
                    initial-state
                    {:mode :js
                     :calling-convention :primitive
                     :generic-params? false})))))
   :render-fn
   (q
    (fn [value]
      [mathbox.core/MathBox
       {:container  {:style {:height "400px" :width "100%"}}
        :threestrap {:plugins ["core" "controls" "cursor" "stats"]
                     :camera {:up [0 0 1]}}
        :renderer   {:background-color 0xffffff}}
       (reagent.core/with-let
         [!state (reagent.core/atom {:time 0 :state (:initial-state value)})]
         [:<>
          [examples.simulation.utils/Evolve
           {:f' (:L value)
            :atom   !state}]
          [mathbox.primitives/Cartesian (:cartesian value)
           [mathbox.primitives/Axis {:axis 1 :width 3}]
           [mathbox.primitives/Axis {:axis 2 :width 3}]
           [mathbox.primitives/Axis {:axis 3 :width 3}]
           [examples.simulation.utils/Comet
            {:dimensions 3
             :items 2
             :length 16
             :color 0x3090ff
             :size 10
             :opacity 0.99
             :path
             (let [[a b c d] (:state->xyz value)
                   render-fn (js/Function. a b c d)
                   out       (js/Array. 0 0 0 0 0 0)]
               (fn [emit]
                 (-> (:state (.-state !state))
                     (render-fn out nil))
                 (emit (aget out 0)
                       (aget out 1)
                       (aget out 2))
                 (emit (aget out 3)
                       (aget out 4)
                       (aget out 5))))}]
           [Ellipse (:ellipse value)]]])]))}}
(let [m 10 a 2 b 1 c 1]
  {:state->xyz elliptical->rect
   :L L-central-triaxial
   :params [m a b c]
   :initial-state [0 [0.1 0.1 2 2]
                   [0.3 0.3 0 0]]
   :ellipse {:a a :b b :c c}
   :cartesian
   {:range [[-10 10]
            [-10 10]
            [-10 10]]
    :scale [3 3 3]}})

;; ### The equations of Motion are too extreme!
