^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.phase-portrait
  {:nextjournal.clerk/toc true}
  (:require [emmy.clerk :as ec]
            [emmy.env :as e]
            [emmy.leva :as leva]
            [emmy.mathbox :as box]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]
            #?(:clj [emmy.expression.compile :as xc])
            [nextjournal.clerk #?(:clj :as :cljs :as-alias) clerk]
            [nextjournal.clerk.viewer :as viewer]
            [mentat.clerk-utils.show :refer [show-cljs]]
            #?@(:cljs [[emmy.mathbox.components.plot]
                       [nextjournal.clerk.render]
                       [goog.events]
                       [mathbox.core]
                       [reagent.core]
                       [leva.core]
                       [mathbox.primitives :as mb]])))

;; ## Phase Portrait
;;
;; TODO evolver doesn't reboot when you change a function value
;; TODO so many array creations for params

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)

(def normalize
  (e/principal-value Math/PI))

;; potential energy term:

(defn T [m l]
  (fn [[_ _ thetadot]]
    (e/* (e// 1 2) m (e/square (e/* l thetadot)))))

(defn V [g m l]
  (fn [theta]
    (e/* -1 m g l (e/cos theta))))

(defn L-pendulum [g m l]
  (e/- (T m l)
       (comp (V g m l) e/coordinate)))

;; ## Equations

;; first step is show that there is some symbolic goodness.

(viewer/tex
 (e/->TeX
  (e/simplify
   ((L-pendulum 'g 'm 'l)
    (e/up 't 'theta 'thetadot)))))

;; Can we show eq of motion?

(viewer/tex
 (e/->TeX
  (e/simplify
   (((e/Lagrange-equations (L-pendulum 'g 'm 'l))
     (e/literal-function 'theta))
    't))))

;; ## Phase Portrait

(show-cljs
 ;; TODO okay this is ready to go, this works!
 (defn PhaseVectors
   "Okay, so THIS component is close to good to go. Unlike the ODE component, this
  one is taking its cues from the ODE solver.

  TODO what we need to do is make a GENERIC thing that can emit pairs of y, y',
  and then plot some vector. And do that across a grid based on some initial
  state."
   [{:keys [f' initial-state params steps dt]
     :or {dt 3e-2}}]
   (reagent.core/with-let [f' (apply js/Function. f')]
     [emmy.mathbox.components.physics/PhasePortrait
      {:f' (let [psym (apply array (map @params [:gravity :mass :length]))]
             (fn [in out]
               (f' in out psym)))
       :initial-state initial-state
       :steps steps
       :dt dt}]))

 (defn PhaseScene [& children]
   (into [emmy.mathbox.components.plot/Cartesian
          {:range [[-4 4] [-8 8]]
           :scale [0.6 0.6]
           :position [0.6 0]
           :grids {:xy {:color 0x808080 :divisions 16}}
           :axes {:x {:label false
                      :color 0xffffff
                      :end? true
                      :width 2
                      :z-index 1 :z-order 5
                      :ticks {:divisions 8
                              :text-size 10
                              :offset [0 -20]
                              :background 0x000000}}
                  :y {:label false
                      :end? true
                      :width 2
                      :z-index 1
                      :z-order 5
                      :color 0xffffff
                      :ticks {:axis :y
                              :divisions 4
                              :text-size 10
                              :offset [20 0]
                              :background 0x000000}}}}]
         children))

 (defn Phase [{:keys [!state initial-state f' params steps]}]
   [PhaseScene
    [PhaseVectors
     {:f' f'
      :initial-state initial-state
      :params params
      :steps steps}]
    [emmy.mathbox.components.physics/Comet
     {:dimensions 2
      :length 16
      :color 0xa0d0ff
      :size 10
      :opacity 0.99
      :path
      (fn [emit _ _]
        (let [state (:state (.-state !state))]
          ;; TODO how do we normalize??
          (emit (normalize
                 (aget state 1))
                (aget state 2))))}]]))

;; ## Axes

(defn well-axes []
  [:<>
   ['emmy.mathbox.components.plot/Grid {:axes :xy :divisions [16 20]}]
   ['emmy.mathbox.components.plot/SceneAxes
    {:x {:label false
         :end? true
         :ticks {:divisions 8
                 :width 0
                 :text-size 10
                 :label-fn '#(emmy.viewer.plot/label-pi % 2)
                 :background 0x000000}
         :color 0xffffff}
     :y {:label false :end? true
         :ticks {:divisions 4
                 :width 0
                 :offset [20 0]
                 :text-size 10
                 :background 0x000000}
         :color 0xffffff}}]])

(defn potential-line [{:keys [V atom params]}]
  (plot/of-x
   {:width 1
    :color 0x3090ff
    :y (ev/with-params {:atom atom :params params}
         V)}))

(defn well [{:keys [V atom params]}]
  ['mathbox.primitives/Cartesian
   {:range [[(- Math/PI) (- Math/PI 0.00001)]
            [-10 10]]
    :scale [0.48 0.25]
    :position [-0.5 -0.25 0]}
   (well-axes)
   (potential-line
    {:V V
     :params params
     :atom atom})
   ;; this is the bead traveling with history along the potential.
   #_[emmy.mathbox.components.physics/Comet
      {:dimensions 2
       :length 16
       :color 0xa0d0ff
       :size 5
       :opacity 0.99
       :path
       (let [out  (js/Array. 0)
             psym (apply array (map @params [:gravity :mass :length]))]
         (fn [emit _ _]
           (let [state (:state (.-state !state))
                 theta (aget state 1)]
             (V-state-fn state out psym)
             (emit (normalize theta)
                   (aget out 0)))))}]])

(show-cljs
 (defn Well [{:keys [V-state !state params]}]
   (let [V-state-fn (apply js/Function. V-state)]
     [mathbox.primitives/Cartesian
      {;; TODO fix our `normalize` so we don't map pi back to negative pi.
       :range [[(- Math/PI) (- Math/PI 0.00001)]
               [-10 10]]
       :scale [0.48 0.25]
       :position [-0.5 -0.25 0]}
      ;; this is the bead traveling with history along the potential.
      [emmy.mathbox.components.physics/Comet
       {:dimensions 2
        :length 16
        :color 0xa0d0ff
        :size 5
        :opacity 0.99
        :path
        (let [out  (js/Array. 0)
              psym (apply array (map @params [:gravity :mass :length]))]
          (fn [emit _ _]
            (let [state (:state (.-state !state))
                  theta (aget state 1)]
              (V-state-fn state out psym)
              (emit (normalize theta)
                    (aget out 0)))))}]])))

;; ## Animate Pendulum

(defn Pendulum*
  "TODO this one can export!"
  ([] (Pendulum* {}))
  ([{:keys [width base-size bob-size segments]
     :or {bob-size  10
          base-size 4
          segments  1}}]
   [:<>
    ['mathbox.primitives/Vector {:color 0xffffff :width width}]
    ['mathbox.primitives/Slice {:items [0 1]}]
    ['mathbox.primitives/Point {:color 0x909090 :size base-size}]
    ['mathbox.primitives/Slice {:items [1 (inc segments)]}]
    ['mathbox.primitives/Point {:color 0xffffff :size bob-size}]]))

(show-cljs
 (defn Pendulum
   "TODO this one can export!"
   ([] [Pendulum {}])
   ([{:keys [width base-size bob-size segments]
      :or {bob-size  10
           base-size 4
           segments  1}}]
    [:<>
     [mathbox.primitives/Vector
      {:color 0xffffff :width width}]
     [mathbox.primitives/Slice {:items [0 1]}]
     [mathbox.primitives/Point {:color 0x909090 :size base-size}]
     [mathbox.primitives/Slice {:items [1 (inc segments)]}]
     [mathbox.primitives/Point {:color 0xffffff :size bob-size}]]))

 (defn PendulumScene [{:keys [!state params]}]
   [mathbox.primitives/Cartesian
    {:range [[-1 1] [-1 1]]
     :scale [0.25 0.25]
     :position [-0.5 0.35 0]}
    [mathbox.primitives/Array
     {:channels 2
      :items 2
      :live false
      :data (let [theta (aget (:state @!state) 1)
                  l     (:length @params)]
              [[0 0]
               [(* l (Math/sin theta))
                (* l (- (Math/cos theta)))]])}]
    [Pendulum]])

 (defn ^:export Hamilton
   [{state  :initial-state
     params :params
     schema :schema
     :as opts}]
   ;; TODO wire generic params into Lagrangian updater.
   ;; TODO cursor really screwing me here.
   (let [!state  (reagent.core/atom {:state state})
         !params (reagent.core/atom params)]
     (fn [_]
       [:<>
        [leva.core/Controls {:atom !params
                             :schema schema}]
        (reagent.core/with-let [f' (apply js/Function (:f' opts))]
          [emmy.viewer.components.physics/Evolve
           {:f' (let [psym (apply array (map @!params [:gravity :mass :length]))]
                  (fn [in out]
                    (f' in out psym)))
            :atom !state}])
        [mathbox.core/MathBox
         {:container  {:style {:height "600px" :width "100%"}}
          :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
          :renderer   {:background-color 0x000000}}
         [mathbox.primitives/Layer
          [PendulumScene
           {:!state !state
            :params !params}]

          [Well
           {:!state !state
            :V       (:V opts)
            :V-state (:V-state opts)
            :params !params}]

          [Phase
           {:f' (:f' opts)
            :!state !state
            :initial-state state
            :params !params
            :steps (:simSteps @!params)}]]]]))))



^{::clerk/width :wide}
(ev/fragment
 (ev/with-let [!params {:length 1 :gravity 9.8 :mass 1 :simSteps 10}]
   [:<>
    (leva/controls
     {:atom !params
      :folder "Cake"
      :schema
      {:length   {:min 0.5 :max 2 :step 0.01}
       :gravity  {:min 5 :max 15 :step 0.01}
       :mass     {:min 0.5 :max 2 :step 0.01}
       :simSteps {:min 1 :max 50 :step 1}}})
    (box/mathbox
     {:container  {:style {:height "600px" :width "100%"}}
      :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
      :renderer   {:background-color 0x000000}}
     (box/layer
      #_(Pendulum*)
      (well
       {:V V
        :atom !params
        :params [:gravity :mass :length]})))]))

#?(:clj
   ^{::clerk/width :wide
     ::clerk/viewer
     {:transform-fn
      (comp clerk/mark-presented
            (clerk/update-val
             (fn [{:keys [f' params keys initial-state] :as m}]
               (assoc m
                      :f'
                      (xc/compile-state-fn
                       (e/compose e/Lagrangian->state-derivative f')
                       (mapv params keys)
                       initial-state
                       {:mode :js
                        :calling-convention :primitive
                        :generic-params? true})
                      :V-state (xc/compile-state-fn
                                (fn [& params]
                                  (comp (apply V params) e/coordinate))
                                (mapv params keys)
                                initial-state
                                {:mode :js
                                 :calling-convention :primitive
                                 :generic-params? true})))))
      :render-fn '(fn [opts]
                    (nextjournal.clerk.viewer/html
                     [js/examples.simulation.phase_portrait.Hamilton opts]))}}
   {:params
    {:length 1
     :gravity 9.8
     :mass 1
     :simSteps 10}
    :schema
    {:length   {:min 0.5 :max 2 :step 0.01}
     :gravity  {:min 5 :max 15 :step 0.01}
     :mass     {:min 0.5 :max 2 :step 0.01}
     :simSteps {:min 1 :max 50 :step 1}}
    :keys [:gravity :mass :length]
    :f' L-pendulum
    :V V
    :initial-state [0 3 0]})
