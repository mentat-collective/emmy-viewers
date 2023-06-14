^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.manifold.fdg
  #:nextjournal.clerk{:toc true :no-cache true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.calculus.manifold :as cm]
            [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.leva :as leva]
            [emmy.mathbox :as box]
            [emmy.mathbox.plot :as p]
            [emmy.viewer :as ev]))

{:nextjournal.clerk/width :wide}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; ## Fun with Manifolds

(defn scene [& children]
  (box/mathbox
   {:container  {:style {:height "400px" :width "100%"}}
    :renderer   {:background-color 0xffffff}}
   (apply box/cartesian
          {:range [[-10 10] [-10 10] [-10 10]] :scale [3 3 3]}
          (box/axis {:axis 1 :width 3})
          (box/axis {:axis 2 :width 3})
          (box/axis {:axis 3 :width 3})
          children)))

(defn surface
  ([{:keys [f] :as opts}]
   (let [f (if (cm/coordinate-system? f)
             (fn [[x y]]
               (cm/manifold-point-representation
                (cm/coords->point f [x y])))
             f)]
     (-> (p/parametric-surface
          (assoc opts :f f))
         (ev/fragment scene)))))

(defn toroidal->rect [R r]
  (fn [[theta phi]]
    (*
     (rotate-z-matrix phi)
     (up (+ R (* r (cos theta)))
         0
         (* r (sin theta))))))

(defn mobius [[u v]]
  [(* (cos u) (+ 1 (* (/ v 2) (cos (/ u 2)))))
   (* (sin u) (+ 1 (* (/ v 2) (cos (/ u 2)))))
   (* (/ v 2) (sin (/ u 2)))])

(surface
 {:f mobius
  :u [0 (* 2 Math/PI)]
  :v [-1 1]})

(defn slider-surface [name {:keys [f u v]}]
  (ev/with-let [!opts {:u (peek u) :v (peek v)}]
    (scene
     (leva/controls
      {:folder {:name name}
       :schema
       {:u {:min (first u) :max (second u) :step 0.01}
        :v {:min (first v) :max (second v) :step 0.01}}
       :atom !opts})
     (surface
      {:f f
       :u [0 (ev/get !opts :u)]
       :v [-1 (ev/get !opts :v)]}))))

(slider-surface
 "Mobius"
 {:f mobius
  :u [0 (* 2 Math/PI)]
  :v [-1 1]})

(defn klein [[u v]]
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

(surface
 {:f klein
  :u [0 (* 2 Math/PI)]
  :v [0 (* 2 Math/PI)]})

(ev/with-let [!opts {:scale 1 :R 2 :r 0.5}]
  (scene
   (leva/controls
    {:atom !opts
     :folder {:name "Torus and Spring"}
     :schema
     {:scale {:min 0.5 :max 2 :step 0.01}
      :R     {:min 0.5 :max 2 :step 0.01}
      :r     {:min 0.5 :max 2 :step 0.01}}})
   (p/parametric-path
    {:f (ev/with-params {:atom !opts :params [:scale :R]}
          (fn [scale R]
            (up (* R cos) (* R sin) (* scale 0.3 identity))))
     :t [-10 10]})
   (surface
    {:f (ev/with-params {:atom !opts :params [:R :r]}
          toroidal->rect)
     :u [0 (* 2 Math/PI)]
     :v [0 (* 2 Math/PI)]})))

(comment
  (surface
   {:f (toroidal->rect 2 0.5)
    :u [0 (* 2 Math/PI)]
    :v [0 (* 2 Math/PI)]})

  (surface
   {:f S2-spherical
    :u [0 (* 2 Math/PI)]
    :v [0 (* 2 Math/PI)]})

  (scene
   (ev/with-let [!opts {:R Math/PI :r Math/PI}]
     [:<>
      (leva/controls
       {:folder {:name "Torus"}
        :schema
        {:R {:min 0.5 :max 2 :step 0.01}
         :r {:min 0.5 :max 2 :step 0.01}}
        :atom !opts})
      (surface
       {:f (ev/with-params {:atom !opts :params [:R :r]}
             toroidal->rect)
        :u [0 (* 2 Math/PI)]
        :v [0 (* 2 Math/PI)]})]))

  ;; TODO try slider surface?
  (ev/with-let
    [!opts {:opacity 0.8
            :theta (* 2 Math/PI)
            :phi Math/PI}]
    (scene
     (leva/controls
      {:folder {:name "S2-spherical"}
       :schema
       {:opacity {:min 0 :max 1 :step 0.01}
        :theta   {:min 0 :max (* 2 Math/PI) :step 0.01}
        :phi     {:min 0 :max Math/PI :step 0.01}}
       :atom !opts})
     (surface
      {:f S2-spherical
       :u [0 (ev/get !opts :phi)]
       :v [0 (ev/get !opts :theta)]
       :surface
       {:opacity (ev/get !opts :opacity)}}))))
