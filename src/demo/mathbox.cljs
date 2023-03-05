(ns demo.mathbox
  (:require
   [leva.core :as leva]
   ["odex" :as o]
   [mathbox.core :as mathbox]
   [mathbox.primitives :as mb]
   ;; [nextjournal.clerk.render :as cr]
   ;; [nextjournal.clerk.viewer :as sv]
   ["react" :as react]
   [reagent.core :as r]
   [emmy.env :as e]
   [emmy.expression.compile :as xc]
   [emmy.mechanics.lagrange :as l]
   [emmy.numerical.ode :as ode]
   [emmy.structure :as struct]
   ))

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

(defn Lagrangian-updater
  "hardcoded at first for this use case."
  ([state-derivative initial-state]
   (Lagrangian-updater state-derivative initial-state {}))
  ([state-derivative initial-state {:keys [compile? parameters]
                                    :or {compile? false}}]
   (let [{:keys [integrator]}
         (ode/integration-opts (if parameters
                                 state-derivative
                                 (fn [] state-derivative))
                               parameters
                               initial-state
                               {:epsilon 1e-6
                                :compile? compile?})]
     (fn [t]
       (-> (integrator t)
           (struct/unflatten initial-state))))))

(defn Lagrangian-collector
  "hardcoded at first for this use case."
  [deriv initial-state {:keys [parameters epsilon compile?]
                        :or {epsilon 1e-6
                             compile? false}}]
  (let [flat-initial-state (flatten initial-state)
        dimension          (count flat-initial-state)
        ;; TODO we have to get this working with an atom again.
        equations (if compile?
                    (let [f' (xc/compile-state-fn deriv parameters initial-state)]
                      (fn [_ y out]
                        (#'ode/flatten-into-primitive-array
                         out
                         (f' y (.-state parameters)))))
                    (let [d:dt (apply deriv (.-state parameters))]
                      (fn [_ y out]
                        (#'ode/flatten-into-primitive-array
                         out
                         (d:dt (struct/unflatten y initial-state))))))
        solver (o/Solver.
                equations
                dimension
                #js {:absoluteTolerance epsilon
                     :relativeTolerance epsilon
                     :rawFunction true})]
    (fn [state n step-size emit]
      (let [integrate (.integrate solver 0 state)]
        (doseq [t (take n (iterate #(+ % step-size) 0))]
          (let [y (integrate t)]
            (emit (aget y 1) (aget y 2))))))))

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
  [{:keys [dimensions path length] :as opts}]
  [:<>
   [mb/Array
    {:history length
     :channels dimensions
     :expr path}]
   [Tail
    (dissoc opts :dimensions :path)]])

;; NOTE: it comes across the wire ALREADY COMPILED and simplified down to
;; source.
(defn Mass [{:keys [state->xyz L initial-state]}]
  (let [render-fn   (xc/sci-eval state->xyz)
        state-deriv (xc/sci-eval L)
        my-updater  (Lagrangian-updater state-deriv initial-state)]
    (r/with-let [!state (r/atom initial-state)]
      [Comet
       {:dimensions 3
        :length 16
        :color 0x3090ff
        :size 10
        :opacity 0.99
        :path
        (fn [emit _ t]
          (reset! !state (my-updater t))
          (let [[x y z] (render-fn @!state)]
            (emit x z y)))}])))

(def ^:private two-pi (* 2 Math/PI))

(defn Ellipse [{:keys [a b c]}]
  [:<>
   [mb/Area
    {:width 64
     :height 64
     :rangeX [0 two-pi]
     :rangeY [0 two-pi]
     :axes [1 3]
     :expr (fn [emit theta phi _i _j _time]
             (let [sin-theta (Math/sin theta)
                   cos-theta (Math/cos theta)]
               ;; xzy
               (emit (* a sin-theta (Math/cos phi))
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
