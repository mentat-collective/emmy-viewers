(ns emmy.mathbox.components.physics
  "ODE and physics-aware plotting functions using `MathBox`."
  (:require [emmy.viewer.physics :as ph]
            [mathbox.primitives :as mb]))

(defn- in->out
  "Identity function for [[ODECurve]]. Copies the input over to the output array
  unchanged."
  [in out]
  (aset out 0 (aget in 0))
  (aset out 1 (aget in 1))
  (aset out 2 (aget in 2)))

(defn ODECurve
  "Component that plots a curve by integrating a system of ordinary differential
  equations represented by `f'` forward from the initial input state
  `initial-state` for `steps` steps of `dt` each.

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
  [_]
  (let [xyz #js [0 0 0]]
    (fn [{:keys [f' initial-state state->xyz steps dt epsilon
                arrow-size width start? end?
                opacity color z-order z-index z-bias]
         :or {steps 1000
              dt 3e-2
              epsilon 1e-5
              z-index 0
              z-bias 0
              opacity 1
              arrow-size 6
              width 4
              color 0xff3090
              state->xyz in->out}}]
      (let [state     (flatten initial-state)
            dimension (count state)
            solver    (ph/point-integrator f' dimension {:epsilon epsilon})
            y0        (clj->js state)]
        [:<>
         [mb/Array
          {:channels 3
           :items steps
           :live false
           :width 1
           :expr
           (fn [emit]
             (solver y0 steps dt
                     (fn [ys]
                       (state->xyz ys xyz)
                       (emit (aget xyz 0)
                             (aget xyz 1)
                             (aget xyz 2)))))}]
         [mb/Vector
          {:size arrow-size
           :width width
           :opacity opacity
           :color color
           :start start? :end end?
           :zIndex z-index :zBias z-bias :zOrder z-order}]]))))

(defn PhasePortrait
  "Okay, so THIS component is close to good to go. Unlike the ODE component, this
  one is taking its cues from the ODE solver.

  TODO what we need to do is make a GENERIC thing that can emit pairs of y, y',
  and then plot some vector. And do that across a grid based on some initial
  state."
  [_]
  (fn [{:keys [f' initial-state #_params steps dt epsilon
              x-idx v-idx]
       :or {dt 3e-2
            epsilon 1e-5
            x-idx 1
            v-idx 2}}]
    (let [state     (flatten initial-state)
          dimension (count state)
          solver    (ph/point-integrator f' dimension {:epsilon epsilon})
          y0        (clj->js state)]
      [:<>
       [mb/Area
        {:width 16
         :height 16
         :channels 2
         :items steps
         :centeredX true
         :centeredY true
         :live false
         :expr
         (fn [emit x v _i _j _t]
           (aset y0 x-idx x)
           (aset y0 v-idx v)
           (solver y0 steps dt
                   (fn [ys]
                     (emit (aget ys x-idx)
                           (aget ys v-idx)))))}]
       [mb/Vector
        {:color 0x3090ff
         :size 5
         :end true}]])))
