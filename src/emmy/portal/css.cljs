(ns emmy.portal.css)

(defn inject!
  ([href]
   (let [link (.createElement js/document "link")]
     (set! (.-rel link) "stylesheet")
     (set! (.-href link) href)
     (js/document.head.appendChild link)))
  ([href & more]
   (run! inject! (cons href more))))
