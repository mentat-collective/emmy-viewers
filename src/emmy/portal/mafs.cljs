(ns emmy.portal.mafs
  (:require [clojure.string :as str]
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

(css/inject!
 "https://unpkg.com/computer-modern@0.1.2/cmu-serif.css"
 "https://unpkg.com/mafs@0.16.0/core.css"
 "https://unpkg.com/mafs@0.16.0/font.css")

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
  (str
   ".MafsView {"
   (str/join
    ";"
    (reduce-kv
     (fn [out mafs portal]
       (conj out (str "--mafs-" (name mafs) ": " (get theme portal))))
     []
     theme-mapping))
   "}"))

(defn show-mafs [v]
  (let [theme (-> (theme/use-theme)
                  (assoc ::background (ins/get-background)))]
    [:div
     {:style
      {:border (str "1px solid " (::c/border theme))
       :border-radius (:border-radius theme)}}
     [:style (->style theme)]
     [pr/show-reagent v]]))

(p/register-viewer!
 {:name :emmy.portal/mafs
  :component show-mafs
  :predicate
  (fn [v]
    (when-let [m (meta v)]
      (or (:portal.viewer/mafs? m)
          (= :emmy.portal/mafs
             (:portal.viewer/default m)))))})
