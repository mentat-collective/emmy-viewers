;; ## MathLive -> Expression

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ns mathlive
  (:require [nextjournal.clerk :as clerk]
            [pattern.rule :refer [template]]))

^{::clerk/visibility {:code :hide}
  ::clerk/viewer
  '(fn [_]
     (v/html
      [:style "
math-field {
  font-size: 24px;
  border-radius: 4px;
  border: .5px solid;
  padding: 8px;
}
math-field:focus-within {
  outline: Highlight auto 1px;
  outline: -webkit-focus-ring-color auto 1px
}"]))}
{}

^{::clerk/visibility {:code :hide}
  ::clerk/viewer '(fn [_]
                    (defonce state (reagent/atom "hello"))
                    (v/html [:div {}]))}
{}

;; Here is an example viewer for MathLive, no configuration allowed so far:

(defn mathlive-viewer [sym]
  {:transform-fn clerk/mark-presented
   :render-fn
   (template
    (fn [value]
      (v/html
       [ml/Mathfield
        {:value (:text @~sym)
         :on-change
         (fn [x]
           (let [mf   (.-target x)
                 expr (.-expression mf)]
             (reset! ~sym
                     (if (or (.-isValid expr)
                             (empty? (.-errors expr)))
                       {:valid? true
                        :expr (.-json expr)
                        :text (.getValue mf)}
                       {:valid? false
                        :text (.getValue mf)}))))}])))})

;; We can then use the above viewer using metadata:

^{::clerk/viewer (mathlive-viewer 'state)}
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
          (let [clj (demo.mathlive/mathjson->expression (:expr s))]
            [v/inspect (v/code clj)])))))}
{}

;; And round-tripped through TeX:

^{::clerk/visibility {:code :hide}
  ::clerk/viewer
  '(fn [_]
     (v/html
      (let [s @state]
        (if-not (:valid? s)
          [:p "Invalid!"]
          (let [clj (demo.mathlive/mathjson->expression (:expr s))]
            [v/inspect (v/tex (e/->TeX clj))])))))}
{}
