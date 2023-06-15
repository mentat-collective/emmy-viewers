(ns emmy.viewer.sci
  (:require [demo.mathbox]
            [demo.mathlive]
            [emmy.mathbox.plot]
            [emmy.viewer.plot]
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
    {'demo.mathbox      (sci/copy-ns demo.mathbox (sci/create-ns 'demo.mathbox))
     'demo.mathlive     (sci/copy-ns demo.mathlive (sci/create-ns 'demo.mathlive))
     'emmy.mathbox.plot (sci/copy-ns emmy.mathbox.plot (sci/create-ns 'emmy.mathbox.plot))
     'emmy.viewer.plot  (sci/copy-ns emmy.viewer.plot (sci/create-ns 'emmy.viewer.plot))}}))
