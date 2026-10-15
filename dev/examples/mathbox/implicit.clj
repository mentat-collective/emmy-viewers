^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.mathbox.implicit
  #:nextjournal.clerk{:toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare numerator denominator ref partial
             infinite? abs])
  (:require [emmy.clerk :as ec]
            [emmy.leva :as leva]
            [emmy.env :as e :refer :all]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]))

{:nextjournal.clerk/width :wide}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; # Implicit Surfaces
;;
;; `plot/implicit-surface` draws the level set `f(x, y, z) = level` of a scalar
;; function of three variables. The surface is found with marching cubes: `f` is
;; sampled on a grid spanning `:x-range`, `:y-range` and `:z-range`, and each
;; grid cell is triangulated where `f` crosses the level.
;;
;; ## Sphere
;;
;; The unit sphere is the level set `x² + y² + z² = 1`:

(defn sphere [x y z]
  (+ (square x) (square y) (square z)))

(plot/scene
 {:range [[-1.5 1.5] [-1.5 1.5] [-1.5 1.5]]}
 (plot/implicit-surface
  {:f sphere
   :level 1
   :x-range [-1.5 1.5]
   :y-range [-1.5 1.5]
   :z-range [-1.5 1.5]
   :samples 24
   :color "#3090ff"}))

;; ## Torus
;;
;; A torus with tube radius `r` around a circle of radius `R` is the zero set
;; of `(√(x² + y²) - R)² + z² - r²`. Emmy functions compile to JavaScript like
;; every other plot input, so `sqrt` and friends are fine:

(defn torus [R r]
  (fn [x y z]
    (- (+ (square (- (sqrt (+ (square x) (square y))) R))
          (square z))
       (square r))))

(plot/scene
 {:range [[-3 3] [-3 3] [-3 3]]}
 (plot/implicit-surface
  {:f (torus 2 0.75)
   :x-range [-3 3]
   :y-range [-3 3]
   :z-range [-1 1]
   :samples [40 40 16]
   :color "Salmon"}))

;; ## Moving the level
;;
;; With `ev/with-params` the function, and with `ev/get` the level, can track a
;; Leva control. The level sets of this "tangle cube" change topology as the
;; level slides:

(ev/with-let [!state {:level 0 :a 5}]
  (plot/scene
   {:range [[-3 3] [-3 3] [-3 3]]}
   (leva/controls
    {:atom !state
     :schema {:level {:min -2 :max 6 :step 0.1}
              :a {:min 3 :max 7 :step 0.1}}})
   (plot/implicit-surface
    {:f (ev/with-params {:atom !state :params [:a]}
          (fn [a]
            (fn [x y z]
              (+ (- (expt x 4) (* a (square x)))
                 (- (expt y 4) (* a (square y)))
                 (- (expt z 4) (* a (square z)))
                 11.8))))
     :level (ev/get !state :level)
     :x-range [-3 3]
     :y-range [-3 3]
     :z-range [-3 3]
     :samples 28
     :color "#7fd28c"})))
