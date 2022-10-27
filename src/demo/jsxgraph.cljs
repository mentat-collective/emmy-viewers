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

(defn to-fixed [x p]
  (.toFixed jsx x p))

(defn JSXGraph
  [{:keys [id style]} & _]
  (let [!board  (re/atom nil)
        id (or id (-> (Math/random)
                      (.toString 36)
                      (.substr 2 9)))
        style (or style {:height "400px" :width "100%"})
        init  (fn [props]
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
      (fn [& _]
        (let [this     (re/current-component)
              children (re/children this)]
          (js/console.log "rendering board")
          [:div {:id id :style style}
           (into [:> Provider {:value @!board}]
                 children)]))})))

(defn add-item! [name board elems props]
  (let [p (.create board name (clj->js elems) (clj->js props))]
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
        ;; TODO explain the KEY thing. Or remove it, is it no longer needed???
        ;;
        ;;
        :component-did-update
        (fn [this [_ old-elems old-props]]
          (when-let [board (.-context this)]
            (js/console.log (str name "-did-update"))
            (let [[_ elems props] (re/argv this)]
              (if @!item
                (when (or (not= elems old-elems)
                          (not= old-props props))
                  (swap! !item
                         (fn [item]
                           #_((.-forceUpdate (.-context this)))
                           (.removeObject board item)
                           (add-item! name board elems props))))
                (do (js/console.log (str "initially creating " name "."))
                    (reset! !item (add-item! name board elems props)))))))

        :reagent-render
        (fn [_elems _props]
          nil)}))))


(def Point (make-element "point"))
(def Slider (make-element "slider"))
(def FunctionGraph (make-element "functiongraph"))
(def RiemannSum (make-element "riemannsum"))
(def Text (make-element "text"))
(def Angle (make-element "angle"))

;; More problems:
;;
;; some of the elements, like angles, need to mark OTHER angles as their parents. How do we keep a registry here... do we d it by name? What happens when those elements get recycled?
;;
;;
