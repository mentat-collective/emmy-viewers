(ns emmy.mafs.core
  "Server-side rendering functions for the components declared in the
  [`mafs.core`](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/api/mafs.core)
  namespace of the [`Mafs.cljs` project](https://mafs.mentat.org)."
  (:refer-clojure :exclude [vector])
  (:require [emmy.viewer :as ev]))

;; ## Viewer Machinery

(defn ^:no-doc default-viewer
  "Given a Reagent fragment for some standalone Mafs component, returns a version
  wrapped in `[mafs.core/Mafs [mafs.coordinates/Cartesian] ...]`, allowing it to
  render standalone."
  [child]
  (ev/fragment
   ['mafs.core/Mafs
    ['mafs.coordinates/Cartesian]
    child]))

(defn ^:no-doc fragment
  "Mafs-specific version of [[emmy.viewer/fragment]] that
  supplies [[default-viewer]] as the default, instead
  of [[emmy.viewer/reagent-viewer]]."
  ([v] (ev/fragment v default-viewer))
  ([v viewer]
   (ev/fragment v viewer)))

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

  - `:view-box`: If true, enable zooming with the mouse and keyboard.

      can also be a map with keys `:min` (in range `(0, 1]`) and `:max` (in range
      `[1, ∞)`).

  - `:preserve-aspect-ratio`: boolean or \"contain\" (default). Whether to
    squish the graph to fill the Mafs viewport or to preserve the aspect ratio of
    the coordinate space.

  - `:on-click`: `(fn [point, mouse-event] ...)`, called when the view is
    clicked on, and passed the point where it was clicked.
  "
  [& children]
  (ev/fragment
   (into ['mafs.core/Mafs] children)))

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
     from [[mafs.core/colors]].

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
     from [[mafs.core/colors]].

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the polygon's boundary line.

  - `:fill-opacity`: Double in the range [0.0, 0.1] inclusive specifying the
      opacity of the interior of the polygon.

  - `:stroke-opacity`: Double in the range [0.0, 0.1] inclusive specifying the
      opacity of the boundary of the polygon.

  - `:stroke-style`: \"solid\" or \"dashed\". Defaults to \"solid\".

  - `:svg-polygon-props`: A map of property name => value of any property
    accepted
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
     from [[mafs.core/colors]].

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the polygon's boundary line.

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
     from [[mafs.core/colors]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the polygon's boundary line.

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
  "Takes an options map any number of (Reagent-fragment) children and returns a
  fragment that will transform the children as specified by the options.

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

  - `:atom`: atom into which the movable point should synchronize its current
    coordinates `[<x> <y>]`. By default, `reset!`s the atom. Use `:path` to
    synchronize with some internal path.

  - `:path`: the (optional) path into the atom. For example, any of these forms
    are valid:

  ```clojure
  (reagent.core/with-let [!xy (reagent.core/atom [0 0])]
    (movable-point {:atom !xy}))

  (reagent.core/with-let [!state (reagent.core/atom {:coords [0 0]})]
    (movable-point {:atom !state :path :coords}))

  (reagent.core/with-let
    [!state (reagent.core/atom {:nested {:coords [0 0]}})]
    (movable-point {:atom !state :path [:nested :coords]}))
  ```

  - `:point`: the controlled coordinates `[<x> <y>]` of the point.

  - `:on-move`: called on each update with the new coordinates of the point.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/colors]].

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
