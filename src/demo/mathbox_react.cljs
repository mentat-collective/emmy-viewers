(ns demo.mathbox-react
  (:require ["mathbox-react" :as MB]
            [reagent.core :as r :include-macros true]
            [sicmutils.expression.compile :as xc]
            ["three/examples/jsm/controls/OrbitControls.js"
             :as OrbitControls]))

;; OKAY, let's see if we can get this thing going with a basic demo!

(def orbit OrbitControls/OrbitControls)

(def init-cam [2.5 1 2.5])

(def options
  {:plugins ["core" "controls" "cursor"]
   :controls {:klass orbit}
   :camera {}})

(defn cube
  [{:keys [id width-rez height-rez depth-rez size opacity]}]
  [:> MB/Mathbox
   {:options {:plugins ["core" "controls" "cursor"]
              :controls {:klass orbit}
              :camera {}}
    :style {:height "400px" :width "100%"}
    :initialCameraPosition init-cam}
   [:> MB/Cartesian
    {}
    [:> MB/Volume
     {:id id
      :width width-rez
      :bufferWidth width-rez
      :height height-rez
      :bufferHeight height-rez
      :depth depth-rez
      :bufferDepth depth-rez
      :items 1
      :channels 4
      :live false
      :expr (fn [emit x y z]
              (emit x y z opacity))}
     [:> MB/Point
      {:points (str "#" id)
       :colors (str "#" id)
       :color 0xffffff
       :size size}]]]])

(defn function [{:keys [range scale samples f]
                 :or {samples 256
                      range [[-6 10] [-1 1] [-1 1]]
                      scale [6 1 1]}}]
  ;; TODO: extract a function, somehow, that is doing the xc/sci-eval just ONE
  ;; time, and trying to hold back whenever the value changes.
  (let [f' (xc/sci-eval f)]
    [:> MB/Mathbox
     {:options
      {:plugins ["core" "controls" "cursor"]
       :controls {:klass orbit}
       :camera {}}
      :style {:height "400px" :width "100%"}
      :initialCameraPosition [2.3 1 2]}
     [:> MB/Cartesian
      {:range range
       :scale scale}
      [:> MB/Axis {:axis 1 :width 3}]
      [:> MB/Axis {:axis 2 :width 3}]
      [:> MB/Axis {:axis 3 :width 3}]
      [:> MB/Interval
       {:width samples
        :items 1
        :channels 2
        :expr (fn [emit x _i time]
                (let [d (f' x time)]
                  (emit x d)))}
       [:> MB/Line {:color 0x3090ff :width 4}]
       [:> MB/Point {:color 0x3090ff :size 8}]]]]))
