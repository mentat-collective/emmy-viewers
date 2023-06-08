^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy.viewer
  "This namespace contains functions for building Reagent fragments that are
  renderable by Clerk (see [[emmy.clerk]]) or Portal (see [[emmy.portal]])."
  {:nextjournal.clerk/toc true}
  (:refer-clojure :exclude [get get-in])
  (:require [nextjournal.clerk :as-alias clerk]))

;; ## Emmy Viewers
;;
;; This namespace contains functions for building Reagent fragments that are
;; renderable by Clerk (see [[emmy.clerk]]) or Portal (see [[emmy.portal]]).
;;
;; These fragments communicate how they're meant to be rendered via metadata. I
;; think this is a good idea, but we'll see how it evolves!


;; ## Metadata Configuration
;;
;; You won't need to call any of the functions in this section manually unless
;; you're building your own fragment-returning functions. In that case, wrap
;; your return values in [[fragment]], potentially with a custom transform to,
;; say, wrap your fragment in some context that it needs to render.
;;
;; We do this, for example, in the Mafs plots so that writing `(of-x sin)`
;; works, even though `(of-x <f>)` needs to be wrapped in `(mafs ...)` to work.

(defonce ^{:no-doc true
           :doc "This value is attached by [[fragment]] to its argument's
  metadata. It's initialized as `nil` here because Clerk is an optional
  dependency of the library.

  Requiring [[emmy.clerk]] will re-bind this var as a side-effect to an actual
  Clerk viewer that knows how to render Reagent fragments."}
  reagent-viewer
  nil)

(defn expand
  "If `v` has a `fn?` (say, `f`) registered as Clerk viewer metadata, recurses
  with the expanded value `(f v)`. Else, returns `v` unchanged."
  [v]
  (let [xform (-> v meta :nextjournal.clerk/viewer)]
    (if (fn? xform)
      (expand (xform v))
      v)))

(defn fragment
  "Given some quoted form `v`, adds metadata that allows the libraries supported
  by Emmy-Viewers to eval and render `v` as a Reagent component.

  Optionally takes a Clerk viewer or transforming function `viewer-or-xform` to
  be applied at render-time and adds that into the metadata instead of the
  default [[reagent-viewer]]."
  ([v] (fragment v nil))
  ([v viewer-or-xform]
   (let [viewer (or viewer-or-xform reagent-viewer)]
     (vary-meta v assoc
                :portal.viewer/mafs? true
                :portal.viewer/default :emmy.portal/mafs
                ::clerk/viewer viewer))))

;; ## State Utilities
;;
;; This next section contains functions that allow you to write natural-seeming
;; Clojure code that is in fact generating quoted Reagent fragments for defining
;; `reagent.core/atom` instances and wiring in accesses to the value that will
;; be contained in those atoms once the component is evaluated and running
;; client-side.

(defn get
  "Given some symbol `sym` representing an atom and a key for the value inside the
  atom, returns a client-side fragment of the form `(get @sym k)`.

  If `sym` is a `map?`, acts like `clojure.core/get`.

  If `sym` is anything else, [[get]] treats it as an `IDeref` and
  returns `(clojure.core/get @sym k)`."
  [sym k]
  (cond (symbol? sym) (list 'clojure.core/get
                            (list 'clojure.core/deref sym)
                            k)
        (map? sym)    (get sym k)
        :else         (get @sym k)))

(defn get-in
  "Given some symbol `sym` representing an atom and an accessor path into the
  value inside the atom, returns a client-side fragment of the form `(get-in @sym
  path)`.

  If `sym` is a `map?`, acts like `clojure.core/get-in`.

  If `sym` is anything else, [[get]] treats it as an `IDeref` and
  returns `(clojure.core/get-in @sym path)`."
  [sym path]
  (cond (symbol? sym) (list 'clojure.core/get-in
                            (list 'clojure.core/deref sym)
                            path)
        (map? sym)    (get-in sym path)
        :else         (get-in @sym path)))

(defn with-state
  "This function takes

  - an initial value `init` for a client-side `reagent.core/atom`
  - a function `f` of type `<symbol> => <reagent fragment>`

  And returns a new reagent fragment that allows for stateful, reactive
  interaction with `init` via the `<symbol>`.

  All metadata from the return value of `f` is transferred over to the returned
  form.

  For example:
  ```clojure
  (with-state {:k \"v\"}
    (fn [sym] [:pre (get sym :k)]))

  ;;=> (reagent.core/with-let
  ;;     [G__95940 (reagent.core/atom {:k \"v\"})]
  ;;     [:pre (clojure.core/get @G__95940 :k)])
  ```"
  [init f]
  (let [sym  (gensym)
        body (f sym)]
    (fragment
     (list 'reagent.core/with-let
           [sym (list 'reagent.core/atom init)]
           (vary-meta body dissoc ::clerk/viewer))
     (::clerk/viewer (meta body)))))

(defmacro with-let
  "Macro wrapper around [[with-state]] that allows you to provide the body
  directly, vs providing a function `f` as in [[with-state]].

  ```clojure
  (with-let [sym {:k \"v\"}]
    [:pre (get sym :k)])
  ```

  is equivalent to

  ```clojure
  (with-state {:k \"v\"}
    (fn [sym] [:pre (get sym :k)]))
  ```"
  {:clj-kondo/lint-as 'clojure.core/let}
  [[sym init] & body]
  `(with-state ~init
     (fn [~sym] ~@body)))

;; ### Parameterized Functions
;;
;; This section defines supporting types and the [[with-params]] constructor.
;; This code is used by namespaces like [[emmy.mafs.compile]] to construct a
;; form that compiles a parametric function via Emmy, and then wraps that in an
;; outer function that fetches the parameters out of an atom on each call.

(defrecord ^:no-doc ParamF [f atom params])

(defn ^:no-doc param-f?
  "Returns true if `m` is an instance of [[ParamF]], false otherwise."
  [m]
  (instance? ParamF m))

(defn with-params
  "Takes:

  - A map of the form

  ```clojure
  {:atom <symbol representing a reagent.core/atom>
   :params <sequence of keys from the dereferenced atom>}
  ```

  - a function `f` that takes `(count params)` parameters and returns a new
    function

  and returns an instance of [[ParamF]] that the various viewer plugins will
  know how to interpret, based on where the return value of [[with-params]] is
  being used."
  [{:keys [params atom]} f]
  (->ParamF f atom params))
