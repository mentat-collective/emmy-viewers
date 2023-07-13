
^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.mathbox.implicit
  {:nextjournal.clerk/toc true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.leva :as leva]
            [emmy.env :as e :refer :all]
            [emmy.viewer :as ev]
            [emmy.mathbox.plot :as p]))

{:nextjournal.clerk/width :full}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

(defn Sphere [x y z]
  (reduce +
          (map (fn [a] (Math/pow a 2)) [x y z])))

(defn WrappedSphere []
  '(fn [x y z] (Sphere x y z)))


;; TODO need to eval this quoted funciton somewhere.
(p/implicit-surface {:lhs '(fn [x y z]
                             (reduce + (map (fn [a] (Math/pow a 2)) [x y z]))) :rhs 1})
