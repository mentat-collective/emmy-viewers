(ns emmy.viewer.raster
  "The raster computational backend: Emmy functions compiled to WebAssembly by
  [raster](https://github.com/replikativ/raster) instead of to JavaScript source.

  Emmy still does the algebra. The function is simplified symbolically, each
  output component becomes a `raster.core/deftm` kernel, and raster compiles each
  kernel to an import-free wasm module that ships inside the viewer fragment as
  base64. The browser side keeps the calling convention of Emmy's `:js` mode, and
  falls back to the `:js` function while a module is loading or when the browser
  has no WebAssembly.

  Select it around the code that builds a viewer:

  ```clojure
  (require '[emmy.viewer.compile :as vc])

  (binding [vc/*backend* :raster]
    (emmy.mafs/of-x (fn [x] (* x (sin x)))))
  ```

  Layers: [[emmy.viewer.kernel.plan]] (the algebra), [[emmy.viewer.raster.lower]]
  (raster's vocabulary) and [[emmy.viewer.raster.glue]] (the JS) are pure; their
  contracts live in [[emmy.viewer.raster.schema]]. This namespace is the
  boundary: the only place a kernel is evaluated or compiled.

  Requires raster on the classpath (the `:raster` alias). A function raster cannot
  compile (an operator outside [[emmy.viewer.raster.lower/lower]]'s vocabulary)
  throws at build time, naming the form."
  (:require [emmy.expression.compile :as xc]
            [emmy.viewer.raster.glue :as glue]
            [emmy.viewer.raster.lower :as lower]
            [emmy.viewer.kernel.plan :as plan]
            [raster.compiler.pipeline :as pl]
            [raster.core]
            [raster.math]
            [raster.numeric]
            [emmy.viewer.kernel.backend :as backend])
  (:import (java.util Base64)))

(def ^:private kernel-ns
  "Where kernels are defined. raster resolves a kernel through its var."
  'emmy.viewer.raster.kernels)

(defn- ensure-kernel-ns! []
  (or (find-ns kernel-ns)
      (let [n (create-ns kernel-ns)]
        (binding [*ns* n]
          (refer-clojure)
          (require '[raster.core] '[raster.math] '[raster.numeric]))
        n)))

(defn- wasm-bytes*
  "Defines the kernel `form` and compiles it to a wasm module exporting `k`."
  [form]
  (let [n     (ensure-kernel-ns!)
        kname (second form)]
    (binding [*ns* n]
      (eval form))
    (-> (pl/compile-wasm (ns-resolve n kname) :name "k" :dtype :double)
        :bytes
        byte-array)))

(def ^:private wasm-bytes
  "Kernel source to module bytes. Memoized on the source with the kernel name
  left out, so an expression compiles once however many viewers use it."
  (let [cache (atom {})]
    (fn [form]
      (let [key (drop 2 form)]
        (or (@cache key)
            (let [bs (wasm-bytes* form)]
              (swap! cache assoc key bs)
              bs))))))

(defn module
  "`plan`'s kernel (see [[emmy.viewer.raster.lower/kernel-form]]) as a wasm
  module, a byte array."
  [plan]
  (wasm-bytes (lower/kernel-form (gensym "kernel") plan)))

(defn- base64 [^bytes bs]
  (.encodeToString (Base64/getEncoder) bs))

(defrecord RasterBackend []
  backend/KernelBackend
  (kernel-form [_ f params initial-state opts]
    (let [p        (plan/plan f params initial-state opts)
          mod      (module p)
          sync?    (<= (alength ^bytes mod) glue/sync-limit)
          fallback (xc/compile-state-fn f params initial-state (assoc opts :mode :js))]
      (list (list 'js/Function. "fb" (glue/glue p (base64 mod) sync?))
            (list* 'js/Function. fallback)))))

(defn compiled-fn
  "Return the raster kernel form through its KernelBackend implementation."
  [f params initial-state opts]
  (backend/kernel-form (->RasterBackend) f params initial-state opts))

(backend/register-backend! :raster (->RasterBackend))
