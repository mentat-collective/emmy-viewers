^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy-viewers.mathlive
  #:nextjournal.clerk
  {:toc true :no-cache true}
  (:require [emmy.clerk :as ec]
            [emmy.mathlive :as ml]
            [nextjournal.clerk :as-alias clerk]
            [emmy.env :as e]))

;; # MathLive Demo

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)


;; There has to be a better way... but for now, render this to set style:

ml/style

;; And here's a mathfield:

(ml/mathfield)

;; ## MathJSON to Emmy
;;
;; MathLive describes the contents of a mathfield
;; with [MathJSON](https://cortexjs.io/math-json/).
;; `ml/mathjson->expression` turns that into an Emmy expression. This is the
;; MathJSON MathLive produces for `\sin^2(x) + \cos^2(x)`:

(def sin2+cos2
  ["Add"
   ["Power" ["Sin" "x"] 2]
   ["Power" ["Cos" "x"] 2]])

;; The resulting expression works with the rest of Emmy:

(e/simplify
 (ml/mathjson->expression sin2+cos2))
