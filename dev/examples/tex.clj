^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.tex
  {:nextjournal.clerk/toc true}
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer [D sin cos tanh expt]]))

;; # TeX Rendering

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; `emmy.clerk/->TeX` renders any Emmy expression as TeX:

(ec/->TeX (sin 'x))

(ec/->TeX (((expt D 3) tanh) 'x))

;; By default the expression is rendered as given. Pass `:simplify? true` to
;; render its simplified form instead:

(let [expr (e/+ (expt (sin 'x) 2) (expt (cos 'x) 2))]
  [(ec/->TeX expr)
   (ec/->TeX expr :simplify? true)])

;; ## TeX values
;;
;; Emmy versions that wrap the result of `emmy.env/->TeX` in a TeX type
;; (`emmy.expression.render/tex?`) render through `emmy.clerk/tex-viewer`
;; without a call to `ec/->TeX`. With older Emmy versions this cell shows the
;; TeX source string.

(e/->TeX (((expt D 2) sin) 'x))
