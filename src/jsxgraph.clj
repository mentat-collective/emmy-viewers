^{:nextjournal.clerk/visibility {:code :hide}}
(ns jsxgraph
  (:require [nextjournal.clerk :as clerk]
            [pattern.rule :refer [template]]))

;; ## JSXGraph

;; Here is an example viewer for JSXGraph, no configuration allowed so far:

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
                  :ref (fn [el]
                         (when el
                           (jsx/create @!id)))}])))))})

;; We can then use the above viewer using metadata:
^{::clerk/width :wide
  ::clerk/viewer jsx-viewer}
{}
