(ns emmy.mathbox.physics
  "Server-side rendering functions for the components declared in the
  [`emmy.mathbox.components.physics`](https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT/api/emmy.mathbox.components.physics)
  namespace."
  (:refer-clojure :exclude [vector])
  (:require [emmy.mechanics.lagrange :as l]
            [emmy.mechanics.hamilton :as h]
            [emmy.mechanics.routhian :as r]
            [emmy.mathbox.plot :as plot]
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

  - `:simplify?` if `true`, the compiler will attempt to simplify the body of
    `:state->xyz` and `:f'`. `false` by default.

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

(defn lagrangian-curve
  "Returns a fragment that plots a curve by integrating a system of ordinary
  differential equations generated from the Lagrangian passed via `:L` forward
  from the initial input state `initial-state` for `steps` steps of `dt` each.

  Required arguments:

  - `:L'`: function of the form `(fn [[t q qdot]] <energy>)`

  - `:initial-state`: the initial input vector to `:L`.

  See [[ode-curve]] for a description of all supported optional options."
  [{:keys [L] :as opts}]
  (let [f' (if (ev/param-f? L)
             (update L :f #(comp l/Lagrangian->state-derivative %))
             (l/Lagrangian->state-derivative L))]
    (ode-curve
     (-> (dissoc opts :L)
         (assoc :f' f')))))

(defn hamiltonian-curve
  "Returns a fragment that plots a curve by integrating a system of ordinary
  differential equations generated from the Hamiltonian passed via `:H` forward
  from the initial input state `initial-state` for `steps` steps of `dt` each.

  Required arguments:

  - `:H`: function of the form `(fn [[t q p]] <energy>)`

  - `:initial-state`: the initial input vector to `:H`.

  See [[ode-curve]] for a description of all supported optional options."
  [{:keys [H] :as opts}]
  (let [f' (if (ev/param-f? H)
             (update H :f #(comp h/Hamiltonian->state-derivative %))
             (h/Hamiltonian->state-derivative H))]
    (ode-curve
     (-> (dissoc opts :H)
         (assoc :f' f')))))

(defn routhian-curve
  "Returns a fragment that plots a curve by integrating a system of ordinary
  differential equations generated from the Routhian passed via `:R` forward
  from the initial input state `initial-state` for `steps` steps of `dt` each.

  Required arguments:

  - `:R`: function of the form `(fn [[t q qdot-or-p]] <energy>)`

  - `:initial-state`: the initial input vector to `:R`.

  See [[ode-curve]] for a description of all supported optional options."
  [{:keys [R] :as opts}]
  (let [f' (if (ev/param-f? R)
             (update R :f #(comp r/Routhian->state-derivative %))
             (r/Routhian->state-derivative R))]
    (ode-curve
     (-> (dissoc opts :R)
         (assoc :f' f')))))

(defn- L-params [xform]
  (fn [& params]
    (comp (l/L-free-particle 1)
          (l/F->C
           (comp (apply xform params)
                 l/coordinate)))))

(defn- L-bare [xform]
  ((L-params (fn [] xform))))

(defn geodesic
  "Returns a fragment that plots a geodesic curve over the parametric surface
  defined by `:xform`, starting from initial position `:x0` with initial
  velocity `:v0`. The geodesic curve is generated by integrating a system of
  ordinary differential equations forward for `steps` steps of `dt` each.

  Required arguments:

  - `:xform`: function of the form `(fn [[u v]] [<x> <y> <z>])`

  - `:x0`: starting position of the geodesic in `[u v]` coordinates.

  - `:v0`: starting velocity of the geodesic in `[udot vdot]`.

  See [[ode-curve]] for a description of all supported optional options."
  [{:keys [xform x0 v0] :as opts}]
  (let [L (if (ev/param-f? xform)
            (update xform :f L-params)
            (L-bare xform))
        state->xyz (if (ev/param-f? xform)
                     (update xform :f (fn [f]
                                        (fn [& params]
                                          (comp (apply f params)
                                                l/coordinate))))
                     (comp xform l/coordinate))]
    (lagrangian-curve
     (assoc (dissoc opts :xform :x0 :v0)
            :L L
            :initial-state [0 x0 v0]
            :state->xyz state->xyz))))

;; ## Visual Elements

(defn comet
  "Returns a fragment that renders a point that trails its historical positions
  out behind it in a glowing tail.

  Required arguments:

  - `:atom`: atom holding a JS array representing some state. `:state->xyz` will
    transform this into xyz coordinates to draw.

  Optional arguments:

  - `:state->xyz`: function from the contents of `:atom` to `[x y z]`
    coordinates.

  - `:initial-state`: structure in the shape of the state required by
    `:state->xyz'`, used if `:state->xyz'` is a function that needs to be
    compiled (ie not a quoted literal function).

  - `:length`: the length of the comet tail. Defaults to 16.

  - `:size`: size of the comet. Defaults to 10.

  - `:opacity`: opacity of the leading point of the comet. Defaults to 1.0.

  - `:color`: color of each curve. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the comet.

  - `:z-index`: zIndex of the comet. Defaults to 0.

  - `:z-bias`: zBias of the comet. Defaults to 0."
  [{:keys [initial-state] :as opts}]
  (let [[x-bind opts] (ph/ode-compile opts :state->xyz initial-state)]
    (-> (vc/wrap [x-bind] ['emmy.mathbox.components.physics/Comet* opts])
        (ev/fragment plot/scene))))
