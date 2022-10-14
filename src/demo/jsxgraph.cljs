(ns demo.jsxgraph
  "Eventually this will contain wrapper forms for jsxgraph. For now ignore the
  reactish part and just blow away the full jsxgraph whenever the input
  change.

  This is currently using my fork of jsxgraph at
  https://github.com/sritchie/jsxgraph and published to
  https://www.npmjs.com/package/@mentatcollective/jsxgraph, but these changes
  should appear upstream soon and we can back off to the official library."
  (:require ["@mentatcollective/jsxgraph" :default jsx]))

(defn create
  "Creates an example jsxgraph instance with a plane, a sine wave and a Riemann
  sum."
  [id]
  (let [board (-> (.-JSXGraph jsx)
                  (.initBoard id #js {:boundingbox #js [-8 4 8 -4]
                                      :showCopyright false
                                      :axis true}))
        s (.create board "slider" #js [#js [1 3] #js [5 3] #js [1 10 50]] #js {:name "n" :snapWidth 1})
        a (.create board "slider" #js [#js [1 2] #js [5 2] #js [-10 -3 0]] #js {:name "start"})
        b (.create board "slider" #js [#js [1 1] #js [5 1] #js [0 (* 2 Math/PI) 10]] #js {:name "end"})
        f #(Math/sin %)
        _plot (.create board "functiongraph" #js [f #(.Value a) #(.Value b)])
        r (.create board "riemannsum" #js [f
                                           #(.Value s)
                                           (fn [] "left")
                                           #(.Value a)
                                           #(.Value b)]
                   #js {:fillColor "#ffff00" :fillOpacity 0.3})]
    (.create board
             "text"
             #js [-6 -3 (fn [] (str "Sum=" (.toFixed jsx (.Value r) 4)))])
    board))
