(ns user
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial])
  (:require [nextjournal.clerk.config :as clerk-config]
            [nextjournal.clerk :as clerk]
            [sicmutils.env :refer :all]
            [sicmutils.expression.render :as xr]))

;; Better rendering for slides.
(alter-var-root
 #'xr/*TeX-vertical-down-tuples*
 (constantly true))

(comment
  (swap! clerk-config/!resource->url
         assoc
         "/js/viewer.js"
         "http://localhost:9000/out/main.js")

  ;; Activate this line to start the clerk server.
  (clerk/serve!
   {:browse? true :port 7777})

  ;; build the static app:
  (clerk/build-static-app!
   {:bundle? false
    :paths ["index.md"
            "src/demo.clj"
            "src/functions.clj"]}))

(comment
  ;; call clerk/show on files to be rendered:

  ;; intro:
  (clerk/show! "src/demo.clj")

  ;; Mathbox basics:
  (clerk/show! "src/cube_controls.clj")

  ;; functions:
  (clerk/show! "src/functions.clj")

  ;; symbolic physics:
  (clerk/show! "src/einstein.clj")

  ;; vega, symbolic, double-pendulum
  (clerk/show! "src/pendulum.clj")

  ;; mathbox physics:
  (clerk/show! "src/oscillator.clj")
  (clerk/show! "src/ellipsoid.clj")
  (clerk/show! "src/double_ellipsoid.clj")

  ;; browser/client comms:
  (clerk/show! "src/live_oscillator.clj"))
