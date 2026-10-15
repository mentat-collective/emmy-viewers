^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.mathbox.polar
  #:nextjournal.clerk{:toc true}
  (:refer-clojure :exclude [+ * /])
  (:require [emmy.clerk :as ec]
            [emmy.env :refer [+ * / cos pi]]
            [emmy.leva]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]))

{:nextjournal.clerk/width :wide}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; # Polar Curves
;;
;; `plot/polar-curve` plots a radius `:r` as a function of the angle `theta`
;; into the `z = 0` plane of the scene.

(defn rose [k]
  (fn [theta]
    (* 3 (cos (* k theta)))))

;; The function works locally, with numbers or symbols:

[((rose 3) 0) ((rose 3) 'theta)]

;; A three-petal rose, sampled over the default range of `[0, 2π]`:

(plot/scene
 {:range [[-4 4] [-4 4] [-4 4]]}
 (plot/polar-curve {:r (rose 3) :color "Salmon"}))

;; A cardioid and a spiral, with an explicit `:range` for the spiral and an
;; arrow at its end:

(plot/scene
 {:range [[-4 4] [-4 4] [-4 4]]}
 (plot/polar-curve
  {:r (fn [theta] (+ 1 (cos theta)))
   :color "#3090ff"
   :width 6})
 (plot/polar-curve
  {:r (fn [theta] (/ theta 4))
   :range [0 (* 5 pi)]
   :samples 512
   :end? true
   :color "green"}))

;; The radius function can depend on parameters held in an atom:

(ev/with-let [!state {:k 2}]
  (plot/scene
   {:range [[-4 4] [-4 4] [-4 4]]}
   (emmy.leva/controls {:atom !state})
   (plot/polar-curve
    {:r (ev/with-params {:atom !state :params [:k]}
          rose)
     :samples 512})))
