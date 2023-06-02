(ns emmy.portal.viewer
  (:require [mafs.debug]
            [mafs.line]
            [mafs.core]
            [mafs.coordinates]
            [mafs.plot]
            [portal.ui.api :as p]))

(defn inject [href]
  (let [link (.createElement js/document "link")]
    (set! (.-rel link) "stylesheet")
    (set! (.-href link) href)
    (js/document.head.appendChild link)))

(inject "https://unpkg.com/computer-modern@0.1.2/cmu-serif.css")
(inject "https://unpkg.com/mafs@0.16.0/core.css")
(inject "https://unpkg.com/mafs@0.16.0/font.css")

#_
(defn with-options [& children]
  (let [[options set-options!] (react/useState ::loading)]
    (react/useEffect
     (fn []
       (-> (state/invoke `portal.runtime/get-options)
           (.then set-options!)))
     #js [])
    (into [:r> (.-Provider options-context)
           #js {:value (if (= options ::loading)
                         options
                         (merge options @extension-options))}]
          children)))

(p/register-viewer!
 {:name ::reagent
  :predicate (constantly true)
  :component
  (fn [form]
    (eval (list 'fn [] form)))})
