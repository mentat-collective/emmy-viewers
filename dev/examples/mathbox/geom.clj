^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.mathbox.geom
  #:nextjournal.clerk{:toc true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.leva]
            [emmy.env :as e :refer :all]
            [emmy.viewer :as ev]
            [emmy.mathbox.plot :as p]))

{:nextjournal.clerk/width :wide}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

(ev/with-let [!size {:size 20 :pos 1}]
  [:<> (emmy.leva/controls
        {:atom !size :schema {:size {:min 20 :max 100 :step 1}}})
   (p/scene
    (p/point
     {:coords [0.5 -0.5 (ev/get !size :pos)]
      :size (ev/get !size :size)

      :color "LimeGreen"
      :label
      {:tex? true
       :label "e^{i x}"}})
    (p/line
     {:coords [[3 2 1] [-1 2 3]]
      :label {:start "start"
              :end "end"}})
    (p/vector
     {:tip [1 2 3]
      :color "blue"}))])
