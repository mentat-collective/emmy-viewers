(ns emmy.viewer.stopwatch
  "Alpha component for running a stopwatch inside Reagent.")

(defn stopwatch
  "Returns a reagent fragment that renders a Clock component into the scene."
  [opts]
  ['emmy.viewer.stopwatch/Stopwatch opts])
