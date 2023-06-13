(ns ^:no-doc emmy.viewer.compile
  "This namespace contains functions for compiling Emmy function objects down to
  JavaScript `js/Function` constructor calls.

  See [[emmy.mafs.plot]] for example uses."
  (:require [emmy.expression.compile :as xc]
            [emmy.structure :as s]
            [emmy.viewer :as v]
            [mentat.clerk-utils.viewers :refer [q]]))

(defn compile?
  "Returns true if `f` is an argument that should be compiled by Emmy, false
  otherwise.

  NOTE that this predicate is quite permissive. Anything that does NOT pass this
  test will be treated as a quoted form that `Mafs.cljs` knows how to do
  something with."
  [f]
  (or (v/param-f? f)
      (and (ifn? f)
           (not (symbol? f)))))

(defn opts?
  "Returns true for actual maps of options (vs [[emmy.viewer/param-f?]]-true
  instances, which are map-like but NOT meant to be treated as options), false
  otherwise."
  [m]
  (and (map? m)
       (not (v/param-f? m))))

;; ## Compile Functions

#_{:clj-kondo/ignore [:unused-binding]}
(defn param-1d
  "Takes:

  - `sym`, a symbol that the compiled function will be bound to
  - a [[emmy.viewer/ParamF]] map with an `f` of one Double argument

  and returns a pair of

  - a function body of the form `(js/Function. ...)`
  - the NEW quoted form that should be passed along to Mafs.

  See the body of [[compile-1d]] for more details."
  [sym {:keys [f params atom]}]
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
  "Takes

  - an options map `opts` supplied to some Mafs component
  - the `k` that maps to the function (of one Double argument) to compile

  and returns a pair of

  - a sequence of new bindings
  - the options map updated to reference the new compiled fn via symbol."
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
(defn param-2d
  "Takes:

  - `sym`, a symbol that the compiled function will be bound to
  - a [[emmy.viewer/ParamF]] map with an `f` of one `[double double]`-shaped
    argument

  and returns a pair of

  - a function body of the form `(js/Function. ...)`
  - the NEW quoted form that should be passed along to Mafs.

  See the body of [[compile-2d]] for more details."
  [sym {:keys [f params atom]}]
  [(xc/compile-state-fn f params [0 0] {:mode :js})
   (let [psym (gensym)]
     (q
      (let [~psym (mapv @~atom ~params)]
        (fn [xy]
          (~sym xy ~psym)))))])

(defn compile-2d
  "Takes

  - an options map `opts` supplied to some Mafs component
  - the `k` that maps to the function (of one `[double double]`-shaped argument)
    to compile

  and returns a pair of

  - a sequence of new bindings
  - the options map updated to reference the new compiled fn via symbol."
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

(defn wrap
  "Given a sequence of pairs of `bindings` and a body, returns a
  `reagent.core/with-let` binding form.

  For example:

  ```clojure
  (wrap [['a \"face\"] ['b \"cake\"]] '(+ a b))
  ;;=> (reagent.core/with-let [a \"face\" b \"cake\"] (+ a b))
  ```
  "[bindings body]
  (let [bindings (into [] cat bindings)]
    (if (seq bindings)
      (list 'reagent.core/with-let bindings body)
      body)))

(defn compile-vals
  "Takes a map `m` of key => val and tries to compile all values using
  `compile-fn` (either [[compile-1d]] or [[compile-2d]]).

  returns a pair of [<all bindings>, <new map>]."
  [m compile-fn]
  (reduce
   (fn [[bindings opts] k]
     (let [[v opts] (compile-fn opts k)]
       [(conj bindings v) opts]))
   [[] m]
   (keys m)))
