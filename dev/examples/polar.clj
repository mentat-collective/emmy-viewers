^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.polar
  (:require [nextjournal.clerk :as clerk]))

;; ## Polar Example
;;
;; Here's an example similar to the one in [[functions]], but with the function
;; fully defined on the client side (due to time limitations, I may change this
;; in the coming days!)
;;
;; This viewer sets up a polar coordinate system and renders a function onto it.
;; Instead of repeating itself when the angle exceeds $2\pi$, the plot coils
;; upward in a helix.
;;
;; Here's the viewer and the interactive output:


^{::clerk/width :wide
  ::clerk/viewer
  {:fetch-fn (fn [_ x] x)
   :render-fn
   '(fn [{:keys [offset]}]
      (v/html
       [mathbox/MathBox {:style {:height "400px" :width "100%"}
                         :init {:background-color 0xffffff
                                :focus 3}}
        [box/Camera {:proxy true
                     :position [0 0 3]}]
        [box/Polar
         {:bend 1
          :range [[(* -2 Math/PI) (* 2 Math/PI)]
                  [0 1]
                  [-1 1]]
          :scale [2 1 1]
          :helix 0.1}
         ;; radius axis with tickets.
         [box/Transform {:position [0 0.5 0]}
          [box/Axis {:detail 256}]
          [box/Scale {:divide 10 :unit Math/PI :base 2}]
          [box/Ticks {:width 2
                      :classes ["foo", "bar"]}]
          [box/Ticks {:opacity 0.5
                      :width 1
                      :size 50
                      :normal [0 1 0]
                      :classes ["foo", "bar"]}]]


         ;; The polar axes.
         [box/Axis {:axis 2}]
         [box/Transform {:position [(/ Math/PI 2) 0 0]}
          [box/Axis {:axis 2}]]
         [box/Transform {:position [(- (/ Math/PI 2)) 0 0]}
          [box/Axis {:axis 2}]]


         ;; This is the opaque surface where the grid lives.
         [box/Area {:width 256
                    :height 2}]
         [box/Surface {:color "#fff"
                       :opacity 0.75
                       :zBias -10}]

         ;; This puts the grid on, but the opaque surface is already there.
         [box/Grid {:divideX 5
                    :detailX 256
                    :width 1
                    :opacity 0.5
                    :unitX Math/PI
                    :baseX 2
                    :zBias -5
                    :zOrder -2}]

         ;; The function.
         [box/Interval
          {:width 256
           :expr
           (fn [emit theta _i t]
             (let [r (+ offset (* 0.5
                                  (Math/sin
                                   (* 3 (+ theta t)))))]
               (emit theta r)))
           :channels 2}]
         [box/Line {:points "<"
                    :color 0x3090ff
                    :width 5}]]]))}}
{:offset 0.5}
