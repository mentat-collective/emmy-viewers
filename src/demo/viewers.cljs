(ns demo.viewers
  (:require [demo.jsxgraph]
            [demo.mathbox]
            [demo.mathlive]
            [mathbox]
            [mathbox.primitives]
            [jsxgraph.core]
            [mathlive.core]
            [nextjournal.clerk.sci-viewer :as sv]
            [sci.core :as sci]
            [sicmutils.env.sci :as sicm.sci]))

;; Here is the existing context:
;; https://github.com/nextjournal/clerk/blob/d08c26043efe19a92fe33dd9eb4499e304e4cff7/src/nextjournal/clerk/sci_viewer.cljs#L1013-L1023

(swap! sv/!sci-ctx
       sci/merge-opts
       {:classes {'Math js/Math}
        :namespaces
        (assoc
         (:namespaces sicm.sci/context-opts)
         ;; These are the three provided by this library.
         'demo.mathbox  (sci/copy-ns demo.mathbox (sci/create-ns 'demo.mathbox))
         'demo.jsxgraph (sci/copy-ns demo.jsxgraph (sci/create-ns 'demo.jsxgraph))
         'demo.mathlive (sci/copy-ns demo.mathlive (sci/create-ns 'demo.mathlive))

         ;; These come from external deps, now.
         'mathbox (sci/copy-ns mathbox (sci/create-ns 'mathbox))
         'jsxgraph.core (sci/copy-ns jsxgraph.core (sci/create-ns 'jsxgraph.core))
         'mathlive.core (sci/copy-ns mathlive.core (sci/create-ns 'mathlive.core))
         'mathbox.primitives
         (sci/copy-ns mathbox.primitives (sci/create-ns 'mathbox.primitives)))
        :aliases {'e 'sicmutils.env
                  'mb 'demo.mathbox
                  'box 'mathbox.primitives
                  'jsx 'jsxgraph.core
                  'ml  'mathlive.core}})
