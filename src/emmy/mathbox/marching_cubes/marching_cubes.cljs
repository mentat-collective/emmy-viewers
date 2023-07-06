(ns emmy.mathbox.marching-cubes.marching-cubes
  (:require [emmy.mathbox.marching-cubes.triangle-table :as tt]))

(defn CubeIndex
  "Returns index into 256 value Triangle Lookup Table"
  [vertex_vector rhs]
  ;; TODO double check the index implementation.
  ;; compares vertex position to rhs of surface function and
  ;; returns the 8 bit number associated with that edge
  (let [bit_exp  (map-indexed

                  (fn [index item]
                    (* (if (> item rhs) 1 0)
                       (Math/pow 2 index)))
                  vertex_vector)]
    (reduce + bit_exp)))

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
      11 [x (interp y yInc v8 v128 rhs) zInc]
      (println (str "Index must be between 0 and 11. Given: " index)) ;TODO how do I throw errors in clojure?
      )))

(defn GenRange [minVal maxVal numPoints]
  (map (fn [x] (+ (* x (/ (- maxVal minVal) numPoints)) minVal))
       ;; (take (int (/ (- maxVal minVal) resolution)) (range)) ;;XXX this was wrong
       (take numPoints (range))))

(defn GenerateGrid [xMin xMax yMin yMax zMin zMax resolution]
  (println "generating grid")
  (let [points ()
        xVals (GenRange xMin xMax resolution)
        yVals (GenRange yMin yMax resolution)
        zVals (GenRange zMin zMax resolution)]
    (for [x xVals y yVals  z zVals]
      [x y z])))

(defn MarchingCubesCore [lhs rhs x y z xStep yStep zStep]
  (let [v1 (lhs x y z)
        v2 (lhs (+ x xStep) y z)
        v4 (lhs (+ x xStep) y (+ z zStep))
        v8 (lhs x y (+ z zStep))
        v16 (lhs x (+ y yStep) z)
        v32 (lhs (+ x xStep) (+ y yStep) z)
        v64 (lhs (+ x xStep) (+ y yStep) (+ z zStep))
        v128 (lhs x (+ y yStep) (+ z zStep))]

    (let [IsosurfaceEdgePointsPartial (partial IsosurfaceEdgePoints x y z xStep yStep zStep v1 v2 v4 v8 v16 v32 v64 v128 lhs rhs)
          indexVal (CubeIndex [v1 v2 v4 v8 v16 v32 v64 v128] rhs)]

      (for [triangle (tt/TriangleTable indexVal)]
        (map IsosurfaceEdgePointsPartial triangle)))))

(defn MarchingCubes [lhs rhs
                     & {:keys [xMin  xMax  yMin  yMax  zMin  zMax  resolution]
                        :or {xMin -1  xMax 1  yMin -1  yMax 1 zMin -1 zMax 1  resolution 100}}]
  (let [
   xStep (/ 1 resolution)
   yStep (/ 1 resolution)
   zStep (/ 1 resolution)
   grid (GenerateGrid xMin xMax yMin yMax zMin zMax resolution)
        ]

    (filter not-empty  ;; XXX somehow some of these only return 'points' with 2 entries....they seem to mostly evaluate to the RHS though!
          (for [point grid]
            (let [x (point 0)
                  y (point 1)
                  z (point 2)]
              (MarchingCubesCore lhs rhs x y z xStep yStep zStep)))))
  )

(defn TestLhs [x y z]
  (reduce +
          (map (fn [a] (Math/pow a 2)) [x y z])))
