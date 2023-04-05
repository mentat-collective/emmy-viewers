^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.manifold.pq-knot
  (:require [emmy.env :as e]
            #?(:clj [emmy.expression.compile :as xc])
            [mentat.clerk-utils.show :refer [show-cljs]]
            [nextjournal.clerk #?(:clj :as :cljs :as-alias) clerk]
            #?@(:cljs [[leva.core]
                       [mathbox.core :as mathbox]
                       [mathbox.primitives :as mb]
                       [nextjournal.clerk.render]
                       [reagent.core]
                       ["three/examples/jsm/controls/TrackballControls.js"
                        :as TrackballControls]])))

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

(defn make-unit
  "Given a vector, returns a vector of unit length pointing in the same direction
  as `v`."
  [v]
  (e// v (e/abs v)))

(defn ->TNB
  "Given a parametric function `f` of a single variable `t`, generates a function
  of `t` that returns a matrix with columns B, N, T of the Frenet-Serret frame
  at point `(f t)`.

  See the section on 'other expressions' here:
  https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas#Other_expressions_of_the_frame"
  [f]
  (let [T (fn [t]
            (make-unit ((e/D f) t)))
        N (fn [theta]
            (make-unit ((e/D T) theta)))]
    (fn [t]
      (let [T-t (T t)
            N-t (N t)
            B-t (e/cross-product T-t N-t)]
        (e/matrix-by-cols B-t N-t T-t)))))

(defn torus-knot
  "Returns a function of `theta` that produces a 3-vector of the XYZ coordinates
  of a `(p, q)` torus knot wrapped around a torus (donut) with major radius `R`
  and minor radius `r`."
  [R r p q]
  (fn [theta]
    (let [xr (e/+ R (e/* r (e/cos (e/* q theta))))]
      [(e/* xr (e/cos (e/* p theta)))
       (e/* xr (e/sin (e/* p theta)))
       (e/* r  (e/sin (e/* q theta)))])))

(defn circle
  "Given some radius `r` and `angle`, returns the x-y-z coordinates of a point at
  angle `theta` on the unit circle sitting flat in the x-y plane."
  [r angle]
  [(e/* r (e/cos angle))
   (e/* r (e/sin angle))
   0])

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
  (let [theta->xyz (torus-knot R (e/+ r2 r3) p q)
        M          (->TNB theta->xyz)]
    (fn [[_ [theta phi]]]
      (e/+ (theta->xyz theta)
           (e/* (M theta)
                (circle r3 phi))))))

(show-cljs
 (defn ^:export PQKnot
   [{params :params
     schema :schema
     knot   :knot
     keys   :keys}]
   (let [f (apply js/Function knot)
         !params (reagent.core/atom params)
         !arr    (reagent.core/reaction
                  (apply
                   array
                   (map @!params keys)))]
     (fn [_]
       [:<>
        [nextjournal.clerk.render/inspect @!arr]
        [leva.core/Controls
         {:atom !params
          :schema schema}]
        [mathbox/MathBox
         {:container {:style {:height "500px" :width "100%"}}
          :threestrap
          {:plugins ["core", "controls", "cursor", "mathbox" "stats"]
           :controls {:klass TrackballControls/TrackballControls}}
          :renderer  {:background-color 0xffffff}
          :scale 500
          :focus 3}
         [mb/Camera {:proxy true
                     :position [1 1 3]}]
         [mb/Cartesian {:range [[-1 1] [-1 1] [-1 1]]
                        :scale [1 1 1]
                        :quaternion [0.7 0 0 0.7]}
          [mb/Area
           {:rangeX [(- (* 3 Math/PI)) (* 3 Math/PI)]
            :rangeY [(- Math/PI) Math/PI]
            :width 512
            :height 16
            :channels 3
            :live false
            :expr
            (let [in  (js/Array. 0 0 0 0 0)
                  out (js/Array. 0 0 0)]
              (fn [emit theta phi _i _j _t]
                (aset in 1 theta)
                (aset in 2 phi)
                (f in out @!arr)
                (emit (aget out 0)
                      (aget out 1)
                      (aget out 2))))}]
          [mb/Surface
           {:shaded true
            :color 0xcc0040
            :lineY true
            :width 1}]

          [mb/Resample {:height 5}]
          [mb/Line
           {:color 0xffffff
            :width 2}]]]]))))

;; ## Animation
;;
#?(:clj
   ^{::clerk/width :wide
     ::clerk/viewer
     {:transform-fn
      (comp clerk/mark-presented
            (clerk/update-val
             (fn [{:keys [params keys knot] :as m}]
               (assoc m
                      :knot
                      (xc/compile-state-fn
                       knot
                       (mapv params keys)
                       [0 [0 0] [0 0]]
                       {:mode :js
                        :arity 2
                        :simplify? false
                        :calling-convention :primitive
                        :generic-params? true})))))
      :render-fn '(fn [opts]
                    [js/examples.manifold.pq_knot.PQKnot opts])}}
   {:params
    {:p 7
     :q 8
     :r1 1.791
     :r2 0.95
     :r3 0.1}
    :keys [:r1 :r2 :r3 :p :q]
    :schema
    {:p {:min 0 :max 32 :step 1}
     :q {:min 0 :max 32 :step 1}
     :r1 {:min 0 :max 3 :step 0.001}
     :r2 {:min 0.0 :max 2.5 :step 0.01}
     :r3 {:min 0.0 :max 0.2 :step 0.01}}
    :knot torus-knot-tube})
