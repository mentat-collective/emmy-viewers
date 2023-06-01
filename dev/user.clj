(ns user
  (:require [mentat.clerk-utils.build :as b]))

(try (requiring-resolve 'cljs.analyzer.api/ns-resolve) (catch Exception _ nil))
(require '[emmy.env])
(require '[emmy.expression.render :as xr])
(require '[emmy.viewer :as v])

(v/install-css!)

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

#_(comment
    (require '[portal.api :as p])
    (def p (p/open)) ; Open a new inspector
    (add-tap #'p/submit)                                        ; Add portal as a tap> target

    (tap> :hello)                                        ; Start tapping out values

    (do (portal.api/eval-str
         "(ns portal-present.viewer
        (:require [portal.ui.api :as p]
            [mafs.debug]
            [mafs.line]
            [mafs.core]
            [mafs.coordinates]
            [mafs.plot]
            [reagent.core :as r]))

(defn inject [href]
  (let [link (.createElement js/document \"link\")]
    (set! (.-rel link) \"stylesheet\")
    (set! (.-href link) href)
    (js/document.head.appendChild link)))

(inject \"https://unpkg.com/computer-modern@0.1.2/cmu-serif.css\")
(inject \"https://unpkg.com/mafs@0.16.0/core.css\")
(inject \"https://unpkg.com/mafs@0.16.0/font.css\")


(p/register-viewer!
 {:name ::mafs
  :predicate (constantly true)
  :component (fn [form] (eval (list 'fn [] form)))})")
        (tap>
         (with-meta '[mafs.core/Mafs [mafs.coordinates/Cartesian]] {:portal.viewer/default :portal-present.viewer/mafs})
         )))
