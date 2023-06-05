(ns emmy.portal.tex
  "Portal viewer for rendering strings (and any expression that that responds
  to [[emmy.expression.render/->TeX]]) as LaTeX
  via [KaTeX](https://katex.org/).

  To use this viewer, first install the `katex` npm package:

  ```bash
  npm install katex@0.16.7
  ```

  Then install the viewer:

  ```clojure
  (emmy.portal/install! \"emmy/portal/tex.cljs\")
  ```

  The viewer is automatically installed by the functions in [[emmy.portal]]."
  (:require [emmy.portal.css :as css]
            ["katex" :as k]
            [portal.ui.api :as p]
            [portal.ui.options :as o]
            [portal.ui.rpc :as rpc]
            ["react" :as react]))

(css/inject!
 "https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.css")

(def viewer-name :emmy.portal/tex)

(def default-options
  {:throwOnError false
   :displayMode true})

(defn get-opts
  "Returns a map of [KaTeX options](https://katex.org/docs/options.html) generated
  by merging [[default-options]] with user-supplied options.

  To configure this viewer, supply a map of options to [[portal.api/open]] via
  the `:emmy.portal/tex` key. See the [KaTeX options
  documentation](https://katex.org/docs/options.html) for details on what's
  allowed.

  For example:

  ```clojure
  (def portal
    (portal.api/open
     {:emmy.portal/tex
      {:macros {\"\\f\" \"#1f(#2)\"}}}))
  ```"
  []
  (let [opts (get (o/use-options) viewer-name {})]
    (merge default-options opts)))

(defn tex [_]
  (let [opts (clj->js (get-opts))]
    (fn [text]
      [:span
       {:dangerouslySetInnerHTML
        {:__html
         (k/renderToString text opts)}}])))

(defn expand
  "This component is used for any non-string value, and attempts to convert the
  value into a string calling [[emmy.expression.render/->TeX]].

  There are currently no guards in place, so if you attempt to render something
  that isn't supported by Emmy you'll see an error."
  [v]
  (let [[form set-form!] (react/useState nil)]
    (react/useEffect
     (fn []
       (-> (rpc/call 'emmy.expression.render/->TeX v)
           (.then set-form!))
       js/undefined)
     #js [])
    (when form
      [tex form])))

(defn show-expr
  "Render `x` directly with katex or via `->TeX` and then via katex."
  [x]
  (if (string? x)
    [tex x]
    [:f> expand x]))

(p/register-viewer!
 {:name viewer-name
  :component show-expr
  :predicate (constantly true)})
