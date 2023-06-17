(ns emmy.mathbox.color
  "Borrowed from
  https://github.com/ChristopherChudzicki/math3d-react/blob/master/client/src/constants/colors.js"
  (:require ["three" :as three]))

(def default "rgb(128, 128, 128)")

(defn ^:no-doc lighten
  "lerp the lightness toward a value of 1 or 0 by the `amt` percentage... match
  math3d-next."
  [s amt]
  (let [color  (three/Color. s)
        l      (.-l ^js (.getHSL color #js {}))
        offset (* l amt (- 1 l))]
    (.getHex
     (.offsetHSL color 0 0 offset))))
