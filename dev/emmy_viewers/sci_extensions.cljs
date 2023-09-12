(ns emmy-viewers.sci-extensions
  "SCI environment extensions, meant to apply to the Emmy-Viewers Clerk
  documentation build."
  (:require [emmy.viewer.sci]
            [examples.simulation.cylinder-flow]
            [examples.simulation.lorenz]
            [examples.simulation.quartic-well]
            [nextjournal.clerk.sci-env]))

(emmy.viewer.sci/install!)
