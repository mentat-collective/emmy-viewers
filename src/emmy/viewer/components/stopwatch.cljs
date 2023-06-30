(ns emmy.viewer.components.stopwatch
  "Stopwatch component, useful for various animations.

  NOTE that this is currently implemented with `goog.Timer`. For Portal
  compatibility, I'll back this out soon and rewrite the component using request
  AnimationFrame."
  (:require [goog.events]
            [goog.Timer :as timer]
            ["react" :as react])
  (:import [goog Timer]))

;; TODO rewrite as useStopwatch for compatibility with Portal and friends:
;; https://github.com/stevenpetryk/mafs/blob/main/src/animation/useStopwatch.ts

(defn Stopwatch*
  "Function component for a relative clock. `onTick` is called with a single arg
  for seconds."
  [_]
  (let [t   (Timer.)]
    (fn [{:keys [interval running? onTick]
         :or   {running? true
                interval 1}}]
      (let [now (goog/now)]
        (react/useEffect
         (fn mount []
           (fn unmount []
             (.dispose t)))
         #js [])

        (react/useEffect
         (fn mount []
           (if (.-enabled t)
             (when-not running? (.stop t))
             (when running? (.start t)))
           js/undefined)
         #js [running?])

        (react/useEffect
         (fn mount []
           (when interval
             (.setInterval t interval))
           js/undefined)
         #js [interval])

        (react/useEffect
         (fn mount []
           (if onTick
             ;; If I want to get fancy, this is everything that we should support
             ;; https://github.com/unconed/mathbox/blob/master/src/primitives/types/time/clock.js

             ;; TODO check if this is current for GCL?
             (let [k (goog.events/listen
                      t
                      timer/TICK
                      (fn []
                        (onTick
                         (/ (- (goog/now) now)
                            1000))))]
               (fn []
                 (goog.events/unlistenByKey k)))
             js/undefined))
         #js [onTick])))))

(defn Stopwatch
  "Wrapper around the function component [[Stopwatch*]]."
  [opts]
  [:f> Stopwatch* opts])
