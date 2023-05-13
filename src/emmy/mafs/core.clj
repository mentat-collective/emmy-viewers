(ns emmy.mafs.core
  (:refer-clojure :exclude [vector])
  (:require [emmy.viewer :as ev]
            [nextjournal.clerk :as clerk]))

(defn ^:no-doc default-viewer [child]
  (ev/render
   ['mafs.core/Mafs
    ['mafs.coordinates/Cartesian]
    child]))

(defn ^:no-doc tagged
  ([v] (tagged v default-viewer))
  ([v viewer]
   (with-meta v {::clerk/viewer viewer})))

(def Theme
  {:red "var(--mafs-red)"
   :orange "var(--mafs-orange)"
   :green "var(--mafs-green)"
   :blue "var(--mafs-blue)"
   :indigo "var(--mafs-indigo)"
   :violet "var(--mafs-violet)"
   :pink "var(--mafs-pink)"
   :yellow "var(--mafs-yellow)"})

(defn mafs
  "
  - `:width`
  - `:height`
  - `:pan`
  - `:viewbox`
  - `:preserve-aspect-ratio`
  - `:ssr`
  "
  [& children]
  (let [[opts children] (ev/split-opts children)]
    (tagged
     (into ['mafs.core/Mafs opts] children)
     ev/render)))

(defn point
  "
  - `:x`
  - `:y`
  - `:color`
  - `:opacity`
  - `:svg-circle-opts`"
  [opts]
  (tagged ['mafs.core/Point opts]))

(defn polygon
  "
  - `:points`
  - `:svg-polygon-opts`
  - `:color`
  - `:weight`
  - `:fill-opacity`
  - `:stroke-opacity`
  - `:stroke-style`
  "
  [opts]
  (tagged ['mafs.core/Polygon opts]))

(defn ellipse
  "
  - `:center`
  - `:radius`
  - `:svg-ellipse-opts`
  - `:color`
  - `:weight`
  - `:fill-opacity`
  - `:stroke-opacity`
  - `:stroke-style`
  "
  [opts]
  (tagged ['mafs.core/Ellipse opts]))

(defn circle
  "
  - `:center`
  - `:radius`
  - `:svg-ellipse-opts`
  - `:color`
  - `:weight`
  - `:fill-opacity`
  - `:stroke-opacity`
  - `:stroke-style`
  "
  [opts]
  (tagged ['mafs.core/Circle opts]))

(defn text
  "
  - `:x`
  - `:y`
  - `:attach`
  - `:attach-distance`
  - `:size`
  - `:color`
  - `:svg-text-opts`
  "
  [opts]
  (tagged ['mafs.core/Text opts]))

(defn vector
  "
  - `:tail`
  - `:tip`
  - `:svg-line-opts`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  [opts]
  (tagged ['mafs.core/Vector opts]))

(defn transform
  "
  - `:matrix`
  - `:translate`
  - `:scale`
  - `:rotate`
  - `:shear`
  "
  [& children]
  (let [[opts children] (ev/split-opts children)]
    (tagged
     (into ['mafs.core/Transform opts] children))))

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
  (tagged ['mafs.core/MovablePoint opts]))
