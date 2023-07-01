^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.double-ellipsoid
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare abs
             numerator denominator ref partial infinite?])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.leva :as leva]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]
            [examples.simulation.ellipsoid :as ell]
            [emmy.mathbox.physics]
            [emmy.viewer.physics]
            [nextjournal.clerk :as clerk]))

{::clerk/width :wide}

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; ## Ellipsoid with Two

(defn elliptical->rect* [a b c]
  (let [xform (map (ell/elliptical->rect a b c))]
    (partial into (up) xform)))

(defn e->r* [a b c]
  (comp (elliptical->rect* a b c)
        coordinate))

;; Next, the Lagrangian:

(defn U [k x0]
  (fn [[_ [x1 x2]]]
    (let [diff (abs (- x2 x1))]
      (* 1/2 k (square (- diff x0))))))

(defn L-central-triaxial [m k x0 a b c]
  (comp (- (ell/L-free-particle m)
           (U k x0))
        (F->C (e->r* a b c))))

;; Final Demo:

(let [initial-state [0
                     [[0.1 0.1] [2 2]]
                     [[0.3 0.3] [0 0]]]]
  (ev/with-let [!state {:state initial-state}
                !opts {:m 10 :a 2 :b 1 :c 1 :k 10 :x0 0.3}]
    (plot/scene
     {:threestrap {:plugins ["core" "controls" "cursor" "stats"]}}
     (leva/controls {:atom !opts})

     (emmy.viewer.physics/evolve
      {:atom !state
       :initial-state initial-state
       :f' (ev/with-params {:atom !opts :params [:m :k :x0 :a :b :c]}
             (comp Lagrangian->state-derivative
                   L-central-triaxial))})

     (emmy.mathbox.physics/comet
      {:length 16
       :initial-state initial-state
       :atom !state
       :state->xyz
       (ev/with-params {:atom !opts :params [:a :b :c]}
         (comp (partial comp first) e->r*))})

     (emmy.mathbox.physics/comet
      {:length 16
       :initial-state initial-state
       :atom !state
       :state->xyz
       (ev/with-params {:atom !opts :params [:a :b :c]}
         (comp (partial comp second) e->r*))})

     (plot/parametric-surface
      {:opacity 0.2
       :color "LimeGreen"
       :u-lines 20
       :v-lines 20
       :f (ev/with-params {:atom !opts :params [:a :b :c]}
            ell/elliptical->rect)
       :u [0 Math/PI]
       :v [0 (* 2 Math/PI)]}))))
