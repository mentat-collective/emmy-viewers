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

(plot/of-x {:z my-fn :color "blue" :width 256})

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
                0]))))
     :x [-1 1]
     :y [-1 1]
     :z [-1 1]})))

(ev/with-let [!state {:amplitude 1}]
  (plot/scene
   {:range [[-6 6] [-6 6] [-6 6]]
    :scale [1 1 1]}
   (emmy.leva/controls {:atom !state})
   (plot/of-x {:z my-fn :color "blue" :width 256})
   (plot/of-z {:y (ev/with-params {:atom !state :params [:amplitude]}
                    (fn [amplitude]
                      (* amplitude (D my-fn))))
               :color "green" :width 256})
   (plot/of-xz
    {:width  128
     :height 128
     :y (ev/with-params {:atom !state :params [:amplitude]}
          (fn [amplitude]
            (fn [[x y]]
              (* amplitude
                 (cos (* x y))))))})))
