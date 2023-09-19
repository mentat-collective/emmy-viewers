(ns emmy-viewers.sci-extensions
  "SCI environment extensions, meant to apply to the Emmy-Viewers Clerk
  documentation build."
  (:require [emmy.viewer.sci]
            [examples.simulation.cylinder-flow]
            [examples.simulation.lorenz]
            [nextjournal.clerk.sci-env]))

(emmy.viewer.sci/install!)
