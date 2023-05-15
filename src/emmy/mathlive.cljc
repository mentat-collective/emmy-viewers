(ns emmy.mathlive
  (:require [emmy.structure :as ss]
            [emmy.env :as e]
            [emmy.mathlive.interpreter :refer [process]]))

(defn mathjson->expression
  "Converts MathJSON to an expression or structure of expressions."
  [j]
  (ss/mapr e/literal-number
           (process
            #?(:cljs (js->clj j)
               :clj j))))
