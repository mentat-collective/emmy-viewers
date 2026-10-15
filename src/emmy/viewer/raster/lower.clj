(ns ^:no-doc emmy.viewer.raster.lower
  "Pure layer of the raster backend, second stage: a plan's expressions lowered
  to the vocabulary `raster.core/deftm` compiles, one scalar kernel source per
  output component. Kernels take `Double` arguments, state first and then
  parameters, and return a `Double`.

  Nothing here evaluates a form; [[emmy.viewer.raster]] defines and compiles the
  kernels."
  (:require [clojure.walk :as walk]
            [emmy.expression.cse :as cse]))

(def ^:private raster-fns
  "Emmy operators raster provides directly. `sqrt` and `abs` are JVM intrinsics
  that raster lowers to `f64.sqrt` and `f64.abs`."
  '{sin  raster.math/sin  cos  raster.math/cos  tan  raster.math/tan
    asin raster.math/asin acos raster.math/acos atan raster.math/atan
    sinh raster.math/sinh cosh raster.math/cosh tanh raster.math/tanh
    exp  raster.math/exp  log  raster.math/log
    sqrt Math/sqrt        abs  Math/abs})

(defn- binary
  "A variadic application as nested binary ones; raster's typed dispatch
  resolves `+` and `*` one pair at a time."
  [op args]
  (reduce (fn [acc a] (list op acc a)) args))

(defn- power
  "`base` to the literal `k`. An integer `k` becomes multiplication, since
  raster's wasm `pow` is `exp(k log x)` and undefined for a negative base."
  [base k]
  (cond
    (and (integer? k) (zero? k)) 1.0
    (and (integer? k) (pos? k))  (binary '* (repeat k base))
    (integer? k)                 (list '/ 1.0 (power base (- k)))
    :else                        (list 'raster.numeric/pow base (double k))))

(defn- exponent
  "A literal exponent as an integer when it is integral, else as is."
  [k]
  (if (and (not (integer? k)) (== k (Math/rint (double k))))
    (long k)
    k))

(defn- unsupported!
  "Refuses `x`. emmy-viewers signals build-time errors by throwing, so this
  backend does too; the message names the form and the way out."
  [x]
  (throw (ex-info (str "The raster backend cannot compile " (pr-str x)
                       "; use the :js backend for this function.")
                  {:form x})))

(defn- lower-node
  "Lowers one node whose arguments are already lowered."
  [args x]
  (cond
    (double? x)  x
    (number? x)  (double x)
    (symbol? x)  (if (args x) x (unsupported! x))
    (seq? x)
    (let [[op & xs] x]
      (case op
        (+ *)  (if (next xs) (binary op xs) (first xs))
        -      (if (next xs) (binary '- xs) (list '- 0.0 (first xs)))
        /      (if (next xs) (binary '/ xs) (list '/ 1.0 (first xs)))
        square (power (first xs) 2)
        cube   (power (first xs) 3)
        ;; Emmy's two-argument atan is atan2, with the same argument order.
        atan   (if (next xs)
                 (list 'raster.math/atan2 (first xs) (second xs))
                 (list 'raster.math/atan (first xs)))
        cot    (list '/ 1.0 (list 'raster.math/tan (first xs)))
        sec    (list '/ 1.0 (list 'raster.math/cos (first xs)))
        csc    (list '/ 1.0 (list 'raster.math/sin (first xs)))
        (if-let [f (and (not (next xs)) (raster-fns op))]
          (list f (first xs))
          (unsupported! x))))
    :else (unsupported! x)))

(defn lower
  "Lowers a frozen Emmy expression over the symbols in `args` to the vocabulary
  `raster.core/deftm` compiles: every literal a double, `+` and `*` binary,
  integer powers as products. Throws for an operator or a free symbol raster
  cannot compile."
  [args expr]
  (let [args (set args)]
    (letfn [(go [x]
              (if (seq? x)
                (let [[op & xs] x]
                  (if (= 'expt op)
                    ;; A literal exponent reaches `power` unlowered, so an
                    ;; integer stays an integer.
                    (let [[b k] xs]
                      (if (number? k)
                        (power (go b) (exponent k))
                        (list 'raster.numeric/pow (go b) (go k))))
                    (lower-node args (cons op (map go xs)))))
                (lower-node args x)))]
      (go expr))))

(defn- constant?
  "True for a number, or an application whose arguments are all constant."
  [x]
  (or (number? x)
      (and (seq? x) (every? constant? (rest x)))))

(defn shared
  "`outputs` with the subexpressions they share bound once, by Emmy's CSE pass
  over all outputs together: `{:bindings [[sym expr] ...] :outputs [expr ...]}`.
  Constant bindings are substituted back, so a literal exponent stays a
  literal (see `power`)."
  [outputs]
  (cse/extract-common-subexpressions
   (list* 'clojure.core/doto 'out
          (map-indexed (fn [i o] (list 'clojure.core/aset i o)) outputs))
   (fn [[_doto _out & asets] pairs]
     (let [consts (into {} (filter (comp constant? second)) pairs)
           subst  #(walk/postwalk-replace consts %)]
       {:bindings (vec (for [[sym v] pairs :when (not (consts sym))]
                         [sym (subst v)]))
        :outputs  (mapv (fn [[_aset _i e]] (subst e)) asets)}))
   {}))

(defn kernel-form
  "The `raster.core/deftm` source of `plan`'s kernel, named `kname`:

      (kname xs out ps n) -> n

  For each of `n` points it reads the point's state from `xs` (row-major, one
  row per point), computes every output once, sharing common subexpressions,
  and writes them to `out` (one row per point). Parameters are read from `ps`
  once, before the loop. `xs`, `out` and `ps` are f64 arrays; in wasm they are
  byte offsets into the module's memory.

  Index arithmetic stays `Long` and every value `Double`: raster's wasm backend
  has no `Long * Double`."
  [kname {:keys [state params outputs]}]
  (let [{:keys [bindings] outs :outputs} (shared outputs)
        d       (count state)
        m       (count outs)
        known   (into (set state) params)
        [lowered _] (reduce (fn [[acc known] [sym v]]
                              [(conj acc [sym (lower known v)]) (conj known sym)])
                            [[] known]
                            bindings)
        known   (into known (map first bindings))]
    (list 'raster.core/deftm kname
          '[xs :- (Array double) out :- (Array double)
            ps :- (Array double) n :- Long]
          :- 'Long
          (list 'let (into [] (mapcat (fn [j p] [p (list 'aget 'ps j)]) (range) params))
                (list 'loop '[i 0]
                      (list 'if '(< i n)
                            (concat
                             (list 'let (into ['row (list '* 'i d) 'col (list '* 'i m)]
                                              (concat
                                               (mapcat (fn [j s] [s (list 'aget 'xs (list '+ 'row j))])
                                                       (range) state)
                                               (mapcat identity lowered))))
                             (map-indexed (fn [j o] (list 'aset 'out (list '+ 'col j) (lower known o)))
                                          outs)
                             ['(recur (+ i 1))])
                            'n))))))
