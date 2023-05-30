(ns ^:no-doc emmy.mafs.compile
  "Compile helpers. TODO is this where to put no-doc?"
  (:require [emmy.expression.compile :as xc]
            [emmy.structure :as s]
            [emmy.viewer :as v]
            [mentat.clerk-utils.viewers :refer [q]]))

(defn compile? [f]
  (or (v/param-f? f)
      (and (ifn? f)
           (not (symbol? f)))))

(defn opts? [m]
  (and (map? m)
       (not (v/param-f? m))))

;; ## Compile Functions

#_{:clj-kondo/ignore [:unused-binding]}
(defn param-1d [sym {:keys [f params atom]}]
  [(xc/compile-state-fn
    (fn [& params]
      (let [inner (apply f params)]
        (fn [[x]] (inner x))))
    params
    [0]
    {:mode :js})
   (let [psym (gensym)]
     (q
      (let [~psym (mapv @~atom ~params)]
        (fn [x]
          (~sym [x] ~psym)))))])

(defn compile-1d
  "Compiles a function from a 1d input to some output."
  [opts k]
  (let [v (get opts k)]
    (if-not (compile? v)
      [[] opts]
      (let [sym          (gensym)
            v            (if (vector? v) (s/vector->up v) v)
            [body new-f] (if (v/param-f? v)
                           (param-1d sym v)
                           [(xc/compile-fn v 1 {:mode :js}) sym])]
        [[sym (list* 'js/Function. body)]
         (assoc opts k new-f)]))))

#_{:clj-kondo/ignore [:unused-binding]}
(defn param-2d [sym {:keys [f params atom]}]
  [(xc/compile-state-fn f params [0 0] {:mode :js})
   (let [psym (gensym)]
     (q
      (let [~psym (mapv @~atom ~params)]
        (fn [xy]
          (~sym xy ~psym)))))])

(defn compile-2d
  "Compiles a function from a 2d input to some output."
  [opts k]
  (let [v (get opts k)]
    (if-not (compile? v)
      [[] opts]
      (let [sym          (gensym)
            v            (if (vector? v) (s/vector->up v) v)
            [body new-f] (if (v/param-f? v)
                           (param-2d sym v)
                           [(xc/compile-state-fn v false [0 0] {:mode :js}) sym])]
        [[sym (list* 'js/Function. body)]
         (assoc opts k new-f)]))))

(defn compile-vals
  "Takes a map of key => val and tries to compile all values. returns a pair
  of [<all bindings>, <new map>]"
  [m compile-fn]
  (reduce
   (fn [[bindings opts] k]
     (let [[v opts] (compile-fn opts k)]
       [(conj bindings v) opts]))
   [[] m]
   (keys m)))

(defn wrap [bindings body]
  (let [bindings (into [] cat bindings)]
    (if (seq bindings)
      (list 'reagent.core/with-let bindings body)
      body)))
