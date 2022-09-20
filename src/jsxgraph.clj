^{:nextjournal.clerk/visibility :hide-ns}
(ns jsxgraph
  (:require [nextjournal.clerk :as clerk]
            [pattern.rule :refer [template]]))

;; ### Cube Viewer
;;
;; default options:
(def opts
  {:style {:height "400px" :width "100%"}
   :init {:background-color 0xeeeeee
          :max-distance 4
          :camera-position [2.5 1 2.5]
          :scale 720 :focus 1}})

;; the `mbr` forms live in [[demo.mathbox-react]] for now.

(def cube-viewer
  {:fetch-fn (fn [_ x] x)
   :render-fn
   (template
    #(do (v/html
          [mb/Mathbox ~opts
           [mb/Cartesian {}
            [mb/ColorCube %]]])))})

;; We can then use the above viewer using metadata:

^{::clerk/width :wide
  ::clerk/viewer cube-viewer}
{:dimensions [8 5 20]
 :size 20
 :opacity 1.0}
