(ns demo.mathbox
  (:require [mathbox]
            [mathbox.primitives :as box]
            [nextjournal.clerk.sci-viewer :as sv]
            [reagent.core :as r :include-macros true]
            [sicmutils.env :as e]
            [sicmutils.expression.compile :as xc]
            [sicmutils.numerical.ode :as ode]
            [sicmutils.structure :as struct]
            ["three/src/math/Color.js" :refer [Color]]))

;; ## Components

(defn format-number [x]
  (-> x (.toFixed 2) (.replace #"\.0+$" "")))

(defn color [x]
  (Color. x))

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

(defn Mass [{:keys [state->xyz L initial-state var-name]}]
  (let [render-fn   (xc/sci-eval state->xyz)
        state-deriv (xc/sci-eval L)
        my-updater  (Lagrangian-updater state-deriv initial-state)]
    (r/with-let [!state (r/atom initial-state)]
      [:<>
       [box/Interval {:width 1
                      :items 1
                      :history 20
                      :expr
                      (fn [emit _x _i t]
                        (swap! !state #(my-updater % t))
                        (when var-name
                          (sv/clerk-eval
                           (list 'clojure.core/reset!
                                 var-name
                                 (mapv (fn rec [x]
                                         (if (sequential? x)
                                           (mapv rec x)
                                           x))
                                       @!state))))
                        (let [[x1 y1 z1] (render-fn @!state)]
                          (emit x1 z1 y1)))
                      :channels 3}]
       [box/Point {:color 0x3090ff
                   :size 20
                   :zIndex 1}]])))

(defn DoubleMass
  "Obviously these should be merged!"
  [{:keys [state->xyz L initial-state]}]
  (let [render-fn   (xc/sci-eval state->xyz)
        state-deriv (xc/sci-eval L)
        my-updater  (Lagrangian-updater state-deriv initial-state)]
    (r/with-let [!state (r/atom initial-state)]
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
                   :zIndex 1}]])))

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
               ;; x y z? I think xzy
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

;; ## Hamiltonian Example

(defn potential [_theta]
  )

(defn DoublePendulum
  "For later, here's how to extend this."
  []
  [:<>
   [box/Array
    {:width 2
     :channels 2
     :items 3
     :expr (fn [emit _i now]
             (emit -1 0)
             (emit 0 0)
             (emit (Math/sin now) (- (Math/cos now))))}]
   ;; attach a bob between the two.
   [box/Vector {:color 0xffffff :width 2}]
   ;; JUST attach a point to the second of the two items, ie [1, 2)
   [box/Slice {:items [0 1]}]
   [box/Point {:color 0x909090 :size 4}]

   [box/Slice {:items [1 3]}]
   [box/Point {:color 0xffffff :size 10}]])

(defn Pendulum []
  [:<>
   [box/Array
    {:width 2
     :channels 2
     :items 2
     :expr (fn [emit _i now]
             ;; TODO make this the real deal.
             (emit 0 0)
             (emit (Math/sin now) (- (Math/cos now))))}]
   ;; attach a bob between the two.
   [box/Vector {:color 0xffffff :width 2}]

   [box/Slice {:items [0 1]}]
   [box/Point {:color 0x909090 :size 4}]

   [box/Slice {:items [1 2]}]
   [box/Point {:color 0xffffff :size 10}]])

(defn Comet2D [{:keys [path size]}]
  [:<>
   [box/Array
    {:width 2
     :history 16
     :channels 2
     :expr (fn [emit _i now]
             (apply emit (path now)))}]
   [box/Spread
    {:height [0 0 -0.02] :alignHeight -1}]
   [box/Array
    {:width 16
     :channels 4
     :expr (fn [emit i]
             (emit 1 1 1 (- 1 (/ i 16))))}]
   [box/Transpose {:order "yx"}]
   [box/Point
    {:points "<<<"
     :colors "<"
     :color 0xa0d0ff
     :size size
     :opacity 0.99}]])

(defn WellAxes []
  [:<>
   [box/Axis
    {:axis "x"
     :color 0xffffff}]
   [box/Scale
    {:axis "x"
     :divide 5
     :unit Math/PI
     :base 2
     :start true
     :end true}]
   [box/Format
    {:expr (fn [x] (str (format-number (/ x Math/PI)) "π"))
     :font ["Helvetica"]}]
   [box/Label
    {:color 0xffffff
     :background 0x000000
     :depth 0.5
     :zIndex 1
     :zOrder 5
     :size 10}]
   [box/Axis
    {:axis "y" :color 0xffffff}]
   [box/Scale
    {:axis "y"
     :divide 5
     :unit 1
     :base 10
     :start true
     :end true
     :zero false}]
   [box/Format
    {:expr format-number
     :font ["Helvetica"]}]
   [box/Label
    {:color 0xffffff
     :background 0x000000
     :depth 0.5
     :zIndex 1
     :zOrder 5
     :size 10
     :offset [20 0]}]
   ])

(defn PotentialLine [V]
  [:<>
   ;; This is the potential well. Gotta redo this to make more sense.
   [box/Interval
    {:width 128
     :channels 2
     :expr (fn [emit x _i]
             (emit x (V x)))}]
   [box/Line {:color 0x3090ff}]])

(defn Well []
  (let [sq (fn [x] (* x x))
        V (fn [theta]
            (* 2 (sq (Math/sin (/ theta 2)))))
        normalize (e/principal-value Math/PI)]
    [:<>
     [box/Grid
      {:color 0x808080
       :unitX Math/PI
       :baseX 2}]
     [WellAxes]
     [PotentialLine V]

     ;; this is the bead traveling with history along the potential.
     [Comet2D
      {:size 4
       :path (fn [t]
               (let [theta (normalize t)]
                 [theta (V theta)]))}]]))

(defn PhaseAxes []
  [:<>
   [box/Axis
    {:axis "x"
     :color 0xffffff}]
   [box/Scale
    {:axis "x"
     :divide 5
     :unit 1
     :base 10
     :start true
     :end true}]
   [box/Format
    {:expr format-number
     :font ["Helvetica"]}]
   [box/Label
    {:color 0xffffff
     :background 0x000000
     :depth 0.5
     :zIndex 1
     :zOrder 5
     :size 10}]
   [box/Axis
    {:axis "y"
     :color 0xffffff}]
   [box/Scale
    {:axis "y"
     :divide 5
     :unit 1
     :base 10
     :start true
     :end true
     :zero false}]
   [box/Format
    {:expr format-number
     :font ["Helvetica"]}]
   [box/Label
    {:color 0xffffff
     :background 0x000000
     :depth 0.5
     :zIndex 1
     :zOrder 5
     :size 10
     :offset [20 0]}]])

(defn PhaseVectors []
  [:<>
   [box/Area
    {:width 16
     :height 16
     :channels 2
     :centeredX true
     :centeredY true
     :items 8
     :expr
     (fn [emit x y i j]
       (let [eps 1.5e-2
             a [x y]
             b a]
         (emit x y)
         (doseq [i (range 7)]

           ;; b = sim.step(b, eps)
           ;; b = sim.step(b, eps)
           (emit (+ x (/ i 16))
                 (+ y (/ i 16))))))}]
   [box/Vector
    {:color 0x3090ff
     :size 3
     :end true}]])

(defn Phase []
  [:<>
   [box/Grid {:color 0x808080}]
   [PhaseAxes]
   [PhaseVectors]
   [Comet2D
    {:size 10
     :path
     (fn [t]
       ;; actually you want to emit theta, ptheta
       [(Math/sin t) (- (Math/cos t))])}]])

(defn Hamilton []
  [mathbox/Mathbox
   {:style {:height "600px" :width "100%"}
    :options {:plugins ["core" "controls" "cursor" "stats"]}
    :init  (fn [mb]
             (let [three    (.-three mb)
                   renderer (.-renderer three)]
               (.setClearColor renderer (color 0x000000) 1.0)
               (.camera mb (clj->js
                            {:proxy true
                             :position (js/Array. 0 0 20)
                             :fov 90}))))}
   [box/Layer
    [box/Unit {:scale 720 :focus 1}
     [box/Cartesian
      {:id "pendulum"
       :range [[-1 1] [-1 1]]
       :scale [0.25 0.25]
       :position [-0.5 0.35 0]}
      [Pendulum]]

     [box/Cartesian
      {:id "well"
       :range [[(- Math/PI) Math/PI] [0 2]]
       :scale [0.48 0.25]
       :position [-0.5 -0.25 0]}
      [Well]]

     [box/Cartesian
      {:id "phase"
       :range [[-4 4] [-4 4]]
       :scale [0.48 0.48]
       :position [0.5 0]}
      [Phase]]]]])
