(ns emmy.viewer.sci
  (:require [emmy.mathbox.physics]
            [emmy.mathbox.plot]
            [emmy.viewer.clock]
            [emmy.viewer.physics]
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
    {'emmy.mathbox.physics (sci/copy-ns emmy.mathbox.physics (sci/create-ns 'emmy.mathbox.physics))
     'emmy.mathbox.plot (sci/copy-ns emmy.mathbox.plot (sci/create-ns 'emmy.mathbox.plot))
     'emmy.viewer.clock (sci/copy-ns emmy.viewer.clock (sci/create-ns 'emmy.viewer.clock))
     'emmy.viewer.physics (sci/copy-ns emmy.viewer.physics (sci/create-ns 'emmy.viewer.physics))}}))
