(ns emmy.mathbox
  "Server-side rendering functions for the components declared in the
  [`mathbox.core`](https://cljdoc.org/d/org.mentat/mathbox.cljs/CURRENT/api/mathbox.core)
  and [`mathbox.primitives`](https://cljdoc.org/d/org.mentat/mathbox.cljs/CURRENT/api/mathbox.primitives)
  namespaces of the [`MathBox.cljs` project](https://mathbox.mentat.org)."
  (:refer-clojure :exclude [format repeat vector])
  (:require [emmy.viewer :as ev]))

(defn rawbox
  "Light wrapper around the `ContainedMathbox` and `MathBox` components exposed by
  `mathbox-react.`

  The main differences are:

  - This component calls `ContainedMathbox` if the `:container` option is a
    config map (or not present), and `Mathbox` if `:container` references an
    actual `HTMLElement`. Any other value currently errors.

  - This component takes a `:threestrap` option instead of `:options`, as the
  `mathbox-react` components do.

  See [[mathbox]] for a version that installs hooks to allow configuration of
  the renderer, camera and other settings."
  [& children]
  (ev/fragment
   (into ['mathbox.core/Rawbox] children)))

(defn mathbox
  "Component that configures a MathBox-backed canvas and reactively mounts all
  children into the canvas.

  Supports the following options:

  - `:threestrap`: these options are passed directly to the [mathbox
    constructor](https://github.com/unconed/mathbox#basic-usage) on instantiation;
    these are in turn passed along to Threestrap's `Bootstrap` constructor.
    See [this page](https://github.com/unconed/threestrap#plugins) for an example
    of what to pass and why.

  - `:renderer`: optional map with `:background-color` and `:background-opacity`
    keys. Updating these will update the settings without a re-render.

  - `:controls`: optional map with `:max-distance` and `:rotate-speed` keys.
    Updating these will update the settings on the registered controls without a
    re-render.

  - `:on`: optional map of type {<event-name> (fn [event three] ,,,)} On mount,
    each event will be bound via `mathbox.three.on`, as described in [Threestrap's
    docs](https://github.com/unconed/threestrap#events).

  - `:ref`: a 1-arg function that receives the underlying mathbox instance
    whenever it changes. Note that you may receive `nil` and should guard against
    it.

  As well as all options used to configure the [base/root
  component](https://github.com/unconed/mathbox/blob/master/docs/primitives.md#base/root). (The
  format of each following line is <keyword>: <default> (<type>) -
  <description>.)

  - `:camera`: `\"[camera]\"` (select) - Active camera
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:focus`: `1` (nullable number) - Camera focus distance in world units
  - `:fov`: `null` (nullable number) - (Vertical) Field-of-view to calibrate units for (degrees), e.g. `60`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:scale`: `null` (nullable number) - (Vertical) Reference scale of viewport in pixels, e.g. `720`
  - `:speed`: `1` (number) - Global speed"
  [& children]
  (ev/fragment
   (into ['mathbox.core/MathBox] children)))

;; ## Primitives

(defn group
  "*Group elements for visibility and activity*

  - `:active`: `true` (bool) - Updates continuously
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:visible`: `true` (bool) - Visibility for rendering"
  [& children]
  (into ['mathbox.primitives.base/Group] children))

(defn inherit
  "*Inherit and inject a trait from another element*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`"
  [& children]
  (into ['mathbox.primitives.base/Inherit] children))

(defn unit
  "*Change unit sizing for drawing ops*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:focus`: `1` (nullable number) - Camera focus distance in world units
  - `:fov`: `null` (nullable number) - (Vertical) Field-of-view to calibrate units for (degrees), e.g. `60`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:scale`: `null` (nullable number) - (Vertical) Reference scale of viewport in pixels, e.g. `720`"
  [& children]
  (into ['mathbox.primitives.base/Unit] children))

(defn camera
  "*Camera instance or proxy*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:eulerOrder`: `\"xyz\"` (swizzle) - 3D Euler order
  - `:fov`: `null` (nullable number) - Field-of-view (degrees), e.g. `60`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:lookAt`: `null` (nullable vec3) - 3D Look at, e.g. `[2, 3, 4]`
  - `:position`: `null` (nullable vec3) - 3D Position, e.g. `[1, 2, 3]`
  - `:proxy`: `false` (bool) - Re-use existing camera
  - `:quaternion`: `null` (nullable quat) - 3D Quaternion, e.g. `[0.707, 0, 0, 0.707]`
  - `:rotation`: `null` (nullable vec3) - 3D Euler rotation, e.g. `[π/2, 0, 0]`
  - `:up`: `null` (nullable vec3) - 3D Up, e.g. `[0, 1, 0]`"
  [opts]
  ['mathbox.primitives.camera/Camera opts])

(defn area
  "*2D sampled matrix*

  - `:aligned`: `false` (bool) - Use (fast) integer lookups
  - `:axes`: `[1, 2]` (swizzle(2) axis) - Axis pair
  - `:bufferHeight`: `1` (number) - Matrix buffer height
  - `:bufferWidth`: `1` (number) - Matrix buffer width
  - `:centeredX`: `false` (bool) - Centered instead of corner sampling
  - `:centeredY`: `false` (bool) - Centered instead of corner sampling
  - `:channels`: `4` (number) - Number of channels
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `null` (nullable object) - Data array
  - `:expr`: `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, x, y, i, j, time, delta) { ... }`
  - `:fps`: `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  - `:height`: `1` (nullable number) - Matrix height
  - `:history`: `1` (number) - Matrix history
  - `:hurry`: `5` (number) - Maximum frames to hurry per frame
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `4` (number) - Number of items
  - `:limit`: `60` (number) - Maximum frames to track
  - `:live`: `true` (bool) - Update continuously
  - `:magFilter`: `\"nearest\"` (filter) - Texture magnification filtering
  - `:minFilter`: `\"nearest\"` (filter) - Texture minification filtering
  - `:observe`: `false` (bool) - Pass clock time to data
  - `:paddingX`: `0` (number) - Number of samples padding
  - `:paddingY`: `0` (number) - Number of samples padding
  - `:rangeX`: `[-1, 1]` (vec2) - Range on axis
  - `:rangeY`: `[-1, 1]` (vec2) - Range on axis
  - `:realtime`: `false` (bool) - Run on real time, not clock time
  - `:type`: `\"float\"` (type) - Texture data type
  - `:width`: `1` (nullable number) - Matrix width"
  [opts]
  ['mathbox.primitives.data/Area opts])

(defn array
  "*1D array*

  - `:aligned`: `false` (bool) - Use (fast) integer lookups
  - `:bufferWidth`: `1` (number) - Array buffer width
  - `:channels`: `4` (number) - Number of channels
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `null` (nullable object) - Data array
  - `:expr`: `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, i, time, delta) { ... }`
  - `:fps`: `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  - `:history`: `1` (number) - Array history
  - `:hurry`: `5` (number) - Maximum frames to hurry per frame
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `4` (number) - Number of items
  - `:limit`: `60` (number) - Maximum frames to track
  - `:live`: `true` (bool) - Update continuously
  - `:magFilter`: `\"nearest\"` (filter) - Texture magnification filtering
  - `:minFilter`: `\"nearest\"` (filter) - Texture minification filtering
  - `:observe`: `false` (bool) - Pass clock time to data
  - `:realtime`: `false` (bool) - Run on real time, not clock time
  - `:type`: `\"float\"` (type) - Texture data type
  - `:width`: `1` (nullable number) - Array width"
  [opts]
  ['mathbox.primitives.data/Array opts])

(defn interval
  "*1D sampled array*

  - `:aligned`: `false` (bool) - Use (fast) integer lookups
  - `:axis`: `1` (axis) - Axis
  - `:bufferWidth`: `1` (number) - Array buffer width
  - `:centered`: `false` (bool) - Centered instead of corner sampling
  - `:channels`: `4` (number) - Number of channels
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `null` (nullable object) - Data array
  - `:expr`: `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, x, i, time, delta) { ... }`
  - `:fps`: `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  - `:history`: `1` (number) - Array history
  - `:hurry`: `5` (number) - Maximum frames to hurry per frame
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `4` (number) - Number of items
  - `:limit`: `60` (number) - Maximum frames to track
  - `:live`: `true` (bool) - Update continuously
  - `:magFilter`: `\"nearest\"` (filter) - Texture magnification filtering
  - `:minFilter`: `\"nearest\"` (filter) - Texture minification filtering
  - `:observe`: `false` (bool) - Pass clock time to data
  - `:padding`: `0` (number) - Number of samples padding
  - `:range`: `[-1, 1]` (vec2) - Range on axis
  - `:realtime`: `false` (bool) - Run on real time, not clock time
  - `:type`: `\"float\"` (type) - Texture data type
  - `:width`: `1` (nullable number) - Array width"
  [opts]
  ['mathbox.primitives.data/Interval opts])

(defn matrix
  "*2D matrix*

  - `:aligned`: `false` (bool) - Use (fast) integer lookups
  - `:bufferHeight`: `1` (number) - Matrix buffer height
  - `:bufferWidth`: `1` (number) - Matrix buffer width
  - `:channels`: `4` (number) - Number of channels
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `null` (nullable object) - Data array
  - `:expr`: `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, i, j, time, delta) { ... }`
  - `:fps`: `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  - `:height`: `1` (nullable number) - Matrix height
  - `:history`: `1` (number) - Matrix history
  - `:hurry`: `5` (number) - Maximum frames to hurry per frame
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `4` (number) - Number of items
  - `:limit`: `60` (number) - Maximum frames to track
  - `:live`: `true` (bool) - Update continuously
  - `:magFilter`: `\"nearest\"` (filter) - Texture magnification filtering
  - `:minFilter`: `\"nearest\"` (filter) - Texture minification filtering
  - `:observe`: `false` (bool) - Pass clock time to data
  - `:realtime`: `false` (bool) - Run on real time, not clock time
  - `:type`: `\"float\"` (type) - Texture data type
  - `:width`: `1` (nullable number) - Matrix width"
  [opts]
  ['mathbox.primitives.data/Matrix opts])

(defn scale
  "*Human-friendly divisions on an axis, subdivided as needed*

  - `:axis`: `1` (axis) - Axis
  - `:base`: `10` (number) - Power base for sub/super units
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:divide`: `10` (number) - Number of divisions
  - `:end`: `true` (bool) - Include end
  - `:factor`: `1` (positive number) - Scale factor
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:mode`: `\"linear\"` (scale) - Scale type
  - `:nice`: `true` (bool) - Snap to nice numbers
  - `:origin`: `[0, 0, 0, 0]` (vec4) - 4D Origin
  - `:range`: `[-1, 1]` (vec2) - Range on axis
  - `:start`: `true` (bool) - Include start
  - `:unit`: `1` (number) - Reference unit
  - `:zero`: `true` (bool) - Include zero"
  [opts]
  ['mathbox.primitives.data/Scale opts])

(defn volume
  "*3D sampled voxels*

  - `:aligned`: `false` (bool) - Use (fast) integer lookups
  - `:axes`: `[1, 2, 3]` (swizzle(3) axis) - Axis triplet
  - `:bufferDepth`: `1` (number) - Voxel buffer depth
  - `:bufferHeight`: `1` (number) - Voxel buffer height
  - `:bufferWidth`: `1` (number) - Voxel buffer width
  - `:centeredX`: `false` (bool) - Centered instead of corner sampling
  - `:centeredY`: `false` (bool) - Centered instead of corner sampling
  - `:centeredZ`: `false` (bool) - Centered instead of corner sampling
  - `:channels`: `4` (number) - Number of channels
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `null` (nullable object) - Data array
  - `:depth`: `1` (nullable number) - Voxel depth
  - `:expr`: `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, x, y, z, i, j, k, time, delta) { ... }`
  - `:fps`: `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  - `:height`: `1` (nullable number) - Voxel height
  - `:hurry`: `5` (number) - Maximum frames to hurry per frame
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `4` (number) - Number of items
  - `:limit`: `60` (number) - Maximum frames to track
  - `:live`: `true` (bool) - Update continuously
  - `:magFilter`: `\"nearest\"` (filter) - Texture magnification filtering
  - `:minFilter`: `\"nearest\"` (filter) - Texture minification filtering
  - `:observe`: `false` (bool) - Pass clock time to data
  - `:paddingX`: `0` (number) - Number of samples padding
  - `:paddingY`: `0` (number) - Number of samples padding
  - `:paddingZ`: `0` (number) - Number of samples padding
  - `:rangeX`: `[-1, 1]` (vec2) - Range on axis
  - `:rangeY`: `[-1, 1]` (vec2) - Range on axis
  - `:rangeZ`: `[-1, 1]` (vec2) - Range on axis
  - `:realtime`: `false` (bool) - Run on real time, not clock time
  - `:type`: `\"float\"` (type) - Texture data type
  - `:width`: `1` (nullable number) - Voxel width"
  [opts]
  ['mathbox.primitives.data/Volume opts])

(defn voxel
  "*3D voxels*

  - `:aligned`: `false` (bool) - Use (fast) integer lookups
  - `:bufferDepth`: `1` (number) - Voxel buffer depth
  - `:bufferHeight`: `1` (number) - Voxel buffer height
  - `:bufferWidth`: `1` (number) - Voxel buffer width
  - `:channels`: `4` (number) - Number of channels
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `null` (nullable object) - Data array
  - `:depth`: `1` (nullable number) - Voxel depth
  - `:expr`: `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, i, j, k, time, delta) { ... }`
  - `:fps`: `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  - `:height`: `1` (nullable number) - Voxel height
  - `:hurry`: `5` (number) - Maximum frames to hurry per frame
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `4` (number) - Number of items
  - `:limit`: `60` (number) - Maximum frames to track
  - `:live`: `true` (bool) - Update continuously
  - `:magFilter`: `\"nearest\"` (filter) - Texture magnification filtering
  - `:minFilter`: `\"nearest\"` (filter) - Texture minification filtering
  - `:observe`: `false` (bool) - Pass clock time to data
  - `:realtime`: `false` (bool) - Run on real time, not clock time
  - `:type`: `\"float\"` (type) - Texture data type
  - `:width`: `1` (nullable number) - Voxel width"
  [opts]
  ['mathbox.primitives.data/Voxel opts])

(defn axis
  "*Draw an axis*

  - `:axis`: `1` (axis) - Axis
  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:crossed`: `true` (bool) - UVWO map on matching axis
  - `:depth`: `1` (number) - Depth scaling
  - `:detail`: `1` (number) - Geometric detail
  - `:end`: `true` (bool) - Draw end arrow
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:origin`: `[0, 0, 0, 0]` (vec4) - 4D Origin
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:range`: `[-1, 1]` (vec2) - Range on axis
  - `:size`: `3` (number) - Arrow size
  - `:start`: `true` (bool) - Draw start arrow
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `-1` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  [opts]
  ['mathbox.primitives.draw/Axis opts])

(defn face
  "*Draw polygon faces*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `1` (number) - Depth scaling
  - `:fill`: `true` (bool) - Fill mesh
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:line`: `false` (bool) - Draw line
  - `:lineBias`: `5` (number) - Z-Bias for lines on fill
  - `:map`: `null` (nullable select) - Texture map source, e.g. `\"#map\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:points`: `<` (select) - Points data source
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:shaded`: `false` (bool) - Shade mesh
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  [opts]
  ['mathbox.primitives.draw/Face opts])

(defn grid
  "*Draw a 2D line grid*

  - `:axes`: `[1, 2]` (swizzle(2) axis) - Axis pair
  - `:baseX`: `10` (number) - Power base for sub/super units
  - `:baseY`: `10` (number) - Power base for sub/super units
  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:closedX`: `false` (bool) - Close X lines
  - `:closedY`: `false` (bool) - Close Y lines
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:crossed`: `true` (bool) - UVWO map on matching axes
  - `:crossedX`: `true` (bool) - UVWO map on matching axis
  - `:crossedY`: `true` (bool) - UVWO map on matching axis
  - `:depth`: `1` (number) - Depth scaling
  - `:detailX`: `1` (number) - Geometric detail
  - `:detailY`: `1` (number) - Geometric detail
  - `:divideX`: `10` (number) - Number of divisions
  - `:divideY`: `10` (number) - Number of divisions
  - `:endX`: `true` (bool) - Include end
  - `:endY`: `true` (bool) - Include end
  - `:factorX`: `1` (positive number) - Scale factor
  - `:factorY`: `1` (positive number) - Scale factor
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:lineX`: `true` (bool) - Draw X lines
  - `:lineY`: `true` (bool) - Draw Y lines
  - `:modeX`: `\"linear\"` (scale) - Scale type
  - `:modeY`: `\"linear\"` (scale) - Scale type
  - `:niceX`: `true` (bool) - Snap to nice numbers
  - `:niceY`: `true` (bool) - Snap to nice numbers
  - `:opacity`: `1` (positive number) - Opacity
  - `:origin`: `[0, 0, 0, 0]` (vec4) - 4D Origin
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:rangeX`: `[-1, 1]` (vec2) - Range on axis
  - `:rangeY`: `[-1, 1]` (vec2) - Range on axis
  - `:startX`: `true` (bool) - Include start
  - `:startY`: `true` (bool) - Include start
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:unitX`: `1` (number) - Reference unit
  - `:unitY`: `1` (number) - Reference unit
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `1` (positive number) - Line width
  - `:zBias`: `-2` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer
  - `:zeroX`: `true` (bool) - Include zero
  - `:zeroY`: `true` (bool) - Include zero"
  [opts]
  ['mathbox.primitives.draw/Grid opts])

(defn line
  "*Draw lines*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `1` (number) - Depth scaling
  - `:end`: `true` (bool) - Draw end arrow
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:points`: `<` (select) - Points data source
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:size`: `3` (number) - Arrow size
  - `:start`: `true` (bool) - Draw start arrow
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  [opts]
  ['mathbox.primitives.draw/Line opts])

(defn point
  "*Draw points*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `1` (number) - Depth scaling
  - `:fill`: `true` (bool) - Fill shape
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:optical`: `true` (bool) - Optical or exact sizing
  - `:points`: `<` (select) - Points data source
  - `:shape`: `\"circle\"` (shape) - Point shape (circle, square, diamond, up, down, left, right)
  - `:size`: `4` (positive number) - Point size
  - `:sizes`: `null` (nullable select) - Point sizes data source, e.g. `\"#sizes\"`
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  [opts]
  ['mathbox.primitives.draw/Point opts])

(defn strip
  "*Draw triangle strips*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `1` (number) - Depth scaling
  - `:fill`: `true` (bool) - Fill mesh
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:line`: `false` (bool) - Draw line
  - `:lineBias`: `5` (number) - Z-Bias for lines on fill
  - `:map`: `null` (nullable select) - Texture map source, e.g. `\"#map\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:points`: `<` (select) - Points data source
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:shaded`: `false` (bool) - Shade mesh
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  [opts]
  ['mathbox.primitives.draw/Strip opts])

(defn surface
  "*Draw surfaces*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:closedX`: `false` (bool) - Close X lines
  - `:closedY`: `false` (bool) - Close Y lines
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:crossed`: `true` (bool) - UVWO map on matching axes
  - `:depth`: `1` (number) - Depth scaling
  - `:fill`: `true` (bool) - Fill mesh
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:lineBias`: `5` (number) - Z-Bias for lines on fill
  - `:lineX`: `false` (bool) - Draw X lines
  - `:lineY`: `false` (bool) - Draw Y lines
  - `:map`: `null` (nullable select) - Texture map source, e.g. `\"#map\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:points`: `<` (select) - Points data source
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:shaded`: `false` (bool) - Shade mesh
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  [opts]
  ['mathbox.primitives.draw/Surface opts])

(defn ticks
  "*Draw ticks*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `1` (number) - Depth scaling
  - `:epsilon`: `0.0001` (number) - Tick epsilon
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:normal`: `true` (bool) - Normal for reference plane
  - `:opacity`: `1` (positive number) - Opacity
  - `:points`: `<` (select) - Points data source
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:size`: `10` (number) - Tick size
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  [opts]
  ['mathbox.primitives.draw/Ticks opts])

(defn vector
  "*Draw vectors*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `1` (number) - Depth scaling
  - `:end`: `true` (bool) - Draw end arrow
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:points`: `<` (select) - Points data source
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:size`: `3` (number) - Arrow size
  - `:start`: `true` (bool) - Draw start arrow
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  [opts]
  ['mathbox.primitives.draw/Vector opts])

(defn clamp
  "*Clamp out-of-bounds samples to the nearest data point*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:source`: `\"<\"` (select) - Input source"
  [opts]
  ['mathbox.primitives.operator/Clamp opts])

(defn grow
  "*Scale data relative to reference data point*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `null` (nullable anchor) - Depth alignment
  - `:height`: `null` (nullable anchor) - Height alignment
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `null` (nullable anchor) - Items alignment
  - `:scale`: `1` (number) - Scale factor
  - `:source`: `\"<\"` (select) - Input source
  - `:width`: `null` (nullable anchor) - Width alignment"
  [opts]
  ['mathbox.primitives.operator/Grow opts])

(defn join
  "*Join two array dimensions into one by concatenating rows/columns/stacks*

  - `:axis`: `null` (nullable axis) - Axis to join, e.g. `x`
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:order`: `\"wxyz\"` (transpose) - Axis order
  - `:overlap`: `1` (number) - Tuple overlap
  - `:source`: `\"<\"` (select) - Input source"
  [opts]
  ['mathbox.primitives.operator/Join opts])

(defn lerp
  "*Linear interpolation of data*

  - `:centeredW`: `false` (bool) - Centered instead of corner sampling
  - `:centeredX`: `false` (bool) - Centered instead of corner sampling
  - `:centeredY`: `false` (bool) - Centered instead of corner sampling
  - `:centeredZ`: `false` (bool) - Centered instead of corner sampling
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `null` (nullable number) - Lerp to depth, e.g. `5`
  - `:height`: `null` (nullable number) - Lerp to height, e.g. `5`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `null` (nullable number) - Lerp to items, e.g. `5`
  - `:paddingW`: `0` (number) - Number of samples padding
  - `:paddingX`: `0` (number) - Number of samples padding
  - `:paddingY`: `0` (number) - Number of samples padding
  - `:paddingZ`: `0` (number) - Number of samples padding
  - `:size`: `\"absolute\"` (mapping) - Scaling mode (relative, absolute)
  - `:source`: `\"<\"` (select) - Input source
  - `:width`: `null` (nullable number) - Lerp to width, e.g. `5`"
  [opts]
  ['mathbox.primitives.operator/Lerp opts])

(defn memo
  "*Memoize data to an array/texture*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:magFilter`: `\"nearest\"` (filter) - Texture magnification filtering
  - `:minFilter`: `\"nearest\"` (filter) - Texture minification filtering
  - `:source`: `\"<\"` (select) - Input source
  - `:type`: `\"float\"` (type) - Texture data type"
  [opts]
  ['mathbox.primitives.operator/Memo opts])

(defn readback
  "*Read data back to a binary JavaScript array*

  - `:active`: `true` (bool) - Updates continuously
  - `:channels`: `4` (number) - Readback channels (read only)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `[]` (data) - Readback data buffer (read only)
  - `:depth`: `1` (nullable number) - Readback depth (read only)
  - `:expr`: `null` (nullable function) - Readback consume expression, e.g. `function (x, y, z, w, i, j, k, l) { ... }`
  - `:height`: `1` (nullable number) - Readback height (read only)
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `1` (nullable number) - Readback items (read only)
  - `:source`: `\"<\"` (select) - Input source
  - `:type`: `\"float\"` (float) - Readback data type (float, unsignedByte)
  - `:width`: `1` (nullable number) - Readback width (read only)"
  [opts]
  ['mathbox.primitives.operator/Readback opts])

(defn repeat
  "*Repeat data in one or more dimensions*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `1` (number) - Repeat depth
  - `:height`: `1` (number) - Repeat height
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `1` (number) - Repeat items
  - `:source`: `\"<\"` (select) - Input source
  - `:width`: `1` (number) - Repeat width"
  [opts]
  ['mathbox.primitives.operator/Repeat opts])

(defn resample
  "*Resample data to new dimensions with a shader*

  - `:centeredW`: `false` (bool) - Centered instead of corner sampling
  - `:centeredX`: `false` (bool) - Centered instead of corner sampling
  - `:centeredY`: `false` (bool) - Centered instead of corner sampling
  - `:centeredZ`: `false` (bool) - Centered instead of corner sampling
  - `:channels`: `4` (number) - Resample channels
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `null` (nullable number) - Resample factor depth, e.g. `10`
  - `:height`: `null` (nullable number) - Resample factor height, e.g. `10`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:indices`: `4` (number) - Resample indices
  - `:items`: `null` (nullable number) - Resample factor items, e.g. `10`
  - `:paddingW`: `0` (number) - Number of samples padding
  - `:paddingX`: `0` (number) - Number of samples padding
  - `:paddingY`: `0` (number) - Number of samples padding
  - `:paddingZ`: `0` (number) - Number of samples padding
  - `:sample`: `\"relative\"` (mapping) - Source sampling (relative, absolute)
  - `:shader`: `\"<\"` (select) - Shader to use
  - `:size`: `\"absolute\"` (mapping) - Scaling mode (relative, absolute)
  - `:source`: `\"<\"` (select) - Input source
  - `:width`: `null` (nullable number) - Resample factor width, e.g. `10`"
  [opts]
  ['mathbox.primitives.operator/Resample opts])

(defn slice
  "*Select one or more rows/columns/stacks*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `null` (nullable vec2) - Slice from, to depth (excluding to), e.g. `[2, 4]`
  - `:height`: `null` (nullable vec2) - Slice from, to height (excluding to), e.g. `[2, 4]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `null` (nullable vec2) - Slice from, to items (excluding to), e.g. `[2, 4]`
  - `:source`: `\"<\"` (select) - Input source
  - `:width`: `null` (nullable vec2) - Slice from, to width (excluding to), e.g. `[2, 4]`"
  [opts]
  ['mathbox.primitives.operator/Slice opts])

(defn split
  "*Split one array dimension into two by splitting rows/columns/etc*

  - `:axis`: `null` (nullable axis) - Axis to split, e.g. `x`
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:length`: `1` (number) - Tuple length
  - `:order`: `\"wxyz\"` (transpose) - Axis order
  - `:overlap`: `1` (number) - Tuple overlap
  - `:source`: `\"<\"` (select) - Input source"
  [opts]
  ['mathbox.primitives.operator/Split opts])

(defn spread
  "*Spread data values according to array indices*

  - `:alignDepth`: `0` (anchor) - Depth alignment
  - `:alignHeight`: `0` (anchor) - Height alignment
  - `:alignItems`: `0` (anchor) - Items alignment
  - `:alignWidth`: `0` (anchor) - Width alignment
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `null` (nullable vec4) - Depth offset, e.g. `[1.5, 0, 0, 0]`
  - `:height`: `null` (nullable vec4) - Height offset, e.g. `[1.5, 0, 0, 0]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `null` (nullable vec4) - Items offset, e.g. `[1.5, 0, 0, 0]`
  - `:source`: `\"<\"` (select) - Input source
  - `:unit`: `\"relative\"` (mapping) - Spread per item (absolute) or array (relative)
  - `:width`: `null` (nullable vec4) - Width offset, e.g. `[1.5, 0, 0, 0]`"
  [opts]
  ['mathbox.primitives.operator/Spread opts])

(defn subdivide
  "*Subdivide data points evenly or with a bevel*

  - `:bevel`: `1` (number) - Fraction to end outward from vertices
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `null` (nullable positive int) - Divisions of depth, e.g. `5`
  - `:height`: `null` (nullable positive int) - Divisions of height, e.g. `5`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `null` (nullable positive int) - Divisions of items, e.g. `5`
  - `:lerp`: `true` (boolean) - Interpolate values with computed indices
  - `:source`: `\"<\"` (select) - Input source
  - `:width`: `null` (nullable positive int) - Divisions of width, e.g. `5`"
  [opts]
  ['mathbox.primitives.operator/Subdivide opts])

(defn swizzle
  "*Swizzle data values*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:order`: `xyzw` (swizzle) - Swizzle order
  - `:source`: `\"<\"` (select) - Input source"
  [opts]
  ['mathbox.primitives.operator/Swizzle opts])

(defn transpose
  "*Transpose array dimensions*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:order`: `xyzw` (transpose) - Transpose order
  - `:source`: `\"<\"` (select) - Input source"
  [opts]
  ['mathbox.primitives.operator/Transpose opts])

(defn dom
  "*HTML DOM injector*

  - `:attributes`: `null` (nullable object) - HTML attributes, e.g. `{\"style\": {\"color\": \"red\"}}`
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:color`: `\"rgb(255, 255, 255)\"` (color) - Color
  - `:depth`: `0` (number) - Depth scaling
  - `:html`: `\"<\"` (select) - HTML data source
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:offset`: `[0, -20]` (vec2) - 2D offset
  - `:opacity`: `1` (positive number) - Opacity
  - `:outline`: `2` (number) - Outline size
  - `:pointerEvents`: `false` (bool) - Allow pointer events
  - `:points`: `\"<\"` (select) - Points data source
  - `:size`: `16` (number) - Text size
  - `:snap`: `false` (bool) - Snap to pixel
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zoom`: `1` (number) - HTML zoom"
  [opts]
  ['mathbox.primitives.overlay/Dom opts])

(defn html
  "*HTML element source*

  - `:aligned`: `false` (bool) - Use (fast) integer lookups
  - `:bufferDepth`: `1` (number) - Voxel buffer depth
  - `:bufferHeight`: `1` (number) - Voxel buffer height
  - `:bufferWidth`: `1` (number) - Voxel buffer width
  - `:channels`: `4` (number) - Number of channels
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `null` (nullable object) - Data array
  - `:depth`: `1` (nullable number) - Voxel depth
  - `:expr`: `null` (nullable emitter) - Data emitter expression
  - `:fps`: `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  - `:height`: `1` (nullable number) - Voxel height
  - `:hurry`: `5` (number) - Maximum frames to hurry per frame
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `4` (number) - Number of items
  - `:limit`: `60` (number) - Maximum frames to track
  - `:live`: `true` (bool) - Update continuously
  - `:observe`: `false` (bool) - Pass clock time to data
  - `:realtime`: `false` (bool) - Run on real time, not clock time
  - `:width`: `1` (nullable number) - Voxel width"
  [opts]
  ['mathbox.primitives.overlay/Html opts])

(defn move
  "*Move elements in/out on transition*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:delay`: `0` (number) - Transition delay
  - `:delayEnter`: `null` (nullable number) - Transition enter delay, e.g. `0.3`
  - `:delayExit`: `null` (nullable number) - Transition exit delay, e.g. `0.3`
  - `:duration`: `0.3` (number) - Transition duration
  - `:durationEnter`: `0.3` (number) - Transition enter duration
  - `:durationExit`: `0.3` (number) - Transition exit duration
  - `:enter`: `null` (nullable number) - Enter state, e.g. `0.5`
  - `:exit`: `null` (nullable number) - Exit state, e.g. `0.5`
  - `:from`: `[0, 0, 0, 0]` (vec4) - Enter from
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:stagger`: `[0, 0, 0, 0]` (vec4) - Stagger dimensions, e.g. `[2, 1, 0, 0]`
  - `:to`: `[0, 0, 0, 0]` (vec4) - Exit to"
  [& children]
  (into ['mathbox.primitives.present/Move] children))

(defn play
  "*Play a sequenced animation*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:delay`: `0` (number) - Play delay
  - `:ease`: `\"cosine\"` (ease) - Animation ease (linear, cosine, binary, hold)
  - `:from`: `0` (number) - Play from
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:loop`: `false` (bool) - Loop
  - `:pace`: `1` (number) - Play pace
  - `:realtime`: `false` (bool) - Run on real time, not clock time
  - `:script`: `{}` (object) - Animation script, e.g. `{ \"0\": { props: { color: \"red\" }, expr: { size: function (t) { return Math.sin(t) + 1; }}}, \"1\": ...}`
  - `:speed`: `1` (number) - Play speed
  - `:target`: `\"<\"` (select) - Animation target
  - `:to`: `Infinity` (number) - Play until
  - `:trigger`: `1` (nullable number) - Trigger on step"
  [opts]
  ['mathbox.primitives.present/Play opts])

(defn present
  "*Present a tree of slides*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:directed`: `true` (bool) - Apply directional transitions
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:index`: `1` (number) - Present slide number
  - `:length`: `0` (number) - Presentation length (computed)"
  [& children]
  (into ['mathbox.primitives.present/Present] children))

(defn reveal
  "*Reveal/hide elements on transition*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:delay`: `0` (number) - Transition delay
  - `:delayEnter`: `null` (nullable number) - Transition enter delay, e.g. `0.3`
  - `:delayExit`: `null` (nullable number) - Transition exit delay, e.g. `0.3`
  - `:duration`: `0.3` (number) - Transition duration
  - `:durationEnter`: `0.3` (number) - Transition enter duration
  - `:durationExit`: `0.3` (number) - Transition exit duration
  - `:enter`: `null` (nullable number) - Enter state, e.g. `0.5`
  - `:exit`: `null` (nullable number) - Exit state, e.g. `0.5`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:stagger`: `[0, 0, 0, 0]` (vec4) - Stagger dimensions, e.g. `[2, 1, 0, 0]`"
  [& children]
  (into ['mathbox.primitives.present/Reveal] children))

(defn slide
  "*Presentation slide*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:early`: `0` (number) - Appear early steps
  - `:from`: `null` (nullable number) - Appear from step, e.g. `2`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:late`: `0` (number) - Stay late steps
  - `:order`: `0` (nullable number) - Slide order
  - `:steps`: `1` (number) - Slide steps
  - `:to`: `null` (nullable number) - Disappear on step, e.g. `4`"
  [& children]
  (into ['mathbox.primitives.present/Slide] children))

(defn step
  "*Step through a sequenced animation*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:delay`: `0` (number) - Step delay
  - `:duration`: `0.3` (number) - Step duration
  - `:ease`: `\"cosine\"` (ease) - Animation ease (linear, cosine, binary, hold)
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pace`: `0` (number) - Step pace
  - `:playback`: `\"linear\"` (ease) - Playhead ease (linear, cosine, binary, hold)
  - `:realtime`: `false` (bool) - Run on real time, not clock time
  - `:rewind`: `2` (number) - Step rewind factor
  - `:script`: `{}` (object) - Animation script, e.g. `{ \"0\": { props: { color: \"red\" }, expr: { size: function (t) { return Math.sin(t) + 1; }}}, \"1\": ...}`
  - `:skip`: `true` (bool) - Speed up through skips
  - `:speed`: `1` (number) - Step speed
  - `:stops`: `null` (nullable number array) - Playhead stops, e.g. `[0, 1, 3, 5]`
  - `:target`: `\"<\"` (select) - Animation target
  - `:trigger`: `1` (nullable number) - Trigger on step"
  [opts]
  ['mathbox.primitives.present/Step opts])

(defn compose
  "*Full-screen render pass*

  - `:alpha`: `false` (bool) - Compose with alpha transparency
  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:color`: `\"white\"` (color) - Color
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:source`: `\"<\"` (select) - Input source
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `false` (bool) - Test Z buffer
  - `:zWrite`: `false` (bool) - Write Z buffer"
  [opts]
  ['mathbox.primitives.rtt/Compose opts])

(defn rtt
  "*Render objects to a texture*

  - `:camera`: `\"[camera]\"` (select) - Active camera
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:height`: `null` (nullable number) - RTT height, e.g. `360`
  - `:history`: `1` (number) - RTT history
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:magFilter`: `\"linear\"` (filter) - Texture magnification filtering
  - `:minFilter`: `\"linear\"` (filter) - Texture minification filtering
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:speed`: `1` (number) - Global speed
  - `:type`: `\"unsignedByte\"` (type) - Texture data type
  - `:width`: `null` (nullable number) - RTT width, e.g. `640`"
  [& children]
  (into ['mathbox.primitives.rtt/Rtt] children))

(defn shader
  "*Custom shader snippet*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:code`: `\"\"` (string) - Shader code
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:language`: `\"glsl\"` (string) - Shader language
  - `:sources`: `null` (nullable select) - Sampler sources, e.g. `[\"#pressure\", \"#divergence\"]`
  - `:uniforms`: `null` (nullable object) - Shader uniform objects (three.js style), e.g. `{ time: { type: 'f', value: 3 }}`"
  [opts]
  ['mathbox.primitives.shader/Shader opts])

(defn format
  "*Text formatter*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `null` (nullable array) - Array of labels, e.g. `[\"Grumpy\", \"Sleepy\", \"Sneezy\"]`
  - `:detail`: `24` (number) - Font detail
  - `:digits`: `null` (nullable positive number) - Digits of precision, e.g. `2`
  - `:expr`: `null` (nullable function) - Label formatter expression, e.g. `function (x, y, z, w, i, j, k, l, time, delta) { ... }`
  - `:font`: `\"sans-serif\"` (font) - Font family
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:live`: `true` (bool) - Update continuously
  - `:magFilter`: `\"linear\"` (filter) - Texture magnification filtering
  - `:minFilter`: `\"linear\"` (filter) - Texture minification filtering
  - `:sdf`: `5` (number) - Signed distance field range
  - `:source`: `\"<\"` (select) - Input source
  - `:style`: `\"\"` (string) - Font style, e.g. `\"italic\"`
  - `:type`: `\"float\"` (type) - Texture data type
  - `:variant`: `\"\"` (string) - Font variant, e.g. `\"small-caps\"`
  - `:weight`: `\"\"` (string) - Font weight, e.g. `\"bold\"`"
  [opts]
  ['mathbox.primitives.text/Format opts])

(defn label
  "*Draw GL labels*

  - `:background`: `\"rgb(255, 255, 255)\"` (color) - Outline background
  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `0` (number) - Depth scaling
  - `:expand`: `0` (number) - Expand glyphs
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:offset`: `[0, -20]` (vec2) - 2D offset
  - `:opacity`: `1` (positive number) - Opacity
  - `:outline`: `2` (number) - Outline size
  - `:points`: `<` (select) - Points data source
  - `:size`: `16` (number) - Text size
  - `:snap`: `false` (bool) - Snap to pixel
  - `:text`: `\"<\"` (select) - Text source
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  [opts]
  ['mathbox.primitives.text/Label opts])

(defn retext
  "*Text atlas resampler*

  - `:centeredW`: `false` (bool) - Centered instead of corner sampling
  - `:centeredX`: `false` (bool) - Centered instead of corner sampling
  - `:centeredY`: `false` (bool) - Centered instead of corner sampling
  - `:centeredZ`: `false` (bool) - Centered instead of corner sampling
  - `:channels`: `4` (number) - Resample channels
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `null` (nullable number) - Resample factor depth, e.g. `10`
  - `:height`: `null` (nullable number) - Resample factor height, e.g. `10`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:indices`: `4` (number) - Resample indices
  - `:items`: `null` (nullable number) - Resample factor items, e.g. `10`
  - `:paddingW`: `0` (number) - Number of samples padding
  - `:paddingX`: `0` (number) - Number of samples padding
  - `:paddingY`: `0` (number) - Number of samples padding
  - `:paddingZ`: `0` (number) - Number of samples padding
  - `:sample`: `\"relative\"` (mapping) - Source sampling (relative, absolute)
  - `:shader`: `\"<\"` (select) - Shader to use
  - `:size`: `\"absolute\"` (mapping) - Scaling mode (relative, absolute)
  - `:source`: `\"<\"` (select) - Input source
  - `:width`: `null` (nullable number) - Resample factor width, e.g. `10`"
  [opts]
  ['mathbox.primitives.text/Retext opts])

(defn text
  "*GL text source*

  - `:aligned`: `false` (bool) - Use (fast) integer lookups
  - `:bufferDepth`: `1` (number) - Voxel buffer depth
  - `:bufferHeight`: `1` (number) - Voxel buffer height
  - `:bufferWidth`: `1` (number) - Voxel buffer width
  - `:channels`: `4` (number) - Number of channels
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `null` (nullable object) - Data array
  - `:depth`: `1` (nullable number) - Voxel depth
  - `:detail`: `24` (number) - Font detail
  - `:expr`: `null` (nullable emitter) - Data emitter expression
  - `:font`: `\"sans-serif\"` (font) - Font family
  - `:fps`: `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  - `:height`: `1` (nullable number) - Voxel height
  - `:hurry`: `5` (number) - Maximum frames to hurry per frame
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `4` (number) - Number of items
  - `:limit`: `60` (number) - Maximum frames to track
  - `:live`: `true` (bool) - Update continuously
  - `:magFilter`: `\"linear\"` (filter) - Texture magnification filtering
  - `:minFilter`: `\"linear\"` (filter) - Texture minification filtering
  - `:observe`: `false` (bool) - Pass clock time to data
  - `:realtime`: `false` (bool) - Run on real time, not clock time
  - `:sdf`: `5` (number) - Signed distance field range
  - `:style`: `\"\"` (string) - Font style, e.g. `\"italic\"`
  - `:type`: `\"float\"` (type) - Texture data type
  - `:variant`: `\"\"` (string) - Font variant, e.g. `\"small-caps\"`
  - `:weight`: `\"\"` (string) - Font weight, e.g. `\"bold\"`
  - `:width`: `1` (nullable number) - Voxel width"
  [opts]
  ['mathbox.primitives.text/Text opts])

(defn clock
  "*Relative clock that starts from zero.*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:delay`: `0` (number) - Play delay
  - `:from`: `0` (number) - Play from
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:loop`: `false` (bool) - Loop
  - `:pace`: `1` (number) - Play pace
  - `:realtime`: `false` (bool) - Run on real time, not clock time
  - `:seek`: `null` (nullable number) - Seek to time, e.g. `4`
  - `:speed`: `1` (number) - Play speed
  - `:to`: `Infinity` (number) - Play until"
  [& children]
  (into ['mathbox.primitives.time/Clock] children))

(defn now
  "*Absolute UNIX time in seconds since 01/01/1970*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:now`: `null` (nullable timestamp) - Current moment, e.g. `1444094929.619`
  - `:pace`: `1` (number) - Time pace
  - `:seek`: `null` (nullable number) - Seek to time
  - `:speed`: `1` (number) - Time speed"
  [& children]
  (into ['mathbox.primitives.time/Now] children))

(defn fragment
  "*Apply custom fragment shader pass*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:gamma`: `false` (boolean) - Pass RGBA values in sRGB instead of linear RGB
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"light\"` (fragmentPass) - Fragment pass (color, light, rgba)
  - `:shader`: `\"<\"` (select) - Shader to use"
  [& children]
  (into ['mathbox.primitives.transform/Fragment] children))

(defn layer
  "*Independent 2D layer/overlay*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `1` (number) - 3D Depth
  - `:fit`: `y` (fit) - Fit to (contain, cover, x, y)
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)"
  [& children]
  (into ['mathbox.primitives.transform/Layer] children))

(defn mask
  "*Apply custom mask pass*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:shader`: `\"<\"` (select) - Shader to use"
  [& children]
  (into ['mathbox.primitives.transform/Mask] children))

(defn transform
  "*Transform geometry in 3D*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:eulerOrder`: `xyz` (swizzle) - 3D Euler order
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:matrix`: `[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]` (mat4) - 3D Projective Matrix
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0]` (vec3) - 3D Position
  - `:quaternion`: `[0, 0, 0, 1]` (quat) - 3D Quaternion
  - `:rotation`: `[0, 0, 0]` (vec3) - 3D Euler rotation
  - `:scale`: `[1, 1, 1]` (vec3) - 3D Scale"
  [& children]
  (into ['mathbox.primitives.transform/Transform] children))

(defn transform4
  "*Transform geometry in 4D*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:matrix`: `[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]` (mat4) - 4D Affine Matrix
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0, 0]` (vec4) - 4D Position
  - `:scale`: `[1, 1, 1, 1]` (vec4) - 4D Scale"
  [& children]
  (into ['mathbox.primitives.transform/Transform4] children))

(defn vertex
  "*Apply custom vertex shader pass*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:shader`: `\"<\"` (select) - Shader to use"
  [& children]
  (into ['mathbox.primitives.transform/Vertex] children))

(defn cartesian
  "*Apply cartesian view*

  * *classes* = `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  * *eulerOrder* = `xyz` (swizzle) - Euler order
  * *id* = `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  * *pass* = `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  * *position* = `[0, 0, 0]` (vec3) - 3D Position
  * *quaternion* = `[0, 0, 0, 1]` (quat) - 3D Quaternion
  * *range* = `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  * *rotation* = `[0, 0, 0]` (vec3) - 3D Euler rotation
  * *scale* = `[1, 1, 1]` (vec3) - 3D Scale
  * *visible* = `true` (bool) - Visibility for rendering"
  [& children]
  (ev/fragment
   (into ['mathbox.primitives.view/Cartesian] children)
   mathbox))

(defn cartesian4
  "*Apply 4D cartesian view*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0, 0]` (vec4) - 4D Position
  - `:range`: `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  - `:scale`: `[1, 1, 1, 1]` (vec4) - 4D Scale
  - `:visible`: `true` (bool) - Visibility for rendering"
  [& children]
  (ev/fragment
   (into ['mathbox.primitives.view/Cartesian4] children)
   mathbox))

(defn polar
  "*Apply polar view*

  - `:bend`: `1` (number) - Amount of polar bend
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:eulerOrder`: `xyz` (swizzle) - Euler order
  - `:helix`: `0` (number) - Expand into helix
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0]` (vec3) - 3D Position
  - `:quaternion`: `[0, 0, 0, 1]` (quat) - 3D Quaternion
  - `:range`: `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  - `:rotation`: `[0, 0, 0]` (vec3) - 3D Euler rotation
  - `:scale`: `[1, 1, 1]` (vec3) - 3D Scale
  - `:visible`: `true` (bool) - Visibility for rendering"
  [& children]
  (ev/fragment
   (into ['mathbox.primitives.view/Polar] children)
   mathbox))

(defn spherical
  "*Apply spherical view*

  - `:bend`: `1` (number) - Amount of spherical bend
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:eulerOrder`: `xyz` (swizzle) - Euler order
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0]` (vec3) - 3D Position
  - `:quaternion`: `[0, 0, 0, 1]` (quat) - 3D Quaternion
  - `:range`: `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  - `:rotation`: `[0, 0, 0]` (vec3) - 3D Euler rotation
  - `:scale`: `[1, 1, 1]` (vec3) - 3D Scale
  - `:visible`: `true` (bool) - Visibility for rendering"
  [& children]
  (ev/fragment
   (into ['mathbox.primitives.view/Spherical] children)
   mathbox))

(defn stereographic
  "*Apply stereographic projection*

  - `:bend`: `1` (number) - Amount of stereographic bend
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:eulerOrder`: `xyz` (swizzle) - Euler order
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0]` (vec3) - 3D Position
  - `:quaternion`: `[0, 0, 0, 1]` (quat) - 3D Quaternion
  - `:range`: `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  - `:rotation`: `[0, 0, 0]` (vec3) - 3D Euler rotation
  - `:scale`: `[1, 1, 1]` (vec3) - 3D Scale
  - `:visible`: `true` (bool) - Visibility for rendering"
  [& children]
  (ev/fragment
   (into ['mathbox.primitives.view/Stereographic] children)
   mathbox))

(defn stereographic4
  "*Apply 4D stereographic projection*

  - `:bend`: `1` (number) - Amount of stereographic bend
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0, 0]` (vec4) - 4D Position
  - `:range`: `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  - `:scale`: `[1, 1, 1, 1]` (vec4) - 4D Scale
  - `:visible`: `true` (bool) - Visibility for rendering"
  [& children]
  (ev/fragment
   (into ['mathbox.primitives.view/Stereographic4] children)
   mathbox))

(defn view
  "*Adjust view range*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:range`: `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  - `:visible`: `true` (bool) - Visibility for rendering"
  [& children]
  (into ['mathbox.primitives.view/View] children))
