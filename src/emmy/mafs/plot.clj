(ns emmy.mafs.plot
  "Server-side rendering functions for the components declared in the
  [`mafs.plot`](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/api/mafs.plot)
  namespace of the [`Mafs.cljs` project](https://mafs.mentat.org)."
  (:require [emmy.mafs.core :as mafs]
            [emmy.expression.compile :as xc]
            [mentat.clerk-utils.viewers :refer [q]]))

;; TODO ifn will not cut it!! symbols are ifn.
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
      (if (ifn? (:y opts))
        (let [sym  (gensym)
              body (xc/compile-fn (:y opts) 1 {:mode :js})]
          (q
           (reagent.core/with-let [~sym (js/Function. ~@body)]
             [mafs.plot/OfX ~(assoc opts :y sym)])))
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
      (if (ifn? (:x opts))
        (let [sym  (gensym)
              body (xc/compile-fn (:x opts) 1 {:mode :js})]
          (q
           (reagent.core/with-let [~sym (js/Function. ~@body)]
             [mafs.plot/OfY ~(assoc opts :x sym)])))
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
  ;; TODO this is more complicated!!
  ([f opts]
   (parametric (assoc opts :xy f)))
  ([opts]
   (mafs/tagged
    (if (ifn? (:xy opts))
      (let [f (xc/compile-fn (:xy opts) 1 {:mode :js})]
        (q
         (reagent.core/with-let [f' (js/Function. ~@f)]
           [mafs.plot/Parametric ~(assoc opts :xy 'f')])))
      ['mafs.plot/Parametric opts]))))

;; TODO figure out the parametric function option, we can totally pass the state
;; value to this bad boy.
;;
;; OKAY - so here we need to generate function bodies... and then also the form
;; required to call the thing. and then when we CALL the functions. I can't do
;; this now, I've gotta do the real deal soon. But obviously this is a required
;; thing.
(defn ^:no-doc compile-2d [f]
  (cond
    #_#_(map? f)
    (let [{:keys [params shape f]} f
          opts {:mode :js :generic-params? true}
          body (xc/compile-state-fn f shape [0 0] opts)
          sym  (gensym)]
      (q (reagent.core/with-let
           ~[sym (list* 'js/Function. body)]
           )))

    (ifn? f)
    (let [body (xc/compile-state-fn f false [0 0] {:mode :js})]
      (list* 'js/Function. body))

    :else f))

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
     ;; TODO do NOT put the `xy` etc in here if they are quoted forms!!
     (mafs/tagged
      (q (reagent.core/with-let
           [xy      ~(compile-2d (:xy opts))
            opacity ~(compile-2d (:xy-opacity opts))]
           [mafs.plot/VectorField
            ~(assoc opts :xy 'xy :xy-opacity 'opacity)]))))))
