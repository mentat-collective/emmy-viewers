^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy.viewer
  "Namespace containing viewer utilities..."
  {:nextjournal.clerk/toc true}
  (:refer-clojure :exclude [get get-in])
  (:require [clojure.core :as core]
            [clojure.walk :refer [postwalk]]
            [emmy.expression :as x]
            [mentat.clerk-utils.css :as css]
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk :as clerk]))

;; ## Emmy Viewers
;;
;; This namespace contains utilities for setting up a project to render
;; mathematical objects using Clerk, Emmy and viewer libraries like Mafs.cljs
;; and MathBox.cljs.
;;
;; I don't feel confident about the current API boundaries, so expect the layout
;; here to change. As an example, some of this code is Clerk-specific... but the
;; functions that build up Reagent fragments could in theory be used
;; with [Portal](https://github.com/djblue/portal) or other React-aware
;; libraries.
;;
;; ### Project Configuration

(def ^:no-doc css-map
  "Map of package keyword to a sequence of the CSS urls required to render viewers
  from that package.

  These will be moved into subprojects at some point, so don't rely directly on
  this var!"
  {:mafs ["https://unpkg.com/computer-modern@0.1.2/cmu-serif.css"
          "https://unpkg.com/mafs@0.16.0/core.css"
          "https://unpkg.com/mafs@0.16.0/font.css"]
   :jsxgraph ["https://cdn.jsdelivr.net/npm/jsxgraph@1.5.0/distrib/jsxgraph.css"]
   :mathbox ["https://unpkg.com/mathbox@2.3.1/build/mathbox.css"]
   :mathlive ["https://unpkg.com/mathlive@0.85.1/dist/mathlive-static.css"
              "https://unpkg.com/mathlive@0.85.1/dist/mathlive-fonts.css"]})

(defn install-css!
  ([] (install-css! #{:mafs :jsxgraph :mathbox :mathlive}))
  ([packages]
   (apply css/set-css! (mapcat css-map packages))))

;; ## Clerk

(defn ^:no-doc strip-meta [form]
  (postwalk (fn [x]
              (if (meta x)
                (with-meta x nil)
                x))
            form))

(defn render
  "Takes the unevaluated body `form` of a Clerk `:render-fn` and returns a "
  [form]
  (clerk/with-viewer
    {:render-fn
     (list 'fn [] (strip-meta form))}
    nil))

(defn ^:no-doc fragment
  ([v] (fragment v render))
  ([v viewer]
   (with-meta v {::clerk/viewer viewer})))

;; ## State Utilities

(defn get [sym path]
  (cond (symbol? sym) (q (get @~sym ~path))
        (map? sym)    (get sym path)
        :else         (get @sym path)))

(defn get-in [sym path]
  (cond (symbol? sym) (q (get-in @~sym ~path))
        (map? sym)    (get-in sym path)
        :else         (get-in @sym path)))

(defn inspect-state [sym]
  ['nextjournal.clerk.viewer/inspect `@~sym])

(defn with-state [init f]
  (let [sym  (gensym)
        body (f sym)]
    (with-meta
      (q (reagent.core/with-let [~sym (reagent.core/atom ~init)]
           ~body))
      (update (meta body) ::clerk/viewer #(or % render)))))

(defmacro with-let
  "Testing out the macro style, works with a single input."
  {:clj-kondo/lint-as 'clojure.core/let}
  [[sym init] & body]
  `(with-state ~init
     (fn [~sym] ~@body)))

;; ### Parameterized Functions

(defrecord ^:no-doc ParamF [f atom params])

(defn ^:no-doc param-f? [m]
  (instance? ParamF m))

(defn with-params
  "describe!"
  [{:keys [params atom]} f]
  (->ParamF f atom params))

;; ## Viewers
;;
;; These are custom viewers that seem helpful.

(def meta-viewer
  {:name `meta-viewer
   :pred (comp ifn? ::clerk/viewer meta)
   :transform-fn
   (clerk/update-val
    (fn [v]
      ((-> v meta ::clerk/viewer) v)))})

(def tabbed-viewer
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

(defn multi [m]
  (clerk/with-viewer tabbed-viewer m))

(def literal-viewer
  {:name `literal-viewer
   :pred x/literal?
   :transform-fn
   (clerk/update-val x/expression-of)})

(defn install! []
  (clerk/add-viewers!
   [meta-viewer
    literal-viewer]))
