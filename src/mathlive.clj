^{:nextjournal.clerk/visibility {:code :hide}}
(ns mathlive
  (:require [nextjournal.clerk :as clerk]
            [pattern.rule :refer [template]]))

;; ## MATHLive

^{::clerk/visibility {:code :hide}
  ::clerk/viewer '(fn [_]
                    (defonce state (reagent/atom "hello"))
                    (v/html [:div {}]))}
(do :ignored)

;; Here is an example viewer for MathLive, no configuration allowed so far:

(defn mathlive-viewer [sym]
  {:transform-fn clerk/mark-presented
   :render-fn
   (template
    (fn [value]
      (v/html
       [mathlive/Mathfield ~sym])))})

;; We can then use the above viewer using metadata:

^{::clerk/width :wide
  ::clerk/viewer (mathlive-viewer 'state)}
{}

;; The state is pushed into a page-local atom, which we can use in the NEXT
;; blocks to show the parsed S-expression:

^{::clerk/visibility {:code :hide}
  ::clerk/viewer
  '(fn [_]
     (v/html
      (let [s @state]
        (if-not (:valid? s)
          [:p "Invalid!"]
          (let [clj (mathlive/mathjson->expression (:expr s))]
            [:<>
             [v/inspect (v/code clj)]])))))}
{}

;; And TeX:

^{::clerk/visibility {:code :hide}
  ::clerk/viewer
  '(fn [_]
     (v/html
      (let [s @state]
        (if-not (:valid? s)
          [:p "Invalid!"]
          (let [clj (mathlive/mathjson->expression (:expr s))]
            [:<>
             [v/inspect (v/tex (mathlive/->TeX clj))]])))))}
{}
