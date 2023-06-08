(ns emmy.mafs.line
  "Server-side rendering functions for the components declared in the
  [`mafs.line`](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/api/mafs.line)
  namespace of the [`Mafs.cljs` project](https://mafs.mentat.org)."
  (:require [emmy.mafs.core :as mafs]))

(defn segment
  "Given a map `opts`, returns a Reagent fragment that will render a line segment
  between points `:point1` and `:point2` into a Mafs scene.

  Supported options:

  - `:point1`: a 2-vector of the form `[<x> <y>]`.

  - `:point2`: a 2-vector of the form `[<x> <y>]`.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs.core/colors]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
     the line.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  [opts]
  (mafs/fragment
   ['mafs.line/Segment opts]))

(defn through-points
  "Given a map `opts`, returns a Reagent fragment that will render a line
  between points `:point1` and `:point2` into a Mafs scene.

  Supported options:

  - `:point1`: a 2-vector of the form `[<x> <y>]`.

  - `:point2`: a 2-vector of the form `[<x> <y>]`.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs.core/colors]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the line.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  [opts]
  (mafs/fragment
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
     from [[emmy.mafs.core/colors]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the line.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  [opts]
  (mafs/fragment
   ['mafs.line/PointSlope opts]))

(defn point-angle
  "Given a map `opts`, returns a Reagent fragment that will render a line
  passing through point `:point` with angle `:angle` into a Mafs scene.

  Supported options:

  - `:point`: a 2-vector of the form `[<x> <y>]`.

  - `:angle`: angle in radians.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[emmy.mafs.core/colors]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the line.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  [opts]
  (mafs/fragment
   ['mafs.line/PointAngle opts]))
