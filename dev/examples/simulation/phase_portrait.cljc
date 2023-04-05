^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.simulation.phase-portrait
  (:require [emmy.env :as e]
            #?(:clj [emmy.expression.compile :as xc])
            [nextjournal.clerk #?(:clj :as :cljs :as-alias) clerk]
            [nextjournal.clerk.viewer :as viewer]
            [mentat.clerk-utils.show :refer [show-cljs]]
            #?@(:cljs [[demo.mathbox]
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
;; TODO

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
 (defn format-number [x]
   (-> (.toFixed x 2)
       (.replace #"\.0+$" "")))

 (defn PhaseAxes []
   [:<>
    [mb/Axis
     {:axis "x"
      :color 0xffffff}]
    [mb/Scale
     {:axis "x"
      :divide 5
      :unit 1
      :base 10
      :start true
      :end true}]
    [mb/Format
     {:expr format-number
      :font ["Helvetica"]}]
    [mb/Label
     {:color 0xffffff
      :background 0x000000
      :depth 0.5
      :zIndex 1
      :zOrder 5
      :size 10}]
    [mb/Axis
     {:axis "y"
      :color 0xffffff}]
    [mb/Scale
     {:axis "y"
      :divide 5
      :unit 1
      :base 10
      :start true
      :end true
      :zero false}]
    [mb/Format
     {:expr format-number
      :font ["Helvetica"]}]
    [mb/Label
     {:color 0xffffff
      :background 0x000000
      :depth 0.5
      :zIndex 1
      :zOrder 5
      :size 10
      :offset [20 0]}]])

 (defn PhaseVectors
   "Component that takes a simulator and builds an array of phase vectors... todo
  document!!"
   [{:keys [state-derivative initial-state params steps dt]
     :or {dt 3e-2}}]
   (let [simulate (demo.mathbox/Lagrangian-collector
                   state-derivative
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
        :live true
        :expr
        (let [in (js/Array. 0 0 0)]
          (fn [emit x y _i _j _t]
            (aset in 1 x)
            (aset in 2 y)
            (simulate in
                      steps
                      dt
                      emit)))}]
      [mb/Vector
       {:color 0x3090ff
        :size 5
        :end true}]]))

 (defn Phase [{:keys [!state initial-state L params steps]}]
   (let [[a2 b2 c2 body2] L
         state-deriv (js/Function. a2 b2 c2 body2)]
     [:<>
      [mb/Grid {:color 0x808080}]
      [PhaseAxes]
      [PhaseVectors
       {:state-derivative state-deriv
        :initial-state initial-state
        :params params
        :steps steps}]
      [demo.mathbox/Comet
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
                  (aget state 2))))}]])))

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
        (str (format-number
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
     {:expr format-number
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
      (let [out (js/Array. 0)
            p   @!params]
        (fn [emit theta]
          (V (js/Array. 0 theta 0) out p)
          (emit theta (aget out 0))))}]
    [mathbox.primitives/Line
     {:color 0x3090ff}]])

 (defn Well [{:keys [V !state params]}]
   (let [[a1 b1 c1 body1] V
         V-fn (js/Function. a1 b1 c1 body1)]
     [:<>
      [mathbox.primitives/Grid
       {:color 0x808080
        :unitX Math/PI
        :baseX 2}]
      [WellAxes]
      [PotentialLine
       {:V V-fn
        :!params params}]
      ;; this is the bead traveling with history along the potential.
      [demo.mathbox/Comet
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
 (defn Pendulum [{:keys [!state params]}]
   [:<>
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

    ;; attach a bob between the two.
    [mathbox.primitives/Vector {:color 0xffffff :width 2}]

    [mathbox.primitives/Slice {:items [0 1]}]
    [mathbox.primitives/Point {:color 0x909090 :size 4}]

    [mathbox.primitives/Slice {:items [1 2]}]
    [mathbox.primitives/Point {:color 0xffffff :size 10}]])

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
        [leva.core/Controls
         {:atom !params
          :schema schema}]
        [demo.mathbox/Evolve
         {:L (:L opts)
          :params !arr
          :atom   !state}]

        [mathbox.core/MathBox
         {:container  {:style {:height "600px" :width "100%"}}
          :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
          :renderer   {:background-color 0x000000}}
         [mathbox.primitives/Layer
          [mathbox.primitives/Camera {:proxy true :position [0 0 20]}]
          [mathbox.primitives/Unit {:scale 720 :focus 1}
           [mathbox.primitives/Cartesian
            {:id "pendulum"
             :range [[-1 1] [-1 1]]
             :scale [0.25 0.25]
             :position [-0.5 0.35 0]}
            [Pendulum
             {:!state !state
              :params !params}]]

           [mathbox.primitives/Cartesian
            {:id "well"
             ;; TODO fix our `normalize` so we don't map pi back to negative pi.
             :range [[(- Math/PI) (- Math/PI 0.00001)]
                     [-10 10]]
             :scale [0.48 0.25]
             :position [-0.5 -0.25 0]}
            [Well
             {:!state !state
              :V      (:V opts)
              :params !arr}]]

           [mathbox.primitives/Cartesian
            {:id "phase"
             :range [[-4 4] [-8 8]]
             :scale [0.6 0.6]
             :position [0.6 0]}
            [Phase
             {:L (:L opts)
              :!state !state
              :initial-state state
              :params !arr
              :steps (:simSteps @!params)}]]]]]]))))

#?(:clj
   ^{::clerk/width :wide
     ::clerk/viewer
     {:transform-fn
      (comp clerk/mark-presented
            (clerk/update-val
             (fn [{:keys [L params keys initial-state] :as m}]
               (assoc m
                      :L
                      (xc/compile-state-fn
                       (e/compose e/Lagrangian->state-derivative L)
                       (mapv params keys)
                       initial-state
                       {:mode :js
                        :calling-convention :primitive
                        :generic-params? true})
                      :V
                      (xc/compile-state-fn
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
    :L L-pendulum
    :V V
    :initial-state [0 3 0]})



;; Next steps:

;; - TODO how do we do generic drawing?
;; - TODO clerk/sync
;; - how expensive is it to make these odex `.simulate` calls?
;; - how expensive are the redundant array lookups?
;; - convert potential to only need position

#_
(comment
  (defn DoublePendulum
    "For later, here's how to extend this."
    []
    [:<>
     [mathbox.primitives/Array
      {:width 2
       :channels 2
       :items 3
       :expr (fn [emit _i now]
               (emit -1 0)
               (emit 0 0)
               (emit (Math/sin now) (- (Math/cos now))))}]
     ;; attach a bob between the two.
     [mathbox.primitives/Vector {:color 0xffffff :width 2}]
     ;; JUST attach a point to the second of the two items, ie [1, 2)
     [mathbox.primitives/Slice {:items [0 1]}]
     [mathbox.primitives/Point {:color 0x909090 :size 4}]

     [mathbox.primitives/Slice {:items [1 3]}]
     [mathbox.primitives/Point {:color 0xffffff :size 10}]]))
