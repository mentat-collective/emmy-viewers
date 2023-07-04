;; # Evolving Foucault's Pendulum

^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.foucault
  (:refer-clojure
   :exclude [+ - * / = zero? compare numerator denominator
             ref partial infinite? abs run!])
  (:require [emmy.env :as e :refer :all :exclude [phi]]
            [emmy.clerk :as ec]
            [emmy.viewer :as ev]
            [emmy.mafs :as mafs]
            [emmy.mathbox.plot :as p]
            [emmy.mathbox.physics :as ph]
            [emmy.leva :as leva]
            [nextjournal.clerk :as clerk]))

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)

^{::clerk/visibility {:code :hide :result :hide}}
(defn render
  "Render an s-expression to TeX."
  [expr]
  (-> expr
      simplify
      ->TeX
      clerk/tex))

;; ## Constraints

(defn pendulum->rectangular
  "Pendulum constraints."
  [R l Omega phi]
  (fn [[t [theta lambda] _]]
    (let [rotate (comp (Rz (* Omega t))
                       (Ry phi))]
      (rotate
       (up (* l (sin theta) (cos lambda))
           (* l (sin theta) (sin lambda))
           (- (+ R l) (* l (cos theta))))))))

;; ## Unconstrained Lagrangian

(def R 6.37e6);; m (Earth radius)
(def G 6.67e-11);; m^3 kg^-1 s^-2 (Gravitational constant
(def M 5.97e24);; kg (Earth mass)
(def Omega (/ (* 2 pi) 86400)) ;; rad/s (Earth rotation rate)

#_(defn abs* [q]
    (let [a (last q)]
      (* a (abs (/ q a)))))

(defn U-gravity
  "Gravitational potential energy."
  [G M m]
  (fn [q]
    (/ (* -1 G M m)
       (abs q))))

(defn L
  "Lagrangian."
  [m U]
  (fn [[_ q v]]
    (- (* 1/2 m (square v))
       (U q))))

;; ## Constrained Lagrangian

(defn L-foucault-pendulum [m U R l Omega phi]
  (compose (L m U)
           (F->C (pendulum->rectangular R l Omega phi))))

^{::clerk/visibility {:code :hide :result :hide}}
(def q
  (up (literal-function 'theta)
      (literal-function 'lambda)))

^{::clerk/visibility {:code :hide}}
(render
 ((compose
   (L-foucault-pendulum 'm (U-gravity 'G 'M 'm) 'R 'l 'Omega 'phi)
   (Gamma q)) 't))

;; ## Lagrange equations


#_^{::clerk/visibility {:code :hide}}
(render
 (((Lagrange-equations
    (L-foucault-pendulum 'm (U-gravity 'G 'M 'm) 'R 'l 'Omega 'phi))
   q)
  't))

;; Quite long!

;; ## Evolving the system

^{::clerk/visibility {:result :hide}}
(defn foucault-state-derivative
  [m G M R l Omega phi]
  (Lagrangian->state-derivative
   (L-foucault-pendulum m (U-gravity G M m) R l Omega phi)))

#_(defn ->xyz [l]
    (pendulum->rectangular 0 l))

(defn run! [step horizon]
  (let [collector (atom (transient []))
        initial-state [0 [(/ pi 20) 0] [0 0]]]
    ((evolve
      (fn [m l phi]
        (foucault-state-derivative m G M R l (* Omega 10000) phi))
      28.0
      67.0
      0.0)
     initial-state
     step
     horizon
     {:compile? true
      :epsilon 1e-16
      :observe (fn [_ state]
                 (swap! collector conj! state))})
    (persistent! @collector)))

(def step 0.01)
(def horizon 50)

(def raw-data
  (time
   (run! step horizon)))

(defn transform-data [xs]
  (let [pv (principal-value Math/PI)]
    (map (fn [[t [theta lambda]]]
           {:t t
            :theta theta
            :lambda (pv lambda)})
         xs)))

(def data
  (time
   (doall
    (transform-data raw-data))))

(defn deep-merge [v & vs]
  (letfn [(rec-merge [v1 v2]
            (if (and (map? v1) (map? v2))
              (merge-with deep-merge v1 v2)
              v2))]
    (when (some identity vs)
      (reduce #(rec-merge %1 %2) v vs))))

(defn angles-plot [data]
  (let [quarter-spec
        {:encoding
         {:x {:field :t :type "quantitative"}
          :y {:field :unassigned :type "quantitative"}
          :size {:value 5}
          :tooltip [{:field :t :type "quantitative"}
                    {:field :unassigned :type "quantitative"}]}
         :mark {:type "circle"}
         :width 400
         :height 300
         :data {:name :points}}]
    {:config {:bar {:binSpacing 1 :discreteBandSize 5 :continuousBandSize 5}}
     :datasets {:points data}
     :width 800
     :height 600
     :vconcat
     (mapv (partial deep-merge quarter-spec)
           [{:encoding {:x {:field :t :type "quantitative"}
                        :y {:field :theta
                            :scale {:domain [(- Math/PI) Math/PI]}}
                        :tooltip [{:field :t :type "quantitative"}
                                  {:field :theta}]}}
            {:encoding {:x {:field :t :type "quantitative"}
                        :y {:field :lambda
                            :scale {:domain [(- Math/PI) Math/PI]}}
                        :size {:value 5}
                        :tooltip [{:field :t :type "quantitative"}
                                  {:field :lambda}]}}])}))

(clerk/vl
 (angles-plot data))

#_
(ev/with-let [!params {:m 28.0  ;; kg
                       :l 67.0  ;; m
                       :phi 0.1 ;; rad
                       :steps 10}]
  (p/scene
   (leva/controls
    {:atom !params
     :folder {:name "Foucault's Pendulum"}
     :schema
     {:m {:min 10 :max 30 :step 0.1}
      :l {:min 10 :max 100 :step 0.1}
      :phi {:min 0 :max pi :step 0.01}
      :steps {:min 0 :max 5000 :step 10}}})
   (ph/ode-curve
    {:initial-state [0 [(/ pi 4) 0] [0 0]]
     :f' (ev/with-params {:atom !params :params [:m :l :phi]}
           (fn [m l phi]
             (foucault-state-derivative m G M R l Omega phi)))
     :state->xyz (->xyz 4)
     :steps (ev/get !params :steps)
     :dt 100
     :end? true
     :simplify? false})))
