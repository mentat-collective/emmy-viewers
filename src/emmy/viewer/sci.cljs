(ns emmy.viewer.sci
  (:require [demo.mathbox]
            [demo.mathlive]
            [emmy.clerk]
            [emmy.jsxgraph]
            [emmy.leva]
            [emmy.mafs]
            [emmy.mathbox]
            [emmy.mathbox.components.physics]
            [emmy.mathbox.components.plot]
            [emmy.mathbox.physics]
            [emmy.mathbox.plot]
            [emmy.mathlive]
            [emmy.viewer]
            [emmy.viewer.components.stopwatch]
            [emmy.viewer.physics]
            [emmy.viewer.plot]
            [emmy.viewer.stopwatch]
            [leva.sci]
            [emmy.sci]
            [mafs.sci]
            [jsxgraph.sci]
            [mathbox.sci]
            [mathlive.sci]
            [sci.core :as sci]
            [sci.ctx-store]))

(def with-let ^:sci/macro
  (fn [_&form _&env [sym init] & body]
    `(emmy.viewer/with-state ~init
       (fn [~sym] ~@body))))

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
    {'demo.mathbox                     (sci/copy-ns demo.mathbox (sci/create-ns 'demo.mathbox))
     'demo.mathlive                    (sci/copy-ns demo.mathlive (sci/create-ns 'demo.mathlive))
     'emmy.clerk                       (sci/copy-ns emmy.clerk (sci/create-ns 'emmy.clerk))
     'emmy.leva                        (sci/copy-ns emmy.leva (sci/create-ns 'emmy.leva))
     'emmy.jsxgraph                    (sci/copy-ns emmy.jsxgraph (sci/create-ns 'emmy.jsxgraph))
     'emmy.mafs                        (sci/copy-ns emmy.mafs (sci/create-ns 'emmy.mafs))
     'emmy.mathbox                     (sci/copy-ns emmy.mathbox (sci/create-ns 'emmy.mathbox))
     'emmy.mathbox.components.plot     (sci/copy-ns emmy.mathbox.components.plot
                                                    (sci/create-ns 'emmy.mathbox.components.plot))
     'emmy.mathbox.components.physics  (sci/copy-ns emmy.mathbox.components.physics
                                                    (sci/create-ns 'emmy.mathbox.components.physics))
     'emmy.mathbox.physics             (sci/copy-ns emmy.mathbox.physics (sci/create-ns 'emmy.mathbox.physics))
     'emmy.mathbox.plot                (sci/copy-ns emmy.mathbox.plot (sci/create-ns 'emmy.mathbox.plot))
     'emmy.mathlive                    (sci/copy-ns emmy.mathlive (sci/create-ns 'emmy.mathlive))
     'emmy.viewer                      (-> (sci/copy-ns emmy.viewer (sci/create-ns 'emmy.viewer))
                                           (assoc 'with-let with-let))
     'emmy.viewer.physics              (sci/copy-ns emmy.viewer.physics (sci/create-ns 'emmy.viewer.physics))
     'emmy.viewer.plot                 (sci/copy-ns emmy.viewer.plot (sci/create-ns 'emmy.viewer.plot))
     'emmy.viewer.components.stopwatch (sci/copy-ns emmy.viewer.components.stopwatch
                                                    (sci/create-ns 'emmy.viewer.components.stopwatch))
     'emmy.viewer.stopwatch            (sci/copy-ns emmy.viewer.stopwatch (sci/create-ns 'emmy.viewer.stopwatch))}}))
