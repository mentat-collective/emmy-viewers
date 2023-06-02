(ns emmy.portal.viewer
  (:require [clojure.walk :refer [postwalk]]
            [mafs.debug]
            [mafs.line]
            [mafs.core]
            [mafs.coordinates]
            [mafs.plot]
            [portal.ui.api :as p]
            [portal.ui.rpc :as rpc]
            ["react" :as react]))

(defn inject [href]
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
  (let [[form set-form!] (react/useState [:div "Loading..."])
        xform            (xform-key (meta v))]
    (react/useEffect
     (fn []
       ;; I want this branch to perform the RPC call...
       (set-form! [:pre "Log: " (pr-str [(fn? xform) (type xform) (meta v)])])

       ;; But when I activate it I get this error in the logs:
       ;;
       ;; main.js:3403 Uncaught (in promise) Error: Doesn't support
       ;; namespace: [object Object] at uh (main.js:3403:404) at
       ;; main.js:4704:202
       #_(-> (rpc/call xform form)
             (.then (fn [ret]
                      (set-form! (->f ret)))))
       js/undefined)
     #js [])
    form))

(defn show-reagent [v]
  (let [xform (xform-key (meta v))]
    ;; I want to branch on (fn? xform), but it looks like the xform object
    ;; always returns `false` to `fn?`.
    (if (or (not xform) (map? xform))
      (->f v)
      [expand v])))

(p/register-viewer!
 {:name ::reagent
  :component show-reagent
  :predicate
  (fn [v]
    (when-let [m (meta v)]
      (or (:portal.viewer/reagent? m)
          (= ::reagent (:portal.viewer/default m)))))})
