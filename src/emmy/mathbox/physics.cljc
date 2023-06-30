(ns emmy.mathbox.physics
  "Server-side rendering functions for the components declared in the
  [`emmy.mathbox.components.physics`](https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT/api/emmy.mathbox.components.physics)
  namespace."
  (:refer-clojure :exclude [vector])
  (:require [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]
            [emmy.viewer.compile :as vc]
            [emmy.viewer.physics :as ph]))



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
  (let [[f-bind opts] (ph/ode-compile opts :f' initial-state)
        [x-bind opts] (ph/ode-compile opts :state->xyz initial-state)]
    (-> (vc/wrap [f-bind x-bind]
                 ['emmy.mathbox.components.physics/ODECurve opts])
        (ev/fragment plot/scene))))

(defn comet [{:keys [initial-state] :as opts}]
  (let [[x-bind opts] (ph/ode-compile opts :state->xyz initial-state)]
    (-> (vc/wrap [x-bind] ['emmy.mathbox.components.physics/Comet* opts])
        (ev/fragment plot/scene))))
