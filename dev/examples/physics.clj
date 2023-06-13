^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.physics
  #:nextjournal.clerk
  {:toc true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.mafs.core]
            [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.viewer :as ev]
            [nextjournal.clerk :as clerk]))

{::clerk/width :wide}

;; ## Server-Side Mafs

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)


#_(ev/with-let [!state {"l" "v"}]
    `@~!state)
