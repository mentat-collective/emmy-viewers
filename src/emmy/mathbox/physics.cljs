(ns emmy.mathbox.physics
  (:require [emmy.viewer.physics :as ph]
            [leva.core]
            [mathbox.core]
            [mathbox.primitives :as mb]
            [nextjournal.clerk.render]))

(defn- in->out [in out]
  (aset out 0 (aget in 0))
  (aset out 1 (aget in 1))
  (aset out 2 (aget in 2)))

(defn ODECurve
  "TODO try to use point-integrator in the other namespace.

   TODO can I use Curve1D?"
  [_]
  (let [xyz #js [0 0 0]]
    (fn [{:keys [f' initial-state state->xyz steps dt epsilon
                arrow-size width start? end?
                opacity color z-order z-index z-bias]
         :or {steps 1000
              dt 3e-2
              epsilon 1e-5
              z-index 0
              z-bias 0
              opacity 1
              arrow-size 6
              width 4
              color 0xff3090
              state->xyz in->out}}]
      (let [y0        (clj->js initial-state)
            dimension (count initial-state)
            solver    (ph/point-integrator f' dimension {:epsilon epsilon})]
        [:<>
         [mb/Array
          {:channels 3
           :items steps
           :live false
           :width 1
           :expr
           (fn [emit]
             (solver y0 steps dt
                     (fn [ys]
                       (state->xyz ys xyz)
                       (emit (aget xyz 0)
                             (aget xyz 2)
                             (aget xyz 1)))))}]
         [mb/Vector
          {:size arrow-size
           :width width
           :opacity opacity
           :color color
           :start start? :end end?
           :zIndex z-index :zBias z-bias :zOrder z-order}]]))))

(defn Tail [{:keys [length] :as opts}]
  [:<>
   [mb/Spread {:height [0 0 -0.02] :alignHeight -1}]
   ;; This is the color channel, and fades out the tail as you go.
   [mb/Array
    {:width length
     :channels 4
     :expr (fn [emit i]
             (emit 1 1 1 (- 1 (/ i 16))))}]
   [mb/Transpose {:order "zxy"}]
   [mb/Point
    (-> (dissoc opts :length)
        (assoc :points "<<<"
               :colors "<"))]])

(defn Comet
  "Path is a function of i, t
  dimensions is how many you want to emit
  history is tail length,
  rest of options go to the final point

  Note that i think we have to emit with xzy?? weird..."
  [{:keys [dimensions path length items]
    :or {items 1}
    :as opts}]
  [:<>
   [mb/Array
    {:history length
     :items items
     :channels dimensions
     :expr path}]
   [Tail (dissoc opts :dimensions :path :items)]])

(defn Mass
  "TODO if I make a 2-level component to compile the function then what the heck
  do I do if it changes? Do I not worry about that?

  TODO I made it here so it's already compiled... does that make sense??"
  [{state->xyz :state->xyz
    !state     :atom
    params     :params}]
  [Comet
   {:dimensions 3
    :length 16
    :color 0x3090ff
    :size 10
    :opacity 0.99
    :path
    (let [out #js [0 0 0]]
      (fn [emit _ _]
        (state->xyz (.-state !state) out params)
        (emit (aget out 0)
              (aget out 2)
              (aget out 1))))}])
