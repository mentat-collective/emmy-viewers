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

(ev/with-let
  [!synced {:number 10
            :color {:r 10 :g 12 :b 4}
            :string "Hi!"
            :point {:x 1 :y 1}}]
  [:<>
   (ec/inspect-state !synced)
   (leva/controls
    {:folder {:name "Quickstart!"}
     :atom !synced})])

;; Here are some examples of sub-schema:

(ev/fragment
 [:div {:style {:width "60%" :margin "auto"}}
  (leva/sub-panel
   {:fill true :titleBar {:drag false}}
   (leva/controls
    {:schema
     {:group
      (leva/button-group
       "Meal Choice"
       {"Meat" '#(js/alert "Meat!")
        "Potatoes" '#(js/alert "Potatoes!")
        "Cabbage" '#(js/alert "Cabbage!")})}}))])

(ev/with-let [!local {:number 7}]
  [:div {:style {:width "60%" :margin "auto"}}
   (leva/sub-panel
    {:fill true :titleBar {:drag false}}
    (leva/controls
     {:folder {:name "Outer Folder"}
      :atom !local
      :schema
      {:number {:order -1}
       "Yellow Subfolder"
       (leva/folder
        {:button (leva/button
                  '(fn []
                     (js/alert
                      "Button pressed!")))
         :group  (leva/button-group
                  {"1px" '#(js/alert "1px")
                   "2px" '#(js/alert "2px")})
         "Number Monitor" (leva/monitor
                           `(fn [] ~(ev/get !local :number))
                           {:graph true
                            :interval 30})}
        {:color "yellow"})}}))])
