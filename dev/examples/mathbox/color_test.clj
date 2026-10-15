^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.mathbox.color-test
  #:nextjournal.clerk{:toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare numerator denominator ref partial
             infinite? abs])
  (:require [emmy.clerk :as ec]
            [emmy.leva]
            [emmy.env :as e :refer :all]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]))

{:nextjournal.clerk/width :wide}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; # Surface Colors
;;
;; Every surface accepts either a constant `:color` or a per-vertex
;; `:color-fn`. A `:color-fn` receives `[x y z u v]` (the vertex position and
;; the two surface inputs) and returns a number. `:color-range` maps that
;; number onto a `:color-map`.

;; ## Constant Color

(plot/scene
 (plot/of-xy
  {:color "LimeGreen"
   :z (fn [[x y]]
        (cos (* x y)))}))

;; ## Coloring by Height
;;
;; The `:temperature` map runs from blue (low) to red (high). The amplitude
;; slider updates both the surface and its colors.

(ev/with-let [!state {:amplitude 1}]
  (plot/scene
   (emmy.leva/controls {:atom !state})
   (plot/of-xy
    {:x-samples 128
     :y-samples 128
     :color-map :temperature
     :color-range [-3 3]
     :color-fn (fn [[_ _ z]] z)
     :z (ev/with-params {:atom !state :params [:amplitude]}
          (fn [amplitude]
            (fn [[x y]]
              (* amplitude
                 (cos (* x y))))))})))

;; ## Coloring by Parameter
;;
;; A parametric surface colored by its `u` input with the default `:rainbow`
;; map.

(plot/scene
 (plot/parametric-surface
  {:u [0 (* 2 Math/PI)]
   :v [-1 1]
   :color-fn (fn [[_ _ _ u]] u)
   :color-range [0 (* 2 Math/PI)]
   :f (fn [[u v]]
        (up (* (+ 2 (* (/ v 2) (cos (/ u 2)))) (cos u))
            (* (+ 2 (* (/ v 2) (cos (/ u 2)))) (sin u))
            (* (/ v 2) (sin (/ u 2)))))}))

;; ## Parametrized Colors
;;
;; `:color-fn` can be wrapped with `ev/with-params` too.

(ev/with-let [!state {:k 1}]
  (plot/scene
   (emmy.leva/controls {:atom !state})
   (plot/polar-surface
    {:z (fn [[r theta]] (* (/ r 2) (sin (* 2 theta))))
     :color-map :bluered
     :color-range [-1 1]
     :color-fn (ev/with-params {:atom !state :params [:k]}
                 (fn [k]
                   (fn [[x y]]
                     (sin (* k x y)))))})))
