(ns emmy.mafs
  "Convenience namespace that unites functions from all of the `mafs`
  sub-namespaces in the library."
  (:refer-clojure :exclude [vector])
  (:require #_[emmy.util.def :refer [import-vars]]
            [emmy.mafs.coordinates]
            [emmy.mafs.core]
            [emmy.mafs.debug]
            [emmy.mafs.line]
            [emmy.mafs.plot]))

(def cartesian emmy.mafs.coordinates/cartesian)
(def polar emmy.mafs.coordinates/polar)

(def mafs emmy.mafs.core/mafs)
(def point emmy.mafs.core/point)
(def polygon emmy.mafs.core/polygon)
(def polyline emmy.mafs.core/polyline)
(def ellipse emmy.mafs.core/ellipse)
(def circle emmy.mafs.core/circle)
(def text emmy.mafs.core/text)
(def vector emmy.mafs.core/vector)
(def transform emmy.mafs.core/transform)
(def movable-point emmy.mafs.core/movable-point)
(def colors emmy.mafs.core/colors)

(def transform-widget emmy.mafs.debug/transform-widget)
(def viewport-info emmy.mafs.debug/viewport-info)

(def segment emmy.mafs.line/segment)
(def through-points emmy.mafs.line/through-points)
(def point-slope emmy.mafs.line/point-slope)
(def point-angle emmy.mafs.line/point-angle)

(def of-x emmy.mafs.plot/of-x)
(def of-y emmy.mafs.plot/of-y)
(def inequality emmy.mafs.plot/inequality)
(def parametric emmy.mafs.plot/parametric)
(def vector-field emmy.mafs.plot/vector-field)

#_(import-vars
   [emmy.mafs.coordinates cartesian polar]

   [emmy.mafs.core
    mafs point polygon polyline ellipse circle
    text vector transform movable-point colors]

   [emmy.mafs.debug
    transform-widget viewport-info]

   [emmy.mafs.line
    segment through-points point-slope point-angle]

   [emmy.mafs.plot
    of-x of-y inequality parametric vector-field])
