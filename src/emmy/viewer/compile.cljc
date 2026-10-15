(ns ^:no-doc emmy.viewer.compile
  "This namespace contains functions for compiling Emmy function objects down to
  JavaScript `js/Function` constructor calls.

  See [[emmy.mafs.plot]] and [[emmy.mathbox.plot]] for example uses."
  (:require [emmy.expression.compile :as xc]
            [emmy.viewer :as v]
            [emmy.viewer.kernel.adapter :as adapter]
            [emmy.viewer.kernel.backend :as backend]
            [emmy.viewer.kernel.plan :as plan]))

(defn compile?
  "Returns true if `f` is an argument that should be compiled by Emmy, false
  otherwise.

  NOTE that this predicate is quite permissive. Anything that does NOT pass this
  test will be treated as a quoted form that the end component knows how to do
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

(defn vectorize
  "Given a function `f` (parametrized or not) of a single non-vector argument,
  returns a similar version that takes `[x]` instead of `x`."
  [f]
  (if-not (compile? f)
    f
    (if (v/param-f? f)
      (update f :f
              (fn [f]
                (fn [& params]
                  (let [inner (apply f params)]
                    (fn [[x]] (inner x))))))
      (fn [[t]] (f t)))))

;; ## Computational Backends

(def ^:dynamic *backend*
  "The computational backend that compiles Emmy functions for the viewers.
  Accepts a registered keyword or a KernelBackend value; use
  [[emmy.viewer.kernel.backend/register-backend!]] to register new backends.

  - `:js` (default): JavaScript source, from Emmy's `:js` compile mode.
  - `:raster`: WebAssembly, compiled by raster on the JVM. Needs raster on the
    classpath; see [[emmy.viewer.raster]].

  Bind it around the code that builds a viewer:

  ```clojure
  (binding [emmy.viewer.compile/*backend* :raster]
    (emmy.mafs/of-x sin))
  ```"
  :js)

(defrecord JsBackend []
  backend/KernelBackend
  (kernel-form [_ f params initial-state opts]
    ;; The plan is only read for its shapes and counts, so it skips
    ;; simplification; Emmy's own :js compile below does the real work.
    (let [p (plan/plan f params initial-state (assoc opts :simplify? false))]
      (list (list 'js/Function. "fb" (adapter/adapter-source p))
            (list* 'js/Function.
                   (xc/compile-state-fn f params initial-state (assoc opts :mode :js)))))))

(defn compiled-fn
  "Returns a form that evaluates, in the browser, to `f` compiled by
  [[*backend*]].

  The arguments are those of [[emmy.expression.compile/compile-state-fn]], minus
  `:mode`, and the compiled function has the same calling convention whichever
  backend compiles it."
  [f params initial-state opts]
  (backend/kernel-form (backend/resolve-backend *backend*)
                       f params initial-state opts))

(backend/register-backend! :js (->JsBackend))

;; ## Compile Functions

(defn param-1d
  "Takes:

  - `sym`, a symbol that the compiled function will be bound to
  - a [[emmy.viewer/ParamF]] map with an `f` of one Double argument

  and returns a pair of

  - a form that evaluates to the compiled function (see [[compiled-fn]])
  - the NEW quoted form that should be passed along.

  See the body of [[compile-1d]] for more details."
  [sym {:keys [f params atom]}]
  [(compiled-fn
    (fn [& params]
      (let [inner (apply f params)]
        (fn [[x]] (inner x))))
    params
    [0]
    {})
   `(emmy.viewer.kernel/bind-1d ~sym (mapv @~atom ~params))])

(defn compile-1d
  "Takes

  - an options map `opts`
  - the `k` that maps to the function (of one Double argument) to compile

  and returns a pair of

  - a new binding pair
  - the options map updated to reference the new compiled fn via symbol."
  [opts k]
  (let [v (get opts k)]
    (if-not (compile? v)
      [[] opts]
      (let [sym          (gensym)
            [form new-f] (if (v/param-f? v)
                           (param-1d sym v)
                           [(compiled-fn v false [0] {:calling-convention :native
                                                      :arity 1})
                            sym])]
        [[sym form]
         (assoc opts k new-f)]))))

(defn param-2d
  "Takes:

  - `sym`, a symbol that the compiled function will be bound to
  - a [[emmy.viewer/ParamF]] map with an `f` of one `[double double]`-shaped
    argument

  and returns a pair of

  - a form that evaluates to the compiled function (see [[compiled-fn]])
  - the NEW quoted form that should be passed along.

  See the body of [[compile-2d]] for more details."
  [sym {:keys [f params atom]}]
  [(compiled-fn f params [0 0] {})
   `(emmy.viewer.kernel/bind ~sym (mapv @~atom ~params))])

(defn compile-2d
  "Takes

  - an options map `opts`
  - the `k` that maps to the function (of one `[double double]`-shaped argument)
    to compile

  and returns a pair of

  - a new binding pair
  - the options map updated to reference the new compiled fn via symbol."
  [opts k]
  (let [v (get opts k)]
    (if-not (compile? v)
      [[] opts]
      (let [sym          (gensym)
            [form new-f] (if (v/param-f? v)
                           (param-2d sym v)
                           [(compiled-fn v false [0 0] {}) sym])]
        [[sym form]
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
