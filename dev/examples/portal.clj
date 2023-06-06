(ns examples.portal
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.mafs.core]
            [emmy.env :as e :refer :all]
            [emmy.mafs :as mafs]
            [emmy.portal :as p]
            [emmy.viewer :as ev]))

;; ## Portal Support

(comment
  (def portal
    (p/start!
     {:emmy.portal/tex {:macros {"\\f" "#1f(#2)"}}
      :theme :portal.colors/zenburn}))

  ;; Test a basic reagent fragment:
  (tap> ^{:portal.viewer/default :emmy.portal/reagent}
        [:pre "Hello!"])

  ;; now try a basic mafs scene:
  (tap>
   (mafs/of-x sin))

  ;; then a more complicated one!
  (tap>
   (ev/with-let [!phase [0 0]]
     (let [shifted (ev/with-params {:atom !phase :params [0]}
                     (fn [shift]
                       (((cube D) tanh) (- identity shift))))]
       (mafs/mafs
        (mafs/cartesian)
        (mafs/of-x shifted)
        (mafs/inequality
         {:y {:<= shifted :> cos} :color :blue})
        (mafs/movable-point
         {:atom !phase :constrain "horizontal"})))))

  ;; This is the tough one.
  (tap> (mafs/of-x sin {:color :indigo}))

  ;; WOAH! select the previous one in the UI then do this:
  (tap> (mafs/mafs
         (mafs/cartesian)
         @portal
         (mafs/of-y exp {:color :green})))

  ;; ## Expressions
  (tap>
   (with-meta
     (((exp D) (literal-function 'f)) 'x)
     {:portal.viewer/default :emmy.portal/tex})))
