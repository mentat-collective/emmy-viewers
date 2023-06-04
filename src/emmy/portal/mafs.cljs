(ns emmy.portal.mafs
  "The side effect of requiring this viewer namespace makes Mafs.cljs available to
  Portal."
  (:require [clojure.string :as str]
            [emmy.viewer.css :refer [css-map]]
            [emmy.portal.css :as css]
            [emmy.portal.reagent :as pr]
            [mafs.debug]
            [mafs.line]
            [mafs.core]
            [mafs.coordinates]
            [mafs.plot]
            [portal.colors :as c]
            [portal.ui.api :as p]
            [portal.ui.inspector :as ins]
            [portal.ui.theme :as theme]))

(apply css/inject! (:mafs css-map))

(def ^:private theme-mapping
  {:fg         ::c/text
   :bg         ::background
   :line-color ::c/border
   :red        ::c/exception
   :orange     ::c/uri
   :green      ::c/string
   :blue       ::c/namespace
   :indigo     ::c/boolean
   :violet     ::c/package
   :pink       ::c/number
   :yellow     ::c/tag})

(defn- ->style [theme]
  (let [lines (reduce-kv
               (fn [out mafs portal]
                 (conj out (str "--mafs-" (name mafs) ": "
                                (get theme portal))))
               []
               theme-mapping)]
    (str
     ".MafsView {" (str/join ";" lines) "}")))

(defn show-mafs [_]
  (let [theme (-> (theme/use-theme)
                  (assoc ::background
                         (ins/get-background)))]
    (fn [v]
      [:div
       {:style
        {:border (str "1px solid " (::c/border theme))
         :border-radius (:border-radius theme)}}
       [:style (->style theme)]
       [pr/show-reagent v]])))

(p/register-viewer!
 {:name :emmy.portal/mafs
  :component show-mafs
  :predicate
  (fn [v]
    (when-let [m (meta v)]
      (or (:portal.viewer/mafs? m)
          (= :emmy.portal/mafs
             (:portal.viewer/default m)))))})
