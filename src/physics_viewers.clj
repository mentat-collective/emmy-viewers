(ns physics-viewers
  (:require [nextjournal.clerk :as clerk]
            [sicmutils.env :as e]
            [sicmutils.expression.compile :as xc]))

(def opts
  ;; same as basic setup.
  {:style {:height "400px" :width "100%"}
   :init {:background-color 0xffffff
          :camera-position [2.3 1 2]}})

(def physics-xform-fn
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
                     (compile
                      (e/Lagrangian->state-derivative L))))
           (update :state->xyz compile))))))

(def physics-xform
  (comp clerk/mark-presented
        (clerk/update-val physics-xform-fn)))

;; Here was a crazy experiment...

(defn interactive-physics-xform-fn [sym]
  (fn [init]
    {:var-name sym
     :value (physics-xform-fn init)}))

(defn interactive-physics-xform [sym]
  (comp clerk/mark-presented
        (clerk/update-val
         (interactive-physics-xform-fn sym))))
