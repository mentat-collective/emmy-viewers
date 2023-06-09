^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.functions
  #:nextjournal.clerk{:toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare numerator denominator ref partial
             infinite? abs])
  (:require [mentat.clerk-utils.viewers :refer [q]]
            [emmy.env :as e :refer :all]
            [emmy.expression.compile :as xc]
            [emmy.mathbox :as box]
            [emmy.viewer :as ev]))

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ev/install!)

;; ## Function Viewer

(defn scene [cartesian-opts & children]
  (box/mathbox
   {:container {:style {:height "400px" :width "100%"}}
    :renderer  {:background-color 0xffffff}}
   (box/camera {:proxy true :position [2.3 1 2]})
   (apply box/cartesian cartesian-opts
          (box/axis {:axis 1 :width 3})
          (box/axis {:axis 2 :width 3})
          (box/axis {:axis 3 :width 3})
          children)))

(defn of-x [f samples]
  [:<>
   (let [compiled (xc/compile-fn f 1 {:mode :js})
         sym      (gensym)]
     (q (reagent.core/with-let [~sym (js/Function. ~@compiled)]
          [emmy.mathbox.plot/OfX {:width ~samples :f ~sym}])))
   (box/line {:color 0x3090ff :width 4})
   (box/point {:color 0x3090ff :size 8})])



;; ### Demo
;;
;; Let's make a function to try!

(defn my-fn [x]
  (+ -1
     (square (sin x))
     (square (cos (* 2 x)))))

;; The function works locally, with numbers or symbols:

[(my-fn 1) (my-fn 'x)]

;; Then we'll call it with our new viewer:

(scene
 {:range [[-6 6] [-1 1] [-1 1]]
  :scale [6 1 1]}
 (of-x my-fn 256))

;; tidy it up:

(defn view [f]
  (scene
   {:range [[-6 6] [-1 1] [-1 1]]
    :scale [6 1 1]}
   (of-x f 256)))

(view my-fn)
