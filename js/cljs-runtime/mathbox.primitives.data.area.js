goog.provide('mathbox.primitives.data.area');
var module$node_modules$mathbox_react$build$cjs$index=shadow.js.require("module$node_modules$mathbox_react$build$cjs$index", {});
/**
 * *2D sampled matrix*
 * 
 *   :false `aligned` (bool) - Use (fast) integer lookups
 *   :axes `[1, 2]` (swizzle(2) axis) - Axis pair
 *   :bufferHeight `1` (number) - Matrix buffer height
 *   :bufferWidth `1` (number) - Matrix buffer width
 *   :centeredX `false` (bool) - Centered instead of corner sampling
 *   :centeredY `false` (bool) - Centered instead of corner sampling
 *   :channels `4` (number) - Number of channels
 *   :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
 *   :data `null` (nullable object) - Data array
 *   :expr `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, x, y, i, j, time, delta) { ... }`
 *   :fps `null` (nullable number) - Frames-per-second update rate, e.g. `60`
 *   :height `1` (nullable number) - Matrix height
 *   :history `1` (number) - Matrix history
 *   :hurry `5` (number) - Maximum frames to hurry per frame
 *   :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
 *   :items `4` (number) - Number of items
 *   :limit `60` (number) - Maximum frames to track
 *   :live `true` (bool) - Update continuously
 *   :magFilter `\"nearest\"` (filter) - Texture magnification filtering
 *   :minFilter `\"nearest\"` (filter) - Texture minification filtering
 *   :observe `false` (bool) - Pass clock time to data
 *   :paddingX `0` (number) - Number of samples padding
 *   :paddingY `0` (number) - Number of samples padding
 *   :rangeX `[-1, 1]` (vec2) - Range on axis
 *   :rangeY `[-1, 1]` (vec2) - Range on axis
 *   :realtime `false` (bool) - Run on real time, not clock time
 *   :type `\"float\"` (type) - Texture data type
 *   :width `1` (nullable number) - Matrix width
 */
mathbox.primitives.data.area.Area = reagent.core.adapt_react_class(module$node_modules$mathbox_react$build$cjs$index.Area);

//# sourceMappingURL=mathbox.primitives.data.area.js.map
