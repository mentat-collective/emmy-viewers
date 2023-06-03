^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy.viewer
  "Namespace containing viewer utilities..."
  {:nextjournal.clerk/toc true}
  (:refer-clojure :exclude [get get-in])
  (:require [nextjournal.clerk :as-alias clerk]))

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

;; ## Viewers

;; This will hold a reference to the viewer that we want IF Clerk is loaded. See
;; below...
(defonce ^:no-doc reagent-viewer nil)

(defn expand [v]
  (let [xform (-> v meta :nextjournal.clerk/viewer)]
    (if (fn? xform)
      (expand (xform v))
      v)))

(defn ^:no-doc fragment
  ([v] (fragment v nil))
  ([v viewer-or-xform]
   ;; TODO keep it tidy! don't asoc key if we don't need it.
   (vary-meta v assoc
              :portal.viewer/reagent? true
              :portal.viewer/default :emmy.portal.viewer/reagent
              ::clerk/viewer (or viewer-or-xform reagent-viewer))

   #_(if-let [form (or viewer-or-xform reagent-viewer)]
       (vary-meta v assoc ::clerk/viewer form)
       v)))

;; ## State Utilities

(defn get [sym path]
  (cond (symbol? sym) (list 'clojure.core/get
                            (list 'clojure.core/deref sym)
                            path)
        (map? sym)    (get sym path)
        :else         (get @sym path)))

(defn get-in [sym path]
  (cond (symbol? sym) (list 'clojure.core/get-in
                            (list 'clojure.core/deref sym)
                            path)
        (map? sym)    (get-in sym path)
        :else         (get-in @sym path)))

(defn with-state [init f]
  (let [sym  (gensym)
        body (f sym)]
    (-> (list 'reagent.core/with-let
              [sym (list 'reagent.core/atom init)]
              (vary-meta body dissoc ::clerk/viewer))
        (fragment
         (::clerk/viewer (meta body))))))

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
