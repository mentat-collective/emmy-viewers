(ns examples.portal
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.mafs.core]
            [emmy.env :as e :refer :all]
            [emmy.mafs :as mafs]
            [emmy.portal :as p]
            [emmy.viewer :as ev]))

;; Okay, repro time!
;;
;; - Start a REPL with the `:portal` profile activated.
;; - run the following two forms:

(comment
  (def portal
    (p/start!))

  ;; I tried to put a call to `install!` inside of `start!`, but it doesn't seem
  ;; to take effect.
  (p/install!)


  ;; Test a basic reagent fragment:
  (tap> ^{:portal.viewer/default :emmy.portal.viewer/reagent}
        [:pre "Hello!"])

  ;; now try a basic mafs scene:
  (tap>
   (mafs/mafs
    (mafs/cartesian)))

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
  (tap> (mafs/cartesian))

  ;; This form has a function under `:nextjournal.clerk/viewer`. We want to
  ;; apply that function BEFORE we render:
  (let [v (mafs/cartesian)
        m (meta v)]
    (tap> ((:nextjournal.clerk/viewer m) v)))

  ;; here's the metadata:
  (binding [*print-meta* true]
    (pr-str (mafs/cartesian)))

  ;; I can't seem to get the API call working! See `src/emmy/portal/viewer.cljs`
  ;; for my current best attempt and some notes.
  )
