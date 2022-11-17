goog.provide('mathbox.primitives.data.voxel');
var module$node_modules$mathbox_react$build$cjs$index=shadow.js.require("module$node_modules$mathbox_react$build$cjs$index", {});
/**
 * *3D voxels*
 * 
 * :aligned `false` (bool) - Use (fast) integer lookups
 * :bufferDepth `1` (number) - Voxel buffer depth
 * :bufferHeight `1` (number) - Voxel buffer height
 * :bufferWidth `1` (number) - Voxel buffer width
 * :channels `4` (number) - Number of channels
 * :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
 * :data `null` (nullable object) - Data array
 * :depth `1` (nullable number) - Voxel depth
 * :expr `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, i, j, k, time, delta) { ... }`
 * :fps `null` (nullable number) - Frames-per-second update rate, e.g. `60`
 * :height `1` (nullable number) - Voxel height
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
 * :width `1` (nullable number) - Voxel width
 */
mathbox.primitives.data.voxel.Voxel = reagent.core.adapt_react_class(module$node_modules$mathbox_react$build$cjs$index.Voxel);

//# sourceMappingURL=mathbox.primitives.data.voxel.js.map
