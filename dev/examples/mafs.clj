;; ## Mafs Viewers
;;
;; This namespace form makes use of a number of aliases that you'll want to use
;; in your own namespace to follow these examples.

(ns examples.mafs
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.mafs :as mafs]
            [emmy.polynomial :as poly]
            [emmy.viewer :as ev]
            [nextjournal.clerk :as clerk]))

{::clerk/width :wide}

;; To enable rendering of the Mafs forms, install the Emmy viewers:

^{::clerk/visibility {:result :hide}}
(ec/install!)

;; The page currently contains a bunch of representative demos. Read on, adapt,
;; and be inspired!

;; ## Non-Plots
;;
;; shorter vector and text on the same page:

(mafs/mafs
 {:height 300}
 (mafs/cartesian)
 (mafs/vector [1 2] {:color :blue})
 (mafs/text "face" {:color :green}))

;; ## Function Plots

;; cartesian grid with nothing on it:

(mafs/cartesian)

;; ### Basics

;; Plot of `sin`:

(mafs/of-x {:y sin :color :blue})

;; more fun with easy derivatives:

(defn sigmoid1 [x]
  (-> (/ 2 (+ 1 (exp (- x))))
      (- 1)))

(mafs/mafs {:zoom {:min 0.1 :max 2}}
           (mafs/cartesian)
           (mafs/of-x {:y sin :color :blue})
           (mafs/of-x {:y (+ cos (D sin)) :color :green})
           (mafs/of-y {:x sigmoid1 :color :pink}))

;; ### Inequality

(mafs/inequality
 {:y {:<= sin :> cos} :color :blue})

;; ### Param Function, Stateful Point
;;
;; Note that the function inside of `ev/with-params` takes `shift` and returns
;; another function, built using Emmy's "function algebra".
;;
;; The inner function `(((cube D) tanh) (- identity shift))` is equivalent
;; to `(fn [x] (((cube D) tanh) (- x shift)))`.

(ev/with-let [!phase [0 0]]
  (let [shifted (ev/with-params {:atom !phase :params [0]}
                  (fn [shift]
                    (((cube D) tanh) (- identity shift))))]
    (mafs/mafs
     (mafs/cartesian)
     (mafs/of-x shifted)
     (mafs/inequality
      {:y {:<= shifted :> cos} :color :blue})
     (mafs/movable-point
      {:atom !phase :constrain "horizontal"}))))

;; Similar idea with a parametric function:

(ev/with-let [!phase [1 0]]
  (let [path (ev/with-params {:atom !phase :params [0 1]}
               (fn [x y]
                 (* (abs [x y])
                    (up sin (D sin)))))]
    (mafs/mafs
     (mafs/cartesian)
     (mafs/parametric
      {:color :green
       :xy path
       :t [0 (* 2 Math/PI)]})
     (mafs/movable-point
      {:atom !phase}))))

;; ### Vector field:

(ev/with-let [!point [1 0]]
  (mafs/mafs
   (mafs/cartesian {:subdivisions 2})
   (mafs/vector-field
    {:step 0.5
     :xy (ev/with-params {:atom !point :params [0 1]}
           (fn [ax ay]
             (fn [[x y]]
               [(- (- y ay) (- x ax))
                (- (- (- x ax)) (- y ay))])))
     :xy-opacity (fn [[x y]]
                   (/ (+ (abs x) (abs y))
                      10))})
   (mafs/movable-point {:atom !point})))

;; ## Polynomials
;;
;; Emmy polynomials are functions, so are fair game for plotting:

(mafs/of-x
 (let [x (poly/identity)]
   (+ (- x)
      (square x)
      (cube x))))

;; ## Multiviewer
;;
;; tabbed viewer between TeX and plot:

(let [f ((expt D 5) tanh)]
  (ec/multi
   {:TeX  (ec/->TeX (f 'x) :simplify? true)
    :Mafs (mafs/mafs
           {:zoom {:min 0.1 :max 2}}
           (mafs/cartesian)
           (mafs/of-x {:y f :color :blue}))}))

;; this one is a little more fun... I am building a quoted value for `:radius`,
;; but the backtick means that on the client-side we'll see `emmy.env/abs`. And
;; Emmy is available in the SCI environment so this works fine!

;; NOTE this doesn't work yet with editor view.
#_
(ev/with-let [!point [1 1]]
  (mafs/mafs
   (mafs/cartesian)
   (mafs/circle
    {:center [0 0]
     :radius `(abs @~!point)})
   (mafs/movable-point {:atom !point})))

;; ## Combinators

;; Build up a more complex set of fragments with a combinators:

(defn chain [& points]
  (mafs/mafs
   (mafs/cartesian)
   (first
    (reduce (fn [[acc tail] p]
              (let [tip (mapv + tail p)
                    v   (mafs/vector
                         {:tail tail :tip tip})]
                [(conj acc v) tip]))
            [[:<>] [0 0]]
            points))))

;; apply it:

(chain [1 2] [1 0] [-1 1])

;; ## Compositional Scenes
;;
;; This is the ellipse example from mafs as a higher-order function. Takes a
;; function of a state symbol and returns a reagent fragment.

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
          {:translate (ev/get !state :translate)}
          (mafs/transform
           {:rotate `(let [[x# y#] (:rotate @~!state)]
                       (~'Math/atan2 y# x#))}
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
            :color :blue
            :constrain '#(mafs.vec/with-mag % 3)}))
         (mafs/movable-point
          {:atom !state
           :path :translate
           :color :orange}))))))

;; Then use the function:

;; NOTE this doesn't work yet with editor view.
#_
(with-handles
  (fn [!state]
    [:<>
     (mafs/ellipse
      {:center (ev/get !state :width)
       :radius [2 1]})
     (mafs/ellipse
      {:center [0 0]
       :radius `(let [{[x# _] :width [_ y#] :height} @~!state]
                  [(~'Math/abs x#) (~'Math/abs y#)])})]))

;; function that generates fragments representing `n` derivatives of `f`:

(defn derivatives [n f]
  (into [:<>]
        (map
         (fn [i color]
           (mafs/of-x ((expt D i) f) {:color color}))
         (range n)
         (cycle
          [:red :orange :green :blue :indigo :violet :pink :yellow]))))

;; `clerk/row` combinator works. Note that these can zoom!

(clerk/row
 (mafs/mafs {:zoom {:min 0.1 :max 2}}
            (mafs/cartesian)
            (derivatives 5 sin))
 (mafs/mafs {:zoom {:min 0.1 :max 2}}
            (mafs/cartesian)
            (derivatives 5 tanh)))

;; ## Clerk Row and Column
;;
;; show off a column of tex and then a graph of the same function:

(let [f ((expt D 3) tanh)]
  (clerk/col
   (->tex (f 'x))
   (mafs/mafs {:zoom {:min 0.1 :max 2}}
              (mafs/cartesian)
              (mafs/of-x f {:color :blue}))))

;; a clerk trick for making tables.

(defn caption [text]
  (clerk/html [:span.text-slate-500.text-xs.text-center.font-sans text]))

;; Why are the columns so narrow??

(clerk/row
 (clerk/col
  (mafs/mafs
   (mafs/cartesian)
   (mafs/of-x {:y sin :color :green})
   (mafs/of-y {:x sigmoid1 :color :blue}))
  (caption "A pair of functions."))
 (clerk/col
  (mafs/mafs {:zoom {:min 0.1 :max 2}}
             (mafs/cartesian)
             (derivatives 5 tanh))
  (caption [:<> "Derivatives of " [:code "tanh"] "."])))
