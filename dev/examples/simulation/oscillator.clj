^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.oscillator
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial infinite?])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.expression.compile :as xc]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]
            [examples.expression :as d]
            [mentat.clerk-utils.viewers :refer [q]]
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


(def m 10)
(def k 200)
(def g 9.8)

(let [state->xyz coordinate
      L L-harmonic
      params [g m k]
      initial-state [0 [1 2 0] [2 0 4]]]
  (ev/with-let
    [!state {:time 0 :state initial-state}]
    (plot/scene
     (q
      [emmy.viewer.physics/Evolve
       (reagent.core/with-let
         [f' (apply js/Function
                    ~(xc/compile-state-fn
                      (compose e/Lagrangian->state-derivative L)
                      params
                      initial-state
                      {:mode :js
                       :calling-convention :primitive
                       :generic-params? false}))]
         {:f' f'
          :atom ~!state})])
     (q
      (reagent.core/with-let
        [state->xyz
         (apply js/Function
                ~(xc/compile-state-fn
                  state->xyz false initial-state
                  {:mode :js
                   :calling-convention :primitive}))]
        [emmy.mathbox.components.physics/Comet*
         {:state->xyz (fn [in out]
                        (state->xyz in out nil))
          :atom ~!state}])))))

;; ## Equations of Motion:

^{::clerk/visibility :hide}
(clerk/with-viewer d/multiviewer
  (let [L (L-harmonic 'g 'm 'k)
        x (e/literal-function 'x)
        y (e/literal-function 'y)
        z (e/literal-function 'z)]
    (((e/Lagrange-equations L) (up x y z))
     't)))
