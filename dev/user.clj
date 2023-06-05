(ns user
  (:require [mentat.clerk-utils.build :as b]))

(try (requiring-resolve 'cljs.analyzer.api/ns-resolve) (catch Exception _ nil))
(require '[emmy.env])
(require '[emmy.expression.render :as xr])
(require '[emmy.clerk :as ec])

(ec/install-css!)

(alter-var-root
 #'xr/*TeX-vertical-down-tuples*
 (constantly true))

(def index
  "dev/emmy_viewers/notebook.clj")

(def notebooks
  ["dev/examples/**.clj"
   "dev/examples/**.cljc"
   "dev/emmy_viewers/**.clj"
   "dev/emmy_viewers/**.cljc"])

(def defaults
  {:index index
   :browse? true
   :watch-paths ["src" "dev"]
   :cljs-namespaces
   '[emmy-viewers.sci-extensions]})

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
