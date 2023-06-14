^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.oscillator
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial])
  (:require [emmy.expression.compile :as xc]
            [examples.expression :as d]
            [mathbox.core :as-alias mathbox]
            [mathbox.primitives :as-alias mb]
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.viewer :as-alias viewer]
            [emmy.env :as e :refer :all]))

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

;; TODO note that we have some weird missing newlines.

(def m 10)
(def k 200)
(def g 9.8)

^{::clerk/viewer
  {:transform-fn
   (comp clerk/mark-presented
         (clerk/update-val
          (fn [{:keys [L params initial-state state->xyz] :as m}]
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
                    state->xyz false initial-state
                    {:mode :js
                     :calling-convention :primitive})))))
   :render-fn
   (q
    (fn [value]
      [mathbox/MathBox
       {:container  {:style {:height "400px" :width "100%"}}
        :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
        :renderer   {:background-color 0xffffff}}
       [mb/Cartesian (:cartesian value)
        [mb/Axis {:axis 1 :width 3}]
        [mb/Axis {:axis 2 :width 3}]
        [mb/Axis {:axis 3 :width 3}]
        [emmy.mathbox.physics/Mass
         (select-keys
          value [:L :state->xyz :initial-state :params])]]]))}}
{:state->xyz coordinate
 :L L-harmonic
 :params [g m k]
 :initial-state [0
                 [1 2 0]
                 [2 0 4]]
 :cartesian
 {:range [[-10 10]
          [-10 10]
          [-10 10]]
  :scale [3 3 3]}}

;; ## Equations of Motion:

^{::clerk/visibility :hide}
(clerk/with-viewer d/multiviewer
  (let [L (L-harmonic 'g 'm 'k)
        x (e/literal-function 'x)
        y (e/literal-function 'y)
        z (e/literal-function 'z)]
    (((e/Lagrange-equations L) (up x y z))
     't)))
