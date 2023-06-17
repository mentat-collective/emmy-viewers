^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.mathbox.functions
  #:nextjournal.clerk{:toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare numerator denominator ref partial
             infinite? abs])
  (:require [emmy.clerk :as ec]
            [emmy.leva]
            [emmy.env :as e :refer :all]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]))

{:nextjournal.clerk/width :wide}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; ## Function Viewer

;; ### Demo
;;
;; Let's make a function to try!

(defn my-fn [x]
  (+ -1
     (square (sin x))
     (square (cos (* 2 x)))))

;; The function works locally, with numbers or symbols:

[(my-fn 1) (my-fn 'x)]

;; Then we'll call it with our new viewer:


(plot/of-x {:z my-fn :samples 256})

(ev/with-let [!opts {:x-max 5
                     :color "#3090ff"}]
  (plot/scene
   {:range [[-5 (ev/get !opts :x-max)] [-5 5] [-5 5]]}
   (emmy.leva/controls
    {:folder {:name "Plot Color"}
     :atom !opts})
   (plot/polar-surface
    {:shaded? true
     :color (ev/get !opts :color)
     :grid-r 8
     :grid-theta 8
     :z (fn [[r theta]]
          (* 1/4 (square r)
             (cos (* 3 theta))))})))

(defn normalize [v]
  (/ v (abs v)))

(ev/with-let [!state {:ax 1 :ay 0}]
  (plot/scene
   (emmy.leva/controls {:atom !state})
   (plot/vector-field
    {:f (ev/with-params {:atom !state :params [:ax :ay]}
          (fn [ax ay]
            (fn [[x y]]
              (normalize
               [(- (- y ay) (- x ax))
                (- (- (- x ax)) (- y ay))
                0]))))})))

(ev/with-let [!state {:amplitude 1}]
  (plot/scene
   (emmy.leva/controls {:atom !state})
   (plot/of-x {:z my-fn :color "blue" :samples 256})
   (plot/of-y {:z (ev/with-params {:atom !state :params [:amplitude]}
                    (fn [amplitude]
                      (* amplitude (D my-fn))))
               :color "green" :samples 256})

   (plot/of-xy
    {:x-samples 128
     :y-samples 128
     :z (ev/with-params {:atom !state :params [:amplitude]}
          (fn [amplitude]
            (fn [[x y]]
              (* amplitude
                 (cos (* x y))))))})))
