(ns emmy.mafs.debug
  "Server-side rendering functions for the components declared in the
  [`mafs.debug`](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/api/mafs.debug)
  namespace of the [`Mafs.cljs` project](https://mafs.mentat.org)."
  (:require [emmy.mafs.core :as mafs]))

(defn transform-widget [& children]
  (mafs/fragment
   (into ['mafs.debug/TransformWidget] children)))

(defn viewport-info
  "
  - `:precision`"
  ([] (viewport-info {}))
  ([opts]
   (mafs/fragment
    ['mafs.debug/ViewportInfo opts])))
