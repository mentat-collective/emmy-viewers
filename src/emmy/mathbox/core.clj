(ns emmy.mathbox.core
  (:require [emmy.viewer :as ev]))

(defn rawbox [opts & children]
  (ev/tagged
   (into ['mathbox.core/Rawbox opts] children)))

(defn mathbox [opts & children]
  (ev/tagged
   (into ['mathbox.core/MathBox opts] children)))
