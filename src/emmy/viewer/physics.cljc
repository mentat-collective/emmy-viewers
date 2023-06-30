(ns emmy.viewer.physics
  (:require [emmy.expression.compile :as xc]
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
            simplify?    (:simplify? opts true)
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
  [{:keys [initial-state] :as opts}]
  (let [[f-bind opts] (ode-compile opts :f' initial-state)]
    (vc/wrap [f-bind]
             ['emmy.viewer.components.physics/Evolve opts])))
