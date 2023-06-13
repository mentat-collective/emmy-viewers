(ns ^:no-doc emmy.mathbox.compile
  (:require [emmy.expression.compile :as xc]
            [emmy.structure :as s]
            [emmy.viewer :as v]
            [emmy.viewer.compile :as vc]))

(defn frame
  [{:keys [sym dimensions param-f]}]
  {:pre [(#{1 2} dimensions)]}
  (let [in      (gensym)
        syms    (repeatedly dimensions gensym)
        indices (range dimensions)]
    `(let [~in   (~'js/Array. ~@(repeat dimensions 0))
           out#  (~'js/Array. 0 0 0)
           psym# ~(when param-f
                    (let [{:keys [params atom]} param-f]
                      `(apply ~'array (map @~atom ~params))))]
       (fn [emit# ~@syms]
         ~@(map #(list `aset in %1 %2)
                indices
                syms)
         (~sym ~in out# psym#)
         (emit# (aget out# 0)
                (aget out# 2)
                (aget out# 1))))))

(defn param-3d
  [sym {:keys [f params] :as param-f} dimensions]
  [(xc/compile-state-fn
    f params (into [] (repeat dimensions 0))
    {:mode :js
     :calling-convention :primitive})
   (frame
    {:sym sym
     :dimensions dimensions
     :param-f param-f})])

(defn compile-3d
  [opts k dimensions]
  (let [v (get opts k)]
    (if-not (vc/compile? v)
      [[] opts]
      (let [sym          (gensym)
            v            (if (vector? v) (s/vector->up v) v)
            [body new-f] (if (v/param-f? v)
                           (param-3d sym v dimensions)
                           [(xc/compile-state-fn
                             v false [0 0]
                             {:mode :js
                              :generic-params? false
                              :calling-convention :primitive})
                            (frame
                             {:sym sym :dimensions dimensions})])]
        [[sym (list* 'js/Function. body)]
         (assoc opts k new-f)]))))
