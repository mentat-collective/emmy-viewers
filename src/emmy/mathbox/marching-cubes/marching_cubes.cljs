(ns emmy.mathbox.marching-cubes.marching-cubes)

(defn CubeIndex
  "Returns index into 256 value Triangle Lookup Table"
  [vertex_vector]

  ;; compares vertex position to rhs of surface function and
  ;; returns the 8 bit number associated with that edge
  [(reduce + (map-index
              (fn [item index]
               (* (if (> item rhs) 1 0)
               (pow 2 index)))))]
  )


(defn IsosurfaceEdgePoints
  [index x y z xStep yStep zStep v1 v2...]
;;TODO - start from here...https://github.com/ChristopherChudzicki/math3d-react/blob/e352d15d275fc2e060441ecf11574e2fdec3211b/client/src/utils/marchingCubes/index.js#L54
  (case index
    0 [(interp x (+ x xStep) v1 v2 rhs) y z]
    1
    2
    3
    4
    5
    6
    7
    )

  )



(defn MarchingCubes  [lhs  righ  xMin  xMax  yMin  yMax  zMin  zMax  resolution]
  ;; loop over x,y, z in the steps
  ;; pos {:x .. :y .. :z .. :xMin .. :xMax...}
  MarchingCubes pos
  CubeCase (CubeIndex )
  ;;

  )

(defn CubeIndex)

(defn MarchingCubesCore [lhs rhs x y z xStep yStep zStep ]
  (let [
        v1 (lhs x y z)
        v2 (lhs (+ x xStep) y z)
        v4 (lhs (+ x xStep) y (+ z zStep))
        v8 (lhs x y (+ z zStep))
        v16 (lhs x (+ y yStep) z)
        v32 (lhs (+ x xStep) (+ y yStep) z )
        v64 (lhs (+ x xStep) (+ y yStep) (+ z zStep))
        v128 (lhs x (+ y yStep) (+ z zStep))
        ]

   (CubeIndex [v1 v2 v4 v6 v16 v32 v64 v128])





  )
