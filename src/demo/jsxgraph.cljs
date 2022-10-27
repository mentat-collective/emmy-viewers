(ns demo.jsxgraph
  "Eventually this will contain wrapper forms for jsxgraph. For now ignore the
  reactish part and just blow away the full jsxgraph whenever the input
  change.

  This is currently using my fork of jsxgraph at
  https://github.com/sritchie/jsxgraph and published to
  https://www.npmjs.com/package/@mentatcollective/jsxgraph, but these changes
  should appear upstream soon and we can back off to the official library."
  (:require ["@mentatcollective/jsxgraph" :default jsx]
            [reagent.core :as re :include-macros true]))

(defn to-fixed [x p]
  (.toFixed jsx x p))

(defn JSXGraph
  [{:keys [id style]} & _]
  (let [!board  (re/atom nil)
        !force  (atom 0)
        id (or id (-> (Math/random)
                      (.toString 36)
                      (.substr 2 9)))
        style (or style {:height "400px" :width "100%"})
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
                 (.suspendUpdate old)
                 (-> (.-JSXGraph jsx) (.freeBoard old))
                 nil)))

      ;; Update if the props change. Not so bad!!
      :component-did-update
      (fn [this old-argv]
        (js/console.log "board-did-update")
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
      (fn [& _]
        (let [this     (re/current-component)
              children (re/children this)]
          (js/console.log "rendering board")
          ;; TODO note that this trick is forcing the children to re-render
          ;; basically every single time. We are using react as a hack here :)
          ;;
          ;; But this means that, for now, you can't be updating this stuff with
          ;; changing properties. You need to use a function that is going to
          ;; access some state. That should be fine!
          (swap! !force inc)
          [:div {:id id :style style}
           (into [:<>]
                 (map (fn [[a b c]]
                        [a b (assoc c :board @!board :force @!force)]))
                 children)]))})))

(defn add-item! [name board elems props]
  (let [p (.create board
                   name
                   (clj->js elems)
                   (clj->js (dissoc props :board)))]
    ;; Okay, SO, we can definitely get updates. but we want to UNREGISTER these
    ;; if we can when the element gets taken out of commission.
    #_(if-let [coords (.-coords p)]
        (.on coords "update" (fn [_] (js/console.log (str (pr-str props) name " coords update fired"))))
        (.on board "update" (fn [_] (js/console.log (str (.getType p) " update fired")))))

    ;; TODO what are the possible events for OTHER types??
    (when-let [f (props :on-drag)]

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
    (let [!item (atom nil)
          mount!
          (fn [this _old-argv]
            (let [[_ elems props] (re/argv this)]
              (when-let [board (:board props)]
                (swap! !item
                       (fn [item]
                         (when item
                           (.removeObject board item))
                         (add-item! name board elems props))))))]
      (re/create-class
       {:display-name name
        :component-did-mount mount!
        :component-did-update mount!
        :component-will-unmount
        (fn [this]
          (let [[_ _ props] (re/argv this)]
            (when-let [board (:board props)]
              (swap! !item
                     (fn [item]
                       (when item
                         (.removeObject board item))
                       nil)))))
        :reagent-render
        (fn [_elems _props] nil)}))))

(def Point (make-element "point"))
(def Slider (make-element "slider"))
(def FunctionGraph (make-element "functiongraph"))
(def RiemannSum (make-element "riemannsum"))
(def Text (make-element "text"))
(def Angle (make-element "angle"))
