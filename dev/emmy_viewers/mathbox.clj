^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy-viewers.mathbox
  #:nextjournal.clerk
  {:toc true :no-cache true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.env :as e :refer :all]
            [emmy.clerk :as ec]
            [emmy.mathbox :as box]
            [nextjournal.clerk :as clerk]))

;; ## Server-Side MathBox

{::clerk/width :wide}

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)

^{::clerk/width :wide}
(box/mathbox
 {:container {:style {:height "400px" :width "100%"}}
  :renderer  {:background-color 0x000000}}
 ;; This makes us 2d.
 (box/layer
  (box/cartesian
   {:range [[(- Math/PI) (- Math/PI 0.00001)] [-10 10]]
    :scale [1 0.5]}
   (box/grid {:width 2 :divideX 20 :divideY 10}))))
