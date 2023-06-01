(ns emmy.mafs.coordinates
  "Server-side rendering functions for the components declared in the
  [`mafs.coordinates`](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/api/mafs.coordinates)
  namespace of the [`Mafs.cljs` project](https://mafs.mentat.org)."
  (:require [emmy.viewer :as ev]
            [emmy.mafs.core :as mafs]))

(defn cartesian
  "
  - `:x-axis`
  - `:y-axis`
  - `:subdivisions`"
  ([] (cartesian {}))
  ([opts]
   (ev/fragment
    ['mafs.coordinates/Cartesian opts]
    mafs/mafs)))

(defn polar
  "
  - `:x-axis`
  - `:y-axis`
  - `:lines`
  - `:subdivisions`"
  ([] (polar {}))
  ([opts]
   (ev/fragment
    ['mafs.coordinates/Polar opts]
    mafs/mafs)))
