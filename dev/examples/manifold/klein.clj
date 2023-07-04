^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.manifold.klein
  #:nextjournal.clerk{:toc true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.mathbox.physics :as ph]
            [emmy.env :as e :refer :all]
            [emmy.leva :as leva]
            [emmy.mathbox.plot :as p]
            [emmy.viewer :as ev]))

{:nextjournal.clerk/width :wide}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; # Fun with Klein Bottles

(defn slider-surface [name {:keys [u v] :as opts} & children]
  (ev/with-let [!opts {:u (peek u) :v (peek v)}]
    (apply
     p/scene
     (leva/controls
      {:folder {:name name}
       :schema
       {:u {:min (first u) :max (peek u) :step 0.01}
        :v {:min (first v) :max (peek v) :step 0.01}}
       :atom !opts})
     (p/parametric-surface
      (assoc opts
             :u [(first u) (ev/get !opts :u)]
             :v [(first v) (ev/get !opts :v)]))
     children)))

;; ## Mobius Strip

(defn mobius [[u v]]
  [(* (cos u) (+ 1 (* (/ v 2) (cos (/ u 2)))))
   (* (sin u) (+ 1 (* (/ v 2) (cos (/ u 2)))))
   (* (/ v 2) (sin (/ u 2)))])

(slider-surface
 "Mobius"
 {:f mobius
  :u [0 (* 2 Math/PI)]
  :v [-1 1]})

;; ## Klein bagel

(defn klein-bagel [r]
  (fn [[theta v]]
    (let [R (+ r (- (* (cos (/ theta 2)) (sin v))
                    (* (sin (/ theta 2)) (sin (* 2 v)))))]
      [(* R (cos theta))
       (* R (sin theta))
       (+ (* (sin (/ theta 2))
             (sin v))
          (* (cos (/ theta 2))
             (sin (* 2 v))))])))

;; Can you find the Emmy logo hidden inside?

(ev/with-let [!r {:r 2 :theta_0 1 :alpha_0 0 :steps 20}]
  [:<>
   (leva/controls
    {:atom !r
     :folder {:name "Klein Bagel"}
     :schema {:r {:min 2 :max 6 :step 0.01}
              :theta_0 {:label (->infix 'theta_0) :min 0 :max Math/PI :step 0.02}
              :alpha_0 {:label (->infix 'alpha_0) :min 0 :max Math/PI :step 0.02}
              :steps   {:min 500 :max 9000 :step 50}}})
   (slider-surface
    "Klein Bagel"
    {:f (ev/with-params {:atom !r :params [:r]}
          klein-bagel)
     :u [0 (* 2 Math/PI)]
     :v [0 (* 2 Math/PI)]}

    (ph/geodesic
     {:x0 [(ev/get !r :theta_0) 0]
      :v0 [(list 'Math/cos (ev/get !r :alpha_0))
           (list 'Math/sin (ev/get !r :alpha_0))]
      :xform (ev/with-params {:atom !r :params [:r]}
               klein-bagel)
      :steps (ev/get !r :steps)
      :width 2
      :end? true}))])

;; ## Klein bottle:

(defn klein-bottle [[u v]]
  [(* -2/15 (cos u)
      (+ (- (* 3 (cos v))
            (* 30 (sin u)))
         (- (* 90 (sin u) (expt (cos u) 4))
            (* 60 (sin u) (expt (cos u) 6)))
         (* 5 (cos u) (cos v) (sin u))))
   (* -1/15 (sin u)
      (+ (- (* 3 (cos v))
            (* 3 (square (cos u)) (cos v))
            (* 48 (cos v) (expt (cos u) 4)))
         (- (* 48 (cos v) (expt (cos u) 6))
            (* 60 (sin u)))
         (- (* 5 (cos u) (cos v) (sin u))
            (* 5 (cube (cos u)) (cos v) (sin u))
            (* 80 (expt (cos u) 5) (cos v) (sin u)))
         (* 80 (expt (cos u) 7) (cos v) (sin u))))
   (* 2/15 (sin v)
      (+ 3 (* 5 (cos u) (sin u))))])

(ev/with-let [!r {:theta_0 1 :alpha_0 0 :steps 20}]
  [:<>
   (leva/controls
    {:atom !r
     :folder {:name "Klein"}
     :schema {:theta_0 {:label (->infix 'theta_0) :min 0 :max Math/PI :step 0.02}
              :alpha_0 {:label (->infix 'alpha_0) :min 0 :max Math/PI :step 0.02}
              :steps   {:min 10 :max 9000 :step 50}}})

   (slider-surface
    "Klein"
    {:f klein-bottle
     :opacity 0.2
     :u [0 Math/PI]
     :v [0 (* 2 Math/PI)]}

    (ph/geodesic
     {:x0 [(ev/get !r :theta_0) 0]
      :v0 [(list 'Math/cos (ev/get !r :alpha_0))
           (list 'Math/sin (ev/get !r :alpha_0))]
      :xform klein-bottle
      :steps (ev/get !r :steps)
      :width 2
      :end? true}))])

;; ## Plucker's Conoid

(defn pluckers-conoid [n]
  (fn [[u v]]
    [(* v (cos u))
     (* v (sin u))
     (sin (* n u))]))

(ev/with-let [!n {:n 2}]
  [:<>
   (leva/controls {:atom !n
                   :folder {:name "Plucker's Conoid"}
                   :schema {:n {:min 2 :max 6 :step 1}}})
   (slider-surface
    "Plucker's Conoid"
    {:f (ev/with-params {:atom !n :params [:n]}
          pluckers-conoid)
     :opacity 0.75
     :u [0 (* 2 Math/PI)]
     :v [0 2]})])
