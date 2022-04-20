^{:nextjournal.clerk/visibility :hide-ns}
(ns polar
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
;; Here's the viewer:

(def polar-viewer
  {:fetch-fn (fn [_ x] x)
   :render-fn
   '(fn [value]
      (v/html
       (reagent/with-let [!ref (reagent/atom nil)]
         (when value
           [:div {:id "mathbox"
                  :style {:height "400px" :width "100%"}
                  :ref
                  (fn [el]
                    (when el
                      (mb/sync!
                       el !ref value
                       mb/polar-setup
                       (fn [mathbox]
                         (mb/polar-demo mathbox value)))))}]))))})

;; And the interactive output:

(clerk/with-viewer polar-viewer
  {:offset 0.7})
