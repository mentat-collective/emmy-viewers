;; # Rule 30 🕹
;; Let's explore cellular automata in a Clerk Notebook. We start by requiring the custom viewers.
(ns examples.rule-30
  (:require [nextjournal.clerk :as clerk]))

(clerk/with-viewer
  {:transform-fn clerk/mark-presented
   :render-fn
   '(fn []
      [mafs.core/Mafs {}
       [mafs.coordinates/Cartesian {}]
       (reagent.core/with-let
         [G__76009 (js/Function. "y0001" "  return Math.sin(y0001);")]
         [mafs.plot/OfX {:y G__76009, :color :blue}])])}
  nil)
