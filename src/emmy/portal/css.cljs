(ns emmy.portal.css
  "Helper code for installing external CSS into the Portal page.")

(defn inject!
  "Given some number of `href` arguments, installs them into the header of the
  current page."
  ([href]
   (let [link (.createElement js/document "link")]
     (set! (.-rel link) "stylesheet")
     (set! (.-href link) href)
     (js/document.head.appendChild link)))
  ([href & more]
   (run! inject! (cons href more))))
