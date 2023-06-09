^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.mathbox.cube-controls
  (:require [emmy.leva :as leva]
            [emmy.viewer :as ev]
            [emmy.mathbox :as box]
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk :as clerk]))

(ev/install!)

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
  {:container {:style {:height "400px" :width "100%"}}
   :renderer  {:background-color 0xeeeeee
               :max-distance 4}
   :scale 720
   :focus 1})

(defn scene [body]
  (box/mathbox
   opts
   (box/camera {:position [2.5 1 2.5] :proxy true})
   (box/cartesian {} body)))

(defn color-cube
  "Now THIS is some wild viewer writing!! This works with a dereferenced symbol OR
  with a literal..."
  [m]
  (-> (q (let [{:keys [width height depth size opacity]} ~m]
           ~[:<>
             (box/volume
              {:width 'width
               :height 'height
               :depth 'depth
               :items 1
               :channels 4
               :live false
               :expr (q (fn [emit x y z]
                          (emit x y z opacity)))})
             (box/point {:points "<"
                         :colors "<"
                         :color 0xffffff
                         :size 'size})]))
      (ev/tagged scene)))

^{::clerk/width :wide}
(color-cube
 {:width 8
  :height 5
  :depth 20
  :size 20
  :opacity 1.0})

;; ## Stateful Example
;;
;; Here's the same example, but with sliders installed that can push state back
;; to the server.

^::clerk/sync
(defonce !cube-state
  (atom
   {:width 8
    :height 5
    :depth 11
    :size 20
    :opacity 1.0}))

@!cube-state

(leva/controls
 {:atom `!cube-state
  :schema
  {:width {:min 0 :max 100 :step 1}
   :height {:min 0 :max 100 :step 1}
   :depth {:min 0 :max 100 :step 1}
   :opacity {:min 0 :max 1}}})

^{::clerk/width :wide}
(color-cube `@!cube-state)
