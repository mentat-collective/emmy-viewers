(ns user
  (:require [hiccup.page :as hiccup]
            [nextjournal.clerk.config :as config]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.view]
            [sicmutils.env :refer :all]
            [sicmutils.expression.render :as xr]))

(requiring-resolve 'cljs.analyzer.api/ns-resolve)

;; To get everything running, first follow the README instructions:
;;
;;```
;; shadow-cljs watch clerk
;;```
;;
;; Then jack in, come here and run the commands in the comment.
;;
;; Better rendering for slides.

(alter-var-root
 #'xr/*TeX-vertical-down-tuples*
 (constantly true))

;; Same with my `[sicmutils.env :refer :all]` to get the REPL working.

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

(def notebooks
  ["src/demo.clj"
   "src/functions.clj"
   "src/ellipsoid.clj"
   "src/double_ellipsoid.clj"
   "src/pendulum.clj"
   "src/oscillator.clj"
   "src/live_oscillator.clj"
   "src/jsxgraph.clj"
   "src/circles.clj"
   "src/mathlive.clj"
   "src/cube_controls.clj"])

(defn start! []
  (swap! config/!resource->url
         merge
         {"/js/viewer.js" "http://localhost:9000/js/main.js"})
  (clerk/serve!
   {:browse? true
    :watch-paths ["src"]
    :port 7777})
  (Thread/sleep 500)
  (clerk/show! "src/demo.clj"))

(defn github-pages! [_]
  (swap! config/!resource->url merge {"/js/viewer.js" "/sicmutils-viewers/js/main.js"})
  (clerk/build!
   {:paths notebooks
    :bundle? false
    :browse? false
    :out-path "public"}))

(defn publish-local!
  ([] (publish-local! nil))
  ([_]
   (swap! config/!resource->url merge {"/js/viewer.js" "/js/main.js"})
   (clerk/build!
    {:paths notebooks
     :bundle? false
     :browse? false
     :out-path "public"})))

(comment
  (start!)
  (clerk/serve! {:browse? true})
  (publish-local!))

(comment
  ;; If the watcher's not running, call clerk/show on files to be rendered:

  ;; intro:
  (clerk/show! "src/demo.clj")

  ;; Mathbox basics:
  (clerk/show! "src/cube_controls.clj")

  ;; functions:
  (clerk/show! "src/functions.clj")

  ;; symbolic physics:
  (clerk/show! "src/einstein.clj")

  ;; vega, symbolic, double-pendulum
  (clerk/show! "src/pendulum.clj")

  ;; mathbox physics:
  (clerk/show! "src/oscillator.clj")
  (clerk/show! "src/ellipsoid.clj")
  (clerk/show! "src/double_ellipsoid.clj")

  ;; browser/client comms:
  (clerk/show! "src/live_oscillator.clj"))
