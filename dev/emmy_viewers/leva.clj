^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy-viewers.leva
  #:nextjournal.clerk
  {:toc true :no-cache true}
  (:require [emmy.leva.core :as leva]
            [emmy.viewer :as ev]))

;; # Leva Demo

(ev/install!)

;; This control panel is summoned into existence by this server-side value:

(ev/with-let
  [!synced {:number 10
            :color {:r 10 :g 12 :b 4}
            :string "Hi!"
            :point {:x 1 :y 1}}]
  [:<>
   (ev/inspect-state !synced)
   (leva/controls
    {:folder {:name "Quickstart!"}
     :atom !synced})])
