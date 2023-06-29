(ns emmy.viewer.physics
  "ODE and physics-aware utilities for all Emmy-Viewers plugins."
  (:require [emmy.viewer.components.stopwatch :as sw]
            ["odex" :as o]))

;; ## Simulation

(def ^:private default-epsilon 1e-6)

(defn make-solver
  "Given

  - `f'`, a function of 2-arguments `state` and `output`, that populates
    `output` with the derivatives for each entry in `state` when called

  - `dimension`, the number of entries in `f'`'s `state` argument

  and an options map with the following optional entries:

  - `:epsilon`: - `:epsilon`: error tolerance passed along
    to [odex-js](https://github.com/littleredcomputer/odex-js). Defaults to 1e-6.

  - `:max-steps`: the maximum number of steps that the ODE solver will take
    before erroring out. Defaults to 10000.

  Returns an instance of
  an [odex-js](https://github.com/littleredcomputer/odex-js) [Solver](https://github.com/littleredcomputer/odex-js/blob/master/src/odex.ts#L41)."
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

(defn point-integrator
  "Given

  - `f'`, a function of 2-arguments `state` and `output`, that populates
    `output` with the derivatives for each entry in `state` when called

  - `dimension`, the number of entries in `f'`'s `state` argument

  and an options map with the following optional entries:

  - `:epsilon`: - `:epsilon`: error tolerance passed along
    to [odex-js](https://github.com/littleredcomputer/odex-js). Defaults to 1e-6.

  - `:max-steps`: the maximum number of steps that the ODE solver will take
    before erroring out. Defaults to 10000.

  Returns a function of:

  - `initial-state`
  - `n-steps`, the number of steps to integrate
  - `step-size`, the distance for each step
  - `emit`, a callback called with a JS array representing the updated state for
    each integration step of size `step-size`.

  This function can be used multiple times."
  ([f' dimension]
   (point-integrator f' dimension {}))
  ([f' dimension opts]
   (let [solver (make-solver f' dimension opts)]
     (fn [initial-state n-steps step-size emit]
       (.solve solver 0 initial-state (* n-steps step-size)
               (.grid solver step-size
                      (fn [_ ys]
                        (emit ys))))))))

(defn ^:no-doc ->arr
  "TODO should we use `ode/flatten-into-primitive-array`?"
  [xs]
  (double-array
   (if (array? xs)
     xs
     (flatten xs))))

(defn monotonic-integrator
  "Returns a function "
  ([f' initial-state]
   (monotonic-integrator f' initial-state {}))
  ([f' initial-state opts]
   (let [arr (->arr initial-state)]
     (-> (make-solver f' (count arr) opts)
         (.integrate 0 arr)))))

(defn Evolve
  "ODE State evolving component.

  Differences: function comes in already good to go"
  [{f'      :f'
    !state  :atom
    !params :params}]
  (let [init   (:state @!state)
        opts   {:parameters !params}
        ;; TODO make this in a hook and call the no-arity function on the hook.
        ;; exit.
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
