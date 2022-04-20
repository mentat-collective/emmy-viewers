^{:nextjournal.clerk/visibility :hide-ns}
(ns demo
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial])
  (:require [clojure.pprint :as pp]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.viewer :as viewer]
            [sicmutils.env :as e :refer :all]
            [sicmutils.expression :as x]
            [sicmutils.value :as v]))

;; ## Hello, SICMUtils!
;;
;; Is this thing on?

(simplify
 (+ 'x 'x (expt 'y 4) 'x 'x))

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

(defn ->pretty-str [expr]
  (let [form (v/freeze expr)]
    (with-out-str
      (pp/pprint form))))

(defn transform-literal [l]
  (let [simple (simplify l)]
    {:simplified_TeX (clerk/tex (->TeX simple))
     :simplified     (clerk/code (->pretty-str simple))
     :TeX            (clerk/tex (->TeX l))
     :original       (clerk/code (->pretty-str l))}))

;; Try it out:

(transform-literal
 (+ (square (sin 'x)) (square (cos 'x))))

(defn literal-viewer [xform]
  {:pred x/literal?
   :fetch-fn viewer/fetch-all
   :transform-fn (memoize xform)
   :render-fn
   '(fn [x]
      (v/html
       (reagent/with-let [!sel (reagent/atom (key (first x)))]
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
          (get x @!sel)])))})

(def multiviewer
  (literal-viewer transform-literal))

;; does it work?

(clerk/with-viewer multiviewer
  (+ (square (sin 'x))
     (square (cos 'x))))

;; woohoo! We can set it as default for the namespace:

#_
(clerk/set-viewers! [multiviewer])

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
