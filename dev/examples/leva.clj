;; ## Leva Viewers
;;
;; This namespace form makes use of a number of aliases that you'll want to use
;; in your own namespace to follow these examples.

(ns examples.leva
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [nextjournal.clerk :as clerk]))

;; To enable rendering of a Leva control panel, install the Emmy viewers:

^{::clerk/visibility {:result :hide}}
(ec/install!)

;; This page is in-progress. For now, see Leva in action at the following demo pages:

;; - [examples.manifold.fdg](/dev/examples/manifold/fdg)
;; - [examples.manifold.klein](/dev/examples/manifold/klein)
;; - [examples.manifold.pq-knot](/dev/examples/manifold/pq_knot)
;; - [examples.mathbox.cube-controls](/dev/examples/mathbox/cube_controls)
;; - [examples.mathbox.functions](/dev/examples/mathbox/functions)
;; - [examples.mathbox.ode](/dev/examples/mathbox/ode)
;; - [examples.simulation.toroid](/dev/examples/simulation/toroid)
