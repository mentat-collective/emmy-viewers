(ns ^:no-doc emmy.mafs.compile
  "Compile helpers. TODO is this where to put no-doc?"
  (:require [emmy.expression.compile :as xc]
            [emmy.structure :as s]))

(defn compile? [f]
  (and (ifn? f)
       (not (symbol? f))))

;; TODO obviously these two are quite similar, and they hould move to a new compile namespace.

(defn compile-1d
  "Compiles a function from a 1d input to some output."
  [opts k]
  (let [v (get opts k)]
    (if-not (compile? v)
      [[] opts]
      (let [sym  (gensym)
            v    (if (vector? v) (s/vector->up v) v)
            body (xc/compile-fn v 1 {:mode :js})]
        [[sym (list* 'js/Function. body)]
         (assoc opts k sym)]))))

(defn compile-2d
  "Compiles a function from a 2d input to some output."
  [opts k]
  (let [v (get opts k)]
    (if-not (compile? v)
      [[] opts]
      (let [sym  (gensym)
            v    (if (vector? v) (s/vector->up v) v)
            body (xc/compile-state-fn v false [0 0] {:mode :js})]
        [[sym (list* 'js/Function. body)]
         (assoc opts k sym)]))))

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
