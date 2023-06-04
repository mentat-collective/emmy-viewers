(ns emmy.portal.reagent
  (:require [clojure.walk :refer [postwalk]]
            [portal.ui.api :as p]
            [portal.ui.rpc :as rpc]
            ["react" :as react]))

(def xform-key :nextjournal.clerk/viewer)

;; Without this, I was getting "Rendering error: Could not resolve symbol:
;; emmy.clerk/reagent-viewer". This symbol was inside one of the metadata
;; entries.
(defn strip-meta [form]
  (postwalk
   (fn [x]
     (if (meta x)
       (vary-meta x dissoc xform-key)
       x))
   form))

(defn ->f [body]
  (eval
   (list 'fn [] (strip-meta body))))

(defn expand [v]
  (let [[form set-form!] (react/useState nil)]
    (react/useEffect
     (fn []
       (-> (rpc/call 'emmy.viewer/expand v)
           (.then (comp set-form! ->f)))
       js/undefined)
     #js [])
    form))

(defn show-reagent [v]
  (let [xform (xform-key (meta v))]
    (if (or (not xform) (map? xform))
      [(->f v)]
      [:f> expand v])))

(p/register-viewer!
 {:name :emmy.portal/reagent
  :component show-reagent
  :predicate
  (fn [v]
    (when-let [m (meta v)]
      (or (:portal.viewer/reagent? m)
          (= :emmy.portal/reagent
             (:portal.viewer/default m)))))})
