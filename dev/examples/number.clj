^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.number
  (:require [emmy.viewer :as ev]
            [emmy.mafs :as mafs]
            [nextjournal.clerk :as clerk]))

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ev/install!)

;; ## Numbers

;; ### Number Rep

10

1/2

1N

;; ### Number Line

(defn view-n [x]
  (let [xs (cond (vector? x) x
                 (map? x)   (vals x)
                 :else      [x])]
    (apply mafs/mafs
           {:view-box
            {:x [(min -2 (- (apply min xs) 2))
                 (max 2 (+ (apply max xs) 2))]
             :y [-0.25 0.25]}}
           (mafs/cartesian)
           (for [x xs]
             (mafs/point {:key x :x x :y 0})))))

;; Here are some individual numbers:

^{::clerk/width :wide}
(view-n 10)

^{::clerk/width :wide}
(view-n 1)

;; Collections of numbers:

^{::clerk/width :wide}
(view-n [10 1 -3])

;; maps:

^{::clerk/width :wide}
(view-n
 {:x 10
  :y 1
  :z -3})

;; ## Notes:
;;
;; We need better bounds calculations, possibly labels for points..
;;
;; Here is the Mathematica version:
;; https://reference.wolfram.com/language/ref/NumberLinePlot.html
;;
;; I think we for sure want a `NumberLinePlot` type thing.
