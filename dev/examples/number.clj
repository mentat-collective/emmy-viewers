^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.number
  (:require [nextjournal.clerk :as clerk]))

;; ## Numbers

;; ### Number Rep

10

1/2

1N

;; ### Number Line

(def n-viewer
  {:transform-fn
   (comp clerk/mark-presented
         (clerk/update-val
          (fn lp [x]
            (cond (instance? clojure.lang.IDeref x) (lp @x)
                  (vector? x) x
                  (map? x) (vals x)
                  :else [x]))))
   :render-fn
   '(fn [xs]
      [mafs.core/Mafs
       {:view-box
        {:x [(min -2 (- (apply min xs) 2))
             (max 2 (+ (apply max xs) 2))]
         :y [-0.25 0.25]}}
       [mafs.coordinates/Cartesian]
       (for [x xs]
         [mafs.core/Point
          {:key x :x x :y 0}])])})

;; Here are some individual numbers:

^{::clerk/width :wide}
(clerk/with-viewer n-viewer
  10)

^{::clerk/width :wide}
(clerk/with-viewer n-viewer
  1)

;; We can't put metadata directly on numbers, so here's a better way.

^{::clerk/width :wide
  ::clerk/viewer n-viewer}
(do -3)

;; Collections of numbers:

^{::clerk/width :wide
  ::clerk/viewer n-viewer}
[10 1 -3]


;; ### Stateful Example

^{::clerk/sync true
  ::clerk/viewer n-viewer}
(defonce !numbers
  (atom
   {:x 10
    :y 1
    :z -3}))

@!numbers
