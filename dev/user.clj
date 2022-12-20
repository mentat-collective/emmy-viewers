(ns user
  (:require [babashka.fs :as fs]
            [clojure.java.shell :refer [sh]]
            [clojure.string]
            [hiccup.page :as hiccup]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.config :as config]
            [nextjournal.clerk.view]
            [nextjournal.clerk.viewer :as cv]
            [shadow.cljs.devtools.api :as shadow]))

(try (requiring-resolve 'cljs.analyzer.api/ns-resolve) (catch Exception _ nil))
(require '[sicmutils.env :refer :all])
(require '[sicmutils.expression.render :as xr])

(alter-var-root
 #'xr/*TeX-vertical-down-tuples*
 (constantly true))

(def index
  "src/demo.clj")

(def notebooks
  ["src/phase_portrait.clj"]
  #_["src/demo.clj"
     "src/functions.clj"
     "src/ellipsoid.clj"
     "src/phase_portrait.clj"
     "src/double_ellipsoid.clj"
     "src/pendulum.clj"
     "src/oscillator.clj"
     "src/live_oscillator.clj"
     "src/jsxgraph.clj"
     "src/circles.clj"
     "src/mathlive.clj"
     "src/cube_controls.clj"])

(def ^{:doc "static site defaults for local and github-pages modes."}
  defaults
  {:out-path   "public"
   :cas-prefix "/"})

(def ^{:doc "static site defaults for Clerk's Garden CDN."}
  garden-defaults
  {:cas-prefix "/mentat-collective/leva.cljs/commit/$GIT_SHA/"})

(defn rebind [^clojure.lang.Var v f]
  (let [old (.getRawRoot v)]
    (.bindRoot v (f old))))

(defonce _ignore
  (rebind
   #'nextjournal.clerk.view/include-viewer-css
   (fn [old]
     (fn [& xs]
       (concat
        (list
         (hiccup/include-css
          "https://unpkg.com/mathlive@0.83.0/dist/mathlive-static.css")
         (hiccup/include-css
          "https://unpkg.com/mathlive@0.83.0/dist/mathlive-fonts.css"))
        (apply old xs))))))

(defn start!
  "Runs [[clerk/serve!]] with our custom JS. Run this after generating custom JS
  with shadow in either production or `watch` mode."
  []
  (swap! config/!resource->url
         assoc
         "/js/viewer.js" "http://localhost:9000/js/main.js")
  (clerk/serve!
   {:browse? true
    :watch-paths ["src" "dev"]})
  (Thread/sleep 500)
  (clerk/show! index))

(defn replace-sha-template!
  "Given some `path`, modifies the file at `path` replaces any occurence of the
  string `$GIT_SHA` with the actual current sha of the repo."
  [path]
  (let [sha (-> (sh "git" "rev-parse" "HEAD")
                (:out)
                (clojure.string/trim))]
    (-> (slurp path)
        (clojure.string/replace "$GIT_SHA" sha)
        (->> (spit path)))))

(defn static-build!
  "This task is used to generate static sites for local use, github pages
  deployment and Clerk's Garden CDN.

  Accepts a map of options `opts` and runs the following tasks:

  - Slurps the output of the shadow-cljs `:clerk` build from `public/js/main.js`
    and pushes it into a CAS located at `(str (:out-path opts) \"/js/_data\")`.

  - Configures Clerk to generate files that load the js from the generated name
    above, stored in `(str (:cas-prefix opts) \"/js/_data\")`

  - Creates a static build of the single namespace [[index]] at `(str (:out-path
    opts) \"/index.html\")`

  - Replaces all instances of the string $GIT_SHA in `index.html` with the
    actual sha of the library.

  All `opts` are forwarded to [[nextjournal.clerk/build!]]."
  [opts]
  (let [{:keys [out-path cas-prefix]} (merge defaults opts)
        cas (cv/store+get-cas-url!
             {:out-path (str out-path "/js") :ext "js"}
             (fs/read-all-bytes "public/js/main.js"))]
    (swap! config/!resource->url assoc
           "/js/viewer.js"
           (str cas-prefix "js/" cas))
    (clerk/build!
     (merge {:index index}
            (assoc opts :out-path out-path)))
    (replace-sha-template!
     (str out-path "/index.html"))))

(defn garden!
  "Standalone executable function that runs [[static-build!]] configured for
  Clerk's Garden. See [[garden-defaults]] for customizations
  to [[static-build!]]."
  [opts]
  (println "Running npm install...")
  (println
   (sh "npm" "install"))
  (shadow/release! :clerk)
  (static-build!
   (merge garden-defaults opts)))
