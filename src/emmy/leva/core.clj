(ns emmy.leva.core
  "TODO this should probably live in `emmy.leva`, no core needed."
  (:require [emmy.viewer :as ev]
            [nextjournal.clerk :as clerk]))

;; TODO get the various special input components defined.
;;
;; TODO auto-renders via metadata

(defn config [opts & children]
  (with-meta
    (into ['leva.core/Config opts] children)
    {::clerk/viewer ev/render}))

(defn subpanel [opts & children]
  (with-meta
    (into [:f> 'leva.core/Subpanel* opts] children)
    {::clerk/viewer ev/render}))

(defn controls [opts]
  (with-meta
    ['leva.core/Controls opts]
    {::clerk/viewer ev/render}))
