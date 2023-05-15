(ns examples.editor
  {:nextjournal.clerk/no-cache true}
  (:require [nextjournal.clerk :as clerk]))

;; # latest

(clerk/with-viewer
  {:render-fn
   '(fn [form]
      (let [!input (reagent.core/atom form)
            !val   (reagent.core/atom (load-string @!input))
            on-change
            (fn [code]
              (reset! !input code)
              (reset! !val
                      (try (load-string @!input)
                           (catch Error ex ex))))]
        (fn [value]
          [:div
           [:div.flex
            [:div.viewer-code.flex-auto.w-80.mb-2
             [nextjournal.clerk.render.code/editor
              !input
              {:on-change on-change}]]]
           [nextjournal.clerk.render/inspect
            @!val]])))}
  "
(defn add [& args] (apply + args))
(add 30)")
