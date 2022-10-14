(ns demo.mathlive
  (:require ["mathlive" :as ml]))

(defn create [el]
  (let [mfe (ml/MathfieldElement.
             #js {:fontsDirectory ""
                  :style "cake"})]

    ;; Demo shows how to go back and forth... https://cortexjs.io/mathlive/demo/

    ;; This is a slightly older react component, similar to what we should
    ;; probably be building here.
    ;; https://github.com/concludio/react-mathlive/blob/b3ffefb30f8b63448d925c47228b8d0befcaf898/src/MathfieldComponent.tsx
    (.addEventListener mfe "input" (fn [x]
                                     ;; woah we can speak too!
                                     ;; (-> x .-target (.executeCommand "speak"))
                                     (js/console.log (-> x .-target (.getValue "math-json")))))
    (.replaceWith el mfe)))
