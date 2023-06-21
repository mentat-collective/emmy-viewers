(ns emmy.mathbox.physics
  "Server-side rendering functions for the components declared in the
  [`emmy.mathbox.physics`](https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT/api/emmy.mathbox.physics)
  namespace."
  (:refer-clojure :exclude [vector])
  (:require [emmy.expression.compile :as xc]
            [emmy.mathbox.plot :as plot]
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

(defn ode-curve
  "Returns a fragment that plots a curve by integrating a system of ordinary
  differential equations represented by `f'` forward from the initial input
  state `initial-state` for `steps` steps of `dt` each.

  Required arguments:

  - `:f'`: function of the form `(fn [[y0 y1 ...]] [<y0'> <y1'> ...])` that
    returns a vector of the derivatives of each input variable.

  - `:initial-state`: the initial input vector to `:f'`.

  Optional arguments:

  - `:state->xyz`: function of the form `(fn [[y0 y1 ...]] [<x> <y> <z>])`,
    responsible for transforming each integrated state into a 3D point. Defaults
    to `identity`.

  - `:steps`: the number of `:dt`-spaced steps for the integrator to take.
    Defaults to 1000.

  - `:dt`: the distance of each evenly spaced step taken by the integrator.
    Defaults to 3e-2.

  - `:epsilon`: error tolerance passed along
    to [odex-js](https://github.com/littleredcomputer/odex-js). Defaults to 1e-5.

  - `:width`: width of the curve. Defaults to 4.

  - `:start?` if `true`, renders an arrow at the start of the curve. Defaults to
    `false`.

  - `:end?` if `true`, renders an arrow at the end of the curve. Defaults to
    `false`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:opacity`: opacity of the curve. Defaults to 1.0.

  - `:color`: color of the curve. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the curve.

  - `:z-index`: zIndex of the curve. Defaults to 0.

  - `:z-bias`: zBias of the curve. Defaults to 0."
  [{:keys [initial-state] :as opts}]
  (let [[f-bind opts] (ode-compile opts :f' initial-state)
        [x-bind opts] (ode-compile opts :state->xyz initial-state)]
    (-> (vc/wrap [f-bind x-bind]
                 ['emmy.mathbox.physics/ODECurve opts])
        (ev/fragment plot/scene))))
