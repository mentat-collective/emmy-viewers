(ns emmy.leva
  "TODO this should probably live in `emmy.leva`, no core needed."
  (:require [emmy.viewer :as ev]))

;; TODO get the various special input components defined.

(defn config [opts & children]
  (ev/fragment
   (into ['leva.core/Config opts] children)))

(defn subpanel [opts & children]
  (ev/fragment
   (into ['leva.core/Subpanel opts] children)))

(defn controls [opts]
  (ev/fragment
   ['leva.core/Controls opts]))
