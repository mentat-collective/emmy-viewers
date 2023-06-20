(ns emmy.viewer.physics
  (:require [emmy.viewer.stopwatch :as sw]
            ["odex" :as o]))



;; ## Simulation
;;
;; Okay, so we have two ideas here.

(def ^:private default-epsilon 1e-6)

;; I am PRETTY sure that in all cases I can find a way to wire in the params
;; without passing them here. TODO check the existing case and see what works.

(defn make-solver
  "TODO take more odex options."
  [f' dimension {:keys [epsilon max-steps]}]
  (let [epsilon   (or epsilon default-epsilon)
        max-steps (or max-steps 10000)]
    (o/Solver.
     (fn [_ ys yps] (f' ys yps))
     dimension
     #js {:absoluteTolerance epsilon
          :relativeTolerance epsilon
          :rawFunction true
          :maxSteps max-steps})))

(defn ^:no-doc ->arr
  "TODO should we use `ode/flatten-into-primitive-array`?"
  [xs]
  (double-array
   (if (array? xs)
     xs
     (flatten xs))))

(defn monotonic-integrator
  "Takes

  - `f'`
  - an initial station
  - optionally, `opts`...

  Returns a function, monotonic in its single numeric argument, that represents
  the integral of the function f' given the initial data $y_0 = f(x_0)$ and an
  options dictionary (presently containing the tolerance for error $\\epsilon$,
  but eventually also selecting from a menu of integration techniques)."
  ([f' initial-state]
   (monotonic-integrator f' initial-state {}))
  ([f' initial-state opts]
   (let [arr (->arr initial-state)]
     (-> (make-solver f' (count arr) opts)
         (.integrate 0 arr)))))

;; TODO fix the case where we have issues at simSteps 5 on phase
;; portrait.
(defn point-integrator
  "hardcoded at first for this use case."
  ([f' dimension]
   (point-integrator f' dimension {}))
  ([f' dimension opts]
   (let [solver (make-solver f' dimension opts)]
     (fn [initial-state n-steps step-size emit]
       (.solve solver 0 initial-state (* n-steps step-size)
               (.grid solver step-size
                      (fn [_ ys]
                        (emit ys))))))))

;; ## Components

(defn Evolve
  "ODE State evolving component."
  [{f'      :derivative
    !state  :atom
    !params :params}]
  (let [init   (:state @!state)
        opts   {:parameters !params}
        update (monotonic-integrator f' init opts)]
    (fn [_]
      [sw/Stopwatch
       {:onTick
        (fn [t]
          ;; TODO can we keep the output here mutable and provide an out to
          ;; update?
          (swap! !state assoc
                 :time t
                 :state (update t)))}])))
