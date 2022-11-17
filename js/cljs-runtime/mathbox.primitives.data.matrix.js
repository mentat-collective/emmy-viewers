goog.provide('mathbox.primitives.data.matrix');
var module$node_modules$mathbox_react$build$cjs$index=shadow.js.require("module$node_modules$mathbox_react$build$cjs$index", {});
/**
 * *2D matrix*
 * 
 * :aligned `false` (bool) - Use (fast) integer lookups
 * :bufferHeight `1` (number) - Matrix buffer height
 * :bufferWidth `1` (number) - Matrix buffer width
 * :channels `4` (number) - Number of channels
 * :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
 * :data `null` (nullable object) - Data array
 * :expr `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, i, j, time, delta) { ... }`
 * :fps `null` (nullable number) - Frames-per-second update rate, e.g. `60`
 * :height `1` (nullable number) - Matrix height
 * :history `1` (number) - Matrix history
 * :hurry `5` (number) - Maximum frames to hurry per frame
 * :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
 * :items `4` (number) - Number of items
 * :limit `60` (number) - Maximum frames to track
 * :live `true` (bool) - Update continuously
 * :magFilter `\"nearest\"` (filter) - Texture magnification filtering
 * :minFilter `\"nearest\"` (filter) - Texture minification filtering
 * :observe `false` (bool) - Pass clock time to data
 * :realtime `false` (bool) - Run on real time, not clock time
 * :type `\"float\"` (type) - Texture data type
 * :width `1` (nullable number) - Matrix width
 */
mathbox.primitives.data.matrix.Matrix = reagent.core.adapt_react_class(module$node_modules$mathbox_react$build$cjs$index.Matrix);

//# sourceMappingURL=mathbox.primitives.data.matrix.js.map
