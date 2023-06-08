^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy-viewers.leva
  #:nextjournal.clerk
  {:toc true :no-cache true}
  (:require [emmy.clerk :as ec]
            [emmy.leva :as leva]
            [emmy.viewer :as ev]
            [nextjournal.clerk :as-alias clerk]))

;; # Leva Demo

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; This control panel is summoned into existence by this server-side value:

(ev/with-let [!synced {:number 10
                       :color {:r 10 :g 12 :b 4}
                       :string "Hi!"
                       :point {:x 1 :y 1}}]
  [:<>
   (ec/inspect-state !synced)
   (leva/controls
    {:folder {:name "Quickstart!"}
     :atom !synced})])
