(ns emmy.mathbox.plot
  (:refer-clojure :exclude [vector])
  (:require [emmy.mathbox :as box]
            [emmy.mathbox.compile :as mc]
            [emmy.viewer :as ev]
            [emmy.viewer.compile :as c]))

;; ## Function Viewer
;;
;; TODO take a `compile?` flag for the compiler namespaces, so pq knots work.

(defn scene [& children]
  (box/mathbox
   {:container {:style {:height "400px" :width "100%"}}
    :renderer  {:background-color 0xffffff}}
   (into  ['emmy.mathbox.plot/Scene] children)))

(defn point [opts]
  (ev/fragment
   ['emmy.mathbox.plot/Point opts]
   scene))

(defn line [opts]
  (ev/fragment
   ['emmy.mathbox.plot/Line opts]
   scene))

(defn vector [opts]
  (ev/fragment
   ['emmy.mathbox.plot/Vector opts]
   scene))

(defn of-x
  [opts]
  (let [[y-bind opts] (c/compile-1d opts :y)
        [z-bind opts] (c/compile-1d opts :z)]
    (-> (c/wrap [y-bind z-bind]
                ['emmy.mathbox.plot/OfX opts])
        (ev/fragment scene))))

(defn of-y
  [opts]
  (let [[x-bind opts] (c/compile-1d opts :x)
        [z-bind opts] (c/compile-1d opts :z)]
    (-> (c/wrap [x-bind z-bind]
                ['emmy.mathbox.plot/OfY opts])
        (ev/fragment scene))))

(defn of-z
  [opts]
  (let [[x-bind opts] (c/compile-1d opts :x)
        [y-bind opts] (c/compile-1d opts :y)]
    (-> (c/wrap [x-bind y-bind]
                ['emmy.mathbox.plot/OfZ opts])
        (ev/fragment scene))))

(defn parametric-curve
  "TODO tidy..."
  [{:keys [f] :as opts}]
  (let [opts (if (ev/param-f? f)
               (update opts :f
                       update :f
                       (fn [f]
                         (fn [& params]
                           (let [inner (apply f params)]
                             (fn [[x]] (inner x))))))
               (assoc opts :f (fn [[t]] (f t))))
        [f-bind opts] (mc/compile-3d opts :f 1)]
    (-> (c/wrap [f-bind] ['emmy.mathbox.plot/ParametricCurve opts])
        (ev/fragment scene))))

(defn of-xy
  [opts]
  (let [[z-bind opts] (c/compile-2d opts :z)]
    (-> (c/wrap [z-bind] ['emmy.mathbox.plot/OfXY opts])
        (ev/fragment scene))))

(defn of-xz
  [opts]
  (let [[y-bind opts] (c/compile-2d opts :y)]
    (-> (c/wrap [y-bind] ['emmy.mathbox.plot/OfXZ opts])
        (ev/fragment scene))))

(defn of-yz
  [opts]
  (let [[x-bind opts] (c/compile-2d opts :x)]
    (-> (c/wrap [x-bind] ['emmy.mathbox.plot/OfYZ opts])
        (ev/fragment scene))))

(defn polar-surface [opts]
  (let [[z-bind opts] (c/compile-2d opts :z)]
    (-> (c/wrap [z-bind] ['emmy.mathbox.plot/PolarSurface opts])
        (ev/fragment scene))))

(defn parametric-surface
  [opts]
  (let [[f-bind opts] (mc/compile-3d opts :f 2)]
    (-> (c/wrap [f-bind] ['emmy.mathbox.plot/ParametricSurface opts])
        (ev/fragment scene))))

(defn vector-field
  [opts]
  (let [[f-bind opts] (mc/compile-3d opts :f 3)]
    (-> (c/wrap [f-bind] ['emmy.mathbox.plot/VectorField opts])
        (ev/fragment scene))))
