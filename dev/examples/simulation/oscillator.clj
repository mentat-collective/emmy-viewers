^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.oscillator
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare abs
             numerator denominator ref partial infinite?])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.leva :as leva]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]
            [emmy.mathbox.physics]
            [emmy.viewer.physics]
            [nextjournal.clerk :as clerk]))

{::clerk/width :wide}

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; ## Oscillator
;;
;; This is the Lagrangian for a harmonic oscillator, continued on from the
;; presentation.

(defn L-harmonic [g m k]
  (fn [[_ [_ _ z :as q] v]]
    (let [T (* 1/2 m (square v))
          U (+ (* 1/2 k (square q))
               (* g m z))]
      (- T U))))

(let [initial-state [0 [1 2 0] [2 0 4]]]
  (ev/with-let [!state {:state initial-state}
                !opts  {:m 10 :k 200 :g 9.8}]
    (plot/scene
     (leva/controls {:atom !opts})

     (emmy.viewer.physics/evolve-lagrangian
      {:atom !state
       :L (ev/with-params {:atom !opts :params [:g :m :k]}
            L-harmonic)
       :initial-state initial-state})

     (emmy.mathbox.physics/comet
      {:length        10
       :state->xyz    coordinate
       :initial-state initial-state
       :atom          !state}))))

;; ## Equations of Motion:

^{::clerk/visibility :hide}
(clerk/with-viewer ec/multiviewer
  (let [L (L-harmonic 'g 'm 'k)
        x (e/literal-function 'x)
        y (e/literal-function 'y)
        z (e/literal-function 'z)]
    (((e/Lagrange-equations L) (up x y z))
     't)))
