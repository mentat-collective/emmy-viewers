^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.cube-controls
  (:require [leva.core :as-alias leva]
            [nextjournal.clerk :as clerk]
            [mathbox.core :as-alias mathbox]
            [mathbox.primitives :as-alias mb]
            [mentat.clerk-utils.show :refer [show-sci]]
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk.viewer :as-alias viewer]))

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

;; the `mbr` forms live in [[demo.mathbox]] for now.

(show-sci
 (defn ColorCube
   [{:keys [dimensions size opacity]}]
   (let [[width height depth] dimensions]
     [:<>
      [mathbox.primitives/Volume
       {:width width
        :height height
        :depth depth
        :items 1
        :channels 4
        :live false
        :expr (fn [emit x y z]
                (emit x y z opacity))}]
      [mathbox.primitives/Point
       {:points "<"
        :colors "<"
        :color 0xffffff
        :size size}]])))

(def cube-viewer
  ;; Note that if I want to just pass a data structure on unmodified I need to
  ;; `mark-presented` here.
  {:transform-fn clerk/mark-presented
   :render-fn
   (q
    #(viewer/html
      [mathbox/MathBox ~opts
       [mb/Camera
        {:position [2.5 1 2.5]
         :proxy true}]
       [mb/Cartesian {}
        [ColorCube %]]]))})

;; We can then use the above viewer using metadata:

^{::clerk/width :wide
  ::clerk/viewer cube-viewer}
{:width 8
 :height 5
 :depth 20
 :size 20
 :opacity 1.0}

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

(show-sci
 [leva.core/Controls
  {:atom !cube-state
   :schema
   {:width {:min 0 :max 100 :step 1}
    :height {:min 0 :max 100 :step 1}
    :depth {:min 0 :max 100 :step 1}
    :opacity {:min 0 :max 1}}}])

(clerk/with-viewer
  {:render-fn
   (q (fn [_]
        [mathbox.core/MathBox ~opts
         [mathbox.primitives/Cartesian {}
          (let [{:keys [width height depth size opacity]} @!cube-state]
            [ColorCube {:size size
                        :opacity opacity
                        :dimensions [width height depth]}])]]))}
  {})
