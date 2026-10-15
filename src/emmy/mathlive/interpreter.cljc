(ns emmy.mathlive.interpreter
  "Interpreter from [MathJSON](https://cortexjs.io/math-json/), the expression
  format produced by MathLive, to Emmy symbolic expressions."
  (:require [clojure.string :as str]
            [emmy.complex :as c]
            [emmy.numsymb :as sym]
            [emmy.structure :as ss]))

;; ## Symbols and Constants

(def constants
  "Map of MathJSON constant names to the Emmy value each denotes."
  {"ExponentialE" 'E
   "ImaginaryUnit" c/I
   "GoldenRatio" 'phi
   "PositiveInfinity" ##Inf
   "NegativeInfinity" ##-Inf

   "Pi" 'pi "CapitalPi" 'Pi
   "Gamma" 'gamma "CapitalGamma" 'Gamma})

(def f-name->sym
  "Map of MathJSON function names to the Emmy operator symbol each denotes.
  Names absent from this map are applied as literal functions."
  {;; Arithmetic
   "Add" '+
   "Subtract" '-
   "Negate" '-
   "Multiply" '*
   "Divide" '/
   "Rational" '/
   "Power" 'expt
   "Square" 'square
   "Sqrt" 'sqrt
   "Abs" 'abs
   "Floor" 'floor
   "Ceil" 'ceiling

   ;; Exponentials and logarithms
   "Exp" 'exp
   "Ln" 'log

   ;; Trigonometric
   "Sin" 'sin
   "Cos" 'cos
   "Tan" 'tan
   "Cot" 'cot
   "Sec" 'sec
   "Csc" 'csc

   "Arcsin" 'asin
   "Arccos" 'acos
   "Arctan" 'atan
   "Arccot" 'acot
   "Arcsec" 'asec
   "Arccsc" 'acsc

   ;; Hyperbolic
   "Sinh" 'sinh
   "Cosh" 'cosh
   "Tanh" 'tanh
   "Coth" 'coth
   "Sech" 'sech
   "Csch" 'csch

   "Arsinh" 'asinh
   "Arcosh" 'acosh
   "Artanh" 'atanh})

(def inverse-fn->sym
  "Map of MathJSON function names to the Emmy symbol of their inverse, used to
  interpret `[\"InverseFunction\" name]` heads."
  {"Sin" 'asin "Cos" 'acos "Tan" 'atan
   "Cot" 'acot "Sec" 'asec "Csc" 'acsc
   "Sinh" 'asinh "Cosh" 'acosh "Tanh" 'atanh
   "Coth" 'acoth "Sech" 'asech "Csch" 'acsch})

(defn- apply-op
  "Applies the Emmy symbolic operator named by `f` to `args`, or builds the
  literal application `(f ...args)` when `f` names no symbolic operator."
  [f args]
  (if-let [op (and (symbol? f) (sym/symbolic-operator f))]
    (apply op args)
    (cons f args)))

(defn- parse-number
  "Parses the MathJSON number string `s` into a number, or into a symbol when
  `s` is not numeric."
  [s]
  (case s
    "NaN" ##NaN
    ("Infinity" "+Infinity") ##Inf
    "-Infinity" ##-Inf
    (or (parse-long s)
        (parse-double s)
        (symbol s))))

(declare process)

;; ## Strings

(defn- process-str
  "Interprets a bare MathJSON string: a `'quoted'` string literal, a constant,
  a known function name or a symbol."
  [s]
  (cond (and (> (count s) 1)
             (str/starts-with? s "'")
             (str/ends-with? s "'"))
        (subs s 1 (dec (count s)))

        (contains? constants s) (constants s)
        (contains? f-name->sym s) (f-name->sym s)
        :else (symbol s)))

;; ## Maps
;;
;; MathJSON's object forms carry metadata alongside the `num`, `sym`, `str` or
;; `fn` payload. Keys may be strings or keywords, depending on how the JSON was
;; parsed.

(defn- process-map
  "Interprets a MathJSON object form; unrecognized maps are returned as-is."
  [m]
  (let [k (fn [s] (or (get m s) (get m (keyword s))))]
    (if-some [n (k "num")]
      (if (string? n) (parse-number n) n)
      (if-some [s (k "sym")]
        (process-str s)
        (if-some [s (k "str")]
          s
          (if-some [f (k "fn")]
            (process f)
            m))))))

;; ## Function Application

(defn- log-base
  "Returns the symbolic logarithm of `x` in base `b`."
  [x b]
  (apply-op '/ [(apply-op 'log [x])
                (apply-op 'log [b])]))

(defn- process-fn
  "Interprets the application of the MathJSON function named by the string
  `head` to the unprocessed `args`."
  [head args]
  (let [[a b] args]
    (case head
      "List"     (ss/up* (map process args))
      "Sequence" (case (count args)
                   0 nil
                   1 (process a)
                   (ss/up* (map process args)))
      "Delimiter" (process a)

      ;; Produced for invalid input.
      "Error" '_

      "InverseFunction" (or (inverse-fn->sym a)
                            (list 'InverseFunction (process a)))

      "Equal" (cons '= (map process args))
      "Half"  (apply-op '/ [(process a) 2])
      "Root"  (apply-op 'expt [(process a)
                               (apply-op '/ [1 (process b)])])
      "Log"   (log-base (process a) (if (some? b) (process b) 10))
      "Lg"    (log-base (process a) 10)
      "Lb"    (log-base (process a) 2)

      "Power" (if (= a "ExponentialE")
                (apply-op 'exp [(process b)])
                (apply-op 'expt (map process args)))

      (apply-op (or (f-name->sym head) (process-str head))
                (map process args)))))

(defn- process-vector
  "Interprets a MathJSON function form `[head & args]`."
  [[head & args :as v]]
  (cond (string? head) (process-fn head args)
        (empty? v)     v
        :else (apply-op (process head) (map process args))))

;; ## API

(defn process
  "Converts the MathJSON expression `expr`, given as Clojure data, into an Emmy
  symbolic expression.

  - numbers pass through; `{\"num\" s}` forms are parsed into numbers.
  - strings are interpreted as `'quoted'` string literals, [[constants]], or
    symbols.
  - `[head & args]` vectors become applications of the Emmy operator named
    by [[f-name->sym]], or literal function applications `(f ...args)` for
    unknown heads. `List` and multi-element `Sequence` forms become `up`
    structures.

  Any other value is returned unchanged."
  [expr]
  (cond (number? expr) expr
        (string? expr) (process-str expr)
        (map? expr)    (process-map expr)
        (vector? expr) (process-vector expr)
        :else expr))
