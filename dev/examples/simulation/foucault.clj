;; # Foucault's Pendulum

^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.foucault
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare numerator denominator
             ref partial infinite? abs])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.leva :as leva]
            [emmy.mathbox.physics :as ph]
            [emmy.mathbox.plot :as p]
            [emmy.viewer :as ev]
            [nextjournal.clerk :as clerk]))

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; In 1851 Léon Foucault hung a 28 kg bob from a 67 m wire under the dome of
;; the Panthéon in Paris. As the pendulum swung, its plane of oscillation slowly
;; turned clockwise, giving the first direct demonstration of the Earth's
;; rotation. This notebook derives the motion from a Lagrangian, integrates it
;; and checks the classic prediction: the swing plane precesses at a rate of
;; $\Omega \sin \varphi$, where $\Omega$ is the Earth's sidereal rotation rate
;; and $\varphi$ is the latitude.

;; ## Parameters

(def Omega-earth
  "Sidereal rotation rate of the Earth, in rad/s."
  (/ (* 2 Math/PI) 86164.1))

(def g
  "Effective gravitational acceleration at the surface, in m/s^2."
  9.81)

(def m
  "Mass of the bob in the Panthéon, in kg."
  28.0)

(def l
  "Length of the wire in the Panthéon, in m."
  67.0)

(def Paris-latitude
  "Latitude of the Panthéon, 48°51' N, in radians."
  (* (+ 48 (/ 51 60.0)) (/ Math/PI 180)))

;; For small swings the period is $2\pi\sqrt{l/g}$, a little over 16 seconds.

(def period
  (* 2 Math/PI (Math/sqrt (/ l g))))

;; ## The Lagrangian
;;
;; We work in a frame attached to the Earth's surface, with the origin at the
;; bottom of the swing. The $x$ axis points north, $y$ points west and $z$ points
;; up. In this frame the Earth's angular velocity vector is
;;
;; $$\vec{\omega} = (\Omega \cos\varphi, 0, \Omega \sin\varphi).$$
;;
;; A particle at position $\vec{r}$ with velocity $\vec{v}$ relative to the
;; rotating frame has inertial velocity $\vec{v} + \vec{\omega} \times \vec{r}$.
;; The Lagrangian of a free particle in a uniform gravitational field, written
;; in the rotating frame, is then:

(defn L-rotating
  "Lagrangian of a particle of mass `m` in uniform gravity `g`, in a frame
  rotating at rate `Omega` about the axis of the Earth at latitude `lat`."
  [m g Omega lat]
  (let [omega (up (* Omega (cos lat)) 0 (* Omega (sin lat)))]
    (fn [[_ r v]]
      (- (* 1/2 m (square (+ v (cross-product omega r))))
         (* m g (ref r 2))))))

;; Gravity here is the effective surface gravity, which already folds in the
;; small centrifugal correction; the centrifugal term left in the kinetic energy
;; is of order $\Omega^2 l / g \approx 10^{-8}$ and has no visible effect.
;;
;; The bob is constrained to a sphere of radius $l$ around the suspension point.
;; We use the horizontal displacement $(x, y)$ of the bob as generalized
;; coordinates:

(defn bob->local
  "Coordinate transformation from the bob's horizontal displacement `(x, y)` to
  its position in the local frame, for a pendulum of length `l`."
  [l]
  (fn [[_ [x y] _]]
    (up x
        y
        (- l (sqrt (- (square l) (square x) (square y)))))))

(defn L-foucault
  "Lagrangian of a Foucault pendulum in terms of the horizontal displacement of
  its bob."
  [m g l Omega lat]
  (compose (L-rotating m g Omega lat)
           (F->C (bob->local l))))

;; Here is the rotating-frame Lagrangian evaluated on a generic state; the
;; pendulum Lagrangian is this one composed with `bob->local`:

^{::clerk/visibility {:code :hide}}
(clerk/tex
 (->TeX
  (simplify
   ((L-rotating 'm 'g 'Omega 'varphi)
    (up 't
        (up 'x 'y 'z)
        (up 'xdot 'ydot 'zdot))))))

;; ## Evolving the system

(defn foucault-state-derivative [m g l Omega lat]
  (Lagrangian->state-derivative
   (L-foucault m g l Omega lat)))

(defn simulate
  "Integrates the pendulum released from rest at displacement `(amplitude, 0)`
  and returns every state at intervals of `dt` up to time `horizon`."
  [{:keys [lat amplitude dt horizon]
    :or {amplitude 1.0 dt 0.1}}]
  (let [!states (atom [])]
    ((evolve foucault-state-derivative m g l Omega-earth lat)
     [0 [amplitude 0] [0 0]]
     dt
     horizon
     {:compile? true
      :epsilon 1e-12
      :observe (fn [_ state]
                 (swap! !states conj state))})
    @!states))

;; To measure the precession, we split the trajectory into windows one period
;; long and find the orientation of the swing plane in each window: the
;; direction of the principal axis of the points the bob visits.

(defn swing-angle
  "Returns the orientation (in radians, modulo pi) of the swing plane traced out
  by `states`."
  [states]
  (let [xs  (map (fn [[_ [x _]]] x) states)
        ys  (map (fn [[_ [_ y]]] y) states)
        sxx (reduce + (map * xs xs))
        syy (reduce + (map * ys ys))
        sxy (reduce + (map * xs ys))]
    (* 0.5 (Math/atan2 (* 2 sxy) (- sxx syy)))))

(defn swing-angles
  "Returns a sequence of `{:t <time> :angle <swing plane angle>}` maps, one per
  period."
  [states dt]
  (let [n (long (Math/round (/ period dt)))]
    (for [window (partition n states)]
      {:t     (first (first window))
       :angle (swing-angle window)})))

(defn precession-rate
  "Least-squares slope of swing-plane angle against time, in rad/s."
  [angles]
  (let [k  (count angles)
        ts (map :t angles)
        as (map :angle angles)
        mt (/ (reduce + ts) k)
        ma (/ (reduce + as) k)]
    (/ (reduce + (map (fn [t a] (* (- t mt) (- a ma))) ts as))
       (reduce + (map (fn [t] (square (- t mt))) ts)))))

;; Twenty minutes of swinging in Paris:

(def paris-angles
  (swing-angles
   (simulate {:lat Paris-latitude :horizon 1200})
   0.1))

^{::clerk/visibility {:code :hide}}
(clerk/vl
 {:width 600
  :height 300
  :data {:values (mapv (fn [{:keys [t angle]}]
                         {:t t :degrees (* angle (/ 180 Math/PI))})
                       paris-angles)}
  :mark {:type "point"}
  :encoding {:x {:field :t :type "quantitative" :title "time (s)"}
             :y {:field :degrees :type "quantitative"
                 :title "swing plane angle (degrees)"}}})

;; The plane turns clockwise as seen from above, at a steady rate. In degrees
;; per hour:

(* 3600 (/ 180 Math/PI) (precession-rate paris-angles))

;; Foucault's prediction for Paris is $-\Omega \sin\varphi$:

(* 3600 (/ 180 Math/PI) (- (* Omega-earth (sin Paris-latitude))))

;; That's about 11.3 degrees per hour, a full turn in about 32 hours.
;;
;; The same comparison at a few other latitudes, with both rates in rad/s:

^{::clerk/visibility {:code :hide}}
(clerk/table
 {:head ["latitude (degrees)" "simulated" "Ω sin φ"]
  :rows (for [deg [0 30 60 90]
              :let [lat (* deg (/ Math/PI 180))]]
          [deg
           (- (precession-rate
               (swing-angles (simulate {:lat lat :horizon 600}) 0.1)))
           (* Omega-earth (sin lat))])})

;; At the equator the plane doesn't turn at all; at the pole it turns once per
;; sidereal day.

;; ## Visualization
;;
;; At the real rotation rate the precession is far too slow to watch, so the
;; scene below speeds the Earth up by the factor `:speedup`. The curve traces the
;; bob's path as seen from above; drag the sliders to change the latitude and
;; the speed of the Earth.

^{::clerk/visibility {:code :fold}}
(ev/with-let [!params {:latitude 49.0
                       :speedup 1000
                       :steps 2000}]
  (p/scene
   (leva/controls
    {:atom !params
     :folder {:name "Foucault's Pendulum"}
     :schema
     {:latitude {:min -90 :max 90 :step 0.1}
      :speedup {:min 0 :max 3000 :step 1}
      :steps {:min 0 :max 5000 :step 1}}})
   (ph/lagrangian-curve
    {:L (ev/with-params {:atom !params :params [:latitude :speedup]}
          (fn [latitude speedup]
            (L-foucault m g l
                        (* speedup Omega-earth)
                        (* latitude (/ Math/PI 180)))))
     :initial-state [0 [2 0] [0 0]]
     :state->xyz (fn [[_ [x y] _]]
                   (up x y 0))
     :steps (ev/get !params :steps)
     :dt 0.1
     :end? true})))
