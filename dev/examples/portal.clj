(ns examples.portal
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.mafs.core]
            [emmy.env :as e :refer :all]
            [emmy.mafs :as mafs]
            [emmy.portal :as p]
            [emmy.viewer :as ev]
            [portal.api]))

;; ## Portal Support

(comment
  (def portal
    (p/start!
     {:emmy.portal/tex {:macros {"\\f" "#1f(#2)"}}
      :theme :portal.colors/zenburn}))

  (tap> (mafs/of-x sin))

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

  (tap> (mafs/of-x sin {:color :indigo}))

  (tap>
   (with-meta
     (((exp D) (literal-function 'f)) 'x)
     {:portal.viewer/default :emmy.portal/tex})))
