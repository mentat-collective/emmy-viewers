^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy.clerk
  "Namespace containing Clerk-specific utilities..."
  {:nextjournal.clerk/toc true}
  (:require [clojure.walk :refer [postwalk]]
            [emmy.expression :as x]
            [emmy.viewer.css :as vc]
            [mentat.clerk-utils.css :as css]
            [nextjournal.clerk :as clerk]))

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

(def meta-viewer
  {:name `meta-viewer
   :pred #(-> % meta ::clerk/viewer)
   :transform-fn
   (clerk/update-val
    ;; TODO check multiple levels of nesting...
    (fn [v]
      (let [viewer (-> v meta :nextjournal.clerk/viewer)]
        (if (fn? viewer)
          (viewer v)
          (clerk/with-viewer viewer
            (vary-meta v dissoc ::clerk/viewer))))))})

(defn ^:no-doc strip-meta [form]
  (postwalk (fn [x]
              (if (meta x)
                (vary-meta x dissoc ::clerk/viewer)
                x))
            form))

(def reagent-viewer
  {:name `reagent-viewer
   :transform-fn
   (clerk/update-val
    (fn [form]
      (clerk/with-viewer
        {:render-fn
         (list 'fn [] (strip-meta form))}
        nil)))})

;; ### Emmy-specific viewers

(def literal-viewer
  {:name `literal-viewer
   :pred x/literal?
   :transform-fn
   (clerk/update-val x/expression-of)})

(defn install! []
  (clerk/add-viewers!
   [meta-viewer literal-viewer]))

;; ### Project Configuration

(defn install-css!
  ([] (install-css! #{:mafs :jsxgraph :mathbox :mathlive}))
  ([packages]
   (apply css/set-css! (mapcat vc/css-map packages))))

;; ## State Utilities

(defn inspect-state [sym]
  ['nextjournal.clerk.viewer/inspect `@~sym])
