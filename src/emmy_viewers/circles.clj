^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns emmy-viewers.circles
  (:require [jsxgraph.core :as-alias jsx]
            [nextjournal.clerk :as clerk]
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk.viewer :as-alias viewer]))

;; ## A 5 Circle Incidence Theorem

;; This is a visualization of A 5-Circle Incidence Theorem by J. Chris Fisher,
;; Larry Hoehn and Eberhard. M. Schröder From [ Mathematics Magazine, Volume 87,
;; 2014 - Issue
;; 1](https://www.tandfonline.com/doi/abs/10.4169/math.mag.87.1.44?journalCode=umma20).

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}

(def circles-viewer
  {:transform-fn clerk/mark-presented
   :render-fn
   (q
    (fn [coords]
      (viewer/html
       (into
        [jsx/JSXGraph {:boundingbox [-5 5 5 -5]
                       :showCopyright false}]
        (concat
         (map-indexed
          (fn [k p]
            [jsx/Point
             {:name "" :id (str "A_" k) :strokeColor "#7355ff" :fillColor "#7355ff"
              :parents p}])
          coords)

         (map (fn [k]
                [jsx/Segment
                 {:id (str "s_" k)
                  :strokeColor "blue" :strokeWidth 1
                  :parents [(str "A_" k)
                            (str "A_" (mod (+ k 2) 5))]}])
              (range 5))

         (map (fn [k]
                [jsx/Intersection
                 {:id (str "B_" k) :name "" :strokeColor "#EA0000" :fillColor "#EA0000"
                  :parents [(str "s_" k)
                            (str "s_" (mod (+ (dec k) 5) 5))
                            0]}])
              (range 5))

         (map (fn [k]
                [jsx/Circle
                 {:id (str "c_" k) :strokeColor "#aaaaaa" :strokeWidth 1
                  :parents [(str "A_" k)
                            (str "B_" k)
                            (str "A_" (mod (inc k) 5))]}])
              (range 5))

         (map (fn [k]
                [jsx/RadicalAxis
                 {:strokeColor "#ff0000" :strokeWidth 2
                  :parents [(str "c_" k)
                            (str "c_" (mod (+ (dec k) 5) 5))]}])
              (range 5)))))))})

;; From the abstract:
;;
;; > We state and prove a surprising incidence theorem that was discovered with
;; > the help of a computer graphics program. The theorem involves sixteen
;; > points on ten lines and five circles; our proof relies on theorems of
;; > Euclid, Menelaus, and Ceva. The result bears a striking resemblance to
;; > Miquel's 5-circle theorem, but as far as we can determine, the relationship
;; > of our result to known incidence theorems is superficial.
;;
;; Unfortunately the article is stuck behind a paywall... I'll see what I can do
;; to get it out.
;;
;; Here are our points:

(def points
  [[2.5 -3]
   [2 4]
   [-2.5 3]
   [-4 -2]
   [0 -4]])

;; And our viewer:

^{::clerk/width :wide}
(clerk/with-viewer circles-viewer points)
