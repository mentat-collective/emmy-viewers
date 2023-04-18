(ns examples.simulation.klein-bottle
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

;; ## One immersion of the Klein bottle
;;
(clerk/add-viewers! [d/multiviewer])

;; The [figure eight immersion](https://en.wikipedia.org/wiki/Klein_bottle#The_figure_8_immersion)
(defn klein-f8->rect [r]
  (fn [[_ [theta v] _]]
    (let [sinv (sin v)
          sin2v (sin (* 2 v))
          halftheta (/ theta 2)
          coshalftheta (cos halftheta)
          sinhalftheta (sin halftheta)

          c (+ r (* coshalftheta sinv) (* -1 sinhalftheta sin2v))]
      (s/up (* c (cos theta))
            (* c (sin theta))
            (+ (* sinhalftheta (sin v))
               (* coshalftheta sin2v))))))

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

(defn L-klein-f8 [r]
  (comp
   (- T-free-particle
      V-free-particle)
   (F->C
    (klein-f8->rect r))))

(let [local (up 't
                (up 'theta 'v)
                (up 'thetadot 'vdot))]
  ((L-klein-f8 'r) local))


(clerk/with-viewer d/multiviewer
  (let [L (L-klein-f8 'r)
        theta (literal-function 'theta)
        v (literal-function 'v)]
    (((Lagrange-equations L) (up theta v))
     't)))

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
   :render-fn '(demo.mathbox/ManifoldViewer
                demo.mathbox/ParametricSurface)}}

(let [r 2
      theta_0 0
      v_0 0
      alpha_0 0
      ]
  {:params {:r r :theta_0 theta_0 :v_0 v_0 :alpha_0 alpha_0}
   :schema {:r   {:min 2 :max 4 :step 0.01}
            :theta_0 {:min 0 :max Math/PI :step 0.02}
            :v_0 {:min 0 :max Math/PI :step 0.02}
            :alpha_0 {:min 0 :max Math/PI :step 0.02}}
   :keys [:r]
   :state->xyz klein-f8->rect
   :L L-klein-f8
   :initial-state [0 [theta_0 v_0] [0 0]]
   :initial-state-fn (fn [params]
                       (let [alpha_0 (:alpha_0 params)
                             u_0 (:theta_0 params)
                             v_0 (:v_0 params)]
                         [0
                          u_0 v_0
                          (Math/cos alpha_0) (Math/sin alpha_0)]))
   :cartesian {:range [[-10 10]
                       [-10 10]
                       [-10 10]]
               :scale [3 3 3]}})
;;
