
^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.mathbox.ode
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.leva :as leva]
            [emmy.env :as e :refer :all]
            [emmy.viewer :as ev]
            [emmy.mathbox.physics :as ph]
            [emmy.mathbox.plot :as p]))

{:nextjournal.clerk/width :full}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; ## ODE Solver

(defn lorenz
  "https://en.wikipedia.org/wiki/Lorenz_system"
  [sigma rho beta]
  (fn [[x y z]]
    [(* sigma (- y x))
     (- (* x (- rho z)) y)
     (- (* x y) (* beta z))]))

(ev/with-let [!params {:sigma 10 :rho 28 :beta 2.667
                       :steps 5000}]
  (p/scene
   {:range [[-10 10] [-10 10] [0 30]]
    :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
    :camera [-3 0 0]
    :axes []
    :grids []}
   (leva/controls
    {:folder {:name "Lorenz Attractor"}
     :atom !params
     :schema {:sigma {:min -2 :max 20 :step 0.01}
              :rho {:min -2 :max 30 :step 0.01}
              :beta {:min -4 :max 5 :step 0.01}
              :steps {:min 500 :max 9000 :step 50}}})
   (ph/ode-curve
    {:initial-state [0 1 1.05]
     :f' (ev/with-params {:atom !params :params [:sigma :rho :beta]}
           lorenz)
     :steps (ev/get !params :steps)
     :dt 1e-2
     :width 2
     :end? true})))
