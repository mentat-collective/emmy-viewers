(ns demo.mathbox
  (:require ["mathbox" :as MathBox]
            ["odex" :as o]
            [nextjournal.clerk.sci-viewer :as sv]
            [sicmutils.env :as e]
            [sicmutils.expression.compile :as xc]
            [sicmutils.numerical.ode :as ode]
            [sicmutils.structure :as struct]
            ["three" :as THREE]
            ["three/examples/jsm/controls/OrbitControls.js"
             :as OrbitControls]))

;; ## Old Stuff
;;
;; Goal: get this all deleted.
(defn build-mathbox [opts]
  (MathBox/mathBox
   (clj->js opts)))

(defn color [x]
  (THREE/Color. x))

(def orbit OrbitControls/OrbitControls)

(defn setup-scene [box]
  (doto (.-three ^js box)
    (-> .-controls .-maxDistance (set! 4))
    (-> .-camera .-position (.set 2.5 1 2.5))
    (-> .-renderer (.setClearColor (color 0xeeeeee) 1.0)))
  box)

(defn initialize!
  "Used."
  [el setup-fn]
  (let [box (build-mathbox
             {:plugins  ["core" "controls" "cursor"]
              :controls {:klass orbit}
              :element el})]
    (setup-fn box)
    (set! (.-mathboxView ^js el) box)
    box))

(defn sync-once! [el !state new setup-fn f]
  (let [existing? (boolean (.-mathboxView ^js el))
        box (or (.-mathboxView ^js el)
                (initialize! el setup-fn))]
    (when-not existing?
      (reset! !state new)
      (.remove box "*")
      (f box))))

(defn sync! [el !state new setup-fn f]
  (let [box (or (.-mathboxView ^js el)
                (initialize! el setup-fn))]
    (when-not (= @!state new)
      (reset! !state new)
      (.remove box "*")
      (f box))))

;; Function Renderer

(defn basic-setup [box]
  (doto (.-three ^js box)
    (-> .-camera .-position (.set 2.3 1 2))
    (-> .-renderer (.setClearColor (color 0xffffff) 1.0))))

;; ## Physics
;;
;; Here we need to pull in the integrator.

(defn L-free-3d [m]
  (fn [[_ _ qdot]]
    (e/* (e// 1 2) m (e/square qdot))))

(defn elliptical->rect [a b c]
  (fn [[_ [theta phi] _]]
    (e/up (e/* a (e/sin theta) (e/cos phi))
          (e/* b (e/sin theta) (e/sin phi))
          (e/* c (e/cos theta)))))

;; TODO figure out the right way to thrash on state. Ask Chris...

(def two-pi (* 2 Math/PI))

(defn attach-ellipse [view {:keys [a b c]}]
  (-> (.area view
             #js {:id "sampler"
                  :width 64
                  :height 64
                  :rangeX #js [0 two-pi]
                  :rangeY #js [0 two-pi]
                  :axes #js [1, 3],
                  :expr (fn [emit, theta phi _i _j _time]
                          (let [sin-theta (Math/sin theta)
                                cos-theta (Math/cos theta)]
                            ;; x y z
                            (emit (* a sin-theta (Math/cos phi))
                                  (* c cos-theta)
                                  (* b sin-theta (Math/sin phi)))))
                  :items 1
                  :channels 3})
      (.surface #js {:shaded true
                     :opacity 0.2
                     :lineX true
                     :lineY true
                     :points "#sampler"
                     :color 0xffffff
                     :width 1})))

(defn L-free-particle [m]
  (fn [[_ _ v]]
    (e/* (e// 1 2) m (e/square v))))

(defn L-central-triaxial [m a b c]
  (comp (L-free-particle m)
        (e/F->C (elliptical->rect a b c))))

(defn state-derivative [m a b c]
  (e/Lagrangian->state-derivative
   (L-central-triaxial m a b c)))

(def ell-m 10)
(def ell-a 3)
(def ell-b 2)
(def ell-c 1)

(defn Lagrangian-updater
  "hardcoded at first for this use case."
  [state-derivative initial-state]
  (let [{:keys [integrator equations]}
        (ode/integration-opts (constantly state-derivative)
                              []
                              initial-state
                              {:epsilon 1e-6
                               :compile? false})]
    (fn [[t :as state] t2]
      (let [s (into-array (flatten state))
            output (.solve integrator equations t s t2 nil)]
        (struct/unflatten (.-y ^js output) state)))))

(defn physics-demo
  [box {:keys [cartesian state->xyz L ellipse]} state]
  (let [render-fn   (xc/sci-eval state->xyz)
        state-deriv (xc/sci-eval L)
        my-updater  (Lagrangian-updater state-deriv @state)
        view        (.cartesian box (clj->js cartesian))]
    (.axis view #js {:axis 1 :width 3})
    (.axis view #js {:axis 2 :width 3})
    (.axis view #js {:axis 3 :width 3})
    (attach-ellipse view ellipse)
    (-> (.interval view
                   (clj->js
                    {:width 1
                     ;; one tick for each function.
                     :items 1
                     :expr
                     (fn [emit _x _i t]
                       (swap! state #(my-updater % t))
                       (let [[x y z] (render-fn @state)]
                         (emit x z y)))

                     ;; 3 channels == x, y, z values.
                     :channels 3
                     :history 10}))
        (.point #js {:color 0x3090ff
                     :size 20
                     :zIndex 1}))))

(defn double-physics-demo
  [box {:keys [cartesian state->xyz L ellipse]} state]
  (let [render-fn   (xc/sci-eval state->xyz)
        state-deriv (xc/sci-eval L)
        my-updater  (Lagrangian-updater state-deriv @state)
        view        (.cartesian box (clj->js cartesian))]
    (.axis view #js {:axis 1 :width 3})
    (.axis view #js {:axis 2 :width 3})
    (.axis view #js {:axis 3 :width 3})
    (attach-ellipse view ellipse)
    (-> (.interval view
                   (clj->js
                    {:width 2
                     ;; one tick for each function.
                     :items 1
                     :expr
                     (fn [emit _x _i t]
                       (swap! state #(my-updater % t))
                       (let [[x1 y1 z1 x2 y2 z2] (render-fn @state)]
                         (emit x1 z1 y1)
                         (emit x2 z2 y2)))

                     ;; 3 channels == x, y, z values.
                     :channels 3}))
        (.line #js {:color 0x3090ff :width 4})
        (.point #js {:color 0x3090ff
                     :size 20
                     :zIndex 1}))))

(defn oscillator-demo
  [box {:keys [cartesian state->xyz L]} state var-name]
  (let [render-fn   (xc/sci-eval state->xyz)
        state-deriv (xc/sci-eval L)
        my-updater  (Lagrangian-updater state-deriv @state)
        view        (.cartesian box (clj->js cartesian))]
    (.axis view #js {:axis 1 :width 3})
    (.axis view #js {:axis 2 :width 3})
    (.axis view #js {:axis 3 :width 3})
    (-> (.interval view
                   (clj->js
                    {:width 1
                     :items 1
                     :history 20
                     :expr
                     (fn [emit _x _i t]
                       (swap! state #(my-updater % t))
                       (when var-name
                         (sv/clerk-eval
                          (list 'clojure.core/reset!
                                var-name
                                (mapv (fn rec [x]
                                        (if (sequential? x)
                                          (mapv rec x)
                                          x))
                                      @state))))
                       (let [[x1 y1 z1] (render-fn @state)]
                         (emit x1 z1 y1)))

                     ;; 3 channels == x, y, z values.
                     :channels 3}))
        (.point #js {:color 0x3090ff
                     :size 20
                     :zIndex 1}))))
