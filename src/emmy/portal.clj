(ns emmy.portal
  (:require [clojure.java.io :as io]
            [emmy.viewer :as ev]
            [emmy.expression.render :as xr]
            [portal.api :as p]))

(def viewers
  ["emmy/portal/tex.cljs"
   "emmy/portal/reagent.cljs"
   "emmy/portal/mafs.cljs"])

(defn install!
  ([] (apply install! viewers))
  ([path]
   (-> (io/resource path)
       (slurp)
       (p/eval-str)))
  ([path & more]
   (run! install! (cons path more))))

(defn start! []
  (let [p (p/open {:on-load install!})]
    (p/register! #'ev/expand)
    (p/register! #'xr/->TeX)
    (add-tap #'p/submit)
    p))
