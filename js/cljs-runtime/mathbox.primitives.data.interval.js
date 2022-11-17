goog.provide('mathbox.primitives.data.interval');
var module$node_modules$mathbox_react$build$cjs$index=shadow.js.require("module$node_modules$mathbox_react$build$cjs$index", {});
/**
 * *1D sampled array*
 * 
 * :aligned `false` (bool) - Use (fast) integer lookups
 * :axis `1` (axis) - Axis
 * :bufferWidth `1` (number) - Array buffer width
 * :centered `false` (bool) - Centered instead of corner sampling
 * :channels `4` (number) - Number of channels
 * :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
 * :data `null` (nullable object) - Data array
 * :expr `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, x, i, time, delta) { ... }`
 * :fps `null` (nullable number) - Frames-per-second update rate, e.g. `60`
 * :history `1` (number) - Array history
 * :hurry `5` (number) - Maximum frames to hurry per frame
 * :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
 * :items `4` (number) - Number of items
 * :limit `60` (number) - Maximum frames to track
 * :live `true` (bool) - Update continuously
 * :magFilter `\"nearest\"` (filter) - Texture magnification filtering
 * :minFilter `\"nearest\"` (filter) - Texture minification filtering
 * :observe `false` (bool) - Pass clock time to data
 * :padding `0` (number) - Number of samples padding
 * :range `[-1, 1]` (vec2) - Range on axis
 * :realtime `false` (bool) - Run on real time, not clock time
 * :type `\"float\"` (type) - Texture data type
 * :width `1` (nullable number) - Array width
 */
mathbox.primitives.data.interval.Interval = reagent.core.adapt_react_class(module$node_modules$mathbox_react$build$cjs$index.Interval);

//# sourceMappingURL=mathbox.primitives.data.interval.js.map
