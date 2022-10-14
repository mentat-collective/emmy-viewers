^{:nextjournal.clerk/visibility {:code :hide}}
(ns mathlive
  (:require [nextjournal.clerk :as clerk]
            [pattern.rule :refer [template]]))

;; ## MATHLive

;; Here is an example viewer for MathLive, no configuration allowed so far:

(def mathlive-viewer
  {:transform-fn clerk/mark-presented
   :render-fn
   (template
    (fn [value]
      (v/html
       (when value
         [:div
          {:style {:height "400px" :width "100%"}
           :ref (fn [el]
                  (when el
                    (mathlive/create el)))}]))))})

;; We can then use the above viewer using metadata:
^{::clerk/width :wide
  ::clerk/viewer mathlive-viewer}
{}
