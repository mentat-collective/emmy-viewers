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
         [mathlive/Mathfield value]))))})

;; CSS

(clerk/html
 [:link {:rel "stylesheet"
         :href "https://unpkg.com/mathlive@0.83.0/dist/mathlive-static.css"
         :crossOrigin ""}])

(clerk/html
 [:link {:rel "stylesheet"
         :href "https://unpkg.com/mathlive@0.83.0/dist/mathlive-fonts.css"
         :crossOrigin ""}])

;; We can then use the above viewer using metadata:
^{::clerk/width :wide
  ::clerk/viewer mathlive-viewer}
{}
