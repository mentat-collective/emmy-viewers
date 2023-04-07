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
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.viewer :as-alias viewer]))

;; ## Geodesics of the Torus
;;
;; Investigate the many interesting geodesics on the torus. This is
;; similar to the [[examples.simulation.ell ipsoid]] investigation, but
;; here we will set gravity to zero and give our particle an initial
;; velocity tangent to the toroidal surface and see where it will
;; travel under the surface's intrinsic notion of free-fall.
;;
;; > for some constants $a$, $b$, and $c$. Identify suitable generalized
;; > coordinates, formulate a Lagrangian, and find Lagrange's equations.

;; First, prepare the viewers so that all literals render with the multiviewer:

(clerk/add-viewers! [d/multiviewer])

;; There is such a thing as toroidal coordinates--see
;; [Wikipedia](https://en.wikipedia.org/wiki/Toroidal_coordinates)--
;; but for our purposes those coordinates are unintuitive, and more
;; useful in a 3d setting than we will need here. For us, living on
;; the surface of the torus, we will describe our position by two
;; angles: $\phi$, the azimuth, or the angle we make around the z
;; axis measured in the xy plane, and $\theta$,


(defn toroidal->rect [_ R r]
  (fn [[_ [theta phi] _]]
    (*
     (rot/rotate-z-matrix phi)
     (s/up (+ R (* r (cos theta)))
           0
           (* r (sin theta))))))

;; Next, the Lagrangian:

(defn T-free-particle [m]
  (fn [[_ _ v]]
    (* 1/2 m (square v))))

(defn V-free-particle [_m]
  (constantly 0))

((T-free-particle 'm)
 (up 't
     (up 'theta 'phi)
     (up 'v_theta 'v_phi)))

(defn L-toroidal [m R r]
  (comp
   (- (T-free-particle m)
      (V-free-particle m))
   (F->C
    (toroidal->rect m R r))))

;; Let's have a look:

(let [local (up 't
                (up 'theta 'phi)
                (up 'thetadot 'phidot))]
  ((L-toroidal 1 'R 'r) local))

;; I was frankly expecting a little more trigonometry in there.
;; Maybe I did something wrong. In any case, let's proceed.
;;
;; Lagrange equations of motion for the torus:

(clerk/with-viewer d/multiviewer
  (let [L (L-toroidal 1 'R 'r)
        theta (literal-function 'theta)
        phi (literal-function 'phi)]
    (((Lagrange-equations L) (up theta phi))
     't)))

;; Ooof. Be careful what you ask for. Time to draw a picture.
;;
^{::clerk/viewer
  {:transform-fn
   (comp clerk/mark-presented
         (clerk/update-val
          (fn [{:keys [L params initial-state state->xyz
                      keys] :as m}]
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

(let [m 10000
      R 2
      r 0.5]
  {:params {:mass m :R R :r r}
   :schema
   {:mass {:min 1000 :max 20000 :step 100}
    :R   {:min 0.5 :max 2 :step 0.01}
    :r   {:min 0.5 :max 2 :step 0.01}}
   :keys [:mass :R :r]
   :state->xyz toroidal->rect
   :L L-toroidal
   :initial-state [0 [0 0] [6 1]]
   :cartesian
   {:range [[-10 10]
            [-10 10]
            [-10 10]]
    :scale [3 3 3]}})
