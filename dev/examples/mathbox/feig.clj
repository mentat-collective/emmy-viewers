;; # Feigenbaum

(ns examples.mathbox.feig
  {:nextjournal.clerk/toc true}
  (:require [emmy.clerk :as ec]
            [emmy.mathbox :as mb]
            [nextjournal.clerk :as clerk]))

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)

(defn f [p x] (* p x (- 1 x)))

(defn fixps [r]
  (->> (iterate (partial f r) (rand))
       (drop 300)
       (take 300)
       set
       (map (fn [x] [r x]))))

(def tree (into [] (mapcat fixps) (range 2.5 4.0 0.005)))
(def width (count tree))
(def boundary (Math/floor (Math/sqrt width)))

(defn Feigenbaum []
  [:<>
   (mb/matrix
    {:width (quot width boundary)
     :height (mod width boundary)
     :channels 2
     :live false
     :expr `(fn [emit# i# j#]
              (apply emit# (nth ~tree (+ (* i# ~boundary) j#) nil)))})
   (mb/point

    {:color "#3090FF"
     :size 1})])

(defn axis
  ([axis-no] (axis axis-no [0 0 0 0]))
  ([axis-no origin]
   [:<>
    (mb/axis {:axis axis-no
              :width 2
              :color "black"
              :origin origin})
    (mb/scale  {:divide 10
                :axis axis-no
                :origin origin})
    (mb/ticks  {:width 5
                :size 15
                :color "black"})
    (mb/format {:digits 2
                :weight "bold"})
    (mb/label  {:color "red"
                :zIndex 1})]))

^{::clerk/width :wide}
(mb/mathbox
 {:container {:style {:height "1000px" :width "100%"}}}
 (mb/camera {:position [0 0 2.1]
             :proxy    true})
 (mb/layer
  (mb/cartesian
   {:range [[2.5 4 0] [0 1 0]]
    :scale [0.8 0.8 1]}
   (mb/grid {:width   1
             :divideX 10
             :divideY 10})
   (axis 1)
   (axis 2 [2.5 0 0 0])
   (Feigenbaum))))
