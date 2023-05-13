^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy-viewers.mafs
  #:nextjournal.clerk
  {:toc true :no-cache true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.env :as e :refer :all]
            [emmy.mafs :as mafs]
            [emmy.viewer :as ev]
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk :as clerk]))

;; ## Server-Side Mafs

(def ->tex (comp clerk/tex ->TeX simplify))

(ev/install!)

(defn caption [text]
  (clerk/html [:span.text-slate-500.text-xs.text-center.font-sans text]))

;; ## Demo!

(defn sigmoid1 [x]
  (-> (/ 2 (+ 1 (exp (- x))))
      (- 1)))

(mafs/of-x
 '(fn [x] (+ 2 (Math/sin x))))

;; TODO how will we handle the vector field idea with a point injected in there?
;; OH that's where we make the parametric function!!!!!! that is it!
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

#_(with-let [point [1 1]]
    (mafs/mafs
     (mafs/cartesian)
     (mafs/circle
      {:center [0 0]
       :radius `(abs @~point)})
     (mafs/movable-point
      {:atom point})))

(defn chain [& points]
  (first
   (reduce (fn [[acc tail] p]
             (let [tip (mapv + tail p)
                   v   (mafs/vector
                        {:tail tail :tip tip})]
               [(conj acc v) tip]))
           [[:<>] [0 0]]
           points)))

#_(mafs/mafs
   (mafs/cartesian)
   (chain [1 2] [1 0] [-1 1]))

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

#_(with-handles
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


#_
(comment
  (sigmoid1 1)
  (sin 1)

  #_(->tex
     (simplify
      (  'x)))

  (defn derivatives [n f]
    (into [:<>]
          (map
           (fn [i color]
             (of-x {:y ((expt D i) f)
                    :color color}))
           (range n)
           (vals Theme))))

  (+ (+ [1 2] [3 4]) [5 6])
  (clerk/row
   (mafs {:zoom {:min 0.1 :max 2}}
         (cartesian)
         (derivatives 5 tanh))
   (mafs {:zoom {:min 0.1 :max 2}}
         (cartesian)
         (derivatives 5 tanh)))

  (let [cake ((expt D 5) tanh)]
    (clerk/col
     (->tex (cake 'x))
     (mafs {:zoom {:min 0.1 :max 2}}
           (cartesian)
           (of-x {:y cake :color (:blue Theme)}))))

  #_(clerk/row
     (clerk/col
      (mafs
       (cartesian)
       (of-x {:y sin :color (:green Theme)})
       (of-y {:x sigmoid1
              :color (:blue Theme)}))
      (caption "A pair of functions."))
     (clerk/col
      (mafs {:zoom {:min 0.1 :max 2}}
            (cartesian)
            (derivatives 5 tanh))
      (caption [:<> "Derivatives of " [:code "tanh"] "."])))

  (cartesian)

  (of-x {:y sin :color (:blue Theme)})

  (mafs {:zoom {:min 0.1 :max 2}}
        (cartesian)
        (of-x {:y sin :color (:blue Theme)})
        (of-x {:y (+ cos (D sin)) :color (:green Theme)})
        (of-y {:x sigmoid1 :color (:pink Theme)}))

  (defn my-fn [x]
    (+ (square (sin x))
       (square x)))

  (of-x {:y my-fn})

  ;; ## Polynomials
  ;;
  ;; I think this can work out of the box for an Emmy Polynomial.

  (def my-poly
    (let [x (poly/identity 2)]
      ((+ (- x)
          (square x)
          (cube x)))))

  (def tabbed-viewer
    {:name `tabbed-viewer
     :render-fn
     '(let [->ks (fn [pairs]
                   (mapv
                    (fn [{value :nextjournal/value}]
                      (:nextjournal/value (nth value 0)))
                    pairs))
            ->m  (fn [pairs]
                   (into {}
                         (map
                          (fn [{value :nextjournal/value}]
                            [(:nextjournal/value (nth value 0))
                             (nth value 1)]))
                         pairs))]
        (fn [pairs opts]
          (reagent.core/with-let
            [ks (->ks pairs)
             m  (->m pairs)
             !k (reagent.core/atom (first ks))]
            [:<> (into
                  [:div.flex.items-center.font-sans.text-xs.mb-3
                   [:span.text-slate-500.mr-2 "View as:"]]
                  (map (fn [k]
                         [:button.px-3.py-1.font-medium.hover:bg-indigo-50.rounded-full.hover:text-indigo-600.transition
                          {:class
                           (if (= @!k k)
                             "bg-indigo-100 text-indigo-600"
                             "text-slate-500")
                           :on-click #(reset! !k k)}
                          k]))
                  ks)
             [nextjournal.clerk.viewer/inspect-presented (get m @!k)]])))})

  (defn multi [m]
    (clerk/with-viewer
      tabbed-viewer
      m))

  (multi
   {:TeX  (clerk/tex (->TeX (square 'x)))
    :2TeX (let [cake ((expt D 5) tanh)]
            (clerk/col
             (->tex (cake 'y))
             (mafs {:zoom {:min 0.1 :max 2}}
                   (cartesian)
                   (of-x {:y cake :color (:blue Theme)}))))}))
