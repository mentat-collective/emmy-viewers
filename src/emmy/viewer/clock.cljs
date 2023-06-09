(ns emmy.viewer.clock
  (:require [goog.events]
            [goog.Timer :as timer]
            ["react" :as react])
  (:import [goog Timer]))

(defn Clock*
  "Function component for a relative clock. onTick is called with a single arg for
  seconds."
  [{:keys [interval running? onTick]
    :or   {running? true
           interval 1}}]
  ;; TODO move to outer??
  (let [t   (Timer.)
        now (goog/now)]
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
         (let [key (.-key
                    (goog.events/listen
                     t
                     timer/TICK
                     (fn []
                       (onTick
                        (/ (- (goog/now) now)
                           1000)))))]
           (fn []
             (goog.events/unlistenByKey key)))
         js/undefined))
     #js [onTick])))

(defn ^:export Clock [opts]
  [:f> Clock* opts])
