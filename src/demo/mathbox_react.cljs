(ns demo.mathbox-react
  (:require ["mathbox-react" :as MB]
            [reagent.core :as r :include-macros true]
            [sicmutils.expression.compile :as xc]
            ["three" :as THREE]
            ["three/examples/jsm/controls/OrbitControls.js"
             :as OrbitControls]))

;; TODO take a key for orbitcontrols, trackballcontrols.
(def default-options
  {:plugins ["core" "controls" "cursor"]
   :controls {:klass OrbitControls/OrbitControls}
   :camera {}})

(defn setup
  "Returns a setup function that will only run ONE time."
  [f]
  (fn [^js box]
    (when (and box (not (.-created box)))
      (set! (.-created box) true)
      (f box))))

(defn opts->setup
  "Some core options, tidied up."
  [{:keys [background-color
           camera-position
           max-distance
           scale focus]}]
  (setup
   (fn [^js box]
     (when scale (.set box #js {:scale scale}))
     (when focus (.set box #js {:focus focus}))
     (let [three (.-three box)]
       (when max-distance
         (-> three .-controls .-maxDistance (set! max-distance)))
       (when-let [[x y z] camera-position]
         (-> three .-camera .-position (.set x y z)))
       (when background-color
         (let [color (THREE/Color. background-color)]
           (-> three .-renderer (.setClearColor color 1.0))))))))

;; ## Components

(defn Mathbox
  "Same as `ContainedMathBox`, but with setup options.

  TODO for NOW, don't supply `:ref`. But obviously we want to allow that too.

  :style maps to containerStyle."
  [{:keys [init style] :as opts} & children]
  (let [ref (cond (map? init) (opts->setup init)
                  (fn? init)  (setup init)
                  :else      (throw
                              (ex-info
                               "Invalid init." {:init init})))
        opts (-> opts
                 (dissoc :init :style)
                 (update :options (partial merge default-options))
                 (assoc :ref ref
                        :containerStyle style))]
    (into [:> MB/ContainedMathbox opts] children)))

(defn Cartesian [opts & children]
  (let [opts (update opts :range
                     (fn [{:keys [x y z]}]
                       [(or x [0 1])
                        (or y [0 1])
                        (or z [0 1])]))]
    (into [:> MB/Cartesian opts] children)))

(defn Volume
  "Like the original, but allows for a 'dimensions' key."
  [{:keys [dimensions] :as opts}]
  (let [[width height depth] dimensions
        opts (-> (dissoc opts :dimensions)
                 (assoc :width width
                        :height height
                        :depth depth))]
    [:> MB/Volume opts]))

;; ## Demo-Specific Components
(defn ColorCube
  [{:keys [dimensions size opacity]}]
  [:<>
   [Volume
    {:dimensions dimensions
     :items 1
     :channels 4
     :live false
     :expr (fn [emit x y z]
             (emit x y z opacity))}]
   [:> MB/Point
    {:points "<"
     :colors "<"
     :color 0xffffff
     :size size}]])

(defn Axes [])

(defn Function1 [{:keys [samples f]
                  :or {samples 256}}]
  (let [f' (xc/sci-eval f)]
    [:<>
     [:> MB/Interval
      {:width samples
       :items 1
       :channels 2
       :expr (fn [emit x _ time]
               (emit x (f' x time)))}]
     [:> MB/Line {:color 0x3090ff :width 4}]
     [:> MB/Point {:color 0x3090ff :size 8}]]))
