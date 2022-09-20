^{:nextjournal.clerk/visibility :hide-ns}
(ns live-oscillator
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial])
  (:require [demo :as d]
            [nextjournal.clerk :as clerk]
            [pattern.rule :refer [template]]
            [physics-viewers :as pv]
            [sicmutils.env :as e :refer :all]))

;; ## Oscillator Communication btw Server, Client
;;
;; This was a fun thing I thought would never work, but whipped up yesterday.
;; Consider this a copy-paste clone of `oscillator.clj`.
;;
;; We have a Lagrangian:

(defn L-harmonic-gravity [m k g]
  (fn [[_ [_ _ z :as q] v]]
    (let [T (* 1/2 m (square v))
          U (+ (* 1/2 k (square q))
               (* g m z))]
      (- T U))))

;; And some settings:

(def m 100)
(def k 200)
(def g 9.8)

;; Here's the initial state of our simulation.

(def init-state
  {:state->xyz coordinate
   :L (L-harmonic-gravity m k g)
   :initial-state [0
                   [1 2 0]
                   [2 0 4]]
   :cartesian
   {:range {:x [-10 10]
            :y [-10 10]
            :z [-10 10]}
    :scale [3 3 3]}})

;; Now we have the interactive physics viewer, which has a nice surprise for us.

^{::clerk/viewer
  {:transform-fn (pv/interactive-physics-xform
                  (pv/physics-xform-fn init-state))
   :render-fn
   (template
    (fn [{:keys [var-name value]}]
      (v/html
       ;; mbr here is MY wrapper, and `box` is the original mathbox.
       [mb/Mathbox ~pv/opts
        [mb/Cartesian (:cartesian value)
         [box/Axis {:axis 1 :width 3}]
         [box/Axis {:axis 2 :width 3}]
         [box/Axis {:axis 3 :width 3}]
         [mb/Mass
          (-> value
              (select-keys [:L :state->xyz :initial-state])
              (assoc :var-name var-name))]]])))}}
(defonce oscillator-state
  (atom
   (:initial-state init-state)))

;; Here's the state of the atom. Note that this will refresh every time the atom
;; changes server-side. And the viewer above can do that!
;;
;; Every time the ODE solver updates the state on the browser side, the new
;; state is sent back over the wire to the server.

@oscillator-state

;; Then, the simulation:

^{::clerk/visibility :hide}
(clerk/with-viewer d/multiviewer
  (let [L (L-harmonic-gravity 'm 'k 'g)
        x (e/literal-function 'x)
        y (e/literal-function 'y)
        z (e/literal-function 'z)]
    (((e/Lagrange-equations L) (up x y z))
     't)))
