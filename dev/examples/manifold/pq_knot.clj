^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.manifold.pq-knot
  #:nextjournal.clerk{:toc true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.leva :as leva]
            [emmy.mathbox :as box]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]))

{:nextjournal.clerk/width :wide}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; ## (p, q) Torus Knots

;; https://en.wikipedia.org/wiki/Torus_knot
;;
;; https://sketchesoftopology.wordpress.com/2011/03/28/pqisqp/
;; https://core.ac.uk/download/pdf/82119056.pdf
;;
;; WOAH really cool!!! http://www.jessebett.com/TorusKnotFibration/torusknot.html this has a particle moving around on the surface too.
;;
;; Wow, can I recreate this???? http://www.jessebett.com/TorusKnotFibration/index.html
;;
;; Hell yeah, he used mathbox
;; https://github.com/jessebett/TorusKnotFibration/blob/gh-pages/torusknot.html..
;; we can totally port this!!!

;; more 3d curves, look at this https://rockey-math.github.io/mathbox/graph3d-curve
;;
;; yarn curve: https://www.cs.cmu.edu/~kmcrane/Projects/Other/YarnCurve.pdf

(defn make-unit
  "Given a vector, returns a vector of unit length pointing in the same direction
  as `v`."
  [v]
  (/ v (abs v)))

(defn ->TNB
  "Given a parametric function `f` of a single variable `t`, generates a function
  of `t` that returns a matrix with columns B, N, T of the Frenet-Serret frame
  at point `(f t)`.

  See the section on 'other expressions' here:
  https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas#Other_expressions_of_the_frame"
  [f]
  (let [T (fn [t]
            (make-unit ((D f) t)))
        N (fn [theta]
            (make-unit ((D T) theta)))]
    (fn [t]
      (let [T-t (T t)
            N-t (N t)
            B-t (cross-product T-t N-t)]
        (matrix-by-cols B-t N-t T-t)))))

(defn torus-knot
  "Returns a function of `theta` that produces a 3-vector of the XYZ coordinates
  of a `(p, q)` torus knot wrapped around a torus (donut) with major radius `R`
  and minor radius `r`."
  [R r p q]
  (fn [theta]
    (let [xr (+ R (* r (cos (* q theta))))]
      [(* xr (cos (* p theta)))
       (* xr (sin (* p theta)))
       (* r  (sin (* q theta)))])))

(defn toroidal->rect [R r]
  (fn [[theta phi]]
    (* (rotate-z-matrix phi)
       (up (+ R (* r (cos theta)))
           0
           (* r (sin theta))))))

;; Here is a visualization of the torus knot wrapped around a torus:

^{:nextjournal.clerk/visibility {:code :fold}}
(ev/with-let [!opts {:R 2 :r 0.5 :p 7 :q 8}]
  (plot/scene
   (leva/controls
    {:atom !opts
     :folder {:name "Torus and Curve"}
     :schema
     {:R {:min 0.5 :max 2 :step 0.01}
      :r {:min 0.5 :max 2 :step 0.01}
      :p {:min 0 :max 32 :step 1}
      :q {:min 0 :max 32 :step 1}}})

   (plot/parametric-curve
    {:f (ev/with-params {:atom !opts :params [:R :r :p :q]}
          torus-knot)
     :t [(- Math/PI) Math/PI]
     :width 512})

   (plot/parametric-surface
    {:f (ev/with-params {:atom !opts :params [:R :r]}
          toroidal->rect)
     :u [(- Math/PI) Math/PI]
     :v [(- Math/PI) Math/PI]})))

(defn circle
  "Given some radius `r` and `angle`, returns the x-y-z coordinates of a point at
  angle `theta` on the unit circle sitting flat in the x-y plane."
  [r angle]
  [(* r (cos angle))
   (* r (sin angle))
   0])

(defn path->tube [theta->xyz r]
  (let [M  (->TNB theta->xyz)]
    (fn [[theta phi]]
      (+ (theta->xyz theta)
         (* (M theta)
            (circle r phi))))))

(defn torus-knot-tube
  "Given:

  `R`    - the major radius of a torus
  `r2`   - minor radius of a torus
  `r3`   - radius of a helitorus cross-section
  `p, q` - torus knot params

  Returns a function that generates the x-y-z coordinates of a point on a `(p,
  q)` torus knot at angle `theta` around the torus and `phi` around a tube
  wrapping the curve."
  [R r2 r3 p q]
  (path->tube
   (torus-knot R (+ r2 r3) p q)
   r3))

(defn scene [& children]
  (box/mathbox
   {:container  {:style {:height "500px" :width "100%"}}
    :renderer  {:background-opacity 0}
    :scale 500 :focus 3}
   (box/camera {:proxy true :position [1 1 3]})
   (apply box/cartesian
          {:range [[-1 1] [-1 1] [-1 1]]
           :scale [1 1 1]}
          children)))

^{:nextjournal.clerk/width :full
  :nextjournal.clerk/visibility {:code :fold}}
(ev/with-let [!opts {:p 7 :q 8 :r1 1.791 :r2 0.95 :r3 0.1 :torus? false}]
  (scene
   (leva/controls
    {:folder {:name "PQ Knot"}
     :atom !opts
     :schema
     {:p {:min 0 :max 32 :step 1}
      :q {:min 0 :max 32 :step 1}
      :r1 {:min 0 :max 3 :step 0.001}
      :r2 {:min 0.0 :max 2.5 :step 0.01}
      :r3 {:min 0.0 :max 0.2 :step 0.01}}})
   (plot/parametric-surface
    {:f (ev/with-params
          {:atom !opts :params [:r1 :r2 :r3 :p :q]}
          torus-knot-tube)
     :simplify? false
     :color 0xcc0040
     :grid-color 0xffffff
     :grid-opacity 1
     :opacity 1
     :width 512
     :height 16
     :x-lines 100
     :y-lines 4
     :u [(- Math/PI) Math/PI]
     :v [(- Math/PI) Math/PI]})
   `(when (:torus? @~!opts)
      ~(plot/parametric-surface
        {:f (ev/with-params {:atom !opts :params [:r1 :r2 :r3]}
              (fn [r1 r2 r3]
                (toroidal->rect r1 (+ r2 r3))))
         :opacity 0.75
         :u [(- Math/PI) Math/PI]
         :v [(- Math/PI) Math/PI]}))))
