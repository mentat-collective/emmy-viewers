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

;; kind of like MathboxAPIContext... basically a dynamic binding.
(defonce board-context
  (react/createContext nil))

(def Provider
  (.-Provider board-context))

(defn JSXGraph2
  [& _]
  (let [!container (atom nil)
        !board     (re/atom nil)
        id (-> (Math/random)
               (.toString 36)
               (.substr 2 9))
        init (fn [props]
               (-> (.-JSXGraph jsx)
                   (.initBoard id (clj->js props))))]
    (re/create-class
     {:display-name  "JSXGraph"

      ;;called after render.
      :component-did-mount
      (fn [this]
        (js/console.log "board mounted")
        (reset! !board (init (re/props this))))

      :component-will-unmount
      (fn [_this]
        (js/console.log "bye bye board")
        (swap! !board
               (fn [old]
                 (-> (.-JSXGraph jsx) (.freeBoard old))
                 nil)))

      ;; Update if the props change. Not so bad!!
      :component-did-update
      (fn [this old-argv]
        (let [old-props (let [p (second old-argv)]
                          (if (map? p) p {}))
              new-props (or (re/props this) {})]
          (when-not (= old-props new-props)
            (js/console.log "board resetting!")
            (swap! !board
                   (fn [old]
                     (-> (.-JSXGraph jsx) (.freeBoard old))
                     (init new-props))))))

      :reagent-render
      (fn [& _] ;; remember to repeat parameters
        (let [this     (re/current-component)
              children (re/children this)]
          (js/console.log "rendering board")
          [:div {:id id
                 :style {:height "400px" :width "100%"}
                 :ref (fn [el]
                        (js/console.log "ref called")
                        (when el (reset! !container el)))}
           (into [:> Provider {:value @!board}]
                 children)]))})))

(defn add-item! [name board elems props]
  (let [p (.create board name (clj->js elems) (clj->js props))]

    ;; TODO what are the possible events for OTHER types??
    (when-let [f (props :on-drag)]
      (js/console.log "adding")
      ;; events can be
      ;; drag, mousedrag, touchdrag
      ;; move, mousemove, touchmove
      ;; over, mouseover
      ;; out, mouseout
      ;; up, mouseup, touchend
      ;; down, mousedown, touchstart
      (.on p "drag" (fn [_]
                      (this-as point
                        (f point)))))
    p))

(defn make-element [name]
  (fn [_elems _props]
    (let [!item (atom nil)]
      (re/create-class
       {:display-name name
        :context-type board-context

        ;; called first.
        :component-did-mount
        (fn [this]
          (when-let [board (.-context this)]
            (let [[_ elems props] (re/argv this)]
              (js/console.log (str name "-did-mount"))
              (reset! !item (add-item! name board elems props)))))

        :component-will-unmount
        (fn [this]
          (when-let [board (.-context this)]
            (swap! !item
                   (fn [item]
                     (when item
                       (js/console.log (str "bye " name))
                       (.removeObject board item))
                     nil))))

        ;; called if the INPUTS to the component change at all. I guess this
        ;; matters if the keyword etc or positions change.
        ;;
        ;; TODO explain the KEY thing.
        :component-did-update
        (fn [this [_ old-elems old-props]]
          (when-let [board (.-context this)]
            (let [[_ elems props] (re/argv this)]
              (if @!item
                (if (and (:key props)
                         (:key old-props)
                         (= (:key props)
                            (:key old-props)))
                  ;; TODO horrible flow here but the idea is that if the KEY
                  ;; does not change, don't do anything.
                  nil
                  (when (or (not= elems old-elems)
                            (not= old-props props))
                    (swap! !item
                           (fn [item]
                             (.removeObject board item)
                             (add-item! name board elems props)))))
                (do (js/console.log (str "creating " name "."))
                    (reset! !item (add-item! name board elems props)))))))

        :reagent-render
        (fn [_elems _props] nil)}))))


(def Point (make-element "point"))


(defn demo [board]
  board
  #_(let [s (.create board "slider" #js [#js [1 3] #js [5 3] #js [1 10 50]] #js {:name "n" :snapWidth 1})
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

(defn JSXGraph
  "Creates an example jsxgraph instance with a plane, a sine wave and a Riemann
  sum.

  TODO think about componentwillunmount, or update?"
  [props & _children]
  (js/console.log (pr-str [props _children]))
  (let [id (-> (Math/random)
               (.toString 36)
               (.substr 2 9))]
    (fn []
      [:div {:id id
             :style {:height "400px" :width "100%"}
             :ref (fn [el]
                    (when el
                      (let [board (-> (.-JSXGraph jsx)
                                      (.initBoard id (clj->js props)))]
                        (demo board))))}])))
