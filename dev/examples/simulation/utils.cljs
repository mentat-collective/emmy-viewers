(ns examples.simulation.utils
  (:require [emmy.numerical.ode :as ode]
            [emmy.viewer.components.stopwatch :as sw]
            [mathbox.primitives :as mb]))

;; ## Simulation

(defn Lagrangian-updater
  "hardcoded at first for this use case."
  ([state-derivative initial-state]
   (Lagrangian-updater state-derivative initial-state {}))
  ([state-derivative initial-state {:keys [parameters]}]
   (let [flat-initial-state (flatten initial-state)
         ;; TODO get around the deref
         equations (if (implements? IAtom parameters)
                     (fn [_ ys yps]
                       (state-derivative
                        ys yps (.-state parameters)))
                     (fn [_ ys yps]
                       (state-derivative ys yps parameters)))]
     (ode/stream-integrator equations 0 flat-initial-state {:js? true}))))

(defn Evolve
  "ODE State evolving component."
  [{f' :f'
    !state  :atom
    !params :params}]

  ;; TODO can I make an "animating" wrapper for mathbox, a similar
  ;; component version?
  ;;
  ;; TODO wire generic params into Lagrangian updater.
  ;;
  ;; TODO can I do `:params {:atom :keys}`?
  (let
      ;; TODO how can I wire in an array and have it not cause a re-render??
      [state-deriv (apply js/Function f')
       update      (Lagrangian-updater state-deriv
                                       (:state @!state)
                                       {:parameters !params})]
    (fn [_]
      [sw/Stopwatch
       {:onTick
        (fn [seconds]
          ;; TODO can we keep the output here mutable and provide an out to
          ;; update?
          (swap! !state assoc
                 :time  seconds
                 :state (update seconds)))}])))

;; ## Visual Things

(defn Tail [{:keys [length] :as opts}]
  [:<>
   [mb/Spread {:height [0 0 -0.02] :alignHeight -1}]
   ;; Ah, this is the color channel, and fades out the tail as you go.
   [mb/Array
    {:width length
     :channels 4
     :expr (fn [emit i]
             (emit 1 1 1 (- 1 (/ i 16))))}]
   [mb/Transpose {:order "zxy"}]
   [mb/Point
    (-> (dissoc opts :length)
        (assoc :points "<<<"
               :colors "<"))]])

(defn Comet
  "Path is a function of i, t
  dimensions is how many you want to emit
  history is tail length,
  rest of options go to the final point

  Note that i think we have to emit with xzy?? weird..."
  [{:keys [dimensions path length items]
    :or {items 1}
    :as opts}]
  [:<>
   [mb/Array
    {:history length
     :items items
     :channels dimensions
     :expr path}]
   [Tail
    (dissoc opts :dimensions :path :items)]])
