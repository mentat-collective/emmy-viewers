(ns emmy.mafs.core
  "Server-side rendering functions for the components declared in the
  [`mafs.core`](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/api/mafs.core)
  namespace of the [`Mafs.cljs` project](https://mafs.mentat.org)."
  (:refer-clojure :exclude [vector])
  (:require [emmy.viewer :as ev]))

(defn ^:no-doc default-viewer [child]
  (ev/fragment
   ['mafs.core/Mafs
    ['mafs.coordinates/Cartesian]
    child]))

(defn ^:no-doc fragment
  "Given a reagent fragment , returns "
  ([v] (ev/fragment v default-viewer))
  ([v viewer]
   (ev/fragment v viewer)))

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
  (fragment
   (into ['mafs.core/Mafs] children)
   ev/reagent-viewer))

(defn point
  "Takes either

  - a 2-vector of `[<x> <y>]` and (optionally) a map of options
  - a map with `:x` and `:y` required

  and returns a fragment that will render a dot onto a Mafs scene at location
  $(x, y)$.

  Supported options:

  - `:x`: x-coordinate of the point.

  - `:y` y-coordinate of the point.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:svg-circle-props`: I'll document these when I figure out what's allowed!"
  ([[x y] opts]
   (point (assoc opts :x x :y y)))
  ([pair-or-opts]
   (if (vector? pair-or-opts)
     (point pair-or-opts {})
     (fragment
      ['mafs.core/Point pair-or-opts]))))

(defn polygon
  "
  - `:points`
  - `:color`
  - `:weight`
  - `:fill-opacity`
  - `:stroke-opacity`
  - `:stroke-style`
  - `:svg-polygon-props`
  "
  ([points opts]
   (polygon (assoc opts :points points)))
  ([points-or-opts]
   (if (vector? points-or-opts)
     (polygon points-or-opts {})
     (fragment
      ['mafs.core/Polygon points-or-opts]))))

(defn polyline
  "
  - `:points`
  - `:color`
  - `:weight`
  - `:fill-opacity`
  - `:stroke-opacity`
  - `:stroke-style`
  - `:svg-polygon-props`
  "
  ([points opts]
   (polyline (assoc opts :points points)))
  ([points-or-opts]
   (if (vector? points-or-opts)
     (polyline points-or-opts {})
     (fragment
      ['mafs.core/Polyline points-or-opts]))))

(defn ellipse
  "
  - `:center`
  - `:radius`
  - `:angle`
  - `:svg-ellipse-props`
  - `:color`
  - `:weight`
  - `:fill-opacity`
  - `:stroke-opacity`
  - `:stroke-style`
  "
  [opts]
  (fragment
   ['mafs.core/Ellipse opts]))

(defn circle
  "
  - `:center`
  - `:radius`
  - `:svg-ellipse-props`
  - `:color`
  - `:weight`
  - `:fill-opacity`
  - `:stroke-opacity`
  - `:stroke-style`
  "
  [opts]
  (fragment
   ['mafs.core/Circle opts]))

(defn text
  "
  - `:x`
  - `:y`
  - `:attach`
  - `:attach-distance`
  - `:size`
  - `:color`
  - `:svg-text-props`

  TODO add default x y
  "
  ([s] (text s {}))
  ([s opts]
   (let [opts (assoc opts
                     :x (:x opts 0)
                     :y (:y opts 0))]
     (fragment
      ['mafs.core/Text opts s]))))

(defn vector
  "
  - `:tail`
  - `:tip`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  - `:svg-line-props`
  "
  ([tip opts]
   (vector (assoc opts :tip tip)))
  ([tip-or-opts]
   (if (vector? tip-or-opts)
     (vector tip-or-opts {})
     (fragment
      ['mafs.core/Vector tip-or-opts]))))

(defn transform
  "TODO allow an emmy matrix, and convert it into their notation internally.

  - `:matrix`
  - `:translate`
  - `:scale`
  - `:rotate`
  - `:shear`
  "
  [& children]
  (fragment
   (into ['mafs.core/Transform] children)))

(defn movable-point
  "This version takes an atom and, optionally, a path into the atom.
  - `:atom`
  - `:path` optional
  - `:constrain`
  - `:color`

  also discuss

  - `:point`
  - `:on-move`"
  [opts]
  (fragment
   ['mafs.core/MovablePoint opts]))
