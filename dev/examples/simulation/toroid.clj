(ns examples.simulation.toroid
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial
             infinite? abs])
  (:require [emmy.env :as e :refer :all]
            [emmy.mechanics.rotation :as rot]
            [emmy.expression.compile :as xc]
            [emmy.structure :as s]
            [examples.expression :as d]
            [mathbox.core :as-alias mathbox]
            [mathbox.primitives :as-alias mb]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.viewer :as-alias viewer]))

;; ## Geodesics of the Torus
;;
;; Investigate the many interesting geodesics on the torus. This is
;; similar to the [[examples.simulation.ellipsoid]] investigation, but
;; here we will set gravity to zero and give our particle an initial
;; velocity tangent to the toroidal surface and see where it will
;; travel under the surface's intrinsic notion of free-fall.
;;
;; First, prepare the viewers so that all literals render with the multiviewer:

(clerk/add-viewers! [d/multiviewer])

;; There is such a thing as toroidal coordinates--see
;; [Wikipedia](https://en.wikipedia.org/wiki/Toroidal_coordinates)--
;; but for our purposes those coordinates are unintuitive, and more
;; useful in a 3d setting than we will need here. For us, living on
;; the surface of the torus, we will describe our position by two
;; angles: $\phi$, the azimuth, or the angle we make around the z
;; axis measured in the xy plane which contains the torus' central
;; axis circle of radios $R$, and $\theta$, the angle we make obout
;; the central axis of the torus, where zero starts at the outer
;; equator and $\pi$ represents the inner equator. The radius of
;; the interior is denoted by $r$. Now...

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

;; Next, the Lagrangian. T, the kinetic energy, is just $mv^2/2$.
;; For this demonstration, we aren't interested in dynamics, so
;; we'll set $m$ to $1$ and forget about it for the rest of the
;; page. Without gravity, there's no potential energy, so $V\equiv 0$.

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

;; I was frankly expecting a little more trigonometry in there.
;; Maybe I did something wrong. In any case, let's proceed.
;;
;; Lagrange equations of motion for the torus:

(clerk/with-viewer d/multiviewer
  (let [L (L-toroidal 'R 'r)
        theta (literal-function 'theta)
        phi (literal-function 'phi)]
    (((Lagrange-equations L) (up theta phi))
     't)))

;; Ooof. Be careful what you ask for. Time to draw a picture.
;;
;; To influence the trajectory, you can choose the initial elevation on the
;; upper half-torus by manipulating $\theta_0$. Imagine at that point there is
;; a little unit circle allowing you to select the direction to proceed from
;; there: this is $\alpha_0$, the direction of a unit vector in
;; $(\theta, \phi)$-space.

^{::clerk/viewer
  {:transform-fn
   (comp clerk/mark-presented
         (clerk/update-val
          (fn [{:keys [L params initial-state state->xyz
                      keys] :as m}]
            (prn (xc/compile-state-fn
                  state->xyz
                  (mapv params keys)
                  initial-state
                  {:mode :js
                   :calling-convention :primitive
                   :generic-params? true}))
            (assoc m
                   :L
                   (xc/compile-state-fn
                    (compose e/Lagrangian->state-derivative L)
                    (mapv params keys)
                    initial-state
                    {:mode :js
                     :calling-convention :primitive
                     :generic-params? true})

                   :state->xyz
                   (xc/compile-state-fn
                    state->xyz
                    (mapv params keys)
                    initial-state
                    {:mode :js
                     :calling-convention :primitive
                     :generic-params? true})))))
   :render-fn 'demo.mathbox/ToroidViewer}}

(let [R 2
      r 0.5
      theta_0 0
      alpha_0 0]
  {:params {:R R :r r :theta_0 theta_0 :alpha_0 alpha_0}
   :schema
   {:R   {:min 0.5 :max 2 :step 0.01}
    :r   {:min 0.5 :max 2 :step 0.01}
    :theta_0 {:min 0 :max Math/PI :step 0.02}
    :alpha_0 {:min 0 :max Math/PI :step 0.02}}
   :keys [:R :r]
   :state->xyz t->r
   :L L-toroidal
   :initial-state [0 [0 0] [6 1]]
   :cartesian
   {:range [[-10 10]
            [-10 10]
            [-10 10]]
    :scale [3 3 3]}})
