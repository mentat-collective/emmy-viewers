(ns examples.einstein
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial])
  (:require [emmy.calculus.form-field :as ff]
            [emmy.calculus.indexed :as ci]
            [emmy.calculus.vector-field :as vf]
            [emmy.env :as e :refer :all]))

;; ## Einstein's Field Equations

(defn Einstein [coordinate-system metric-tensor]
  (let [basis      (coordinate-system->basis coordinate-system)
        connection (Christoffel->Cartan
                    (metric->Christoffel-2 metric-tensor basis))
        nabla      (covariant-derivative connection)
        Ricci-tensor (Ricci nabla basis)
        Ricci-scalar ((trace2down metric-tensor basis) Ricci-tensor)]
    (-> (fn Einstein-tensor [v1 v2]
          (- (Ricci-tensor v1 v2)
             (* (/ 1 2)
                Ricci-scalar
                (metric-tensor v1 v2))))
        (ci/with-argument-types
          [::vf/vector-field
           ::vf/vector-field]))))

(defn Einstein-field-equation [coordinate-system K]
  (fn [metric-tensor Lambda stress-energy-tensor]
    (let [Einstein-tensor (Einstein coordinate-system metric-tensor)
          EFE-residuals   (- (+ Einstein-tensor (* Lambda metric-tensor))
                             (* K stress-energy-tensor))]
      (ci/with-argument-types
        EFE-residuals
        [::vf/vector-field
         ::vf/vector-field]))))

;; (define K (/ (* 8 :pi :G) (expt :c 4)))
;; (& 2.076115391974129e-43 (/ (expt second 2) (* kilogram meter)))

;; Some metrics
(let-coordinates [[t x y z] spacetime-rect]
  (defn Minkowski-metric [c]
    (letfn [(g [v1 v2]
              (+ (* -1 (square c) (dt v1) (dt v2))
                 (* (dx v1) (dx v2))
                 (* (dy v1) (dy v2))
                 (* (dz v1) (dz v2))))]
      (ci/with-argument-types
        g
        [::vf/vector-field
         ::vf/vector-field]))))

(define-coordinates [t r theta phi] spacetime-sphere)

(defn Schwarzschild-metric [c G M]
  (let [a (- 1 (* (/ 2 (square c))
                  (/ (* G M) r)))
        g (fn [v1 v2]
            (+ (*  -1 (square c) a (dt v1) (dt v2))
               (* (/ 1 a) (dr v1) (dr v2))
               (* (square r)
                  (+ (* (dtheta v1) (dtheta v2))
                     (* (square (sin theta))
                        (dphi v1) (dphi v2))))))]
    (ci/with-argument-types
      g
      [::vf/vector-field
       ::vf/vector-field])))

;; Friedmann-Lemaître-Robertson-Walker metric
(defn FLRW-metric [c k R]
  (let [a (/ (square (compose R t))
             (- 1 (* k (square r))))
        b (square (* (compose R t) r))
        g (fn [v1 v2]
            (+ (*  -1 (square c) (dt v1) (dt v2))
               (* a (dr v1) (dr v2))
               (* b
                  (+ (* (dtheta v1) (dtheta v2))
                     (* (square (sin theta))
                        (dphi v1) (dphi v2))))))]
    (ci/with-argument-types
      g
      [::vf/vector-field
       ::vf/vector-field])))

;; ## Stress-Energy tensors
;;
;; Note that these are (2,0) tensors.

(defn Tperfect-fluid [rho p c metric]
  (let [basis (coordinate-system->basis spacetime-sphere)
        inverse-metric (e/metric:invert metric basis)
        T (fn [w1 w2]
            (+ (* (+ (compose rho t)
                     (/ (compose p t)
                        (square c)))
                  (w1 d:dt)
                  (w2 d:dt))
               (* (compose p t)
                  (inverse-metric w1 w2))))]
    (ci/with-argument-types
      T
      [::ff/oneform-field
       ::ff/oneform-field])))

(with-literal-functions [R rho p]
  (let [basis  (coordinate-system->basis spacetime-sphere)
        g      (FLRW-metric 'c 'k R)
        T_ij   ((drop2 g basis) (Tperfect-fluid rho p 'c g))
        [d:dt d:dr] (coordinate-system->vector-basis spacetime-sphere)
        K (/ (* 8 'pi 'G) (expt 'c 4))]
    [((((Einstein-field-equation spacetime-sphere K)
        g 'Lambda T_ij)
       d:dt d:dt)
      ((point spacetime-sphere) (up 't 'r 'theta 'phi)))

     ((((Einstein-field-equation spacetime-sphere
                                 (/ (* 8 'pi 'G) (expt 'c 4)))
        g 'Lambda T_ij)
       d:dr d:dr)
      ((point spacetime-sphere) (up 't 'r 'theta 'phi)))]))

(with-literal-functions [R p rho]
  (let [metric (FLRW-metric 'c 'k R)
        basis (coordinate-system->basis spacetime-sphere)
        nabla (covariant-derivative
               (Christoffel->Cartan
                (metric->Christoffel-2 metric basis)))
        es (basis->vector-basis basis)]
    (map (fn [i]
           ((contract
             (fn [ej wj]
               (* (metric ej (nth es i))
                  (contract
                   (fn [ei wi]
                     (((nabla ei)
                       (Tperfect-fluid rho p 'c metric))
                      wj
                      wi))
                   basis)))
             basis)
            ((point spacetime-sphere) (up 't 'r 'theta 'phi))))
         (range 4))))

(with-literal-functions [R p rho]
  (let [metric (FLRW-metric 'c 'k R)
        basis (coordinate-system->basis spacetime-sphere)
        nabla (covariant-derivative
               (Christoffel->Cartan
                (metric->Christoffel-2 metric basis)))
        ws    (basis->oneform-basis basis)]
    (map (fn [i]
           ((contract
             (fn [ei wi]
               (((nabla ei)
                 (Tperfect-fluid rho p 'c metric))
                (nth ws i)
                wi))
             basis)
            ((point spacetime-sphere) (up 't 'r 'theta 'phi))))
         (range 4))))
