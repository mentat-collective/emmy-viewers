(ns emmy.mafs.plot
  "Server-side rendering functions for the components declared in the
  [`mafs.plot`](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/api/mafs.plot)
  namespace of the [`Mafs.cljs` project](https://mafs.mentat.org)."
  (:require [emmy.mafs.core :as mafs]
            [emmy.viewer.compile :as c]))

(defn of-x
  "Takes either

  - a function `f: R => R` defined either using Emmy primitives, or written in
    ClojureScript and quoted, and an optional `opts` map
  - a map with `:y` entry required

  and returns a fragment that will plot `y = f(x)` values onto a Mafs scene.

  If `f` is built out of Emmy primitives, [[of-x]] will compile `f` down into a
  fast native JS function.

  For parametrized functions, see [[emmy.viewer/with-params]].

  Supported options:

  - `:y`: a function `f: R => R` defined either using Emmy primitives, or
      written in ClojureScript and quoted

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs.core/colors]].

  - `:min-sampling-depth`: The minimum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:max-sampling-depth`: The maximum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\".

  - `:svg-path-props`: A map of property name => value of any property
    accepted
    by [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement)
    or any parent."
  ([f opts]
   (of-x (assoc opts :y f)))
  ([f-or-opts]
   (if (c/opts? f-or-opts)
     (let [[binding opts] (c/compile-1d f-or-opts :y)]
       (mafs/fragment
        (c/wrap [binding] ['mafs.plot/OfX opts])))
     (of-x f-or-opts {}))))

(defn of-y
  "Takes either

  - a function `f: R => R` defined either using Emmy primitives, or written in
    ClojureScript and quoted, and an optional `opts` map
  - a map with `:x` entry required

  and returns a fragment that will plot `x = f(y)` values onto a Mafs scene.

  If `f` is built out of Emmy primitives, [[of-y]] will compile `f` down into a
  fast native JS function.

  For parametrized functions, see [[emmy.viewer/with-params]].

  Supported options:

  - `:x`: a function `f: R => R` defined either using Emmy primitives, or
      written in ClojureScript and quoted

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs.core/colors]].

  - `:min-sampling-depth`: The minimum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:max-sampling-depth`: The maximum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\".

  - `:svg-path-props`: A map of property name => value of any property
    accepted
    by [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement)
    or any parent."
  ([f opts]
   (of-y (assoc opts :x f)))
  ([f-or-opts]
   (if (c/opts? f-or-opts)
     (let [[binding opts] (c/compile-1d f-or-opts :x)]
       (mafs/fragment
        (c/wrap [binding] ['mafs.plot/OfY opts])))
     (of-y f-or-opts {}))))

(defn inequality
  "given a map `opts`, returns a fragment that will plot the region between two
  functions (or constants, or either function-constant combination). The
  inequality can be a function of $x$ or $y$.

  If any function in `:x` or `:y` is built out of Emmy
  primitives, [[inequality]] will compile these into fast native JS functions.

  For parametrized functions, see [[emmy.viewer/with-params]].

  Supported options:

  - `:y`: map with some combination of keys `:<`, `:>`, `:<=` or `:>=`
    representing inequality symbols, each bound to either

    - a static `x` value, or

    - a function of type `f: R => R` defined either using Emmy primitives, or
      written in ClojureScript and quoted.

    Mixing conflicting inequality operators like `:<` and `:<=` or `:>` and
    `:>=` will result in a runtime exception.

  - `:x`: same as `:y`, but functions are passed `y` values instead of `x`
    values. Only one of `:x` or `:y` is supported! Passing both will result in a
    runtime exception.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs.core/colors]].

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the lines on the plot.

  - `:stroke-color`: any valid [CSS
    color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
    from [[emmy.mafs.core/colors]].

  - `:stroke-opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:fill-color`: any valid [CSS
    color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
    from [[emmy.mafs.core/colors]].

  - `:fill-opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:min-sampling-depth`: The minimum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:max-sampling-depth`: The maximum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:upper-color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs.core/colors]].

  - `:upper-weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the lines on the plot.

  - `:upper-opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:lower-color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs.core/colors]].

  - `:lower-weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the lines on the plot.

  - `:lower-opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:svg-upper-path-props`: A map of property name => value of any property
    accepted
    by [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement)
    or any parent.

  - `:svg-lower-path-props`: A map of property name => value of any property
    accepted
    by [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement)
    or any parent.

  - `:svg-fill-props`: A map of property name => value of any property
    accepted
    by [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement)
    or any parent."
  [opts]
  (let [[x-binds x] (c/compile-vals (:x opts) c/compile-1d)
        [y-binds y] (c/compile-vals (:y opts) c/compile-1d)]
    (mafs/fragment
     (c/wrap (into x-binds y-binds)
             ['mafs.plot/Inequality
              (cond-> opts
                x (assoc :x x)
                y (assoc :y y))]))))

(defn parametric
  "Given a map `opts`, returns a fragment that will plot $(x, y)$ points as a
  function of the parametric function provided to `:xy` for the range specified
  by `:t` onto a Mafs scene.

  If the function `f` is built out of Emmy primitives, [[of-x]] will compile `f`
  down into a fast native JS function.

  For parametrized functions, see [[emmy.viewer/with-params]].

  Supported options:

  - `:xy`: a function `(fn [t] [<x> <y>])` defined either using Emmy primitives,
    or written in ClojureScript and quoted

  - `:t`: 2-vector of the form `[<start-t> <end-t>]` inclusive defining the
    domain in which to evaluate `:xy`.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs.core/colors]].

  - `:min-sampling-depth`: The minimum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:max-sampling-depth`: The maximum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\".

  - `:svg-path-props`: A map of property name => value of any property
    accepted
    by [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement)
    or any parent."
  #_
  "
  - `:xy`
  - `:t`
  - `:svg-path-props`
  - `:color`
  - `:min-sampling-depth`
  - :`max-sampling-depth`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  ([opts]
   (let [[binding opts] (c/compile-1d opts :xy)]
     (mafs/fragment
      (c/wrap [binding] ['mafs.plot/Parametric opts])))))

(defn vector-field
  "Given a map `opts`, returns a fragment that will plot a vector at every point
  in a grid on a coordinate plane by calling a function `:xy` that receives the
  vector's tail and returns its tip.

  If the function `f` is built out of Emmy primitives, [[of-x]] will compile `f`
  down into a fast native JS function.

  For parametrized functions, see [[emmy.viewer/with-params]].

  Supported options:

  - `:xy`: a function `(fn [[<tail-x> <tail-y>]] [<tip-x> <tip-y>])` defined
    either using Emmy primitives, or written in ClojureScript and quoted.

  - `:xy-opacity`: function from a point `[<x> <y>]` to a double in the
    range [0.0, 0.1] inclusive, defined either using Emmy primitives or written in
    ClojureScript and quoted.

  - `:step`: spacing between each vector in the vector field.

  - `:opacity-step`: opacity is quantized; this value (between 0.01 and 1)
    defines the width of an opacity layer bucket.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs.core/colors]].

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  ([f opts]
   (vector-field (assoc opts :xy f)))
  ([f-or-opts]
   (if (c/opts? f-or-opts)
     (let [[xy-bind opts] (c/compile-2d f-or-opts :xy)
           [op-bind opts] (c/compile-2d opts :xy-opacity)]
       (mafs/fragment
        (c/wrap [xy-bind op-bind]
                ['mafs.plot/VectorField opts])))
     (vector-field f-or-opts {}))))
