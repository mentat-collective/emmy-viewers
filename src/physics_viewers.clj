(ns physics-viewers
  (:refer-clojure
   :exclude [+ - * / = zero? compare
             numerator denominator ref partial])
  (:require [nextjournal.clerk :as clerk]
            [pattern.rule :refer [template]]
            [sicmutils.env :as e]
            [sicmutils.expression.compile :as xc]))

(def physics-xform
  (memoize
   (fn [{:keys [initial-state] :as m}]
     (let [compile #(binding [xc/*mode* :source]
                      (xc/compile-state-fn*
                       (fn [] %)
                       []
                       initial-state
                       {:flatten? false
                        :generic-params? false}))]
       (-> (update m :L
                   (fn [L]
                     (compile (e/Lagrangian->state-derivative L))))
           (update :state->xyz compile))))))

(defn physics-viewer [mb-sym]
  {:fetch-fn (fn [_ x] x)
   :transform-fn physics-xform
   :render-fn
   (template
    (fn [value]
      (v/html
       (reagent/with-let
         [!ref   (reagent/atom nil)
          !local (reagent/atom (:initial-state value))]
         (when value
           [:div {:id "mathbox"
                  :style {:height "400px" :width "100%"}
                  :ref
                  (fn [el]
                    (when el
                      (mb/sync!
                       el !ref value
                       mb/basic-setup
                       (fn [mathbox]
                         (~mb-sym mathbox value !local)))))}])))))})

;; Here was a crazy experiment...

(defn interactive-physics-viewer
  [mb-sym init]
  {:fetch-fn (fn [_ x] x)
   :transform-fn
   (fn [{::clerk/keys [var-from-def]}]
     {:var-name (symbol var-from-def)
      ;; don't make it keep rebuilding, yikes!!
      :value init
      #_(physics-xform @@var-from-def)})
   :render-fn
   (template
    (fn [{:keys [var-name value]}]
      (v/html
       (reagent/with-let
         [!ref   (reagent/atom ~init)
          !local (reagent/atom
                  (:initial-state ~init))]
         (when value
           [:div {:id "mathbox"
                  :style {:height "400px" :width "100%"}
                  :ref
                  (fn [el]
                    (when el
                      (mb/sync-once!
                       el (atom ~init) ~init #_value
                       mb/basic-setup
                       (fn [mathbox]
                         (~mb-sym
                          mathbox ~init !local var-name)))))}])))))})
