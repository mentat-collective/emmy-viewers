^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.double-ellipsoid
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial infinite?])
  (:require [emmy.env :as e :refer :all]
            [examples.simulation.ellipsoid :as ell]
            [mathbox.core :as-alias mathbox]
            [mathbox.primitives :as-alias mb]
            #_[mentat.clerk-utils.viewers :refer [q]]
            #_[nextjournal.clerk :as clerk]
            [nextjournal.clerk.viewer :as-alias viewer]))

;; ## Ellipsoid with Two

(defn elliptical->rect [a b c]
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
        (F->C (elliptical->rect a b c))))

;; Final Demo:
#_
(clerk/with-viewer
  {:transform-fn pv/physics-xform
   :render-fn
   (q
    (fn [value]
      (viewer/html
       [mathbox/MathBox ~pv/opts
        [mb/Cartesian (:cartesian value)
         [mb/Axis {:axis 1 :width 3}]
         [mb/Axis {:axis 2 :width 3}]
         [mb/Axis {:axis 3 :width 3}]
         [demo.mathbox/Ellipse (:ellipse value)]
         [demo.mathbox/DoubleMass
          (select-keys value [:L :state->xyz :initial-state])]]])))}

  (let [m 10 a 2 b 1 c 1]
    {:state->xyz (elliptical->rect a b c)
     :L          (L-central-triaxial m a b c)
     :initial-state [0 [0.1 0.1 2 2]
                     [0.3 0.3 0 0]]
     :ellipse {:a a :b b :c c}
     :cartesian
     {:range [[-10 10]
              [-10 10]
              [-10 10]]
      :scale [3 3 3]}}))

;; ### The equations of Motion are too extreme!
