(ns user)

(try (requiring-resolve 'cljs.analyzer.api/ns-resolve) (catch Exception _ nil))
(require '[emmy.env])
(require '[emmy.expression.render :as xr])
(require '[emmy.clerk :as ec])

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
   ;; Enable this when working on new components.
   :cljs-namespaces '[emmy-viewers.sci-extensions]
   })

(def static-defaults
  (assoc defaults
         :browse? false
         :paths notebooks
         :cname "emmy-viewers.mentat.org"
         :git/url "https://github.com/mentat-collective/emmy-viewers"))

(defn serve!
  ([] (serve! {}))
  ([opts]
   (ec/serve!
    (merge defaults opts))))

(def halt! ec/halt!)

(defn build! [opts]
  (ec/build!
   (merge static-defaults opts)))
