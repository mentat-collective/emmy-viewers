(ns emmy.mathbox.plot
  "Some first attempts at a higher-level plotting interface using MathBox.

  Eventually we'll want everything from https://www.math3d.org/"
  (:require [mathbox.primitives :as mb]))

;; ## One-Dimensional Plots

(defn OfX
  [{:keys [y z color width]
    :or {color "#58a6ff"
         width 256}
    :as opts}]
  (when (and y z)
    (throw (js/Error. (str "Error: specify only one of `:y` or `:z`, not both!"))))
  (let [expr (cond
               y (fn [emit x _ _]
                   (emit x (y x) 0))
               z (fn [emit x _ _]
                   (emit x 0 (z x)))
               :else (throw (js/Error. (str "Error: you must specify either `:y` or `:z`."))))]
    [:<>
     [mb/Interval
      (-> (dissoc opts :y :z :color)
          (assoc :width width
                 :live false
                 :axis 1
                 :channels 3
                 :expr expr))]
     [mb/Line {:color color :width 4}]]))

(defn OfY
  [{:keys [x z color width]
    :or {color "#58a6ff"
         width 256}
    :as opts}]
  (when (and x z)
    (throw (js/Error. (str "Error: specify only one of `:x` or `:z`, not both!"))))
  (let [expr (cond
               x (fn [emit y _ _]
                   (emit (x y) 0 y))
               z (fn [emit y _ _]
                   (emit 0 (z y) y))
               :else (throw (js/Error. (str "Error: you must specify either `:x` or `:z`."))))]
    [:<>
     [mb/Interval
      (-> (dissoc opts :x :z :color)
          (assoc :width width
                 :live false
                 :axis 3
                 :channels 3
                 :expr expr))]
     [mb/Line {:color color :width 4}]]))

(defn OfZ
  [{:keys [x y color width]
    :or {color "#58a6ff"
         width 256}
    :as opts}]
  (when (and x y)
    (throw (js/Error. (str "Error: specify only one of `:x` or `:y`, not both!"))))
  (let [expr (cond
               x (fn [emit z _ _]
                   (emit (x z) z 0))
               y (fn [emit z _ _]
                   (emit 0 z (y z)))
               :else (throw (js/Error. (str "Error: you must specify either `:x` or `:y`."))))]
    [:<>
     [mb/Interval
      (-> (dissoc opts :x :y :color)
          (assoc :width width
                 :live false
                 :axis 2
                 :channels 3
                 :expr expr))]
     [mb/Line {:color color :width 4}]]))

(defn ParametricPath
  "`:t` range..."
  [{:keys [f t color width]
    :or {color "#58a6ff"
         width 128}
    :as opts}]
  [:<>
   [mb/Interval
    (-> (dissoc opts :f :t :color)
        (assoc :width width
               :live false
               :axis 1
               :channels 3
               :range t
               :expr f))]
   [mb/Line {:color color :width 4}]])

;; ## 2D Plotting

(defn- Surface2D [_]
  (fn [{:keys [expr width height]
       :or {width 64 height 64}
       :as opts}]
    [:<>
     [mb/Area
      (-> opts
          (dissoc :surface)
          (assoc :live false
                 :items 1
                 :channels 3
                 :width width
                 :height height
                 :expr expr))]
     [mb/Surface
      (merge
       {:shaded true
        :opacity 0.5
        :lineX true
        :lineY true
        :color 0xffffff
        :width 1}
       (:surface opts {})
       {:points "<"})]]))

(defn OfXY [_]
  (let [in #js [0 0]]
    (fn [{:keys [z] :as opts}]
      (let [expr (fn [emit x y _i _j _time]
                   (aset in 0 x)
                   (aset in 1 y)
                   (emit x (z in) y))]
        [Surface2D
         (-> (dissoc opts :z)
             (assoc :axes [1 3]
                    :expr expr))]))))

(defn OfXZ [_]
  (let [in #js [0 0]]
    (fn [{:keys [y] :as opts}]
      (let [expr (fn [emit x z _i _j _time]
                   (aset in 0 x)
                   (aset in 1 z)
                   (emit x z (y in)))]
        [Surface2D
         (-> (dissoc opts :y)
             (assoc :axes [1 2]
                    :expr expr))]))))

(defn OfYZ [_]
  (let [in #js [0 0]]
    (fn [{:keys [x] :as opts}]
      (let [expr (fn [emit y z _i _j _time]
                   (aset in 0 y)
                   (aset in 1 z)
                   (emit (x in) z y))]
        [Surface2D
         (-> (dissoc opts :x)
             (assoc :axes [3 2]
                    :expr expr))]))))

(defn ParametricSurface
  "DONE This is for 2d manifolds embedded in R3."
  [{:keys [f u v] :as opts}]
  [:<>
   [mb/Area
    (merge
     {:live false
      :width 64
      :height 64}
     (-> opts
         (dissoc :f :surface :u :v)
         (assoc :expr f
                :items 1
                :channels 3
                :rangeX u
                :rangeY v)))]
   [mb/Surface
    (merge
     {:shaded true
      :opacity 0.5
      :lineX true
      :lineY true
      :color 0xffffff
      :width 1}
     (:surface opts {})
     {:points "<"})]])

;; Finish getting info from
;; https://github.com/ChristopherChudzicki/math3d-react/blob/master/client/src/components/MathBox/MathBoxComponents.js#L1424-L1435
;;
;; and make sure it feels like the mafs vectorfield example. Should we normalize
;; down? Probably not, let the user do that.

(defn VectorField [{:keys [f x y z] :as opts}]
  [:<>
   [mb/Volume
    (merge
     {:live false
      :width 10
      :height 10
      :depth 10}
     (-> opts
         (dissoc :f :x :y :z)
         (assoc :expr
                (let [scale 0.2]
                  (fn [emit x y z]
                    (emit x z y)
                    (f (fn [x' z' y']
                         (emit (+ x (* scale x'))
                               (+ z (* scale z'))
                               (+ y (* scale y'))))
                       x y z)))
                :items 2
                :channels 3
                :rangeX x
                :rangeY y
                :rangeZ z)))]
   [mb/Vector {:points "<"
               :color "blue"
               :size 4
               :end true}]])
