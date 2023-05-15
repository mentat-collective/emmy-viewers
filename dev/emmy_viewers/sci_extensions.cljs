(ns emmy-viewers.sci-extensions
  "SCI environment extensions, meant to apply to the Emmy-Viewers Clerk
  documentation build."
  (:require [emmy-viewers.sci]
            [examples.manifold.pq-knot]
            [examples.simulation.cylinder-flow]
            [examples.simulation.lorenz]
            [examples.simulation.phase-portrait]
            [examples.simulation.quartic-well]))

(emmy-viewers.sci/install!)
