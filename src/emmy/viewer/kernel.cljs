(ns emmy.viewer.kernel
  "The browser side of the Kernel contract: the only API viewers use to talk to a
  compiled function.

  Every kernel, whichever backend compiled it, is a JS function callable in
  Emmy's calling convention that also carries:

  - `batch(xs, n, ps, out)`: evaluates `n` points (their flattened states,
    row-major in `xs`) and returns the outputs, row-major, in a Float64Array;
  - `ready()`: whether the kernel can evaluate yet (an asynchronously compiled
    module is not ready at first);
  - `dims`: `{state, outputs, params}`.

  Viewers call these functions instead of the properties, so a backend can
  change how it meets the contract without any viewer changing.")

(defn kernel?
  "True when f is callable and implements the batch kernel contract."
  [f]
  (and (fn? f) (fn? (.-batch ^js f))))

(defn ready?
  "True when the kernel is ready to evaluate (including asynchronous backends)."
  [k]
  ((.-ready ^js k)))

(defn dims
  "Return the kernel dimensions as {:state :outputs :params}."
  [k]
  (let [d (.-dims ^js k)]
    {:state (.-state ^js d)
     :outputs (.-outputs ^js d)
     :params (.-params ^js d)}))

(defn batch!
  "Evaluate n rows from xs with parameters ps into out; nil out lets the kernel allocate. Returns the output buffer."
  [k xs n ps out]
  ((.-batch ^js k) xs n ps out))

(defn grid-points
  "Return flattened two-coordinate kernel inputs in MathBox Area's row-major order.
  With no centering or padding, each axis includes both endpoints; a singleton
  axis samples its lower endpoint."
  [[a b] [c d] w h point-fn]
  (let [xs (js/Float64Array. (* 2 w h))
        dx (/ (- b a) (max 1 (dec w)))
        dy (/ (- d c) (max 1 (dec h)))]
    (dotimes [j h]
      (dotimes [i w]
        (let [[u v] (point-fn (+ a (* i dx)) (+ c (* j dy)))
              idx (* 2 (+ i (* j w)))]
          (aset xs idx u)
          (aset xs (inc idx) v))))
    xs))

(defn batched-area-expr
  "Adapt a scalar-output kernel to MathBox Area's (emit x y i j t) traversal.
  MathBox starts each update at (0,0), then visits each row in i-major order.
  Sample one complete grid per update when ready; otherwise use the per-point
  callable kernel until the next update."
  [k ps {:keys [x-range y-range width height input emit]}]
  (let [xs (grid-points x-range y-range width height input)
        n (* width height)
        out (js/Float64Array. n)
        values (volatile! out)
        batched? (volatile! false)]
    (fn [emit-point x y i j _time]
      (when (and (zero? i) (zero? j))
        (vreset! batched? (ready? k))
        (when @batched?
          (vreset! values (batch! k xs n ps out))))
      (emit emit-point x y
            (if @batched?
              (aget @values (+ i (* j width)))
              (k (input x y) ps))))))

(defn- forward-contract!
  "Gives `g`, a per-point function derived from kernel `k` with parameters `ps`
  fixed, the rest of `k`'s contract. The property names are those JS reads, so
  the writes carry ^js and survive advanced compilation."
  [^js g k ps]
  (when (kernel? k)
    (set! (.-batch g) (fn [xs n _ignored out] (batch! k xs n ps out)))
    (set! (.-ready g) (fn [] (ready? k)))
    (set! (.-dims g) (.-dims ^js k)))
  g)

(defn bind
  "Fix ps in k. A kernel retains its batch, ready and dimensions contract; a plain function stays plain."
  [k ps]
  (forward-contract! (fn [state] (k state ps)) k ps))

(defn bind-1d
  "Fix ps in k and accept a scalar x as a one-element state. Preserve the kernel's batch contract."
  [k ps]
  (forward-contract! (fn [x] (k [x] ps)) k ps))

(defn area-expr
  "A MathBox Area expr for `f`, a function of a two-coordinate input `[a b]`
  whose value `place` puts into 3D, as `(place emit a b v)`.

  A kernel with both ranges known samples its whole grid with one batch call
  per update (see [[batched-area-expr]]); anything else is called once per
  sample, with `in` (a two-element JS array) reused as its input."
  [f {:keys [x-range y-range width height place in]}]
  (if (and (kernel? f) x-range y-range)
    (batched-area-expr f nil {:x-range x-range :y-range y-range
                              :width (or width 64) :height (or height 64)
                              :input vector :emit place})
    (fn [emit a b _i _j _time]
      (aset in 0 a)
      (aset in 1 b)
      (place emit a b (f in)))))
