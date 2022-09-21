^{:nextjournal.clerk/visibility {:code :hide}}
(ns demo
  (:refer-clojure
   :exclude [+ - * / = zero? compare numerator denominator ref partial])
  (:require [nextjournal.clerk :as clerk]
            [sicmutils.env :as e :refer [+ * / ->TeX cos expt simplify sin square]]
            [sicmutils.expression :as x]
            [sicmutils.value :as v]))

;; ## Hello, SICMUtils!
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
    {:simplified_TeX (clerk/tex (->TeX simple))
     :simplified     (v/freeze simple)
     :TeX            (clerk/tex (->TeX l))
     :original       (v/freeze l)}))

;; Try it out:

(transform-literal
 (+ (square (sin 'x)) (square (cos 'x))))

;; Okay, the tricky part here for me was that we are actually dealing with
;; wrapped values all over, and we need to extract that and run updates there.
;; Those are also what show up on the other side of the wire.

(defn literal-viewer [xform]
  {;; Only apply to these forms.

   :pred x/literal?
   ;; We have to preserve keys because we want to access the keys in the render
   ;; function, and by default everything gets recursively wrapped. This feels a
   ;; little wacky.
   :transform-fn (comp clerk/mark-preserve-keys
                       (clerk/update-val
                        (memoize xform)))
   :render-fn
   '(fn [x]
      (v/html
       (reagent/with-let [!sel (reagent/atom (ffirst x))]
         [:<>
          (into
           [:div.flex.items-center.font-sans.text-xs.mb-3
            [:span.text-slate-500.mr-2 "View as:"]]
           (map (fn [[l _]]
                  [:button.px-3.py-1.font-medium.hover:bg-indigo-50.rounded-full.hover:text-indigo-600.transition
                   {:class (if (= @!sel l)
                             "bg-indigo-100 text-indigo-600"
                             "text-slate-500")
                    :on-click #(reset! !sel l)}
                   l])
                x))
          ;; I guess here the value is a data structure with its viewer info
          ;; embedded.
          [v/inspect-presented
           (get x @!sel)]])))})

(def multiviewer
  (literal-viewer transform-literal))

;; does it work?

(clerk/with-viewer multiviewer
  (+ (square (sin 'x))
     (square (cos 'x))))

;; woohoo! We can set it as default viewer for literals in this
;; namespace. (Uncomment this form and run `clerk-show` again...)

#_
(clerk/add-viewers! [multiviewer])

;; If you made a mistake you can totally replace or reset the viewer with:

#_
(clerk/reset-viewers! (into [multiviewer] (clerk/get-default-viewers)))


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
