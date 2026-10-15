(ns backends.build
  "Static build of the backends notebook with a viewer bundle compiled here, from
  this checkout's sources, by shadow-cljs (never the prebuilt CDN bundle).

    bb raster-e2e:build")

(def notebook
  "dev/backends/raster_vs_js.clj")

(def out-path
  "Where the static build goes; `dev/e2e/raster_render.mjs` serves it."
  "target/raster-e2e/build")

(defn build!
  "Builds [[notebook]] into [[out-path]]. `opts` are merged into the options of
  `emmy.clerk/build!`."
  [opts]
  ((requiring-resolve 'emmy.clerk/build!)
   (merge {:paths [notebook]
           :index notebook
           :out-path out-path
           :browse? false
           :cljs-namespaces '[emmy-viewers.sci-extensions]}
          opts)))
