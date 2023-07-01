^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.simulation.lorenz
  {:nextjournal.clerk/toc true}
  (:require
   [nextjournal.clerk #?(:clj :as :cljs :as-alias) clerk]
   [mentat.clerk-utils.show :refer [show-cljs]]
   #?@(:cljs [[mathbox.core]
              [reagent.core]
              [leva.core]
              [mathbox.primitives :as mb]])))

;; ## Lorenz Attractor

(show-cljs
 (defn lerp [a b t]
   (+ a (* (- b a) t)))

 (defn linspace [a b n]
   (let [step (/ (- b a) (dec n))]
     (range a (+ b 0.0000001) step)))

 (defn ^:export Lorenz [{:keys [params schema]}]
   (reagent.core/with-let
     [!params (reagent.core/atom params)
      W 40
      D 32
      N 16
      dtsim (/ 1 400)
      starting (mapv
                (fn [y]
                  (mapv (fn [x]
                          [x y 0])
                        (linspace (- W) W D)))
                (linspace (- W) W D))
      !ps (reagent.core/atom starting)]
     (let [origin [W (* -3 (/ W 4)) (/ (- W) 4)]
           dfdt (if (:warped? @!params)
                  (fn [[x y z]]
                    (let [{:keys [sigma r b]} @!params]
                      [(* 0.5 (+ (* (- sigma) (- x y))
                                 (* (Math/sin (/ y 5)) (Math/sin (/ z 5)) 200)))
                       (* 0.5 (+ (- (* r x) y (* x z))
                                 (* (Math/sin (/ x 5)) (Math/sin (/ z 5)) 200)))
                       (* 0.5 (+ (- (* x y) (* b z))
                                 (* (Math/cos (/ y 5)) (Math/cos (/ x 5)) 200)))]))
                  (fn [[x y z]]
                    (let [{:keys [sigma r b]} @!params]
                      [(* (- sigma) (- x y))
                       (- (* r x) y (* x z))
                       (- (* x y) (* b z))])))]
       [:<>
        [leva.core/Controls
         {:atom !params
          :schema (assoc schema
                         :reset (leva.core/button
                                 (fn []
                                   (reset! !ps starting))))}]
        [mathbox.core/MathBox
         {:container  {:style {:height "600px" :width "100%"}}
          :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
          :renderer   {:background-color 0x000000}}
         [mathbox.primitives/Camera
          {:proxy true
           :position [0 0 2]
           :fov 30}]
         [mathbox.primitives/Unit
          {:scale 720
           :focus 6}
          [mathbox.primitives/Cartesian
           {:range [[(- W) W]
                    [(* -3 (/ W 4))
                     (* 3 (/ W 4))]
                    [(/ (- W) 4)
                     (- (* 2 W) (/ W 4))]]
            :scale [1 (/ 3 4) 1]}
           [mathbox.primitives/Grid
            {:origin origin
             :axes "xy"
             :opacity 0.5}]
           [mathbox.primitives/Grid
            {:origin origin
             :axes "xz"
             :opacity 0.5}]

           [mathbox.primitives/Grid
            {:origin origin
             :axes "yz"
             :opacity 0.5}]

           [mathbox.primitives/Area
            {:axes "xy"
             :width D
             :height D
             :history (inc N)
             :channels 4
             :items 2
             :expr
             (fn [emit _x _y i j]
               (let [[px py pz :as p] (get-in (.-state !ps) [j i])
                     [dx dy dz] (dfdt p)
                     [px' py' pz' :as p'] [(+ px (* dx dtsim))
                                           (+ py (* dy dtsim))
                                           (+ pz (* dz dtsim))]]
                 (swap! !ps assoc-in [j i] p')
                 (emit px' py' pz' 0)
                 (let [rmp (fn [e]
                             (Math/sqrt (+ 0.25 (* e e 1.5))))
                       l (Math/sqrt (+ (* dx dx)
                                       (* dy dy)
                                       (* dz dz)))
                       il (/ 1 l)]
                   (if (:warped? @!params)
                     (let [r (lerp (rmp (* dx il)) 0.1 0.75)
                           g (lerp (rmp (* dy il)) 0.3 0.75)
                           b (lerp (rmp (* dz il)) 0.95 0.75)]
                       (emit b g r 1))
                     (let [r (lerp (rmp (* dx il)) 0.18 0.5)
                           g (lerp (rmp (* dy il)) 0.55 0.5)
                           b (lerp (rmp (* dz il)) 1 0.5)]
                       (emit g r b 1))))))}]
           ;; TODO do this vs the other thing.
           [mathbox.primitives/Transpose
            {:order "zxy"}]
           [mathbox.primitives/Slice
            {:items [0 1]}]
           [mathbox.primitives/Slice
            {:source "<<"
             :items [1 2]}]
           [mathbox.primitives/Line
            {:points "<<"
             :colors "<"
             :width 2
             :depth 0.5
             :color [2 2 2]}]]]]]))))

#?(:clj
   ^{::clerk/width :wide
     ::clerk/viewer
     {:transform-fn
      (comp clerk/mark-presented
            (clerk/update-val
             (fn [m] m)))
      :render-fn
      '(fn [opts]
         [js/examples.simulation.lorenz.Lorenz opts])}}
   {:params
    {:sigma 10
     :r 28
     :b 8/3
     :warped? false}
    :schema
    {:sigma {:label "σ" :min -2 :max 20 :step 0.01}
     :r {:min -2 :max 30 :step 0.01}
     :b {:min -4 :max 5 :step 0.01}}})
