(ns emmy.mafs
  "Convenience namespace that unites functions from all of the `mafs`
  sub-namespaces in the library."
  (:refer-clojure :exclude [vector])
  (:require [emmy.util.def :refer [import-vars]]
            [emmy.mafs.coordinates]
            [emmy.mafs.core]
            [emmy.mafs.debug]
            [emmy.mafs.line]
            [emmy.mafs.plot]))

(import-vars
 [emmy.mafs.coordinates cartesian polar]

 [emmy.mafs.core
  Theme mafs point polygon ellipse circle
  text vector transform movable-point]

 [emmy.mafs.debug
  transform-widget viewport-info]

 [emmy.mafs.line
  segment through-points point-slope point-angle]

 [emmy.mafs.plot
  of-x of-y parametric vector-field])
