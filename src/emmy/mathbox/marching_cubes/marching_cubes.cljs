(ns emmy.mathbox.marching-cubes.marching-cubes
  (:require [emmy.mathbox.marching-cubes.triangle-table :as tt
             ]))

(defn CubeIndex
  "Returns index into 256 value Triangle Lookup Table"
  [vertex_vector rhs]

  ;; TODO double check the index implementation.
  ;; compares vertex position to rhs of surface function and
  ;; returns the 8 bit number associated with that edge
  [(reduce + (map-indexed
              (fn [item index]
                (* (if (> item rhs) 1 0)
                   (Math/pow 2 index))) vertex_vector))])

(defn interp
  [x y a b c]
  (let [t (/ (- c a) (- b a))]
    (+ (* x (- 1 t)) (* y t))))

(defn IsosurfaceEdgePoints
  [x y z xStep yStep zStep v1 v2 v4 v8 v16 v32 v64 v128 lhs rhs index]
 ;;https://github.com/ChristopherChudzicki/math3d-react/blob/e352d15d275fc2e060441ecf11574e2fdec3211b/client/src/utils/marchingCubes/index.js#L54
  (let [xInc (+ x xStep)
        yInc (+ y yStep)
        zInc (+ z zStep)]
    (case index
      0 [(interp x xInc v1 v2 rhs) y z]
      1 [xInc y (interp z, zInc v2 v4 rhs)]
      2 [(interp x xInc v4 v8 rhs) y zInc]
      3 [x  y  (interp z zInc v1 v8 rhs)]
      4 [(interp x xInc v16 v32 rhs) yInc z]
      5 [xInc yInc (interp z zInc v32 v64 rhs)]
      6 [(interp x xInc v128 v64 rhs) yInc zInc]
      7 [x  yInc  (interp z zInc v16 v128 rhs)]
      8 [x (interp y yInc v2 v16 rhs) z]
      9 [xInc (interp y (+ y yInc) v2 v32 rhs) z]
      10 [xInc (interp y yInc v4 v64 rhs)]
      11 [(x (interp y yInc v8 v128 rhs) zInc)]
      "Index must be between 0 and 11" ;TODO how do I throw errors in clojure?
      )))

(defn GenRange [minVal maxVal resolution]
  (map (fn [x] (+ (* x resolution) minVal))
       (take (int (/ (- maxVal minVal) resolution)) (range))))

(defn GenerateGrid [xMin xMax yMin yMax zMin zMax resolution]
  (let [xVals (GenRange xMin xMax resolution)
        yVals (GenRange yMin yMax resolution)
        zVals (GenRange zMin zMax resolution)]

    ;; TODO fix for loops
    ;; (for x xVals (for y yVals (for z zVals '(x y z)))) ; multidimensional list of permutation.
    ;; (for [x xVals y yVals z zVals] '(x y z))  ; Flat list of permutation
     (for [x xVals y yVals  z zVals]
       '(x y z))
     )) ; multidimensional list of permutation.

(defn MarchingCubesCore [lhs rhs x y z xStep yStep zStep]
  (let [v1 (lhs x y z)
        v2 (lhs (+ x xStep) y z)
        v4 (lhs (+ x xStep) y (+ z zStep))
        v8 (lhs x y (+ z zStep))
        v16 (lhs x (+ y yStep) z)
        v32 (lhs (+ x xStep) (+ y yStep) z)
        v64 (lhs (+ x xStep) (+ y yStep) (+ z zStep))
        v128 (lhs x (+ y yStep) (+ z zStep))]

    (let [IsosurfaceEdgePointsPartial (partial IsosurfaceEdgePoints x y z xStep yStep zStep v1 v2 v4 v8 v16 v32 v64 v128 lhs rhs)])
    (map IsosurfaceEdgePoints (tt/TriangleTable (CubeIndex [v1 v2 v4 v8 v16 v32 v64 v128] rhs)))))


;; TODO add defaults
(defn MarchingCubes  [lhs  rhs  xMin  xMax  yMin  yMax  zMin  zMax  resolution]
  (def points ())
  (def xStep (GenRange xMin xMax resolution))
  (def yStep (GenRange yMin yMax resolution))
  (def zStep (GenRange zMin zMax resolution))
  ;; (for (x y z) (GenerateGrid xMin xMax yMin yMax zMin zMax resolution)
  ;; XXX: does this kind of destructuring work?
  (for [point (GenerateGrid xMin xMax yMin yMax zMin zMax resolution)]
    (let [x (point 1)
          y (point 2)
          z (point 3)]
       (conj (MarchingCubesCore lhs rhs x y z xStep yStep zStep) points)
       )
    )
  (points)
)
