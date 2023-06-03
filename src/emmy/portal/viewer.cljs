(ns emmy.portal.viewer
  (:require [clojure.walk :refer [postwalk]]
            [clojure.string :as str]
            [mafs.debug]
            [mafs.line]
            [mafs.core]
            [mafs.coordinates]
            [mafs.plot]
            [portal.colors :as c]
            [portal.ui.api :as p]
            [portal.ui.inspector :as ins]
            [portal.ui.rpc :as rpc]
            [portal.ui.theme :as theme]
            ["react" :as react]))

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

(defn- inject [href]
  (let [link (.createElement js/document "link")]
    (set! (.-rel link) "stylesheet")
    (set! (.-href link) href)
    (js/document.head.appendChild link)))

(inject "https://unpkg.com/computer-modern@0.1.2/cmu-serif.css")
(inject "https://unpkg.com/mafs@0.16.0/core.css")
(inject "https://unpkg.com/mafs@0.16.0/font.css")

(def xform-key :nextjournal.clerk/viewer)

;; Without this, I was getting "Rendering error: Could not resolve symbol:
;; emmy.clerk/reagent-viewer". This symbol was inside one of the metadata entries.
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
  (let [xform (xform-key (meta v))
        theme (-> (theme/use-theme)
                  (assoc  ::background (ins/get-background)))]
    ;; I want to branch on (fn? xform), but it looks like the xform object
    ;; always returns `false` to `fn?`.
    [:div
     {:style
      {:border (str "1px solid " (::c/border theme))
       :border-radius (:border-radius theme)}}
     [:style (->style theme)]
     (if (or (not xform) (map? xform))
       [(->f v)]
       [:f> expand v])]))

(p/register-viewer!
 {:name ::reagent
  :component show-reagent
  :predicate
  (fn [v]
    (when-let [m (meta v)]
      (or (:portal.viewer/reagent? m)
          (= ::reagent (:portal.viewer/default m)))))})
