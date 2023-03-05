^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.phase-portrait
  (:require [nextjournal.clerk :as clerk]
            [mentat.clerk-utils.show :refer [show-sci show-cljs]])
  (:require
   #?@(:cljs [[leva.core :as leva]
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
              [emmy.structure :as struct]])))

;; ## Phase Portrait

(show-cljs
 (defn sq [x] (* x x))
 (def normalize (e/principal-value Math/PI))

 (defn V [[g m l] theta]
   (* -1 m g l (Math/cos theta)))

 (defn DoublePendulum
   "For later, here's how to extend this."
   []
   [:<>
    [mb/Array
     {:width 2
      :channels 2
      :items 3
      :expr (fn [emit _i now]
              (emit -1 0)
              (emit 0 0)
              (emit (Math/sin now) (- (Math/cos now))))}]
    ;; attach a bob between the two.
    [mb/Vector {:color 0xffffff :width 2}]
    ;; JUST attach a point to the second of the two items, ie [1, 2)
    [mb/Slice {:items [0 1]}]
    [mb/Point {:color 0x909090 :size 4}]

    [mb/Slice {:items [1 3]}]
    [mb/Point {:color 0xffffff :size 10}]])

 ;; TODO stop tons of re-renders here from initial state!!

 (defn WithSimulator2*
   "Takes a component and passes along a simulator..."
   [{:keys [state-derivative initial-state parameters] :as opts}
    component]
   (let [!p (react/useMemo
             (fn []
               (when parameters
                 (atom (apply array parameters))))
             #js [])
         ;; I THINK this usememo is the problem.
         simulate (react/useMemo
                   (fn []
                     (Lagrangian-updater
                      state-derivative
                      initial-state
                      {:compile? true
                       ;; TODO I backed out the mutable change here, these can't update.
                       :parameters parameters}))
                   #js [state-derivative])]
     (react/useEffect
      (fn mount []
        (reset! !p (apply array parameters))
        js/undefined)
      #js [parameters])

     [component
      (-> (dissoc opts :state-derivative :initial-state)
          (assoc :simulate simulate
                 :parameters !p))]))

 (defn InnerP [{:keys [!state simulate parameters]}]
   [:<>
    [mb/Array
     {:channels 2
      :items 2
      :expr (fn [emit _i now]
              (reset! !state (let [new-state (simulate now)]
                               (update new-state 1 normalize)))
              (let [l (aget @parameters 2)
                    [_ theta] @!state]
                (emit 0 0)
                (emit (* l (Math/sin theta))
                      (* l (- (Math/cos theta))))))}]
    ;; attach a bob between the two.
    [mb/Vector {:color 0xffffff :width 2}]

    [mb/Slice {:items [0 1]}]
    [mb/Point {:color 0x909090 :size 4}]

    [mb/Slice {:items [1 2]}]
    [mb/Point {:color 0xffffff :size 10}]])

 (defn state-deriv* [g m l]
   (l/Lagrangian->state-derivative
    (l/L-pendulum g m l)))

 (defn Pendulum [!state params]
   [:f> WithSimulator2*
    {:state-derivative state-deriv*
     :initial-state    @!state
     :parameters       params
     :!state           !state}
    InnerP])

 (defn format-number [x]
   (-> x (.toFixed 2) (.replace #"\.0+$" "")))

 (defn WellAxes []
   [:<>
    [mb/Axis
     {:axis "x"
      :color 0xffffff}]
    [mb/Scale
     {:axis "x"
      :divide 5
      :unit Math/PI
      :base 2
      :start true
      :end true}]
    [mb/Format
     {:expr (fn [x] (str (format-number (/ x Math/PI)) "π"))
      :font ["Helvetica"]}]
    [mb/Label
     {:color 0xffffff
      :background 0x000000
      :depth 0.5
      :zIndex 1
      :zOrder 5
      :size 10}]
    [mb/Axis
     {:axis "y" :color 0xffffff}]
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

 (defn PotentialLine [V !params]
   [:<>
    ;; This is the potential well. Gotta redo this to make more sense.
    [mb/Interval
     {:width 128
      :channels 2
      :live true
      :expr (fn [emit theta]
              (emit theta (V !params theta)))}]
    [mb/Line {:color 0x3090ff}]])

 (defn Well [!state !params]
   [:<>
    [mb/Grid
     {:color 0x808080
      :unitX Math/PI
      :baseX 2}]
    [WellAxes]
    [PotentialLine V !params]

    ;; this is the bead traveling with history along the potential.
    [demo.mathbox/Comet
     {:dimensions 2
      :length 16
      :color 0xa0d0ff
      :size 5
      :opacity 0.99
      :path
      (fn [emit _ _]
        (let [[_ theta] @!state]
          (emit theta (V !params theta))))}]])

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
   [{:keys [simulate steps dt]
     :or {steps 8
          dt 3e-2}}]
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
      (fn [emit x y _i _j _t]
        (simulate #js [0 x y] steps dt emit))}]
    [mb/Vector
     {:color 0x3090ff
      :size 5
      :end true}]])

 (defn WithSimulator*
   "Takes a component and passes along a simulator..."
   [{:keys [state-derivative initial-state parameters] :as opts}
    component]
   (let [!p      (react/useMemo
                  (fn []
                    (when parameters
                      (atom parameters)))
                  #js [])
         simulate (react/useMemo
                   (fn []
                     (Lagrangian-collector
                      state-derivative
                      initial-state
                      {:compile? true
                       :parameters !p}))
                   #js [state-derivative])]
     (react/useEffect
      (fn mount []
        (reset! !p (apply array parameters))
        js/undefined)
      #js [parameters])
     [component
      (-> (dissoc opts :state-derivative :initial-state :parameters)
          (assoc :simulate simulate))]))

 (defn Phase [!state !params steps]
   [:<>
    [mb/Grid {:color 0x808080}]
    [PhaseAxes]
    [:f> WithSimulator*
     {:state-derivative state-deriv*
      :initial-state [0 0 0]
      :parameters !params
      :steps steps}
     PhaseVectors]
    [Comet
     {:dimensions 2
      :length 16
      :color 0xa0d0ff
      :size 10
      :opacity 0.99
      :path
      (fn [emit _ _]
        (let [[_ q p] @!state]
          (emit q p)))}]])

 ;; TODO: get tex going!

 (defn equations [[g m l]]
   (e/->TeX
    (((e/Lagrange-equations
       (l/L-pendulum g m l))
      (e/literal-function 'theta_1))
     't)))

 (defn L-equations [[g m l]]
   (e/->TeX
    ((l/L-pendulum g m l)
     (e/up 't 'theta 'thetadot))))

 (defn Hamilton []
   (r/with-let [!state  (r/atom [0 3 0])
                !params (r/atom
                         {:length 1
                          :gravity 9.8
                          :mass 1
                          :simSteps 8})]
     (let [{:keys [length gravity mass simSteps]} @!params]
       [:<>
        [leva/Controls
         {:atom !params
          :schema
          {:length {:min 0.5 :max 2 :step 0.01}
           :gravity {:min 5 :max 15 :step 0.01}
           :mass {:min 0.5 :max 2 :step 0.01}
           :simSteps {:min 1 :max 50 :step 1}}}]
        [mathbox/MathBox
         {:container  {:style {:height "600px" :width "100%"}}
          :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
          :renderer   {:background-color 0x000000}}
         [mb/Layer
          [mb/Camera {:proxy true :position [0 0 20]}]
          [mb/Unit {:scale 720 :focus 1}
           [mb/Cartesian
            {:id "pendulum"
             :range [[-1 1] [-1 1]]
             :scale [0.25 0.25]
             :position [-0.5 0.35 0]}
            [Pendulum !state [gravity mass length]]]

           [mb/Cartesian
            {:id "well"
             ;; TODO fix our `normalize` so we don't map pi back to negative pi.
             :range [[(- Math/PI) (- Math/PI 0.00001)]
                     [-10 10]]
             :scale [0.48 0.25]
             :position [-0.5 -0.25 0]}
            [Well !state [gravity mass length]]]

           [mb/Cartesian
            {:id "phase"
             :range [[-4 4] [-8 8]]
             :scale [0.6 0.6]
             :position [0.6 0]}
            [Phase !state [gravity mass length] simSteps]]]]]]))))


;; TODO move all of the business into here and make this a cljc file.

^{::clerk/width :wide}
(show-cljs [Hamilton])
