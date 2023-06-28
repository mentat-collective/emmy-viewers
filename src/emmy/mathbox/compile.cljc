(ns ^:no-doc emmy.mathbox.compile
  "Utilities for compiling code into a form needed by MathBox's data primitives."
  (:require [emmy.expression.compile :as xc]
            [emmy.viewer :as v]
            [emmy.viewer.compile :as vc]))

(defn frame
  "Given a map with entries:

  - `:sym`: symbol representing a `:calling-convention :primitive` compiled
    function
  - `:dimensions`: the dimensions of the function's input (1, 2 or 3)
  - `:param-f` an optional [[emmy.viewer/ParamF]] instance

  returns a quoted fragment of code that closes over a single input and output
  array (and optionally an array generated from the parameters) and performs the
  required `aset` and `aget` calls to make this function work with MathBox's
  `emit` conventions.

  NOTE: the `@` deref is important, as it triggers Reagent to close over a new
  parameter array each time the referenced parameters change."
  [{:keys [sym dimensions param-f]}]
  {:pre [(#{1 2 3} dimensions)]}
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
                (aget out# 1)
                (aget out# 2))))))

(defn param-3d
  "Given:

  - A symbol `sym` representing a `:calling-convention :primitive` compiled
    function
  - a [[emmy.viewer/ParamF]] instance
  - the `dimensions` of the function's input (1, 2 or 3)
  - `simplify?` a boolean to pass along to the compiler

  Returns a pair of a compiled state function and the output of [[frame]]."
  [sym {:keys [f params] :as param-f} dimensions simplify?]
  [(xc/compile-state-fn
    f params (into [] (repeat dimensions 0))
    {:mode :js
     :simplify? simplify?
     :calling-convention :primitive})
   (frame
    {:sym sym
     :dimensions dimensions
     :param-f param-f})])

(defn compile-3d
  "Takes

  - an options map `opts`
  - the `k` that maps to the function (of `[double double double]`-producing
    type) to compile
  - the `dimensions` of the function's input (1, 2 or 3)

  and returns a pair of

  - a new binding pair
  - the options map updated to reference the new compiled fn via symbol."
  [opts k dimensions]
  (let [v (get opts k)]
    (if-not (vc/compile? v)
      [[] opts]
      (let [sym          (gensym)
            simplify?    (:simplify? opts true)
            [body new-f] (if (v/param-f? v)
                           (param-3d sym v dimensions simplify?)
                           [(xc/compile-state-fn
                             v false (into [] (repeat dimensions 0))
                             {:mode :js
                              :generic-params? false
                              :simplify? simplify?
                              :calling-convention :primitive})
                            (frame
                             {:sym sym :dimensions dimensions})])]
        [[sym (list* 'js/Function. body)]
         (assoc opts k new-f)]))))
