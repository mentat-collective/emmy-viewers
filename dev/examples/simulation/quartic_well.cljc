^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.simulation.quartic-well
  (:require [emmy.env :as e]
            #?(:clj [emmy.expression.compile :as xc])
            [nextjournal.clerk #?(:clj :as :cljs :as-alias) clerk]
            [nextjournal.clerk.viewer :as viewer]
            [mentat.clerk-utils.show :refer [show-cljs]]
            #?@(:cljs [[nextjournal.clerk.render]
                       [mathbox.core]
                       [reagent.core]
                       [leva.core]
                       [mathbox.primitives :as mb]])))

;; ## Quartic Well
;; https://courses.physics.ucsd.edu/2019/Spring/physics142/Labs/Lab4/tunneling.pdf
;;
;; TODO here: Abstract out some of the components and get all four going in the
;; same scene.

;; Kinetic energy:

(defn T [m _ _ _]
  (fn [[_ _ v]]
    (e/* (e// 1 2) m (e/square v))))

;; potential energy term:

(defn V [_ alpha beta gamma]
  (fn [[_ x]]
    (e/+ (e/* alpha (e/expt x 4))
         (e/- (e/* beta (e/square x)))
         gamma)))

(def L-quartic
  (e/- T V))

;; ## Equations

;; first step is show that there is some symbolic goodness.

(viewer/tex
 (e/->TeX
  (e/simplify
   ((L-quartic 'm 'alpha 'beta 'gamma)
    (e/up 't 'x 'xdot)))))

;; Can we show eq of motion?

(viewer/tex
 (e/->TeX
  (e/simplify
   (((e/Lagrange-equations (L-quartic 'm 'alpha 'beta 'gamma))
     (e/literal-function 'x))
    't))))

#_^{::clerk/visibility {:code :hide :result :hide}}
(show-cljs
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
     {:expr emmy.mathbox.plot/format-number
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
     {:expr emmy.mathbox.plot/format-number
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
   (let [simulate (emmy.viewer.physics/Lagrangian-collector
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
        :live false
        :expr
        (let [in (js/Array. 0 0 0)]
          (fn [emit x y _i _j _t]
            (aset in 1 x)
            (aset in 2 y)
            (simulate in
                      steps
                      dt
                      (fn [ys]
                        (emit (aget ys 1)
                              (aget ys 2))))))}]
      [mb/Vector
       {:color 0x3090ff
        :size 3
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
      [emmy.mathbox.physics/Comet
       {:dimensions 2
        :length 16
        :color 0xa0d0ff
        :size 10
        :opacity 0.99
        :path
        (fn [emit _ _]
          (let [state (:state (.-state !state))]
            (emit (aget state 1)
                  (aget state 2))))}]]))

 (defn PotentialLine [{:keys [V !params]}]
   [:<>
    ;; This is the potential well. Gotta redo this to make more sense.
    [mathbox.primitives/Interval
     {:width 128
      :channels 2
      :live false
      :expr
      (let [in  (js/Array. 0 0 0)
            out (js/Array. 0)
            p   @!params]
        (fn [emit x]
          (aset in 1 x)
          (V in out p)
          (emit x (aget out 0))))}]
    [mathbox.primitives/Line
     {:color 0x3090ff}]])

 (defn Well [{:keys [V !state params]}]
   (let [[a1 b1 c1 body1] V
         V-fn (js/Function. a1 b1 c1 body1)]
     [:<>
      [emmy.mathbox.plot/AxisGrid
       {:x-axis {:divide 5}
        :y-axis {:divide 5}}]
      [PotentialLine
       {:V V-fn
        :!params params}]
      ;; this is the bead traveling with history along the potential.
      [emmy.mathbox.physics/Comet
       ;; TODO pass a width to the emitted area for how many points we have.
       {:dimensions 2
        :items 2
        :length 16
        :color 0xa0d0ff
        :size 5
        :opacity 0.99
        :path
        (let [out (js/Array. 0)]
          (fn [emit i _]
            (let [state (:state (.-state !state))
                  x (aget state 1)]
              (V-fn state out (.-state params))
              (emit x (aget out 0))
              (emit x (+ 7 i)))))}]]))

 (defn Logger [{:keys [T V !state params]}]
   (let [T-fn (apply js/Function T)
         V-fn (apply js/Function V)]
     [:<>
      [mathbox.primitives/Grid
       {:color 0x808080
        :divideX 0 :divideY 3}]
      [mathbox.primitives/Axis
       {:axis "x"
        :color 0xffffff}]
      [mathbox.primitives/Axis
       {:axis "y"
        :color 0xffffff}]

      ;; log potential
      [mathbox.primitives/Array
       {:width 1
        :history 120
        :channels 2
        :expr
        (let [out (js/Array. 0)]
          (fn [emit _i]
            (let [state (:state (.-state !state))]
              (V-fn state out (.-state params))
              (emit 0 (aget out 0)))))}]
      [mathbox.primitives/Spread
       {:height [-1 0]
        :alignHeight 1}]
      [mathbox.primitives/Transpose {:order "yx"}]
      [mathbox.primitives/Line
       {:points "<"
        :color [0.7 0.4 0.4]
        :width 3}]

      ;; log kinetic
      [mathbox.primitives/Array
       {:width 1
        :history 120
        :channels 2
        :expr
        (let [out (js/Array. 0)]
          (fn [emit _i]
            (let [state (:state (.-state !state))]
              (T-fn state out (.-state params))
              (emit 0 (aget out 0)))))}]

      [mathbox.primitives/Spread
       {:height [-1 0]
        :alignHeight 1}]
      [mathbox.primitives/Transpose {:order "yx"}]
      [mathbox.primitives/Line
       {:points "<"
        :color [0.4 0.9 1]
        :width 3}]]))

 (defn ^:export Hamilton
   [{state  :initial-state
     params :params
     keys   :keys
     schema :schema
     :as opts}]
   ;; TODO set initial time, state. maybe no params?
   (let [!state  (reagent.core/atom {:time 0 :state state})
         !params (reagent.core/atom params)
         !arr    (reagent.core/reaction
                  (apply
                   array
                   (map @!params keys)))
         ;; TODO share all the V-fn compilation calls
         T-fn (apply js/Function (:T opts))
         V-fn (apply js/Function (:V opts))]
     (fn [_]
       [:<>
        ;; so annoying...
        [nextjournal.clerk.render/inspect @!arr]
        [leva.core/Controls
         {:atom !params
          :schema
          (assoc schema
                 "Monitors (expand me!)"
                 (leva.core/folder
                  {"T"
                   (leva.core/monitor
                    (let [out (js/Array. 0)]
                      (fn []
                        (let [state (:state (.-state !state))]
                          (T-fn state out (.-state !arr))
                          (if (js/isNaN (aget out 0))
                            0
                            (aget out 0)))))
                    {:graph true
                     :interval 30})

                   "V"
                   (leva.core/monitor
                    (let [out (js/Array. 0)]
                      (fn []
                        (let [state (:state (.-state !state))]
                          (V-fn state out (.-state !arr))
                          (if (js/isNaN (aget out 0))
                            0
                            (aget out 0)))))
                    {:graph true
                     :interval 30})

                   "Energy (T+V)"
                   (leva.core/monitor
                    (let [ke (js/Array. 0)
                          pe (js/Array. 0)]
                      (fn []
                        (let [state (:state (.-state !state))]
                          (T-fn state ke (.-state !arr))
                          (V-fn state pe (.-state !arr))
                          (+ (if (js/isNaN (aget ke 0))
                               0
                               (aget ke 0))
                             (if (js/isNaN (aget pe 0))
                               0
                               (aget pe 0))))))
                    {:graph true
                     :interval 30})}
                  {:collapsed true}))}]


        ;; let vs = sim.initial;
        ;; let t = 0;
        ;; let dt = 1 / 120;
        ;; TODO parallel simulations, not connected
        ;; let dt = 1 / 120;
        ;; three.on(
        ;;          "update",
        ;;          (tick = () => {
        ;;                         vs = vs.map((v) => sim.step(v, dt));
        ;;                         t += dt;
        ;;                         })
        ;;          );
        ;; TODO same evolution?
        [emmy.viewer.physics/Evolve
         {:derivative (:L opts)
          :params !arr
          :atom   !state}]

        [mathbox.core/MathBox
         {:container  {:style {:height "600px" :width "100%"}}
          :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
          :renderer   {:background-color 0x000000}}
         ;; camera above this time vs phase.
         [mathbox.primitives/Camera {:proxy true :position [0 0 20] :fov 90}]
         [mathbox.primitives/Layer

          [mathbox.primitives/Unit {:scale 720 :focus 1}
           [mathbox.primitives/Cartesian
            {:id "well"
             :range [[-3 3] [0 14]]
             :scale [0.48 0.48]
             :position [-0.5 0.2]}
            [Well
             {:!state !state
              :V      (:V opts)
              :params !arr}]]

           [mathbox.primitives/Cartesian
            {:id "phase"
             :range [[-4 4] [-4 4]]
             :scale [0.48 0.48]
             :position [0.5 0.2]}
            [Phase
             {:L (:L opts)
              :!state !state
              :initial-state state
              :params !arr
              :steps (:simSteps @!params)}]]

           [mathbox.primitives/Cartesian
            {:id "logger"
             :range [[-1 0] [0 6]]
             :scale [0.98 0.1]
             :position [0 -0.5]}
            [Logger
             {:!state !state
              :T      (:T opts)
              :V      (:V opts)
              :params !arr}]]]]]]))))


;; ## Animate Well

#?(:clj
   ^{::clerk/width :wide
     ::clerk/viewer
     {:transform-fn
      (comp clerk/mark-presented
            (clerk/update-val
             (fn [{:keys [L T V params keys initial-state] :as m}]
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
                        :generic-params? true})
                      :T
                      (xc/compile-state-fn
                       T
                       (mapv params keys)
                       initial-state
                       {:mode :js
                        :calling-convention :primitive
                        :generic-params? true})))))
      :render-fn '(fn [opts]
                    [js/examples.simulation.quartic_well.Hamilton opts])}}
   {:params
    {:mass 1
     :alpha 0.25
     :beta 2
     :gamma 4
     :simSteps 10}
    :schema
    {:mass     {:min 0.5 :max 2 :step 0.01}
     :alpha     {:min 0.1 :max 2 :step 0.01}
     :beta     {:min 0.5 :max 4 :step 0.01}
     :gamma   {:min 2 :max 6 :step 0.01}
     :simSteps {:min 1 :max 50 :step 1}}
    :keys [:mass :alpha :beta :gamma]
    :L L-quartic
    :T T
    :V V
    :initial-state [0 0 2]})
