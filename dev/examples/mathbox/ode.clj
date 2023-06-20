^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.mathbox.ode
  #:nextjournal.clerk{:toc true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.leva]
            [emmy.env :as e :refer :all]
            [emmy.viewer :as ev]
            [emmy.mathbox.plot :as p]))

{:nextjournal.clerk/width :wide}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; ## ODE Solver
(def fn-body
  ["a0008" "a0009" "a0010" "  const y0001 = a0008[0];\n  const y0002 = a0008[1];\n  const y0003 = a0008[2];\n  const y0004 = a0008[3];\n  const y0005 = a0008[4];\n  const p0006 = a0010[0];\n  const p0007 = a0010[1];\n  const _0011 = Math.sin(y0002);\n  const _0012 = Math.pow(y0005, 2.0);\n  const _0013 = Math.cos(y0002);\n  a0009[0] = 1.0;\n  a0009[1] = y0004;\n  a0009[2] = y0005;\n  a0009[3] = (- p0007 * _0012 * _0013 * _0011 - p0006 * _0012 * _0011) / p0007;\n  a0009[4] = (2.0 * p0007 * y0004 * y0005 * _0011) / (p0007 * _0013 + p0006);"])

(def xform-body
  ["a0008" "a0009" "a0010" "  const y0001 = a0008[0];\n  const y0002 = a0008[1];\n  const y0003 = a0008[2];\n  const y0004 = a0008[3];\n  const y0005 = a0008[4];\n  const p0006 = a0010[0];\n  const p0007 = a0010[1];\n  const _0011 = Math.cos(y0002);\n  const _0012 = Math.sin(y0003);\n  const _0013 = Math.cos(y0003);\n  a0009[0] = p0007 * _0011 * _0013 + p0006 * _0013;\n  a0009[1] = p0007 * _0011 * _0012 + p0006 * _0012;\n  a0009[2] = p0007 * Math.sin(y0002);"])


(p/scene
 ['emmy.mathbox.physics/Curve
  {:steps       8000
   :f'          `(reagent.core/with-let [sym# ~(list* 'js/Function. fn-body)]
                   (fn [in# out#]
                     (sym# in# out# ~(list 'js/Array. 2 0.5))))
   :state->xyz `(reagent.core/with-let [sym# ~(list* 'js/Function. xform-body)]
                  (fn [in# out#]
                    (sym# in# out# ~(list 'js/Array. 2 0.5))))
   :y0 [0 0 0 '(Math/cos 0.44) '(Math/sin 0.44)]}])


#_
[Curve
 {:state-derivative (apply js/Function (:L opts))
  :state->xyz render-fn
  :initial-state-fn
  (fn []
    (let [st      (.-state !params)
          alpha_0 (:alpha_0 st)]
      ;; alpha_0 is the direction of the initial velocity
      ;; in (theta, phi)-space. Since we're not doing dynamics,
      ;; the speed doesn't matter, just the direction, so we do
      ;; it as a unit vector.
      [0
       (:theta_0 st)
       0
       (Math/cos alpha_0) (Math/sin alpha_0)]))
  :steps 1500
  :params !arr}]
