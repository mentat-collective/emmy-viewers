^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.mathbox.quickstart
  #:nextjournal.clerk
  {:toc true :no-cache true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.env :as e :refer :all]
            [emmy.mathbox :as box]
            [emmy.viewer :as ev]
            [nextjournal.clerk :as clerk]))

(ev/install!)

;; ## Your First Scene

;; You create MathBox.cljs scenes by declaring a MathBox component tree, similar
;; to writing an HTML DOM using a Reagent component tree.

;; To show anything in MathBox, you need to establish four things:

;; 1) A camera that is looking at...
;; 2) A coordinate system which contains...
;; 3) Geometrical data represented via...
;; 4) A choice of shape to draw it as.

;; For this example, we'll build a 2D rectangular view containing an array of
;; points, drawn as a continuous line.

;; ### Start with the camera

;; The default 3D camera starts out at `[0 0 0]` (i.e. X, Y, Z), right in the
;; middle of our diagram. +Z goes out of the screen and -Z into the screen.

;; Declare a scene with `mathbox.core/MathBox` (along with some options for the
;; container).
;;
;; Insert a `mathbox.primitives/Camera` component and pull back its `:position`
;; 3 units to `[0 0 3]`. We also set `:proxy` to true: this allows interactive
;; camera controls to override our given position.

(box/mathbox
 {:container
  {:style {:height "400px" :width "100%"}}}
 (box/camera
  {:position [0 0 3]
   :proxy true}))

;; We now have an empty scene with a loading bar and nothing to look at. Our
;; MathBox DOM now looks like:

;; ```jsx
;; <root>
;;   <camera proxy={true} position={[0, 0, 3]} />
;; </root>
;; ```

;; > See [Printing the DOM](#printing-the-dom) below for details on how to
;; > generate this representation at the console.

;; If you pass a one-argument function via the `:ref` argument to any component,
;; you'll receive a MathBox selection that points to the `<camera />` element.

;; ### Add a coordinate system

;; Now we're going to set up a simple 2D cartesian coordinate system. We'll make
;; it twice as wide as high.

(box/mathbox
 {:container {:style {:height "400px" :width "100%"}}}
 (box/camera
  {:position [0 0 3] :proxy true})
 (box/cartesian
  {:range [[-2 2] [-1 1]]
   :scale [2 1]}))

;; The `:range` specifies the area we're looking at as a vector of pairs: `[-2
;; 2]` in the `X` direction, `[-1, 1]` in the `Y` direction.

;; The `scale` specifies the projected size of the view, in this case `[2 1]`,
;; i.e. 2 `X` units and 1 `Y` unit.

;; Add two axes and a grid as children of the `mathbox.primitives/Cartesian` component so we can
;; finally see something:

^{::clerk/width :wide}
(box/mathbox
 {:container {:style {:height "400px" :width "100%"}}}
 (box/camera
  {:position [0 0 3] :proxy true})
 (box/cartesian
  {:range [[-2 2] [-1 1]]
   :scale [2 1]}
  (box/axis {:axis 1 :width 3})
  (box/axis {:axis 2 :width 3})
  (box/grid {:width 2 :divideX 20 :divideY 10})))

;; You should see gridlines appear in 50% gray, the default color, at the given
;; widths. The DOM now looks like this:

;; ```jsx
;; <root>
;;   <camera proxy={true} position={[0, 0, 3]} />
;;   <cartesian range={[[-2, 2], [-1, 1]]} scale={[2, 1]}>
;;     <axis axis={1} width={3} />
;;     <axis axis={2} width={3} />
;;     <grid width={2} divideX={20} divideY={10} />
;;   </cartesian>
;; </root>
;; ```

;; You might make your axes black by passing the `:color "black"` attribute:

^{::clerk/width :wide}
(box/mathbox
 {:container {:style {:height "400px" :width "100%"}}}
 (box/camera {:position [0 0 3] :proxy true})
 (box/cartesian
  {:range [[-2 2] [-1 1]] :scale [2 1]}

  (box/axis {:axis 1 :width 3 :color "black"})
  (box/axis {:axis 2 :width 3 :color "black"})
  (box/grid {:width 2 :divideX 20 :divideY 10})))

;; As the on-screen size of elements depends on the position of the camera, we
;; can calibrate our units by setting the `focus` on the `<root>` to match the
;; camera distance. Set options on `<root>` by passing them to
;; `mathbox.core/MathBox`:

^{::clerk/width :wide}
(box/mathbox
 {:container {:style {:height "400px" :width "100%"}}
  :focus 3}
 (box/camera {:position [0 0 3] :proxy true})
 (box/cartesian
  {:range [[-2 2] [-1 1]] :scale [2 1]}

  (box/axis {:axis 1 :width 3 :color "black"})
  (box/axis {:axis 2 :width 3 :color "black"})
  (box/grid {:width 2 :divideX 20 :divideY 10})))

;; Which gives us:

;; ```jsx
;; <root focus={3}>
;;   <camera proxy={true} position={[0, 0, 3]} />
;;   <cartesian range={[[-2, 2], [-1, 1]]} scale={[2, 1]}>
;;     <axis axis={1} width={3} color="black" />
;;     <axis axis={2} width={3} color="black" />
;;     <grid width={2} divideX={20} divideY={10} />
;;   </cartesian>
;; </root>
;; ```

;; ### Add some data and draw it

;; Now we'll draw a moving sine wave. First we create an `mathbox.primitives/Interval`. This is
;; a 1D array, sampled over the cartesian view's range. It contains an `:expr`,
;; an expression to generate the data points.

;; We [make a new
;; component](https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md)
;; that generates 64 points, each with two `:channels`, i.e. `X` and `Y` values.
;; This value sets the number of items that are emitted with each call to
;; `emit`.

(def data
  (box/interval
   {:expr '(fn [emit x _i t]
             (emit x (Math/sin (+ x t))))
    :width 64
    :channels 2}))

;; Here, `x` is the sampled X coordinate, `_i` is the array index (0-63), and
;; `t` is clock time in seconds, starting from 0. The use of `emit` is similar
;; to `return`ing a value. It is used to allow multiple values to be emitted
;; very efficiently.

;; Once we have the data, we can draw it, by [creating a new
;; component](https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md)
;; called `Curve` that adds on an `mathbox.primitives/Line`. The target of the line is, by
;; default, the previous entry in the component tree.
;;
;; > Note the use of [React fragments](https://reactjs.org/docs/fragments.html)
;; here; we can bundle up many components by putting them into a vector starting
;; with `:<>`.

(def curve
  [:<>
   data
   (box/line {:width 5 :color "#3090FF"})])

;; Note that we've used an HTML hex color instead of a named color. CSS syntax
;; like `"rgb(255,128,53)"` works too.

;; Add a `Curve` instance to the component tree:

^{::clerk/width :wide}
(box/mathbox
 {:container {:style {:height "400px" :width "100%"}}
  :focus 3}
 (box/camera {:position [0 0 3] :proxy true})
 (box/cartesian
  {:range [[-2 2] [-1 1]] :scale [2 1]}

  (box/axis {:axis 1 :width 3 :color "black"})
  (box/axis {:axis 2 :width 3 :color "black"})
  (box/grid {:width 2 :divideX 20 :divideY 10})
  curve))

;; The DOM now looks like:

;; ```jsx
;; <root focus={3}>
;;   <camera proxy={true} position={[0, 0, 3]} />
;;   <cartesian range={[[-2, 2], [-1, 1]]} scale={[2, 1]}>
;;     <axis axis={1} width={3} color="black" />
;;     <axis axis={2} width={3} color="black" />
;;     <grid width={2} divideX={20} divideY={10} />
;;     <interval expr={(emit, x, i, t) => {
;;           emit(x, Math.sin(x + t));
;;         }} width={64} channels={2} />
;;     <line width={5} color="#3090FF" />
;;   </cartesian>
;; </root>
;; ```

;; ### Add more shapes

;; The nice thing about separating data from shape is that you can draw the same
;; data multiple ways. For example, add on an `mathbox.primitives/Point` component to draw
;; points as well along them length of the data interval:

^{::clerk/width :wide}
(box/mathbox
 {:container {:style {:height "400px" :width "100%"}}
  :focus 3}
 (box/camera {:position [0 0 3] :proxy true})
 (box/cartesian
  {:range [[-2 2] [-1 1]] :scale [2 1]}

  (box/axis {:axis 1 :width 3 :color "black"})
  (box/axis {:axis 2 :width 3 :color "black"})
  (box/grid {:width 2 :divideX 20 :divideY 10})
  curve
  (box/point {:size 8 :color "#3090FF"})))

;; The different shapes available are documented in
;; the [`mathbox.primitives.draw`
;; namespace](https://cljdoc.org/d/org.mentat/mathbox.cljs/CURRENT/api/mathbox.primitives.draw)
;; Points, lines and surfaces are pretty obvious and do what they say on the
;; tin. e.g. Fill a 2D `mathbox.primitives/Area` with data and pass it to a `mathbox.primitives/Surface` to draw
;; a solid triangle mesh.

;; For vectors, faces and strips, the situation changes. To draw 64 vectors as
;; arrows, you need 128 points: a start and end for each. Thus the data has to
;; change. We set `items` to 2 and emit two points per iteration. We also add on
;; a green `mathbox.primitives/Vector` to draw the data:

(def Vector
  [:<>
   (box/interval
    {:expr '(fn [emit x _i t]
              (emit x 0)
              (emit x (- (Math/sin (+ x t)))))
     :width 64
     :channels 2
     :items 2})
   (box/vector
    {:end true
     :width 5
     :color "#50A000"})])

;; > As an alternative to `:expr`, you can also supply an array of `:data`,
;; > either constant or changing, flat or nested. MathBox will iterate over it
;; > and emit it for you, picking up any live data. If your data does not
;; > change, you can set `:live false` to optimize.

;; Render the scene again after adding the new `Vector` component to the end:

^{::clerk/width :wide}
(box/mathbox
 {:container {:style {:height "400px" :width "100%"}}
  :focus 3}
 (box/camera {:position [0 0 3] :proxy true})
 (box/cartesian
  {:range [[-2 2] [-1 1]] :scale [2 1]}

  (box/axis {:axis 1 :width 3 :color "black"})
  (box/axis {:axis 2 :width 3 :color "black"})
  (box/grid {:width 2 :divideX 20 :divideY 10})

  curve
  (box/point {:size 8 :color "#3090FF"})

  Vector))

;; ### Add some floating labels

;; Finally we'll label our coordinate system. First we need to establish a
;; `mathbox.primitives/Scale`, which will divide our view into nice intervals.

;; ```clj
;; (box/scale {:divide 10})
;; ```

;; We can draw our scale as tick marks with `mathbox.primitives/Ticks`:

;; ```clj
;; (box/ticks {:width 5 :size 15 :color "black"})
;; ```

;; Now we need to format our numbers into rasterized text:

;; ```clj
;; (box/format {:digits 2 :weight "bold"})
;; ```

;; And finally draw the text as floating labels:

;; ```clj
;; (box/label {:color "red" :zIndex 1})
;; ```

;; Adding all of these components yields the following scene:

^{::clerk/width :wide}
(box/mathbox
 {:container {:style {:height "400px" :width "100%"}}
  :focus 3}
 (box/camera {:position [0 0 3] :proxy true})
 (box/cartesian
  {:range [[-2 2] [-1 1]]
   :scale [2 1]}

  (box/axis {:axis 1 :width 3 :color "black"})
  (box/axis {:axis 2 :width 3 :color "black"})
  (box/grid {:width 2 :divideX 20 :divideY 10})

  curve
  (box/point {:size 8 :color "#3090FF"})
  Vector

  (box/scale {:divide 10})
  (box/ticks {:width 5 :size 15 :color "black"})
  (box/format {:digits 2 :weight "bold"})
  (box/label {:color "red"
              :zIndex 1})))

;; Here we apply `:zIndex` similar to CSS to ensure the labels overlap in 2D
;; rather than being placed in 3D. It specifies a layer index, with 0 being the
;; default, and layers `1...n` stacking on top. Negative `:zIndex` is not
;; allowed.

;; > Unlike CSS, large `:zIndex` values are not recommended, as the higher the
;; > `:zIndex` the less depth resolution you have.

;; ### Make it move

;; Finally we'll add on a little bit of animation by adding a `mathbox.primitives/Play` block.

^{::clerk/width :wide}
(box/mathbox
 {:container {:style {:height "400px" :width "100%"}}
  :focus 3}
 (box/camera {:position [0 0 3] :proxy true})
 (box/cartesian
  {:range [[-2 2] [-1 1]]
   :scale [2 1]}

  (box/axis {:axis 1 :width 3 :color "black"})
  (box/axis {:axis 2 :width 3 :color "black"})
  (box/grid {:width 2 :divideX 20 :divideY 10})

  curve
  (box/point {:size 8 :color "#3090FF"})

  Vector

  (box/scale {:divide 10})
  (box/ticks {:width 5 :size 15 :color "black"})
  (box/format {:digits 2 :weight "bold"})
  (box/label {:color "red"
              :zIndex 1})

  (box/play
   {:target "cartesian"
    :pace 5
    :to 2
    :loop true
    :script
    [{:props {:range [[-2 2] [-1 1]]}}
     {:props {:range [[-4 4] [-2 2]]}}
     {:props {:range [[-2 2] [-1 1]]}}]})))

;; Here `:script` defines the keyframes we'll be animating through. We specify
;; `:props` will change, namely the `:range`. We pass in the keyframes as an
;; array, which will assign them to evenly spaced keyframes `(0, 1, 2)`.

;; We set the `:pace` of the animation to 5 seconds per step, tell it to play
;; till keyframe time `2` and to `:loop` afterwards.
