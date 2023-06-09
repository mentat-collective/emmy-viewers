(ns emmy.mathlive
  "Server-side rendering functions for the components declared in the
  [`mathlive.core`](https://cljdoc.org/d/org.mentat/mathlive.cljs/CURRENT/api/mathlive.core)
  namespace of the [`MathLive.cljs` project](https://mathlive.mentat.org)."
  (:require [emmy.env :as e]
            [emmy.mathlive.interpreter :refer [process]]
            [emmy.structure :as ss]
            [emmy.viewer :as ev]))

;; ## MathLive Components
;;
;; This is all quite alpha at the moment. A better version of this code will be
;; able to translate between Emmy expressions and what's rendered.

(defn ^:no-doc mathlive-meta [v]
  (vary-meta v assoc
             :portal.viewer/mathlive? true
             :portal.viewer/default :emmy.portal/mathlive))

(defn mathjson->expression
  "Converts MathJSON to an expression or structure of expressions."
  [j]
  (ss/mapr e/literal-number
           (process
            #?(:cljs (js->clj j)
               :clj j))))

(def style
  "Place this fragment in a Clerk notebook to set the default styles
  for [[mathfield]] instances in the notebook."
  (ev/fragment
   [:style "
math-field {
  width: 100%;
  font-size: 24px;
  border-radius: 4px;
  border: 1px solid;
  padding: 8px;
}
math-field:focus-within {
  outline: none;
  border: 1px solid blue;
}"]))

(defn mathfield
  "Given a map of options `opts`, returns a Reagent fragment that mounts an
  instance of the [MathLive](https://github.com/arnog/mathlive) equation editor.

  NOTE: Following React's convention, `:on-change` binds a listener to to the
  `input` event. See https://reactjs.org/docs/dom-elements.html#onchange"
  ([] (mathfield {}))
  ([opts]
   (mathlive-meta
    (ev/fragment
     ['mathlive.core/Mathfield opts]))))
