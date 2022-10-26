^{:nextjournal.clerk/visibility {:code :hide}}
(ns jsxgraph
  (:require [nextjournal.clerk :as clerk]
            [pattern.rule :refer [template]]))

;; ## JSXGraph

;; What we want to do here is modify this example so that I can actually specify
;; some of the shapes on this side, and then send them over as configuring data
;; structures to the JS side. That will just update if anything changes. I think
;; that is fine.

(def jsx-viewer
  {:transform-fn clerk/mark-presented
   :render-fn
   (template
    (fn [value]
      (v/html
       (reagent/with-let [!state (reagent/atom
                                  {:my-point
                                   {:x -1 :y -2}})]
         [:<>
          [v/inspect @!state]
          #_[jsx/Point 1 2 4]
          [jsx/JSXGraph {:boundingbox [-8 4 8 -4]
                         :showCopyright false
                         :axis true}
           !state]]))))})

;; We can then use the above viewer using metadata:
^{::clerk/width :wide
  ::clerk/viewer jsx-viewer}
[:scene
 [:point {}]]
