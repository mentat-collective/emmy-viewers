(ns emmy.viewer.physics
  (:require [emmy.expression.compile :as xc]
            [emmy.mechanics.lagrange :as l]
            [emmy.mechanics.hamilton :as h]
            [emmy.mechanics.routhian :as r]
            [emmy.viewer :as ev]
            [emmy.viewer.compile :as vc]))

(defn ^:no-doc ode-compile
  "For generating compile fragments for use with Odex, or other applications that
  provide inputs and outputs for the user.

  Takes

  - an options map `opts`
  - the `k` that maps to the function to compile; this function should take a
    flattened array of the same dimension as `initial-state`.
  - an `initial-state`

  and returns a pair of

  - a new binding pair
  - the options map updated to reference the new compiled fn via symbol."
  [opts k initial-state]
  (let [v (get opts k)]
    (if-not (vc/compile? v)
      [[] opts]
      (let [[v initial-state] (if (vector? initial-state)
                                [v initial-state]
                                [(vc/vectorize v) [initial-state]])
            params?            (ev/param-f? v)
            [f' params] (if params?
                          [(:f v) (:params v)]
                          [v false])
            sym          (gensym)
            simplify?    (:simplify? opts false)
            [body new-f] [(xc/compile-state-fn
                           f' params initial-state
                           {:mode :js
                            :generic-params? params?
                            :simplify? simplify?
                            :calling-convention :primitive})
                          (if params?
                            `(let [psym# (apply ~'array (map @~(:atom v) ~params))]
                               (fn [in# out#]
                                 (~sym in# out# psym#)))
                            `(fn [in# out#]
                               (~sym in# out# nil)))]]
        [[sym (list* 'js/Function. body)]
         (assoc opts k new-f)]))))

(defn evolve
  "Returns a fragment that uses the supplied derivative function `:f'` to evolve
  the state value stored in `:atom`.

  On every time tick, the component will swap a new JS array representing the
  flattened state value into `:atom` under the `:state` key.

  Required arguments:

  - `:f'`: a function of a single argument `state` that returns the derivative
    of `state`.

  - `:atom`: atom holding a map with a key `:state` populated with
    the (potentially structured, unflattened) initial value for `:f'`'s `state`
    argument

  Optional arguments:

  - `:initial-state`: structure in the shape of the state required by `:f'`,
    used if `:f'` is a function that needs to be compiled (ie not a quoted literal
    function).

  - `:epsilon`: - `:epsilon`: error tolerance passed along
    to [odex-js](https://github.com/littleredcomputer/odex-js). Defaults to 1e-6.

  - `:max-steps`: the maximum number of steps that the ODE solver will take
    before erroring out. Defaults to 10000."
  [{:keys [initial-state] :as opts}]
  (let [[f-bind opts] (ode-compile opts :f' initial-state)]
    (vc/wrap [f-bind]
             ['emmy.viewer.components.physics/Evolve opts])))

(defn evolve-lagrangian
  "Returns a fragment that uses the supplied Lagrangian `:L` to evolve
  the state value stored in `:atom`.

  On every time tick, the component will swap a new JS array representing the
  flattened state value into `:atom` under the `:state` key.

  Required arguments:

  - `:L`: a function of `state` that returns a scalar energy value.

  - `:atom`: atom holding a map with a key `:state` populated with
    the (potentially structured, unflattened) initial value for `:f'`'s `state`
    argument

  Optional arguments:

  - `:initial-state`: structure in the shape of the state required by `:L`.

  See [[evolve]] for more supported optional arguments."
  [{:keys [L] :as opts}]
  (let [f' (if (ev/param-f? L)
             (update L :f #(comp l/Lagrangian->state-derivative %))
             (l/Lagrangian->state-derivative L))]
    (evolve
     (-> (dissoc opts :L)
         (assoc :f' f')))))

(defn evolve-hamiltonian
  "Returns a fragment that uses the supplied Hamiltonian `:H` to evolve the state
  value stored in `:atom`.

  On every time tick, the component will swap a new JS array representing the
  flattened state value into `:atom` under the `:state` key.

  Required arguments:

  - `:H`: a function of `state` that returns a scalar energy value.

  - `:atom`: atom holding a map with a key `:state` populated with
    the (potentially structured, unflattened) initial value for `:f'`'s `state`
    argument

  Optional arguments:

  - `:initial-state`: structure in the shape of the state required by `:H`.

  See [[evolve]] for more supported optional arguments."
  [{:keys [H] :as opts}]
  (let [f' (if (ev/param-f? H)
             (update H :f #(comp h/Hamiltonian->state-derivative %))
             (h/Hamiltonian->state-derivative H))]
    (evolve
     (-> (dissoc opts :H)
         (assoc :f' f')))))

(defn evolve-routhian
  "Returns a fragment that uses the supplied Routhian `:R` to evolve
  the state value stored in `:atom`.

  On every time tick, the component will swap a new JS array representing the
  flattened state value into `:atom` under the `:state` key.

  Required arguments:

  - `:R`: a function of `state` that returns a scalar energy value.

  - `:atom`: atom holding a map with a key `:state` populated with
    the (potentially structured, unflattened) initial value for `:f'`'s `state`
    argument

  Optional arguments:

  - `:initial-state`: structure in the shape of the state required by `:R`.

  See [[evolve]] for more supported optional arguments."
  [{:keys [R] :as opts}]
  (let [f' (if (ev/param-f? R)
             (update R :f #(comp r/Routhian->state-derivative %))
             (r/Routhian->state-derivative R))]
    (evolve
     (-> (dissoc opts :R)
         (assoc :f' f')))))
