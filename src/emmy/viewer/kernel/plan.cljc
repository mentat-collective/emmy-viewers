(ns ^:no-doc emmy.viewer.kernel.plan
  "Pure kernel plan: the algebra, by Emmy.

  A function is applied to symbolic arguments exactly as
  [[emmy.expression.compile/compile-state-fn]] would apply it, simplified, and
  split into one scalar expression per output component. The result, a plan, is
  plain data; [[emmy.viewer.raster.lower]] and [[emmy.viewer.raster.glue]] read
  it, and [[emmy.viewer.raster.schema/Plan]] states its contract."
  (:require [emmy.env :as e]
            [emmy.structure :as s]))

(def conventions
  "The calling conventions of Emmy's compiler, which this backend reproduces."
  [:native :structure :primitive])

(defn- tree?
  "True for the containers whose leaves are separate components: Emmy
  structures and Clojure vectors."
  [x]
  (or (s/structure? x) (vector? x)))

(defn leaves
  "The scalar leaves of `x` in depth-first order, the order Emmy uses to flatten a
  state for the `:primitive` calling convention."
  [x]
  (if (tree? x)
    (into [] (mapcat leaves) x)
    [x]))

(defn shape
  "The tree of `x` with each leaf replaced by its index in [[leaves]], or `nil`
  when `x` is itself a scalar."
  [x]
  (when (tree? x)
    (let [counter (volatile! -1)
          walk    (fn walk [y]
                    (if (tree? y)
                      (mapv walk y)
                      (vswap! counter inc)))]
      (walk x))))

(defn- symbolize
  "`x` with every leaf replaced by a fresh symbol `<prefix><i>`, in [[leaves]]
  order. Vectors stay vectors and Emmy structures stay structures, so `f` sees
  the same shape it would see from Emmy's compiler."
  [x prefix]
  (let [counter (volatile! -1)
        fresh   #(symbol (str prefix (vswap! counter inc)))
        walk    (fn walk [y]
                  (cond (vector? y)       (mapv walk y)
                        (s/structure? y)  (s/mapr (fn [_] (fresh)) y)
                        :else             (fresh)))]
    (walk x)))

(defn plan
  "Applies `f` symbolically the way [[emmy.expression.compile/compile-state-fn]]
  does with the same `params`, `initial-state` and `opts`, and returns:

  - `:convention`: one of [[conventions]]
  - `:state`: the state symbols, flattened
  - `:state-shape`: see [[shape]] for `initial-state`; `nil` for a scalar state
  - `:params`: the parameter symbols, empty when the parameters are not generic
  - `:outputs`: one frozen, simplified expression per output component
  - `:shape`: see [[shape]]; `nil` for a scalar output"
  [f params initial-state {:keys [calling-convention generic-params? simplify?]
                           :or   {calling-convention :structure
                                  generic-params?    (boolean params)
                                  simplify?          true}}]
  (let [state      (symbolize initial-state "s")
        param-syms (when (and params generic-params?)
                     (mapv #(symbol (str "p" %)) (range (count params))))
        g          (cond (false? params)  f
                         generic-params?  (apply f param-syms)
                         :else            (apply f params))
        out        (if (= calling-convention :native)
                     (apply g state)
                     (g state))
        out        (if simplify? (e/simplify out) out)]
    {:convention calling-convention
     :state      (leaves state)
     :state-shape (shape initial-state)
     :params     (or param-syms [])
     :outputs    (mapv e/freeze (leaves out))
     :shape      (shape out)}))
