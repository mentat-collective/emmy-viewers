(ns emmy.mathbox.components.physics
  "ODE and physics-aware plotting functions using `MathBox`."
  (:require [emmy.viewer.components.physics :as ph]
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
  "In-progress attempt at a proper phase portrait component.

  [[PhasePortrait]] plots a curve at each point on a grid by integrating a
  system of ordinary differential equations represented by `f'` forward from the
  initial input state `initial-state` for `steps` steps of `dt` each.

  Each point is initialized by swapping out `:x-idx` and `:v-idx` in
  `:initial-state` with the $(x, \\vdot{x})$ coordinates of the phase portrait.

  NOTE that this is kind of weird, and only works for second-order ODEs that
  have been transformed. It might be that we want to allow this, but also just
  call `:f` if the user doesn't supply `:v-idx`, for more general ODEs.

  Required arguments:

  - `:f'`: function of the form `(fn [[y0 y1 ...]] [<y0'> <y1'> ...])` that
    returns a vector of the derivatives of each input variable.

  - `:initial-state`: the initial input vector to `:f'`.

  Optional arguments:

  - `:x-idx`: index of the coordinate position in the state. Defaults to 1.

  - `:v-idx` index of the derivative of `:x-idx` in the state. Defaults to 2.

  - `:steps`: the number of `:dt`-spaced steps for the integrator to take.
    Defaults to 10.

  - `:dt`: the distance of each evenly spaced step taken by the integrator.
    Defaults to 3e-2.

  - `:epsilon`: error tolerance passed along
    to [odex-js](https://github.com/littleredcomputer/odex-js). Defaults to 1e-5.

  - `:width`: width of each curve. Defaults to 2.

  - `:start?` if `true`, renders an arrow at the start of the curve. Defaults to
    `false`.

  - `:end?` if `true`, renders an arrow at the end of the curve. Defaults to
    `true`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 5.

  - `:opacity`: opacity of each curve. Defaults to 1.0.

  - `:color`: color of each curve. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the phase portrait.

  - `:z-index`: zIndex of the phase portrait. Defaults to 0.

  - `:z-bias`: zBias of the phase portrait. Defaults to 0."
  [{:keys [f' initial-state x-idx v-idx
           steps dt epsilon
           arrow-size width start? end?
           opacity color z-order z-index z-bias]
    :or {steps 10
         dt 3e-2
         epsilon 1e-5
         z-index 0
         z-bias 0
         start? false
         end? true
         opacity 1
         arrow-size 5
         width 2
         color 0x3090ff
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
      {:size arrow-size
       :width width
       :opacity opacity
       :color color
       :start start? :end end?
       :zIndex z-index :zBias z-bias :zOrder z-order}]]))

;; ## Entities
;;
;; TODO once we figure out how this works this should PROBABLY move over into
;; geometry... or be similar to point.

(defn OldComet
  "Boring, old version that we need to fix."
  [{:keys [dimensions path color size length items]
    :or {items 1
         dimensions 3
         color 0x3090ff
         length 16
         size 10}}]
  [:<>
   [mb/Array
    {:history length
     :items items
     :channels dimensions
     :expr path}]
   [mb/Spread {:height [0 0 -0.02] :alignHeight -1}]
   ;; Ah, this is the color channel, and fades out the tail as you go.
   [mb/Array
    {:width length
     :channels 4
     :expr (fn [emit i]
             (emit 1 1 1 (- 1 (/ i 16))))}]
   [mb/Transpose {:order "zxy"}]
   [mb/Point
    {:points "<<<"
     :colors "<"
     :size size
     :color color}]])

(defn Comet
  "Point that trails its historical positions out behind it in a glowing tail.

  Required arguments:

  - `:atom`: atom holding a JS array representing some state. `:state->xyz` will
    transform this into xyz coordinates to draw.

  Optional arguments:

  - `:state->xyz`: function from the contents of `:atom` to `[x y z]`
    coordinates.

  - `:length`: the length of the comet tail. Defaults to 16.

  - `:size`: size of the comet. Defaults to 10.

  - `:opacity`: opacity of the leading point of the comet. Defaults to 1.0.

  - `:color`: color of each curve. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the comet.

  - `:z-index`: zIndex of the comet. Defaults to 0.

  - `:z-bias`: zBias of the comet. Defaults to 0."
  [{:keys [atom state->xyz
           length items
           size opacity color z-order z-index z-bias]
    :or {size 10
         opacity 1.0
         state->xyz in->out
         color 0x3090ff
         length 16
         z-index 0
         z-bias 0}}]
  [:<>
   [mb/Array
    {:history length
     :items items
     :channels 3
     :expr (let [out #js [0 0 0]]
             (fn [emit]
               (-> (:state (.-state atom))
                   (state->xyz out))
               (emit (aget out 0)
                     (aget out 1)
                     (aget out 2))))}]
   ;; TODO double check that this is a sane way to do things.
   (when (> length 1)
     [:<>
      [mb/Spread {:height [0 0 -0.02] :alignHeight -1}]
      [mb/Array
       {:width length
        :channels 4
        :expr (fn [emit i]
                (emit 1 1 1 (- 1 (/ i 16))))}]
      [mb/Transpose {:order "zxy"}]])
   [mb/Point
    (merge
     (if (> length 1)
       {:points "<<<" :colors "<"}
       {:points "<"})
     {:size size
      :opacity opacity
      :color color
      :zIndex z-index
      :zBias z-bias
      :zOrder z-order})]])
