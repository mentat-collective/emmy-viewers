(ns demo.mathbox
  (:require [mathbox.primitives :as box]
            [reagent.core :as r :include-macros true]
            [sicmutils.expression.compile :as xc]
            [sicmutils.numerical.ode :as ode]
            [sicmutils.structure :as struct]))

;; ## Components

(defn Cartesian [opts & children]
  (let [opts (update opts :range
                     (fn [{:keys [x y z]}]
                       [(or x [0 1])
                        (or y [0 1])
                        (or z [0 1])]))]
    (into [box/Cartesian opts] children)))

(defn Volume
  "Like the original, but allows for a 'dimensions' key."
  [{:keys [dimensions] :as opts}]
  (let [[width height depth] dimensions
        opts (-> (dissoc opts :dimensions)
                 (assoc :width width
                        :height height
                        :depth depth))]
    [box/Volume opts]))

;; ## Demo-Specific Components
;;
;; These are higher-level components that we'll include for the demos.

(defn ColorCube
  [{:keys [dimensions size opacity]}]
  [:<>
   [Volume
    {:dimensions dimensions
     :items 1
     :channels 4
     :live false
     :expr (fn [emit x y z]
             (emit x y z opacity))}]
   [box/Point
    {:points "<"
     :colors "<"
     :color 0xffffff
     :size size}]])

(defn Function1 [{:keys [samples f]
                  :or {samples 256}}]
  (let [f' (xc/sci-eval f)]
    [:<>
     [box/Interval
      {:width samples
       :items 1
       :channels 2
       :expr (fn [emit x _ time]
               (emit x (f' x time)))}]
     [box/Line {:color 0x3090ff :width 4}]
     [box/Point {:color 0x3090ff :size 8}]]))

(defn Lagrangian-updater
  "hardcoded at first for this use case."
  [state-derivative initial-state]
  (let [{:keys [integrator equations]}
        (ode/integration-opts (constantly state-derivative)
                              []
                              initial-state
                              {:epsilon 1e-6
                               :compile? false})]
    (fn [[t :as state] t2]
      (let [s (into-array (flatten state))
            output (.solve integrator equations t s t2 nil)]
        (struct/unflatten (.-y ^js output) state)))))

;; TODO Goal today: get the state updates changed here:
;; https://github.com/nextjournal/clerk/blob/main/notebooks/nextjournal/clerk/atom.clj

(defn ->v [s]
  (mapv (fn rec [x]
          (if (sequential? x)
            (mapv rec x)
            x))
        s))

(defn Mass
  "Provide either `:state-atom` or `:initial-state`"
  [{:keys [state->xyz L initial-state state-atom]}]
  (r/with-let [!state      (r/atom initial-state)
               render-fn   (xc/sci-eval state->xyz)
               state-deriv (xc/sci-eval L)
               my-updater  (Lagrangian-updater state-deriv @!state)]
    [:<>
     [box/Interval {:width 1
                    :items 1
                    :history 20
                    :expr
                    (fn [emit _x _i t]
                      (swap! !state #(my-updater % t))
                      (when state-atom
                        ;; TODO combine?? We can only do that if we can serialize
                        ;; our `up` out as a vector when we send it over the wire.
                        (reset! state-atom (-> @!state)))
                      (let [[x1 y1 z1] (render-fn @!state)]
                        (emit x1 z1 y1)))
                    :channels 3}]
     [box/Point {:color 0x3090ff
                 :size 20
                 :zIndex 1}]]))

#_(defn Pendulum
    []
    (r/with-let [!state      (r/atom initial-state)
                 render-fn   (xc/sci-eval state->xyz)
                 state-deriv (xc/sci-eval L)
                 my-updater  (Lagrangian-updater state-deriv @!state)]
      [:<>
       [box/Array {:data [0 0]
                   :channels 2}]
       [box/Point {:color 0x909090 :size 4}]
       [box/Array {:width 2 :channels 2 :items 2
                   :expr (fn [emit _x _i t]
                           (swap! !state #(my-updater % t))
                           (let [[x1 y1 z1] (render-fn @!state)]
                             (emit x1 z1 y1)))}]]))

(defn DoubleMass
  "Obviously these should be merged!"
  [{:keys [state->xyz L initial-state]}]
  (r/with-let [render-fn   (xc/sci-eval state->xyz)
               state-deriv (xc/sci-eval L)
               my-updater  (Lagrangian-updater state-deriv initial-state)
               !state (r/atom initial-state)]
    [:<>
     [box/Interval
      {;; because we have two items to emit.
       :width 2
       :items 1
       :expr
       (fn [emit _x _i t]
         (swap! !state #(my-updater % t))
         (let [[x1 y1 z1 x2 y2 z2] (render-fn @!state)]
           (emit x1 z1 y1)
           (emit x2 z2 y2)))
       :channels 3}]
     [box/Point {:color 0x3090ff
                 :size 20
                 :zIndex 1}]]))

(def ^:private two-pi (* 2 Math/PI))

(defn Ellipse [{:keys [a b c]}]
  [:<>
   [box/Area
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
   [box/Surface {:shaded true
                 :opacity 0.2
                 :lineX true
                 :lineY true
                 :points "<"
                 :color 0xffffff
                 :width 1}]])
