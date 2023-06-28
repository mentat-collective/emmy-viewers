(ns emmy.mathbox.plot
  "Server-side rendering functions for the components declared in the
  [`emmy.mathbox.components.plot`](https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT/api/emmy.mathbox.components.plot)
  namespace."
  (:refer-clojure :exclude [vector])
  (:require [emmy.mathbox :as box]
            [emmy.mathbox.compile :as mc]
            [emmy.viewer :as ev]
            [emmy.viewer.compile :as c]))

;; ## Scene Elements

(defn labeled-axis
  "Returns a fragment that takes a `k` equal to `:x`, `:y` or `:z` and renders the
  equivalent axis into the MathBox scene.

  Required arguments:

  - `:axis`: one of `:x`, `:y` or `:z`.

  Optional arguments:

  - `:ticks`: either `true` (default), falsey or a map of [[Ticks]] options.
    See [[Ticks]] for details on what's allowed.

    `true` will include default ticks, while `false` or `nil` will remove ticks.

  - `:label`: either `true` (default) or a map of [[AxisLabel]] options.
    See [[AxisLabel]] for details on what's allowed.

    `true` will include the default label, ticks, while `false` or `nil` will
    remove the label.

  - `:width`: width of the rendered axis line.

  - `:opacity`: opacity of the axis (not currently passed on to ticks or
    labels). Defaults to 1.0.

  - `:color`: color of the axis. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the full labeled axis.

  - `:z-index`: zIndex of the full labeled axis. Defaults to 0.

  - `:z-bias`: zBias of the full labeled axis. Defaults to 0.

  - `:label`: either true (default) or a map of options.

  - `:max`: the maximum value reached along this axis. This is used to pass a
  default `:position` argument to the [[AxisLabel]] component if one isn't set.

  NOTE this is a hack, see the comment above the component for an alternate
  approach."
  [opts]
  ['emmy.mathbox.components.plot/LabeledAxis opts])

(defn grid
  "Returns a fragment that takes a `k` equal to `:xy`, `:yz` or `:xz` and renders
  a grid in the specified plane into the MathBox scene.

  Required arguments:

  - `:axes`: one of `:xy`, `:yz` or `:xz`.

  Optional arguments:

  - `:snap`: either `true`, `false`, a single number or a 2-vector of numbers of
    the form `[<snap-x?> <snap-y?>]`. A non-vector value becomes a pair with the
    same value in both slots.

    \"snapping\" the grid means that gridlines will snap to nice numbers.
    `false` by default.

  - `:divisions`: either `true`, `false`, a single number or a 2-vector of
    numbers of the form `[<first-axis-divisions> <second-axis-divisions>]`. A
    non-vector value becomes a pair with the same value in both slots.

    divisions set the number of gridlines that appear in each dimension.

  - `:width`: width of the lines on the rendered grid.

  - `:opacity`: opacity of the grid. Defaults to 1.0.

  - `:color`: color of the grid. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the grid.

  - `:z-index`: zIndex of the grid. Defaults to 0.

  - `:z-bias`: zBias of the grid. Defaults to 0."
  [opts]
  ['emmy.mathbox.components.plot/Grid opts])

(defn cartesian
  "Component that renders a mathematical 3d plotting scene into MathBox.
  Takes any number of children and nests them into a
  configured [[emmy.mathbox.components.plot/Cartesian]] component.

  Optional arguments:

  - `:range`: triple of the form `[<x-range> <y-range> <z-range>]`. Each range
    entry is a pair of `[<min-value> <max-value>]`.

    Defaults to `[-5 5]` in each dimension.

  - `:scale`: `[<x-scale> <y-scale> <z-scale>]` for tuning the relative space
    given to each dimension in the rendering. Each entry defaults to 1.

  - `:camera`: Camera position in units I don't really understand yet! Defaults
    to `[0.5 -2 0.6]`.

  - `:axes`: can be either

    - a vector like `[:x :y]`
    - a map of `{<axis-key> <boolean-or-[[LabeledAxis]]-arguments>}`

    Any axis entries missing from `:axes` won't be rendered.

    See [[labeled-axis]] for more detail on allowed configuration values.

  - `:grids`: either

    - a vector like `[:xy :yz]`
    - a map of `{<axis-key> <boolean-or-[[Grid]]-arguments>}`

    Any plane entries missing from `:grids` won't be rendered.

    See [[grid]] for more detail on allowed configuration values."
  [& children]
  (ev/fragment
   (into ['emmy.mathbox.components.plot/Cartesian] children)
   #(box/mathbox 'emmy.mathbox.components.plot/box-defaults %)))

(defn scene
  "Takes an optional options map and any number of children and nests them into a
  configured [[emmy.mathbox.components.plot/Cartesian]] component that renders a
  mathematical 3d plotting scene into MathBox.

  Any option supported by [[emmy.mathbox/mathbox]] is removed and passed along
  to that function.

  See [[cartesian]] for all other supported options."
  [& children]
  (ev/fragment
   (into ['emmy.mathbox.components.plot/Scene] children)))

;; ## Geometric Primitives

(defn point
  "Returns a fragment that renders a point into the scene at `coords`.

  Required arguments:

  - `:coords`: 3-vector of the form `[<x> <y> <z>]` specifying the point's
    coordinates.

  Optional arguments:

  - `:label`: either a string label or an options map input to [[DomLabel]]. If
    `:tex?` is true in this map, the component will use katex to render the label.

    NOTE that this is computationally expensive for reasons I don't understand!

  - `:size`: size of the point. Defaults to 16.

  - `:opacity`: opacity of the point. Defaults to 1.0.

  - `:color`: color of the point. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the point.

  - `:z-index`: zIndex of the point. Defaults to 0.

  - `:z-bias`: zBias of the point. Defaults to 0."
  [opts]
  (ev/fragment
   ['emmy.mathbox.components.plot/Point opts]
   scene))

(defn line
  "Returns a fragment that renders a line segment into the scene as specified by `coords`.

  Required arguments:

  - `:coords`: a pair of 3-vectors of the form `[<x> <y> <z>]` specifying the
    line segment's starting and ending coordinates.

  Optional arguments:

  - `:label`: either:

    - a string label,
    - a map with optional keys `:start` and `:end`
    - a vector of the form `[<start> <end>]`

    specifying the labels to hover over the start and end of the rendered line
    segment.

  - `:width`: width of the line. Defaults to 4.

  - `:start?` if `true`, renders an arrow at the start of the segment. Defaults
    to `false`.

  - `:end?` if `true`, renders an arrow at the end of the segment. Defaults to
    `false`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:opacity`: opacity of the point. Defaults to 1.0.

  - `:color`: color of the point. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the point.

  - `:z-index`: zIndex of the point. Defaults to 0.

  - `:z-bias`: zBias of the point. Defaults to 0."
  [opts]
  (ev/fragment
   ['emmy.mathbox.components.plot/Line opts]
   scene))

(defn vector
  "Returns a fragment that renders a vector into the scene with the specified
  `tip` and `tail`.

  Required arguments:

  - `:tip`: 3-vector of the form `[<x> <y> <z>]` specifying the tip of the
    vector.

  Optional arguments:

  - `:tail`: 3-vector of the form `[<x> <y> <z>]` specifying the tail of the
    vector. Defaults to `[0 0 0]`.

  See [[line]] for all other supported options. All defaults are identical,
  except `:end?` defaults to `true`."
  [opts]
  (ev/fragment
   ['emmy.mathbox.components.plot/Vector opts]
   scene))

;; ## Curves and Surfaces
;;
;; ### Curves

(defn parametric-curve
  "Returns a fragment that plots a parametric curve `f` into the scene along the
  range specified by `t`.

  Required arguments:

  - `:f`: function of the form `(fn [t] [<x> <y> <z>])`, valid within the range
    specified by `:t`.

  - `:t` 2-vector of the form `[<min-t> <max-t>]` specifying the domain of the
    parametric function `f`.

  Optional arguments:

  - `:samples`: the number of points to use to generate the curve. Defaults to
    256.

  - `:start?` if `true`, renders an arrow at the start of the curve. Defaults to
    `false`.

  - `:end?` if `true`, renders an arrow at the end of the curve. Defaults to
    `false`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:width`: width of the curve. Defaults to 4.

  - `:opacity`: opacity of the curve. Defaults to 1.0.

  - `:color`: color of the curve. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the curve.

  - `:z-index`: zIndex of the curve. Defaults to 0.

  - `:z-bias`: zBias of the curve. Defaults to 0."
  [opts]
  (let [opts          (update opts :f c/vectorize)
        [f-bind opts] (mc/compile-3d opts :f 1)]
    (-> (c/wrap [f-bind] ['emmy.mathbox.components.plot/ParametricCurve opts])
        (ev/fragment scene))))

(defn polar-curve [opts]
  (let [[r-bind opts] (c/compile-1d opts :r)]
    (-> (c/wrap [r-bind] ['emmy.mathbox.components.plot/PolarCurve opts])
        (ev/fragment scene))))

(defn of-x
  "Returns a fragment that plots a function in either the `y` or `z` directions as
  a function of `x` values.

  Required arguments:

  - `:y` or `:z`: function of the form `(fn [x] <y-or-z>)`, valid within the
    scene's x-axis range or the range specified by `:range`.

    NOTE that you may only supply ONE of these two! Supplying both will trigger
    an error.

  Optional arguments:

  - `:samples`: the number of points to use to generate the curve. Defaults to
    256.

  - `:range`: 2-vector of the form `[<min-x> <max-x>]` specifying the range to
    feed into `:y` or `:z`.

  - `:start?` if `true`, renders an arrow at the start of the curve. Defaults to
    `false`.

  - `:end?` if `true`, renders an arrow at the end of the curve. Defaults to
    `false`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:width`: width of the curve. Defaults to 4.

  - `:opacity`: opacity of the curve. Defaults to 1.0.

  - `:color`: color of the curve. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the curve.

  - `:z-index`: zIndex of the curve. Defaults to 0.

  - `:z-bias`: zBias of the curve. Defaults to 0."
  [opts]
  (let [[y-bind opts] (c/compile-1d opts :y)
        [z-bind opts] (c/compile-1d opts :z)]
    (-> (c/wrap [y-bind z-bind]
                ['emmy.mathbox.components.plot/OfX opts])
        (ev/fragment scene))))

(defn of-y
  "Returns a fragment that plots a function in either the `x` or `z` directions as
  a function of `y` values.

  Required arguments:

  - `:x` or `:z`: function of the form `(fn [y] <x-or-z>)`, valid within the
    scene's y-axis range or the range specified by `:range`.

    NOTE that you may only supply ONE of these two! Supplying both will trigger
    an error.

  Optional arguments:

  - `:samples`: the number of points to use to generate the curve. Defaults to
    256.

  - `:range`: 2-vector of the form `[<min-y> <max-y>]` specifying the range to
    feed into `:x` or `:z`.

  - `:start?` if `true`, renders an arrow at the start of the curve. Defaults to
    `false`.

  - `:end?` if `true`, renders an arrow at the end of the curve. Defaults to
    `false`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:width`: width of the curve. Defaults to 4.

  - `:opacity`: opacity of the curve. Defaults to 1.0.

  - `:color`: color of the curve. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the curve.

  - `:z-index`: zIndex of the curve. Defaults to 0.

  - `:z-bias`: zBias of the curve. Defaults to 0."
  [opts]
  (let [[x-bind opts] (c/compile-1d opts :x)
        [z-bind opts] (c/compile-1d opts :z)]
    (-> (c/wrap [x-bind z-bind]
                ['emmy.mathbox.components.plot/OfY opts])
        (ev/fragment scene))))

(defn of-z
  "Returns a fragment that plots a function in either the `x` or `y` directions as
  a function of `z` values.

  Required arguments:

  - `:x` or `:y`: function of the form `(fn [z] <x-or-y>)`, valid within the
    scene's z-axis range or the range specified by `:range`.

    NOTE that you may only supply ONE of these two! Supplying both will trigger
    an error.

  Optional arguments:

  - `:samples`: the number of points to use to generate the curve. Defaults to
    256.

  - `:range`: 2-vector of the form `[<min-z> <max-z>]` specifying the range to
    feed into `:x` or `:y`.

  - `:start?` if `true`, renders an arrow at the start of the curve. Defaults to
    `false`.

  - `:end?` if `true`, renders an arrow at the end of the curve. Defaults to
    `false`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:width`: width of the curve. Defaults to 4.

  - `:opacity`: opacity of the curve. Defaults to 1.0.

  - `:color`: color of the curve. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the curve.

  - `:z-index`: zIndex of the curve. Defaults to 0.

  - `:z-bias`: zBias of the curve. Defaults to 0."
  [opts]
  (let [[x-bind opts] (c/compile-1d opts :x)
        [y-bind opts] (c/compile-1d opts :y)]
    (-> (c/wrap [x-bind y-bind]
                ['emmy.mathbox.components.plot/OfZ opts])
        (ev/fragment scene))))

;; ### Surfaces

(defn parametric-surface
  "Returns a fragment that plots a parametric surface defined by `f` into the
  scene along the area specified by `u` and `v`.

  Required arguments:

  - `:f`: function of the form `(fn [[u v]] [<x> <y> <z>])`, valid within the
    area specified by `:u` and `:v`.

  - `:u` 2-vector of the form `[<min-u> <max-u>]` specifying the interval of the
    first input to `f`.

  - `:v`: 2-vector of the form `[<min-v> <max-v>]` specifying the interval of the
    second input to `f`.

  Optional arguments:

  - `:u-samples`: the number of u samples to use to generate the surface.
    Defaults to 64.

  - `:v-samples`: the number of v samples to use to generate the surface.
    Defaults to 64.

  - `:shaded?` if `true` (default), MathBox will shade the surface.

  - `:opacity`: opacity of the surface. Defaults to 0.75.

  - `:color`: color of the surface. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the surface. Defaults to 25.

  - `:z-index`: zIndex of the surface. Defaults to 0.

  - `:z-bias`: zBias of the surface. Defaults to 0.

  Optional arguments for configuring grid lines:

  - `:grid-u`: the number of lines of constant `u` to plot along the surface.

  - `:grid-v`: the number of lines of constant `v` to plot along the surface.

  - `:grid-opacity`: opacity of the grid lines. Defaults to 0.5.

  - `:grid-width`: width of the grid lines.

  - `:grid-color`: color of the grid lines. Defaults to a darkened version of
    `:color`."
  [opts]
  (let [[f-bind opts] (mc/compile-3d opts :f 2)]
    (-> (c/wrap [f-bind] ['emmy.mathbox.components.plot/ParametricSurface
                          (dissoc opts :simplify?)])
        (ev/fragment scene))))

(defn polar-surface
  "Returns a fragment that plots a polar surface defined by `:f` into the scene
  along the area specified by `:r-range` and `:theta-range`.

  Required arguments:

  - `:f`: function of the form `(fn [[r theta]] [<z>])`, valid within the
    area specified by `:r-range` and `:theta-range`.

  Optional arguments:

  - `:r-range`: 2-vector of the form `[<min-r> <max-r>]` specifying the interval
    of the first input to `f`. Defaults to `[0 3]`.

  - `:theta-range`: 2-vector of the form `[<min-theta> <max-theta>]` specifying
    the interval of the second input to `f`. Defaults to `[0 (* 2 Math/PI)]`.

  - `:r-samples`: the number of r samples to use to generate the surface.
    Defaults to 64.

  - `:theta-samples`: the number of theta samples to use to generate the
    surface. Defaults to 64.

  - `:shaded?` if `true` (default), MathBox will shade the surface.

  - `:opacity`: opacity of the surface. Defaults to 0.75.

  - `:color`: color of the surface. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the surface. Defaults to 25.

  - `:z-index`: zIndex of the surface. Defaults to 0.

  - `:z-bias`: zBias of the surface. Defaults to 0.

  Optional arguments for configuring grid lines:

  - `:grid-r`: the number of lines of constant `r` to plot along the surface.

  - `:grid-theta`: the number of lines of constant `theta` to plot along the surface.

  - `:grid-opacity`: opacity of the grid lines. Defaults to 0.5.

  - `:grid-width`: width of the grid lines.

  - `:grid-color`: color of the grid lines. Defaults to a darkened version of
    `:color`."
  [opts]
  (let [[z-bind opts] (c/compile-2d opts :z)]
    (-> (c/wrap [z-bind] ['emmy.mathbox.components.plot/PolarSurface opts])
        (ev/fragment scene))))

(defn of-xy
  "Returns a fragment that plots an explicit surface defined by `:z` into the
  scene along the area specified by `:x-range` and `:y-range`.

  Required arguments:

  - `:z`: function of the form `(fn [[x y]] [<z>])`, valid within the
    area specified by `:x-range` and `:y-range`.

  Optional arguments:

  - `:x-range`: 2-vector of the form `[<min-x> <max-x>]` specifying the interval
    of the first input to `f`. Defaults to the scene's range.

  - `:y-range`: 2-vector of the form `[<min-y> <max-y>]` specifying the interval
    of the second input to `f`. Defaults to the scene's range.

  - `:x-samples`: the number of x samples to use to generate the surface.
    Defaults to 64.

  - `:y-samples`: the number of y samples to use to generate the surface.
    Defaults to 64.

  - `:shaded?` if `true` (default), MathBox will shade the surface.

  - `:opacity`: opacity of the surface. Defaults to 0.75.

  - `:color`: color of the surface. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the surface. Defaults to 25.

  - `:z-index`: zIndex of the surface. Defaults to 0.

  - `:z-bias`: zBias of the surface. Defaults to 0.

  Optional arguments for configuring grid lines:

  - `:grid-x`: the number of lines of constant `x` to plot along the surface.

  - `:grid-y`: the number of lines of constant `y` to plot along the surface.

  - `:grid-opacity`: opacity of the grid lines. Defaults to 0.5.

  - `:grid-width`: width of the grid lines.

  - `:grid-color`: color of the grid lines. Defaults to a darkened version of
    `:color`."
  [opts]
  (let [[z-bind opts] (c/compile-2d opts :z)]
    (-> (c/wrap [z-bind] ['emmy.mathbox.components.plot/OfXY opts])
        (ev/fragment scene))))

(defn of-xz
  "Returns a fragment that plots an explicit surface defined by `:z` into the
  scene along the area specified by `:x-range` and `:z-range`.

  Required arguments:

  - `:y`: function of the form `(fn [[x z]] [<y>])`, valid within the
    area specified by `:x-range` and `:z-range`.

  Optional arguments:

  - `:x-range`: 2-vector of the form `[<min-x> <max-x>]` specifying the interval
    of the first input to `f`. Defaults to the scene's range.

  - `:z-range`: 2-vector of the form `[<min-z> <max-z>]` specifying the interval
    of the second input to `f`. Defaults to the scene's range.

  - `:x-samples`: the number of x samples to use to generate the surface.
    Defaults to 64.

  - `:z-samples`: the number of z samples to use to generate the surface.
    Defaults to 64.

  - `:shaded?` if `true` (default), MathBox will shade the surface.

  - `:opacity`: opacity of the surface. Defaults to 0.75.

  - `:color`: color of the surface. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the surface. Defaults to 25.

  - `:z-index`: zIndex of the surface. Defaults to 0.

  - `:z-bias`: zBias of the surface. Defaults to 0.

  Optional arguments for configuring grid lines:

  - `:grid-x`: the number of lines of constant `x` to plot along the surface.

  - `:grid-z`: the number of lines of constant `z` to plot along the surface.

  - `:grid-opacity`: opacity of the grid lines. Defaults to 0.5.

  - `:grid-width`: width of the grid lines.

  - `:grid-color`: color of the grid lines. Defaults to a darkened version of
    `:color`."
  [opts]
  (let [[y-bind opts] (c/compile-2d opts :y)]
    (-> (c/wrap [y-bind] ['emmy.mathbox.components.plot/OfXZ opts])
        (ev/fragment scene))))

(defn of-yz
  "Returns a fragment that plots an explicit surface defined by `:x` into the
  scene along the area specified by `:y-range` and `:z-range`.

  Required arguments:

  - `:x`: function of the form `(fn [[y z]] [<x>])`, valid within the
    area specified by `:y-range` and `:z-range`.

  Optional arguments:

  - `:y-range`: 2-vector of the form `[<min-y> <max-y>]` specifying the interval
    of the first input to `f`. Defaults to the scene's range.

  - `:z-range`: 2-vector of the form `[<min-z> <max-z>]` specifying the interval
    of the second input to `f`. Defaults to the scene's range.

  - `:y-samples`: the number of y samples to use to generate the surface.
    Defaults to 64.

  - `:z-samples`: the number of z samples to use to generate the surface.
    Defaults to 64.

  - `:shaded?` if `true` (default), MathBox will shade the surface.

  - `:opacity`: opacity of the surface. Defaults to 0.75.

  - `:color`: color of the surface. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the surface. Defaults to 25.

  - `:z-index`: zIndex of the surface. Defaults to 0.

  - `:z-bias`: zBias of the surface. Defaults to 0.

  Optional arguments for configuring grid lines:

  - `:grid-y`: the number of lines of constant `y` to plot along the surface.

  - `:grid-z`: the number of lines of constant `z` to plot along the surface.

  - `:grid-opacity`: opacity of the grid lines. Defaults to 0.5.

  - `:grid-width`: width of the grid lines.

  - `:grid-color`: color of the grid lines. Defaults to a darkened version of
    `:color`."
  [opts]
  (let [[x-bind opts] (c/compile-2d opts :x)]
    (-> (c/wrap [x-bind] ['emmy.mathbox.components.plot/OfYZ opts])
        (ev/fragment scene))))

;; ## Vector Fields

(defn vector-field
  "Returns a fragment that plots a vector field defined by `:f` into the scene
  along the volume specified by `:x-range`, `:y-range` and `:z-range`.

  Required arguments:

  - `:f`: function of the form `(fn [[x y z]] [<x> <y> <z>])`, valid within the
    area specified by `:x-range`, `:y-range` and `:z-range`.

    The function should return the coordinates of the tip of a vector with
    origin at `[0 0 0]`; [[VectorField]] will translate each vector to start at
    `[x y z]`.

  Optional arguments:

  - `:scale`: Optional scale factor to apply to each vector's magnitude.
    Defaults to 1.0.

  - `:x-range`: 2-vector of the form `[<min-x> <max-x>]` specifying the interval
    of the first input to `f`. Defaults to the scene's range.

  - `:y-range`: 2-vector of the form `[<min-y> <max-y>]` specifying the interval
    of the first input to `f`. Defaults to the scene's range.

  - `:z-range`: 2-vector of the form `[<min-z> <max-z>]` specifying the interval
    of the second input to `f`. Defaults to the scene's range.

  - `:x-samples`: the number of vectors to plot in the `x` direction. Defaults
    to 10.

  - `:y-samples`: the number of vectors to plot in the `y` direction. Defaults
    to 10.

  - `:z-samples`: the number of vectors to plot in the `z` direction. Defaults
    to 10.

  - `:start?` if `true`, renders an arrow at the start of each vector. Defaults
    to `false`.

  - `:end?` if `true`, renders an arrow at the end of each vector. Defaults to
    `true`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:width`: width of each vector. Defaults to 2.

  - `:opacity`: opacity of each vector. Defaults to 1.0.

  - `:color`: color of each vector. This can be a `three.js` `Color` object
    or [any valid input to its
    constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the vector field.

  - `:z-index`: zIndex of the vector field. Defaults to 0.

  - `:z-bias`: zBias of the vector field. Defaults to 0."
  [opts]
  (let [[f-bind opts] (mc/compile-3d opts :f 3)]
    (-> (c/wrap [f-bind] ['emmy.mathbox.components.plot/VectorField opts])
        (ev/fragment scene))))
