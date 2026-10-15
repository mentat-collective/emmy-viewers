(ns emmy.mathbox.marching-cubes
  "Pure marching-cubes isosurface extraction.

  [[isosurface]] samples a scalar function `f(x, y, z)` on a regular grid and
  returns a triangle mesh approximating the level set `f(x, y, z) = level`. The
  namespace has no browser dependencies, so it runs (and is tested) on the JVM
  as well as in ClojureScript; [[emmy.mathbox.components.plot/ImplicitSurface]]
  renders its output with MathBox."
  (:require [emmy.mathbox.marching-cubes.triangle-table :as tt]))

(def corner-offsets
  "Offsets `[di dj dk]` of the eight corners of a grid cell, in the corner order
  used by [[emmy.mathbox.marching-cubes.triangle-table/triangle-table]]: corners
  0-3 walk the bottom face, corners 4-7 the top face directly above them."
  [[0 0 0] [1 0 0] [1 1 0] [0 1 0]
   [0 0 1] [1 0 1] [1 1 1] [0 1 1]])

(def edge-corners
  "The twelve cell edges as pairs of corner indices into [[corner-offsets]],
  in the edge order used by the triangle table."
  [[0 1] [1 2] [2 3] [3 0]
   [4 5] [5 6] [6 7] [7 4]
   [0 4] [1 5] [2 6] [3 7]])

(def ^:private edge-axis
  "For each cell edge, a pair of the offset of its lower corner and the axis
  (0, 1 or 2) it runs along. Every edge is parallel to exactly one axis."
  (mapv (fn [[a b]]
          (let [oa (corner-offsets a)
                ob (corner-offsets b)]
            [(mapv min oa ob)
             (first (keep-indexed (fn [i [p q]] (when (not= p q) i))
                                  (map vector oa ob)))]))
        edge-corners))

(defn cube-index
  "Returns the triangle-table index (`0..255`) of a cell whose eight corner
  values, in [[corner-offsets]] order, are `values`. Bit `c` is set when corner
  `c` lies strictly below `level`."
  [values level]
  (reduce-kv (fn [acc c v]
               (if (< v level)
                 (bit-or acc (bit-shift-left 1 c))
                 acc))
             0
             (vec values)))

(defn ^:no-doc lerp-point
  "Returns the point between `p` and `q` where the linear interpolant of the
  values `vp` (at `p`) and `vq` (at `q`) crosses `level`. Falls back to the
  midpoint when `vp` and `vq` are equal."
  [p q vp vq level]
  (let [dv (- vq vp)
        t  (if (zero? dv) 0.5 (/ (- level vp) dv))]
    (mapv (fn [a b] (+ a (* t (- b a)))) p q)))

(defn- samples->counts [samples]
  (let [counts (if (number? samples) [samples samples samples] (vec samples))]
    (when-not (and (= 3 (count counts))
                   (every? #(and (integer? %) (>= % 2)) counts))
      (throw (ex-info "`:samples` must be an integer >= 2 or a vector of three of them."
                      {:samples samples})))
    counts))

(defn isosurface
  "Extracts the level set `f(x, y, z) = level` with marching cubes.

  `f` is a function of three numbers `(f x y z)` returning a number. It is
  sampled on a regular grid of `nx * ny * nz` points that spans the closed box
  given by the ranges, then each of the `(nx - 1) * (ny - 1) * (nz - 1)` cells is
  triangulated with the classic 256-case table.

  Options:

  - `:level`: the value of the level set. Defaults to 0.
  - `:x-range`, `:y-range`, `:z-range`: `[min max]` intervals of the box.
    Each defaults to `[-1 1]`.
  - `:samples`: grid points per axis, either one integer or `[nx ny nz]`; each
    count must be at least 2. Defaults to 32.

  Returns a map with

  - `:vertices`: vector of `[x y z]` points, each on a grid edge whose
    endpoints straddle `level`, placed by linear interpolation of `f`;
  - `:triangles`: vector of `[i j k]` index triples into `:vertices`.

  Contract: vertices are shared, one per straddling grid edge, so triangles
  that meet along an edge reference the same indices. Where the level set lies
  strictly inside the box, the mesh is closed: every mesh edge borders exactly
  two triangles. A grid with every sample on one side of `level` yields an
  empty mesh. The function is evaluated exactly once per grid point."
  ([f] (isosurface f {}))
  ([f {:keys [level x-range y-range z-range samples]
       :or {level   0
            x-range [-1 1]
            y-range [-1 1]
            z-range [-1 1]
            samples 32}}]
   (let [[nx ny nz] (samples->counts samples)
         axis-vals  (fn [[lo hi] n]
                      (let [lo   (double lo)
                            step (/ (- (double hi) lo) (dec n))]
                        (mapv #(+ lo (* % step)) (range n))))
         xs         (axis-vals x-range nx)
         ys         (axis-vals y-range ny)
         zs         (axis-vals z-range nz)
         idx        (fn [i j k] (+ i (* nx (+ j (* ny k)))))
         ;; x varies fastest, matching `idx`.
         values     (into [] (for [k (range nz) j (range ny) i (range nx)]
                               (f (xs i) (ys j) (zs k))))
         point      (fn [i j k] [(xs i) (ys j) (zs k)])
         ;; Vertex for the grid edge leaving point (i j k) along `axis`;
         ;; returns [vertex-index new-state].
         vertex     (fn [{:keys [ids vertices] :as state} i j k axis]
                      (let [key (+ (* 3 (idx i j k)) axis)]
                        (if-let [id (get ids key)]
                          [id state]
                          (let [[i' j' k'] (update [i j k] axis inc)
                                v (lerp-point (point i j k) (point i' j' k')
                                              (values (idx i j k))
                                              (values (idx i' j' k'))
                                              level)
                                id (count vertices)]
                            [id (-> state
                                    (assoc-in [:ids key] id)
                                    (update :vertices conj v))]))))
         cell       (fn [state i j k]
                      (let [vals (mapv (fn [[di dj dk]]
                                         (values (idx (+ i di) (+ j dj) (+ k dk))))
                                       corner-offsets)
                            tris (tt/triangle-table (cube-index vals level))]
                        (reduce
                         (fn [state tri]
                           (let [[ids state]
                                 (reduce (fn [[acc state] e]
                                           (let [[[di dj dk] axis] (edge-axis e)
                                                 [id state] (vertex state (+ i di) (+ j dj) (+ k dk) axis)]
                                             [(conj acc id) state]))
                                         [[] state]
                                         tri)]
                             (update state :triangles conj ids)))
                         state
                         tris)))
         result     (reduce (fn [state [i j k]] (cell state i j k))
                            {:ids {} :vertices [] :triangles []}
                            (for [k (range (dec nz))
                                  j (range (dec ny))
                                  i (range (dec nx))]
                              [i j k]))]
     (select-keys result [:vertices :triangles]))))

(defn triangle-coords
  "Given the output of [[isosurface]], returns a vector of triangles, each a
  vector of three `[x y z]` points. This is the shape MathBox's `Array` data
  primitive expects with `:items 3`."
  [{:keys [vertices triangles]}]
  (mapv (fn [tri] (mapv vertices tri)) triangles))
