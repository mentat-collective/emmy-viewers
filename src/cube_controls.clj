^{:nextjournal.clerk/visibility {:code :hide}}
(ns cube-controls
  (:require [nextjournal.clerk :as clerk]
            [mentat.clerk-utils.show :refer [show-sci]]
            [emmy.pattern.rule :refer [template]]))

;; ## Hello World!

;; This first example shows off Clerk's extensibility. We'll take one of the
;; hardcoded examples from the [MathBox](https://github.com/unconed/mathbox)
;; repository and generate a version that we can
;;
;; - configure from our JVM source code
;; - display in a browser window in all of its Javascripty MathBox glory.
;;
;; ### Cube Viewer
;;
;; default options:
(def opts
  {:style {:height "400px" :width "100%"}
   :init {:background-color 0xeeeeee
          :max-distance 4
          :camera-position [2.5 1 2.5]
          :scale 720 :focus 1}})

;; the `mbr` forms live in [[demo.mathbox]] for now.

(show-sci
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
    [box/Point
     {:points "<"
      :colors "<"
      :color 0xffffff
      :size size}]]))

(def cube-viewer
  ;; Note that if I want to just pass a data structure on unmodified I need to
  ;; `mark-presented` here.
  {:transform-fn clerk/mark-presented
   :render-fn
   (template
    #(v/html
      [mathbox/MathBox ~opts
       [mb/Cartesian {}
        [ColorCube %]]]))})

;; We can then use the above viewer using metadata:

^{::clerk/width :wide
  ::clerk/viewer cube-viewer}
{:dimensions [8 5 20]
 :size 20
 :opacity 1.0}

;; ## Stateful Example
;;
;; Here's the same example, but with sliders installed that can push state back
;; to the server.
;;
;; Clean up some ceremony:

(defn atom-viewer [render-fn]
  {:render-fn render-fn
   :pred #(when-let [v (get % ::clerk/var-from-def)]
            (and v (instance? clojure.lang.IDeref (deref v))))
   :transform-fn (comp clerk/mark-presented
                       (clerk/update-val
                        (fn [{::clerk/keys [var-from-def]}]
                          {:var-name (symbol var-from-def)
                           :value @@var-from-def})))})

;; First, our sliders:

(defn slider
  "env can be server or local."
  ([s path] (slider s path {}))
  ([s path {:keys [min max step type env]
            :or {type :long
                 env :server}}]
   (template
    (let [path ~path]
      (fn [ref value]
        [:div
         [:span ~s]
         [:input
          {:type :range
           :min ~(or min 0)
           :max ~(or max 100)
           :step ~(or step 1)
           :value (get-in value path)
           :on-change
           (fn [target]
             (let [v (.. target -target -value)
                   v (case ~type
                       :long   (js/parseInt v)
                       :double (js/parseFloat v))]
               (case ~env
                 :server (v/clerk-eval
                          `(swap! ~ref assoc-in ~path ~v))
                 :client (swap! ref assoc-in path v))))}]])))))

(defn controls [& sliders]
  (template
   (fn [var-name value]
     (let [xform (map #(% var-name value))]
       (into [:<>] xform ~(vec sliders))))))

(defn cube-ui-fn [env]
  (controls
   (slider "width: " [:dimensions 0] {:env env})
   (slider "height: " [:dimensions 1] {:env env})
   (slider "depth: " [:dimensions 2] {:env env})
   (slider "size: " [:size] {:env env})
   (slider "opacity: " [:opacity]
           {:env env :min 0 :max 1 :step 0.01 :type :double})))

(def server-cube-viewer
  (atom-viewer
   (template
    (fn [{:keys [var-name value] :as v}]
      (v/html
       [:<>
        (~(cube-ui-fn :server) var-name value)
        [mathbox/MathBox ~opts
         [mb/Cartesian {}
          [ColorCube value]]]])))))

^{::clerk/width :wide
  ::clerk/viewer server-cube-viewer}
(defonce box-state
  (atom
   {:dimensions [8 5 11]
    :size 20
    :opacity 1.0}))
@box-state


;; ## Local State
;;
;; This is way faster since the only updates happen on client side.

(def client-cube-viewer
  {:transform-fn clerk/mark-presented
   :render-fn
   (template
    (fn [value]
      (reagent/with-let [!v (reagent/atom value)]
        (v/html
         [:<>
          (~(cube-ui-fn :client) !v @!v)
          [mathbox/MathBox ~opts
           [mb/Cartesian {}
            [ColorCube @!v]]]]))))})

^{::clerk/width :wide
  ::clerk/viewer client-cube-viewer}
{:dimensions [8 5 11]
 :size 20
 :opacity 1.0}
