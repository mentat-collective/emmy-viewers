(ns emmy.mathbox.physics
  (:require [emmy.viewer.physics :as ph]
            [goog.events]
            [leva.core]
            [mathbox.core]
            [mathbox.primitives :as mb]
            [nextjournal.clerk.render]
            [reagent.core :as r]))

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

(defn Curve
  "Component that takes a simulator and builds an array of points connected
   into a curve."
  [{:keys [state-derivative initial-state-fn params state->xyz steps dt]
    :or {steps 1000 dt 3e-2}}]
  [:<>
   [mb/Array
    {:channels 3
     :id "sampler"
     :data (let [y0  (initial-state-fn)
                 s   (ph/make-solver state-derivative y0 params 1e-5)
                 ps  (.-state params)
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
             @pts)}]
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
   [Tail (dissoc opts :dimensions :path :items)]])

(defn Mass
  "Mass using Colin's new code."
  [{state :initial-state
    state->xyz :state->xyz
    L :L
    params :params}]
  (let [render-fn   (apply js/Function state->xyz)
        state-deriv (apply js/Function L)
        my-updater  (ph/Lagrangian-updater state-deriv state {:parameters params})]
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

(defn Torus [render-fn !params]
  [:<>
   [mb/Area
    {:width 64
     :height 64
     :rangeX [0 two-pi]
     :rangeY [0 two-pi]
     :axes [1 3]
     :live false
     :expr (let [in  #js [0 0 0 0 0]
                 out #js [0 0 0]
                 p   @!params]
             (fn [emit theta phi _i _j _time]
               (aset in 1 theta)
               (aset in 2 phi)
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

;; ## Toroid Viewer

(defn ToroidViewer
  [{params     :params
    keys       :keys
    schema     :schema
    state->xyz :state->xyz
    :as opts}]
  (reagent.core/with-let
    [render-fn (apply js/Function state->xyz)
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
     [mathbox.core/MathBox
      {:container  {:style {:height "400px" :width "100%"}}
       :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
       :renderer   {:background-color 0xffffff}}
      [mb/Cartesian (:cartesian opts)
       [mb/Axis {:axis 1 :width 3}]
       [mb/Axis {:axis 2 :width 3}]
       [mb/Axis {:axis 3 :width 3}]
       [Curve
        {:state-derivative (apply js/Function (:L opts))
         :state->xyz render-fn
         :initial-state-fn
         (fn []
           (let [st      (.-state !params)
                 alpha_0 (:alpha_0 st)]
             ;; alpha_0 is the direction of the initial velocity
             ;; in (theta, phi)-space. Since we're not doing dynamics,
             ;; the speed doesn't matter, just the direction, so we do
             ;; it as a unit vector.
             [0
              (:theta_0 st)
              0
              (Math/cos alpha_0) (Math/sin alpha_0)]))
         :steps 1500
         :params !arr}]
       [Torus render-fn !arr]]]]))

(defn ToroidPoint
  [{state      :initial-state
    params     :params
    keys       :keys
    schema     :schema
    state->xyz :state->xyz
    :as opts}]
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
     [nextjournal.clerk.render/inspect @!state]
     [leva.core/Controls
      {:atom !params
       :schema schema}]
     [ph/Evolve
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
       [Curve
        {:state-derivative (apply js/Function (:L opts))
         :state->xyz render-fn
         :initial-state-fn
         (fn []
           (let [s (:state (.-state !state))]
             (if (array? s)
               s
               (clj->js (flatten s)))))
         :steps 200
         :params !arr}]
       [Comet
        {:dimensions 3
         :length 20
         :color 0xa0d0ff
         :size 10
         :opacity 0.99
         :path
         (let [out #js [0 0 0]]
           (fn [emit _ _]
             (render-fn (:state (.-state !state))
                        out
                        (.-state !arr))
             (emit (aget out 0)
                   (aget out 2)
                   (aget out 1))))}]
       [Torus render-fn !arr]]]]))
