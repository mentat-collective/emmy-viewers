^{:nextjournal.clerk/visibility {:code :hide}}
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
  {:transform-fn clerk/mark-presented
   :render-fn
   (template
    #(v/html
      [mb/Mathbox ~opts
       [mb/Cartesian {}
        [mb/ColorCube %]]]))})

;; We can then use the above viewer using metadata:

^{::clerk/width :wide
  ::clerk/viewer cube-viewer}
{:dimensions [8 5 20]
 :size 20
 :opacity 1.0}

(def jsx-viewer
  {:transform-fn clerk/mark-presented
   :render-fn
   (template
    (fn [value]
      (v/html
       (reagent/with-let [!id (reagent/atom
                               (-> (Math/random)
                                   (.toString 36)
                                   (.substr 2 9)))]
         (when value
           [:div {:id @!id
                  :style {:height "400px" :width "100%"}
                  :ref
                  ;; this is failing since jsxgraph is busted. See
                  ;; https://github.com/jsxgraph/jsxgraph/pull/456. For now, on
                  ;; to Mathlive!
                  (fn [el]
                    (when el
                      (jsx/create @!id)))}])))))})

;; We can then use the above viewer using metadata:
^{::clerk/width :wide
  ::clerk/viewer jsx-viewer}
{}
