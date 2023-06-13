^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.manifold.fdg
  #:nextjournal.clerk{:toc true :no-cache true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.calculus.manifold :as cm]
            [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.expression.compile :as xc]
            [emmy.leva :as leva]
            [emmy.mathbox :as box]
            [emmy.viewer :as ev]))

(ec/install!)

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

(defn surface
  ([f] (surface f {}))
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
     (-> (list 'reagent.core/with-let [sym (list* 'js/Function. compiled)]
               ['emmy.mathbox.plot/ParametricSurface
                (merge {:width 64
                        :height 64
                        :rangeX [0 (* 2 Math/PI)]
                        :rangeY [0 (* 2 Math/PI)]
                        :axes [1 3]
                        :live false
                        :items 1
                        :channels 3}
                       (assoc opts :f sym))])
         (ev/fragment scene)))))

(defn toroidal->rect [R r]
  (fn [[theta phi]]
    (*
     (rotate-z-matrix phi)
     (up (+ R (* r (cos theta)))
         0
         (* r (sin theta))))))

(defn klein [[u v]]
  [(* -2/15 (cos u)
      (+ (- (* 3 (cos v))
            (* 30 (sin u)))
         (- (* 90 (sin u) (expt (cos u) 4))
            (* 60 (sin u) (expt (cos u) 6)))
         (* 5 (cos u) (cos v) (sin u))))
   (* -1/15 (sin u)
      (+ (- (* 3 (cos v))
            (* 3 (square (cos u)) (cos v))
            (* 48 (cos v) (expt (cos u) 4)))
         (- (* 48 (cos v) (expt (cos u) 6))
            (* 60 (sin u)))
         (- (* 5 (cos u) (cos v) (sin u))
            (* 5 (cube (cos u)) (cos v) (sin u))
            (* 80 (expt (cos u) 5) (cos v) (sin u)))
         (* 80 (expt (cos u) 7) (cos v) (sin u))))
   (* 2/15 (sin v)
      (+ 3 (* 5 (cos u) (sin u))))])

(surface klein)

(scene
 (surface (toroidal->rect 2 0.5))
 (surface S2-spherical))

(scene
 (ev/with-let [!opts {:opacity 0.8 :x Math/PI :y Math/PI}]
   [:<>
    (leva/controls
     {:schema
      {:opacity {:min 0 :max 1 :step 0.01}
       :x {:step 0.1}
       :y {:step 0.1}}
      :atom !opts})
    (surface S2-spherical
             {:rangeX [0 (ev/get !opts :x)]
              :rangeY [0 (ev/get !opts :y)]
              :surface {:opacity (ev/get !opts :opacity)}})]))
