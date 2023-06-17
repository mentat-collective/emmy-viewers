^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.manifold.fdg
  #:nextjournal.clerk{:toc true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.calculus.manifold :as cm]
            [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.leva :as leva]
            [emmy.mathbox.plot :as p]
            [emmy.viewer :as ev]))

{:nextjournal.clerk/width :wide}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; ## Fun with Manifolds

(defn surface
  ([{:keys [f] :as opts}]
   (let [f (if (cm/coordinate-system? f)
             (fn [[x y]]
               (cm/manifold-point-representation
                (cm/coords->point f [x y])))
             f)]
     (-> (p/parametric-surface
          (assoc opts :f f))
         (ev/fragment p/scene)))))

(defn slider-surface [name {:keys [u v] :as opts}]
  (ev/with-let [!opts {:u (peek u) :v (peek v)}]
    (p/scene
     {:axis-options
      {:x {:label-ticks? false}
       :y {:label-ticks? false}
       :z {:label-ticks? false}}
      :grids []}
     (leva/controls
      {:folder {:name name}
       :schema
       {:u {:min (first u) :max (peek u) :step 0.01}
        :v {:min (first v) :max (peek v) :step 0.01}}
       :atom !opts})
     (surface
      (assoc opts
             :u [0 (ev/get !opts :u)]
             :v [-1 (ev/get !opts :v)])))))

;; Mobius strip:

(defn mobius [[u v]]
  [(* (cos u) (+ 1 (* (/ v 2) (cos (/ u 2)))))
   (* (sin u) (+ 1 (* (/ v 2) (cos (/ u 2)))))
   (* (/ v 2) (sin (/ u 2)))])

(p/of-xy
 {:x-lines 8
  :y-lines 8
  :rangeX [-2 2]
  :rangeY [-2 2]
  :color "#3090FF"
  :z (fn [[x y]]
       (- (square x) (square y)))})

;; TODO get the lines straight, options etc
(p/of-yz
 {:rangeX [-2 2]
  :rangeY [-2 2]
  :x (fn [[x y]]
       (- (square x)
          (square y)))})


(slider-surface
 "Mobius"
 {:f mobius
  :u [0 (* 2 Math/PI)]
  :v [-1 1]})

;; Klein bottle:

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

(slider-surface
 "Klein"
 {:f klein
  :u [0 Math/PI]
  :v [0 (* 2 Math/PI)]})

(defn toroidal->rect [R r]
  (fn [[theta phi]]
    (*
     (rotate-z-matrix phi)
     (up (+ R (* r (cos theta)))
         0
         (* r (sin theta))))))

;; Single torus:

(surface
 {:f (toroidal->rect 2 0.5)
  :u [0 (* 2 Math/PI)]
  :v [0 (* 2 Math/PI)]})

;; Parametrized torus:

(p/scene
 (p/point {:coords [0 1 1]
           :color "LimeGreen"
           :label "donkey"})
 (p/line
  {:coords [[0 0 0] [3 3 3]]
   :label "line"}))
#_(p/scene
   (ev/with-let [!opts {:R Math/PI :r Math/PI}]
     [:<>
      (leva/controls
       {:folder {:name "Torus"}
        :schema
        {:R {:min 0.5 :max 2 :step 0.01}
         :r {:min 0.5 :max 2 :step 0.01}}
        :atom !opts})
      (surface
       {:color "LimeGreen"
        :f (ev/with-params {:atom !opts :params [:R :r]}
             toroidal->rect)
        :u [0 (* 2 Math/PI)]
        :v [0 (* 2 Math/PI)]})]))

;; Torus with a parametric curve overlaid, both interactive:

(ev/with-let [!opts {:scale 1 :R 2 :r 0.5}]
  (p/scene
   (leva/controls
    {:atom !opts
     :folder {:name "Torus and Spring"}
     :schema
     {:scale {:min 0.5 :max 2 :step 0.01}
      :R     {:min 0.5 :max 2 :step 0.01}
      :r     {:min 0.5 :max 2 :step 0.01}}})
   (p/parametric-curve
    {:f (ev/with-params {:atom !opts :params [:scale :R]}
          (fn [scale R]
            (up (* R cos) (* R sin) (* scale 0.3 identity))))
     :t [-10 10]})
   (surface
    {:f (ev/with-params {:atom !opts :params [:R :r]}
          toroidal->rect)
     :u [0 (* 2 Math/PI)]
     :v [0 (* 2 Math/PI)]})))

;; A scmutils coordinate system object!!

(surface
 {:f S2-spherical
  :u [0 Math/PI]
  :v [0 (* 2 Math/PI)]})

;; parametrized:

(ev/with-let
  [!opts {:opacity 0.8
          :theta (* 2 Math/PI)
          :phi Math/PI}]
  (p/scene
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
     {:opacity (ev/get !opts :opacity)}})))
