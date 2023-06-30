^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.toroid
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial
             infinite? abs])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.leva :as leva]
            [emmy.mechanics.rotation :as rot]
            [emmy.mathbox.physics :as ph]
            [emmy.mathbox.plot :as plot]
            [emmy.structure :as s]
            [emmy.viewer :as ev]
            [nextjournal.clerk :as clerk]))

;; ## Geodesics of the Torus
;;
;; Investigate the many interesting geodesics on the torus. This is similar to
;; the [[examples.simulation.ellipsoid]] investigation, but here we will set
;; gravity to zero and give our particle an initial velocity tangent to the
;; toroidal surface and see where it will travel under the surface's intrinsic
;; notion of free-fall.
;;
;; First, prepare the viewers so that all literals render with the multiviewer:

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/add-viewers! [ec/meta-viewer ec/multiviewer])

;; There is such a thing as toroidal coordinates--see
;; [Wikipedia](https://en.wikipedia.org/wiki/Toroidal_coordinates)-- but for our
;; purposes those coordinates are unintuitive, and more useful in a 3d setting
;; than we will need here. For us, living on the surface of the torus, we will
;; describe our position by two angles: $\phi$, the azimuth, or the angle we
;; make around the z axis measured in the xy plane which contains the torus'
;; central axis circle of radios $R$, and $\theta$, the angle we make obout the
;; central axis of the torus, where zero starts at the outer equator and $\pi$
;; represents the inner equator. The radius of the interior is denoted by $r$.
;; Now...

(defn toroidal->rect [R r]
  (fn [[theta phi]]
    (*
     (rot/rotate-z-matrix phi)
     (s/up (+ R (* r (cos theta)))
           0
           (* r (sin theta))))))

(defn t->r [R r]
  (comp (toroidal->rect R r)
        coordinate))

;; Next, the Lagrangian. T, the kinetic energy, is just $mv^2/2$. For this
;; demonstration, we aren't interested in dynamics, so we'll set $m$ to $1$ and
;; forget about it for the rest of the page. Without gravity, there's no
;; potential energy, so $V\equiv 0$.

(defn T-free-particle
  [[_ _ v]]
  (* 1/2 (square v)))

(defn V-free-particle
  [[_ _ _]]
  0)

(T-free-particle
 (up 't
     (up 'theta 'phi)
     (up 'v_theta 'v_phi)))

(defn L-toroidal [R r]
  (comp
   (- T-free-particle
      V-free-particle)
   (F->C (t->r R r))))

;; Let's have a look:

(let [local (up 't
                (up 'theta 'phi)
                (up 'thetadot 'phidot))]
  ((L-toroidal 'R 'r) local))

;; I was frankly expecting a little more trigonometry in there. Maybe I did
;; something wrong. In any case, let's proceed.
;;
;; Lagrange equations of motion for the torus:

(clerk/with-viewer ec/multiviewer
  (let [L (L-toroidal 'R 'r)
        theta (literal-function 'theta)
        phi (literal-function 'phi)]
    (((Lagrange-equations L) (up theta phi))
     't)))

;; Ooof. Be careful what you ask for. Time to draw a picture.
;;
;; To influence the trajectory, you can choose the initial elevation on the
;; upper half-torus by manipulating $\theta_0$. Imagine at that point there is a
;; little unit circle allowing you to select the direction to proceed from
;; there: this is $\alpha_0$, the direction of a unit vector in $(\theta,
;; \phi)$-space.

^{::clerk/width :full}
(ev/with-let [!params {:R 2 :r 0.5 :theta_0 1 :alpha_0 0 :steps 1500}]
  (plot/scene
   (leva/controls
    {:atom !params
     :folder {:name "Torus"}
     :schema
     {:R       {:min 0.5 :max 2 :step 0.01}
      :r       {:min 0.5 :max 2 :step 0.01}
      :theta_0 {:label (->infix 'theta_0) :min 0 :max Math/PI :step 0.02}
      :alpha_0 {:label (->infix 'alpha_0) :min 0 :max Math/PI :step 0.02}
      :steps   {:min 500 :max 9000 :step 50}}})

   (ph/ode-curve
    {:initial-state
     [0
      [(ev/get !params :theta_0) 0]
      [(list 'Math/cos (ev/get !params :alpha_0))
       (list 'Math/sin (ev/get !params :alpha_0))]]
     :f' (ev/with-params {:atom !params :params [:R :r]}
           (compose e/Lagrangian->state-derivative L-toroidal))
     :state->xyz (ev/with-params {:atom !params :params [:R :r]}
                   t->r)
     :steps (ev/get !params :steps)
     :width 2
     :end? true})

   (plot/parametric-surface
    {:f (ev/with-params {:atom !params :params [:R :r]}
          toroidal->rect)
     :u [0 (* 2 Math/PI)]
     :v [0 (* 2 Math/PI)]})))
