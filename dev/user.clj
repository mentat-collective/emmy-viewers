(ns user
  (:require [mentat.clerk-utils.build :as b]
            [mentat.clerk-utils.css :as css]))

(css/set-css!
 ;; mafs
 "https://unpkg.com/computer-modern@0.1.2/cmu-serif.css"
 "https://unpkg.com/mafs@0.15.2/core.css"
 "https://unpkg.com/mafs@0.15.2/font.css"

 ;; JSXGraph
 "https://cdn.jsdelivr.net/npm/jsxgraph@1.5.0/distrib/jsxgraph.css"

 ;; mathbox
 "https://unpkg.com/mathbox@2.3.1/build/mathbox.css"

 ;; mathlive
 "https://unpkg.com/mathlive@0.85.1/dist/mathlive-static.css"
 "https://unpkg.com/mathlive@0.85.1/dist/mathlive-fonts.css")

(try (requiring-resolve 'cljs.analyzer.api/ns-resolve) (catch Exception _ nil))
(require '[emmy.env :refer :all])
(require '[emmy.expression.render :as xr])

(alter-var-root
 #'xr/*TeX-vertical-down-tuples*
 (constantly true))

(def index
  "src/emmy_viewers/demo.clj")

(def notebooks
  [
   "src/emmy_viewers/demo.clj"
   "src/emmy_viewers/functions.clj"
   "src/emmy_viewers/ellipsoid.clj"

   #_"src/phase_portrait.clj"
   ]
  #_[


     "src/phase_portrait.clj"
     "src/double_ellipsoid.clj"
     "src/pendulum.clj"
     "src/oscillator.clj"
     "src/live_oscillator.clj"
     "src/jsxgraph.clj"
     "src/circles.clj"
     "src/mathlive.clj"
     "src/cube_controls.clj"])

(def defaults
  {:index index
   :browse? true
   :watch-paths ["src" "dev"]
   :cljs-namespaces '[emmy-viewers.sci-extensions]})

(def static-defaults
  (assoc defaults
         :browse? false
         :paths notebooks
         :cname "emmy-viewers.mentat.org"
         :git/url "https://github.com/mentat-collective/emmy-viewers"))

(defn serve!
  ([] (serve! {}))
  ([opts]
   (b/serve!
    (merge defaults opts))))

(def halt! b/halt!)

(defn build! [opts]
  (b/build!
   (merge static-defaults opts)))
