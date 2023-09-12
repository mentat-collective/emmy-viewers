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

(defn basis [m]
  (let [[x y z] (emmy.matrix/transpose m)]
    (-> [:<>
         (p/vector {:tip x :arrow-size 3 :color "red"})
         (p/vector {:tip y :arrow-size 3 :color "green"})
         (p/vector {:tip z :arrow-size 3 :color "blue"})]
        (ev/fragment p/scene))))

(ev/with-let [!size {:y 1}]
  (p/scene
   (emmy.leva/controls
    {:atom !size :schema {:y {:min 0 :max 10 :step 0.01}}})
   (basis
    (matrix-by-rows
     [1 0 0]
     [0 (ev/get !size :y) 0]
     [1 0 2]))))

(ev/with-let [!size {:size 20 :pos 1}]
  [:<>
   (emmy.leva/controls
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
