^{:nextjournal.clerk/visibility :hide-ns}
(ns reactbox
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial])
  (:require [nextjournal.clerk :as clerk]
            [sicmutils.env :as e :refer :all]
            [sicmutils.expression.compile :as xc]))

;; ## Cube Demo

(def cube-viewer
  {:fetch-fn (fn [_ x] x)
   :render-fn
   '(let [opts {:plugins ["core" "controls" "cursor"]
                :controls {:klass box/OrbitControls}
                :camera {}}]
      (fn [{:keys [id width-rez height-rez depth-rez size opacity] :as value}]
        (when value
          (v/html
           [box/ContainedMathbox
            {:options opts
             :containerStyle {:height "400px" :width "100%"}
             :ref (fn [box]
                    (when (and box (not (.-created box)))
                      (set! (.-created box) true)
                      (.set ^js box (clj->js {:scale 720 :focus 1}))
                      (doto (.-three ^js box)
                        (-> .-controls .-maxDistance (set! 4))
                        (-> .-camera .-position (.set 2.5 1 2.5))
                        (-> .-renderer (.setClearColor (mb/color 0xeeeeee) 1.0)))))}
            [box/Cartesian
             {:range [[0 1] [0 1] [0 1]]
              :scale [1 1 1]}
             [box/Volume
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
                       (emit x y z opacity))}]
             [box/Point
              {:points (str "#" id)
               :colors (str "#" id)
               :color 0xffffff
               :size size}]]]))))})
(clerk/with-viewer cube-viewer
  ;; prose, wide or full, sweet!
  {::clerk/width :wide}
  {:id "volume"
   :width-rez 10,
   :height-rez 5
   :depth-rez 11
   :size 20
   :opacity 1.0})

;; ## Stateful Attempt

^{::clerk/width :wide
  ::clerk/viewer
  {:pred #(when-let [v (get % ::clerk/var-from-def)]
            (and v (instance? clojure.lang.IDeref (deref v))))
   :fetch-fn (fn [_ x] x)
   :transform-fn (fn [{::clerk/keys [var-from-def]}]
                   {:var-name (symbol var-from-def)
                    :value @@var-from-def})
   :render-fn '(let [opts {:plugins ["core" "controls" "cursor"]
                           :controls {:klass box/OrbitControls}
                           :camera {}}]
                 (fn [{:keys [var-name value]}]
                   (letfn [(elem [s k]
                             [:div
                              [:span s]
                              [:input
                               {:type :range
                                :value (k value)
                                :on-change
                                #(v/clerk-eval
                                  `(swap! ~var-name assoc ~k (Integer/parseInt
                                                              ~(.. % -target -value))))}]])]
                     (let [{:keys [id width-rez height-rez depth-rez size opacity]} value]
                       (v/html
                        [:div
                         [:div
                          (elem "width: " :width-rez)
                          (elem "height: " :height-rez)
                          (elem "depth: " :depth-rez)
                          (elem "size: " :size)
                          [:div
                           [:span "Opacity: " ]
                           [:input
                            {:type :range
                             :value (* 100.0 (:opacity value))
                             :on-change
                             #(v/clerk-eval
                               `(swap! ~var-name assoc
                                       :opacity
                                       (-> (Double/parseDouble
                                            ~(.. % -target -value))
                                           (/ 100.0))))}]]]
                         [box/ContainedMathbox
                          {:options opts
                           :containerStyle {:height "400px" :width "100%"}
                           :ref (fn [box]
                                  (when (and box (not (.-created box)))
                                    (set! (.-created box) true)
                                    (.set ^js box (clj->js {:scale 720 :focus 1}))
                                    (doto (.-three ^js box)
                                      (-> .-controls .-maxDistance (set! 4))
                                      (-> .-camera .-position (.set 2.5 1 2.5))
                                      (-> .-renderer (.setClearColor (mb/color 0xeeeeee) 1.0)))))}
                          [box/Cartesian
                           {:range [[0 1] [0 1] [0 1]]
                            :scale [1 1 1]}
                           [box/Volume
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
                                     (emit x y z opacity))}]
                           [box/Point
                            {:points (str "#" id)
                             :colors (str "#" id)
                             :color 0xffffff
                             :size size}]]]])))))}}

(defonce box-state
  (atom
   {:id "volume"
    :width-rez 8,
    :height-rez 5
    :depth-rez 11
    :size 20
    :opacity 1.0}))

@box-state

;; stateful, but only loca,not tied to the server:

^{::clerk/width :wide
  ::clerk/viewer
  {:fetch-fn (fn [_ x] x)
   :render-fn '(let [opts {:plugins ["core" "controls" "cursor"]
                           :controls {:klass box/OrbitControls}
                           :camera {}}
                     ;; WOOHOO!
                     cube (fn [{:keys [id width-rez height-rez depth-rez size opacity]}]
                            [:<>
                             [box/Volume
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
                                       (emit x y z opacity))}]
                             [box/Point
                              {:points (str "#" id)
                               :colors (str "#" id)
                               :color 0xffffff
                               :size size}]])]
                 (fn [value]
                   (reagent/with-let [!v (reagent/atom value)
                                      !container (reagent/atom nil)]
                     (letfn [(elem [s k]
                               [:div
                                [:span s]
                                [:input
                                 {:type :range
                                  :value (k @!v)
                                  :on-change #(swap! !v assoc k (js/parseInt
                                                                 (.. % -target -value)))}]])]
                       (v/html
                        [:div
                         [:div
                          (elem "width: " :width-rez)
                          (elem "height: " :height-rez)
                          (elem "depth: " :depth-rez)
                          (elem "size: " :size)
                          [:div
                           [:span "Opacity: " ]
                           [:input
                            {:type :range
                             :value (* 100.0 (:opacity @!v))
                             :on-change
                             #(swap! !v assoc
                                     :opacity
                                     (-> (js/parseFloat (.. % -target -value))
                                         (/ 100.0)))}]]]
                         [:div {:id "mathbox"
                                :style {:height "400px" :width "100%"}
                                :ref (fn [el]
                                       (when el
                                         (reset! !container el)))}
                          (when-let [div @!container]
                            [box/Mathbox
                             {:options opts
                              :container div
                              :ref
                              (fn [box]
                                (when (and box (not (.-created box)))
                                  (set! (.-created box) true)
                                  (.set ^js box (clj->js {:scale 720 :focus 1}))
                                  (doto (.-three ^js box)
                                    (-> .-controls .-maxDistance (set! 4))
                                    (-> .-camera .-position (.set 2.5 1 2.5))
                                    (-> .-renderer (.setClearColor (mb/color 0xeeeeee) 1.0)))))}
                             [box/Cartesian
                              {:range [[0 1] [0 1] [0 1]]
                               :scale [1 1 1]}
                              (cube @!v)]])]])))))}}
{:id "volume"
 :width-rez 8,
 :height-rez 5
 :depth-rez 11
 :size 20
 :opacity 1.0}

;; ## Function Viewer
;;
;;
;; next task: get the function viewer working.
;;
;; then get all of the examples migrated over.

(comment
  (defn- fn-transform [m]
    (binding [xc/*mode* :source]
      (update m :f #(xc/compile-fn* % 2))))

  (def fn-render-fn
    '(fn [value]
       (v/html
        (when value
          (mbr/function value)))))

  (def fn-viewer
    {:fetch-fn (fn [_ x] x)
     :transform-fn fn-transform
     :render-fn fn-render-fn})

  (defn my-fn [x t]
    (+ (square (sin x))
       (square
        (cos (* t x)))))

  (clerk/with-viewer fn-viewer
    {:range [[-6 10] [-1 1] [-1 1]]
     :scale [6 1 1]
     :samples 256
     :f my-fn}))
