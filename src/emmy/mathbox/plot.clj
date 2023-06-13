(ns emmy.mathbox.plot
  (:require [emmy.viewer.compile :as c]
            [emmy.mathbox :as box]
            [emmy.viewer :as ev]))

;; ## Function Viewer

(defn scene [cartesian-opts & children]
  (box/mathbox
   {:container {:style {:height "400px" :width "100%"}}
    :renderer  {:background-color 0xffffff}}
   (box/camera {:proxy true :position [2.3 1 2]})
   (apply box/cartesian
          cartesian-opts
          (box/axis {:axis 1 :width 3})
          (box/axis {:axis 2 :width 3})
          (box/axis {:axis 3 :width 3})
          children)))

(defn of-x
  [opts]
  (let [[y-bind opts] (c/compile-1d opts :y)
        [z-bind opts] (c/compile-1d opts :z)]
    (-> (c/wrap [y-bind z-bind]
                ['emmy.mathbox.plot/OfX opts])
        (ev/fragment #(scene {} %)))))

(defn of-y
  [opts]
  (let [[x-bind opts] (c/compile-1d opts :x)
        [z-bind opts] (c/compile-1d opts :z)]
    (-> (c/wrap [x-bind z-bind]
                ['emmy.mathbox.plot/OfY opts])
        (ev/fragment #(scene {} %)))))

(defn of-z
  [opts]
  (let [[x-bind opts] (c/compile-1d opts :x)
        [y-bind opts] (c/compile-1d opts :y)]
    (-> (c/wrap [x-bind y-bind]
                ['emmy.mathbox.plot/OfZ opts])
        (ev/fragment #(scene {} %)))))

(defn of-xy
  [opts]
  (let [[z-bind opts] (c/compile-2d opts :z)]
    (-> (c/wrap [z-bind] ['emmy.mathbox.plot/OfXY opts])
        (ev/fragment #(scene {} %)))))

(defn of-xz
  [opts]
  (let [[y-bind opts] (c/compile-2d opts :y)]
    (-> (c/wrap [y-bind] ['emmy.mathbox.plot/OfXZ opts])
        (ev/fragment #(scene {} %)))))

(defn of-yz
  [opts]
  (let [[x-bind opts] (c/compile-2d opts :x)]
    (-> (c/wrap [x-bind] ['emmy.mathbox.plot/OfYZ opts])
        (ev/fragment #(scene {} %)))))

(defn parametric-surface
  [opts]
  (let [[f-bind opts] (c/compile-2d opts :f)]
    (-> (c/wrap [f-bind] ['emmy.mathbox.plot/ParametricSurface opts])
        (ev/fragment #(scene {} %)))))
