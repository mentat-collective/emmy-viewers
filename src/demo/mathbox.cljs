(ns demo.mathbox
  (:require [goog.events]
            [goog.Timer :as timer]
            ["odex" :as o]
            [mathbox.primitives :as mb]
            ["react" :as react]
            [reagent.core :as r]
            [emmy.env :as e]
            [emmy.expression.compile :as xc][emmy.mechanics.rotation :as rot]
            [emmy.structure :as s]
            [emmy.numerical.ode :as ode]
            [emmy.structure :as struct]
            [emmy.numerical.ode :as ode])
  (:import [goog Timer]))

(defn format-number [x]
  (-> (.toFixed x 2)
      (.replace #"\.0+$" "")))

;; ## Components

(defn Function1 [{:keys [samples f] :or {samples 256}}]
  (let [f' (xc/sci-eval f)]
    [:<>
     [mb/Interval
      {:width samples
       :channels 2
       :expr (fn [emit x _ time]
               (emit x (f' x time)))}]
     [mb/Line {:color 0x3090ff :width 4}]
     [mb/Point {:color 0x3090ff :size 8}]]))

;; ## Simulation

(defn Lagrangian-updater
  "hardcoded at first for this use case."
  ([state-derivative initial-state]
   (Lagrangian-updater state-derivative initial-state {}))
  ([state-derivative initial-state {:keys [parameters]}]
   (let [flat-initial-state (flatten initial-state)
         ;; TODO get around the deref
         equations (if (implements? IAtom parameters)
                     (fn [_ ys yps]
                       (state-derivative
                        ys yps (.-state parameters)))
                     (fn [_ ys yps]
                       (state-derivative ys yps parameters)))]
     (ode/stream-integrator equations 0 flat-initial-state {:js? true}))))

(defn Lagrangian-collector
  "hardcoded at first for this use case."
  ([state-derivative initial-state]
   (Lagrangian-collector state-derivative initial-state {}))
  ([state-derivative initial-state {:keys [parameters epsilon]
                                    :or {epsilon 1e-6}}]
   (let [flat-initial-state (flatten initial-state)
         ;; TODO get around the deref
         f' (if (implements? IAtom parameters)
              (let [p @parameters]
                (fn [_ ys yps]
                  (state-derivative ys yps p)))
              (fn [_ ys yps]
                (state-derivative ys yps parameters)))
         dimension (count flat-initial-state)
         solver (o/Solver.
                 f'
                 dimension
                 #js {:absoluteTolerance epsilon
                      :relativeTolerance epsilon
                      :rawFunction true})]
     (set! (.-denseOutput solver) true)
     (fn [state n step-size emit]
       ;; TODO fix the case where we have issues at simSteps 5 on phase
       ;; portrait.
       (.solve solver 0 state (* n step-size)
               (.grid solver step-size
                      (fn [_ ys]
                        (emit (aget ys 1) (aget ys 2)))))))))

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

(defn Evolve
  "ODE State evolving component."
  [{L :L
    !state  :atom
    !params :params}]

  ;; TODO can I make an "animating" wrapper for mathbox, a similar
  ;; component version?
  ;;
  ;; TODO wire generic params into Lagrangian updater.
  ;;
  ;; TODO can I do `:params {:atom :keys}`?
  (let
      ;; TODO how can I wire in an array and have it not cause a re-render??
      [state-deriv (apply js/Function L)
       update      (Lagrangian-updater state-deriv
                                       (:state @!state)
                                       {:parameters !params})]
    (fn [_]
      [Clock
       {:onTick
        (fn [seconds]
          ;; TODO can we keep the output here mutable and provide an out to
          ;; update?
          (swap! !state assoc
                 :time  seconds
                 :state (update seconds)))}])))

;; ## Visual Things

(defn Tail [{:keys [length] :as opts}]
  [:<>
   [mb/Spread {:height [0 0 -0.02] :alignHeight -1}]
   ;; Ah, this is the color channel, and fades out the tail as you go.
   [mb/Array
    {:width length
     :channels 4
     :expr (fn [emit i]
             (emit 1 1 1 (- 1 (/ i 16))))}]
   [mb/Transpose {:order "yx"}]
   [mb/Point
    (-> (dissoc opts :length)
        (assoc :points "<<<"
               :colors "<"))]])

(defn Comet
  "Path is a function of i, t
  dimensions is how many you want to emit
  history is tail length,
  rest of options go to the final point

  Note that i think we have to emit with xzy?? weird..."
  [{:keys [dimensions path length items]
    :or {items 1}
    :as opts}]
  [:<>
   [mb/Array
    {:history length
     :items items
     :channels dimensions
     :expr path}]
   [Tail
    (dissoc opts :dimensions :path :items)]])

(defn Mass
  "Mass using Colin's new code."
  [{state :initial-state
    [a1 b1 c1 body1] :state->xyz
    [a2 b2 c2 body2] :L
    params :params}]
  (let [render-fn   (js/Function. a1 b1 c1 body1)
        state-deriv (js/Function. a2 b2 c2 body2)
        my-updater  (Lagrangian-updater state-deriv state {:parameters params})]
    ;; TODO return the inner component??
    (println "1>" a1 b1 c1 body1)
    (println "2>" a2 b2 c2 body2)
    [Comet
     {:dimensions 3
      :length 16
      :color 0x3090ff
      :size 10
      :opacity 0.99
      :path
      (let [out #js [0 0 0]]
        (fn [emit _ t]
          (-> (my-updater t)
              (render-fn out params))
          (emit (aget out 0)
                (aget out 2)
                (aget out 1))))}]))

(def ^:private two-pi (* 2 Math/PI))

;; TODO make this generic?
(defn Ellipse [{:keys [a b c]}]
  [:<>
   [mb/Area
    {:width 64
     :height 64
     :rangeX [0 two-pi]
     :rangeY [0 two-pi]
     :axes [1 3]
     :live false
     :expr (fn [emit theta phi _i _j _time]
             (let [sin-theta (Math/sin theta)
                   cos-theta (Math/cos theta)]
               ;; xzy
               (emit
                (* a sin-theta (Math/cos phi))
                (* c cos-theta)
                (* b sin-theta (Math/sin phi)))))
     :items 1
     :channels 3}]
   [mb/Surface
    {:shaded true
     :opacity 0.2
     :lineX true
     :lineY true
     :points "<"
     :color 0xffffff
     :width 1}]])

(defn Torus [{:keys [R r]}]
  [:<>
   [mb/Area
    {:width 64
     :height 64
     :rangeX [0 two-pi]
     :rangeY [0 two-pi]
     :axes [1 3]
     :live false
     :expr (fn [emit theta phi _i _j _time]
             (let [[x y z] (e/* (rot/rotate-z-matrix phi)
                                (s/up (e/+ R (e/* r (e/cos theta)))
                                      0
                                      (e/* r (e/sin theta))))]
               (emit x z y)))
     :items 1
     :channels 3}]
   [mb/Surface
    {:shaded true
     :opacity 0.5
     :lineX true
     :lineY true
     :points "<"
     :color 0xffffff
     :width 1}]])

;; TODO good ideas!
#_(defn Manifold [{[a1 b1 c1 body1] :point->xyz}]
    (let [render-fn (js/Function. a1 b1 c1 body1)]
      [:<>
       [mb/Area
        {:width 64
         :height 64
         :rangeX [0 two-pi]
         :rangeY [0 two-pi]
         :axes [1 3]
         :live false
         :expr
         (let [out #js [0 0 0]]
           (fn [emit theta phi _i _j _time]
             (render-fn theta phi out)
             (let [sin-theta (Math/sin theta)
                   cos-theta (Math/cos theta)]
               ;; xzy
               (emit
                (* a sin-theta (Math/cos phi))
                (* c cos-theta)
                (* b sin-theta (Math/sin phi))))))
         :items 1
         :channels 3}]
       [mb/Surface
        {:shaded true
         :opacity 0.2
         :lineX true
         :lineY true
         :points "<"
         :color 0xffffff
         :width 1}]]
      [Comet
       {:dimensions 3
        :length 16
        :color 0x3090ff
        :size 10
        :opacity 0.99
        :path
        (let [out #js [0 0 0]]
          (fn [emit _ t]
            (-> (my-updater t)
                (render-fn out params))
            (emit (aget out 0)
                  (aget out 2)
                  (aget out 1))))}])
    )

(defn DoubleMass
  "Obviously these should be merged!"
  [{:keys [state->xyz L initial-state]}]
  (let [render-fn   (xc/sci-eval state->xyz)
        state-deriv (xc/sci-eval L)
        my-updater  (Lagrangian-updater state-deriv initial-state)]
    (r/with-let [!state (r/atom initial-state)]
      [:<>
       [mb/Array
        {:items 1
         ;; because we have two items to emit.
         :width 2
         :channels 3
         :history 16
         :expr
         (fn [emit _ t]
           (reset! !state (my-updater t))
           (let [[x1 y1 z1 x2 y2 z2] (render-fn @!state)]
             (emit x1 z1 y1)
             (emit x2 z2 y2)))}]
       [Tail
        {:length 16
         :color 0x3090ff
         :size 10
         :zIndex 1}]])))
