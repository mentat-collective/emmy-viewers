(ns emmy.mafs.debug
  "Server-side rendering functions for the components declared in the
  [`mafs.debug`](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/api/mafs.debug)
  namespace of the [`Mafs.cljs` project](https://mafs.mentat.org)."
  (:require [emmy.mafs.core :as mafs]))

(defn transform-widget
  "Returns a Reagent fragment that wraps any supplied children in an interactive
  transformation widget that lets you rotate, scale and translate all children."
  [& children]
  (mafs/fragment
   (into ['mafs.debug/TransformWidget] children)))

(defn viewport-info
  "Returns a Reagent fragment that mounts a `ViewportInfo` component into the Mafs
  scene.

  This component displays Mafs' understanding of the world space that's in view,
  showing both the minimum and maximum x and y values, as well as what panes are
  visible according to the pane context.

  Supported options:

  - `:precision`: The number of decimal places to which to round the displayed
    values. Defaults to 3."
  ([] (viewport-info {}))
  ([opts]
   (mafs/fragment
    ['mafs.debug/ViewportInfo opts])))
