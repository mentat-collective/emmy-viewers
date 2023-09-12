^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.quartic-well
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare abs
             numerator denominator ref partial infinite?])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e]
            [emmy.expression.compile :as xc]
            [emmy.leva :as leva]
            [emmy.mathbox :as box]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]
            [emmy.viewer.compile]
            [emmy.viewer.physics]
            [emmy.mathbox.physics]
            [emmy.mechanics.lagrange :as l]
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

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; Kinetic energy:

(defn T [m]
  (fn [[_ _ v]]
    (e/* (e// 1 2) m (e/square v))))

;; potential energy term:

(defn V [alpha beta gamma]
  (fn [x]
    (e/+ (e/* alpha (e/expt x 4))
         (e/- (e/* beta (e/square x)))
         gamma)))

(defn L-quartic [mass alpha beta gamma]
  (e/- (T mass)
       (comp (V alpha beta gamma)
             e/coordinate)))

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

(defn phase-scene [& children]
  (apply plot/cartesian
         {:range [[-4 4] [-4 4]]
          :scale [0.48 0.48]
          :position [0.5 0.2]
          :grids {:xy {:color 0x808080 :divisions 16}}
          :axes {:x {:label false
                     :color 0xffffff
                     :end? true
                     :width 2
                     :z-index 1
                     :z-order 5
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
                             :divisions 8
                             :text-size 10
                             :offset [20 0]
                             :background 0x000000}}}}
         children))

(defn phase-vectors
  "Okay, so THIS component is close to good to go. Unlike the ODE component, this
  one is taking its cues from the ODE solver.

  TODO what we need to do is make a GENERIC thing that can emit pairs of y, y',
  and then plot some vector. And do that across a grid based on some initial
  state."
  [{:keys [initial-state] :as opts}]
  (let [[f-bind opts] (emmy.viewer.physics/ode-compile opts :f' initial-state)]
    (emmy.viewer.compile/wrap
     [f-bind]
     ['emmy.mathbox.components.physics/PhasePortrait opts])))

(defn lagrangian-phase-vectors
  [{:keys [L] :as opts}]
  (let [f' (if (ev/param-f? L)
             (update L :f #(comp l/Lagrangian->state-derivative %))
             (l/Lagrangian->state-derivative L))]
    (phase-vectors
     (-> (dissoc opts :L)
         (assoc :f' f')))))

;; ## Potential Well

(defn well-axes []
  [:<>
   ['emmy.mathbox.components.plot/Grid {:axes :xy :divisions [12 14]}]
   ['emmy.mathbox.components.plot/SceneAxes
    {:x {:label false
         :end? true
         :ticks {:divisions 6
                 :width 0
                 :text-size 10
                 :background 0x000000}
         :color 0xffffff}
     :y {:label false :end? true
         :ticks {:divisions 3
                 :snap? true
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

(defn well [{:keys [V !state initial-state atom params]}]
  ['mathbox.primitives/Cartesian
   {:range [[-3 3] [0 14]]
    :scale [0.48 0.48]
    :position [-0.5 0.2]}
   (well-axes)
   (potential-line
    {:V V
     :params params
     :atom atom})
   (emmy.mathbox.physics/comet
    {:length 16
     :color 0xa0d0ff
     :size 5
     :opacity 0.99
     :state->xyz (ev/with-params {:atom atom :params params}
                   (fn [& params]
                     (let [V (apply V params)]
                       (fn [[_ theta]]
                         [theta (V theta) 0]))))
     :initial-state initial-state
     :atom          !state})

   (emmy.mathbox.physics/comet
    {:length 16
     :color 0xa0d0ff
     :size 5
     :opacity 0.99
     :state->xyz (fn [[_ x]]
                   [x 7 0])
     :initial-state initial-state
     :atom          !state})])

^{::clerk/visibility {:code :hide :result :hide}}
(show-cljs
 (defn Logger [{:keys [T V !state params]}]
   (let [T-fn (apply js/Function T)
         V-fn (apply js/Function V)]
     [mathbox.primitives/Cartesian
      {:range [[-1 0] [0 6]]
       :scale [0.98 0.1]
       :position [0 -0.5]}
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
     :as opts}]
   ;; TODO set initial time, state. maybe no params?
   (let [!state  (reagent.core/atom {:state state})
         !params (reagent.core/atom params)
         !arr    (reagent.core/reaction
                  (apply
                   array
                   (map @!params keys)))]
     (fn [_]
       [:<>
        (reagent.core/with-let [f' (apply js/Function (:f' opts))]
          [emmy.viewer.components.physics/Evolve
           {:f' (let [psym (apply array (map @!params [:mass :alpha :beta :gamma]))]
                  (fn [in out]
                    (f' in out psym)))
            :atom !state}])
        [mathbox.core/MathBox
         {:container  {:style {:height "600px" :width "100%"}}
          :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
          :renderer   {:background-color 0x000000}}
         ;; camera above this time vs phase.

         [mathbox.primitives/Layer
          [Logger
           {:!state !state
            :T      (:T opts)
            :V      (:V opts)
            :params !arr}]]]]))))

^{::clerk/width :wide}
(let [initial-state [0 0 2]]
  (ev/with-let [!state {:state initial-state}
                !opts {:mass     1
                       :alpha    0.25
                       :beta     2
                       :gamma    4
                       :simSteps 10}]

    [:<>
     (leva/controls
      {:atom   !opts
       :folder {:name "Cake"}
       :schema
       {:mass     {:min 0.5 :max 2 :step 0.01}
        :alpha    {:min 0.1 :max 2 :step 0.01}
        :beta     {:min 0.5 :max 4 :step 0.01}
        :gamma    {:min 2 :max 6 :step 0.01}
        :simSteps {:min 1 :max 50 :step 1}}})

     (emmy.viewer.physics/evolve-lagrangian
      {:atom          !state
       :initial-state initial-state
       :L             (ev/with-params
                        {:atom !opts :params [:mass :alpha :beta :gamma]}
                        L-quartic)})

     (box/mathbox
      {:container  {:style {:height "600px" :width "100%"}}
       :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
       :renderer   {:background-color 0x000000}}
      (box/layer
       (well
        {:V V
         :atom !opts
         :!state !state
         :initial-state initial-state
         :params [:alpha :beta :gamma]})

       (phase-scene
        (lagrangian-phase-vectors
         {:L             (ev/with-params
                           {:atom !opts :params [:mass :alpha :beta :gamma]}
                           L-quartic)
          :initial-state initial-state
          :steps         (ev/get !opts :simSteps)})

        (emmy.mathbox.physics/comet
         {:length        16
          :color         0xa0d0ff
          :size          10
          :opacity       0.99
          :state->xyz    (fn [[_ x xdot]]
                           [x xdot 0])
          :initial-state initial-state
          :atom          !state}))))]))

#?(:clj
   ^{::clerk/width :wide
     ::clerk/viewer
     {:transform-fn
      (comp clerk/mark-presented
            (clerk/update-val
             (fn [{:keys [L T V params initial-state] :as m}]
               (assoc (dissoc m :L)
                      :f'
                      (xc/compile-state-fn
                       (e/compose e/Lagrangian->state-derivative L)
                       (mapv params [:mass :alpha :beta :gamma])
                       initial-state
                       {:mode :js
                        :calling-convention :primitive
                        :generic-params? true})
                      :V
                      (xc/compile-state-fn
                       (fn [& params]
                         (comp (apply V params)
                               e/coordinate))
                       (mapv params [:alpha :beta :gamma])
                       initial-state
                       {:mode :js
                        :calling-convention :primitive
                        :generic-params? true})
                      :T
                      (xc/compile-state-fn
                       T
                       (mapv params [:mass])
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
    :keys [:mass :alpha :beta :gamma]
    :L L-quartic
    :T T
    :V V
    :initial-state [0 0 2]})


(comment
  #_
  {:V
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
     :generic-params? true})}

  #_
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
                    (clojure.core/+
                     (if (js/isNaN (aget ke 0))
                       0
                       (aget ke 0))
                     (if (js/isNaN (aget pe 0))
                       0
                       (aget pe 0))))))
              {:graph true
               :interval 30})}
            {:collapsed true}))}])
