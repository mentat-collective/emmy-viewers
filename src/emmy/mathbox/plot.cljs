(ns emmy.mathbox.plot
  "Higher-level mathematical plotting components built on the primitives provided
  by `Mathbox.cljs`."
  (:refer-clojure :exclude [max])
  (:require [clojure.set :as cs]
            [emmy.mathbox.color :as color]
            [emmy.viewer.plot :as p]
            [mathbox.primitives :as mb]
            ["katex" :as katex]
            ["mathbox" :as box]))

;; ## Utilities

(defn ^:no-doc split-opts
  "Returns a pair of a parameters map and the rest of the children. Useful for
  allowing a component to take a props map optionally."
  [children]
  (if (map? (first children))
    [(first children) (rest children)]
    [{} children]))

(def ^:no-doc axis->idx
  "Map of axis keyword => the MathBox dimensions that represent the axis or axes.

  MathBox's `emit` calls confusingly take inputs in 'xzy' order! Rather than
  swizzle everything I'm using this map to track the actual indices and being
  careful."
  {:x 1
   :y 3
   :z 2
   :xy [1 3] :yx [3 1]
   :yz [3 2] :zy [2 3]
   :xz [1 2] :zx [2 1]})

(def ^:no-doc latex-render
  "HTML renderer for MathBox that renders its children using katex."
  (.createClass
   box/DOM
   #js {:render
        (fn [el _ children]
          (el "span"
              #js {:innerHTML
                   (katex/renderToString children)}))}))

(def ^:no-doc text-render
  "HTML renderer for MathBox that renders its children as a bold HTML element."
  (.createClass
   box/DOM
   #js {:render
        (fn [el _ children]
          (el "b" #js {:style #js {:color "gray"}}
              children))}))

;; ## Default Plots
;;
;; The next section provides components for building up the default mathematical
;; scene used to host the plots and objects represented by the components.

(defn DomLabel
  "TODO this is seriously expensive, back it out!!"
  [{:keys [tex? label size offset]
    :or {tex? true}}]
  (let [offset (or offset [0 20])]
    [:<>
     [mb/Html
      {:items 1
       :live false
       :expr
       (let [f (if tex? latex-render text-render)]
         (fn [emit el]
           (emit
            (el f {} label))))}]
     [mb/Dom
      {:size size
       :zoom 1
       :outline 2
       :offset offset}]]))

(defn Ticks
  "TODO Component that renders ticks"
  [{:keys [axis divisions width
           snap? zero? start? end?
           labels? label-fn]
    :or {divisions 10
         width 2
         labels? true
         label-fn p/format-number
         snap? false
         zero? false
         start? true
         end? true}}]
  {:pre [(#{:x :y :z} axis)]}
  (let [idx (axis->idx axis)]
    [:<>
     [mb/Scale
      {:divide divisions
       :zero zero?
       :start start?
       :end end?
       :nice snap?
       :axis idx}]
     [mb/Ticks {:width width}]
     (when labels?
       [:<>
        [mb/Format {:expr (fn [x] (label-fn x))}]
        [mb/Label
         {:offset
          (if (= idx 2)
            [20 0 0]
            [0 -20 0])}]])]))

(defn AxisLabel
  "
  - `:axis`: the axis index, either `:x`, `:y` or `:z`.

  - `:label`: the label.

  - `:position`: the distance along the axis to place the label. NOTE That this is a hack currently!

  - `:size`: size of the label.
  "

  [{:keys [axis position size]
    :or {size 16
         position 5}
    :as opts}]
  {:pre [(#{:x :y :z} axis)]}
  (let [label (:label opts "")]
    (when-not (= label "")
      (let [idx (axis->idx axis)]
        [:<>
         [mb/Array
          {:channels 3
           :live false
           :data [(assoc [0 0 0] (dec idx) position)]}]
         [mb/Text
          {:weight "bold"
           :detail 30
           :data [label]}]
         [mb/Label
          {:size size
           :offset [0 40]}]]))))

(defn LabeledAxis
  "Component that takes a `k` equal to `:x`, `:y` or `:z` and renders the
  equivalent axis into the mathematical scene.

  - `:axis`: the axis index, either `:x`, `:y` or `:z`.

  Optional arguments:

  - `:ticks`: either true (default) or a map of tick options.
  - `:label`: either true (default) or a map of options.

  TODO consider removing the `max` here and spooling upward from the axis to its
  cartesian parent to get the proper label position. see `getCartesian` and
  `copyCartesianRange` in math3d-react."
  [{:keys [axis width opacity color z-order z-index z-bias
           max]
    :or {z-bias 0
         z-index 0
         opacity 1
         width 1
         color "#808080"}
    :as opts}]
  {:pre [(#{:x :y :z} axis)]}
  [mb/Group {:visible true :classes ["axis"]}
   [mb/Axis
    {:axis (axis->idx axis)
     :opacity opacity
     :width width
     :color color
     :zOrder z-order :zIndex z-index :zBias z-bias
     :start false
     :end false}]
   (when-let [ticks (:ticks opts true)]
     (let [opts (if (map? ticks) ticks {})]
       [Ticks (assoc opts :axis axis)]))
   (when-let [label (:label opts true)]
     (let [base (cond
                  (true? label) {:label (name axis)}
                  (map? label)  (update label :label #(or % (name axis)))
                  :else         {:label label})]
       [AxisLabel
        (cond-> (assoc base :axis axis)
          max (assoc :position (:position base max)))]))])

(defn Grid
  "
  - `:snap` can be true or a pair, snapping the first and second axes.
  - `:divisions` is a pair or number that refers to the axes in their order."
  [{:keys [axes width opacity color z-order z-index z-bias
           snap divisions]
    :or {z-bias 0
         z-index 0
         width 0.5
         opacity 1
         color "#808080"}}]
  {:pre [(#{:xy :yx :xz :zx :yz :zy} axes)]}
  (let [[x-div y-div] (cond (vector? divisions) divisions
                            (number? divisions) [divisions divisions]
                            :else [10 10])
        [snap-x snap-y] (cond (vector? snap) snap
                              snap [true true]
                              :else [false false])]
    [mb/Grid
     {:axes (axis->idx axes)
      :opacity opacity
      :width width
      :color color
      :niceX snap-x
      :niceY snap-y
      :divideX x-div
      :divideY y-div
      :zOrder z-order :zIndex z-index :zBias z-bias}]))

(defn SceneAxes [axes range]
  (let [m (if (vector? axes)
            (zipmap axes (repeat true))
            axes)]
    (into [:<>]
          (map
           (fn [[axis opts]]
             (when opts
               (let [idx  (axis->idx axis)
                     opts (if (map? opts) opts {})]
                 [LabeledAxis
                  (assoc opts
                         :axis axis
                         :max (get-in range [(dec idx) 1]))]))))
          m)))

(defn SceneGrids [grids]
  (let [m (if (vector? grids)
            (zipmap grids (repeat true))
            grids)]
    (into [:<>]
          (map
           (fn [[grid opts]]
             (when opts
               [Grid
                (-> (if (map? opts) opts {})
                    (assoc :axes grid))])))
          m)))

(defn Scene
  "TODO add options!

  TODO make a bare-bones scene."
  [& children]
  (let [[opts children] (split-opts children)
        {:keys [camera range scale axes grids]
         :or {range  [[-5 5] [-5 5] [-5 5]]
              scale  [1 1 1]
              camera [0.5 0.6 2]
              axes  [:x :y :z]
              grids [:xy]}} opts
        range [(range 0) (range 2) (range 1)]]
    [mb/Cartesian
     {:range range :scale scale}
     [mb/Camera {:proxy true :position camera}]
     (into [:<>] children)
     [SceneAxes axes range]
     [SceneGrids grids]]))

;; ## Objects

(defn Point
  "TODO back out the domlabel thing unless the user specifies that they want it."
  [{:keys [label size coords opacity color z-order z-index z-bias]
    :or {size 16
         z-index 0
         z-bias 0
         opacity 1
         color color/default}}]
  [:<>
   [mb/Array {:items 1 :live false :channels 3 :data [coords]}]
   [mb/Swizzle {:order "xzy"}]
   [mb/Point
    {:size size
     :opacity opacity
     :color color
     :zIndex z-index
     :zBias z-bias
     :zOrder z-order}]
   (when label
     (let [opts (if (map? label)
                  label
                  {:label label})]
       (if (:tex? opts)
         [DomLabel
          (assoc opts :offset [0 (+ (/ size 2) 10)])]
         [:<>
          [mb/Format
           {:weight "bold"
            :data [(:label opts)]}]
          [mb/Label {:offset [0 (+ (/ size 2) 40)]}]])))])

(defn Line
  "TODO points"
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
   [mb/Array {:items 1 :live false :channels 3 :data [coords]}]
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
  "Same as line, with tip and tail options and an end by default."
  [{:keys [tip tail]
    :or {tail [0 0 0]}
    :as opts}]
  [Line (-> (dissoc opts :tip :tail)
            (assoc :coords [tail tip]
                   :end? (:end? opts true)))])

;; ## One-Dimensional Plots

(defn- Curve1D
  [{:keys [samples range axis expr
           arrow-size width start? end?
           opacity color z-order z-index z-bias]
    :or {axis 1
         samples 256
         z-index 0
         z-bias 0
         opacity 1
         arrow-size 6
         width 4
         color "#58a6ff"}}]
  [:<>
   [mb/Interval
    (cond-> {:axis axis
             :channels 3
             :live false
             :expr expr
             :width samples}
      range (assoc :range range))]
   [mb/Line
    {:size arrow-size
     :width width
     :opacity opacity
     :start start?
     :end end?
     :color color
     :zIndex z-index
     :zBias z-bias
     :zOrder z-order}]])

(defn ParametricCurve
  "`:t` range..."
  [{:keys [f t] :as opts}]
  [Curve1D
   (-> (dissoc opts :f :t)
       (assoc :expr f :range t))])

(defn OfX [{:keys [y z] :as opts}]
  (when (and y z)
    (throw
     (js/Error. (str "Error: specify only one of `:y` or `:z`, not both!"))))
  (let [expr (cond
               y (fn [emit x _i _time _delta]
                   (emit x 0 (y x)))
               z (fn [emit x _i _time _delta]
                   (emit x (z x) 0))
               :else
               (throw
                (js/Error.
                 (str "Error: you must specify either `:y` or `:z`."))))]
    [Curve1D
     (-> (dissoc opts :y :z)
         (assoc :expr expr :axis 1))]))

(defn OfY
  [{:keys [x z] :as opts}]
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
    [Curve1D
     (-> (dissoc opts :x :z)
         (assoc :expr expr :axis 3))]))

(defn OfZ
  [{:keys [x y] :as opts}]
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
    [Curve1D
     (-> (dissoc opts :x :y)
         (assoc :expr expr :axis 2))]))

;; ## 2D Plotting

(defn SurfaceGrid
  "TODO don't pass color."
  [{:keys [color grid-u grid-v grid-opacity grid-width grid-color z-order]
    :or {grid-u 8
         grid-v 8
         grid-width 1
         grid-opacity 0.5}}]
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
     [mb/Resample {:source "<" :height grid-v}]
     [mb/Line {:zBias 5 :zOrder (+ z-order 0.001)
               :color line-color
               :width grid-width
               :opacity grid-opacity}]
     [mb/Resample {:source "<<" :width grid-u}]
     [mb/Transpose {:order "yx"}]
     [mb/Line {:zBias 5
               :zOrder (+ z-order 0.001)
               :color line-color
               :width grid-width
               :opacity grid-opacity}]]))

;; rename u-lines, v-lines etc
(defn- Surface2D
  "TODO cut this up into data sources etc."
  [{:keys [expr
           u-range v-range u-samples v-samples
           shaded?
           opacity color z-order z-index z-bias]
    :or {u-samples 64
         v-samples 64
         z-order 25
         opacity 0.75
         color 0xffffff
         shaded? true}
    :as opts}]
  [:<>
   [mb/Area
    (cond->
        {:live false
         :items 1
         :channels 3
         :width u-samples
         :height v-samples
         :expr expr}
      u-range (assoc :rangeX u-range)
      v-range (assoc :rangeY v-range))]
   [mb/Surface
    {:shaded shaded?
     :width 1
     :lineX false
     :lineY false
     :opacity opacity
     :color color
     :zIndex z-index
     :zBias z-bias
     :zOrder z-order}]
   [SurfaceGrid
    (assoc opts
           :z-order z-order
           :color color)]])


(defn OfXY [_]
  (let [in #js [0 0]]
    (fn [{:keys [z] :as opts}]
      (let [expr (fn [emit x y _i _j _time]
                   (aset in 0 x)
                   (aset in 1 y)
                   (emit x (z in) y))]
        [Surface2D
         (-> (dissoc opts :z)
             (cs/rename-keys {:x-range :u-range
                              :y-range :v-range
                              :x-samples :u-samples
                              :y-samples :v-samples
                              :grid-x :grid-u
                              :grid-y :grid-v})
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
             (cs/rename-keys {:x-range :u-range
                              :z-range :v-range
                              :x-samples :u-samples
                              :z-samples :v-samples
                              :grid-x :grid-u
                              :grid-z :grid-v})
             (assoc :axes (axis->idx :xz)
                    :expr expr))]
        ))))

(defn OfYZ [_]
  (let [in #js [0 0]]
    (fn [{:keys [x] :as opts}]
      (let [expr (fn [emit y z _i _j _time]
                   (aset in 0 y)
                   (aset in 1 z)
                   (emit (x in) z y))]
        [Surface2D
         (-> (dissoc opts :x)
             (cs/rename-keys {:y-range :u-range
                              :z-range :v-range
                              :y-samples :u-samples
                              :z-samples :v-samples
                              :grid-y :grid-u
                              :grid-z :grid-v})
             (assoc :axes (axis->idx :yz)
                    :expr expr))]))))

(defn PolarSurface [_]
  (let [in #js [0 0]]
    (fn [{:keys [z r-range theta-range]
         :or {r-range [0 3]
              theta-range [0 (* 2 Math/PI)]}
         :as opts}]
      (let [expr (fn [emit r theta _i _j _time]
                   (aset in 0 r)
                   (aset in 1 theta)
                   (emit (* r (Math/cos theta))
                         (z in)
                         (* r (Math/sin theta))))]
        [Surface2D
         (-> (dissoc opts :z)
             (assoc :axes [1 3]
                    :expr expr
                    :r-range r-range
                    :theta-range theta-range)
             (cs/rename-keys
              {:r-range :u-range
               :theta-range :v-range
               :r-samples :u-samples
               :theta-samples :v-samples
               :grid-r :grid-u
               :grid-theta :grid-v}))]))))

(defn ParametricSurface
  "DONE This is for 2d manifolds embedded in R3."
  [{:keys [f] :as opts}]
  [Surface2D
   (-> (dissoc opts :f)
       (assoc :expr f)
       (cs/rename-keys
        {:u :u-range
         :v :v-range}))])

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
