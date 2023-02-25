^{:nextjournal.clerk/visibility {:code :hide}}
(ns ellipsoid
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial])
  (:require [emmy-viewers.demo :as d]
            [mentat.clerk-utils.show :refer [show-sci]]
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.viewer :as-alias viewer]
            [emmy-viewers.physics-viewers :as pv]
            [emmy.env :as e :refer :all]))

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

(defn elliptical->rect [a b c]
  (fn [[_ [theta phi] _]]
    (up (* a (sin theta) (cos phi))
        (* b (sin theta) (sin phi))
        (* c (cos theta)))))

;; Next, the Lagrangian:

(defn L-free-particle [m]
  (fn [[_ _ v]]
    (* 1/2 m (square v))))

(defn L-central-triaxial [m a b c]
  (comp (- (L-free-particle m)
           (fn [[_ [_ _ z]]]
             (* 9.8 m z)))
        (F->C (elliptical->rect a b c))))

;; Final Lagrangian:

(let [local (up 't
                (up 'theta 'phi)
                (up 'thetadot 'phidot))]
  ((L-central-triaxial 'm 'a 'b 'c) local))

;; simpler if we use `'r` for everything:

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

(clerk/with-viewer d/multiviewer
  (let [L (L-central-triaxial 'm 'r 'r 'r)
        theta (literal-function 'theta)
        phi (literal-function 'phi)]
    (((Lagrange-equations L) (up theta phi))
     't)))

;; This is fairly horrifying. This really demands animation, as I bet it looks
;; cool, but it's not comprehensible in this form.
;;
;; Lucky us!! Let's do it!

(show-sci
 (defn ColorCube
   [{:keys [dimensions size opacity]}]
   [:<>
    [Volume
     {:dimensions dimensions
      :items 1
      :channels 4
      :live false
      :expr (fn [emit x y z]
              (emit x y z opacity))}]
    [box/Point
     {:points "<"
      :colors "<"
      :color 0xffffff
      :size size}]]))

(clerk/with-viewer
  {:transform-fn pv/physics-xform
   :render-fn
   (q
    (fn [value]
      (viewer/html
       [mathbox/MathBox ~pv/opts
        [mb/Cartesian (:cartesian value)
         [mb/Axis {:axis 1 :width 3}]
         [mb/Axis {:axis 2 :width 3}]
         [mb/Axis {:axis 3 :width 3}]
         [demo.mathbox/Mass (select-keys value [:L :state->xyz :initial-state])]
         [demo.mathbox/Ellipse (:ellipse value)]]])))}
  (let [m 10000, a 1, b 2, c 1.5]
    {:degrees-of-freedom 2
     :state->xyz (elliptical->rect a b c)
     :L (L-central-triaxial m a b c)
     :initial-state [0
                     [0.1 0.1]
                     [0.4 1]]
     :ellipse {:a a :b b :c c}
     :cartesian {:width [-10 10]
                 :depth [-10 10]
                 :height [-10 10]
                 :scale [3 3 3]}}))

;; ## Equations of Motion:

^{::clerk/visibility :hide}
(clerk/with-viewer d/multiviewer
  (let [L (L-central-triaxial 'm 'a 'b 'c)
        theta (literal-function 'theta)
        phi   (literal-function 'phi)]
    (((Lagrange-equations L) (up theta phi))
     't)))
