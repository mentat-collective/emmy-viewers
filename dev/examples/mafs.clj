^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.mafs
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial
             infinite? abs])
  (:require [clojure.walk :refer [postwalk]]
            [emmy.env :refer :all]
            [emmy.expression.compile :as xc]
            [emmy.polynomial :as poly]
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk :as clerk]))

;; ## Mafs Viewers
;;
;; So this trick totally works... except for the fact that the metadata attached
;; to the subforms is a function, and that blows up on the way over the wire. So
;; we want to carefully strip metadata OUT of the forms that we send over.
;;
;; The test is to get of-x working as well on its own as `mafs` now does.

(def meta-viewer
  {:pred (comp ifn? ::clerk/viewer meta)
   :transform-fn
   (clerk/update-val
    (fn [v]
      ((-> v meta ::clerk/viewer) v)))})

(clerk/add-viewers! [meta-viewer])

(def Theme
  {:red "var(--mafs-red)"
   :orange "var(--mafs-orange)"
   :green "var(--mafs-green)"
   :blue "var(--mafs-blue)"
   :indigo "var(--mafs-indigo)"
   :violet "var(--mafs-violet)"
   :pink "var(--mafs-pink)"
   :yellow "var(--mafs-yellow)"})

(defn strip-meta [form]
  (postwalk (fn [x]
              (if (meta x)
                (with-meta x nil)
                x))
            form))

(defn render [form]
  (clerk/with-viewer
    {:render-fn
     (list 'fn ['_] (strip-meta form))}
    {}))

(defn mafs [& children]
  (let [[opts children] (if (map? (first children))
                          [(first children) (rest children)]
                          [{} children])]
    (with-meta (into ['mafs.core/Mafs opts] children)
      {::clerk/viewer render})))

(defn cartesian
  ([] (cartesian {}))
  ([opts]
   (with-meta ['mafs.coordinates/Cartesian opts]
     {::clerk/viewer
      #(render (mafs %))})))

(defn of-x [opts]
  (let [f (xc/compile-fn (:y opts) 1 {:mode :js})
        form
        (q
         (reagent.core/with-let [f' (js/Function. ~@f)]
           [mafs.plot/OfX ~(assoc opts :y 'f')]))]
    (with-meta form
      {::clerk/viewer #(render (mafs (cartesian) %))})))

(defn of-y [opts]
  (let [f (xc/compile-fn (:x opts) 1 {:mode :js})
        form
        (q
         (reagent.core/with-let [f' (js/Function. ~@f)]
           [mafs.plot/OfY ~(assoc opts :x 'f')]))]
    (with-meta form
      {::clerk/viewer #(render (mafs (cartesian) %))})))

(defn leva [opts]
  ['leva.core/Controls opts])

;; ## Demo!

(defn sigmoid1 [x]
  (-> (/ 2 (+ 1 (exp (- x))))
      (- 1)))

(cartesian)

(of-x {:y sin :color (:blue Theme)})

(mafs {:zoom {:min 0.1 :max 2}}
      (cartesian)
      (of-x {:y sin :color (:blue Theme)})
      (of-x {:y (+ cos (D sin)) :color (:green Theme)})
      (of-y {:x sigmoid1 :color (:pink Theme)}))

(defn derivatives [n f]
  (into [:<>]
        (map
         (fn [i color]
           (of-x {:y ((expt D i) f)
                  :color color}))
         (range n)
         (vals Theme))))

(mafs {:zoom {:min 0.1 :max 2}}
      (cartesian)
      (derivatives 6 (fn [x] (exp (* 4/5 x)))))

(defn my-fn [x]
  (+ (square (sin x))
     (square x)))

(of-x {:y my-fn})

;; ## Polynomials
;;
;; I think this can work out of the box for an Emmy Polynomial.

(def my-poly
  (let [x (poly/identity 2)]
    ((+ (- x)
        (square x)
        (cube x)))))

(of-x {:y my-poly})
