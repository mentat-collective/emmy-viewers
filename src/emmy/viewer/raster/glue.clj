(ns ^:no-doc emmy.viewer.raster.glue
  "Pure layer of the raster backend, third stage: the JavaScript that loads a
  plan's compiled modules and calls them in the calling convention Emmy's `:js`
  mode would have produced, so a viewer cannot tell which backend compiled its
  function. Strings only; nothing is evaluated here."
  (:require [clojure.string :as str]))

(def sync-limit
  "The largest module, in bytes, that browsers compile synchronously on the main
  thread. A larger module is compiled asynchronously, and calls go to the `:js`
  fallback until it is ready."
  4096)

(def layout
  "Where the glue keeps a call's data in the module's memory, as byte offsets.
  raster's modules export 16 MiB of memory and use none of it themselves (no
  data segments, no stack), so the glue owns all of it: parameters first,
  then the inputs, then the outputs."
  {:params 0
   :inputs 4096
   :outputs 8388608
   :end 16777216})

(defn- f64-index
  "The Float64Array index of byte offset `k` of [[layout]]."
  [k]
  (quot (layout k) 8))

(defn- js-out
  "The JS expression of an output of shape `shape`, read from the output row
  that starts at Float64Array index `base`."
  [shape base]
  (cond
    (nil? shape)    (str "F[" base "]")
    (vector? shape) (str "[" (str/join ", " (map #(js-out % base) shape)) "]")
    :else           (str "F[" (+ base shape) "]")))

(def ^:private prelude
  "Shared JS: decoding, the kernel `k` and its memory view `F` (null until
  loaded), parameter caching and input writing."
  (str/join
   "\n"
   ["const bytes = (b) => Uint8Array.from(atob(b), (c) => c.charCodeAt(0));"
    "let k = null, F = null, lastPs = undefined;"
    "const use = (inst) => { k = inst.exports.k; F = new Float64Array(inst.exports.memory.buffer); };"
    ;; Parameters change only when a slider moves, and the caller then passes a
    ;; new object, so an identical object is never rewritten.
    "const setPs = (ps) => {"
    "  if (ps === lastPs) return;"
    "  lastPs = ps;"
    "  if (ps == null) return;"
    (str "  let j = " (f64-index :params) ";")
    "  if (Array.isArray(ps) || ArrayBuffer.isView(ps)) { for (let i = 0; i < ps.length; i++) F[j++] = ps[i]; }"
    "  else { for (const v of ps) F[j++] = v; }"
    "};"
    ;; Writes one point's state, flattening nested structures, from index j.
    "const put = (x, j) => {"
    "  if (typeof x === \"number\") { F[j] = x; return j + 1; }"
    "  if (Array.isArray(x) || ArrayBuffer.isView(x)) {"
    "    for (let i = 0; i < x.length; i++) j = typeof x[i] === \"number\" ? (F[j] = x[i], j + 1) : put(x[i], j);"
    "    return j;"
    "  }"
    "  for (const v of x) j = put(v, j);"
    "  return j;"
    "};"]))

(defn- loader
  "JS that instantiates `module` (base64), synchronously when `sync?`."
  [module sync?]
  (str "if (typeof WebAssembly !== \"undefined\") {\n"
       (if sync?
         (str "  try { use(new WebAssembly.Instance(new WebAssembly.Module(bytes(" (pr-str module) ")), {})); }\n"
              "  catch (e) { k = null; }\n")
         (str "  WebAssembly.instantiate(bytes(" (pr-str module) "), {})\n"
              "    .then((r) => use(r.instance))\n"
              "    .catch(() => { k = null; });\n"))
       "}"))

(defn- function-source
  "The JS function that calls the kernel for one point in `plan`'s calling
  convention, and `fb` while the kernel is not loaded. It allocates nothing
  except a :native or :structure function's vector result."
  [{:keys [convention state params outputs shape]}]
  (let [x0   (f64-index :inputs)
        o0   (f64-index :outputs)
        call (str "  k(" (layout :inputs) ", " (layout :outputs) ", " (layout :params) ", 1);\n")
        ps   (when (seq params) "  setPs(ps);\n")]
    (case convention
      :native
      (let [xs (str/join ", " state)]
        (str "const f = function(" xs ") {\n"
             "  if (k === null) return fb(" xs ");\n"
             (str/join (map-indexed (fn [j s] (str "  F[" (+ x0 j) "] = " s ";\n")) state))
             call
             "  return " (js-out shape o0) ";\n"
             "};"))

      :structure
      (str "const f = function(state, ps) {\n"
           "  if (k === null) return fb(state, ps);\n"
           ps
           "  put(state, " x0 ");\n"
           call
           "  return " (js-out shape o0) ";\n"
           "};")

      :primitive
      (str "const f = function(ys, yps, ps) {\n"
           "  if (k === null) return fb(ys, yps, ps);\n"
           ps
           (str/join (map (fn [j] (str "  F[" (+ x0 j) "] = ys[" j "];\n")) (range (count state))))
           call
           (str/join (map (fn [j] (str "  yps[" j "] = F[" (+ o0 j) "];\n")) (range (count outputs))))
           "};"))))

(defn- batch-source
  "JS for `f.batch(xs, n, ps, out)`: evaluates `n` points in one kernel call
  per chunk. `xs` holds the points' flattened states row-major (an array or
  typed array of n * d numbers), `ps` the parameters (ignored without), `out`
  an optional Float64Array of n * m to fill. Returns the outputs, row-major;
  null while the kernel is not loaded."
  [{:keys [state outputs]}]
  (let [d (count state)
        m (count outputs)]
    (str "f.batch = function(xs, n, ps, out) {\n"
         "  if (k === null) return null;\n"
         "  setPs(ps);\n"
         "  out = out || new Float64Array(n * " m ");\n"
         "  const cap = Math.floor(Math.min("
         (- (layout :outputs) (layout :inputs)) " / " (* 8 d) ", "
         (- (layout :end) (layout :outputs)) " / " (* 8 m) "));\n"
         "  const typed = ArrayBuffer.isView(xs);\n"
         "  for (let s = 0; s < n; s += cap) {\n"
         "    const c = Math.min(cap, n - s);\n"
         "    const rows = typed ? xs.subarray(s * " d ", (s + c) * " d ") : xs.slice(s * " d ", (s + c) * " d ");\n"
         "    F.set(rows, " (f64-index :inputs) ");\n"
         "    k(" (layout :inputs) ", " (layout :outputs) ", " (layout :params) ", c);\n"
         "    out.set(F.subarray(" (f64-index :outputs) ", " (f64-index :outputs) " + c * " m "), s * " m ");\n"
         "  }\n"
         "  return out;\n"
         "};")))

(defn glue
  "The source of a JS function of one argument, `fb` (the same function compiled
  by Emmy's `:js` mode), that loads `module` (the plan's kernel, base64 wasm)
  and returns a function in `plan`'s calling convention. The returned function
  answers `wasm()` and `ready()` with whether the kernel is loaded, exposes
  `dims` (state, outputs, params), and `batch(...)` evaluates many points in
  one kernel call (see [[batch-source]])."
  [{:keys [state outputs params] :as plan} module sync?]
  (str/join "\n" [prelude
                  (loader module sync?)
                  (function-source plan)
                  (batch-source plan)
                  "f.wasm = () => k !== null;"
                  "f.ready = () => k !== null;"
                  (str "f.dims = {state: " (count state)
                       ", outputs: " (count outputs)
                       ", params: " (count params) "};")
                  "return f;"]))
