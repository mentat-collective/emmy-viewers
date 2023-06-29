;; ## JSXGraph Viewers
;;
;; This namespace form makes use of a number of aliases that you'll want to use
;; in your own namespace to follow these examples.

(ns examples.jsxgraph
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [nextjournal.clerk :as clerk]))

;; To enable rendering of the JSXGraph forms, install the Emmy viewers:

^{::clerk/visibility {:result :hide}}
(ec/install!)
