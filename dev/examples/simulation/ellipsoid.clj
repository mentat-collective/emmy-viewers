(ns examples.simulation.ellipsoid
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial])
  (:require [emmy.env :as e :refer :all]
            [emmy.expression.compile :as xc]
            [examples.expression :as d]
            [emmy-viewers.physics :as pv]
            [mathbox.core :as-alias mathbox]
            [mathbox.primitives :as-alias mb]
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.viewer :as-alias viewer]))

;; ## Ellipsoid Particle
;;
;; > A bead of mass $m$ moves without friction on a triaxial ellipsoidal
;; > surface. In rectangular coordinates the surface satisfies
;; >
;; > $$
;; {x^2 \over a^2} + {y^2 \over b^2} + {z^2 \over c^2} = 1
;; $$
;; >
;; > for some constants $a$, $b$, and $c$. Identify suitable generalized
;; > coordinates, formulate a Lagrangian, and find Lagrange's equations.

;; First, prepare the viewers so that all literals render with the multiviewer:

(clerk/add-viewers! [d/multiviewer])

;; The transformation to elliptical coordinates is very similar to the spherical
;; coordinate transformation, but with a fixed $a$, $b$ and $c$ coefficient for
;; each rectangular dimension, and no more radial degree of freedom:

(defn elliptical->rect [_ a b c]
  (fn [[_ [theta phi] _]]
    (up (* a (sin theta) (cos phi))
        (* b (sin theta) (sin phi))
        (* c (cos theta)))))

;; Next, the Lagrangian:

(defn L-free-particle [m]
  (fn [[_ _ v]]
    (* 1/2 m (square v))))

((L-free-particle 'm)
 (up 't
     (up 'theta 'phi)
     (up 'v_theta 'v_phi)))

(defn L-central-triaxial [m a b c]
  (comp
   (- (L-free-particle m)
      (fn [[_ [_ _ z]]]
        (* 9.8 m z)))
   (F->C
    (elliptical->rect m a b c))))

;; Final Lagrangian:

(let [local (up 't
                (up 'theta 'phi)
                (up 'thetadot 'phidot))]
  ((L-central-triaxial 'm 'a 'b 'c) local))

;; simpler if we use `'r` for everything, we'll get the Lagrangian for a
;; particle confined to a sphere:

(let [local (up 't
                (up 'theta 'phi)
                (up 'thetadot 'phidot))]
  ((L-central-triaxial 'm 'r 'r 'r) local))


;; I'm sure there's some simplification in there for us. But why?
;;
;; Lagrange equations of motion for the ellipsoid:

(clerk/with-viewer d/multiviewer
  (let [L (L-central-triaxial 'm 'a 'b 'c)
        theta (literal-function 'theta)
        phi (literal-function 'phi)]
    (((Lagrange-equations L) (up theta phi))
     't)))

;; And for the sphere:

#_(clerk/with-viewer d/multiviewer
    (let [L (L-central-triaxial 'm 'r 'r 'r)
          theta (literal-function 'theta)
          phi (literal-function 'phi)]
      (((Lagrange-equations L) (up theta phi))
       't)))

;; This is fairly horrifying. This really demands animation, as I bet it looks
;; cool, but it's not comprehensible in this form.
;;
;; Lucky us!! Let's do it!

^{::clerk/viewer
  {:transform-fn
   (comp clerk/mark-presented
         (clerk/update-val
          (fn [{:keys [L params initial-state state->xyz] :as m}]
            (assoc m
                   :L
                   (xc/compile-state-fn
                    (compose e/Lagrangian->state-derivative L)
                    params
                    initial-state
                    {:mode :js
                     :calling-convention :primitive
                     :generic-params? false})

                   :state->xyz
                   (xc/compile-state-fn
                    state->xyz
                    params
                    initial-state
                    {:mode :js
                     :calling-convention :primitive
                     :generic-params? false})))))
   :render-fn
   (q
    (fn [value]
      [mathbox/MathBox
       {:container  {:style {:height "400px" :width "100%"}}
        :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
        :renderer   {:background-color 0xffffff}}
       [mb/Cartesian (:cartesian value)
        [mb/Axis {:axis 1 :width 3}]
        [mb/Axis {:axis 2 :width 3}]
        [mb/Axis {:axis 3 :width 3}]
        [demo.mathbox/Mass
         (select-keys
          value [:L :state->xyz :initial-state :params])]
        [demo.mathbox/Ellipse (:ellipse value)]]]))}}
(let [m 10000
      a 3
      b 2
      c 1.5]
  {:state->xyz elliptical->rect
   :L L-central-triaxial
   :params [m a b c]
   :initial-state [0
                   [0.001 0.001]
                   [0 0]]
   :ellipse {:a a :b b :c c}
   :cartesian
   {:range [[-10 10]
            [-10 10]
            [-10 10]]
    :scale [3 3 3]}})

;; ## Equations of Motion:

^{::clerk/visibility :hide}
(clerk/with-viewer d/multiviewer
  (let [L (L-central-triaxial 'm 'a 'b 'c)
        theta (literal-function 'theta)
        phi   (literal-function 'phi)]
    (((Lagrange-equations L) (up theta phi))
     't)))
