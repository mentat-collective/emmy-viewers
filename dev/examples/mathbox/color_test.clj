
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

;; # Color Testing

;; ## Demo
;;
;; Let's make a function to try!

(ev/with-let [!state {:amplitude 1}]
  (plot/scene
   (emmy.leva/controls {:atom !state})
   (plot/of-xy
    {:x-samples 128
     :y-samples 128
     #_#_:color "LimeGreen"
     :z (ev/with-params {:atom !state :params [:amplitude]}
          (fn [amplitude]
            (fn [[x y]]
              (* amplitude
                 (cos (* x y))))))})))
