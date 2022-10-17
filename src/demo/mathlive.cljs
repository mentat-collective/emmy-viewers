(ns demo.mathlive
  (:require ["mathlive" :as ml]
            [sicmutils.complex :as c]
            [nextjournal.clerk.sci-viewer :as sv]
            [sicmutils.env :as e]
            [pattern.rule :as r :refer [=> ruleset rule-simplifier] :include-macros true]
            [reagent.core :as re :include-macros true]))

(def replacements
  {"Add" '+
   "Subtract" '-
   "Divide" '/
   "Cos" 'cos
   "Sin" 'sin
   "Multiply" '*
   "Power" 'expt
   "Sqrt" 'sqrt
   "Rational" '/})

(def constants
  {"ExponentialE" 'exp
   "ImaginaryUnit" c/I
   "Pi" 'pi})

(defn process-rule [simplify]
  (comp (rule-simplifier
         ;; then replace symbols with strings etc
         (ruleset
          (? ?op string?) => (? (comp symbol '?op))))

        ;; then we get our constants etc...
        (rule-simplifier
         (ruleset
          [(? ?op replacements) ??xs] => ((? (comp replacements '?op)) ??xs)
          (? ?op constants) => (? (comp constants '?op))))

        ;; first do these replacements.
        (rule-simplifier
         (ruleset
          ["Delimiter" ?rest] => ?rest
          ["Power" "ExponentialE" ?form]=> (exp (? (comp simplify '?form)))))))

(def process
  (process-rule process))

(defn mathjson->clj [j]
  (js/console.log j)
  (let [c (js->clj (js/JSON.parse j))
        to-print (process c)]
    (js/console.log (pr-str c))
    (js/console.log (pr-str to-print))
    (js/console.log
     (pr-str (e/simplify (e/literal-number to-print))))
    (e/literal-number to-print)))

(defn Mathfield [_]
  (re/with-let [!state (re/atom nil)]
    (let [mfe (ml/MathfieldElement.
               #js {:fontsDirectory "https://unpkg.com/mathlive@0.83.0/dist/fonts/"})]

      ;; Demo shows how to go back and forth... https://cortexjs.io/mathlive/demo/

      ;; This is a slightly older react component, similar to what we should
      ;; probably be building here.
      ;; https://github.com/concludio/react-mathlive/blob/b3ffefb30f8b63448d925c47228b8d0befcaf898/src/MathfieldComponent.tsx
      (.addEventListener
       mfe "input" (fn [x]
                     (reset! !state (-> x .-target (.getValue "math-json")))))
      (reset! !state (.getValue mfe "math-json"))
      (fn []
        [:div
         [:div {:ref (fn [el]
                       (when el
                         (.replaceWith ^js el mfe)))}]
         (when-not (empty? @!state)
           [:<>
            [:pre (pr-str (mathjson->clj @!state))]
            [:pre (pr-str (e/simplify
                           (mathjson->clj @!state)))]])]))))
