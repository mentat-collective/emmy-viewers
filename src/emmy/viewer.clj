^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy.viewer
  {:nextjournal.clerk/toc true}
  (:require [clojure.walk :refer [postwalk]]
            [emmy.expression :as x]
            [mentat.clerk-utils.viewers :refer [q]]
            [nextjournal.clerk :as clerk]))

(def meta-viewer
  {:name `meta-viewer
   :pred (comp ifn? ::clerk/viewer meta)
   :transform-fn
   (clerk/update-val
    (fn [v]
      ((-> v meta ::clerk/viewer) v)))})

(defn install! []
  (clerk/add-viewers!
   [meta-viewer
    {:pred x/literal?
     :transform-fn
     (clerk/update-val x/expression-of)}]))

(defn ^:no-doc split-opts [children]
  (if (map? (first children))
    [(first children) (rest children)]
    [{} children]))

(defn ^:no-doc strip-meta [form]
  (postwalk (fn [x]
              (if (meta x)
                (with-meta x nil)
                x))
            form))

;; TODO make this a gensym hardcoded...
(defn render [form]
  (clerk/with-viewer
    {:render-fn
     (list 'fn ['_] (strip-meta form))}
    ;; TODO nil?
    {}))

(defn ^:no-doc tagged
  ([v] (tagged v render))
  ([v viewer]
   (with-meta v {::clerk/viewer viewer})))

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

;; ## Viewers

(def tabbed-viewer
  {:name `tabbed-viewer
   ;; TODO do this nastiness in the transform-fn, not here!
   :render-fn
   '(let [->ks (fn [pairs]
                 (mapv
                  (fn [{value :nextjournal/value}]
                    (:nextjournal/value (nth value 0)))
                  pairs))
          ->m  (fn [pairs]
                 (into {}
                       (map
                        (fn [{value :nextjournal/value}]
                          [(:nextjournal/value (nth value 0))
                           (nth value 1)]))
                       pairs))]
      (fn [pairs opts]
        (reagent.core/with-let
          [ks (->ks pairs)
           m  (->m pairs)
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
           [nextjournal.clerk.viewer/inspect-presented (get m @!k)]])))})

(defn multi [m]
  (clerk/with-viewer tabbed-viewer m))
