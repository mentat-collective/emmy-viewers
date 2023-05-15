(ns emmy.mafs.coordinates
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
