(ns emmy.mathbox.physics
  (:require [emmy.viewer.physics :as ph]
            [leva.core]
            [mathbox.core]
            [mathbox.primitives :as mb]
            [nextjournal.clerk.render]))

(defn Curve
  "TODO try to use point-integrator in the other namespace."
  [_]
  (let [xyz #js [0 0 0]]
    (fn [{:keys [f' y0 state->xyz steps dt epsilon]
         :or {steps 1000
              dt 3e-2
              epsilon 1e-5
              state->xyz
              (fn [in out]
                (aset out 0 (aget in 0))
                (aset out 1 (aget in 1))
                (aset out 2 (aget in 2)))}}]
      [:<>
       [mb/Array
        {:channels 3
         :data
         (let [s   (ph/make-solver f' (count y0) {:epsilon epsilon})
               pts (js/Array. steps)
               idx (volatile! -1)]
           (.solve s 0 (clj->js y0)
                   (* steps dt)
                   (.grid s dt
                          (fn [_ ys]
                            (state->xyz ys xyz)
                            (aset pts
                                  (vswap! idx inc)
                                  #js [(aget xyz 0)
                                       (aget xyz 2)
                                       (aget xyz 1)]))))
           pts)}]
       [mb/Line
        {:color 0xff3090
         :size 8
         :points "<"
         :end true}]])))

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
