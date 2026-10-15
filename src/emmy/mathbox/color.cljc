(ns emmy.mathbox.color
  "Utilities for working with color in the various MathBox plotting components."
  #?(:cljs
     (:require ["three" :as three])))

(def default
  "Default grey used by MathBox for its drawing elements, also used by many of the
  plots in `emmy.mathbox.plot`."
  "rgb(128, 128, 128)")

#?(:cljs
   (defn grid-color
     "Returns the hex value of `color` darkened halfway toward black. `color` can be
  a `three.js` `Color` object (left unmodified) or any valid input to its
  constructor."
     [color]
     (let [color (if (.-isColor ^js color)
                   (.clone ^js color)
                   (three/Color. color))]
       (.getHex ^js (.lerp ^js color (three/Color. "black") 0.5)))))

;; ## Color Maps
;;
;; A color map is a function of a fraction in `[0, 1]` that returns an `[r g b]`
;; triple with each channel in `[0, 1]`. These are ported from
;; [math3d](https://github.com/ChristopherChudzicki/math3d-next).

(defn- hue->channel [p q t]
  (let [t (cond (neg? t) (inc t)
                (> t 1)  (dec t)
                :else    t)]
    (cond (< t (/ 1.0 6)) (+ p (* (- q p) 6 t))
          (< t 0.5)       q
          (< t (/ 2.0 3)) (+ p (* (- q p) (- (/ 2.0 3) t) 6))
          :else           p)))

(defn hsl->rgb
  "Returns the `[r g b]` triple for the color with hue `h`, saturation `s` and
  lightness `l`. All inputs and outputs are in `[0, 1]`."
  [h s l]
  (if (zero? s)
    [l l l]
    (let [q (if (< l 0.5)
              (* l (+ 1 s))
              (- (+ l s) (* l s)))
          p (- (* 2 l) q)]
      [(hue->channel p q (+ h (/ 1.0 3)))
       (hue->channel p q h)
       (hue->channel p q (- h (/ 1.0 3)))])))

(def color-maps
  "Map of keyword => color map, a function of a fraction in `[0, 1]` that returns
  an `[r g b]` triple with channels in `[0, 1]`.

  - `:rainbow`: full hue sweep, red at both ends through blue, green and yellow.
  - `:temperature`: blue at 0 through green and yellow to red at 1.
  - `:bluered`: linear blend from blue at 0 to red at 1."
  {:rainbow     (fn [frac] (hsl->rgb (- 1 frac) 1 0.5))
   :temperature (fn [frac] (hsl->rgb (* 0.666 (- 1 frac)) 1 0.5))
   :bluered     (fn [frac] [frac 0 (- 1 frac)])})

(defn ->color-map
  "Returns the color map for `m`: a keyword naming an entry of [[color-maps]], or a
  color map function (returned as-is). Throws on an unknown keyword."
  [m]
  (if (keyword? m)
    (or (get color-maps m)
        (throw
         (ex-info (str "Unknown color map: " m)
                  {:color-map m :known (keys color-maps)})))
    m))

(defn normalize
  "Returns `t` rescaled from the `[lo hi]` range to `[0, 1]`, clamped to that
  interval. A degenerate range (`lo` equal to `hi`) returns 0."
  [[lo hi] t]
  (if (== lo hi)
    0
    (-> (/ (- t lo) (- hi lo))
        (min 1)
        (max 0))))

(defn vertex-color-expr
  "Returns a MathBox `Area` expression `(fn [emit u v i j time])` that emits one
  `r g b a` color per vertex of the surface described by `expr`.

  - `expr`: the surface's position expression, `(fn [emit u v i j time])`
    emitting `x y z`.
  - `color-fn`: function of a single array `[x y z u v]` returning a number.
    The array is reused between calls.
  - `color-map`: anything accepted by [[->color-map]].
  - `color-range`: `[lo hi]` range of `color-fn`'s output that is mapped onto the
    color map; values outside it are clamped.

  The emitted alpha is always 1."
  [expr color-fn color-map color-range]
  (let [cmap    (->color-map color-map)
        in      #?(:clj (object-array 5) :cljs (js/Array. 0 0 0 0 0))
        capture (fn [x y z]
                  (aset in 0 x)
                  (aset in 1 y)
                  (aset in 2 z))]
    (fn [emit u v i j time]
      (expr capture u v i j time)
      (aset in 3 u)
      (aset in 4 v)
      (let [[r g b] (cmap (normalize color-range (color-fn in)))]
        (emit r g b 1)))))
