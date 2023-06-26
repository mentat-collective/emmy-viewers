;; ##  MathBox Viewers
;;
;; This namespace form makes use of a number of aliases that you'll want to use
;; in your own namespace to follow these examples.

(ns examples.mathbox
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [nextjournal.clerk :as clerk]))

{::clerk/width :wide}

;; To enable rendering of the MathBox forms, install the Emmy viewers:

^{::clerk/visibility {:result :hide}}
(ec/install!)

;; This page is in-progress. For now, see the examples at the following demo pages:

;; - [examples.mathbox.functions](/dev/examples/mathbox/functions)
;; - [examples.mathbox.quickstart](/dev/examples/mathbox/quickstart)
;; - [examples.manifold.fdg](/dev/examples/manifold/fdg)
;; - [examples.manifold.klein](/dev/examples/manifold/klein)
;; - [examples.manifold.pq-knot](/dev/examples/manifold/pq_knot)
