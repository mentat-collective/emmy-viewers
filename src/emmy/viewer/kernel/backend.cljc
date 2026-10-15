(ns emmy.viewer.kernel.backend
  "The compile-side Kernel contract: how a computational backend turns an Emmy
  function into a form that evaluates, in the browser, to a kernel.

  A backend is any value satisfying [[KernelBackend]], a protocol of one method.
  Backends are an open set: [[register-backend!]] names one with a keyword, and
  `emmy.viewer.compile/*backend*` accepts either that keyword or the value
  itself, so a new backend, or a configured instance of an existing one, never
  needs an edit to the code that calls `emmy.viewer.compile/compiled-fn`.

  Every backend's kernel honours the same runtime contract (see the cljs
  namespace `emmy.viewer.kernel`), so viewers cannot tell backends apart.")

(defprotocol KernelBackend
  (kernel-form [backend f params initial-state opts]
    "A form that evaluates, in the browser, to the kernel."))

(defonce ^:private backends (atom {}))

(defn register-backend!
  "Register a KernelBackend under `k`. Passing nil removes a registration."
  [k backend]
  (when (and (some? backend) (not (satisfies? KernelBackend backend)))
    (throw (ex-info "Expected a KernelBackend" {:backend backend :key k})))
  (swap! backends (if (nil? backend) dissoc assoc) k backend)
  backend)

(defn- unknown! [x]
  (throw (ex-info (str "Unknown compile backend " (pr-str x)
                       "; known: " (pr-str (sort (keys @backends))))
                  {:backend x})))

#?(:clj
   (defn- load-raster!
     "Loads emmy.viewer.raster, which registers :raster when its namespace loads.
     A missing raster surfaces as a compiler exception wrapping a
     FileNotFoundException; that becomes an error naming the `:raster` alias."
     []
     (try
       (require 'emmy.viewer.raster)
       (catch Exception e
         (if (some #(instance? java.io.FileNotFoundException %)
                   (take-while some? (iterate ex-cause e)))
           (throw (ex-info "Compile backend :raster needs raster on the classpath (the :raster alias)"
                           {:backend :raster} e))
           (throw e))))))

(defn resolve-backend
  "Resolve a registered keyword, or return a KernelBackend value unchanged.
  The :raster keyword loads its optional JVM implementation on first use."
  [k-or-backend]
  (cond
    (keyword? k-or-backend)
    (do #?(:clj (when (and (= k-or-backend :raster)
                           (not (contains? @backends :raster)))
                  (load-raster!)))
        (or (get @backends k-or-backend)
            (unknown! k-or-backend)))

    (satisfies? KernelBackend k-or-backend) k-or-backend
    :else (unknown! k-or-backend)))