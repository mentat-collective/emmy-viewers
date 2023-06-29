(ns emmy-viewers.sci-extensions
  "SCI environment extensions, meant to apply to the Emmy-Viewers Clerk
  documentation build."
  (:require [emmy.viewer.sci]
            [examples.simulation.cylinder-flow]
            [examples.simulation.lorenz]
            [examples.simulation.phase-portrait]
            [examples.simulation.quartic-well]
            [examples.simulation.utils]
            [nextjournal.clerk.sci-env]

            [sci.core :as sci]
            [sci.ctx-store]))

(emmy.viewer.sci/install!)

(sci.ctx-store/swap-ctx!
 sci/merge-opts
 {:namespaces
  {'examples.simulation.utils
   (sci/copy-ns examples.simulation.utils
                (sci/create-ns 'examples.simulation.utils))}})
