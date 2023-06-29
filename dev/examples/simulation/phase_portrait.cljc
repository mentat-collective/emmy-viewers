^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.phase-portrait
  {:nextjournal.clerk/toc true}
  (:require [emmy.env :as e]
            #?(:clj [emmy.expression.compile :as xc])
            [nextjournal.clerk #?(:clj :as :cljs :as-alias) clerk]
            [nextjournal.clerk.viewer :as viewer]
            [mentat.clerk-utils.show :refer [show-cljs]]
            #?@(:cljs [[examples.simulation.utils]
                       [emmy.mathbox.components.plot :as plot]
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

(def normalize
  (e/principal-value Math/PI))

;; potential energy term:

(defn T [_ m l]
  (fn [[_ _ thetadot]]
    (e/* (e// 1 2) m (e/square (e/* l thetadot)))))

(defn V [g m l]
  (fn [[_ theta]]
    (e/* -1 m g l (e/cos theta))))

(def L-pendulum
  (e/- T V))

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
 (defn PhaseVectors
   "Okay, so THIS component is close to good to go. Unlike the ODE component, this
  one is taking its cues from the ODE solver.

  TODO what we need to do is make a GENERIC thing that can emit pairs of y, y',
  and then plot some vector. And do that across a grid based on some initial
  state."
   [{:keys [f' initial-state params steps dt]
     :or {dt 3e-2}}]
   (let [in       (apply array initial-state)
         f'       (apply js/Function. f')
         simulate (examples.simulation.utils/Lagrangian-collector
                   f'
                   initial-state
                   {:parameters params})]
     [:<>
      [mb/Area
       {:width 16
        :height 16
        :channels 2
        :items steps
        :centeredX true
        :centeredY true
        :live false
        :expr
        (fn [emit x y _i _j _t]
          (aset in 1 x)
          (aset in 2 y)
          (simulate in
                    steps
                    dt
                    emit))}]
      [mb/Vector
       {:color 0x3090ff
        :size 5
        :end true}]]))

 (defn PhaseScene [& children]
   (into [plot/Cartesian
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
    [examples.simulation.utils/Comet
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

(show-cljs
 (defn WellAxes
   "MathBox component for a 2d chart that would honestly look better in mafs."
   []
   [:<>
    [mathbox.primitives/Axis
     {:axis "x"
      :color 0xffffff}]
    [mathbox.primitives/Scale
     {:axis "x"
      :divide 5
      :unit Math/PI
      :base 2
      :start true
      :end true}]
    [mathbox.primitives/Format
     {:expr
      (fn [x]
        (str (emmy.viewer.plot/format-number
              (/ x Math/PI)) "π"))
      :font ["Helvetica"]}]
    [mathbox.primitives/Label
     {:color 0xffffff
      :background 0x000000
      :depth 0.5
      :zIndex 1
      :zOrder 5
      :size 10}]
    [mathbox.primitives/Axis
     {:axis "y" :color 0xffffff}]
    [mathbox.primitives/Scale
     {:axis "y"
      :divide 5
      :unit 1
      :base 10
      :start true
      :end true
      :zero false}]
    [mathbox.primitives/Format
     {:expr (fn [x] (emmy.viewer.plot/format-number x))
      :font ["Helvetica"]}]
    [mathbox.primitives/Label
     {:color 0xffffff
      :background 0x000000
      :depth 0.5
      :zIndex 1
      :zOrder 5
      :size 10
      :offset [20 0]}]])

 (defn PotentialLine [{:keys [V !params]}]
   [:<>
    ;; This is the potential well. Gotta redo this to make more sense.
    [mathbox.primitives/Interval
     {:width 128
      :channels 2
      :live false
      :expr
      ;; TODO is this better or what??
      (let [in  (js/Array. 0 0 0)
            out (js/Array. 0)
            p   @!params]
        (fn [emit theta]
          (aset in 1 theta)
          (V in out p)
          (emit theta (aget out 0))))}]
    [mathbox.primitives/Line
     {:color 0x3090ff}]])

 (defn Well [{:keys [V !state params]}]
   (let [V-fn (apply js/Function. V)]
     [mathbox.primitives/Cartesian
      {;; TODO fix our `normalize` so we don't map pi back to negative pi.
       :range [[(- Math/PI) (- Math/PI 0.00001)]
               [-10 10]]
       :scale [0.48 0.25]
       :position [-0.5 -0.25 0]}
      [mathbox.primitives/Grid
       {:color 0x808080
        :unitX Math/PI
        :baseX 2}]
      [WellAxes]
      [PotentialLine
       {:V V-fn :!params params}]
      ;; this is the bead traveling with history along the potential.
      [examples.simulation.utils/Comet
       {:dimensions 2
        :length 16
        :color 0xa0d0ff
        :size 5
        :opacity 0.99
        :path
        (let [out (js/Array. 0)]
          (fn [emit _ _]
            (let [state (:state (.-state !state))
                  theta (aget state 1)]
              (V-fn state out (.-state params))
              (emit (normalize theta)
                    (aget out 0)))))}]])))

;; ## Animate Pendulum

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
                (* l (- (Math/cos theta)))]])

      ;; THIS WORKS TOO!
      #_#_
      :expr
      (fn [emit _i]
        (let [theta (aget (:state (.-state !state)) 1)
              l     (:length (.-state params))]
          (emit 0 0)
          (emit (* l (Math/sin theta))
                (* l (- (Math/cos theta))))))
      }]
    [Pendulum]])

 (defn ^:export Hamilton
   [{state  :initial-state
     params :params
     keys   :keys
     schema :schema
     :as opts}]
   ;; TODO wire generic params into Lagrangian updater.
   ;; TODO cursor really screwing me here.
   (let [!state  (reagent.core/atom {:time 0 :state state})
         !params (reagent.core/atom params)
         !arr    (reagent.core/reaction
                  (apply
                   array
                   (map @!params keys)))]
     (fn [_]
       [:<>
        [nextjournal.clerk.render/inspect @!arr]
        [leva.core/Controls {:atom !params
                             :schema schema}]
        [examples.simulation.utils/Evolve
         {:L (:f' opts)
          :params !arr
          :atom   !state}]
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
            :V      (:V opts)
            :params !arr}]

          [Phase
           {:f' (:f' opts)
            :!state !state
            :initial-state state
            :params !arr
            :steps (:simSteps @!params)}]]]]))))

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
                      :V (xc/compile-state-fn
                          V
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

;; - TODO how expensive is it to make these odex `.simulate` calls?
;; - TODO how expensive are the redundant array lookups?
;; - TODO convert potential to only need position
