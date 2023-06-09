(ns emmy.portal.jsxgraph
  "Portal viewer for rendering JSXGraph.cljs reagent snippets. Requiring this
  viewer has the side-effect of requiring all namespaces
  from [JSXGraph.cljs](https://github.com/mentat-collective/JSXGraph.cljs) into
  the SCI context.

  Generate these fragments using the code in the [[emmy.jsxgraph]] namespace and
  sub-namespaces.

  To use this viewer, first install the `jsxgraph` npm package:

  ```bash
  npm install jsxgraph@1.5.0
  ```

  Then install the viewer:

  ```clojure
  (emmy.portal/install! \"emmy/portal/jsxgraph.cljs\")
  ```

  The viewer is automatically installed by the functions in [[emmy.portal]]."
  (:require [emmy.viewer.css :refer [css-map]]
            [emmy.portal.css :as css]
            [jsxgraph.core]))

(apply css/inject! (:jsxgraph css-map))
