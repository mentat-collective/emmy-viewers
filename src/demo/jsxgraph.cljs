(ns demo.jsxgraph
  "Eventually this will contain wrapper forms for jsxgraph. For now ignore the
  reactish part and just blow away the full jsxgraph whenever the input
  change.

  For any of this to work, you'll need to

  ```
  npm install canvas
  ```

  Add the [build](https://github.com/jsxgraph/jsxgraph/tree/master/build)
  directory from the jsxgraph repo into `node_modules/jsxgraph` in your project.
  shadow-cljs needs this and they seem to have left it out of the project.

  See my issue here: https://github.com/jsxgraph/jsxgraph/pull/456, hopefully
  neither of these will be necessary soon."
  (:require ["jsxgraph" :as jsx]))

(defn create [id]
  (js/console.log jsx)
  (let [board (.initBoard jsx/JSXGraph id #js {:boundingbox #js [-5 5 5 -5]
                                               :axis true})]
    board))
