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
   (mafs/tagged
    ['mafs.coordinates/Cartesian opts]
    (comp ev/render mafs/mafs))))

(defn polar
  "
  - `:x-axis`
  - `:y-axis`
  - `:lines`
  - `:subdivisions`"
  ([] (polar {}))
  ([opts]
   (mafs/tagged
    ['mafs.coordinates/Polar opts]
    (comp ev/render mafs/mafs))))
