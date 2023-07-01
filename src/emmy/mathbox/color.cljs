(ns emmy.mathbox.color
  "Utilities for working with color in the various MathBox plotting components."
  (:require ["three" :as three]))

(def default
  "Default grey used by MathBox for its drawing elements, also used by many of the
  plots in `emmy.mathbox.plot`."
  "rgb(128, 128, 128)")

(defn ^:no-doc lighten
  "Given a color string or object `color`, returns a `three.js` `Color` object
  representing the input color with its lightness pulled toward either 100% for
  positive `amt` values or 0% for negative `amt` values.

  NOTE What would make MORE sense is an implementation that closed the gap
  toward `100%` or `0%` by `amt` percentage of the current distance from either.

  NOTE: This implementation was ported from [math3d-react](
  https://github.com/ChristopherChudzicki/math3d-react/blob/master/client/src/constants/colors.js),
  and doesn't seem to do exactly what it claims. The code in question looks like
  it's trying to lerp the lightness value by `amt` percentage between the
  current lightness and 100%, but the `lighten` function from the `colors`
  library multiplies the value yet again by the current lightness.

  This may change! But the results look good for now."
  [color amt]
  (let [color  (if (.-isColor ^js color)
                 color
                 (three/Color. color))
        l      (.-l ^js (.getHSL ^js color #js {}))
        offset (* l amt (- 1 l))]
    (.offsetHSL ^js color 0 0 offset)))
