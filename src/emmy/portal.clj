(ns emmy.portal
  (:require [clojure.java.io :as io]
            [portal.api :as p]))

(defn install!
  "Run this after [[start!]] to install our viewer."
  []
  (-> (io/resource "emmy/portal/viewer.cljs")
      (slurp)
      (p/eval-str)))

(defn start! []
  (let [p (p/open {:on-load install!})]
    (p/register! #'apply)
    (add-tap #'p/submit)
    p))
