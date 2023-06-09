^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy-viewers.mathlive
  #:nextjournal.clerk
  {:toc true :no-cache true}
  (:require [emmy.clerk :as ec]
            [emmy.mathlive :as ml]
            [nextjournal.clerk :as-alias clerk]))

;; # MathLive Demo

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)


;; There has to be a better way... but for now, render this to set style:

ml/style

;; And here's a mathfield:

(ml/mathfield)
