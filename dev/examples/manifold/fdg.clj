^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.manifold.fdg
  #:nextjournal.clerk
  {:toc true :no-cache true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [mentat.clerk-utils.viewers :refer [q]]
            [emmy.calculus.manifold :as cm]
            [emmy.env :as e :refer :all]
            [emmy.expression.compile :as xc]
            [emmy.leva :as leva]
            [emmy.mathbox :as box]
            [emmy.viewer :as ev]))

(ev/install!)

(defn scene [& children]
  (box/mathbox
   {:container  {:style {:height "400px" :width "100%"}}
    :renderer   {:background-color 0xffffff}}
   (apply box/cartesian
          {:range [[-10 10] [-10 10] [-10 10]] :scale [3 3 3]}
          (box/axis {:axis 1 :width 3})
          (box/axis {:axis 2 :width 3})
          (box/axis {:axis 3 :width 3})
          children)))

(defn manifold
  ([f] (manifold f {}))
  ([f opts]
   (let [f (if (cm/coordinate-system? f)
             (fn [[x y]]
               (cm/manifold-point-representation
                (cm/coords->point f [x y])))
             f)
         compiled (xc/compile-state-fn
                   f
                   false
                   [0 0]
                   {:mode :js
                    :calling-convention :primitive
                    :generic-params? false})
         sym (gensym)]
     (-> (q (reagent.core/with-let [~sym (js/Function. ~@compiled)]
              [emmy.mathbox.plot/Manifold
               ~(merge {:width 64
                        :height 64
                        :rangeX [0 (* 2 Math/PI)]
                        :rangeY [0 (* 2 Math/PI)]
                        :axes [1 3]
                        :live false
                        :items 1
                        :channels 3}
                       (assoc opts :f sym))]))
         (ev/tagged scene)))))

(defn toroidal->rect [R r]
  (fn [[theta phi]]
    (*
     (rotate-z-matrix phi)
     (up (+ R (* r (cos theta)))
         0
         (* r (sin theta))))))

(scene
 (manifold (toroidal->rect 2 0.5))
 (manifold S2-spherical))


(ev/with-let [!opts {:opacity 0.8 :x Math/PI :y Math/PI}]
  [:<>
   (leva/controls
    {:schema {:opacity {:min 0 :max 1 :step 0.01}
              :x {:step 0.1}
              :y {:step 0.1}}
     :atom !opts})
   (manifold S2-spherical
             {:rangeX [0 (q (:x @~!opts))]
              :rangeY [0 (q (:y @~!opts))]
              :surface {:opacity (q (:opacity @~!opts))}})])
