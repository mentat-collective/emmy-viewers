(ns emmy.mafs.plot
  "Server-side rendering functions for the components declared in the
  [`mafs.plot`](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/api/mafs.plot)
  namespace of the [`Mafs.cljs` project](https://mafs.mentat.org)."
  (:require [emmy.viewer :as v]
            [emmy.mafs.compile :as c]
            [emmy.mafs.core :as mafs]))

(defn of-x
  "
  - `:y`
  - `:svg-path-props`
  - `:color`
  - `:min-sampling-depth`
  - :`max-sampling-depth`
  - `:opacity`
  - `:weight`
  - `:style`"
  ([f opts]
   (of-x (assoc opts :y f)))
  ([f-or-opts]
   (if (c/opts? f-or-opts)
     (let [[binding opts] (c/compile-1d f-or-opts :y)]
       (mafs/fragment
        (c/wrap [binding] ['mafs.plot/OfX opts])))
     (of-x f-or-opts {}))))

(defn of-y
  "
  Either pass a function or an opts map...

  - `:x`
  - `:svg-path-props`
  - `:color`
  - `:min-sampling-depth`
  - :`max-sampling-depth`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  ([f opts]
   (of-y (assoc opts :x f)))
  ([f-or-opts]
   (if (c/opts? f-or-opts)
     (let [[binding opts] (c/compile-1d f-or-opts :x)]
       (mafs/fragment
        (c/wrap [binding] ['mafs.plot/OfY opts])))
     (of-y f-or-opts {}))))

(defn inequality
  "
  - `:x`
  - `:y`
  - `:color`
  - `:weight`
  - `:stroke-color`
  - `:stroke-opacity`
  - `:fill-color`
  - `:fill-opacity`
  - `:min-sampling-depth`
  - :`max-sampling-depth`
  - `:upper-color`
  - `:upper-weight`
  - `:upper-opacity`
  - `:lower-color`
  - `:lower-weight`
  - `:lower-opacity`
  - `:svg-upper-path-props`
  - `:svg-lower-path-props`
  - `:svg-fill-path-props`
  "
  [opts]
  (let [[x-binds x] (c/compile-vals (:x opts) c/compile-1d)
        [y-binds y] (c/compile-vals (:y opts) c/compile-1d)]
    (c/wrap (into x-binds y-binds)
            ['mafs.plot/Inequality
             (cond-> opts
               x (assoc :x x)
               y (assoc :y y))])))

(defn parametric
  "
  - `:xy`
  - `:t`
  - `:svg-path-props`
  - `:color`
  - `:min-sampling-depth`
  - :`max-sampling-depth`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  ([opts]
   (let [[binding opts] (c/compile-1d opts :xy)]
     (mafs/fragment
      (c/wrap [binding] ['mafs.plot/Parametric opts])))))

;; TODO figure out the parametric function option, we can totally pass the state
;; value to this bad boy.
;;
;; OKAY - so here we need to generate function bodies... and then also the form
;; required to call the thing. and then when we CALL the functions. I can't do
;; this now, I've gotta do the real deal soon. But obviously this is a required
;; thing.

(defn vector-field
  "
  - `:xy`
  - `:xy-opacity`
  - `:step`
  - `:opacity-step`
  - `:color`
  - `:style`"
  ([f opts]
   (vector-field (assoc opts :xy f)))
  ([f-or-opts]
   (if (c/opts? f-or-opts)
     (let [[xy-bind opts] (c/compile-2d f-or-opts :xy)
           [op-bind opts] (c/compile-2d opts :xy-opacity)]
       (c/wrap [xy-bind op-bind]
               ['mafs.plot/VectorField opts]))
     (vector-field f-or-opts {}))))
