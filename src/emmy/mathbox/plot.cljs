(ns emmy.mathbox.plot
  "Some first attempts at a higher-level plotting interface using MathBox."
  (:require [goog.events]
            [leva.core]
            [mathbox.core]
            [mathbox.primitives :as mb]
            [nextjournal.clerk.render]))

(defn format-number [x]
  (-> (.toFixed x 2)
      (.replace #"\.0+$" "")))

(defn ^:no-doc round
  ([v] (round v 0))
  ([v precision]
   (let [multiplier (Math/pow 10 precision)]
     (/ (Math/round (* v multiplier))
        multiplier))))

(defn label-pi [x]
  (cond (zero? x) "0"
        (< (Math/abs (- Math/PI x)) 0.001) "π"
        (< (Math/abs (- (- Math/PI) x)) 0.001) "-π"
        :else (str (round (/ x Math/PI) 5) "π")))

;; TODO default label maker?
(def ^:no-doc axis-defaults
  {:axis true
   :label-maker format-number})

;; ## 2D Plotting

(defn Axis [{:keys [axis label-maker] :as opts}]
  (let [axis (if (keyword? axis) (name axis) axis)
        opts (-> opts
                 (assoc :axis axis)
                 (dissoc :label-maker))]
    [:<>
     [mathbox.primitives/Axis {:axis axis :color 0xffffff}]
     [mathbox.primitives/Scale opts]
     [mathbox.primitives/Format
      {:expr label-maker
       :font ["Helvetica"]}]
     [mathbox.primitives/Label
      (cond-> {:color 0xffffff
               :background 0x000000
               :depth 0.5
               :zIndex 1
               :zOrder 5
               :size 10}
        (= axis "y") (assoc :offset [20 0]))]]))

(defn AxisGrid
  "TODO obviously I don't understand how to lay any of this stuff out... But the
  goal here was to make something like the mafs cartesian."
  [{:keys [x-axis y-axis subdivisions]
    :or {subdivisions 2}}]
  (let [x-opts (merge axis-defaults x-axis)
        y-opts (merge axis-defaults y-axis)]
    [:<>
     [mathbox.primitives/Grid
      {:color 0x808080
       :unit-x (:unit x-opts)
       :base-x (:base x-opts)
       :unit-y (:unit y-opts)
       :base-y (:base y-opts)
       :divide-x (* (:divide x-opts 10)
                    (:subdivisions x-opts subdivisions))
       :divide-y (* (:divide y-opts 10)
                    (:subdivisions y-opts subdivisions))}]
     [Axis
      {:axis :x
       :label-maker (:label-maker x-opts)
       :unit (:unit x-opts 1)
       :divide (:divide x-opts)
       :base (:base x-opts)}]
     [Axis
      {:axis :y
       :label-maker (:label-maker y-opts)
       :unit (:unit y-opts)
       :divide (:divide y-opts)
       :base (:base y-opts)
       :zero false}]]))


;; ## Plots
;;
;; The first two are trying to feel like mafs.

(defn OfX [{:keys [width f] :as opts}]
  [mb/Interval
   (-> (dissoc opts :f)
       (assoc :width (or width 256)
              :axis 1
              :channels 2
              :expr (fn [emit x _ _]
                      (emit x (f x)))))])

(defn OfY [{:keys [width f] :as opts}]
  [mb/Interval
   (-> (dissoc opts :f)
       (assoc :width (or width 256)
              :axis 2
              :channels 2
              :expr (fn [emit y _ _]
                      (emit (f y) y))))])

(defn Manifold
  "This is for 2d manifolds embedded in R3."
  [{:keys [f]}]
  (let [in  #js [0 0]
        out #js [0 0 0]]
    (fn [opts]
      (let [expr (fn [emit x y _i _j _time]
                   (aset in 0 x)
                   (aset in 1 y)
                   (f in out nil)
                   ;; xzy
                   (emit (aget out 0)
                         (aget out 2)
                         (aget out 1)))]
        [:<>
         [mb/Area
          (-> opts
              (dissoc :f :surface)
              (assoc :expr expr))]
         [mb/Surface
          (merge
           {:shaded true
            :opacity 0.5
            :lineX true
            :lineY true
            :color 0xffffff
            :width 1}
           (:surface opts {})
           {:points "<"})]]))))
