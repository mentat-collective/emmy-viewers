^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.mathbox.geom
  #:nextjournal.clerk{:toc true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.mathbox.plot :as p]))

{:nextjournal.clerk/width :wide}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

(p/scene
 (p/point {:coords [0.5 -0.5 -0.5]
           :size 60
           :color "LimeGreen"
           :label "Pebble"})
 (p/line
  {:coords [[3 2 1] [-1 2 3]]
   :label {:start "start"
           :end "end"}})
 (p/vector
  {:tip [1 2 3]
   :color "blue"}))
