^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns examples.pq-knot
  (:require
   #?@(:cljs [[mathbox.core :as mathbox]
              [mathbox.primitives :as mb]
              ["three/examples/jsm/controls/TrackballControls.js"
               :as TrackballControls]])
   [nextjournal.clerk :as-alias clerk]
   [mentat.clerk-utils.show :refer [show-sci show-cljs]]))

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

^{::clerk/sync true}
(defonce !state
  (atom
   {:p 7
    :q 8
    :r1 1.791
    :r2 0.95
    :r3 0.1}))

(show-sci
 [:<>
  [leva.core/Config {:drag true}]
  [leva.core/Controls
   {:atom !state
    :schema
    {:p {:min 0 :max 32 :step 1}
     :q {:min 0 :max 32 :step 1}
     :r1 {:min 0 :max 3 :step 0.001}
     :r2 {:min 0.0 :max 2.5 :step 0.01}
     :r3 {:min 0.0 :max 0.2 :step 0.01}}}]])

#_
(comment
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

  (defn circle
    "Given some radius `r` and `angle`, returns the x-y-z coordinates of a point at
  angle `theta` on the unit circle sitting flat in the x-y plane."
    [r angle]
    [(* r (cos angle))
     (* r (sin angle))
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
    [R r2 r3 p q theta phi]
    (let [theta->xyz (torus-knot R (+ r2 r3) p q)
          M          (->TNB theta->xyz)]
      (+ (theta->xyz theta)
         (* (M theta)
            (circle r3 phi))))))

^{::clerk/visibility {:code :fold}}
(show-cljs
 (defn pq-knot
   [emit x69000 x69001 x69002 x69004 x69003 x69005 x69006]
   (let
       [G000000000000025d (* x69003 x69005)
        G0000000000000260 (Math/sin x69006)
        G0000000000000265 (Math/cos x69006)
        G0000000000000270 (+ x69001 x69002)
        G000000000000028a (* x69004 x69005)
        G0000000000000295 (Math/sin G000000000000028a)
        G00000000000002a3
        (Math/cos G000000000000025d)
        G00000000000002aa
        (Math/cos G000000000000028a)
        G00000000000002b5
        (Math/sin G000000000000025d)
        G00000000000002c9
        (* G0000000000000270 G00000000000002a3)
        G00000000000002d0
        (*
         G00000000000002aa
         G0000000000000270
         -1.0
         G00000000000002a3
         x69003
         x69003)
        G00000000000002d2
        (*
         G0000000000000270
         G00000000000002a3
         x69003
         G0000000000000270
         G00000000000002a3
         x69003)
        G00000000000002d5
        (- G00000000000002b5)
        G00000000000002da
        (- G0000000000000295)
        G00000000000002e6
        (*
         G0000000000000295
         G0000000000000270
         -1.0
         G00000000000002a3
         x69003
         x69003)
        G00000000000002f2
        (*
         G0000000000000270
         G00000000000002a3
         x69003
         G0000000000000270
         G00000000000002d5
         x69003
         x69003)
        G00000000000002fa
        (*
         G00000000000002da
         x69004
         G0000000000000270
         G00000000000002d5
         x69003)
        G0000000000000300
        (*
         G0000000000000270
         G00000000000002d5
         x69003
         G00000000000002aa
         x69004)
        G0000000000000307
        (*
         G00000000000002aa
         x69004
         G0000000000000270
         G00000000000002d5
         x69003)
        G000000000000030b
        (*
         G00000000000002aa
         G0000000000000270
         G00000000000002d5
         x69003)
        G0000000000000310
        (+ x69000 G00000000000002c9)
        G0000000000000313
        (*
         G0000000000000270
         G00000000000002d5
         x69003
         G00000000000002da
         x69004)
        G0000000000000318
        (*
         G0000000000000295
         G0000000000000270
         G00000000000002d5
         x69003)
        G000000000000031c
        (* G0000000000000310 G00000000000002da x69004)
        G000000000000031f
        (* G0000000000000310 -1.0 G00000000000002aa x69004 x69004)
        G0000000000000324
        (* G0000000000000310 G00000000000002da x69004 x69004)
        G0000000000000329
        (* G0000000000000310 G00000000000002aa x69004)
        G000000000000033d
        (+
         G00000000000002e6
         G0000000000000307
         G0000000000000324
         G0000000000000300)
        G0000000000000340
        (+
         G00000000000002d0
         G00000000000002fa
         G000000000000031f
         G0000000000000313)
        G0000000000000343
        (+ G000000000000030b G000000000000031c)
        G0000000000000354
        (+ G0000000000000318 G0000000000000329)
        G0000000000000359
        (* G0000000000000343 G0000000000000340)
        G000000000000035d
        (* G0000000000000354 G000000000000033d)
        G000000000000035f
        (* G0000000000000343 G0000000000000343)
        G0000000000000364
        (* G0000000000000354 G0000000000000354)
        G000000000000037f
        (+ G000000000000035f G0000000000000364 G00000000000002d2)
        G0000000000000387
        (+
         G0000000000000359
         G0000000000000359
         G000000000000035d
         G000000000000035d
         G00000000000002f2
         G00000000000002f2)
        G000000000000038a
        (/ -1.0 G000000000000037f)
        G0000000000000399
        (Math/sqrt G000000000000037f)
        G000000000000039d
        (* G0000000000000399 2.0)
        G00000000000003a2
        (/ 1.0 G0000000000000399)
        G00000000000003af
        (* G00000000000003a2 G0000000000000340)
        G00000000000003b6
        (* G00000000000003a2 G000000000000033d)
        G00000000000003ba
        (/ 1.0 G000000000000039d)
        G00000000000003be
        (*
         G00000000000003a2
         G0000000000000270
         G00000000000002d5
         x69003
         x69003)
        G00000000000003c1
        (*
         G0000000000000343
         G000000000000038a
         G00000000000003ba
         G0000000000000387)
        G00000000000003c3
        (*
         G0000000000000270
         G00000000000002a3
         x69003
         G000000000000038a
         G00000000000003ba
         G0000000000000387)
        G00000000000003c5
        (*
         G0000000000000354
         G000000000000038a
         G00000000000003ba
         G0000000000000387)
        G00000000000003cf
        (+ G00000000000003b6 G00000000000003c5)
        G00000000000003d2
        (+ G00000000000003af G00000000000003c1)
        G00000000000003d3
        (+ G00000000000003be G00000000000003c3)
        G00000000000003d4
        (* G00000000000003d2 G00000000000003d2)
        G00000000000003d7
        (* G00000000000003cf G00000000000003cf)
        G00000000000003d9
        (* G00000000000003d3 G00000000000003d3)
        G00000000000003db
        (+ G00000000000003d4 G00000000000003d7 G00000000000003d9)
        G00000000000003de
        (Math/sqrt G00000000000003db)
        G00000000000003df
        (/ 1.0 G00000000000003de)]
     (emit
      (+
       (* G0000000000000310 G00000000000002aa)
       (*
        (-
         (*
          G0000000000000354
          G00000000000003a2
          G00000000000003d3
          G00000000000003df)
         (*
          G0000000000000270
          G00000000000002a3
          x69003
          G00000000000003a2
          G00000000000003cf
          G00000000000003df))
        x69002
        G0000000000000265)
       (*
        G00000000000003d2
        G00000000000003df
        x69002
        G0000000000000260))
      (+
       (* G0000000000000310 G0000000000000295)
       (*
        (-
         (*
          G0000000000000270
          G00000000000002a3
          x69003
          G00000000000003a2
          G00000000000003d2
          G00000000000003df)
         (*
          G0000000000000343
          G00000000000003a2
          G00000000000003d3
          G00000000000003df))
        x69002
        G0000000000000265)
       (*
        G00000000000003cf
        G00000000000003df
        x69002
        G0000000000000260))
      (+
       (* G0000000000000270 G00000000000002b5)
       (*
        (-
         (*
          G0000000000000343
          G00000000000003a2
          G00000000000003cf
          G00000000000003df)
         (*
          G0000000000000354
          G00000000000003a2
          G00000000000003d2
          G00000000000003df))
        x69002
        G0000000000000265)
       (*
        G00000000000003d3
        G00000000000003df
        x69002
        G0000000000000260))))))

(show-cljs
 (defn ^:export PQKnot [!state]
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
     [:div {:state @!state}
      [mb/Area
       {:rangeX [(- Math/PI) Math/PI]
        :rangeY [(- Math/PI) Math/PI]
        :width 512
        :height 16
        :channels 3
        :live true
        :expr
        (fn [emit theta phi _i _j t]
          (let [{:keys [r1 r2 r3 p q]} (.-state !state)
                r3 (+ r3 (* r3 0.5 (* (Math/sin (* 2 theta t))
                                      (Math/sin (* 2 theta t)))))]
            (pq-knot emit r1 r2 r3 p q theta phi)))}]]

     [mb/Surface
      {:shaded true
       :color 0xcc0040
       :lineY true
       :width 1}]

     [mb/Resample {:height 5}]
     [mb/Line
      {:color 0xffffff
       :width 2}]]]))

;; ## Animation
;;
;; Note that you can't drop back INTO sci land unless you do some extra work
;; that we can document.

;; Then we can jump back to SCI, to get access to our shared state. Define the
;; full component that you need on the cljs side!

^{::clerk/width :wide}
(show-sci
 [js/examples.pq_knot.PQKnot !state])
