^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy-viewers.mathbox
  #:nextjournal.clerk
  {:toc true :no-cache true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.env :as e :refer :all]
            [emmy.mathbox :as box]
            [emmy.viewer :as ev]
            [nextjournal.clerk :as clerk]))

;; ## Server-Side MathBox

(def ->tex (comp clerk/tex ->TeX simplify))

(ev/install!)

^{::clerk/width :wide}
(emmy.mathbox/mathbox
 {:container {:style {:height "400px" :width "100%"}}
  :renderer  {:background-color 0x000000}}
 (emmy.mathbox/layer
  {}
  (emmy.mathbox/cartesian
   {:range [[(- Math/PI) (- Math/PI 0.00001)] [-10 10]]
    :scale [1 0.5]}
   ['emmy.mathbox.plot/AxisGrid
    {:subdivisions 2
     :x-axis
     {:divide 5
      :unit Math/PI
      :base 2
      :label-maker 'emmy.mathbox.plot/label-pi}
     :y-axis {:divide 5
              :subdivisions 2}}])))
