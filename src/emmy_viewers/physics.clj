(ns emmy-viewers.physics
  (:require [nextjournal.clerk :as clerk]
            [emmy.env :as e]
            [emmy.expression.compile :as xc]))

(def opts
  ;; same as basic setup.
  {:container {:style {:height "400px" :width "100%"}}
   :renderer  {:background-color 0xffffff}})

(def physics-xform-fn
  (memoize
   (fn [{:keys [initial-state] :as m}]
     (let [compile #(binding [xc/*mode* :source]
                      (xc/compile-state-fn*
                       (fn [] %)
                       []
                       initial-state
                       {:flatten? false
                        :mode js
                        :generic-params? false}))]
       (-> (update m :L
                   (fn [L]
                     (compile (e/Lagrangian->state-derivative L))))
           (update :state->xyz compile))))))

(def physics-xform
  (comp clerk/mark-presented
        (clerk/update-val physics-xform-fn)))

;; Here was a crazy experiment...

(defn interactive-physics-xform-fn [init]
  (fn [{::clerk/keys [var-from-def]}]
    {:var-name (symbol var-from-def)
     ;; don't make it keep rebuilding, yikes!!
     :value init
     #_(physics-xform-fn @@var-from-def)}))

(defn interactive-physics-xform
  "pass in the already transformed!!"
  [init]
  (comp clerk/mark-presented
        (clerk/update-val
         (interactive-physics-xform-fn init))))
