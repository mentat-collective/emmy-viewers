(ns emmy.mathbox.plot
  "Plotting API over MathBox."
  (:require [emmy.mathbox.color :as color]
            [mathbox.primitives :as mb]))

;; ## Default Plots

(defn ^:no-doc split-opts [children]
  (if (map? (first children))
    [(first children) (rest children)]
    [{} children]))

(def ^:no-doc axis->idx
  {:x 1
   :y 3
   :z 2
   :xy [1 3] :yx [3 1]
   :yz [3 2] :zy [2 3]
   :xz [1 2] :zx [2 1]})

(defn LabeledAxis
  ([k] [LabeledAxis k {}])
  ([k {:keys [ticks? label-ticks? label?]
       :or {ticks? true
            label-ticks? true
            label? true}}]
   (let [label (name k)
         idx   (axis->idx k)]
     [mb/Group {:visible true :classes ["axis"]}
      [mb/Axis {:axis idx
                :opacity 1
                :width 1
                :size 2
                :color "#808080"
                :zOrder 0 :zIndex 0 :zBias 0 }]
      (when ticks?
        [mb/Group {:classes ["ticks"] :visible true}
         [mb/Scale {:divide 10 :nice true :zero false :axis idx}]
         [mb/Ticks {:width 2}]
         (when label-ticks?
           [:<>
            [mb/Format {:digits 2}]
            [mb/Label {:classes ["tick-labels"]}]])])
      (when label?
        [mb/Group {:classes ["label"] :visible true}
         [mb/Array {:channels 3
                    :live false
                    :data [(assoc [0 0 0] (dec idx) 5)]}]
         [mb/Text {:weight "bold" :data [label]}]
         [mb/Label {:offset [0 40 0]}]])])))

(defn Grid [k]
  (let [axes (axis->idx k)]
    [mb/Grid
     {:axes axes
      :opacity 1
      :width 0.5
      :color"#808080"
      :niceX false
      :niceY false
      :zOrder 0 :zIndex 0 :zBias 0}]))

(defn Scene
  "TODO add options!

  TODO make a bare-bones scene."
  [& children]
  (let [[opts children] (split-opts children)
        {:keys [axes grids axis-options]
         :or {axes  [:x :y :z]
              grids [:xy]}}
        opts]
    (into [mb/Cartesian
           {:range [[-5 5] [-5 5] [-5 5]]
            :scale [1 1 1]}
           [mb/Camera {:proxy true :position [0.5 0.6 2]}]]
          (concat
           children
           (map (fn [axis]
                  [LabeledAxis axis (get axis-options axis {})])
                axes)
           (map Grid grids)))))

;; ## Objects

;; TODO opacity, z-index, z-bias... separate out the labels piece too maybe?

(defn Point
  [{:keys [label size coords opacity color z-order z-index z-bias]
    :or {size 16
         z-index 0
         z-bias 0
         opacity 1
         color color/default}}]
  [:<>
   [mb/Array {:items 1 :channels 3 :data [coords]}]
   [mb/Swizzle {:order "xzy"}]
   [mb/Point
    {:size size
     :opacity opacity
     :color color
     :zIndex z-index
     :zBias z-bias
     :zOrder z-order}]
   (when label
     [:<>
      [mb/Format {:weight "bold" :data [label]}]
      [mb/Label {:offset [0 40 0]}]])])

(defn Line
  [{:keys [coords arrow-size width
           start? end? label
           opacity color z-order z-index z-bias]
    :or {z-index 0
         z-bias 0
         opacity 1
         arrow-size 6
         width 4
         color "#3498db"}}]
  [:<>
   [mb/Array {:items 1 :channels 3 :data [coords]}]
   [mb/Line
    {:size arrow-size
     :width width
     :opacity opacity
     :start start?
     :end end?
     :color color
     :zIndex z-index
     :zBias z-bias
     :zOrder z-order}]
   (when label
     (let [data (cond (vector? label) label
                      (map? label)
                      [(:start label "") (:end label "")]
                      :else ["" label])]
       [:<>
        [mb/Format {:weight "bold" :data data}]
        [mb/Label {:offset [0 40 0]}]]))])

(defn Vector
  [{:keys [tip tail]
    :or {tail [0 0 0]}
    :as opts}]
  [Line (-> (dissoc opts :tip :tail)
            (assoc :coords [tail tip]
                   :end? (:end? opts true)))])

;; ## One-Dimensional Plots

(defn OfX
  "Supported arguments:

  - "
  [{:keys [y z color samples]
    :or {color "#58a6ff"
         samples 256}
    :as opts}]
  (when (and y z)
    (throw
     (js/Error. (str "Error: specify only one of `:y` or `:z`, not both!"))))
  (let [expr (cond
               y (fn [emit x _i _time _delta]
                   (emit x (y x) 0))
               z (fn [emit x _i _time _delta]
                   (emit x 0 (z x)))
               :else
               (throw
                (js/Error.
                 (str "Error: you must specify either `:y` or `:z`."))))]
    [:<>
     [mb/Interval
      (merge (:interval opts {})
             {:axis 1
              :channels 3
              :live false
              :expr expr
              :width samples})]
     [mb/Line
      (merge {:color color :width 4}
             (:line opts {}))]]))

(defn OfY
  [{:keys [x z color width]
    :or {color "#58a6ff"
         width 256}
    :as opts}]
  (when (and x z)
    (throw (js/Error. (str "Error: specify only one of `:x` or `:z`, not both!"))))
  (let [expr (cond
               x (fn [emit y _i _time _delta]
                   (emit (x y) 0 y))
               z (fn [emit y _i _time _delta]
                   (emit 0 (z y) y))
               :else
               (throw
                (js/Error.
                 (str "Error: you must specify either `:x` or `:z`."))))]
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
               x (fn [emit z _i _time _delta]
                   (emit (x z) z 0))
               y (fn [emit z _i _time _delta]
                   (emit 0 z (y z)))
               :else
               (throw
                (js/Error.
                 (str "Error: you must specify either `:x` or `:y`."))))]
    [:<>
     [mb/Interval
      (-> (dissoc opts :x :y :color)
          (assoc :width width
                 :live false
                 :axis 2
                 :channels 3
                 :expr expr))]
     [mb/Line {:color color :width 4}]]))

(defn ParametricCurve
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

(defn- Surface2D
  "TODO cut this up into data sources etc."
  [{:keys [expr width height z-order
           opacity
           x-lines
           y-lines
           grid-width
           grid-opacity
           grid-color
           color
           shaded?]
    :or {width 64 height 64 z-order 25
         opacity 0.75
         color 0xffffff
         x-lines 8
         y-lines 8
         grid-width 1
         grid-opacity 0.5
         shaded? true}
    :as opts}]
  [:<>
   [mb/Area
    ;; TODO sub in actual options specification, this is sill to do area opts
    ;; like this.
    (-> opts
        (dissoc :surface :z-order :color :shaded?
                :opacity
                :x-lines
                :y-lines
                :grid-width
                :grid-opacity
                :grid-color)
        (assoc :live false
               :items 1
               :channels 3
               :width width
               :height height
               :expr expr))]
   [mb/Surface
    (merge
     {:shaded shaded?

      :opacity opacity
      :zOrder z-order
      :lineX false
      :lineY false
      :color color
      :width 1}
     (:surface opts {})
     {:points "<"})]
   ;; TODO Ah! So if it's a color FUNCTION, then we go gray; otherwise, we
   ;; really want a color node that takes the r, g, b off the Color. and 1.0
   ;; for the final value, and then uses this lighten value for the lines.
   ;;
   ;; and then see updateColorExpr for what actually happens with that
   ;; colorExpr, it's not quite normal.

   (let [line-color (or grid-color
                        ;; this is here for when we sub in fns.
                        (if true
                          (color/lighten color -0.75)
                          "gray"))]
     [:<>
      ;; TODO enable separate x and y lines, and disable if 0?? remember to
      ;; get sources right.
      ;;
      ;; TODO separate x and y colors? and call it u and v colors for SURE in
      ;; parametric. TODO fix the data source... I think when opacity goes to
      ;; 0 we target some new source?? CSS selector, select the data.
      [mb/Resample {:source "<" :height y-lines}]
      [mb/Line {:zBias 5 :zOrder (+ z-order 0.001)
                :color line-color
                :width grid-width
                :opacity grid-opacity}]
      [mb/Resample {:source "<<" :width x-lines}]
      [mb/Transpose {:order "yx"}]
      [mb/Line {:zBias 5
                :zOrder (+ z-order 0.001)
                :color line-color
                :width grid-width
                :opacity grid-opacity}]])])

(defn OfXY [_]
  (let [in #js [0 0]]
    (fn [{:keys [z] :as opts}]
      (let [expr (fn [emit x y _i _j _time]
                   (aset in 0 x)
                   (aset in 1 y)
                   (emit x (z in) y))]
        [Surface2D
         (-> (dissoc opts :z)
             (assoc :axes (axis->idx :xy)
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
             (assoc :axes (axis->idx :xz)
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
             (assoc :axes (axis->idx :yz)
                    :expr expr))]))))

(defn PolarSurface [_]
  (let [in #js [0 0]]
    (fn [{:keys [z r theta] :as opts}]
      (let [expr (fn [emit r theta _i _j _time]
                   (aset in 0 r)
                   (aset in 1 theta)
                   (emit (* r (Math/cos theta))
                         (z in)
                         (* r (Math/sin theta))))]
        [Surface2D
         (-> (dissoc opts :z :r :theta)
             (assoc :axes [1 3]
                    :rangeX (or r [0 3])
                    :rangeY (or theta [0 (* 2 Math/PI)])
                    :expr expr))]))))

(defn ParametricSurface
  "DONE This is for 2d manifolds embedded in R3."
  [{:keys [f u v] :as opts}]
  [Surface2D
   (-> opts
       (dissoc :f :u :v)
       (assoc :expr f
              :rangeX u
              :rangeY v))])

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
