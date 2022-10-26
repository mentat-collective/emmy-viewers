(ns demo.jsxgraph
  "Eventually this will contain wrapper forms for jsxgraph. For now ignore the
  reactish part and just blow away the full jsxgraph whenever the input
  change.

  This is currently using my fork of jsxgraph at
  https://github.com/sritchie/jsxgraph and published to
  https://www.npmjs.com/package/@mentatcollective/jsxgraph, but these changes
  should appear upstream soon and we can back off to the official library."
  (:require ["@mentatcollective/jsxgraph" :default jsx]
            ["react" :as react]
            [reagent.core :as re :include-macros true]))

;; TODO turn this into a make-component kind of thing :)
(defn Point
  [x y z]
  (re/create-class
   {:display-name  "Point"

    ;; called first.
    :component-did-mount
    (fn [_this]
      (js/console.log "component-did-mount"))

    :component-will-unmount
    (fn [_this]
      (js/console.log "bye@"))

    ;; called if the INPUTS to the component change at all. I guess this matters
    ;; if the keyword etc or positions change.
    :component-did-update
    (fn [this old-argv]
      (let [new-argv (rest (re/argv this))]
        (js/console.log "component-did-update")
        (js/console.log (pr-str old-argv))
        (js/console.log (pr-str new-argv))))


    :reagent-render        ;; Note:  is not :render
    (fn [x y z]           ;; remember to repeat parameters
      [:div (str x " " y " " z)])}))

(defn add-point [board state parents props]
  (let [k (props :state-k)
        p (.create board
                   "point"
                   (clj->js parents)
                   (clj->js props))]
    (when k
      ;; events can be
      ;; drag, mousedrag, touchdrag
      ;; move, mousemove, touchmove
      ;; over, mouseover
      ;; out, mouseout
      ;; up, mouseup, touchend
      ;; down, mousedown, touchstart
      (.on p "drag" (fn [_]
                      (js/console.log (pr-str @state))
                      (this-as point
                        (swap! state update k assoc
                               :x (.X point)
                               :y (.Y point))))))
    p))

(defn demo [board state]
  (let [s (.create board "slider" #js [#js [1 3] #js [5 3] #js [1 10 50]] #js {:name "n" :snapWidth 1})
        a (.create board "slider" #js [#js [1 2] #js [5 2] #js [-10 -3 0]] #js {:name "start"})
        b (.create board "slider" #js [#js [1 1] #js [5 1] #js [0 (* 2 Math/PI) 10]] #js {:name "end"})
        f #(Math/sin %)
        _pt (let [{x :x y :y} (:my-point @state)]
              (add-point board state [x y]
                         {:state-k :my-point
                          :name "A"
                          :strokecolor "red"}))

        _plot (.create board "functiongraph" #js [f
                                                  ;; #(.Value a)
                                                  ;; #(.Value b)
                                                  #(-> @state :my-point :x)
                                                  #(-> @state :my-point :y)])
        r (.create board "riemannsum" #js [f
                                           #(.Value s)
                                           (fn [] "left")
                                           ;; #(.Value a)
                                           ;; #(.Value b)
                                           #(-> @state :my-point :x)
                                           #(-> @state :my-point :y)]
                   #js {:fillColor "#ffff00" :fillOpacity 0.3})]
    (.create board "text" #js [-6 -3 (fn [] (str "Sum=" (.toFixed jsx (.Value r) 4)))])
    board))

(defn create [id props state]
  (let [board (-> (.-JSXGraph jsx)
                  (.initBoard id (clj->js props)))]

    (demo board state)))



(defn JSXGraph
  "Creates an example jsxgraph instance with a plane, a sine wave and a Riemann
  sum.

  TODO think about componentwillunmount, or update?"
  ([state]
   (JSXGraph {} state))
  ([props state]
   (let [id (-> (Math/random)
                (.toString 36)
                (.substr 2 9))]
     (fn []
       [:div {:id id
              :style {:height "400px" :width "100%"}
              :ref (fn [el]
                     (when el
                       (create id props state)))}]))))
