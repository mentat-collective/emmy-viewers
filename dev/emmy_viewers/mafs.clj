^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy-viewers.mafs
  #:nextjournal.clerk
  {:toc true :no-cache true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.mafs :as mafs]
            [emmy.viewer :as ev]
            [mentat.clerk-utils.docs :as docs]
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk :as clerk]))

{::clerk/width :wide}

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; # Mafs.cljs
;;
;; A [Reagent](https://reagent-project.github.io/) interface to
;; the [Mafs](https://mafs.dev/) interactive 2d math visualization library.

;; ## What is Mafs?
;;
;; [Mafs](https://mafs.dev) is a JavaScript library for building declarative,
;; interactive 2d mathematical scenes.

;; For example, here is an example of an interactive scene representing
;; a [vector field](https://en.wikipedia.org/wiki/Vector_field). Parameters of
;; the vector field are tuned by dragging around a highlighted movable point in
;; the scene:

;; > The 'show code' link below will expand the example's source.


^{::clerk/visibility {:code :fold}}
(ev/with-let [!point [0.6 0.6]]
  (mafs/mafs
   {:height 300}
   (mafs/cartesian {:subdivisions 2})
   (mafs/vector-field
    {:step 0.5
     :xy (ev/with-params {:atom !point :params [0 1]}
           (fn [ax ay]
             (fn [[x y]]
               [(- (- y ay) (- x ax))
                (- (- (- x ax)) (- y ay))])))
     :xy-opacity
     (fn [[x y]]
       (/ (+ (abs x) (abs y))
          10))})
   (mafs/movable-point {:atom !point})))

;; [Mafs.cljs](https://github.com/mentat-collective/mathbox.cljs) extends Mafs
;; with set of [Reagent](https://reagent-project.github.io/) components that
;; make it easy to define Mafs constructions inside of a user interface built
;; with ClojureScript.

;; ## Quickstart

;; Require `mafs.core` and any of the component namespaces that you'd like to
;; use in your ClojureScript namespace:

;; ```clj
;; (ns my-app
;;   (:require [emmy.mafs :as mafs]))
;; ```
;;
;; You'll also need to include the stylesheets that ship with `mafs`. If you're
;; using Clerk
;; and [`clerk-utils`](https://github.com/mentat-collective/clerk-utils), add
;; this form to `dev/user.clj`:

;; ```clj
;; (mentat.clerk-utils.css/set-css!
;;  "https://unpkg.com/mafs@0.18.8/core.css"
;;  "https://unpkg.com/computer-modern@0.1.2/cmu-serif.css"
;;  "https://unpkg.com/mafs@0.18.8/font.css")
;; ```
;;
;; Otherwise find some way to load these CSS files in your project's header.
;;
;; > See the [guide on
;; > https://mafs.dev](https://mafs.dev/guides/get-started/installation) for
;; > more details on the stylesheets. `core.css` is required, the other two are
;; > optional.
;;
;; The next section walks you through construction of your first Mafs scene.

;; ## Hello f(x)

;; Documentation often starts with "Hello, world". For this library, the
;; equivalent example is rendering a function on the coordinate plane and making
;; it a little bit interactive.

;; ### Drawing a coordinate plane

;; Mafs only needs a few components to set up a working coordinate plane view.
;; We'll start with the same setup we had in “Installation” — just a Cartesian
;; coordinate plane with nothing too interesting on it.

(mafs/mafs
 (mafs/cartesian))

;; `Cartesian` is pretty customizable. Let's make our graph a little bit more
;; sophisticated-looking by adding some subdivisions.

(mafs/mafs
 (mafs/cartesian {:subdivisions 4}))

;; ### Plotting a function

;; Plotting a function works by passing a Clojure function defined with Emmy
;; TODO or a literal clojureScript function. Let's plot `(sin x)`.

(mafs/mafs
 (mafs/cartesian {:subdivisions 4})
 (mafs/of-x {:y sin}))

;; We've passed a plain ClojureScript function, and Mafs evaluated it and
;; plotted it across the coordinate plane.

;; This looks a little weird though: sine waves are periodic in $\pi$, so it'd
;; be nice to reflect that in our coordinate plane. Let's do the following:

;; - Tell the x-axis to draw a line at every multiple of $\pi$
;; - Label the x-axis in terms of $\pi$
;; - Zoom the x-axis out a bit
;; - Zoom the y-axis in a bit
;; - Tell Mafs to let us squish the viewport

(mafs/mafs
 {:view-box {:x [-10 10] :y [-2 2]}
  :preserve-aspect-ratio false}
 (mafs/cartesian
  {:subdivisions 4
   :x-axis
   {:lines Math/PI
    :labels 'emmy.viewer.plot/label-pi}})
 (mafs/of-x {:y sin}))

;; At this point, it's worth noting that you haven't _instructed_ the library to
;; do anything — you've just declared what you want on the screen. This model of
;; programming is core to [React](https://reactjs.org/)
;; and [Reagent](https://reagent-project.github.io/), and also core to this
;; library.

;; ### Making things interactive

;; If you imagine holding what you've just built in your hands, it would feel
;; only natural to slide the wave back and forth to adjust the phase. Let's add
;; a movable point and hook it up to our function.

(ev/with-let [!phase [0 0]]
  [:<>
   (mafs/mafs
    {:view-box {:x [-10 10] :y [-2 2]}
     :preserve-aspect-ratio false}
    (mafs/cartesian
     {:subdivisions 4
      :x-axis
      {:lines Math/PI
       :labels 'emmy.viewer.plot/label-pi}})
    (mafs/of-x
     {:y (ev/with-params {:atom !phase :params [0]}
           (fn [shift]
             (fn [x]
               (sin (- x shift)))))})
    (mafs/movable-point
     {:atom !phase
      :constrain "horizontal"}))
   [:pre
    (q (str "Phase shift: " (first @~!phase)))]])

;; There are a few noteworthy things here: one is how we declared our
;; `mafs/movable-point`. We start centered on the origin by setting the initial
;; value of `!phase` to `[0 0]`, then constrain the motion of the point
;; horizontally by passing `:constrain "horizontal"`. Adding the point after the
;; plot and grid makes sure that the point is rendered on top of everything else
;; in the scene.

;; Also worth noting is how we subtracted `(first @!phase)` from the `x` in our
;; sine function. This is just math — we're moving our wave side-to-side based
;; on the point's position.

;; ### Up Next

;; The remainder of these guides are more specific: they cover components you
;; can add to your visualization. The rest is up to you and your imagination.

;; ## Mafs.cljs via SCI
;;
;; `Mafs.cljs` is compatible with [SCI, the Small Clojure
;; Interpreter](https://github.com/babashka/sci).
;;
;; To install `Mafs.cljs` into your SCI context, require
;; the [`mafs.sci`](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/api/mafs.sci)
;; namespace and call `mafs.sci/install!`:

;; ```clj
;; (ns myproject.sci-extensions
;;   (:require [mafs.sci]))

;; (mafs.sci/install!)
;; ```
;;
;; If you want more granular control, see the [cljdoc page for
;; `mafs.sci`](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/api/mafs.sci)
;; for an SCI config and distinct SCI namespace objects that you can piece
;; together.
;;
;; > Note that `Mafs.cljs` does not ship with a dependency on SCI, so you'll
;; > need to install your own version.
;;
;; ## Mafs.cljs via Clerk
;;
;; Using `Mafs.cljs` with Nextjournal's [Clerk](https://clerk.vision/) gives you
;; the ability to write notebooks like this one with embedded 2D graphs.
;;
;; Doing this requires that you generate a custom ClojureScript build for your
;; Clerk project. The easiest way to do this for an existing project is with
;; the [`clerk-utils` project](https://clerk-utils.mentat.org/). Follow the
;; instructions on the [`clerk-utils` guide for custom
;; ClojureScript](https://clerk-utils.mentat.org/#custom-clojurescript-builds).
;;
;; If this is your first time using Clerk, use the [`mafs/clerk` template
;; described below](#project-template) to generate a new project with all steps
;; described in ["Mafs.cljs via SCI"](#mafs.cljs-via-sci) already completed.

;; ## Project Template
;;
;; `Mafs.cljs` includes
;; a [`deps-new`](https://github.com/seancorfield/deps-new) template called
;; [`mafs/clerk`](https://github.com/mentat-collective/mafs.cljs/tree/main/resources/mafs/clerk)
;; that makes it easy to configure a new Clerk project with everything described
;; in ["Mafs.cljs via SCI"](#mafs.cljs-via-sci) already configured.

;; First, install the [`deps-new`](https://github.com/seancorfield/deps-new) tool:

;; ```sh
;; clojure -Ttools install io.github.seancorfield/deps-new '{:git/tag "v0.5.0"}' :as new
;; ```

;; To create a new Clerk project based on
;; [`mafs/clerk`](https://github.com/mentat-collective/mafs.cljs/tree/main/resources/mafs/clerk)
;; in a folder called `my-notebook-project`, run the following command:

^{::clerk/visibility {:code :hide}}
(clerk/md
 (format "
```sh
clojure -Sdeps '{:deps {io.github.mentat-collective/mafs.cljs {:git/sha \"%s\"}}}' \\
-Tnew create \\
:template mafs/clerk \\
:name myusername/my-notebook-project
```" (docs/git-sha)))

;; The `README.md` file in the generated project contains information on how to
;; develop within the new project.

;; If you have an existing Clerk notebook project and are considering adding
;; `Mafs.cljs`, you might consider
;; using [`mafs/clerk`](https://github.com/mentat-collective/mafs.cljs/tree/main/resources/mafs/clerk)
;; to get some ideas on how to structure your own project.

;; ## Components

;; ### Mafs

;; This component is the entrypoint into rendering visualizations. It must wrap
;; all other Mafs components. On its own, it renders a blank canvas.

(mafs/mafs
 {:height 200}
 (mafs/text "I love math!"))

;; #### Sizing

;; Mafs accepts a `:width` and `:height` prop. `:width` defaults to `"auto"`,
;; which means that Mafs will scale to the width of its container. `:height`
;; defaults to `"500px"` and cannot be set to "auto".

;; #### Zooming and panning

;; Mafs can be zoomed and panned by end users using a variety of input methods.
;; Zooming and panning can be enabled, disabled, and configured via the `:zoom`
;; and `:pan` props.

;; - The mouse wheel zooms the viewport.
;; - Pressing and dragging pans the viewport.
;; - The "pinch" gesture zooms and pans the viewport simultaneously.
;; - The arrow, -, and + keys pan and zoom the viewport, with the `option`,
;;   `meta` and `shift` keys adjusting the speed.

;; Panning is enabled by default, but zooming is opt-in. The default zoom limits
;; are `{:min 0.5 :max 0.5}`.

(mafs/mafs
 {:zoom {:min 0.1 :max 2}
  :view-box {:x [-0.25 0.25]
             :y [-0.25 0.25]
             :padding 0}}
 (mafs/cartesian
  {:subdivisions 5})
 (mafs/circle {:center [0 0]
               :radius 1})
 (mafs/text "Oh hi!" {:x 1.1 :y 0.1 :attach "ne"}))

;; #### Viewbox

;; When showing a visualization, it's useful to think of your content as having
;; a useful "viewbox" designating the region in which interesting things are
;; happening. Mafs allows you to specify this with the `:view-box` prop.

(mafs/mafs
 {:view-box {:x [-5 5]
             :y [-5 5]}}
 (mafs/cartesian)
 (mafs/polygon {:points [[-5 -5] [5 -5] [5 5] [-5 5]]}))

;; #### Aspect ratio preservation

;; The `:preserve-aspect-ratio` prop changes how the viewbox is mapped to the
;; Mafs viewport. Setting it to false will stretch the viewbox to fit the
;; viewport, tossing aside the aspect ratio preservation.

(mafs/mafs
 {:view-box {:x [-5 5]
             :y [-5 5]}
  :preserve-aspect-ratio false}
 (mafs/cartesian)
 (mafs/polygon {:points [[-5 -5] [5 -5] [5 5] [-5 5]]}))

;; The only other supported value is `"contain"` for now, which is also the
;; default.

;; #### Padding

;; Mafs adds a `:padding` of `0.5` to all visualizations by default. To change
;; or remove padding, you can specify `:padding` in the `:view-box` value.

(mafs/mafs
 {:view-box {:x [-5 5]
             :y [-5 5]
             :padding 0}}
 (mafs/cartesian)
 (mafs/polygon {:points [[-5 -5] [5 -5] [5 5] [-5 5]]}))

;; ### Coordinates

;; Coordinates overlay a grid of lines on top of the Mafs canvas to give a sense
;; of scale. Axes are pretty configurable — the spacing between lines, number of
;; subdivisions, and the labels themselves can be altered.

;; #### Cartesian Coordinates

(mafs/mafs
 (mafs/cartesian))

;; ##### Axis options

;; Each axis — `:x-axis` and `:y-axis` - can be configured with the following
;; options:

;; - `:axis`: Whether to draw the axis line.
;; - `:lines`: The spacing between each primary line orthogonal to the axis, or
;;   `false` to draw none.
;; - `:subdivisions`: How many subdivisions to draw per line, or `false` to draw none.
;; - `:labels`: A function that returns a label for each line.

;; The entire axis can also be set to `false` to disable it entirely.

;; Emmy also exports a helper function, `emmy.viewer.plot/label-pi` which can be
;; passed to `:labels` to render in terms of $\pi$.

(mafs/mafs
 {:view-box {:x [-8 8]
             :y [(* 2 (- Math/PI))
                 (* 2 Math/PI)]
             :padding (/ Math/PI 2)}
  :preserve-aspect-ratio false}
 (mafs/cartesian
  {:x-axis
   {:lines 1
    :labels '(fn [n] (if (odd? n) n ""))}
   :y-axis
   {:lines Math/PI
    :subdivisions 4
    :labels 'emmy.viewer.plot/label-pi}}))

;; #### Polar Coordinates

(mafs/mafs
 (mafs/polar
  {:subdivisions 5
   :lines 2}))

;; ##### Axis options

;; Polar coordinates take most of the same options as cartesian coordinates,
;; except that `:lines` and `:subdivisions` affects the radial rather than the
;; `x` and `y` axes.

;; ### Point

;; Points are dots that can be rendered at a location `(x, y)`.

(mafs/mafs
 (mafs/cartesian)
 (mafs/point {:x 1 :y 1}))

;; ### Line

;; There are a few components for lines, depending on how you want to construct
;; them.

;; #### Line Segment

(ev/with-let
  [!state {:point1 [-1 -1]
           :point2 [2 1]}]
  (mafs/mafs
   (mafs/cartesian)
   (mafs/segment (q @~!state))
   (mafs/movable-point
    {:atom !state
     :path :point1})
   (mafs/movable-point
    {:atom !state
     :path :point2})))

;; Line through two points

(ev/with-let
  [!state {:point1 [-1 -1]
           :point2 [2 1]}]
  (mafs/mafs
   (mafs/cartesian)
   (mafs/through-points (q @~!state))
   (mafs/movable-point
    {:atom !state
     :path :point1})
   (mafs/movable-point
    {:atom !state
     :path :point2})))

;; #### Point and slope

(ev/with-let
  [!state {:point [-1 -1]
           :slope [0 1]}]
  (mafs/mafs
   (mafs/cartesian)
   (mafs/point-slope
    {:point (q (:point @~!state))
     :slope (q (-> (:slope @~!state)
                   (second)))})
   (mafs/movable-point
    {:atom !state
     :path :point})
   (mafs/movable-point
    {:atom !state
     :path :slope
     :constrain "vertical"})))

;; #### Point and angle

(ev/with-let [!state [-1 -1]]
  (mafs/mafs {:view-box {:y [-1 1]}}
             (mafs/cartesian)
             (mafs/point-angle
              {:point (q @~!state)
               :angle (/ Math/PI 6)})
             (mafs/movable-point {:atom !state})))

;; ### Polygon

;; Polygons take a number of points and create a closed shape.

(let [a  [2 0]
      b  [-2 0]]
  (ev/with-let [!c [0 2]]
    (mafs/mafs
     (mafs/cartesian)
     (mafs/polygon
      {:points (q (let [[cx cy] @~!c]
                    [[cx (- cy)] ~a ~b]))
       :stroke-style "dashed"})
     (mafs/polygon
      {:points [(q @~!c) a b]
       :color :blue})
     (mafs/movable-point {:atom !c}))))

;; ### Circle

;; Circles take a center vector and a radius.

(ev/with-let [!point-on-circle
              [(/ (Math/sqrt 2) 2)
               (/ (Math/sqrt 2) 2)]]
  (mafs/mafs
   {:view-box {:y [-2 2]}}
   (mafs/cartesian)
   (mafs/circle
    {:center [0 0]
     :radius (q (mafs.vec/mag @~!point-on-circle))})
   (mafs/movable-point
    {:atom !point-on-circle})))

;; ### Ellipse

;; Ellipses take a center vector, radius vector, and an angle.

(let [hint-radius 3]
  (ev/with-state {:translate [0 0]
                  :rotate [hint-radius 0]
                  :width [-2 0]
                  :height [0 1]}
    (fn [!state]
      (mafs/mafs
       {:view-box {:x [-3 3] :y [-3 3]}}
       (mafs/cartesian)
       (mafs/transform
        {:translate (q (:translate @~!state))}
        (mafs/transform
         {:rotate (q (let [[x y] (:rotate @~!state)]
                       (Math/atan2 y x)))}
         ;; Display a little hint that the point is meant to move radially
         (mafs/circle
          {:center [0 0]
           :radius hint-radius
           :stroke-style "dashed"
           :stroke-opacity 0.3
           :fill-opacity 0})
         (mafs/ellipse
          {:center [0 0]
           :radius (q
                    (let [{[x _] :width [_ y] :height} @~!state]
                      [(Math/abs x) (Math/abs y)]))})
         (mafs/movable-point
          {:atom !state
           :path :width
           :constrain "horizontal"})
         (mafs/movable-point
          {:atom !state
           :path :height
           :constrain "vertical"}))
        (mafs/movable-point
         {:atom !state
          :path :rotate
          :color :blue
          :constrain '#(mafs.vec/with-mag % 3)}))
       (mafs/movable-point
        {:atom !state
         :path :translate
         :color :orange})))))

;; ### Plot

;; Mafs supports numerically plotting a number of function types by passing in
;; ClojureScript functions.

;; #### Functions of $x$ and $y$


(defn sigmoid1 [x]
  (- (/ 2 (+ 1 (exp (- x))))
     1))

(mafs/mafs
 (mafs/cartesian)
 (mafs/of-x {:y sin :color :blue})
 (mafs/of-y {:x sigmoid1 :color :pink}))

;; #### Parametric functions


(ev/with-let [!point [0.5 0]]
  (mafs/mafs {:view-box {:x [-1 1] :y [-1 1]}}
             (mafs/cartesian {:subdivisions 4})
             (mafs/parametric
              (q (let [k (* 25 (first @~!point) Math/PI)]
                   {:t [0 k]
                    :xy (fn [t]
                          [(Math/cos t) (* (/ t k) (Math/sin t))])})))
             (mafs/movable-point
              {:atom !point
               :constrain
               '(letfn [(clamp [x min max]
                          (cond
                            (> x max) max
                            (< x min) min
                            :else x))]
                  (fn [[x]] [(clamp x -1 1) 0]))})))

;; #### Vector fields

;; Vector fields take a function `:xy` that is passed a point `[x y]` and
;; returns a vector (a 2d js Array) at that point. Vectors are then artificially
;; scaled down (for legibility) and plotted on the coordinate plane. You must
;; also pass a `:step` to indicate how dense the vector field is.

(ev/with-let [!point [0.6 0.6]]
  (mafs/mafs
   (mafs/cartesian {:subdivisions 2})
   (mafs/vector-field
    {:step 0.5
     :xy (ev/with-params {:atom !point :params [0 1]}
           (fn [ax ay]
             (fn [[x y]]
               [(- (- y ay) (- x ax))
                (- (- (- x ax)) (- y ay))])))
     :xy-opacity
     (fn [[x y]]
       (/ (+ (abs x) (abs y))
          10))})
   (mafs/movable-point
    {:atom !point})))

;; #### Render quality

;; ##### Function sampling

;; `mafs/of-x`, `mafs/of-y`, and `mafs/parametric` use numerical
;; methods for evaluating a function and attempting to plot it accurately. The
;; approach works well for most functions, but it's far from perfect.

;; Mafs samples functions by by recursively subdividing the domain until an
;; estimated error threshold is met (or the recursion limit limit is reached).

;; ##### Sampling depth

;; To force more subdivisions (and therefore improve quality), the
;; `:min-sampling-depth` and `:max-sampling-depth` props can be tuned.
;; Increasing `:min-sampling-depth` can help when you want to ensure more
;; subdivisions and improve accuracy, and lowering `:max-sampling-depth` can
;; help improve performance. These two props should be tuned to meet your needs.

;; Here's an example of a common "stress test" function for plotters,
;; `sin(1/x)`. The top plot has the default sampling depths, while the bottom
;; has `:min-sampling-depth` increased to `15`, Neither approach is perfect, but
;; the bottom render is indistinguishable from a perfect plot.

(let [f (fn [x] (sin (/ 1 x)))]
  (mafs/mafs
   {:view-box {:x [(/ -1 32) (/ 1 32)]
               :y [-3.5 3.5]
               :padding 0}
    :preserve-aspect-ratio false}
   (mafs/cartesian)
   (mafs/of-x {:y (fn [x] (+ (f x) 3/2))})
   (mafs/of-x {:y (fn [x] (- (f x) 3/2))
               :min-sampling-depth 15})))

;; ##### Vector fields

;; Vector field rendering quality can be tuned with the `:step` prop. This
;; declares the spacing between arrows, so lowering it will decrease
;; performance.

;; ### Text

;; The `mafs/text` component is a pretty lightweight wrapper around SVG's
;; `text`, namely that the anchor point is mapped to coordinate space. The
;; optional `:attach` will orient the text along a cardinal direction (`"n"`,
;; `"s"`, `"nw"` etc.)

(ev/with-let [!point [0.6 0.6]]
  (mafs/mafs
   {:view-box {:y [0 2] :x [-3 5]}}
   (mafs/cartesian)
   (q (let [[x y] @~!point
            desc  (str "(" (.toFixed x 3)  ", " (.toFixed y 3) ")")
            opts  {:x x :y y :attach-distance 15}]
        [:<>
         [mafs.core/Text (assoc opts :attach "w") desc]
         [mafs.core/Text (assoc opts :attach "e") desc]]))
   (mafs/movable-point {:atom !point})))

;; ### Vector

;; Vectors are a handy line-and-arrow shape for visualizing direction and
;; magnitude.

;; Mafs ships with a small selection of common linear algebra functions (for
;; both vectors and matrices), exposing them as `mafs.vec` and `mafs.matrix`.
;; Those utilities are used extensively here.

(ev/with-let [!point [0.4 0.6]]
  (q (let [[x y :as vec1] @~!point
           angle (Math/atan2 y x)
           vec2  (mafs.vec/add vec1 (mafs.vec/rotate vec1 angle))
           vec3  (mafs.vec/add vec1 (mafs.vec/rotate vec2 (* -2 angle)))]
       ~(mafs/mafs
         (mafs/cartesian)
         (mafs/vector {:tip 'vec1})
         (mafs/vector {:tail 'vec1 :tip 'vec2})
         (mafs/vector {:tail 'vec2 :tip 'vec3})
         (mafs/movable-point {:atom !point})))))

;; ### Transform

;; Sometimes it can be useful to apply 2D transformations to one or more
;; components collectively. This is where `mafs/transform` comes in handy.

#_(show-sci
   (defn HelloBox []
     [:<>
      (mafs/polygon {:points [[0 0] [1 0] [1 1] [0 1]]})
      (mafs/circle {:center [0.5 0.5] :radius 0.5})
      (mafs/text {:x 0.5 :y 0.5}
                 "Hello world!")])

   (ev/with-let
     [!state
      (reagent/atom {:translate [-4 -2]
                     :rotate [1 0]
                     :scale [8 4]})]
     (mafs/mafs {:view-box {:x [-8 8] :y [-3 3]}}
                (mafs/cartesian)
                (mafs/transform {:translate (:translate @!state)}
                                (mafs/transform {:rotate
                                                 (let [[x y] (:rotate @!state)]
                                                   (Math/atan2 y x))}
                                                (mafs/transform {:scale (:scale @!state)}
                                                                [HelloBox])
                                                (mafs/movable-point {:atom !state
                                                                     :path :scale
                                                                     :color :blue}))
                                (mafs/movable-point {:atom !state
                                                     :path :rotate
                                                     :color :green
                                                     :constrain mafs.vec/normalize}))
                (mafs/movable-point {:atom !state
                                     :path :translate}))))

;; #### Transformation Types

;; `mafs/transform` supports many transformation convenience props, but they all
;; boil down to matrix multiplication.

;; You can pass your own matrix via the `:matrix` prop and it will be combined
;; with any other transformations you define. Use `mafs.matrix/create` and the
;; various `mafs.matrix` constructors to construct such a matrix if needed.

;; ##### Nesting

;; Nesting is supported. Transformations will be applied _inside out_, so the
;; innermost `mafs/transform` will be applied first.

;; ```clj
;; (mafs/transform {:translate [10 10]}
;;  (mafs/transform {:rotate (/ Math/PI 2)}
;;   ;; components in here will be rotated, THEN translated))
;; ```
;; #### Exceptions

;; Not all elements support `mafs/transform`. This may change in the future.

;; - Text nodes have their _anchor points_ transformed, but not the text itself.
;; - Components in `mafs` cannot be transformed.
;; - `mafs/of-x` cannot be transformed.
;; - `mafs/vector-field` cannot be transformed.

;; ### Debug

;; Mafs provides a few utilities for debugging or experimentation, underneath
;; the `mafs.debug` namespace.

;; #### Transform widget

;; This is a little widget that allows you to test applying
;; transforms (translation, rotation, and scale) to components by wrapping them
;; in `mafs.debug/TransformWrapper`. It's mainly useful when building new custom
;; components.

(defn pizza-slice []
  (let [mask-id
        (str "pizza-slice-mask-"
             (-> (Math/random)
                 (str)
                 (.substring 2 9)))]
    [:g {:style
         {:transform "var(--mafs-view-transform) var(--mafs-user-transform)"}}
     [:defs {}
      [:mask {:id mask-id}
       [:polyline {:points "0,0 1,0.5 1,-0.5"
                   :fill "white"}]]]
     [:g {:mask (str "url(#" mask-id ")")}
      [:circle {:cx 0 :cy 0 :r 1 :fill "brown"}]
      [:circle {:cx 0 :cy 0 :r 0.85 :fill "yellow"}]
      [:circle {:cx 0.4 :cy 0.1 :r 0.11 :fill "red"}]
      [:circle {:cx 0.2 :cy -0.1 :r 0.09 :fill "red"}]
      [:circle {:cx 0.5 :cy -0.15 :r 0.1 :fill "red"}]
      [:circle {:cx 0.7 :cy 0.05 :r 0.11 :fill "red"}]
      [:circle {:cx 0.65 :cy 0.35 :r 0.1 :fill "red"}]
      [:circle {:cx 0.65 :cy -0.37 :r 0.08 :fill "red"}]]]))

(mafs/mafs
 {:view-box {:x [-1 1] :y [-1 1]}}
 (mafs/cartesian)
 (mafs/transform-widget
  (pizza-slice)))

;; #### Viewport info

;; This component displays Mafs' understanding of the world space that's in
;; view, showing both the minimum and maximum `x` and `y` values, as well as
;; what panes are visible according to the pane context.

(mafs/mafs {:view-box {:x [-1 1] :y [-1 1]}}
           (mafs/cartesian)
           (mafs/viewport-info))

;; ### Movable Points

;; Movable points can be dragged around the coordinate plane, or moved via the
;; keyboard. They're the cornerstone of lots of interactions.

;; They can be unconstrained (allowed to move freely), constrained horizontally
;; or vertically, or constrained to an arbitrary function. This example
;; constrains movement horizontally:

(ev/with-let [!sep [1 0]]
  (q (let [n 10
           f (fn [x]
               (Math/pow (/ x 2) 2))
           points (fn [sep-x]
                    (when-not (zero? sep-x)
                      (range (* (- n) sep-x)
                             (* (+ n 0.5) sep-x)
                             sep-x)))]
       [:<>
        ~(mafs/mafs
          {:view-box {:x [0 0] :y [-1.3 4.7]}}
          (mafs/cartesian)
          (mafs/of-x {:y '(do f)})
          (q (into [:<>]
                   (map-indexed
                    (fn [i x]
                      [mafs.core/Point {:key i :x x :y (f x)}]))
                   (points (first @~!sep))))
          (mafs/movable-point
           {:atom !sep
            :constrain "horizontal"}))
        [:pre
         (str "Separation: " (first @~!sep))]])))

;; #### Constraints

;; Beyond constraining horizontally or vertically, points can also be
;; constrained to arbitrary paths. This is done by passing a function to
;; `:constrain`. The function is expected to take a point `[x y], which is where
;; the user is trying to move to, and to return a new point, `[x' y']`, which is
;; where the point should _actually_ go.
;;
;; > Note that for now you'll need to return a `js/Array` instead of a vector.

;; To demonstrate this, imagine constraining a point to "snap" to the nearest
;; whole number point. We take where the user is trying to move to, and round it
;; to the nearest whole number.

;; ```clj
;; (mafs/movable-point
;;  {:constrain '(fn [[x y]]
;;                 (js/Array.
;;                  (Math/round x)
;;                  (Math/round y)))})
;; ```

;; Another common use case is to constrain motion to be circular —
;; `mafs.vec/with-mag` comes in handy there.

;; ```clj
;; (mafs/movable-point
;;  {:constrain '(fn [point]
;;                 (clj->js
;;                  (mafs.vec/with-mag point 1)))})
;; ```

;; You can also constrain a point to follow a straight line by setting constrain
;; to `"horizontal"` or `"vertical"`.

;; Mafs may call `:constrain` more than once when the user moves a point using
;; the arrow keys, so it should be side-effect free.
