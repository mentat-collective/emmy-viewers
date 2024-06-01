(ns emmy.mafs
  "Convenience namespace that unites functions from all of the `mafs`
  sub-namespaces in the library."
  (:refer-clojure :exclude [vector])
  (:require [emmy.viewer :as ev]
            [emmy.viewer.compile :as c]))

;; ## Viewer Machinery

(defn mafs-meta [v]
  (vary-meta v assoc
             :portal.viewer/mafs? true
             :portal.viewer/default :emmy.portal/mafs))

(defn ^:no-doc default-viewer
  "Given a Reagent fragment for some standalone Mafs component, returns a version
  wrapped in `[mafs.core/Mafs [mafs.coordinates/Cartesian] ...]`, allowing it to
  render standalone."
  [child]
  (mafs-meta
   (ev/fragment
    ['mafs.core/Mafs
     ['mafs.coordinates/Cartesian]
     child])))

(defn ^:no-doc fragment
  "Mafs-specific version of [[emmy.viewer/fragment]] that
  supplies [[default-viewer]] as the default, instead
  of [[emmy.viewer/reagent-viewer]]."
  ([v]
   (fragment v default-viewer))
  ([v viewer]
   (mafs-meta
    (ev/fragment v viewer))))

;; ## Core Components

(def colors
  "Color keywords controlled by the current Mafs theme."
  #{:foreground :background :red :orange :green
    :blue :indigo :violet :pink :yellow})

(defn mafs
  "Given an optional map of options and any number of children, returns a fragment
  that will render as a Mafs 2D scene.

  Supported options:

  - `:width`: number (width in pixels) or \"auto\"

  - `:height`: number (height in pixels)

  - `:pan`: If true (default), enable panning with the mouse and keyboard.

  - `:zoom`: If true, enable zooming with the mouse and keyboard.

      can also be a map with keys `:min` (in range `(0, 1]`) and `:max` (in range
      `[1, ∞)`).

  - `:view-box`: (optional)A way to declare the \"area of interest\" of your
    visualizations. Mafs will center and zoom to this area. Supply `nil` or a map
    with the following key-value pairs:

    - `:x`: (optional) a 2-vector of `[<x-min> <x-max>]`

    - `:y`: (optional) a 2-vector of `[<y-min> <y-max>]`

    - `:padding`: (optional) number of pixels to pad

  - `:preserve-aspect-ratio`: boolean or \"contain\" (default). Whether to
    squish the graph to fill the Mafs viewport or to preserve the aspect ratio of
    the coordinate space.

  - `:on-click`: Quoted ClojureScript `'(fn [point, mouse-event] ...)`, called
      when the view is clicked on, and passed the point where it was clicked."
  [& children]
  (mafs-meta
   (ev/fragment
    (into ['mafs.core/Mafs] children))))

(defn point
  "Takes either

  - a 2-vector of `[<x> <y>]` and (optionally) a map of options
  - a map with `:x` and `:y` entries required

  and returns a fragment that will render a dot onto a Mafs scene at location
  $(x, y)$.

  Supported options:

  - `:x`: x-coordinate of the point.

  - `:y`: y-coordinate of the point.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs/colors]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:svg-circle-props`: A map of property name => value of any property
    accepted
    by [SVGCircleElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGCircleElement)
    or any parent."
  ([[x y] opts]
   (point (assoc opts :x x :y y)))
  ([pair-or-opts]
   (if (vector? pair-or-opts)
     (point pair-or-opts {})
     (fragment
      ['mafs.core/Point pair-or-opts]))))

(defn polygon
  "Takes either

  - a sequence of 2-vectors `[<x> <y>]` specifying the polygon's vertices
    and (optionally) a map of options
  - a map with `:point` entry required

  and returns a fragment that will render a polygon onto a Mafs scene bounded by
  the specified points.

  Supported options:

  - `:points`: a sequence of `[<x> <y>]` coordinates.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs/colors]].

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the polygon's boundary line.

  - `:fill-opacity`: Double in the range [0.0, 0.1] inclusive specifying the
      opacity of the interior of the polygon.

  - `:stroke-opacity`: Double in the range [0.0, 0.1] inclusive specifying the
      opacity of the boundary of the polygon.

  - `:stroke-style`: \"solid\" or \"dashed\". Defaults to \"solid\".

  - `:svg-polygon-props`: A map of property name => value of any property
    acceptedr
    by [SVGPolygonElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPolygonElement)
    or any parent."
  ([points opts]
   (polygon (assoc opts :points points)))
  ([points-or-opts]
   (if (vector? points-or-opts)
     (polygon points-or-opts {})
     (fragment
      ['mafs.core/Polygon points-or-opts]))))

(defn polyline
  "Similar to [[polygon]], except the first and last points are not connected.

  See [[polygon]] for supported inputs."
  ([points opts]
   (polyline (assoc opts :points points)))
  ([points-or-opts]
   (if (vector? points-or-opts)
     (polyline points-or-opts {})
     (fragment
      ['mafs.core/Polyline points-or-opts]))))

(defn ellipse
  "Takes a map with `:center` and `:radius` entries required and returns a
  fragment that will render the specified ellipse onto a Mafs scene.

  Supported options:

  - `:center`: a 2-vector specifying the `[<x> <y>]` coordinate of the center.

  - `:radius`: a 2-vector specifying `[<width-radius> <height-radius>]`

  - `:angle`: a counter-clockwise angle in radians to rotate the ellipse.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/colors]].

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the ellipse's boundary line.

  - `:fill-opacity`: Double in the range [0.0, 0.1] inclusive specifying the
      opacity of the interior of the ellipse.

  - `:stroke-opacity`: Double in the range [0.0, 0.1] inclusive specifying the
      opacity of the boundary of the ellipse.

  - `:stroke-style`: \"solid\" or \"dashed\". Defaults to \"solid\".

  - `:svg-ellipse-props`: A map of property name => value of any property
    accepted
    by [SVGEllipseElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGEllipseElement)
    or any parent."
  [opts]
  (fragment
   ['mafs.core/Ellipse opts]))

(defn circle
  "Similar to [[ellipse]] but takes a single number for `:radius`.

  See [[ellipse]] for a description of all other supported options."
  [opts]
  (fragment
   ['mafs.core/Circle opts]))

(defn text
  "Takes some string `s` (and optionally a map `opts` of options) and returns a
  fragment that will render `s` onto a Mafs scene.

  Supported options:

  - `:x`: The x-coordinate of the element the text should attach to.

  - `:y`: The y-coordinate of the element the text should attach to.

  - `:attach`: The cardinal direction that `s` should be offset from its
      element. One of \"n\" | \"ne\" | \"e\" | \"se\" | \"s\" | \"sw\" | \"w\" |
      \"nw\".

  - `:attach-distance`: The distance away from the attaching element.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs/colors]].

  - `:weight`: Double in the range [0.0, 0.1] inclusive.

  - `:size`: font size.

  - `:svg-text-props`: A map of property name => value of any property accepted
      by [SVGTextElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGTextElement)
      or any parent."
  ([s] (text s {}))
  ([s opts]
   (let [opts (assoc opts
                     :x (:x opts 0)
                     :y (:y opts 0))]
     (fragment
      ['mafs.core/Text opts s]))))

(defn vector
  "Takes either:

  - a 2-vector of the `[<x> <y>]` coordinates of the vector tip and a map of
    options
  - a map with `:tip` entry required

  and returns a fragment that will render a vector onto a Mafs scene.

  Supported options:

  - `:tail`: 2-vector `[<x> <y>]` specifying the coordinates of the vector tip.

  - `:tip`: 2-vector `[<x> <y>]` specifying the coordinates of the vector tip.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs/colors]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\".

  - `:svg-line-props`: A map of property name => value of any property accepted
      by [SVGLineElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGLineElement)
      or any parent."
  ([tip opts]
   (vector (assoc opts :tip tip)))
  ([tip-or-opts]
   (if (vector? tip-or-opts)
     (vector tip-or-opts {})
     (fragment
      ['mafs.core/Vector tip-or-opts]))))

(defn transform
  "Takes an options map and any number of (Reagent-fragment) children and returns
  a fragment that will transform the children as specified by the options.

  Supported options:

  - `:matrix`: Matrix object generated by the code in [[mafs.matrix]].

  - `:translate`: 2-vector of the form `[<x-translation> <y-translation>]`.

  - `:scale`: either a number (scale factor) or a 2-vector of the form
    `[<x-scale> <y-scale>]`.

  - `:rotate`: number of radians to rotate the children.

  - `:translate`: 2-vector of the form `[<x-shear> <y-shear>]`."
  [& children]
  (fragment
   (into ['mafs.core/Transform] children)))

(defn movable-point
  "Takes an options map and returns a fragment that renders a movable point onto a
  Mafs scene.

  Movable points can be dragged around the coordinate plane, or moved via the
  keyboard. These points can also synchronize their current position into an
  atom specified by the user, optionally at some nested path.

  Control the point by either specifying

  - `:atom` (and `:path`, optionally)
  - `:point` and `:on-move`.

  Supported options:

  - `:atom`: symbol referencing a client-side atom into which the movable point
    should synchronize its current coordinates `[<x> <y>]`. By default, `reset!`s
    the atom. Use `:path` to synchronize with some internal path.

  - `:path`: the (optional) path into the atom. For example, any of these forms
    are valid:

  ```clojure
  (emmy.viewer/with-let [!xy [0 0]]
    (movable-point {:atom !xy}))

  (emmy.viewer/with-let [!state {:coords [0 0]}]
    (movable-point {:atom !state :path :coords}))

  (emmy.viewer/with-let [!state {:nested {:coords [0 0]}}]
    (movable-point {:atom !state :path [:nested :coords]}))
  ```

  - `:point`: the controlled coordinates `[<x> <y>]` of the point.

  - `:on-move`: called on each update with the new coordinates of the point.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs/colors]].

  - `:constrain`: Either \"horizontal\" | \"vertical\" | <constraint function>

    If you supply a function you'll need to quote the function so it makes it
    over to the client. This function will be called on each point update with the
    proposed position; return a new 2-vector with the constrained position.

    For example, the following will constrain the point to a sine curve:

  ```clojure
  (movable-point {:constrain '(fn [[x _]] [x (Math/sin x)])})
  ```"
  [opts]
  (fragment
   ['mafs.core/MovablePoint opts]))

;; ## Coordinates

(defn cartesian
  "Takes an (optional) options map `opts` and returns a fragment that will render
  a cartesian coordinate plane into the Mafs scene.

  Supported options:

  - `:x-axis`: `false` to disable the axis, or an axis options map (see below).

  - `:y-axis`: `false` to disable the axis, or an xis options map (see below).

  - `:subdivisions`: How many subdivisions to draw per line as a default for
    both axes, or `false` to draw none.

  Supported axis options:

  - `:axis`: boolean that specifies whether or not to draw the axis line.

  - `:lines`: The spacing between each primary line orthogonal to the axis, or
      false to draw none.

  - `:subdivisions`: How many subdivisions to draw per line, or `false` to draw
      none.

  - `:labels`: A quoted ClojureScript function that returns a label for each
      line, or [[emmy.viewer.plot/label-pi]]. "
  ([] (cartesian {}))
  ([opts]
   (fragment
    ['mafs.coordinates/Cartesian opts]
    mafs)))

(defn polar
  "Takes an (optional) options map `opts` and returns a fragment that will render
  a polar coordinate plane into the Mafs scene.

  Supported options:

  - `:x-axis`: `false` to disable the axis, or an axis options map (see below).

  - `:y-axis`: `false` to disable the axis, or an xis options map (see below).

  - `:lines`: The spacing between each radial line, or false to draw none.

  - `:subdivisions`: How many subdivisions to draw per line as a default for
    both axes, or `false` to draw none.

  Supported axis options:

  - `:axis`: boolean that specifies whether or not to draw the axis line.

  - `:labels`: A quoted ClojureScript function that returns a label for each
      line, or [[emmy.viewer.plot/label-pi]]. "
  ([] (polar {}))
  ([opts]
   (fragment
    ['mafs.coordinates/Polar opts]
    mafs)))

;; ## Debug

(defn transform-widget
  "Returns a Reagent fragment that wraps any supplied children in an interactive
  transformation widget that lets you rotate, scale and translate all children."
  [& children]
  (fragment
   (into ['mafs.debug/TransformWidget] children)))

(defn viewport-info
  "Returns a Reagent fragment that mounts a `ViewportInfo` component into the Mafs
  scene.

  This component displays Mafs' understanding of the world space that's in view,
  showing both the minimum and maximum x and y values, as well as what panes are
  visible according to the pane context.

  Supported options:

  - `:precision`: The number of decimal places to which to round the displayed
    values. Defaults to 3."
  ([] (viewport-info {}))
  ([opts]
   (fragment
    ['mafs.debug/ViewportInfo opts])))


;; ## Line

(defn segment
  "Given a map `opts`, returns a Reagent fragment that will render a line segment
  between points `:point1` and `:point2` into a Mafs scene.

  Supported options:

  - `:point1`: a 2-vector of the form `[<x> <y>]`.

  - `:point2`: a 2-vector of the form `[<x> <y>]`.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs/colors]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
     the line.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  [opts]
  (fragment
   ['mafs.line/Segment opts]))

(defn through-points
  "Given a map `opts`, returns a Reagent fragment that will render a line
  between points `:point1` and `:point2` into a Mafs scene.

  Supported options:

  - `:point1`: a 2-vector of the form `[<x> <y>]`.

  - `:point2`: a 2-vector of the form `[<x> <y>]`.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs/colors]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the line.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  [opts]
  (fragment
   ['mafs.line/ThroughPoints opts]))

(defn point-slope
  "Given a map `opts`, returns a Reagent fragment that will render a line
  passing through point `:point` with slope `:slope` into a Mafs scene.

  Supported options:

  - `:point`: a 2-vector of the form `[<x> <y>]`.

  - `:slope`: number defining the slope of the line (amount of increase in the
    `y` direction for each unit increase in the `x` direction).

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs/colors]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the line.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  [opts]
  (fragment
   ['mafs.line/PointSlope opts]))

(defn point-angle
  "Given a map `opts`, returns a Reagent fragment that will render a line
  passing through point `:point` with angle `:angle` into a Mafs scene.

  Supported options:

  - `:point`: a 2-vector of the form `[<x> <y>]`.

  - `:angle`: angle in radians.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs/colors]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the line.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  [opts]
  (fragment
   ['mafs.line/PointAngle opts]))

;; ## Plot

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
     from [[emmy.mafs/colors]].

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
       (fragment
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
     from [[emmy.mafs/colors]].

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
       (fragment
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
     from [[emmy.mafs/colors]].

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the lines on the plot.

  - `:stroke-color`: any valid [CSS
    color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
    from [[emmy.mafs/colors]].

  - `:stroke-opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:fill-color`: any valid [CSS
    color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
    from [[emmy.mafs/colors]].

  - `:fill-opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:min-sampling-depth`: The minimum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:max-sampling-depth`: The maximum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:upper-color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs/colors]].

  - `:upper-weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the lines on the plot.

  - `:upper-opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:lower-color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs/colors]].

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
    (fragment
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
     from [[emmy.mafs/colors]].

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
     (fragment
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
     from [[emmy.mafs/colors]].

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  ([f opts]
   (vector-field (assoc opts :xy f)))
  ([f-or-opts]
   (if (c/opts? f-or-opts)
     (let [[xy-bind opts] (c/compile-2d f-or-opts :xy)
           [op-bind opts] (c/compile-2d opts :xy-opacity)]
       (fragment
        (c/wrap [xy-bind op-bind]
                ['mafs.plot/VectorField opts])))
     (vector-field f-or-opts {}))))
