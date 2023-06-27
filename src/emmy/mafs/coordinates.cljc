(ns emmy.mafs.coordinates
  "Server-side rendering functions for the components declared in the
  [`mafs.coordinates`](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/api/mafs.coordinates)
  namespace of the [`Mafs.cljs` project](https://mafs.mentat.org)."
  (:require [emmy.mafs.core :as mafs]))

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
   (mafs/fragment
    ['mafs.coordinates/Cartesian opts]
    mafs/mafs)))

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
   (mafs/fragment
    ['mafs.coordinates/Polar opts]
    mafs/mafs)))
