^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.stern-brocot
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude
   [+ - * / = zero? compare numerator
    denominator ref partial abs infinite?])
  (:require [clojure.set :as cs]
            [emmy.env :as e :refer :all]
            [nextjournal.clerk :as clerk])
  (:import (clojure.lang Ratio)))

;; ## Farey trees aka Stern-Brocot trees

;; In a Farey tree each level is constructed by adjoining the mediants of the
;; elements of the previous level into the previous level. Because the mediants
;; are always between the given fractions the levels are ordered if the first
;; one is ordered.

(defn mediant [m1:n1 m2:n2]
  (/ (+ (numerator m1:n1) (numerator m2:n2))
     (+ (denominator m1:n1) (denominator m2:n2))))

(defn Farey [lo hi]
  (fn nlp [n]
    (if (= n 1)
      [lo hi]
	    (loop [[x & xs] (nlp (dec n))
		         out (transient [])]
	      (if-not xs
	        (persistent! (conj! out x))
	        (recur xs
		             (-> (conj! out x)
                     (conj!
                      (mediant x (first xs))))))))))

(clerk/example
 ((Farey 0 1) 1)
 ((Farey 0 1) 2)
 ((Farey 0 1) 3)
 ((Farey 0 1) 4)
 ((Farey 0 1) 5))

;; Note `1/0` is not a legit rational, but:

(def big0 (biginteger 0))
(def big1 (biginteger 1))

(let [one-over-zero (Ratio. big1 big0)]
  ((Farey 0 one-over-zero) 4))

;; Each Farey tree level satisfies the following by construction.

(defn Farey-check [sequence]
  (loop [n (count sequence)
         s sequence]
    (cond (< n 3) :ok
	        (= (mediant (first s) (nth s 2)) (second s)) (recur (dec n) (rest s))
	        :else :lose)))

(Farey-check ((Farey 0 1) 15))

;; The Farey sequence of level `n` is the ordered list of fractions between 0
;; and 1 that have no denominators greater than `n`.

(defn Farey-sequence [n]
  (filter (fn [p:q]
            (not (> (denominator p:q) n)))
          ((Farey 0 1) n)))


(clerk/example
 (Farey-sequence 5)
 (Farey-sequence 6)
 (Farey-sequence 7))

;; The full Farey sequence is useful for understanding the convergents of
;; continued fractions. For any irrational the convergents are the closest
;; numbers on the full Farey sequences.

(defn full-Farey-sequence [n]
  (filter (fn [p:q]
            (not (> (denominator p:q) n)))
          ((Farey (Ratio. big0 big1) (Ratio. big1 big0))
           n)))

(clerk/example
 (full-Farey-sequence 5)
 (full-Farey-sequence 6)
 (full-Farey-sequence 7))

;; Even though the Farey sequence is derived by deleting members from ;; a Farey
;; tree level the Farey sequence satisfies the following:

(clerk/example
 (Farey-check (Farey-sequence 7))
 (Farey-check (Farey-sequence 15)))

;; That this is true is not obvious.

;; In the limit as n->infinity the length of the nth Farey sequence is

(defn Farey-length [n]
  (* (/ 3 (square Math/PI)) (square n)))


(clerk/example
 (count (Farey-sequence 20))
 (Farey-length 20))

;; Not bad.

;; Of course, the computation of the nth Farey sequence by filtering the nth
;; level of the Farey tree is horribly inefficient. There are better ways of
;; computing the nth Farey sequence:

(defn Farey-sequence* [n]
  (let [m (inc n)]
    (sort
     (reduce cs/union #{}
		         (for [p (range m)
                   q (range 1 m)
                   :when (<= p q)]
               #{(/ p q)})))))

(clerk/example
 (= (Farey-sequence 5)
    (Farey-sequence* 5))

 (= (Farey-sequence 6)
    (Farey-sequence* 6))

 (= (Farey-sequence 7)
    (Farey-sequence* 7)))

(defn Lamothe-simplicity [m:n]
  (/ 1 (* (numerator m:n)
          (denominator m:n))))

;; Theorem: The sums of the Lamothe-simplicities of the interior members of the
;; nth Farey tree level from 0 to infinity is n-1.

(letfn [(interior-Farey [n]
          (rest
           (butlast
            ((Farey 0 (Ratio. big1 big0)) n))))]
  (clerk/example
   (transduce (map Lamothe-simplicity)
              +
              (interior-Farey 5))
   (transduce (map Lamothe-simplicity)
              +
              (interior-Farey 6))
   (transduce (map Lamothe-simplicity)
              +
              (interior-Farey 10))))

;; Given `m/n` to constuct its binary representation in the full Farey tree from
;; 0 to infinity:
;;  `((Farey (make-rational 0 1) (make-rational 1 0)) n)`.


(defn Farey-encode [m:n]
  (letfn [(lp [m n]
            (cond (= m n) '()
	                (< m n) (cons 'L (lp m (- n m)))
	                :else   (cons 'R (lp (- m n) n))))]
    (lp (numerator m:n)
        (denominator m:n))))

(clerk/example
 (Farey-encode 2/7)
 (Farey-encode 5/8))

;; For looking at the places of reals in the tree.

(defn Farey-encode-real [x maxlevel]
  (cond (or (= x 1) (zero? maxlevel)) '()
	      (< x 1)
        (cons 'L
	            (Farey-encode-real (/ x (- 1 x))
				                         (dec maxlevel)))
	      :else
	      (cons 'R
	            (Farey-encode-real (dec x)
				                         (dec maxlevel)))))

(clerk/example
 (Farey-encode-real 5/8 10)
 (Farey-encode-real Math/PI 20)
 (Farey-encode-real e/phi 20))

(defn Farey-decode [lr-list]
  (loop [lrs lr-list
	       low (Ratio. big0 big1)
	       hi  (Ratio. big1 big0)]
    (let [x (mediant low hi)]
      (cond (empty? lrs) x
	          (= 'L (first lrs)) (recur (rest lrs) low x)
	          :else (recur (rest lrs) x hi)))))

(clerk/example
 (Farey-decode (Farey-encode 3/7))
 (Farey-decode (Farey-encode 3/8)))

;; Farey-encoding is not very efficient.

(Farey-decode (Farey-encode-real pi 25))

;; The Farey encodings are closely related to the continued
;; fractions.  For example, the continued fraction for pi is:
;;  `<3 7 15 1 292 ...>`.

;; Its Farey encoding is:
;; `(R^3 L^7 R^15 L^1 R^292 ... )`
