(ns emmy.portal
  (:require [clojure.java.io :as io]
            [emmy.viewer :as ev]
            [portal.api :as p]))

(defn install! []
  (-> (io/resource "emmy/portal/viewer.cljs")
      (slurp)
      (p/eval-str)))

(defn start! []
  (let [p (p/open {:on-load install! :launcher :emacs})]
    (p/register! #'ev/expand)
    (add-tap #'p/submit)
    p))
