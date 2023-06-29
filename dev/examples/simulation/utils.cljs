(ns examples.simulation.utils
  (:require [emmy.expression.compile :as xc]
            [emmy.numerical.ode :as ode]
            [emmy.viewer.components.stopwatch :as sw]
            [mathbox.primitives :as mb]
            [reagent.core :as r]))

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
      [sw/Stopwatch
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
   [mb/Transpose {:order "zxy"}]
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

;; TODO make this generic?
(defn Ellipse [{:keys [a b c]}]
  [:<>
   [mb/Area
    {:width 64
     :height 64
     :rangeX [0 (* 2 Math/PI)]
     :rangeY [0 (* 2 Math/PI)]
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
