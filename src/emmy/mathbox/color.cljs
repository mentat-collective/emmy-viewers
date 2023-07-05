(ns emmy.mathbox.color
  "Utilities for working with color in the various MathBox plotting components."
  (:require ["three" :as three]))

(def default
  "Default grey used by MathBox for its drawing elements, also used by many of the
  plots in `emmy.mathbox.plot`."
  "rgb(128, 128, 128)")

;; colorFunc?: (X: number, Y: number, Z: number, u: number, v: number) => number;

;; color props code: https://github.com/ChristopherChudzicki/math3d-next/blob/c878574a306b1454dadf77656e7aada667bcfc88/packages/app/src/features/scene/graphics/ParametricSurface.tsx#L125-L151

(def ^:private black (three/Color. "black"))

(defn grid-color
  "TODO update

  Given a color string or object `color`, returns a `three.js` `Color` object
  representing the input color with its lightness pulled toward either 100% for
  positive `amt` values or 0% for negative `amt` values."
  [color]
  (let [color (if (.-isColor ^js color)
                color
                (three/Color. color))]
    (.getHex ^js (.lerp ^js color black 0.5))))

(def colors
  "Map of keyword => hex"
  {:bright-green "#33FF00"
   :green  "#2ecc71"
   :blue "#3090ff"
   :purple "#9b59b6"
   :deep-purple "#8e44ad"
   :navy "#2c3e50"
   :yellow "#f1c40f"
   :orange "#e67e22"
   :red "#e74c3c"
   :gray "#808080"})

(defn to-fraction-rgb [r g b]
  [(/ r 255) (/ g 255) (/ b 255)])

(defn convert-to-percentage [_color]
  ;; TODO get a map of decimal values and convert to the percentage that we see
  ;; below. alpha gets left alone I believe??
  )
(def color-maps
  {:rainbow
   {:get-rgb
    ;; getRGB: (frac: number) => {
    ;;                            const color = tinycolor.fromRatio({ h: 1 - frac, s: 1, l: 0.5 });
    ;;                            return toFractionRgb(color.toRgb());
    ;;                            },

    (fn [frac]
      (let [color (three/Color. 0xffffff)]
        (.setHSL (- 1 frac) 1 0.5)
        [(.-r color) (.-g color) (.-b color)]))}
   :bluered
   {:get-rgb (fn [frac]
               [frac 0 (- 1 frac)])}
   :temperature
   {
    ;; getRGB: (frac: number) => {
    ;;                            const color = tinycolor.fromRatio({
    ;;                                                               h: 0.666 * (1 - frac),
    ;;                                                               s: 1,
    ;;                                                               l: 0.5,
    ;;                                                               });
    ;;                            return toFractionRgb(color.toRgb());
    ;;                            },

    :get-rgb (fn [frac]
               (let [color (three/Color. 0xffffff)]
                 (.setHSL (* 0.666 (- 1 frac)) 1 0.5)
                 [(.-r color) (.-g color) (.-b color)]))}})
