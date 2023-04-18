(ns demo.mathbox
  (:require [emmy.expression.compile :as xc]
            [emmy.numerical.ode :as ode]
            [goog.events]
            [goog.Timer :as timer]
            [leva.core]
            [mathbox.core]
            [mathbox.primitives :as mb]
            [nextjournal.clerk.render]
            ["odex" :as o]
            ["react" :as react]
            [reagent.core :as r])
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

(defn make-solver
  [derivative initial-state parameters epsilon]
  (let [flat-initial-state (flatten initial-state)
         ;; TODO get around the deref
        f' (if (implements? IAtom parameters)
             (let [p @parameters]
               (fn [_ ys yps]
                 (derivative ys yps p)))
             (fn [_ ys yps]
               (derivative ys yps parameters)))
        dimension (count flat-initial-state)]
    (o/Solver.
     f'
     dimension
     #js {:absoluteTolerance epsilon
          :relativeTolerance epsilon
          :rawFunction true
          :maxSteps 10000})
    )
  )

(defn Lagrangian-collector
  "hardcoded at first for this use case."
  ([state-derivative initial-state]
   (Lagrangian-collector state-derivative initial-state {}))
  ([state-derivative initial-state {:keys [parameters epsilon]
                                    :or {epsilon 1e-6}}]
   (let [solver (make-solver state-derivative initial-state parameters epsilon)]
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

(defn Curve
  "Component that takes a simulator and builds an array of points connected
   into a curve."
  [{:keys [state-derivative initial-state-fn params state->xyz steps dt]
    :or {steps 1000 dt 3e-2}}]
  [:<>
   [mb/Array
    {:channels 3
     :id "sampler"
     :data (let [y0 (initial-state-fn)
                 s (make-solver state-derivative y0 params 1e-5)
                 ps (.-state params)
                 xyz (double-array 3)
                 pts (atom [])]
             (.solve s 0 (clj->js y0)
                     (* steps dt)
                     (.grid s dt
                            (fn [_ ys]
                              (state->xyz ys xyz ps)
                              (swap! pts conj (js/Array. (aget xyz 0)
                                                         (aget xyz 2)
                                                         (aget xyz 1))))))
             @pts)
     }]
   [mb/Line
    {:color 0xff3090
     :size 8
     :points "<"
     :end true}]])

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

(defn ParametricSurface
  "Generate a 3d parametric surface in three dimensions by passing a
   sheet of 2d coordinates into render-fn, $(u,v)\\mapsto(x,y,z)$."
  [render-fn !params {:keys [rangeU rangeV]
                      :or {rangeU [0 two-pi]
                           rangeV [0 two-pi]}}]
  [:<>
   [mb/Area
    {:width 64
     :height 64
     :rangeX rangeU
     :rangeY rangeV
     :axes [1 3]
     :live false
     :expr (let [in  #js [0 0 0 0 0]
                 out #js [0 0 0]
                 p   @!params]
             (fn [emit u v _i _j _time]
               (aset in 1 u)
               (aset in 2 v)
               (render-fn in out p)
               (emit (aget out 0)
                     (aget out 2)
                     (aget out 1))))
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


;; ## Manifold Viewer
;;
;; parameterized on the underlying manifold
;;

(defn ManifoldViewer
  [manifold]
  (fn [{state            :initial-state
        initial-state-fn :initial-state-fn
        params           :params
        keys             :keys
        schema           :schema
        state->xyz       :state->xyz
        :as              opts}]
    (println "MF intial-state" state)
    (reagent.core/with-let
      [render-fn (apply js/Function state->xyz)
       !state    (reagent.core/atom {:time 0 :state state})
       !params   (reagent.core/atom params)

     ;; I had to move this here because reagent.core/reaction wasn't available
     ;; in the SCI environment you have when writing viewers...
       !arr      (reagent.core/reaction
                  (apply
                   array
                   (map @!params keys)))]
      [:<>
       [nextjournal.clerk.render/inspect @!arr]
       [leva.core/Controls
        {:atom !params
         :schema schema}]
       [Evolve
        {:L      (:L opts)
         :params !arr
         :atom   !state}]
       [mathbox.core/MathBox
        {:container  {:style {:height "400px" :width "100%"}}
         :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
         :renderer   {:background-color 0xffffff}}
        [mb/Cartesian (:cartesian opts)
         [mb/Axis {:axis 1 :width 3}]
         [mb/Axis {:axis 2 :width 3}]
         [mb/Axis {:axis 3 :width 3}]
         [demo.mathbox/Curve
          {:state-derivative (apply js/Function (:L opts))
           :state->xyz       render-fn
           :initial-state-fn #(initial-state-fn (.-state !params))
           :steps            1500
           :params           !arr}]
         [manifold render-fn !arr opts]]]])))
