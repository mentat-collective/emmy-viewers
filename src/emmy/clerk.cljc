(ns emmy.clerk
  "Clerk-specific utilities for configuring Emmy-Viewers.

  Use:

  - [[install-css!]] for project configuration (or use [[serve!]], [[halt!]]
    and [[build!]] in place of the Clerk versions)

  - [[install!]] for notebook-specific configuration"
  {:nextjournal.clerk/toc true}
  (:require [clojure.walk :refer [postwalk]]
            [emmy.env :as e]
            [emmy.expression :as x]
            [emmy.viewer :as ev]
            #?(:clj [emmy.viewer.css :as vc])
            #?(:clj [mentat.clerk-utils.build :as b])
            #?(:clj [mentat.clerk-utils.css :as css])
            [nextjournal.clerk.viewer :as viewer]))

(def custom-js
  "CDN address of a pre-built JS bundle for Clerk with support for all of this
  library's viewers."
  "https://cas.clerk.garden/tree/8VtffPdJcGYYvix3HLSfUDXgEYVGoYD5hemBeehF8vw8CrNGRaF8B23QCsFR9Ffa4mpdmiAq6T8VssouL6W19YkXsC/.clerk/shadow-cljs/main.js")

;; ## Viewers
;;
;; This first section contains Clerk viewer implementations that are helpful for
;; presentation or make the rest of the code here possible.

(def tabbed-viewer
  "Clerk viewer for showing values in a tabbed interface. Use this viewer with

  - A map of label => value
  - A sequence of pairs of the form `[label, value]`

  Use the second form if you care about the order of your tabs."
  {:name `tabbed-viewer
   :render-fn
   '(fn [pairs opts]
      (reagent.core/with-let
        [ks (mapv
             (fn [{[k] :nextjournal/value}]
               (:nextjournal/value k))
             pairs)
         m  (into {} (map
                      (fn [{[k v] :nextjournal/value}]
                        [(:nextjournal/value k) v]))
                  pairs)
         !k (reagent.core/atom (first ks))]
        [:<> (into
              [:div.flex.items-center.font-sans.text-xs.mb-3
               [:span.text-slate-500.mr-2 "View as:"]]
              (map (fn [k]
                     [:button.px-3.py-1.font-medium.hover:bg-indigo-50.rounded-full.hover:text-indigo-600.transition
                      {:class
                       (if (= @!k k)
                         "bg-indigo-100 text-indigo-600"
                         "text-slate-500")
                       :on-click #(reset! !k k)}
                      k]))
              ks)
         [nextjournal.clerk.viewer/inspect-presented
          (get m @!k)]]))})

(defn multi
  "Given either

  - A map of label => value
  - A sequence of pairs of the form `[label, value]`

  returns a form that will render in Clerk as a tabbed interface, where clicking
  the tab assigned to a label will replace the space below with the
  corresponding value.

  Use the second form if you care about the order of your tabs."
  [xs]
  (viewer/with-viewer tabbed-viewer xs))

(defn ^:no-doc transform-literal
  "Given an Emmy expression `x`, returns an ordered list of pairs to pass in
  to [[multi]]."
  [x]
  (let [simple (e/simplify x)]
    [["simplified TeX" (viewer/tex (e/->TeX simple))]
     [:simplified     (e/freeze simple)]
     [:TeX            (viewer/tex (e/->TeX x))]
     [:original       (e/freeze x)]]))

(def multiviewer
  "Viewer that applies to Emmy literals by default and presents them with a tabbed
  interface showing TeX and the original representation, simplified and
  unsimplified.

  NOTE: In its current state [[multiviewer]] doesn't apply to anything but
  literals, but COULD be activated for anything that responds
  to [[emmy.env/->TeX]]."
  {:name `multiviewer
   :pred x/literal?
   :transform-fn
   (viewer/update-val
    (comp multi transform-literal))})

(def meta-viewer
  "Catch-all viewer that allows a metadata-carrying object to specify its viewer
  via the `:nextjournal.clerk/viewer` slot metadata.

  This viewer can be either a:

  - symbol referencing a viewer's name
  - a viewer object
  - a transform function

  In the latter case, the transform will be applied to the value and the result
  will be rendered instead."
  {:name `meta-viewer
   :pred #(-> % meta :nextjournal.clerk/viewer)
   :transform-fn
   (viewer/update-val
    (fn [v]
      (let [viewer (-> v meta :nextjournal.clerk/viewer)]
        (if (fn? viewer)
          (viewer v)
          (viewer/with-viewer viewer
            (vary-meta v dissoc :nextjournal.clerk/viewer))))))})

(defn ^:no-doc strip-meta
  "Given an unevaluated Reagent body, returns an identical form with all metadata
  stripped off."
  [form]
  (postwalk (fn [x]
              (if (meta x)
                (vary-meta x dissoc :nextjournal.clerk/viewer)
                x))
            form))

(def reagent-viewer
  "This viewer applies to forms that represent quoted Reagent bodies (which might
  use functions like `reagent.core/with-let` or third-party components, not just
  Hiccup syntax).

  The Reagent body is treated as the body of a Clerk viewer's `:render-fn`."
  {:name `reagent-viewer
   :transform-fn
   (viewer/update-val
    (fn [form]
      (viewer/with-viewer
        {:render-fn
         (list 'fn [] (strip-meta form))}
        nil)))})

;; When this namespace is evaluated, install the [[reagent-viewer]]
;; into [[emmy.viewer/reagent-viewer]].
;;
;; We do this because then [[emmy.viewer]] works well without any Clerk
;; dependency (if you are only using Portal, for example).

;; ### Emmy-specific viewers

(def literal-viewer
  "Default viewer for [[emmy.expression/literal?]] objects.

  These are rendered by unwrapping their type layer, so that Clerk can use its
  defaults for things like ratio.s"
  {:name `literal-viewer
   :pred x/literal?
   :transform-fn
   (viewer/update-val x/expression-of)})

#?(:clj  (alter-var-root #'ev/reagent-viewer (constantly reagent-viewer))
   :cljs (set! ev/reagent-viewer reagent-viewer))

(defn install!
  "Calling this function at the top of a Clerk notebook installs all appropriate
  default viewers for Emmy, along with any `viewers` supplied to [[install!]].

  [[install!]] is required for any Mafs, MathBox etc code to render correctly."
  [& viewers]
  (let [high-priority [meta-viewer]
        low-priority  [literal-viewer]]
    (viewer/add-viewers!
     (into high-priority
           (concat viewers low-priority)))))

;; ### Project Configuration

(def plugins
  "Set of all plugins allowed by [[install-css!]]."
  #{:mafs :jsxgraph :mathbox :mathlive})

#?(:clj
   (defn install-css!
     "Calling this function once will configure Clerk to install the CSS for all
  Emmy-Viewers dependencies into each Clerk page's header.

  Pass a subset (or the full set!) of [[plugins]] to install a more limited set
  of CSS files."
     ([] (install-css! plugins))
     ([packages]
      (apply css/set-css! (mapcat vc/css-map packages)))))

#?(:clj
   (defn serve!
     "Version of [[nextjournal.clerk/serve!]] that swaps out the default JS
  bundle for a custom Emmy-Viewers bundle and installs all custom CSS for
  emmy-viewers plugins.

  In addition to all options supported by Clerk's `serve!`, [[serve!]] supports
  the following options:

  - `:cljs-namespaces`: a sequence of CLJS namespaces to compile and make
    available to Clerk. If provided, [[serve!]] will compile a custom CLJS bundle
    and configure Clerk to use this bundle instead of the Emmy-Viewers bundle.

  - `:custom-js`: custom JS bundle to use instead of Emmy's JS.

  - `:shadow-options`: these options are forwarded
    to [[mentat.clerk-utils.build.shadow/watch!]]. See that function's docs for
    more detail.

    This bundle is served from a running shadow-cljs server and recompiled when
    any dependency or namespace changes. Defaults to `nil`.

  The only other difference is that if `(:browse? opts)` is `true`, [[serve!]]
  calls [[nextjournal.clerk/show!]] automatically on `(:index opts)` if
  provided.

  All remaining `opts` are forwarded to [[nextjournal.clerk/serve!]]."
     ([] (serve! {}))
     ([opts]
      (let [opts (if (or (:cljs-namespaces opts)
                         (:custom-js opts))
                   opts
                   (assoc opts :custom-js custom-js))]
        (install-css!)
        (b/serve! opts)))))

#?(:clj
   (defn halt!
     "Version of [[nextjournal.clerk/halt!]] that additionally kills any shadow-cljs
  processes, if they are running, and resets all custom CSS entries."
     []
     (css/reset-css!)
     (b/halt!)))

#?(:clj
   (defn build!
     "Version of [[nextjournal.clerk/build!]] that swaps out the default JS
  bundle for a custom Emmy-Viewers bundle and makes sure that all custom CSS for
  emmy-viewers plugins is available during the build.

  In addition to all options supported by Clerk's `build!`, [[build!]] supports
  the following options:

  - `:cljs-namespaces`: a sequence of CLJS namespaces to compile and make
    available to Clerk. If provided, [[build!]] will compile a custom CLJS bundle
    and configure Clerk to use this bundle instead of its default. Defaults to
    `nil`.

  - `:custom-js`: custom JS bundle to use instead of Emmy's built-in JS.

  - `:cname`: string denoting the custom hostname from which the site will be
    served. If provided, [[build!]] will create a `CNAME` file containing the
    value in `(:out-path opts)`. Defaults to `nil`.

  The only other difference is that [[build!]] populates `:git/sha` if it hasn't
  been provided.

  All remaining `opts` are forwarded to [[nextjournal.clerk/build!]]"
     [opts]
     (let [existing @css/custom-css
           opts     (if (or (:cljs-namespaces opts)
                            (:custom-js opts))
                      opts
                      (assoc opts :custom-js custom-js))]
       (try (install-css!)
            (b/build! opts)
            (finally
              (apply css/set-css! existing))))))

;; ## State Utilities

(defn inspect-state
  "Given some symbol representing a client-side Reagent atom, returns a Reagent
  snippet that will use Clerk's `inspect` functionality on the dereferenced
  contents of the atom."
  [sym]
  ['nextjournal.clerk.viewer/inspect `@~sym])
