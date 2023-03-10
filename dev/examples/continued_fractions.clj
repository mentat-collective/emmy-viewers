^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.continued-fractions
  (:refer-clojure
   :exclude
   [+ - * / = zero? compare numerator
    denominator ref partial abs infinite?])
  (:require [emmy.generic :as g]
            [emmy.ratio :as r]))

;; ## Continued Fractions
;;
;; Port of the GJS continued fractions code.

(defn continued-fraction [x]
  (lazy-seq
   (let [a (g/floor x)]
     (cons a (continued-fraction
              (g/invert (g/- x a)))))))

(defn convergents [cfrac]
  (letfn [(gen [A1 A2 B1 B2 cfrac]
            (lazy-seq
             (let [b (first cfrac)
                   An (g/+ (g/* b A1) A2)
                   Bn (g/+ (g/* b B1) B2)]
               (cons (g// An Bn)
		                 (gen An A1 Bn B1 (rest cfrac))))))]
    (let [b (first cfrac)]
      (cons b (gen b 1 1 0 (rest cfrac))))))

(def stream-ones (repeat 1))

(= [3 7 15 1 292 1 1 1 2 1]
   (take 10 (continued-fraction Math/PI)))

(= [2 1 2 1 1 4 1 1 6 1 1 8 1 1 10 1 1 12
    1 1 27 ;; GJS had an xxx here... wrong??
    1 10 1 3 3 1 10 3 3]
   (take 30 (continued-fraction (g/exp 1))))

(= '(3
     22/7
     333/106
     355/113
     103993/33102
     104348/33215
     208341/66317
     312689/99532
     833719/265381
     1146408/364913)
   (take 10 (convergents
             (continued-fraction Math/PI))))

(= '(-0.04507034144862795
     4.024994347707008E-4
     -2.648963016704766E-5
     8.491367862604811E-8
     -1.8394815747136462E-10
     1.0556048950798648E-10
     -3.8947093617400424E-11
     9.2767591789211E-12
     -2.7741504721654008E-12
     5.127054146519189E-13)
   (take 10
         (map (fn [x]
                (g// (g/- x Math/PI) Math/PI))
              (convergents
               (continued-fraction Math/PI)))))

(= '(1 2 3/2 5/3 8/5 13/8 21/13 34/21 55/34 89/55)
   (take 10 (convergents stream-ones)))

(= '(-0.38196601125010515
     0.23606797749978967
     -0.07294901687515776
     0.030056647916491562
     -0.01114561800016822
     0.004305231718579094
     -0.0016374027886316858
     6.264579760202099E-4
     -2.3913584575862567E-4
     9.136361346602812E-5)
   (take 10 (map
             (fn [x]
               (let [gm (g// (g/+ 1 (g/sqrt 5)) 2)]
                 (g// (g/- x gm) gm)))
             (convergents stream-ones))))

(= '(1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)
   (take 20 (continued-fraction (g/sqrt 2))))

(= '(1 3/2 7/5 17/12 41/29 99/70 239/169
       577/408 1393/985 3363/2378)
   (take 10 (convergents
             (continued-fraction (g/sqrt 2)))))

(= '(-0.29289321881345254
     0.06066017177982121
     -0.010050506338833596
     0.0017346066809424672
     -2.9730935695000633E-4
     5.101910668831759E-5
     -8.753233225519007E-6
     1.501825093092192E-6
     -2.5767222286472335E-7
     4.420957098128498E-8)
   (take 10 (map
             (fn [x]
               (let [r2 (g/sqrt 2)]
                 (g// (g/- x r2) r2)))
             (convergents
              (continued-fraction (g/sqrt 2))))))

;; check that the error is less than 1/d^2
(->> (let [number (g/sqrt 2)]
       (map
        (fn [c]
          (let [error (g/abs (g/- c number))]
            (g/- error
                 (g// 1 (g/square
                         (r/denominator c))))))
        (convergents
         (continued-fraction number))))
     (take 10)
     (every? g/negative?))

(defn error-acceptable? [number n]
  (->> (map
        (fn [c]
          (let [error (g/abs (g/- c number))]
            (g/- error
                 (g// 1 (g/square
                         (r/denominator c))))))
        (convergents
         (continued-fraction number)))
       (take n)
       (every? g/negative?)))

(error-acceptable? (g/sqrt 2) 10)
(error-acceptable? (g// (g/+ 1 (g/sqrt 5)) 2) 10)
(error-acceptable? Math/PI 20)
