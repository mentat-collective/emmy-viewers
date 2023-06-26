^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.functions
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare numerator denominator ref partial
             infinite? abs])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.mafs :as mafs]))

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; ## Mafs
;;
;; Mafs is the way to view functions, no doubt.

(mafs/mafs
 {:zoom {:min 0.1 :max 2}}

 (mafs/cartesian)
 (mafs/of-x ((expt D 3) tanh) {:color :blue}))
