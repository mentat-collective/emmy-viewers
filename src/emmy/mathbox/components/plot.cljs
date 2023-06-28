(ns emmy.mathbox.components.plot
  "Higher-level mathematical plotting components built on the primitives provided
  by `Mathbox.cljs`."
  (:refer-clojure :exclude [max])
  (:require [clojure.set :as cs]
            [emmy.mathbox.color :as color]
            [emmy.viewer.plot :as p]
            [mathbox.core]
            [mathbox.primitives :as mb]
            [reagent.core]
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
  "Map of axis keyword => the MathBox dimensions that represent the axis or axes."
  {:x 1
   :y 2
   :z 3
   :xy [1 2] :yx [2 1]
   :yz [2 3] :zy [3 2]
   :xz [1 3] :zx [3 1]})

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
  "Component that _quite indulgently_ mounts a DOM element into the current MathBox scene.

  NOTE that this is quite expensive and will slow down your updates! But when
  you need to show LaTeX this is where you should turn.

  Required arguments:

  - `:label`: string with the label you'd like to mount.

  Optional arguments:

  - `:tex?`: when `true` (default), mounts the label into the dom after
    processing it with [katex](https://katex.org/).

  - `:size`: size of the label. Defaults to 12, or 18 if `:tex?` is true.

  - `:offset`: `[<x-offset> <y-offset>]` for this label on the DOM. Defaults to
    `[0 20]`."
  [{:keys [tex? label size offset]
    :or {tex? true}}]
  (let [size   (or size (if tex? 18 12))
        offset (or offset [0 20])]
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
  "Component that renders tick marks onto a scene, lined up with an axis.

  Required arguments:

  - `:axis`: one of `:x`, `:y` or `:z`.

  Optional arguments:

  - `:divisions`: the number of divisions (ticks) to generate. Defaults to 10.

  - `:width`: width of each tick. Defaults to 2.

  - `:snap?` if `true`, the ticks will snap to \"nice\" values. `false` by default.

  - `:start?` if `true` (default), renders the starting tick.

  - `:end?` if `true` (default), renders the ending tick.

  - `:zero?` if `true`, renders the tick at 0. `false` by default.

  - `:size`: size of the label. Defaults to 12.

  - `:offset`: `[<x-offset> <y-offset>]` for this label on the DOM. Defaults to
    `[0 20]`.

  - `:labels?`: if `true` (default), renders a printed label underneath each
    tick for the `:x` and `:y` axes, or alongside the axis for `:z`.

  - `:label-fn`: `(fn [x] <string>)` for generating the printed representation
    of each tick mark's value. Defaults to [[emmy.viewer.plot/format-number]]. You
    might also enjoy [[emmy.viewer.plot/label-pi]]."
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
        [mb/Format
         {:live false
          :expr (fn [x] (label-fn x))}]
        [mb/Label
         {:offset
          (if (= axis :z)
            [20 0 0]
            [0 0 -20])}]])]))

(defn AxisLabel
  "Component that renders an axis label above the referenced `axis`.

  Required arguments:

  - `:axis`: one of `:x`, `:y` or `:z`.

  Optional arguments:

  - `:label`: the label to show. If `label` is falsey or equal to `\"\"`, this
    component won't render.

  - `:position`: the distance along the axis to place the label. Defaults to 5.

    NOTE: Ideally we would figure out the parent `Cartesian` and pick the top of
    the range for the axis specified as the default.

  - `:size`: size of the label. Defaults to 16."
  [{:keys [axis position size]
    :or {size 16
         position 5}
    :as opts}]
  {:pre [(#{:x :y :z} axis)]}
  (let [label (or (:label opts) "")]
    (when-not (= label "")
      (let [idx (axis->idx axis)]
        [:<>
         [mb/Array
          {:channels 3
           :live false
           :data [(assoc [0 0 0] (dec idx) position)]}]
         [mb/Text
          {:live false
           :weight "bold"
           :data [label]}]
         [mb/Label
          {:size size
           :offset [0 40]}]]))))

;; TODO consider removing the `max` here and spooling upward from the axis to
;; its cartesian parent to get the proper label position. see `getCartesian` and
;; `copyCartesianRange` in math3d-react.

(defn LabeledAxis
  "Component that takes a `k` equal to `:x`, `:y` or `:z` and renders the
  equivalent axis into the MathBox scene.

  Required arguments:

  - `:axis`: one of `:x`, `:y` or `:z`.

  Optional arguments:

  - `:ticks`: either `true` (default), falsey or a map of [[Ticks]] options.
    See [[Ticks]] for details on what's allowed.

    `true` will include default ticks, while `false` or `nil` will remove ticks.

  - `:label`: either `true` (default) or a map of [[AxisLabel]] options.
    See [[AxisLabel]] for details on what's allowed.

    `true` will include the default label, ticks, while `false` or `nil` will
    remove the label.

  - `:width`: width of the rendered axis line.

  - `:opacity`: opacity of the axis (not currently passed on to ticks or
    labels). Defaults to 1.0.

  - `:color`: color of the axis. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the full labeled axis.

  - `:z-index`: zIndex of the full labeled axis. Defaults to 0.

  - `:z-bias`: zBias of the full labeled axis. Defaults to 0.

  - `:label`: either true (default) or a map of options.

  - `:max`: the maximum value reached along this axis. This is used to pass a
  default `:position` argument to the [[AxisLabel]] component if one isn't set.

  NOTE this is a hack, see the comment above the component for an alternate
  approach."
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
  "Component that takes a `k` equal to `:xy`, `:yz` or `:xz` and renders a grid in
  the specified plane into the MathBox scene.

  Required arguments:

  - `:axes`: one of `:xy`, `:yz` or `:xz`.

  Optional arguments:

  - `:snap`: either `true`, `false`, a single number or a 2-vector of numbers of
    the form `[<snap-x?> <snap-y?>]`. A non-vector value becomes a pair with the
    same value in both slots.

    \"snapping\" the grid means that gridlines will snap to nice numbers.
    `false` by default.

  - `:divisions`: either `true`, `false`, a single number or a 2-vector of
    numbers of the form `[<first-axis-divisions> <second-axis-divisions>]`. A
    non-vector value becomes a pair with the same value in both slots.

    divisions set the number of gridlines that appear in each dimension.

  - `:width`: width of the lines on the rendered grid.

  - `:opacity`: opacity of the grid. Defaults to 1.0.

  - `:color`: color of the grid. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the grid.

  - `:z-index`: zIndex of the grid. Defaults to 0.

  - `:z-bias`: zBias of the grid. Defaults to 0."
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

(defn SceneAxes
  "Component that renders multiple [[LabeledAxis]] components into a scene.

  `axes` can be either

  - a vector like `[:x :y]`
  - a map of `{<axis-key> <boolean-or-[[LabeledAxis]]-arguments>}`

  `range` is a 3-vector with the rendered ranges in the `x`, `y` and `z`
  directions.

  Any axis entries missing from `axes` won't be rendered.

  NOTE: This argument is only used to fill in the `:max` argument
  to [[LabeledAxis]] for default label positioning. It should go away once we
  get a better strategy!"
  [axes range]
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

(defn SceneGrids
  "Component that renders multiple [[Grid]] objects into a scene.

  `grids` can be either

  - a vector like `[:xy :yz]`
  - a map of `{<axis-key> <boolean-or-[[Grid]]-arguments>}`

  Any plane entries missing from `grids` won't be rendered."
  [grids]
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

(defn Cartesian
  "Component that renders a mathematical 3d plotting scene into MathBox.
  Takes any number of children and nests them into a
  configured [[mathbox.coordinates/Cartesian]] component.

  Optional arguments:

  - `:range`: triple of the form `[<x-range> <y-range> <z-range>]`. Each range
    entry is a pair of `[<min-value> <max-value>]`.

    Defaults to `[-5 5]` in each dimension.

  - `:scale`: `[<x-scale> <y-scale> <z-scale>]` for tuning the relative space
    given to each dimension in the rendering. Each entry defaults to 1.

  - `:camera`: Camera position in units I don't really understand yet! Defaults
    to `[0.5 -2 0.6]`.

  - `:axes`: can be either

    - a vector like `[:x :y]`
    - a map of `{<axis-key> <boolean-or-[[LabeledAxis]]-arguments>}`

    Any axis entries missing from `:axes` won't be rendered.

    See [[LabeledAxis]] for more detail on allowed configuration values.

  - `:grids`: either

    - a vector like `[:xy :yz]`

    - a map of `{<axis-key> <boolean-or-[[Grid]]-arguments>}`

    Any plane entries missing from `:grids` won't be rendered.

    See [[Grid]] for more detail on allowed configuration values."
  [& children]
  (let [[opts children] (split-opts children)
        {:keys [camera range scale axes grids]
         :or {range  [[-5 5] [-5 5] [-5 5]]
              scale  [1 1 1]
              camera [0.5 -2 0.6]
              axes  [:x :y :z]
              grids [:xy]}} opts]
    [mb/Cartesian
     {:range range :scale scale}
     [mb/Camera
      {:proxy true :position camera}]
     (into [:<>] children)
     [SceneAxes axes range]
     [SceneGrids grids]]))

(def threestrap-defaults
  "Default Threestrap options."
  {:camera {:up [0 0 1]}})

(def box-defaults
  "Default MathBox options."
  {:container  {:style {:height "400px" :width "100%"}}
   :renderer   {:background-opacity 0}
   :threestrap threestrap-defaults})

(def ^:no-doc content-keys
  [:range :scale :camera :axes :grids])

(defn Scene
  "Takes an optional options map and any number of children and nests them into a
  configured [[mathbox.coordinates/Cartesian]] component that renders a
  mathematical 3d plotting scene into MathBox.

  Any option supported by [[mathbox.core/MathBox]] is removed and passed along
  to that component, after merging with [[box-defaults]].

  See [[Cartesian]] for all other supported options."
  [& children]
  (let [[opts children] (split-opts children)
        content-opts    (select-keys opts content-keys)
        box-opts        (apply dissoc opts content-keys)
        box-opts        (if-let [m (:threestrap box-opts)]
                          (assoc box-opts :threestrap (merge threestrap-defaults m))
                          box-opts)]
    [mathbox.core/MathBox (merge box-defaults box-opts)
     (into [Cartesian content-opts] children)]))

;; ## Objects
;;
;; Next we have a number of geometric objects.

(defn Point
  "Component that renders a point into the scene at `coords`.

  Required arguments:

  - `:coords`: 3-vector of the form `[<x> <y> <z>]` specifying the point's
    coordinates.

  Optional arguments:

  - `:label`: either a string label or an options map input to [[DomLabel]]. If
    `:tex?` is true in this map, the component will use katex to render the label.

    NOTE that this is computationally expensive for reasons I don't understand!

  - `:size`: size of the point. Defaults to 16.

  - `:opacity`: opacity of the point. Defaults to 1.0.

  - `:color`: color of the point. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the point.

  - `:z-index`: zIndex of the point. Defaults to 0.

  - `:z-bias`: zBias of the point. Defaults to 0."
  [{:keys [label size coords opacity color z-order z-index z-bias]
    :or {size 16
         z-index 0
         z-bias 0
         opacity 1
         color color/default}}]
  ;; So the key thing for history is that the FUNCTION that is querying the
  ;; history live up in a with-let, or in the outer bit of the form-2. If you do
  ;; that then you can set `live` true and have the comet.
  ;;
  ;; In fact you could probably stick the `data` element into a hook and live
  ;; emit it, no problem.
  (reagent.core/with-let [expr (fn [emit] (apply emit (coords)))]
    [:<>
     (js/console.log size)
     [mb/Array {:items 1
                :live false
                :channels 3
                :expr expr
                :history size}]
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
            [mb/Label {:offset [0 (+ (/ size 2) 40)]}]])))]))

(defn Line
  "Component that renders a line segment into the scene as specified by `coords`.

  Required arguments:

  - `:coords`: a pair of 3-vectors of the form `[<x> <y> <z>]` specifying the
    line segment's starting and ending coordinates.

  Optional arguments:

  - `:label`: either:

    - a string label,
    - a map with optional keys `:start` and `:end`
    - a vector of the form `[<start> <end>]`

    specifying the labels to hover over the start and end of the rendered line
    segment.

  - `:width`: width of the line. Defaults to 4.

  - `:start?` if `true`, renders an arrow at the start of the segment. Defaults
    to `false`.

  - `:end?` if `true`, renders an arrow at the end of the segment. Defaults to
    `false`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:opacity`: opacity of the point. Defaults to 1.0.

  - `:color`: color of the point. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the point.

  - `:z-index`: zIndex of the point. Defaults to 0.

  - `:z-bias`: zBias of the point. Defaults to 0."
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
        [mb/Label {:offset [0 0 40]}]]))])

(defn Vector
  "Component that renders a vector into the scene with the specified `tip` and
  `tail`.

  Required arguments:

  - `:tip`: 3-vector of the form `[<x> <y> <z>]` specifying the tip of the
    vector.

  Optional arguments:

  - `:tail`: 3-vector of the form `[<x> <y> <z>]` specifying the tail of the
    vector. Defaults to `[0 0 0]`.

  See [[Line]] for all other supported options. All defaults are identical,
  except `:end?` defaults to `true`."
  [{:keys [tip tail]
    :or {tail [0 0 0]}
    :as opts}]
  [Line (-> (dissoc opts :tip :tail)
            (assoc :coords [tail tip]
                   :end? (:end? opts true)))])

;; ## One-Dimensional Plots

(defn ^:no-doc Curve1D
  "Component backing all of the 1-dimensional curve components below."
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
  "Component that plots a parametric curve `f` into the scene along the range
  specified by `t`.

  Required arguments:

  - `:f`: function of the form `(fn [t] [<x> <y> <z>])`, valid within the range
    specified by `:t`.

  - `:t` 2-vector of the form `[<min-t> <max-t>]` specifying the domain of the
    parametric function `f`.

  Optional arguments:

  - `:samples`: the number of points to use to generate the curve. Defaults to
    256.

  - `:start?` if `true`, renders an arrow at the start of the curve. Defaults to
    `false`.

  - `:end?` if `true`, renders an arrow at the end of the curve. Defaults to
    `false`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:width`: width of the curve. Defaults to 4.

  - `:opacity`: opacity of the curve. Defaults to 1.0.

  - `:color`: color of the curve. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the curve.

  - `:z-index`: zIndex of the curve. Defaults to 0.

  - `:z-bias`: zBias of the curve. Defaults to 0."
  [opts]
  [Curve1D
   (cs/rename-keys opts {:f :expr :t :range})])

(defn PolarCurve
  "Component that plots a polar curve, ie, radius as a function of theta.

  Required arguments:

  - `:r`: function of the form `(fn [theta] <r>)`, valid within the range of
    theta values specified by `:range`.

    NOTE that you may only supply ONE of these two! Supplying both will trigger
    an error.

  Optional arguments:

  - `:samples`: the number of points to use to generate the curve. Defaults to
    256.

  - `:range`: 2-vector of the form `[<min-theta> <max-theta>]` specifying the
    range to feed into `:r`. Defaults to `[0 (* 2 Math/PI)]`.

  - `:start?` if `true`, renders an arrow at the start of the curve. Defaults to
    `false`.

  - `:end?` if `true`, renders an arrow at the end of the curve. Defaults to
    `false`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:width`: width of the curve. Defaults to 4.

  - `:opacity`: opacity of the curve. Defaults to 1.0.

  - `:color`: color of the curve. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the curve.

  - `:z-index`: zIndex of the curve. Defaults to 0.

  - `:z-bias`: zBias of the curve. Defaults to 0."
  [{:keys [r range]
    :or {range [0 (* 2 Math/PI)]}
    :as opts}]
  (let [expr (fn [emit theta _i _time]
               (let [radius (r theta)]
                 (emit (* radius (Math/cos theta))
                       (* radius (Math/sin theta))
                       0)))]
    [Curve1D
     (-> (dissoc opts :r)
         (assoc :expr expr :range range))]))

(defn OfX
  "Component that plots a function in either the `y` or `z` directions as a
  function of `x` values.

  Required arguments:

  - `:y` or `:z`: function of the form `(fn [x] <y-or-z>)`, valid within the
    scene's x-axis range or the range specified by `:range`.

    NOTE that you may only supply ONE of these two! Supplying both will trigger
    an error.

  Optional arguments:

  - `:samples`: the number of points to use to generate the curve. Defaults to
    256.

  - `:range`: 2-vector of the form `[<min-x> <max-x>]` specifying the range to
    feed into `:y` or `:z`.

  - `:start?` if `true`, renders an arrow at the start of the curve. Defaults to
    `false`.

  - `:end?` if `true`, renders an arrow at the end of the curve. Defaults to
    `false`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:width`: width of the curve. Defaults to 4.

  - `:opacity`: opacity of the curve. Defaults to 1.0.

  - `:color`: color of the curve. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the curve.

  - `:z-index`: zIndex of the curve. Defaults to 0.

  - `:z-bias`: zBias of the curve. Defaults to 0."
  [{:keys [y z] :as opts}]
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
    [Curve1D
     (-> (dissoc opts :y :z)
         (assoc :expr expr :axis 1))]))

(defn OfY
  "Component that plots a function in either the `x` or `z` directions as a
  function of `y` values.

  Required arguments:

  - `:x` or `:z`: function of the form `(fn [y] <x-or-z>)`, valid within the
    scene's y-axis range or the range specified by `:range`.

    NOTE that you may only supply ONE of these two! Supplying both will trigger
    an error.

  Optional arguments:

  - `:samples`: the number of points to use to generate the curve. Defaults to
    256.

  - `:range`: 2-vector of the form `[<min-y> <max-y>]` specifying the range to
    feed into `:x` or `:z`.

  - `:start?` if `true`, renders an arrow at the start of the curve. Defaults to
    `false`.

  - `:end?` if `true`, renders an arrow at the end of the curve. Defaults to
    `false`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:width`: width of the curve. Defaults to 4.

  - `:opacity`: opacity of the curve. Defaults to 1.0.

  - `:color`: color of the curve. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the curve.

  - `:z-index`: zIndex of the curve. Defaults to 0.

  - `:z-bias`: zBias of the curve. Defaults to 0."
  [{:keys [x z] :as opts}]
  (when (and x z)
    (throw (js/Error. (str "Error: specify only one of `:x` or `:z`, not both!"))))
  (let [expr (cond
               x (fn [emit y _i _time _delta]
                   (emit (x y) y 0))
               z (fn [emit y _i _time _delta]
                   (emit 0 y (z y)))
               :else
               (throw
                (js/Error.
                 (str "Error: you must specify either `:x` or `:z`."))))]
    [Curve1D
     (-> (dissoc opts :x :z)
         (assoc :expr expr :axis 3))]))

(defn OfZ
  "Component that plots a function in either the `x` or `y` directions as a
  function of `z` values.

  Required arguments:

  - `:x` or `:y`: function of the form `(fn [z] <x-or-y>)`, valid within the
    scene's z-axis range or the range specified by `:range`.

    NOTE that you may only supply ONE of these two! Supplying both will trigger
    an error.

  Optional arguments:

  - `:samples`: the number of points to use to generate the curve. Defaults to
    256.

  - `:range`: 2-vector of the form `[<min-z> <max-z>]` specifying the range to
    feed into `:x` or `:y`.

  - `:start?` if `true`, renders an arrow at the start of the curve. Defaults to
    `false`.

  - `:end?` if `true`, renders an arrow at the end of the curve. Defaults to
    `false`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:width`: width of the curve. Defaults to 4.

  - `:opacity`: opacity of the curve. Defaults to 1.0.

  - `:color`: color of the curve. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the curve.

  - `:z-index`: zIndex of the curve. Defaults to 0.

  - `:z-bias`: zBias of the curve. Defaults to 0."
  [{:keys [x y] :as opts}]
  (when (and x y)
    (throw (js/Error. (str "Error: specify only one of `:x` or `:y`, not both!"))))
  (let [expr (cond
               x (fn [emit z _i _time _delta]
                   (emit (x z) 0 z))
               y (fn [emit z _i _time _delta]
                   (emit 0 (y z) z))
               :else
               (throw
                (js/Error.
                 (str "Error: you must specify either `:x` or `:y`."))))]
    [Curve1D
     (-> (dissoc opts :x :y)
         (assoc :expr expr :axis 2))]))

;; ## 2D Plotting

(defn ^:no-doc SurfaceGrid
  "Component for rendering lines of constant `u` and `v` onto a 2D surface.

  NOTE that this is in-progress and doesn't yet support custom color functions,
  only constants! Once we get that fixed up we can properly generate the color
  outside and not pass this color argument in."
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

(defn ^:no-doc Surface2D
  "Component backing all of the 2-dimensional surface components below."
  [{:keys [expr
           u-range v-range u-samples v-samples
           shaded?
           opacity color z-order z-index z-bias]
    :or {u-samples 64
         v-samples 64
         z-order 25
         z-index 0
         z-bias 0
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

(defn ParametricSurface
  "Component that plots a parametric surface defined by `f` into the scene along
  the area specified by `u` and `v`.

  Required arguments:

  - `:f`: function of the form `(fn [[u v]] [<x> <y> <z>])`, valid within the
    area specified by `:u` and `:v`.

  - `:u` 2-vector of the form `[<min-u> <max-u>]` specifying the interval of the
    first input to `f`.

  - `:v`: 2-vector of the form `[<min-v> <max-v>]` specifying the interval of the
    second input to `f`.

  Optional arguments:

  - `:u-samples`: the number of u samples to use to generate the surface.
    Defaults to 64.

  - `:v-samples`: the number of v samples to use to generate the surface.
    Defaults to 64.

  - `:shaded?` if `true` (default), MathBox will shade the surface.

  - `:opacity`: opacity of the surface. Defaults to 0.75.

  - `:color`: color of the surface. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the surface. Defaults to 25.

  - `:z-index`: zIndex of the surface. Defaults to 0.

  - `:z-bias`: zBias of the surface. Defaults to 0.

  Optional arguments for configuring grid lines:

  - `:grid-u`: the number of lines of constant `u` to plot along the surface.

  - `:grid-v`: the number of lines of constant `v` to plot along the surface.

  - `:grid-opacity`: opacity of the grid lines. Defaults to 0.5.

  - `:grid-width`: width of the grid lines.

  - `:grid-color`: color of the grid lines. Defaults to a darkened version of
    `:color`."
  [opts]
  [Surface2D
   (cs/rename-keys opts {:f :expr
                         :u :u-range
                         :v :v-range})])

(defn PolarSurface
  "Component that plots a polar surface defined by `:f` into the scene along the
  area specified by `:r-range` and `:theta-range`.

  Required arguments:

  - `:f`: function of the form `(fn [[r theta]] [<z>])`, valid within the
    area specified by `:r-range` and `:theta-range`.

  Optional arguments:

  - `:r-range`: 2-vector of the form `[<min-r> <max-r>]` specifying the interval
    of the first input to `f`. Defaults to `[0 3]`.

  - `:theta-range`: 2-vector of the form `[<min-theta> <max-theta>]` specifying
    the interval of the second input to `f`. Defaults to `[0 (* 2 Math/PI)]`.

  - `:r-samples`: the number of r samples to use to generate the surface.
    Defaults to 64.

  - `:theta-samples`: the number of theta samples to use to generate the
    surface. Defaults to 64.

  - `:shaded?` if `true` (default), MathBox will shade the surface.

  - `:opacity`: opacity of the surface. Defaults to 0.75.

  - `:color`: color of the surface. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the surface. Defaults to 25.

  - `:z-index`: zIndex of the surface. Defaults to 0.

  - `:z-bias`: zBias of the surface. Defaults to 0.

  Optional arguments for configuring grid lines:

  - `:grid-r`: the number of lines of constant `r` to plot along the surface.

  - `:grid-theta`: the number of lines of constant `theta` to plot along the surface.

  - `:grid-opacity`: opacity of the grid lines. Defaults to 0.5.

  - `:grid-width`: width of the grid lines.

  - `:grid-color`: color of the grid lines. Defaults to a darkened version of
    `:color`."
  [_]
  (let [in #js [0 0]]
    (fn [{:keys [z r-range theta-range]
         :or {r-range     [0 3]
              theta-range [0 (* 2 Math/PI)]}
         :as opts}]
      (let [expr (fn [emit r theta _i _j _time]
                   (aset in 0 r)
                   (aset in 1 theta)
                   (emit (* r (Math/cos theta))
                         (* r (Math/sin theta))
                         (z in)))]
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

(defn OfXY
  "Component that plots an explicit surface defined by `:z` into the scene along the
  area specified by `:x-range` and `:y-range`.

  Required arguments:

  - `:z`: function of the form `(fn [[x y]] [<z>])`, valid within the
    area specified by `:x-range` and `:y-range`.

  Optional arguments:

  - `:x-range`: 2-vector of the form `[<min-x> <max-x>]` specifying the interval
    of the first input to `f`. Defaults to the scene's range.

  - `:y-range`: 2-vector of the form `[<min-y> <max-y>]` specifying the interval
    of the second input to `f`. Defaults to the scene's range.

  - `:x-samples`: the number of x samples to use to generate the surface.
    Defaults to 64.

  - `:y-samples`: the number of y samples to use to generate the surface.
    Defaults to 64.

  - `:shaded?` if `true` (default), MathBox will shade the surface.

  - `:opacity`: opacity of the surface. Defaults to 0.75.

  - `:color`: color of the surface. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the surface. Defaults to 25.

  - `:z-index`: zIndex of the surface. Defaults to 0.

  - `:z-bias`: zBias of the surface. Defaults to 0.

  Optional arguments for configuring grid lines:

  - `:grid-x`: the number of lines of constant `x` to plot along the surface.

  - `:grid-y`: the number of lines of constant `y` to plot along the surface.

  - `:grid-opacity`: opacity of the grid lines. Defaults to 0.5.

  - `:grid-width`: width of the grid lines.

  - `:grid-color`: color of the grid lines. Defaults to a darkened version of
    `:color`."
  [_]
  (let [in #js [0 0]]
    (fn [{:keys [z] :as opts}]
      (let [expr (fn [emit x y _i _j _time]
                   (aset in 0 x)
                   (aset in 1 y)
                   (emit x y (z in)))]
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

(defn OfXZ
  "Component that plots an explicit surface defined by `:z` into the scene along the
  area specified by `:x-range` and `:z-range`.

  Required arguments:

  - `:y`: function of the form `(fn [[x z]] [<y>])`, valid within the
    area specified by `:x-range` and `:z-range`.

  Optional arguments:

  - `:x-range`: 2-vector of the form `[<min-x> <max-x>]` specifying the interval
    of the first input to `f`. Defaults to the scene's range.

  - `:z-range`: 2-vector of the form `[<min-z> <max-z>]` specifying the interval
    of the second input to `f`. Defaults to the scene's range.

  - `:x-samples`: the number of x samples to use to generate the surface.
    Defaults to 64.

  - `:z-samples`: the number of z samples to use to generate the surface.
    Defaults to 64.

  - `:shaded?` if `true` (default), MathBox will shade the surface.

  - `:opacity`: opacity of the surface. Defaults to 0.75.

  - `:color`: color of the surface. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the surface. Defaults to 25.

  - `:z-index`: zIndex of the surface. Defaults to 0.

  - `:z-bias`: zBias of the surface. Defaults to 0.

  Optional arguments for configuring grid lines:

  - `:grid-x`: the number of lines of constant `x` to plot along the surface.

  - `:grid-z`: the number of lines of constant `z` to plot along the surface.

  - `:grid-opacity`: opacity of the grid lines. Defaults to 0.5.

  - `:grid-width`: width of the grid lines.

  - `:grid-color`: color of the grid lines. Defaults to a darkened version of
    `:color`."
  [_]
  (let [in #js [0 0]]
    (fn [{:keys [y] :as opts}]
      (let [expr (fn [emit x z _i _j _time]
                   (aset in 0 x)
                   (aset in 1 z)
                   (emit x (y in) z))]
        [Surface2D
         (-> (dissoc opts :y)
             (cs/rename-keys {:x-range :u-range
                              :z-range :v-range
                              :x-samples :u-samples
                              :z-samples :v-samples
                              :grid-x :grid-u
                              :grid-z :grid-v})
             (assoc :axes (axis->idx :xz)
                    :expr expr))]))))

(defn OfYZ
  "Component that plots an explicit surface defined by `:x` into the scene along the
  area specified by `:y-range` and `:z-range`.

  Required arguments:

  - `:x`: function of the form `(fn [[y z]] [<x>])`, valid within the
    area specified by `:y-range` and `:z-range`.

  Optional arguments:

  - `:y-range`: 2-vector of the form `[<min-y> <max-y>]` specifying the interval
    of the first input to `f`. Defaults to the scene's range.

  - `:z-range`: 2-vector of the form `[<min-z> <max-z>]` specifying the interval
    of the second input to `f`. Defaults to the scene's range.

  - `:y-samples`: the number of y samples to use to generate the surface.
    Defaults to 64.

  - `:z-samples`: the number of z samples to use to generate the surface.
    Defaults to 64.

  - `:shaded?` if `true` (default), MathBox will shade the surface.

  - `:opacity`: opacity of the surface. Defaults to 0.75.

  - `:color`: color of the surface. This can be a `three.js` `Color` object or [any
    valid input to its constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the surface. Defaults to 25.

  - `:z-index`: zIndex of the surface. Defaults to 0.

  - `:z-bias`: zBias of the surface. Defaults to 0.

  Optional arguments for configuring grid lines:

  - `:grid-y`: the number of lines of constant `y` to plot along the surface.

  - `:grid-z`: the number of lines of constant `z` to plot along the surface.

  - `:grid-opacity`: opacity of the grid lines. Defaults to 0.5.

  - `:grid-width`: width of the grid lines.

  - `:grid-color`: color of the grid lines. Defaults to a darkened version of
    `:color`."
  [_]
  (let [in #js [0 0]]
    (fn [{:keys [x] :as opts}]
      (let [expr (fn [emit y z _i _j _time]
                   (aset in 0 y)
                   (aset in 1 z)
                   (emit (x in) y z))]
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

(defn VectorField
  "Component that plots a vector field defined by `:f` into the scene along the
  volume specified by `:x-range`, `:y-range` and `:z-range`.

  Required arguments:

  - `:f`: function of the form `(fn [[x y z]] [<x> <y> <z>])`, valid within the
    area specified by `:x-range`, `:y-range` and `:z-range`.

    The function should return the coordinates of the tip of a vector with
    origin at `[0 0 0]`; [[VectorField]] will translate each vector to start at
    `[x y z]`.

  Optional arguments:

  - `:scale`: Optional scale factor to apply to each vector's magnitude.
    Defaults to 1.0.

  - `:x-range`: 2-vector of the form `[<min-x> <max-x>]` specifying the interval
    of the first input to `f`. Defaults to the scene's range.

  - `:y-range`: 2-vector of the form `[<min-y> <max-y>]` specifying the interval
    of the first input to `f`. Defaults to the scene's range.

  - `:z-range`: 2-vector of the form `[<min-z> <max-z>]` specifying the interval
    of the second input to `f`. Defaults to the scene's range.

  - `:x-samples`: the number of vectors to plot in the `x` direction. Defaults
    to 10.

  - `:y-samples`: the number of vectors to plot in the `y` direction. Defaults
    to 10.

  - `:z-samples`: the number of vectors to plot in the `z` direction. Defaults
    to 10.

  - `:start?` if `true`, renders an arrow at the start of each vector. Defaults
    to `false`.

  - `:end?` if `true`, renders an arrow at the end of each vector. Defaults to
    `true`.

  - `:arrow-size`: size of the arrows toggled by `:start?` and `:end?`. Defaults
    to 6.

  - `:width`: width of each vector. Defaults to 2.

  - `:opacity`: opacity of each vector. Defaults to 1.0.

  - `:color`: color of each vector. This can be a `three.js` `Color` object
    or [any valid input to its
    constructor](https://threejs.org/docs/#api/en/math/Color).

  - `:z-order`: z-order of the vector field.

  - `:z-index`: zIndex of the vector field. Defaults to 0.

  - `:z-bias`: zBias of the vector field. Defaults to 0."
  [{:keys [f scale
           x-samples y-samples z-samples
           x-range y-range z-range
           arrow-size width start? end?
           opacity color z-order z-index z-bias]
    :or {scale 1
         x-samples 10
         y-samples 10
         z-samples 10
         z-index 0
         z-bias 0
         opacity 1
         color "#3090ff"
         arrow-size 6
         width 2
         start? false
         end? true}}]
  (let [x-range (or x-range (when (= 1 x-samples) [0 0]))
        y-range (or y-range (when (= 1 y-samples) [0 0]))
        z-range (or z-range (when (= 1 z-samples) [0 0]))]
    [:<>
     [mb/Volume
      (cond-> {:expr
               (fn [emit x y z]
                 (emit x y z)
                 (f (fn [x' y' z']
                      (emit (+ x (* scale x'))
                            (+ y (* scale y'))
                            (+ z (* scale z'))))
                    x y z))
               :items 2
               :channels 3
               :live false
               :width x-samples
               :height y-samples
               :depth z-samples}
        x-range (assoc :rangeX x-range)
        y-range (assoc :rangeY y-range)
        z-range (assoc :rangeZ z-range))]
     [mb/Vector
      {:size arrow-size
       :width width
       :opacity opacity
       :start start?
       :end end?
       :color color
       :zOrder z-order :zIndex z-index :zBias z-bias}]]))
