(ns emmy.portal.reagent
  "Portal viewer for rendering Reagent snippets.

  Install the viewer like this:

  ```clojure
  (emmy.portal/install! \"emmy/portal/reagent.cljs\")
  ```

  The viewer is automatically installed by the functions in [[emmy.portal]]."
  (:require [clojure.walk :refer [postwalk]]
            [portal.ui.api :as p]
            [portal.ui.rpc :as rpc]
            ["react" :as react]))

(def viewer-name :emmy.portal/reagent)

(def xform-key
  "Currently transforms are stored under this key for compatibility with the
  Emmy-Viewers Clerk code."
  :nextjournal.clerk/viewer)

(defn ^:no-doc strip-meta
  "Given an unevaluated Reagent body, returns an identical form with all metadata
  stripped off."
  [form]
  (postwalk
   (fn [x]
     (if (meta x)
       (vary-meta x dissoc xform-key)
       x))
   form))

(defn ->f
  "Given a quoted Reagent body (which might use functions like
  `reagent.core/with-let` or third-party components, not just Hiccup syntax),
  returns a no-argument-function component that renders an `eval`-ed version of
  `body`."
  [body]
  (eval
   (list 'fn [] (strip-meta body))))

(defn expand
  "Renders the supplied Reagent fragment by expanding it
  with [[emmy.viewer/expand]] and then evaluating it via [[->f]]."
  [v]
  (let [[form set-form!] (react/useState nil)]
    (react/useEffect
     (fn []
       (-> (rpc/call 'emmy.viewer/expand v)
           (.then (comp set-form! ->f)))
       js/undefined)
     #js [])
    form))

(defn show-reagent
  "Renders `v`, an unevaluated Reagent fragment, by either using [[->f]] directly
  or first expanding it via [[expand]].

  The latter case comes up with a fragment that needs some wrapping context,
  like `mafs.plot/OfX`. This component can't render alone but needs a wrapping
  `mafs.core/Mafs`, provided by `expand`."
  [v]
  (let [xform (xform-key (meta v))]
    (if (or (not xform) (map? xform))
      [(->f v)]
      [:f> expand v])))

(defn reagent? [v]
  (when-let [m (meta v)]
    (or (:portal.viewer/reagent? m)
        (= viewer-name
           (:portal.viewer/default m)))))

(p/register-viewer!
 {:name viewer-name
  :component show-reagent
  :predicate reagent?})
