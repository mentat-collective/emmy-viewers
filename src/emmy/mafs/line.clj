(ns emmy.mafs.line
  "Server-side rendering functions for the components declared in the
  [`mafs.line`](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/api/mafs.line)
  namespace of the [`Mafs.cljs` project](https://mafs.mentat.org)."
  (:require [emmy.mafs.core :as mafs]))

(defn segment
  "
  - `:point1`
  - `:point2`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  [opts]
  (mafs/fragment
   ['mafs.line/Segment opts]))

(defn through-points
  "
  - `:point1`
  - `:point2`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  [opts]
  (mafs/fragment
   ['mafs.line/ThroughPoints opts]))

(defn point-slope
  "
  - `:point`
  - `:slope`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  [opts]
  (mafs/fragment
   ['mafs.line/PointSlope opts]))

(defn point-angle
  "
  - `:point`
  - `:angle`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  [opts]
  (mafs/fragment
   ['mafs.line/PointAngle opts]))
