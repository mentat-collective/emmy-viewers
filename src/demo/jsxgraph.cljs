(ns demo.jsxgraph
  "Eventually this will contain wrapper forms for jsxgraph. For now ignore the
  reactish part and just blow away the full jsxgraph whenever the input
  change.

  For any of this to work, you'll need to

  ```
  npm install canvas
  ```

  For this to work, you'll need to use my fork of JSXGraph:
  https://github.com/sritchie/jsxgraph, on this branch:
  https://github.com/jsxgraph/jsxgraph/pull/463"
  ;; this is the generated bundle I have. I should really just go to relative paths...
  (:require ["jsxgraph/bundle/jsxgraph" :default jsx]))

(defn create
  "NICE!!! Basic example, but it works!!"
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
        _os (.create board "riemannsum" #js [f
                                             #(.Value s)
                                             (fn [] "left")
                                             #(.Value a)
                                             #(.Value b)]
                     #js {:fillColor "#ffff00" :fillOpacity 0.3})]
    (.create board
             "text"
             #js [-6 -3
                  (fn [] (str "Sum="
                             (-> jsx (.-Math) (.-Numerics)
                                 (.riemannsum f (.Value s) "left" (.Value a) (.Value b))
                                 (.toFixed 4))))])
    board))
