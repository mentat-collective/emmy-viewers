goog.provide('mathbox.primitives.data.volume');
var module$node_modules$mathbox_react$build$cjs$index=shadow.js.require("module$node_modules$mathbox_react$build$cjs$index", {});
/**
 * *3D sampled voxels*
 * 
 * :aligned `false` (bool) - Use (fast) integer lookups
 * :axes `[1, 2, 3]` (swizzle(3) axis) - Axis triplet
 * :bufferDepth `1` (number) - Voxel buffer depth
 * :bufferHeight `1` (number) - Voxel buffer height
 * :bufferWidth `1` (number) - Voxel buffer width
 * :centeredX `false` (bool) - Centered instead of corner sampling
 * :centeredY `false` (bool) - Centered instead of corner sampling
 * :centeredZ `false` (bool) - Centered instead of corner sampling
 * :channels `4` (number) - Number of channels
 * :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
 * :data `null` (nullable object) - Data array
 * :depth `1` (nullable number) - Voxel depth
 * :expr `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, x, y, z, i, j, k, time, delta) { ... }`
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
 * :paddingX `0` (number) - Number of samples padding
 * :paddingY `0` (number) - Number of samples padding
 * :paddingZ `0` (number) - Number of samples padding
 * :rangeX `[-1, 1]` (vec2) - Range on axis
 * :rangeY `[-1, 1]` (vec2) - Range on axis
 * :rangeZ `[-1, 1]` (vec2) - Range on axis
 * :realtime `false` (bool) - Run on real time, not clock time
 * :type `\"float\"` (type) - Texture data type
 * :width `1` (nullable number) - Voxel width
 */
mathbox.primitives.data.volume.Volume = reagent.core.adapt_react_class(module$node_modules$mathbox_react$build$cjs$index.Volume);

//# sourceMappingURL=mathbox.primitives.data.volume.js.map
