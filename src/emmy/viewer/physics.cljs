(ns emmy.viewer.physics
  (:require [emmy.numerical.ode :as ode]
            [emmy.viewer.clock :as clock]
            ["odex" :as o]))

;; ## Simulation

(defn Lagrangian-updater
  "hardcoded at first for this use case."
  ([state-derivative initial-state]
   (Lagrangian-updater state-derivative initial-state {}))
  ([state-derivative initial-state {:keys [parameters]}]
   (let [flat-initial-state (flatten initial-state)
         ;; TODO get around the deref
         equations (if (implements? IAtom parameters)
                     (fn [_ ys yps]
                       (state-derivative
                        ys yps (.-state parameters)))
                     (fn [_ ys yps]
                       (state-derivative ys yps parameters)))]
     (ode/stream-integrator equations 0 flat-initial-state {:js? true}))))

(defn make-solver
  [derivative initial-state parameters epsilon]
  (let [flat-initial-state (if (array? initial-state)
                             initial-state
                             (flatten initial-state))
        ;; TODO get around the deref
        f' (if (implements? IAtom parameters)
             (let [p @parameters]
               (fn [_ ys yps]
                 (derivative ys yps p)))
             (fn [_ ys yps]
               (derivative ys yps parameters)))
        dimension (count flat-initial-state)]
    (o/Solver.
     f'
     dimension
     #js {:absoluteTolerance epsilon
          :relativeTolerance epsilon
          :rawFunction true
          :maxSteps 10000})))

(defn Lagrangian-collector
  "hardcoded at first for this use case."
  ([state-derivative initial-state]
   (Lagrangian-collector state-derivative initial-state {}))
  ([state-derivative initial-state {:keys [parameters epsilon]
                                    :or {epsilon 1e-6}}]
   (let [solver (make-solver state-derivative initial-state parameters epsilon)]
     (fn [state n step-size emit]
       ;; TODO fix the case where we have issues at simSteps 5 on phase
       ;; portrait.
       (.solve solver 0 state (* n step-size)
               (.grid solver step-size
                      (fn [_ ys]
                        (emit (aget ys 1) (aget ys 2)))))))))

(defn Evolve
  "ODE State evolving component."
  [{L :L
    !state  :atom
    !params :params}]

  ;; TODO can I make an "animating" wrapper for mathbox, a similar
  ;; component version?
  ;;
  ;; TODO wire generic params into Lagrangian updater.
  ;;
  ;; TODO can I do `:params {:atom :keys}`?
  (let
      ;; TODO how can I wire in an array and have it not cause a re-render??
      [state-deriv (apply js/Function L)
       update      (Lagrangian-updater state-deriv
                                       (:state @!state)
                                       {:parameters !params})]
    (fn [_]
      [clock/Clock
       {:onTick
        (fn [seconds]
          ;; TODO can we keep the output here mutable and provide an out to
          ;; update?
          (swap! !state assoc
                 :time  seconds
                 :state (update seconds)))}])))
