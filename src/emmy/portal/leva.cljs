(ns emmy.portal.leva
  "Portal viewer for rendering Leva.cljs reagent snippets. Requiring this viewer
  has the side-effect of requiring all namespaces
  from [Mafs.cljs](https://github.com/mentat-collective/Leva.cljs) into the SCI
  context.

  Generate these fragments using the code in the [[emmy.mafs]] namespace and
  sub-namespaces.

  To use this viewer, first install the `mafs` npm package:

  ```bash
  npm install leva@0.9.34
  ```

  Then install the viewer:

  ```clojure
  (emmy.portal/install! \"emmy/portal/leva.cljs\")
  ```

  The viewer is automatically installed by the functions in [[emmy.portal]]."
  (:require [emmy.viewer.css :refer [css-map]]
            [emmy.portal.css :as css]
            #_["shadergraph" :as box]
            ["leva"]
            [leva.core]
            #_[leva.core]))

(apply css/inject! (:leva css-map))
