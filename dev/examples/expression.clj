^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.expression
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare numerator denominator ref partial])
  (:require [nextjournal.clerk :as clerk]
            [nextjournal.clerk.viewer :as-alias viewer]
            [emmy.env :as e :refer [+ * / ->TeX cos expt simplify sin square]]
            [emmy.expression :as x]
            [emmy.clerk :as ec]
            [emmy.value :as v]
            [reagent.core :as-alias reagent]))

;; ## Hello, Emmy!
;;
;; Is this thing on?

(+ 'x 'x (expt 'y 4) 'x 'x)

;; ##  Custom Viewers
;;
;; Let's say we have an expression like:

(+ (square (sin 'x))
   (square (cos 'x)))

;; We can convert this to LaTeX, but clerk won't know what to do with the
;; string.

(->TeX
 (+ (square (sin 'x))
    (square (cos 'x))))

;; We can do better by invoking `clerk/tex` to tell Clerk to interpret this
;; string as TeX:

(clerk/tex
 (->TeX
  (+ (square (sin 'x))
     (square (cos 'x)))))

;; And that's fine! Great for a built-in viewer. But now I've lost the original
;; data structure!

(defn transform-literal [l]
  (let [simple (simplify l)]
    [["simplified TeX" (clerk/tex (->TeX simple))]
     [:simplified     (v/freeze simple)]
     [:TeX            (clerk/tex (->TeX l))]
     [:original       (v/freeze l)]]))

;; Try it out:


(transform-literal
 (+ (square (sin 'x)) (square (cos 'x))))

;; does it work with the multiviewer?

(def multiviewer
  {:pred x/literal?
   :transform-fn
   (clerk/update-val
    (comp ec/multi transform-literal))})

(clerk/with-viewer multiviewer
  (+ (square (sin 'x))
     (square (cos 'x))))

;; woohoo! We can set it as default viewer for literals in this
;; namespace. (Uncomment this form and run `clerk-show` again...)

#_(clerk/add-viewers! [multiviewer])

(+ (square (sin 'x))
   (square (cos 'x)))

;; How about something more complicated?

(/ (+ (* 'A 'C 'gMR (expt (sin 'theta) 2) (cos 'theta))
      (* (/ 1 2) 'A (expt 'p_psi 2) (expt (sin 'theta) 2))
      (* (/ 1 2) 'C (expt 'p_psi 2) (expt (cos 'theta) 2))
      (* (/ 1 2) 'C (expt 'p_theta 2) (expt (sin 'theta) 2))
      (* -1 'C 'p_phi 'p_psi (cos 'theta))
      (* (/ 1 2) 'C (expt 'p_phi 2)))
   (* 'A 'C (expt (sin 'theta) 2)))

;; Great! Let's move on.
