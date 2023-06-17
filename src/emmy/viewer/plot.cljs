(ns emmy.viewer.plot
  "Plotting utilities shared between the various viewing libraries.")

(defn format-number
  "Given a number `x`, returns a string truncating `x` to have at most `n` decimal
  places.

  `n` defaults to 2."
  ([x] (format-number x 2))
  ([x n]
   (-> (.toFixed x n)
       (.replace #"\.0+$" ""))))

(defn label-pi
  "Given a numeric value `x`, returns a string formatting `x` as a multiple of
  `π`.

  Values close to `π` will receive no prefix; any other number will print with
  at most `precision` decimal places."
  ([x] (label-pi x 5))
  ([x precision]
   (cond (zero? x)"0"
         (< (Math/abs (- Math/PI x)) 0.001) "π"
         (< (Math/abs (- (- Math/PI) x)) 0.001) "-π"
         :else
         (let [prefix (-> (/ x Math/PI)
                          (format-number precision))]
           (case prefix
             "1"  "π"
             "-1" "-π"
             (str prefix "π"))))))
