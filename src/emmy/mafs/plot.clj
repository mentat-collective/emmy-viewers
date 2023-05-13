(ns emmy.mafs.plot
  (:require [emmy.mafs.core :as mafs]
            [emmy.expression.compile :as xc]
            [mentat.clerk-utils.viewers :refer [q]]))

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
  ([opts]
   (let [opts (if (map? opts) opts {:y opts})]
     (mafs/tagged
      (if (fn? (:y opts))
        (let [f (xc/compile-fn (:y opts) 1 {:mode :js})]
          (q
           (reagent.core/with-let [f' (js/Function. ~@f)]
             [mafs.plot/OfX ~(assoc opts :y 'f')])))
        ['mafs.plot/OfX opts])))))

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
  ([opts]
   (let [opts (if (map? opts) opts {:x opts})]
     (mafs/tagged
      (if (fn? (:x opts))
        (let [f (xc/compile-fn (:x opts) 1 {:mode :js})]
          (q
           (reagent.core/with-let [f' (js/Function. ~@f)]
             [mafs.plot/OfY ~(assoc opts :x 'f')])))
        ['mafs.plot/OfY opts])))))

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
  ([f opts]
   (parametric (assoc opts :xy f)))
  ([opts]
   (let [opts (if (map? opts) opts {:xy opts})]
     (mafs/tagged
      (if (fn? (:xy opts))
        (let [f (xc/compile-fn (:xy opts) 1 {:mode :js})]
          (q
           (reagent.core/with-let [f' (js/Function. ~@f)]
             [mafs.plot/Parametric ~(assoc opts :xy 'f')])))
        ['mafs.plot/Parametric opts])))))

;; TODO figure out the parametric function option, we can totally pass the state
;; value to this bad boy.
(defn ^:no-doc compile-2d [f]
  (if (fn? f)
    (let [[args _ body] (xc/compile-state-fn (fn [] f) [] [0 0] {:mode :js})]
      (list 'js/Function. args body))
    f))

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
  ([opts]
   (let [opts (if (map? opts) opts {:xy opts})]
     (mafs/tagged
      (q (reagent.core/with-let
           [xy      ~(compile-2d (:xy opts))
            opacity ~(compile-2d (:xy-opacity opts))]
           [mafs.plot/VectorField
            ~(assoc opts :xy 'xy :xy-opacity 'opacity)]))))))
