(ns emmy.jsxgraph
  "Server-side rendering functions for the components declared in the
  [`jsxgraph.core`](https://cljdoc.org/d/org.mentat/jsxgraph.cljs/CURRENT/api/jsxgraph.core)
  namespace of the [`JSXGraph.cljs` project](https://leva.mentat.org)."
  (:require [emmy.viewer :as ev]))

;; ## Main Component

(defn jsxgraph
  "Top-level Reagent component used to represent a JSXGraph board. Takes

  - a `keyword => value` map of attributes (see the `attributes` section under
    `Parameters` at [this
    page](https://jsxgraph.org/docs/symbols/JXG.JSXGraph.html)) for allowed values

  - Any number of child components representing `JSXGraph` elements.

  Child components are added to the board in the order that they're listed. A
  full re-render is triggered any time any of the properties of the board or any
  child component changes.

  Pass `:id` and/or `:style` to configure the `div` into which the controlled
  instance of `JXG.Board` mounts itself.

  If you need access to the actual instance of
  a [`JXG.Board`](https://jsxgraph.org/docs/symbols/JXG.Board.html), pass a
  callback function using the `:ref` keyword. The `:ref` function receives an
  instance of the board when it is mounted, and `nil` when the board is
  destroyed or remounted."
  [& children]
  (ev/fragment
   (into ['jsxgraph.core/JSXGraph] children)))

;; ## Child Components

(defn angle
  "Fragment that represents a Reagent component representing
  the [Angle](https://jsxgraph.org/docs/symbols/Angle.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Angle.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Angle opts]))

(defn arc
  "Fragment that represents a Reagent component representing
  the [Arc](https://jsxgraph.org/docs/symbols/Arc.html) JSXGraph element. This
  component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Arc.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Arc opts]))

(defn arrow
  "Fragment that represents a Reagent component representing
  the [Arrow](https://jsxgraph.org/docs/symbols/Arrow.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Arrow.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Arrow opts]))

(defn arrow-parallel
  "Fragment that represents a Reagent component representing
  the [ArrowParallel](https://jsxgraph.org/docs/symbols/ArrowParallel.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/ArrowParallel.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/ArrowParallel opts]))

(defn axis
  "Fragment that represents a Reagent component representing
  the [Axis](https://jsxgraph.org/docs/symbols/Axis.html) JSXGraph element. This
  component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Axis.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Axis opts]))

(defn bisector
  "Fragment that represents a Reagent component representing
  the [Bisector](https://jsxgraph.org/docs/symbols/Bisector.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Bisector.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Bisector opts]))

(defn bisector-lines
  "Fragment that represents a Reagent component representing
  the [Bisectorlines](https://jsxgraph.org/docs/symbols/Bisectorlines.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Bisectorlines.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Bisectorlines opts]))

(defn boxplot
  "Fragment that represents a Reagent component representing
  the [Boxplot](https://jsxgraph.org/docs/symbols/Boxplot.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Boxplot.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Boxplot opts]))

(defn button
  "Fragment that represents a Reagent component representing
  the [Button](https://jsxgraph.org/docs/symbols/Button.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Button.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Button opts]))

(defn cardinal-spline
  "Fragment that represents a Reagent component representing
  the [CardinalSpline](https://jsxgraph.org/docs/symbols/CardinalSpline.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/CardinalSpline.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/CardinalSpline opts]))

(defn chart
  "Fragment that represents a Reagent component representing
  the [Chart](https://jsxgraph.org/docs/symbols/Chart.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Chart.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Chart opts]))

(defn checkbox
  "Fragment that represents a Reagent component representing
  the [Checkbox](https://jsxgraph.org/docs/symbols/Checkbox.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Checkbox.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Checkbox opts]))

(defn circle
  "Fragment that represents a Reagent component representing
  the [Circle](https://jsxgraph.org/docs/symbols/Circle.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Circle.html), the map must contain an
  "
  [opts]
  (ev/fragment
   ['jsxgraph.core/Circle opts]))

(defn circumcenter
  "Fragment that represents a Reagent component representing
  the [Circumcenter](https://jsxgraph.org/docs/symbols/Circumcenter.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Circumcenter.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Circumcenter opts]))

(defn circumcircle
  "Fragment that represents a Reagent component representing
  the [Circumcircle](https://jsxgraph.org/docs/symbols/Circumcircle.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Circumcircle.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Circumcircle opts]))

(defn circumcircle-arc
  "Fragment that represents a Reagent component representing
  the [CircumcircleArc](https://jsxgraph.org/docs/symbols/CircumcircleArc.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/CircumcircleArc.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/CircumcircleArc opts]))

(defn circumcircle-sector
  "Fragment that represents a Reagent component representing
  the [CircumcircleSector](https://jsxgraph.org/docs/symbols/CircumcircleSector.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/CircumcircleSector.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/CircumcircleSector opts]))

(defn comb
  "Fragment that represents a Reagent component representing
  the [Comb](https://jsxgraph.org/docs/symbols/Comb.html) JSXGraph element. This
  component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Comb.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Comb opts]))

(defn conic
  "Fragment that represents a Reagent component representing
  the [Conic](https://jsxgraph.org/docs/symbols/Conic.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Conic.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Conic opts]))

(defn curve
  "Fragment that represents a Reagent component representing
  the [Curve](https://jsxgraph.org/docs/symbols/Curve.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Curve.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Curve opts]))

(defn curve-difference
  "Fragment that represents a Reagent component representing
  the [CurveDifference](https://jsxgraph.org/docs/symbols/CurveDifference.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/CurveDifference.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/CurveDifference opts]))

(defn curve-intersection
  "Fragment that represents a Reagent component representing
  the [CurveIntersection](https://jsxgraph.org/docs/symbols/CurveIntersection.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/CurveIntersection.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/CurveIntersection opts]))

(defn curve-union
  "Fragment that represents a Reagent component representing
  the [CurveUnion](https://jsxgraph.org/docs/symbols/CurveUnion.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/CurveUnion.html), the map must contain
  an entry `:parents` with value containing the element's required parents."

  [opts]
  (ev/fragment
   ['jsxgraph.core/CurveUnion opts]))

(defn derivative
  "Fragment that represents a Reagent component representing
  the [Derivative](https://jsxgraph.org/docs/symbols/Derivative.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Derivative.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Derivative opts]))

(defn ellipse
  "Fragment that represents a Reagent component representing
  the [Ellipse](https://jsxgraph.org/docs/symbols/Ellipse.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Ellipse.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Ellipse opts]))

(defn foreign-object
  "Fragment that represents a Reagent component representing
  the [ForeignObject](https://jsxgraph.org/docs/symbols/ForeignObject.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/ForeignObject.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/ForeignObject opts]))

(defn function-graph
  "Fragment that represents a Reagent component representing
  the [FunctionGraph](https://jsxgraph.org/docs/symbols/FunctionGraph.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/FunctionGraph.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/FunctionGraph opts]))

(defn glider
  "Fragment that represents a Reagent component representing
  the [Glider](https://jsxgraph.org/docs/symbols/Glider.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Glider.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Glider opts]))

(defn grid
  "Fragment that represents a Reagent component representing
  the [Grid](https://jsxgraph.org/docs/symbols/Grid.html) JSXGraph element. This
  component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Grid.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Grid opts]))

(defn group
  "Fragment that represents a Reagent component representing
  the [Group](https://jsxgraph.org/docs/symbols/Group.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Group.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Group opts]))

(defn hatch
  "Fragment that represents a Reagent component representing
  the [Hatch](https://jsxgraph.org/docs/symbols/Hatch.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Hatch.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Hatch opts]))

(defn hyperbola
  "Fragment that represents a Reagent component representing
  the [Hyperbola](https://jsxgraph.org/docs/symbols/Hyperbola.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Hyperbola.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Hyperbola opts]))

(defn image
  "Fragment that represents a Reagent component representing
  the [Image](https://jsxgraph.org/docs/symbols/Image.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Image.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Image opts]))

(defn incenter
  "Fragment that represents a Reagent component representing
  the [Incenter](https://jsxgraph.org/docs/symbols/Incenter.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Incenter.html), the map must contain
  an entry `:parents` with value containing the element's required parents."

  [opts]
  (ev/fragment
   ['jsxgraph.core/Incenter opts]))

(defn incircle
  "Fragment that represents a Reagent component representing
  the [Incircle](https://jsxgraph.org/docs/symbols/Incircle.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Incircle.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Incircle opts]))

(defn inequality
  "Fragment that represents a Reagent component representing
  the [Inequality](https://jsxgraph.org/docs/symbols/Inequality.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Inequality.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Inequality opts]))

(defn input
  "Fragment that represents a Reagent component representing
  the [Input](https://jsxgraph.org/docs/symbols/Input.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Input.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Input opts]))

(defn integral
  "Fragment that represents a Reagent component representing
  the [Integral](https://jsxgraph.org/docs/symbols/Integral.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Integral.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Integral opts]))

(defn intersection
  "Fragment that represents a Reagent component representing
  the [Intersection](https://jsxgraph.org/docs/symbols/Intersection.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Intersection.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Intersection opts]))

(defn label
  "Fragment that represents a Reagent component representing
  the [Label](https://jsxgraph.org/docs/symbols/Label.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Label.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Label opts]))

(defn legend
  "Fragment that represents a Reagent component representing
  the [Legend](https://jsxgraph.org/docs/symbols/Legend.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Legend.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Legend opts]))

(defn line
  "Fragment that represents a Reagent component representing
  the [Line](https://jsxgraph.org/docs/symbols/Line.html) JSXGraph element. This
  component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Line.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Line opts]))

(defn locus
  "Fragment that represents a Reagent component representing
  the [Locus](https://jsxgraph.org/docs/symbols/Locus.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Locus.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Locus opts]))

(defn major-arc
  "Fragment that represents a Reagent component representing
  the [MajorArc](https://jsxgraph.org/docs/symbols/MajorArc.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MajorArc.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/MajorArc opts]))

(defn major-sector
  "Fragment that represents a Reagent component representing
  the [MajorSector](https://jsxgraph.org/docs/symbols/MajorSector.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MajorSector.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/MajorSector opts]))

(defn metapost-spline
  "Fragment that represents a Reagent component representing
  the [MetapostSpline](https://jsxgraph.org/docs/symbols/MetapostSpline.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MetapostSpline.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/MetapostSpline opts]))

(defn midpoint
  "Fragment that represents a Reagent component representing
  the [Midpoint](https://jsxgraph.org/docs/symbols/Midpoint.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Midpoint.html), the map must contain
  an entry `:parents` with value containing the element's required parents."

  [opts]
  (ev/fragment
   ['jsxgraph.core/Midpoint opts]))

(defn minor-arc
  "Fragment that represents a Reagent component representing
  the [MinorArc](https://jsxgraph.org/docs/symbols/MinorArc.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MinorArc.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/MinorArc opts]))

(defn minor-sector
  "Fragment that represents a Reagent component representing
  the [MinorSector](https://jsxgraph.org/docs/symbols/MinorSector.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MinorSector.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/MinorSector opts]))

(defn mirror-element
  "Fragment that represents a Reagent component representing
  the [MirrorElement](https://jsxgraph.org/docs/symbols/MirrorElement.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MirrorElement.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/MirrorElement opts]))

(defn mirror-point
  "Fragment that represents a Reagent component representing
  the [MirrorPoint](https://jsxgraph.org/docs/symbols/MirrorPoint.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MirrorPoint.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/MirrorPoint opts]))

(defn non-reflex-angle
  "Fragment that represents a Reagent component representing
  the [NonReflexAngle](https://jsxgraph.org/docs/symbols/NonReflexAngle.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/NonReflexAngle.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/NonReflexAngle opts]))

(defn normal
  "Fragment that represents a Reagent component representing
  the [Normal](https://jsxgraph.org/docs/symbols/Normal.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Normal.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Normal opts]))

(defn orthogonal-projection
  "Fragment that represents a Reagent component representing
  the [OrthogonalProjection](https://jsxgraph.org/docs/symbols/OrthogonalProjection.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/OrthogonalProjection.html), the map
  must contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/OrthogonalProjection opts]))

(defn other-intersection
  "Fragment that represents a Reagent component representing
  the [OtherIntersection](https://jsxgraph.org/docs/symbols/OtherIntersection.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/OtherIntersection.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/OtherIntersection opts]))

(defn parabola
  "Fragment that represents a Reagent component representing
  the [Parabola](https://jsxgraph.org/docs/symbols/Parabola.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Parabola.html), the map must contain
  an entry `:parents` with value containing the element's required parents."

  [opts]
  (ev/fragment
   ['jsxgraph.core/Parabola opts]))

(defn parallel
  "Fragment that represents a Reagent component representing
  the [Parallel](https://jsxgraph.org/docs/symbols/Parallel.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Parallel.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Parallel opts]))

(defn parallel-point
  "Fragment that represents a Reagent component representing
  the [ParallelPoint](https://jsxgraph.org/docs/symbols/ParallelPoint.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/ParallelPoint.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/ParallelPoint opts]))

(defn perpendicular
  "Fragment that represents a Reagent component representing
  the [Perpendicular](https://jsxgraph.org/docs/symbols/Perpendicular.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Perpendicular.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Perpendicular opts]))

(defn perpendicular-point
  "Fragment that represents a Reagent component representing
  the [PerpendicularPoint](https://jsxgraph.org/docs/symbols/PerpendicularPoint.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/PerpendicularPoint.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/PerpendicularPoint opts]))

(defn perpendicular-segment
  "Fragment that represents a Reagent component representing
  the [PerpendicularSegment](https://jsxgraph.org/docs/symbols/PerpendicularSegment.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/PerpendicularSegment.html), the map
  must contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/PerpendicularSegment opts]))

(defn point
  "Fragment that represents a Reagent component representing
  the [Point](https://jsxgraph.org/docs/symbols/Point.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Point.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Point opts]))

(defn polar-line
  "Fragment that represents a Reagent component representing
  the [PolarLine](https://jsxgraph.org/docs/symbols/PolarLine.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/PolarLine.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/PolarLine opts]))

(defn pole-point
  "Fragment that represents a Reagent component representing
  the [PolePoint](https://jsxgraph.org/docs/symbols/PolePoint.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/PolePoint.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/PolePoint opts]))

(defn polygon
  "Fragment that represents a Reagent component representing
  the [Polygon](https://jsxgraph.org/docs/symbols/Polygon.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Polygon.html), the map must contain an
  entry `:parents` with value containing the element's required parents."

  [opts]
  (ev/fragment
   ['jsxgraph.core/Polygon opts]))

(defn polygonal-chain
  "Fragment that represents a Reagent component representing
  the [PolygonalChain](https://jsxgraph.org/docs/symbols/PolygonalChain.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/PolygonalChain.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/PolygonalChain opts]))

(defn radical-axis
  "Fragment that represents a Reagent component representing
  the [RadicalAxis](https://jsxgraph.org/docs/symbols/RadicalAxis.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/RadicalAxis.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/RadicalAxis opts]))

(defn reflection
  "Fragment that represents a Reagent component representing
  the [Reflection](https://jsxgraph.org/docs/symbols/Reflection.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Reflection.html), the map must contain
  an entry `:parents` with value containing the element's required parents."

  [opts]
  (ev/fragment
   ['jsxgraph.core/Reflection opts]))

(defn reflex-angle
  "Fragment that represents a Reagent component representing
  the [ReflexAngle](https://jsxgraph.org/docs/symbols/ReflexAngle.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/ReflexAngle.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/ReflexAngle opts]))

(defn regular-polygon
  "Fragment that represents a Reagent component representing
  the [RegularPolygon](https://jsxgraph.org/docs/symbols/RegularPolygon.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/RegularPolygon.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/RegularPolygon opts]))

(defn riemann-sum
  "Fragment that represents a Reagent component representing
  the [RiemannSum](https://jsxgraph.org/docs/symbols/RiemannSum.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/RiemannSum.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/RiemannSum opts]))

(defn sector
  "Fragment that represents a Reagent component representing
  the [Sector](https://jsxgraph.org/docs/symbols/Sector.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Sector.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Sector opts]))

(defn segment
  "Fragment that represents a Reagent component representing
  the [Segment](https://jsxgraph.org/docs/symbols/Segment.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Segment.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Segment opts]))

(defn semicircle
  "Fragment that represents a Reagent component representing
  the [Semicircle](https://jsxgraph.org/docs/symbols/Semicircle.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Semicircle.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Semicircle opts]))

(defn slider
  "Fragment that represents a Reagent component representing
  the [Slider](https://jsxgraph.org/docs/symbols/Slider.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Slider.html), the map must contain an
  entry `:parents` with value containing the element's required parents."

  [opts]
  (ev/fragment
   ['jsxgraph.core/Slider opts]))

(defn slope-triangle
  "Fragment that represents a Reagent component representing
  the [SlopeTriangle](https://jsxgraph.org/docs/symbols/SlopeTriangle.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/SlopeTriangle.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/SlopeTriangle opts]))

(defn spline
  "Fragment that represents a Reagent component representing
  the [Spline](https://jsxgraph.org/docs/symbols/Spline.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Spline.html), the map must contain an
  entry `:parents` with value containing the element's required parents."

  [opts]
  (ev/fragment
   ['jsxgraph.core/Spline opts]))

(defn step-function
  "Fragment that represents a Reagent component representing
  the [StepFunction](https://jsxgraph.org/docs/symbols/StepFunction.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/StepFunction.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/StepFunction opts]))

(defn tangent
  "Fragment that represents a Reagent component representing
  the [Tangent](https://jsxgraph.org/docs/symbols/Tangent.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Tangent.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Tangent opts]))

(defn tape-measure
  "Fragment that represents a Reagent component representing
  the [TapeMeasure](https://jsxgraph.org/docs/symbols/TapeMeasure.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/TapeMeasure.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/TapeMeasure opts]))

(defn text
  "Fragment that represents a Reagent component representing
  the [Text](https://jsxgraph.org/docs/symbols/Text.html) JSXGraph element. This
  component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Text.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Text opts]))

(defn ticks
  "Fragment that represents a Reagent component representing
  the [Ticks](https://jsxgraph.org/docs/symbols/Ticks.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Ticks.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Ticks opts]))

(defn trace-curve
  "Fragment that represents a Reagent component representing
  the [TraceCurve](https://jsxgraph.org/docs/symbols/TraceCurve.html) JSXGraph
  element. This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/TraceCurve.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/TraceCurve opts]))

(defn transformation
  "Fragment that represents a Reagent component representing
  the [Transformation](https://jsxgraph.org/docs/symbols/Transformation.html)
  JSXGraph element. This component must appear as a child of a [[jsxgraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Transformation.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Transformation opts]))

(defn turtle
  "Fragment that represents a Reagent component representing
  the [Turtle](https://jsxgraph.org/docs/symbols/Turtle.html) JSXGraph element.
  This component must appear as a child of a [[jsxgraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Turtle.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  [opts]
  (ev/fragment
   ['jsxgraph.core/Turtle opts]))

;; ## 3D Components
;;
;; These aren't yet supported! Once [this
;; ticket](https://github.com/mentat-collective/jsxgraph.cljs/issues/23) is
;; resolved and we can create 3d scenes we can uncomment these and include them
;; in the API.

(comment
  (defn curve-3d
    "Fragment that represents a Reagent component representing
  the [Curve3D](https://jsxgraph.org/docs/symbols/Curve3D.html) JSXGraph
  element. This component must appear as a child of a [[view-3d]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Curve3D.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
    [opts]
    (ev/fragment
     ['jsxgraph.core/Curve3D opts]))

  (defn function-graph-3d
    "Fragment that represents a Reagent component representing
  the [FunctionGraph3D](https://jsxgraph.org/docs/symbols/FunctionGraph3D.html)
  JSXGraph element. This component must appear as a child of a [[view-3d]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/FunctionGraph3D.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
    [opts]
    (ev/fragment
     ['jsxgraph.core/FunctionGraph3D opts]))

  (defn line-3d
    "Fragment that represents a Reagent component representing
  the [Line3D](https://jsxgraph.org/docs/symbols/Line3D.html) JSXGraph element.
  This component must appear as a child of a [[view-3d]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Line3D.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
    [opts]
    (ev/fragment
     ['jsxgraph.core/Line3D opts]))

  (defn parametric-surface-3d
    "Fragment that represents a Reagent component representing
  the [ParametricSurface3D](https://jsxgraph.org/docs/symbols/ParametricSurface3D.html)
  JSXGraph element. This component must appear as a child of a [[view-3d]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/ParametricSurface3D.html), the map
  must contain an entry `:parents` with value containing the element's required
  parents."
    [opts]
    (ev/fragment
     ['jsxgraph.core/ParametricSurface3D opts]))

  (defn point-3d
    "Fragment that represents a Reagent component representing
  the [Point3D](https://jsxgraph.org/docs/symbols/Point3D.html) JSXGraph
  element. This component must appear as a child of a [[view-3d]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Point3D.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
    [opts]
    (ev/fragment
     ['jsxgraph.core/Point3D opts])))
