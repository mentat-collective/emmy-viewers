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
