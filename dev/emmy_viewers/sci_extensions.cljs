(ns emmy-viewers.sci-extensions
  "SCI environment extensions, meant to apply to the Emmy-Viewers Clerk
  documentation build."
  (:require [emmy.viewer.sci]
            [examples.simulation.cylinder-flow]
            [examples.simulation.lorenz]
            [examples.simulation.phase-portrait]
            [examples.simulation.quartic-well]))

(emmy.viewer.sci/install!)
