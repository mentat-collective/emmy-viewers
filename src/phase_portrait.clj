^{:nextjournal.clerk/visibility {:code :hide}}
(ns phase-portrait
  (:refer-clojure
   :exclude [+ - * / = zero? compare numerator denominator ref partial])
  (:require [nextjournal.clerk :as clerk]
            [pattern.rule :refer [template]]
            [sicmutils.env :as e :refer :all]))

;; ## Mathbox Oscillator
;;
;; Cthulhu lives!

^{::clerk/width :wide
  ::clerk/visibility {:code :hide}
  ::clerk/viewer
  {:transform-fn clerk/mark-presented
   :render-fn
   (template
    (fn [_]
      (v/html
       [mb/Hamilton])))}}
{}
