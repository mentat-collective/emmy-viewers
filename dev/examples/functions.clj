^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.functions
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial])
  (:require [examples.expression :as d]
            [mentat.clerk-utils.viewers :refer [q]]
            [mathbox.core :as-alias mathbox]
            [mathbox.primitives :as-alias mb]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.viewer :as viewer]
            [emmy.env :as e :refer :all]
            [emmy.expression.compile :as xc]
            [emmy.polynomial :as poly]))

;; ## Function Viewer
;;
;; This namespace demos a viewer for function objects; these are functions that
;; _work_ locally, you can call them in the REPL, but you can also send them
;; over the wire to be rendered in the browser.

;;
;; ### Function Compilation
;;
;; Let's assume that the value we will send to the viewer is Clojure function.
;; How do we get the function over to the browser?
;;
;; We can't serialize it directly. What we _can_ do is use SICMUtil's function
;; compiler in `:source` mode to generate a hygienic function literal.
;;
;; Clojure is built out of its own data structures, so that will serialize
;; nicely.

(defn- fn-transform [f]
  (xc/compile-fn f 2 {:mode :source}))

;; Let's try it:

(fn-transform
 (fn [x _]
   (+ (square x)
      (cube x))))

;; Not too pretty. We can reuse `d/->pretty-str` here (and already it's obvious
;; that a better presentation would have made `fn-transform` act on the
;; function, not the FULL map, but whatever):

(clerk/code
 (fn-transform
  (fn [x _]
    (+ (square x)
       (cube x)))))

;; That will work.
;;
;; On the client side, we can use SICMUtil's
;; `sicmutils.expression.compile/sci-eval` function to evaluate (using SCI) this
;; code-shaped data structure into a proper procedure.
;;
;; Look at `Function1` in `src/demo/mathbox_react.cljs` to see what we will DO
;; with this procedure in the browser.
;;
;; ### Rendering
;;
;; Now that we have a function literal we need to build our viewer. We will be
;; sending a hand-crafted function literal over the wire to Clerk's browser
;; environment. This function will accept the result of `(fn-transform
;; <original-value>)` after it's been serialized over to the browser.
;;
;; This environment is very powerful, and has reagent and many other features
;; available out of the box. This project customizes the viewer to add in more
;; functions; see `src/demo/viewers.cljs` for the suite of additions, and feel
;; free to add your own.
;;
;; Here is a function literal that configures a canvas for Mathbox to live in,
;; and does my currently-best-available poor imitation of React, by
;;
;; - Setting up a Mathbox scene on first load
;; - Blowing away all elements and fully re-rendering the scene on any change to
;;   the incoming value.

;; Note that this is a binding to a quoted functional form; this will not
;; execute on the JVM, but will be executed by SCI over in the browser.
;;
;; Every time the incoming `value` changes, mathbox-react will redraw the full
;; scene.

(def fn-render-fn
  (q
   (fn [{:keys [range scale samples f]}]
     (viewer/html
      [mathbox/MathBox
       {:container {:style {:height "400px" :width "100%"}}
        :renderer  {:background-color 0xffffff}}
       [mb/Camera {:proxy true :position [2.3 1 2]}]
       [mb/Cartesian {:range range :scale scale}
        [mb/Axis {:axis 1 :width 3}]
        [mb/Axis {:axis 2 :width 3}]
        [mb/Axis {:axis 3 :width 3}]
        [demo.mathbox/Function1 {:samples samples :f f}]]]))))

;; [[fn-render-fn]] also uses some reagent state internally; this is how it's
;; able to compare current and previous values and decide whether or not to
;; re-render.

;; The final viewer is a clojure map with these two pieces supplied:

(def fn-viewer
  {:transform-fn (comp clerk/mark-presented
                       (clerk/update-val
                        #(update % :f fn-transform)))
   :render-fn fn-render-fn})

;; ### Demo
;;
;; Let's make a function to try!

(defn my-fn [x t]
  (+ (square (sin x))
     (square
      (cos (* t x)))))

;; The function works locally, with numbers or symbols:

[(my-fn 1 2) (my-fn 'x 't)]

;; Then we'll call it with our new viewer:

(clerk/with-viewer fn-viewer
  {:range [[-6 6] [-1 1] [-1 1]]
   :scale [6 1 1]
   :samples 256
   :f my-fn})

;; We can write a wrapper function to reuse the scene-setting elements:

(defn ->mathbox [f]
  (clerk/with-viewer fn-viewer
    {:range [[-6 6] [-1 1] [-1 1]]
     :scale [6 1 1]
     :samples 256
     :f f}))

;; We can then use the above viewer using `with-viewer`:

(->mathbox my-fn)

;; And here's the equation:

^{::clerk/visibility :hide
  ::clerk/viewer d/multiviewer}
(my-fn 'x 't)

;; I used Clerk's `:hide` visibility to only show the result.

;; ### Compound Viewer
;;
;; Just for fun, we can even reuse the [[literal-viewer]] component to make a
;; version that can toggle between function and TeX:

(def compound-fn-viewer
  (d/literal-viewer
   (fn [{:keys [f args]}]
     {:TeX     (clerk/tex
                (->TeX (simplify (apply f args))))
      :mathbox (->mathbox f)})))

(clerk/with-viewer compound-fn-viewer
  {:f my-fn
   :args ['x 't]})

;; PHEW, okay, let's leave it here for now.
;;
;; ## Polynomials
;;
;; I think this can work out of the box for an Emmy Polynomial. We really should
;; be pushing these into Mafs...

(def my-poly
  (let [x (poly/identity 2)]
    ((+ (- x)
        (square x)
        (cube x)))))

^{::clerk/viewer fn-viewer}
{:range [[-6 6] [-1 1] [-1 1]]
 :scale [6 1 1]
 :samples 256
 :f my-poly}
