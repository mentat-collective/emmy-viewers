(ns emmy.portal
  (:require [clojure.java.io :as io]
            [portal.api :as p]))

(defn install!
  []
  (-> (io/resource "emmy/portal/viewer.cljs")
      (slurp)
      (p/eval-str)))

(defn submit [value]
  (if-let [xform (:transform (meta value))]
    (submit (xform (vary-meta value dissoc :transform)))
    (p/submit value)))

(defn start! []
  (let [p (p/open)]
    (add-tap #'submit)
    p))

(comment
  ;; Start tapping out values
  (tap> :hello)

  ;; repro
  (tap> ^{:transform
          (fn [v]
            ^{:portal.viewer/default :portal-present.viewer/reagent}
            [:div "The value is " v])}
        [:pre "cake"]))
