^{:nextjournal.clerk/visibility {:code :hide}}
(ns examples.power-series
  {:nextjournal.clerk/toc true}
  (:require [emmy.env :refer :all]
            [emmy.clerk :as ec]))

;; ## TeX Rendering

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

(->TeX (sin 'x))
