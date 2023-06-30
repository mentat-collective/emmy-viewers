^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.oscillator
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial infinite?])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.leva :as leva]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]
            [examples.expression :as d]
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
  (ev/with-let   [!state {:time 0 :state initial-state}]
    (ev/with-let [!opts  {:m 10 :k 200 :g 9.8}]
      (plot/scene
       (leva/controls {:atom !opts})
       (emmy.viewer.physics/evolve
        {:atom !state
         :initial-state initial-state
         :f' (ev/with-params {:atom !opts :params [:g :m :k]}
               (comp e/Lagrangian->state-derivative L-harmonic))})
       (emmy.mathbox.physics/comet
        {:length 16
         :state->xyz    coordinate
         :initial-state initial-state
         :atom !state})))))

;; ## Equations of Motion:

^{::clerk/visibility :hide}
(clerk/with-viewer d/multiviewer
  (let [L (L-harmonic 'g 'm 'k)
        x (e/literal-function 'x)
        y (e/literal-function 'y)
        z (e/literal-function 'z)]
    (((e/Lagrange-equations L) (up x y z))
     't)))
