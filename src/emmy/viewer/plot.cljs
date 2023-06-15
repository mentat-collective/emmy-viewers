(ns emmy.viewer.plot
  "Plotting utilities shared between the various viewers.")

(defn format-number
  "Returns a string truncating `x` to have at most 2 decimal places."
  [x]
  (-> (.toFixed x 2)
      (.replace #"\.0+$" "")))

(defn ^:no-doc round
  ([v] (round v 0))
  ([v precision]
   (let [multiplier (Math/pow 10 precision)]
     (/ (Math/round (* v multiplier))
        multiplier))))

(defn label-pi
  "Given a numeric value `x`, returns a string formatting `x` as a multiple of
  `pi`."
  ([x] (label-pi x 5))
  ([x precision]
   (cond (zero? x) "0"
         (< (Math/abs (- Math/PI x)) 0.001) "π"
         (< (Math/abs (- (- Math/PI) x)) 0.001) "-π"
         :else (-> (/ x Math/PI)
                   (round precision)
                   (str "π")))))
