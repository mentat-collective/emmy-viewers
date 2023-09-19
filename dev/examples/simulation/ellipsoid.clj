^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.ellipsoid
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare abs
             numerator denominator ref partial infinite?])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.leva :as leva]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]
            [emmy.mathbox.physics]
            [emmy.viewer.physics]
            [nextjournal.clerk :as clerk]))

{::clerk/width :wide}

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

^{::clerk/visibility {:result :hide}}
(ec/install! ec/multiviewer)

;; The transformation to elliptical coordinates is very similar to the spherical
;; coordinate transformation, but with a fixed $a$, $b$ and $c$ coefficient for
;; each rectangular dimension, and no more radial degree of freedom:

(defn elliptical->rect [a b c]
  (fn [[theta phi]]
    (up (* a (sin theta) (cos phi))
        (* b (sin theta) (sin phi))
        (* c (cos theta)))))

(defn e->r [a b c]
  (comp (elliptical->rect a b c)
        coordinate))

;; Next, the Lagrangian:

(defn L-free-particle [m]
  (fn [[_ _ v]]
    (* 1/2 m (square v))))

((L-free-particle 'm)
 (up 't
     (up 'theta 'phi)
     (up 'v_theta 'v_phi)))

(defn L-central-triaxial [m g a b c]
  (comp (- (L-free-particle m)
           (fn [[_ [_ _ z]]]
             (* g m z)))
        (F->C (e->r a b c))))

;; Final Lagrangian:

(let [local (up 't
                (up 'theta 'phi)
                (up 'thetadot 'phidot))]
  ((L-central-triaxial 'm 'g 'a 'b 'c) local))

;; simpler if we use `'r` for everything, we'll get the Lagrangian for a
;; particle confined to a sphere:

(let [local (up 't
                (up 'theta 'phi)
                (up 'thetadot 'phidot))]
  ((L-central-triaxial 'm 'g 'r 'r 'r) local))

;; I'm sure there's some simplification in there for us. But why?
;;
;; Lagrange equations of motion for the ellipsoid:

(ec/->TeX
 (let [L (L-central-triaxial 'm 'g 'a 'b 'c)
       theta (literal-function 'theta)
       phi (literal-function 'phi)]
   (simplify
    (((Lagrange-equations L) (up theta phi))
     't))))

;; And for the sphere:

(ec/->TeX
 (let [L (L-central-triaxial 'm 'g 'r 'r 'r)
       theta (literal-function 'theta)
       phi (literal-function 'phi)]
   (simplify
    (((Lagrange-equations L) (up theta phi))
     't))))

;; This is fairly horrifying. This really demands animation, as I bet it looks
;; cool, but it's not comprehensible in this form.
;;
;; Lucky us!! Let's do it!

(let [initial-state [0 [0.001 0.001] [0 0]]]
  (ev/with-let [!state {:state initial-state}
                !opts  {:m 10 :g 9.8 :a 3 :b 2 :c 1.5}]
    (plot/scene
     (leva/controls
      {:atom !opts
       :schema
       {:g {:min 2 :max 20 :step 0.01}
        :a {:min 1 :max 5 :step 0.01}
        :b {:min 1 :max 5 :step 0.01}
        :c {:min 1 :max 5 :step 0.01}}})

     (emmy.viewer.physics/evolve-lagrangian
      {:atom !state
       :initial-state initial-state
       :L (ev/with-params {:atom !opts :params [:m :g :a :b :c]}
            L-central-triaxial)})

     (plot/parametric-surface
      {:opacity 0.2
       :f (ev/with-params {:atom !opts :params [:a :b :c]}
            elliptical->rect)
       :u [0 Math/PI]
       :v [0 (* 2 Math/PI)]})

     (emmy.mathbox.physics/comet
      {:length 16
       :initial-state initial-state
       :atom !state
       :state->xyz
       (ev/with-params {:atom !opts :params [:a :b :c]}
         e->r)}))))
