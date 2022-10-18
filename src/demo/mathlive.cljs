(ns demo.mathlive
  (:require [clojure.core.match :refer [match] :include-macros true]
            ["mathlive" :as ml]
            [sicmutils.complex :as c]
            [sicmutils.structure :as ss]
            [nextjournal.clerk.sci-viewer :as sv]
            [nextjournal.clerk.viewer :as v]
            [sicmutils.env :as e]
            [sicmutils.numsymb :refer [symbolic-operator]]
            [reagent.core :as re :include-macros true]))

;; ## String
(def constants
  {"ExponentialE" 'E
   "ImaginaryUnit" c/I

   "GoldenRatio" 'phi

   ;; TODO add all greek characters.
   "Pi" 'pi "CapitalPi" 'Pi
   "Gamma" 'gamma "CapitalGamma" 'Gamma})

(def f-name->sym
  {
   ;; Arithmetic
   "Add" '+
   "Subtract" '- "Negate" '-
   "Multiply"'*
   "Divide" '/ "Rational" '/
   "Power" 'expt ;; root handled below... TODO add root to symbolic env of sicmutils.
   "Square" 'square
   "Sqrt" 'sqrt

   "Exp" 'exp
   "Ln" 'log

   ;; "Log" TODO this is [Log a b], log base blah... support that.
   ;; "Lb" TODO log base 2
   ;; "Lg" TODO log base 10
   ;; "LogOnePlus" TODO

   "Cos" 'cos
   "Sin" 'sin
   "Tan" 'tan
   "Cot" 'cot
   "Sec" 'sec
   "Csc" 'csc

   "Arcsin" 'asin
   "Arccos" 'acos
   "Arctan" 'atan

   "Sinh" 'sinh
   "Cosh" 'cosh
   "Tanh" 'tanh
   "Coth" 'coth
   "Sech" 'sech
   "Csch" 'csch

   "Equal" '=

   ;; 'and (ua/monoid sym:and true false?)
   ;; 'or (ua/monoid sym:or false true?)
   ;; 'negate negate
   ;; 'invert invert

   ;; 'modulo modulo
   ;; 'remainder remainder
   ;; 'gcd (ua/monoid gcd 0)
   ;; 'lcm (ua/monoid lcm 1 v/zero?)
   ;; 'floor floor
   ;; 'ceiling ceiling
   ;; 'integer-part integer-part
   ;; 'fractional-part fractional-part

   ;; 'cube #(expt % 3)
   ;; 'square #(expt % 2)
   ;; 'abs abs
   ;; 'sqrt sqrt
   ;; 'log log

   ;; 'expt expt
   ;; 'make-rectangular make-rectangular
   ;; 'make-polar make-polar
   ;; 'real-part real-part
   ;; 'imag-part imag-part
   ;; 'conjugate conjugate
   ;; 'magnitude magnitude
   ;; 'dot-product dot-product
   ;; 'inner-product dot-product
   ;; 'angle angle
   ;; 'derivative derivative

   })

(defn process-str [s]
  (or (constants s)
      (f-name->sym s)
      (if (and (.startsWith s "'")
               (.endsWith s "'"))
        (.slice s 1 -1)
        (symbol s))))

(defn process-head
  "Convert the head of a function form into a symbol."
  [head]
  (match [head]
         [(_ :guard symbol?)] head
         [(_ :guard string?)] (f-name->sym head head)
         :else head))

;; ## Maps

(defn process-map [m] m)

;; ## Vector
;;
;; Catch some ones we want to combine, then go wild.

(defn v-processor [simplify]
  (fn process-v [v]
    (match [v]
           [[(h :guard vector?) & tail]]  (process-v (into [(process-v h)] tail))
           [["List" & xs]] (ss/up* (map simplify xs))
           [["Power" "ExponentialE" pow]] ((symbolic-operator 'exp) (simplify pow))
           [["Root" l r]] ((symbolic-operator 'expt) (simplify l)
                           ((symbolic-operator 'invert)
                            (simplify r)))

           ;; TODO this only comes in when errors are empty valid isValid is
           ;; false. Fix!
           [["Error" & _ignore]] '_

           ;; inverse trig functions
           [["InverseFunction" "Sin"]]    'asin
           [["InverseFunction" "Cos"]]    'acos
           [["InverseFunction" "Tan"]]    'atan
           [["InverseFunction" "Cot"]]    'acot
           [["InverseFunction" "Sec"]]    'asec
           [["InverseFunction" "Csc"]]    'acsc

           [["InverseFunction" "Cosh"]]    'acosh
           [["InverseFunction" "Sinh"]]    'asinh
           [["InverseFunction" "Tanh"]]    'atanh

           [["InverseFunction" "Coth"]]    'acoth
           [["InverseFunction" "Sech"]]    'asech
           [["InverseFunction" "Csch"]]    'acsch

           [["Sequence" & _]]             nil
           [["Delimiter" expr & _]]       (simplify expr)

           [[head & args]]                (if-let [sym (process-head head)]
                                            (apply (symbolic-operator sym)
                                                   (map simplify args))
                                            v)
           :else v)))

(defn process [expr]
  (let [process-v (v-processor process)]
    (cond (number? expr) expr
          (string? expr) (process-str expr)
          (map? expr)    (process-map expr)
          (vector? expr) (process-v expr)
          :else expr)))

(defn mathjson->expression
  "Converts MathJSON to an expression or structure of expressions."
  [j]
  (ss/mapr e/literal-number
           (process
            (js->clj j))))

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
                     (js/console.log (.getValue (.-target x) "math-json"))
                     (js/console.log (.-isValid ^js (.-expression (.-target x))))
                     (js/console.log (.-errors ^js (.-expression (.-target x))))
                     (reset! !state
                             ;; weird, seems like a bug with isValid.
                             (if (or (.-isValid ^js (.-expression (.-target x)))
                                     (empty?
                                      (.-errors ^js (.-expression (.-target x)))))
                               {:valid? true
                                :expr (.-json (.-expression (.-target x)))}
                               {:valid? false}))))
      (reset! !state (.getValue mfe "math-json"))
      (fn []
        [:div
         [:div {:ref (fn [el]
                       (when el
                         (.replaceWith ^js el mfe)))}]
         (let [s @!state]
           (if-not (:valid? s)
             [:p "Invalid!"]
             ;; TODO right now we are ASSUMING that what comes through is either
             ;; a structure or a literal number, and we wrap it all up at the
             ;; end.
             (let [clj    (mathjson->expression (:expr s))
                   simple (e/simplify clj)]
               [:<>
                [sv/inspect (v/code clj)]
                [sv/inspect (v/tex (try (e/->TeX clj)
                                        (catch
                                            js/Error
                                            _ "\\mathit{processing...}")))]
                [sv/inspect (v/code simple)]
                [sv/inspect (v/tex (try (e/->TeX simple)
                                        (catch
                                            js/Error
                                            _ "\\mathit{processing...}")))]])))]))))
