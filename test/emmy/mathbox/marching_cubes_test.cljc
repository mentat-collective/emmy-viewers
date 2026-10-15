(ns emmy.mathbox.marching-cubes-test
  (:require [clojure.test :refer [deftest is testing]]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [emmy.mathbox.marching-cubes :as mc]
            [emmy.mathbox.marching-cubes.triangle-table :as tt]))

(defn- sq [x] (* x x))

(defn- abs* [x] (if (neg? x) (- x) x))

(defn- sphere-fn [[cx cy cz]]
  (fn [x y z]
    (+ (sq (- x cx)) (sq (- y cy)) (sq (- z cz)))))

(defn- dist [[x y z] [cx cy cz]]
  (Math/sqrt (+ (sq (- x cx)) (sq (- y cy)) (sq (- z cz)))))

(defn- mesh-edges
  "Map of undirected mesh edge => number of triangles that border it."
  [triangles]
  (frequencies
   (for [[a b c] triangles
         [p q] [[a b] [b c] [c a]]]
     (if (< p q) [p q] [q p]))))

(defn- closed? [{:keys [triangles]}]
  (boolean
   (and (seq triangles)
        (every? #(= 2 %) (vals (mesh-edges triangles))))))

(defn- euler-characteristic [{:keys [vertices triangles]}]
  (+ (- (count vertices) (count (mesh-edges triangles)))
     (count triangles)))

(defn- straddling-edge-count
  "Independent count of grid edges whose endpoint values straddle `level`
  (one strictly below, the other not), over an `n`-per-axis grid on [-1, 1]^3."
  [f level n]
  (let [v    (fn [i] (+ -1.0 (* i (/ 2.0 (dec n)))))
        val  (fn [i j k] (f (v i) (v j) (v k)))
        cut? (fn [a b] (not= (< a level) (< b level)))]
    (count
     (for [i (range n) j (range n) k (range n)
           [di dj dk] [[1 0 0] [0 1 0] [0 0 1]]
           :let [i' (+ i di) j' (+ j dj) k' (+ k dk)]
           :when (and (< i' n) (< j' n) (< k' n)
                      (cut? (val i j k) (val i' j' k')))]
       true))))

(deftest triangle-table-test
  (is (= 256 (count tt/triangle-table)))
  (is (every? #(<= 0 % 11) (flatten tt/triangle-table))
      "every entry names one of the twelve cell edges")
  (is (= [] (tt/triangle-table 0) (tt/triangle-table 255))
      "a cell entirely on one side of the level has no triangles")
  (is (every? (fn [i]
                (let [below?   (fn [c] (bit-test i c))
                      crossing (set (keep-indexed
                                     (fn [e [a b]]
                                       (when (not= (below? a) (below? b)) e))
                                     mc/edge-corners))]
                  (= crossing (set (flatten (tt/triangle-table i))))))
              (range 256))
      "each case triangulates exactly the edges whose corners differ in sign"))

(deftest cube-index-test
  (is (= 0 (mc/cube-index (repeat 8 1.0) 0)))
  (is (= 255 (mc/cube-index (repeat 8 -1.0) 0)))
  (is (= 1 (mc/cube-index [-1 1 1 1 1 1 1 1] 0)))
  (is (= 128 (mc/cube-index [1 1 1 1 1 1 1 -1] 0)))
  (is (= 0 (mc/cube-index (repeat 8 0) 0))
      "values equal to the level count as above it"))

(deftest edge-corners-test
  (doseq [[a b] mc/edge-corners]
    (is (= 1 (reduce + (map #(abs* (- %1 %2))
                            (mc/corner-offsets a)
                            (mc/corner-offsets b))))
        "each edge joins two corners that differ along exactly one axis")))

(deftest sphere-test
  (let [r    0.75
        n    20
        h    (/ 2.0 (dec n))
        f    (sphere-fn [0 0 0])
        mesh (mc/isosurface f {:level (sq r) :samples n})]
    (testing "one shared vertex per straddling grid edge"
      (is (= (straddling-edge-count f (sq r) n)
             (count (:vertices mesh)))))

    (testing "the mesh is a closed surface of genus 0"
      (is (closed? mesh))
      (is (= 2 (euler-characteristic mesh))))

    (testing "every vertex lies on the level set within the grid spacing"
      (is (every? #(< (abs* (- (dist % [0 0 0]) r)) h)
                  (:vertices mesh))))

    (testing "triangles index valid, distinct vertices"
      (let [nv (count (:vertices mesh))]
        (is (every? (fn [tri]
                      (and (= 3 (count (distinct tri)))
                           (every? #(< -1 % nv) tri)))
                    (:triangles mesh)))))

    (testing "triangle-coords resolves indices to points"
      (let [coords (mc/triangle-coords mesh)]
        (is (= (count (:triangles mesh)) (count coords)))
        (is (= (mapv (:vertices mesh) (first (:triangles mesh)))
               (first coords)))))))

(deftest degenerate-grids-test
  (testing "a grid entirely above the level yields an empty mesh"
    (is (= {:vertices [] :triangles []}
           (mc/isosurface (fn [_ _ _] 1.0) {:samples 4}))))

  (testing "a grid entirely below the level yields an empty mesh"
    (is (= {:vertices [] :triangles []}
           (mc/isosurface (fn [_ _ _] -1.0) {:samples 4}))))

  (testing "a level set outside the box yields an empty mesh"
    (is (= {:vertices [] :triangles []}
           (mc/isosurface (sphere-fn [0 0 0]) {:level 10 :samples 8}))))

  (testing "the smallest grid is a single cell"
    (let [mesh (mc/isosurface (fn [x _ _] x) {:samples 2 :level 0.25})]
      (is (= 4 (count (:vertices mesh))))
      (is (= 2 (count (:triangles mesh))))
      (is (every? #(< (abs* (- (first %) 0.25)) 1e-12)
                  (:vertices mesh))
          "a linear field is interpolated exactly"))))

(deftest options-test
  (testing "f is evaluated exactly once per grid point"
    (let [calls (atom 0)]
      (mc/isosurface (fn [x y z] (swap! calls inc) (+ x y z))
                     {:samples [3 4 5]})
      (is (= (* 3 4 5) @calls))))

  (testing "ranges place the surface"
    (let [mesh (mc/isosurface (fn [x _ _] x)
                              {:x-range [2 4] :y-range [0 1] :z-range [0 1]
                               :level 3 :samples 5})]
      (is (seq (:vertices mesh)))
      (is (every? #(< (abs* (- (first %) 3.0)) 1e-12) (:vertices mesh)))))

  (testing "invalid sample counts are rejected"
    (is (thrown? #?(:clj Exception :cljs js/Error)
                 (mc/isosurface (fn [x _ _] x) {:samples 1})))
    (is (thrown? #?(:clj Exception :cljs js/Error)
                 (mc/isosurface (fn [x _ _] x) {:samples [4 4]})))))

(defn- gen-double [lo hi]
  (gen/double* {:min lo :max hi :NaN? false :infinite? false}))

(def ^:private gen-sphere
  "A sphere comfortably inside [-1, 1]^3, at least two grid cells in radius."
  (gen/let [r  (gen-double 0.35 0.6)
            cs (gen/vector (gen-double -0.3 0.3) 3)]
    {:r r :center cs}))

(defspec sphere-isosurface-is-closed-and-on-the-level-set 25
  (prop/for-all [{:keys [r center]} gen-sphere
                 n (gen/choose 12 18)]
    (let [h    (/ 2.0 (dec n))
          mesh (mc/isosurface (sphere-fn center) {:level (sq r) :samples n})]
      (and (closed? mesh)
           (= 2 (euler-characteristic mesh))
           (every? #(< (abs* (- (dist % center) r)) h)
                   (:vertices mesh))))))

(defspec plane-vertices-are-exact 25
  (prop/for-all [[a b c] (gen/vector (gen-double 0.1 1.0) 3)
                 t       (gen-double -0.9 0.9)]
    ;; Over [-1, 1]^3 the plane's values span [-(a+b+c), a+b+c], so a level
    ;; inside that span always crosses the box.
    (let [level (* t (+ a b c))
          f    (fn [x y z] (+ (* a x) (* b y) (* c z)))
          mesh (mc/isosurface f {:level level :samples 6})]
      (boolean
       (and (seq (:triangles mesh))
            (every? (fn [[x y z]] (< (abs* (- (f x y z) level)) 1e-9))
                    (:vertices mesh)))))))
