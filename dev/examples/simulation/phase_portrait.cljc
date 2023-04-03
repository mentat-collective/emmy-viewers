^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.simulation.phase-portrait
  #?(:cljs
     (:import [goog Timer]))
  (:require [emmy.env :as e]
            [emmy.expression.compile :as xc]
            [emmy.mechanics.lagrange :as l]
            [nextjournal.clerk #?(:clj :as :cljs :as-alias) clerk]
            [nextjournal.clerk.viewer :as viewer]
            [mentat.clerk-utils.show :refer [show-cljs]]
            #?@(:cljs [[demo.mathbox]
                       [goog.events]
                       [goog.Timer :as timer]
                       [leva.core :as leva]
                       ["odex" :as o]
                       [mathbox.core :as mathbox]
                       [mathbox.primitives :as mb]
                       ;; [nextjournal.clerk.render :as cr]
                       ["react" :as react]
                       [reagent.core :as r]
                       [emmy.numerical.ode :as ode]
                       [emmy.structure :as struct]])))

;; ## Phase Portrait

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

;; ## Animate pendy

#?(:cljs
   (do
     (defn ^:export Pendulum [{:keys [!state params]}]
       [:<>
        ;; can I do this without an expr??
        [mathbox.primitives/Array
         {:channels 2
          :items 2
          ;; todo why doesn't this work?
          #_#_:live false
          #_#_:data (let [theta (aget (:state @!state) 1)
                          l     (nth @params 2)]
                      [0 0]
                      [(* l (Math/sin theta))
                       (* l (- (Math/cos theta)))])

          :expr
          (fn [emit _i]
            (let [theta (aget (:state (.-state !state)) 1)
                  l     (:length (.-state params))]
              (emit 0 0)
              (emit (* l (Math/sin theta))
                    (* l (- (Math/cos theta))))))}]
        ;; attach a bob between the two.
        [mathbox.primitives/Vector {:color 0xffffff :width 2}]

        [mathbox.primitives/Slice {:items [0 1]}]
        [mathbox.primitives/Point {:color 0x909090 :size 4}]

        [mathbox.primitives/Slice {:items [1 2]}]
        [mathbox.primitives/Point {:color 0xffffff :size 10}]])
     ))


#?(:clj
   ^{::clerk/viewer
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
                       {:flatten? false
                        :mode :js
                        :calling-convention :primitive
                        :generic-params? true})))))
      :render-fn
      '(fn [{state  :initial-state
            params :params
            keys   :keys
            :as opts}]
         ;; TODO wire generic params into Lagrangian updater.
         ;; TODO cursor really screwing me here.
         (reagent.core/with-let
           [!state  (reagent.core/atom {:time 0 :state state})
            !params (reagent.core/atom params)]
           [:<>
            [leva.core/Controls
             {:atom !params
              :schema
              {:length   {:min 0.5 :max 2 :step 0.01}
               :gravity  {:min 5 :max 15 :step 0.01}
               :mass     {:min 0.5 :max 2 :step 0.01}
               :simSteps {:min 1 :max 50 :step 1}}}]
            [demo.mathbox/Evolve
             {:keys keys
              :L    (:L opts)
              :params !params
              :atom   !state}]
            [mathbox.core/MathBox
             {:container  {:style {:height "600px" :width "100%"}}
              :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
              :renderer   {:background-color 0x000000}}
             [mathbox.primitives/Camera {:proxy true :position [0 0 2]}]
             [mathbox.primitives/Cartesian
              {:id "pendulum"
               :range [[-1 1] [-1 1]]
               :scale [0.5 0.5]
               :position [0 0 0]}
              [js/examples.simulation.phase_portrait.Pendulum
               {:!state !state
                :params !params}]]]])
         )}}
   {:params
    {:length 1
     :gravity 9.8
     :mass 1
     :simSteps 10}
    :keys [:gravity :length :mass]
    :L L-pendulum
    :initial-state [0 3 0]})

;; Next steps:
;;
;; - TODO get leva in here to make the controls workable
;; - TODO how do we do generic drawing?


;; For the first pass, we'll take the parameters that come in and build an atom.

;; ## Make the controls generic

;; ## Phase Portrait

#_(show-cljs
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

   #_(defn PhaseVectors
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

   #_(defn WithSimulator*
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
      #_[:f> WithSimulator*
         {:state-derivative state-deriv*
          :initial-state [0 0 0]
          :parameters !params
          :steps steps}
         PhaseVectors]
      #_[Comet
         {:dimensions 2
          :length 16
          :color 0xa0d0ff
          :size 10
          :opacity 0.99
          :path
          (fn [emit _ _]
            (let [[_ q p] @!state]
              (emit q p)))}]])

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

;; ## Axes

#_#_
{::clerk/visibility {:code :hide :result :hide}}
(show-cljs
 (defn format-number [x]
   (-> (.toFixed x 2)
       (.replace #"\.0+$" "")))

 (defn WellAxes
   "MathBox component for a 2d chart that would honestly look better in mafs."
   []
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
     {:expr
      (fn [x]
        (str (format-number
              (/ x Math/PI)) "π"))
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

 (defn Well [{:keys [V !state !params]}]
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
          (emit theta (V !params theta))))}]]))



#_
^{::clerk/width :wide}
(show-cljs [Hamilton])


#_
(comment
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
     [mb/Point {:color 0xffffff :size 10}]]))
