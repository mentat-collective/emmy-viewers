(ns demo.bench
  (:require [sci.core :as sci]))

(def sci-context
  (sci/init
   {:classes {'Math js/Math}}))

(defn sci-eval [f-form]
  (sci/eval-form (sci/fork sci-context) f-form))

(def js-fn
  (js/eval
   "const cake = function(s, p) {
  const t = s[0];
  const theta = s[1];
  const phi = s[2];
  const thetadot = s[3];
  const phidot = s[4];
  const g = p[0];
  const l1 = p[1];
  const l2 = p[2];
  const m1 = p[3];
  const m2 = p[4];
  const _0001 = - theta;
  const _0005 = Math.pow(phidot, 2);
  const _0006 = Math.pow(thetadot, 2);
  const _0008 = Math.sin(phi);
  const _0009 = Math.sin(theta);
  const _000a = phi + _0001;
  const _000e = Math.cos(_000a);
  const _0010 = Math.sin(_000a);
  const _0011 = Math.pow(_0010, 2);
  return [1, thetadot, phidot, (l1 * m2 * _0006 * _000e * _0010 + l2 * m2 * _0005 * _0010 + g * m2 * _0008 * _000e - g * m1 * _0009 - g * m2 * _0009) / (l1 * m2 * _0011 + l1 * m1), (- l2 * m2 * _0005 * _000e * _0010 - l1 * m1 * _0006 * _0010 - l1 * m2 * _0006 * _0010 + g * m1 * _0009 * _000e + g * m2 * _0009 * _000e - g * m1 * _0008 - g * m2 * _0008) / (l2 * m2 * _0011 + l2 * m1)];
}; cake;"))

(def js-out-fn
  (js/Function. "s" "p" "out"
                "
  const t = s[0];
  const theta = s[1];
  const phi = s[2];
  const thetadot = s[3];
  const phidot = s[4];
  const g = p[0];
  const l1 = p[1];
  const l2 = p[2];
  const m1 = p[3];
  const m2 = p[4];
  const _0001 = - theta;
  const _0005 = Math.pow(phidot, 2);
  const _0006 = Math.pow(thetadot, 2);
  const _0008 = Math.sin(phi);
  const _0009 = Math.sin(theta);
  const _000a = phi + _0001;
  const _000e = Math.cos(_000a);
  const _0010 = Math.sin(_000a);
  const _0011 = Math.pow(_0010, 2);
  out[0] = 1;
  out[1] = thetadot;
  out[2] = phidot;
  out[3] = (l1 * m2 * _0006 * _000e * _0010 + l2 * m2 * _0005 * _0010 + g * m2 * _0008 * _000e - g * m1 * _0009 - g * m2 * _0009) / (l1 * m2 * _0011 + l1 * m1);
  out[4] = (- l2 * m2 * _0005 * _000e * _0010 - l1 * m1 * _0006 * _0010 - l1 * m2 * _0006 * _0010 + g * m1 * _0009 * _000e + g * m2 * _0009 * _000e - g * m1 * _0008 - g * m2 * _0008) / (l2 * m2 * _0011 + l2 * m1);"))

(def cljs-fn
  (fn [s p]
    (let [t (aget s 0)
          theta (aget s 1)
          phi (aget s 2)
          thetadot (aget s 3)
          phidot (aget s 4)]
      (let [g (aget p 0)
            l1 (aget p 1)
            l2 (aget p 2)
            m1 (aget p 3)
            m2 (aget p 4)]
        (let [_0001 (- theta)
              _0005 (Math/pow phidot 2)
              _0006 (Math/pow thetadot, 2)
              _0008 (Math/sin phi)
              _0009 (Math/sin theta)
              _000a (+ phi _0001)
              _000e (Math/cos _000a)
              _0010 (Math/sin _000a)
              _0011 (Math/pow _0010, 2)]
          #js [1
               thetadot
               phidot
               (/ (- (+ (* l1 m2 _0006 _000e _0010)
                        (* l2 m2 _0005 _0010)
                        (* g m2 _0008 _000e))
                     (* g m1 _0009)
                     (* g m2 _0009))
                  (+ (* l1 m2 _0011)
                     (* l1 m1)))
               (/ (- (+ (- (* (- l2) m2 _0005 _000e _0010)
                           (* l1 m1 _0006 _0010)
                           (* l1 m2 _0006 _0010))
                        (* g m1 _0009 _000e)
                        (* g m2 _0009 _000e))
                     (* g m1 _0008)
                     (* g m2 _0008))
                  (+ (* l2 m2 _0011)
                     (* l2 m1)))])))))

(def sci-fn
  (sci-eval
   '(fn [s p]
      (let [t (aget s 0)
            theta (aget s 1)
            phi (aget s 2)
            thetadot (aget s 3)
            phidot (aget s 4)]
        (let [g (aget p 0)
              l1 (aget p 1)
              l2 (aget p 2)
              m1 (aget p 3)
              m2 (aget p 4)]
          (let [_0001 (- theta)
                _0005 (Math/pow phidot 2)
                _0006 (Math/pow thetadot, 2)
                _0008 (Math/sin phi)
                _0009 (Math/sin theta)
                _000a (+ phi _0001)
                _000e (Math/cos _000a)
                _0010 (Math/sin _000a)
                _0011 (Math/pow _0010, 2)]
            #js [1
                 thetadot
                 phidot
                 (/ (- (+ (* l1 m2 _0006 _000e _0010)
                          (* l2 m2 _0005 _0010)
                          (* g m2 _0008 _000e))
                       (* g m1 _0009)
                       (* g m2 _0009))
                    (+ (* l1 m2 _0011)
                       (* l1 m1)))
                 (/ (- (+ (- (* (- l2) m2 _0005 _000e _0010)
                             (* l1 m1 _0006 _0010)
                             (* l1 m2 _0006 _0010))
                          (* g m1 _0009 _000e)
                          (* g m2 _0009 _000e))
                       (* g m1 _0008)
                       (* g m2 _0008))
                    (+ (* l2 m2 _0011)
                       (* l2 m1)))]))))))

(def sci-faster-fn
  (sci-eval
   '(let [pow Math/pow
          sin Math/sin
          cos Math/cos]
      (fn [s p]
        (let [t (aget s 0)
              theta (aget s 1)
              phi (aget s 2)
              thetadot (aget s 3)
              phidot (aget s 4)]
          (let [g (aget p 0)
                l1 (aget p 1)
                l2 (aget p 2)
                m1 (aget p 3)
                m2 (aget p 4)]
            (let [_0001 (- theta)
                  _0005 (pow phidot 2)
                  _0006 (pow thetadot, 2)
                  _0008 (sin phi)
                  _0009 (sin theta)
                  _000a (+ phi _0001)
                  _000e (cos _000a)
                  _0010 (sin _000a)
                  _0011 (pow _0010, 2)]
              #js [1
                   thetadot
                   phidot
                   (/ (- (+ (* l1 m2 _0006 _000e _0010)
                            (* l2 m2 _0005 _0010)
                            (* g m2 _0008 _000e))
                         (* g m1 _0009)
                         (* g m2 _0009))
                      (+ (* l1 m2 _0011)
                         (* l1 m1)))
                   (/ (- (+ (- (* (- l2) m2 _0005 _000e _0010)
                               (* l1 m1 _0006 _0010)
                               (* l1 m2 _0006 _0010))
                            (* g m1 _0009 _000e)
                            (* g m2 _0009 _000e))
                         (* g m1 _0008)
                         (* g m2 _0008))
                      (+ (* l2 m2 _0011)
                         (* l2 m1)))])))))))

(let [state #js [0 3 2 0 0]
      params #js [9.8 1 1 1 1]
      n 1000000
      out (make-array 5)]
  (js/console.log cljs-fn)
  (js/console.log (time
                   (dotimes [_ n]
                     (cljs-fn state params))))
  (js/console.log (time
                   (dotimes [_ n]
                     (js-out-fn state params out))))
  (js/console.log (time
                   (dotimes [_ n]
                     (js-fn state params))))
  (js/console.log (time
                   (dotimes [_ n]
                     (sci-fn state params))))
  (js/console.log (time
                   (dotimes [_ n]
                     (sci-faster-fn state params)))))


;; "Elapsed time: 6.000000 msecs"
;; "Elapsed time: 1817.200000 msecs"
