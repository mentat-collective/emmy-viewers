(ns emmy.leva
  "TODO this should probably live in `emmy.leva`, no core needed."
  (:require [emmy.viewer :as ev]))

;; TODO get the various special input components defined.
;;
;; TODO auto-renders via metadata

(defn config [opts & children]
  (ev/tagged
   (into ['leva.core/Config opts] children)))

(defn subpanel [opts & children]
  (ev/tagged
   (into ['leva.core/Subpanel opts] children)))

(defn controls [opts]
  (ev/tagged
   ['leva.core/Controls opts]))
