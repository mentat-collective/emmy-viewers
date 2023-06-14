(ns emmy.mathbox.colors
  "Borrowed from
  https://github.com/ChristopherChudzicki/math3d-react/blob/master/client/src/constants/colors.js"
  (:require ["three" :as three]))

(def colors
  ["#33FF00"
   "#2ecc71"
   "#3498db"
   "#9b59b6"
   "#8e44ad"
   "#2c3e50"
   "#f1c40f"
   "#e67e22"
   "#e74c3c"
   "#808080"])

(def color-maps
  {:rainbow
   {:css "background: linear-gradient(
      to right,
      hsl(360, 100%, 50%),
      hsl(300, 100%, 50%),
      hsl(240, 100%, 50%),
      hsl(180, 100%, 50%),
      hsl(120, 100%, 50%),
      hsl(60, 100%, 50%),
      hsl(0, 100%, 50%)
    )
    "
    :f (fn [frac]
         (let [color (three/Color. 0xffffff)]
           (.setHSL (- 1 frac) 1 0.5)
           [(.-r color) (.-g color) (.-b color)]))}
   :bluered
   {:css "background: linear-gradient(to right, blue, red)"
    :f (fn [frac]
         [frac 0 (- 1 frac) 1])}
   :temperature
   {:css "background: linear-gradient(
      to right,
      hsl(240, 100%, 50%),
      hsl(180, 100%, 50%),
      hsl(120, 100%, 50%),
      hsl(60, 100%, 50%),
      hsl(0, 100%, 50%)
    )
    "
    :f (fn [frac]
         (let [color (three/Color. 0xffffff)]
           (.setHSL (* 0.666 (- 1 frac)) 1 0.5)
           [(.-r color) (.-g color) (.-b color)]))}})
