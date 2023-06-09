(ns emmy.viewer.sci
  (:require [demo.mathbox]
            [demo.mathlive]
            [leva.sci]
            [emmy.sci]
            [mafs.sci]
            [jsxgraph.sci]
            [mathbox.sci]
            [mathlive.sci]
            [sci.core :as sci]
            [sci.ctx-store]))

(defn install! []
  (leva.sci/install!)
  (mafs.sci/install!)
  (jsxgraph.sci/install!)
  (mathbox.sci/install!)
  (mathlive.sci/install!)
  (emmy.sci/install!)
  (sci.ctx-store/swap-ctx!
   sci/merge-opts
   {:namespaces
    {'demo.mathbox  (sci/copy-ns demo.mathbox (sci/create-ns 'demo.mathbox))
     'demo.mathlive (sci/copy-ns demo.mathlive (sci/create-ns 'demo.mathlive))}}))
