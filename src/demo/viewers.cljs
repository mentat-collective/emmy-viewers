(ns demo.viewers
  (:require ["dat.gui" :as dg]
            [demo.mathbox]
            [demo.mathbox-react]
            [nextjournal.clerk.sci-viewer :as sv]
            ["mathbox-react" :as MB]
            [reagent.core :as r]
            [sci.core :as sci]
            ["three/examples/jsm/controls/OrbitControls.js" :as OC]))

;; Here is the existing context:
;; https://github.com/nextjournal/clerk/blob/d08c26043efe19a92fe33dd9eb4499e304e4cff7/src/nextjournal/clerk/sci_viewer.cljs#L1013-L1023

(sci/require-cljs-analyzer-api)

(def mbr-ns
  (-> (into {} (map (fn [[k v]]
                      [(symbol k) (r/adapt-react-class v)]))
            (.entries js/Object MB))

      ;; so now we can use this all as box/blah, including these two unrelated
      ;; entries.
      (assoc 'OrbitControls OC/OrbitControls)
      (assoc 'GUI (fn [options] (dg/GUI. (clj->js options))))))



(swap! sv/!sci-ctx
       sci/merge-opts
       {:namespaces
        {"mathbox-react" mbr-ns

         'demo.jsxgraph
         (sci/copy-ns demo.jsxgraph (sci/create-ns 'demo.jsxgraph))

         'demo.mathbox
         (sci/copy-ns demo.mathbox (sci/create-ns 'demo.mathbox))

         'demo.mathbox-react
         (sci/copy-ns demo.mathbox-react (sci/create-ns 'demo.mathbox-react))}
        :classes {'Math js/Math}
        :aliases {'mb 'demo.mathbox
                  'mathbox-react "mathbox-react"
                  'box "mathbox-react"
                  'jsx 'demo.jsxgraph
                  'mbr 'demo.mathbox-react}})
