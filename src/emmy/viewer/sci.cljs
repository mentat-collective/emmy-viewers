(ns emmy.viewer.sci
  (:require [demo.mathbox]
            [demo.mathlive]
            [emmy.clerk]
            [emmy.mafs]
            [emmy.mafs.coordinates]
            [emmy.mafs.core]
            [emmy.mafs.debug]
            [emmy.mafs.line]
            [emmy.mafs.plot]
            [emmy.mathbox.physics]
            [emmy.mathbox.plot]
            [emmy.viewer]
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
    {'demo.mathbox          (sci/copy-ns demo.mathbox (sci/create-ns 'demo.mathbox))
     'demo.mathlive         (sci/copy-ns demo.mathlive (sci/create-ns 'demo.mathlive))
     'emmy.clerk            (sci/copy-ns emmy.clerk (sci/create-ns 'emmy.clerk))
     'emmy.mafs             (sci/copy-ns emmy.mafs (sci/create-ns 'emmy.mafs))
     'emmy.mafs.coordinates (sci/copy-ns emmy.mafs.coordinates (sci/create-ns 'emmy.mafs.coordinates))
     'emmy.mafs.core        (sci/copy-ns emmy.mafs.core (sci/create-ns 'emmy.mafs.core))
     'emmy.mafs.debug       (sci/copy-ns emmy.mafs.debug (sci/create-ns 'emmy.mafs.debug))
     'emmy.mafs.line        (sci/copy-ns emmy.mafs.line (sci/create-ns 'emmy.mafs.line))
     'emmy.mafs.plot        (sci/copy-ns emmy.mafs.plot (sci/create-ns 'emmy.mafs.plot))
     'emmy.mathbox.physics  (sci/copy-ns emmy.mathbox.physics (sci/create-ns 'emmy.mathbox.physics))
     'emmy.mathbox.plot     (sci/copy-ns emmy.mathbox.plot (sci/create-ns 'emmy.mathbox.plot))
     'emmy.viewer           (assoc (sci/copy-ns emmy.viewer (sci/create-ns 'emmy.viewer))
                                   'with-let with-let)
     'emmy.viewer.physics   (sci/copy-ns emmy.viewer.physics (sci/create-ns 'emmy.viewer.physics))
     'emmy.viewer.plot      (sci/copy-ns emmy.viewer.plot (sci/create-ns 'emmy.viewer.plot))
     'emmy.viewer.stopwatch (sci/copy-ns emmy.viewer.stopwatch (sci/create-ns 'emmy.viewer.stopwatch))}}))
