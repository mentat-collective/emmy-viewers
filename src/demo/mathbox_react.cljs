(ns demo.mathbox-react
  (:require ["mathbox-react" :as MB]
            [reagent.core :as r :include-macros true]
            [sicmutils.expression.compile :as xc]
            [sicmutils.numerical.ode :as ode]
            [sicmutils.structure :as struct]
            ["three" :as THREE]
            ["three/examples/jsm/controls/OrbitControls.js"
             :as OrbitControls]))

;; TODO take a key for orbitcontrols, trackballcontrols.
(def default-options
  {:plugins ["core" "controls" "cursor"]
   :controls {:klass OrbitControls/OrbitControls}
   :camera {}})

(defn setup
  "Returns a setup function that will only run ONE time."
  [f]
  (fn [^js box]
    (when (and box (not (.-created box)))
      (set! (.-created box) true)
      (f box))))

(defn opts->setup
  "Some core options, tidied up."
  [{:keys [background-color
           camera-position
           max-distance
           scale focus]}]
  (setup
   (fn [^js box]
     (when scale (.set box #js {:scale scale}))
     (when focus (.set box #js {:focus focus}))
     (let [three (.-three box)]
       (when max-distance
         (-> three .-controls .-maxDistance (set! max-distance)))
       (when-let [[x y z] camera-position]
         (-> three .-camera .-position (.set x y z)))
       (when background-color
         (let [color (THREE/Color. background-color)]
           (-> three .-renderer (.setClearColor color 1.0))))))))

;; ## Components

(defn Mathbox
  "Same as `ContainedMathBox`, but with setup options.

  TODO for NOW, don't supply `:ref`. But obviously we want to allow that too.

  :style maps to containerStyle."
  [{:keys [init style] :as opts} & children]
  (let [ref (cond (map? init) (opts->setup init)
                  (fn? init)  (setup init)
                  :else      (throw
                              (ex-info
                               "Invalid init." {:init init})))
        opts (-> opts
                 (dissoc :init :style)
                 (update :options (partial merge default-options))
                 (assoc :ref ref
                        :containerStyle style))]
    (into [:> MB/ContainedMathbox opts] children)))

(defn Cartesian [opts & children]
  (let [opts (update opts :range
                     (fn [{:keys [x y z]}]
                       [(or x [0 1])
                        (or y [0 1])
                        (or z [0 1])]))]
    (into [:> MB/Cartesian opts] children)))

(defn Volume
  "Like the original, but allows for a 'dimensions' key."
  [{:keys [dimensions] :as opts}]
  (let [[width height depth] dimensions
        opts (-> (dissoc opts :dimensions)
                 (assoc :width width
                        :height height
                        :depth depth))]
    [:> MB/Volume opts]))

;; ## Demo-Specific Components
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
   [:> MB/Point
    {:points "<"
     :colors "<"
     :color 0xffffff
     :size size}]])

(defn Function1 [{:keys [samples f]
                  :or {samples 256}}]
  (let [f' (xc/sci-eval f)]
    [:<>
     [:> MB/Interval
      {:width samples
       :items 1
       :channels 2
       :expr (fn [emit x _ time]
               (emit x (f' x time)))}]
     [:> MB/Line {:color 0x3090ff :width 4}]
     [:> MB/Point {:color 0x3090ff :size 8}]]))

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

(defn Mass [{:keys [state->xyz L initial-state] :as m}]
  (let [render-fn   (xc/sci-eval state->xyz)
        state-deriv (xc/sci-eval L)
        my-updater  (Lagrangian-updater state-deriv initial-state)]
    (js/console.log render-fn)
    (r/with-let [!state (r/atom initial-state)]
      [:<>
       [:> MB/Interval {:width 1
                        :items 1
                        :history 20
                        :expr
                        (fn [emit _x _i t]
                          (swap! !state #(my-updater % t))
                          (let [[x1 y1 z1] (render-fn @!state)]
                            (emit x1 z1 y1)))
                        :channels 3}]
       [:> MB/Point {:color 0x3090ff
                     :size 20
                     :zIndex 1}]])))

(def ^:private two-pi (* 2 Math/PI))

(defn Ellipse [{:keys [a b c]}]
  [:<>
   [:> MB/Area
    {:width 64
     :height 64
     :rangeX [0 two-pi]
     :rangeY [0 two-pi]
     :axes [1 3]
     :expr (fn [emit theta phi _i _j _time]
             (let [sin-theta (Math/sin theta)
                   cos-theta (Math/cos theta)]
               ;; x y z? I think xzy
               (emit (* a sin-theta (Math/cos phi))
                     (* c cos-theta)
                     (* b sin-theta (Math/sin phi)))))
     :items 1
     :channels 3}]
   [:> MB/Surface {:shaded true
                   :opacity 0.2
                   :lineX true
                   :lineY true
                   :points "<"
                   :color 0xffffff
                   :width 1}]])
