(ns emmy.portal.mathlive
  "Portal viewer for rendering MathLive.cljs reagent snippets. Requiring this
  viewer has the side-effect of requiring all namespaces
  from [MathLive.cljs](https://github.com/mentat-collective/MathLive.cljs) into
  the SCI context.

  Generate these fragments using the code in the [[emmy.mathlive]] namespace and
  sub-namespaces.

  To use this viewer, first install the `mathlive` npm package:

  ```bash
  npm install mathlive@0.85.1
  ```

  Then install the viewer:

  ```clojure
  (emmy.portal/install! \"emmy/portal/mathlive.cljs\")
  ```

  The viewer is automatically installed by the functions in [[emmy.portal]]."
  (:require [emmy.viewer.css :refer [css-map]]
            [emmy.portal.css :as css]
            [emmy.portal.reagent :as pr]
            [mathlive.core]
            [portal.ui.api :as p]))

(apply css/inject! (:mathlive css-map))

(def viewer-name :emmy.portal/mathlive)

(def style "
math-field {
  width: 100%;
  font-size: 24px;
  border-radius: 4px;
  border: 1px solid;
  padding: 8px;
}
math-field:focus-within {
  outline: none;
  border: 1px solid blue;
}")

(defn show-mathlive [v]
  [:div
   [:style style]
   [pr/show-reagent v]])

(p/register-viewer!
 {:name viewer-name
  :component show-mathlive
  :predicate
  (fn [v]
    (when-let [m (meta v)]
      (or (:portal.viewer/mathlive? m)
          (:portal.viewer/reagent? m)
          (= viewer-name
             (:portal.viewer/default m)))))})
