(ns emmy.portal.leva
  "Portal viewer for rendering Leva.cljs reagent snippets. Requiring this viewer
  has the side-effect of requiring all namespaces
  from [Leva.cljs](https://github.com/mentat-collective/Leva.cljs) into the SCI
  context.

  Generate these fragments using the code in the [[emmy.leva]] namespace and
  sub-namespaces.

  To use this viewer, first install the `leva` npm package:

  ```bash
  npm install leva@0.9.34
  ```

  Then install the viewer:

  ```clojure
  (emmy.portal/install! \"emmy/portal/leva.cljs\")
  ```

  The viewer is automatically installed by the functions in [[emmy.portal]]."
  (:require [leva.core]))
