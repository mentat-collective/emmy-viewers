(ns emmy.portal.mafs
  "Portal viewer for rendering Mafs.cljs reagent snippets. Requiring this viewer
  has the side-effect of requiring all namespaces
  from [Mafs.cljs](https://github.com/mentat-collective/Mafs.cljs) into the SCI
  context.

  Generate these fragments using the code in the [[emmy.mafs]] namespace and
  sub-namespaces.

  To use this viewer, first install the `mafs` npm package:

  ```bash
  npm install mafs@0.17.0
  ```

  Then install the viewer:

  ```clojure
  (emmy.portal/install! \"emmy/portal/mafs.cljs\")
  ```

  The viewer is automatically installed by the functions in [[emmy.portal]]."
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
            [portal.ui.options :as o]
            [portal.ui.inspector :as ins]
            [portal.ui.theme :as theme]))

(apply css/inject! (:mafs css-map))

(def viewer-name :emmy.portal/mafs)

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
                 (if-let [v (get theme portal)]
                   (conj out (str "--mafs-" (name mafs) ": " v))
                   out))
               []
               theme-mapping)]
    (str
     ".mafs-portal .MafsView {" (str/join ";" lines) "}")))

(defn show-mafs [_]
  (let [opts  (get (o/use-options) viewer-name)
        theme (when-not (= :default (:theme opts))
                (-> (theme/use-theme)
                    (assoc ::background
                           (ins/get-background))))]
    (fn [v]
      [:div.mafs-portal
       {:style
        {:border (str "1px solid " (::c/border theme))
         :border-radius (:border-radius theme)}}
       (when theme
         [:style (->style theme)])
       [pr/show-reagent v]])))

(p/register-viewer!
 {:name viewer-name
  :component show-mafs
  :predicate
  (fn [v]
    (when-let [m (meta v)]
      (or (:portal.viewer/mafs? m)
          (:portal.viewer/reagent? m)
          (= viewer-name
             (:portal.viewer/default m)))))})
