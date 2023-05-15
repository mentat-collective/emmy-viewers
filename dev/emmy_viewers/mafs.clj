^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy-viewers.mafs
  #:nextjournal.clerk
  {:toc true :no-cache true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.env :as e :refer :all]
            [emmy.mafs :as mafs]
            [emmy.polynomial :as poly]
            [emmy.viewer :as ev]
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk :as clerk]))

;; ## Server-Side Mafs

(def ->tex
  (comp clerk/tex ->TeX simplify))

(ev/install!)

(defn caption [text]
  (clerk/html [:span.text-slate-500.text-xs.text-center.font-sans text]))

;; ## Demo!

(mafs/of-x
 '(fn [x] (+ 2 (Math/sin x))))

^{::clerk/width :wide}
(mafs/mafs
 (mafs/cartesian {:subdivisions 2})
 (mafs/vector-field
  {:step 0.5
   :xy (let [[ax ay] [0.6 0.5]]
         (fn [[x y]]
           [(- (- y ay) (- x ax))
            (- (- (- x ax)) (- y ay))]))
   :xy-opacity
   (fn [[x y]]
     (/ (+ (abs x) (abs y))
        10))}))

;; This works fine for the point. Now we need some state.

;; Okay, that's good:

(ev/with-let [point [1 1]]
  (mafs/mafs
   (mafs/cartesian)
   (mafs/circle
    {:center [0 0]
     :radius `(abs @~point)})
   (mafs/movable-point
    {:atom point})))

(defn chain [& points]
  (-> (first
       (reduce (fn [[acc tail] p]
                 (let [tip (mapv + tail p)
                       v   (mafs/vector
                            {:tail tail :tip tip})]
                   [(conj acc v) tip]))
               [[:<>] [0 0]]
               points))
      (ev/tagged
       #(mafs/mafs (mafs/cartesian) %))))


(chain [1 2] [1 0] [-1 1])

(defn with-handles [f]
  (let [hint-radius 3]
    (ev/with-state {:translate [0 0]
                    :rotate [hint-radius 0]
                    :width [-2 0]
                    :height [0 1]}
      (fn [!state]
        (mafs/mafs
         {:view-box {:x [-3 3] :y [-3 3]}}
         (mafs/cartesian)
         (mafs/transform
          {:translate (q (:translate @~!state))}
          (mafs/transform
           {:rotate (q (let [[x y] (:rotate @~!state)]
                         (Math/atan2 y x)))}
           ;; Display a little hint that the point is meant to move radially
           (mafs/circle
            {:center [0 0]
             :radius hint-radius
             :stroke-style "dashed"
             :stroke-opacity 0.3
             :fill-opacity 0})
           (f !state)
           (mafs/movable-point
            {:atom !state
             :path :width
             :constrain "horizontal"})
           (mafs/movable-point
            {:atom !state
             :path :height
             :constrain "vertical"}))
          (mafs/movable-point
           {:atom !state
            :path :rotate
            :color (:blue mafs/Theme)
            :constrain '#(mafs.vec/with-mag % 3)}))
         (mafs/movable-point
          {:atom !state
           :path :translate
           :color (:orange mafs/Theme)}))))))

#_{:clj-kondo/ignore [:unused-binding]}
(with-handles
  (fn [!state]
    [:<>
     (mafs/ellipse
      {:center (q (:width @~!state))
       :radius [2 1]})
     (mafs/ellipse
      {:center [0 0]
       :radius (q
                (let [{[x _] :width [_ y] :height} @~!state]
                  [(Math/abs x) (Math/abs y)]))})]))


(defn sigmoid1 [x]
  (-> (/ 2 (+ 1 (exp (- x))))
      (- 1)))

(defn derivatives [n f]
  (into [:<>]
        (map
         (fn [i color]
           (mafs/of-x ((expt D i) f) {:color color}))
         (range n)
         (vals mafs/Theme))))


(clerk/row
 (ev/render
  (mafs/mafs {:zoom {:min 0.1 :max 2}}
             (mafs/cartesian)
             (derivatives 5 sin)))
 (ev/render
  (mafs/mafs {:zoom {:min 0.1 :max 2}}
             (mafs/cartesian)
             (derivatives 5 tanh))))

(let [f ((expt D 3) tanh)]
  (clerk/col
   (->tex (f 'x))
   (mafs/mafs {:zoom {:min 0.1 :max 2}}
              (mafs/cartesian)
              (mafs/of-x f {:color (:blue mafs/Theme)}))))

(clerk/row
 (clerk/col
  (mafs/mafs
   (mafs/cartesian)
   (mafs/of-x {:y sin :color (:green mafs/Theme)})
   (mafs/of-y {:x sigmoid1
               :color (:blue mafs/Theme)}))
  (caption "A pair of functions."))
 (clerk/col
  (mafs/mafs {:zoom {:min 0.1 :max 2}}
             (mafs/cartesian)
             (derivatives 5 tanh))
  (caption [:<> "Derivatives of " [:code "tanh"] "."])))

(mafs/cartesian)

(mafs/of-x {:y sin :color (:blue mafs/Theme)})

(mafs/mafs {:zoom {:min 0.1 :max 2}}
           (mafs/cartesian)
           (mafs/of-x
            {:y sin :color (:blue mafs/Theme)})
           (mafs/of-x {:y (+ cos (D sin)) :color (:green mafs/Theme)})
           (mafs/of-y {:x sigmoid1 :color (:pink mafs/Theme)}))

;; ## Polynomials
;;
;; I think this can work out of the box for an Emmy Polynomial.

(def my-poly
  (let [x (poly/identity)]
    (+ (- x)
       (square x)
       (cube x))))

(mafs/of-x {:y my-poly})

(ev/multi
 {:TeX  (clerk/tex (->TeX (square 'x)))
  :2TeX (let [cake ((expt D 5) tanh)]
          (clerk/col
           (->tex (cake 'y))
           (mafs/mafs {:zoom {:min 0.1 :max 2}}
                      (mafs/cartesian)
                      (mafs/of-x {:y cake :color (:blue mafs/Theme)}))))})
