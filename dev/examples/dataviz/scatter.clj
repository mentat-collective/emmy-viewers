^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.dataviz.scatter
  (:require [examples.dataviz.datasets :refer [iris-data]]
            [nextjournal.clerk :as clerk]
            [emmy.pattern.rule :refer [template]]))

;; ## Scatter Plot
;;
;; This could use some abstraction!

(def colors
  {:x "#ff4136" ;; red
   :y "#ffdc00" ;; yellow
   :z "#0074d9" ;; blue
   :xy "#ff851b" ;; orange
   :xz "#b10dc9" ;; purple
   :yz "#2ecc40" ;; green
   :xyz "#654321" ;; brown
   })

^{::clerk/width :wide
  ::clerk/viewer
  {:fetch-fn (fn [_ x] x)
   :transform-fn (fn [{:keys [data] :as m}]
                   (let [maxes  (reduce (partial mapv max) data)
                         mins   (reduce (partial mapv min) data)
                         ranges (map - maxes mins)]
                     (assoc m
                            :maxes maxes
                            :mins mins
                            :ranges ranges
                            :scaled-mins
                            (map / mins ranges)
                            :colors colors)))
   :render-fn
   (template
    (letfn [(interpolate [lo hi n]
              (let [n      (dec n)
                    spread (- hi lo)]
                (mapv (fn [i]
                        (/ (Math/round
                            (* 10 (+ lo (* spread (/ i n))))) 10))
                      (range (inc n)))))]
      (fn [{:keys [data maxes mins ranges scaled-mins colors]}]
        (v/html
         [mathbox/MathBox {:style {:height "400px" :width "100%"}
                           :init {:background-color 0xfafaf8
                                  :max-distance 5
                                  :camera-position [2.3 1 2]}}
          [mb/Cartesian {:range {:x [0 2] :y [0 1] :z [0 1]}
                         :scale [2 1 1]}
           ;; x axis
           [box/Scale {:divide 5
                       :origin [0 0 1 0]
                       :axis "x"}]
           [box/Text {:live false
                      :data (interpolate
                             (nth mins 0)
                             (nth maxes 0)
                             5)}]
           [box/Label {:color (:x colors)}]

           ;; y axis
           [box/Scale {:divide 3
                       :origin [0 0 1 0]
                       :axis "y"}]
           [box/Text {:live false
                      :data (interpolate
                             (nth mins 1)
                             (nth maxes 1)
                             3)}]
           [box/Label {:color (:y colors)
                       :offset [-16 0]}]

           ;; z axis
           [box/Scale {:divide 3
                       :origin [2 0 0 0]
                       :axis "z"}]
           [box/Text {:live false
                      :data (interpolate
                             (nth mins 2)
                             (nth maxes 2)
                             3)}]
           [box/Label {:color (:z colors)
                       :offset [16 0]}]

           ;; planes
           [box/Grid {:axes "xy" :divideX 3 :divideY 3}]
           [box/Grid {:axes "xz" :divideX 3 :divideY 3}]
           [box/Grid {:axes "yz" :divideX 3 :divideY 3}]

           ;; data
           [box/Array {:items 1
                       :channels 4
                       :live false
                       :id "data"
                       :data data}]
           [box/Swizzle {:order "xyz"}]
           [box/Transform
            {:scale (into [] (map-indexed
                              (fn [i d]
                                (if (zero? i)
                                  (/ 2 d)
                                  (/ 1 d))))
                          (take 3 ranges))
             :position (into [] (map-indexed
                                 (fn [i d]
                                   (if (zero? i)
                                     (* -2 d)
                                     (- d))))
                             (take 3 scaled-mins))}
            [box/Point {:color (:xyz colors) :size 12}]

            ;; these three are the points flattened against the planes.
            [box/Transform {:scale [1 1 0]
                            :position [0 0 (nth mins 2)]}
             [box/Point {:color (:xy colors)
                         :size 7}]]

            [box/Transform {:scale [1 0 1]
                            :position [0 (nth mins 1) 0]}
             [box/Point {:color (:xz colors)
                         :size 7}]]

            [box/Transform {:scale [0 1 1]
                            :position [(nth mins 0) 0 0]}
             [box/Point {:color (:yz colors)
                         :size 7}]]

            ;; Then we have the ticks.
            [box/Transform
             {:position [0
                         (nth maxes 1)
                         (nth mins 2)]

              :scale [1 0.001 0]}
             [box/Repeat {:items 2}]
             [box/Spread {:unit "absolute"
                          :alignItems "first"
                          :items [0 100 0 0]}]
             [box/Vector {:color (:x colors)}]]

            ;; Y
            [box/Transform
             {:position [(nth maxes 0)
                         0
                         (nth mins 2)]
              :scale [0.001 1 0]}
             [box/Repeat {:items 2}]
             [box/Spread {:unit "absolute"
                          :alignItems "first"
                          :items [100 0 0 0]}]
             [box/Vector {:color (:y colors)}]]

            ;; Z
            [box/Transform
             ;; min x, max y
             {:position [(nth mins 0)
                         (nth maxes 1)
                         0]
              :scale [0 0.001 1]}
             [box/Repeat {:items 2}]
             [box/Spread {:unit "absolute"
                          :alignItems "first"
                          :items [0 100 0 0]}]
             [box/Vector {:color (:z colors)}]]
            ]]]))))}}
{:data iris-data}

^{::clerk/visibility :hide}
(clerk/table
 (map #(into (sorted-map)
             (map vector ["Sepal Length"
                          "Sepal Width"
                          "Petal Length"
                          "Petal Width"] %))
      iris-data))
