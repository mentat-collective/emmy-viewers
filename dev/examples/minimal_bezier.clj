;; # Stationary Bézier Curves

(ns examples.minimal-bezier
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial
             infinite? abs])
  (:require [emmy.clerk :as ec]
            [emmy.env :refer :all]
            [emmy.expression.compile :as xc]
            [emmy.mafs :as mafs]
            [emmy.viewer :as ev]
            [nextjournal.clerk :as clerk]))

{::clerk/width :wide}

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; In Chapter 1 of [SICM](https://tgvaughan.github.io/sicm/chapter001.html),
;; Sussman and Wisdom find the path of stationary action between two fixed
;; endpoints by representing the unknown path as an interpolating polynomial,
;; then letting a minimizer move the polynomial's interior points until the
;; action stops changing.
;;
;; This notebook runs the same experiment with a cubic Bézier curve. A cubic
;; Bézier has two fixed endpoints and two *control points*; the control points
;; become the coordinates of our search space. Any functional of the path, like
;; arc length or travel time, becomes an ordinary function of four numbers, and
;; making it stationary is a job for `multidimensional-minimize`.

;; ## Bézier Curves from Linear Interpolation
;;
;; We treat a curve as a function of $t \in [0, 1]$. Given two curves $v$ and
;; $w$, the *linear interpolation* ("lerp") between them is the curve
;;
;; $$(1 - t)\, v(t) + t\, w(t),$$
;;
;; which equals $v$ at $t = 0$ and $w$ at $t = 1$. Emmy's generic arithmetic
;; works on vectors and on symbolic expressions, so the definition is short:

(defn lerp [v w]
  (fn [t]
    (+ (* (- 1 t) (v t))
       (* t (w t)))))

;; A fixed point is a constant curve. Lerping between two of them traces out the
;; straight segment that joins them:

(let [segment (lerp (constantly [0 0])
                    (constantly [1 1]))]
  (mapv segment [0 0.25 0.5 0.75 1]))

;; De Casteljau's construction of a cubic Bézier curve is a triangle of lerps.
;; Lerp between neighbouring points, lerp between those results, and once more:
;;
;; ```
;; p0
;;     p01
;; p1       p012
;;     p12        p0123
;; p2       p123
;;     p23
;; p3
;; ```

(defn bezier
  "Returns the cubic Bézier curve with endpoints `p0` and `p3` and control points
  `p1` and `p2`, as a function of `t` in `[0, 1]`."
  [p0 p1 p2 p3]
  (let [[c0 c1 c2 c3] (map constantly [p0 p1 p2 p3])
        c01 (lerp c0 c1)
        c12 (lerp c1 c2)
        c23 (lerp c2 c3)]
    (lerp (lerp c01 c12)
          (lerp c12 c23))))

;; Because everything is generic, we can feed in symbols and recover the
;; polynomial form of the curve, one component per coordinate:

(ec/->TeX
 ((bezier '[x_0 y_0] '[x_1 y_1] '[x_2 y_2] '[x_3 y_3]) 't)
 :simplify? true)

;; ## Seeing a Curve
;;
;; This viewer draws a Bézier curve together with its control polygon. The
;; endpoints are red and the control points blue:

(defn bezier-viewer [{:keys [p0 p1 p2 p3 view-box]}]
  (mafs/mafs
   {:view-box view-box}
   (mafs/cartesian {:subdivisions 4})
   (mafs/polyline [p0 p1 p2 p3] {:color :gray :weight 1})
   (mafs/parametric {:xy (bezier p0 p1 p2 p3) :t [0 1]})
   (mafs/point p0 {:color :red})
   (mafs/point p3 {:color :red})
   (mafs/point p1 {:color :blue})
   (mafs/point p2 {:color :blue})))

(bezier-viewer
 {:p0 [0 1] :p1 [0 0] :p2 [1 1] :p3 [1 0]
  :view-box {:x [-0.5 1.5] :y [-0.5 1.5]}})

;; The curve leaves each endpoint heading toward its neighbouring control point:
;; the velocity at $t = 0$ is $3(p_1 - p_0)$ and at $t = 1$ it is
;; $3(p_3 - p_2)$.
;;
;; Here is the same curve with draggable control points. The client-side atom
;; holds the four coordinates $[c_{1x}\ c_{1y}\ c_{2x}\ c_{2y}]$, and
;; `ev/with-params` hands them to a function that returns the curve. Emmy
;; compiles that function down to JavaScript once, and the plot re-renders as
;; you drag.

(defn movable-control-point
  "A blue movable point that reads and writes entries `i` and `i + 1` of the
  client-side vector atom `!cs`."
  [!cs i]
  (mafs/movable-point
   {:color   :blue
    :point   `(subvec @~!cs ~i ~(+ i 2))
    :on-move `(fn [[x# y#]]
                (swap! ~!cs assoc ~i x# ~(+ i 1) y#))}))

(ev/with-let [!cs [0 0 1 1]]
  (mafs/mafs
   {:view-box {:x [-0.5 1.5] :y [-0.5 1.5]}}
   (mafs/cartesian {:subdivisions 4})
   (mafs/parametric
    {:t [0 1]
     :xy (ev/with-params {:atom !cs :params [0 1 2 3]}
           (fn [c1x c1y c2x c2y]
             (bezier [0 1] [c1x c1y] [c2x c2y] [1 0])))})
   (mafs/point [0 1] {:color :red})
   (mafs/point [1 0] {:color :red})
   (movable-control-point !cs 0)
   (movable-control-point !cs 2)))

;; ## Paths of Stationary Action
;;
;; Fix the endpoints $p_0$ and $p_3$. Each choice of control points
;; $c = (c_{1x}, c_{1y}, c_{2x}, c_{2y})$ then picks out one path $q_c$, and a
;; Lagrangian $L(t, q, \dot q)$ assigns that path the action
;;
;; $$S(c) = \int_0^1 L(t, q_c(t), \dot q_c(t))\, dt.$$
;;
;; The true stationary path of $S$ generally isn't a cubic Bézier, but the
;; minimum of $S(c)$ over all control points gives the best cubic Bézier
;; approximation to it, in the same spirit as SICM's polynomial version.
;;
;; `bezier-family` turns a pair of endpoints into a function from control point
;; coordinates to a path:

(defn bezier-family [p0 p3]
  (fn [c1x c1y c2x c2y]
    (bezier p0 [c1x c1y] [c2x c2y] p3)))

;; `action` builds $S$. Emmy differentiates the path symbolically and compiles
;; the pair $(q_c(t), \dot q_c(t))$ into a fast Clojure function of $t$ and the
;; control points, so the minimizer does no symbolic work in its inner loop.
;; The Lagrangian itself is applied numerically.
;;
;; We integrate in the variable $u = \sqrt t$, so $dt = 2u\, du$. This changes
;; nothing for a smooth integrand, but it removes the $1/\sqrt t$ blow-up at the
;; start of the brachistochrone below.

(defn action [L family]
  (let [q+v (xc/compile-state-fn
             (fn [& cs]
               (let [q (apply family cs)]
                 (fn [[t]]
                   [(q t) ((D q) t)])))
             [0 0 0 0]
             [0])]
    (fn [cs]
      (definite-integral
        (fn [u]
          (let [t     (* u u)
                [q v] (q+v [t] cs)]
            (* 2 u (L [t q v]))))
        0 1
        {:method :bulirsch-stoer-open}))))

;; ### Shortest path
;;
;; The Lagrangian $L = |\dot q|$ makes the action equal to the arc length of
;; the path:

(defn L-length [[_ _ v]]
  (sqrt (square v)))

(def S-length
  (action L-length (bezier-family [0 1] [1 0])))

;; The curve we drew above has length

(S-length [0 0 1 1])

;; while the shortest path from $(0, 1)$ to $(1, 0)$ is the straight segment,
;; with length $\sqrt 2 \approx 1.41421$. Let the minimizer move the control
;; points:

(def shortest
  (multidimensional-minimize S-length [0 0 1 1] {:info? true}))

;; The minimum matches $\sqrt 2$. The control points slide onto the segment
;; between the endpoints, and the curve straightens out:

(let [[c1x c1y c2x c2y] (:result shortest)]
  (bezier-viewer
   {:p0 [0 1] :p1 [c1x c1y] :p2 [c2x c2y] :p3 [1 0]
    :view-box {:x [-0.5 1.5] :y [-0.5 1.5]}}))

;; ### Brachistochrone
;;
;; Now the [brachistochrone
;; problem](https://en.wikipedia.org/wiki/Brachistochrone_curve): which path
;; carries a bead, sliding without friction under gravity $g$, from rest at the
;; origin to a lower point in the least time?
;;
;; Energy conservation gives the speed at height $y \le 0$ as
;; $v = \sqrt{-2 g y}$, so the travel time is
;;
;; $$T = \int \frac{ds}{v} = \int_0^1 \frac{|\dot q(t)|}{\sqrt{-2 g\, y(t)}}\, dt.$$

(defn L-descent [g]
  (fn [[_ [_ y] v]]
    (/ (sqrt (square v))
       (sqrt (* -2 g y)))))

;; The fastest path from the origin to $(\pi, -2)$ is known: it's the cycloid
;; $(\theta - \sin\theta,\; \cos\theta - 1)$ for $\theta \in [0, \pi]$, with
;; travel time $\pi / \sqrt g$. We set $g = 1$, so the best possible time is
;; $\pi \approx 3.14159$.

(def S-descent
  (action (L-descent 1) (bezier-family [0 0] [Math/PI -2])))

(def fastest
  (multidimensional-minimize S-descent [1 -1 2 -2] {:info? true}))

;; The best cubic Bézier comes within a few hundredths of a percent of the
;; cycloid's time. Plotted against the cycloid (dashed green), the two curves
;; nearly coincide:

(let [[c1x c1y c2x c2y] (:result fastest)
      p0 [0 0]
      p1 [c1x c1y]
      p2 [c2x c2y]
      p3 [Math/PI -2]]
  (mafs/mafs
   {:view-box {:x [-0.5 3.5] :y [-2.5 0.5]}}
   (mafs/cartesian {:subdivisions 4})
   (mafs/parametric
    {:xy (fn [theta]
           (up (- theta (sin theta))
               (- (cos theta) 1)))
     :t [0 Math/PI]
     :color :green
     :style "dashed"})
   (mafs/polyline [p0 p1 p2 p3] {:color :gray :weight 1})
   (mafs/parametric {:xy (bezier p0 p1 p2 p3) :t [0 1]})
   (mafs/point p0 {:color :red})
   (mafs/point p3 {:color :red})
   (mafs/point p1 {:color :blue})
   (mafs/point p2 {:color :blue})))

;; Notice that the optimal Bézier starts out falling almost straight down, just
;; like the cycloid: $p_1$ sits nearly directly below the origin.
;;
;; A natural next step is to chain several Bézier segments together, which gives
;; the minimizer more freedom and drives the error toward zero.
