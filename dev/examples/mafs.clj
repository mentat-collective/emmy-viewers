^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.mafs
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial
             infinite? abs])
  (:require [nextjournal.clerk :as clerk]
            [emmy.env :as e :refer :all]
            [emmy.expression.compile :as xc]
            [emmy.polynomial :as poly]))


;; TODO do we want a mafs package that stays here?
;;
;; TODO can we get the notebook to cache better?
(def Theme
  {:foreground "var(--mafs-fg)"
   :background "var(--mafs-bg)"
   :red "var(--mafs-red)"
   :orange "var(--mafs-orange)"
   :green "var(--mafs-green)"
   :blue "var(--mafs-blue)"
   :indigo "var(--mafs-indigo)"
   :violet "var(--mafs-violet)"
   :pink "var(--mafs-pink)"
   :yellow "var(--mafs-yellow)"})

(defn fn-transform [f mode]
  (xc/compile-fn f 1 {:mode mode}))

;; Let's try it:

(-> (fn [x]
      (+ (square x)
         (cube x)))
    (fn-transform :source))

(clerk/code
 (-> (fn [x]
       (+ (square x)
          (cube x)))
     (fn-transform :source)))

(clerk/code
 (-> (fn [x]
       (+ (square x)
          (cube x)))
     (fn-transform :js)))

(def fn-viewer
  {:transform-fn
   (comp clerk/mark-presented
         (clerk/update-val
          (fn [f]
            (merge (or (meta f) {})
                   {:func (fn-transform f :js)}))))
   :render-fn
   '(fn [{[x body] :func
         cart-opts :cartesian
         plot-opts :plot
         :or {cart-opts {}
              plot-opts {}}}]
      (reagent.core/with-let [f (js/Function. x body)]
        (nextjournal.clerk.viewer/html
         [mafs.core/Mafs
          [mafs.coordinates/Cartesian cart-opts]
          [mafs.plot/OfX (merge plot-opts {:y f})]])))})

;; ### Demo
;;
;; Let's make a function to try!

(defn my-fn [x]
  (+ (square (sin x))
     (square x)))

;; Then we'll call it with our new viewer:

(clerk/with-viewer fn-viewer
  (with-meta my-fn {:plot
                    {:color (:pink Theme)}}))

(defn sigmoid1 [x]
  (- (/ 2 (+ (exp (negate x)) 1)) 1))

(clerk/with-viewer fn-viewer
  (with-meta sigmoid1 {:plot
                       {:color (:pink Theme)}}))

;; ## Polynomials
;;
;; I think this can work out of the box for an Emmy Polynomial.

(def my-poly
  (let [x (poly/identity 2)]
    ((+ (- x)
        (square x)
        (cube x)))))

^{::clerk/viewer fn-viewer}
my-poly
