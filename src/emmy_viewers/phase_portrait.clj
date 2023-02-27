^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns emmy-viewers.phase-portrait
  (:require [nextjournal.clerk :as clerk]
            [mentat.clerk-utils.show :refer [show-sci]]))

;; ## Phase Portrait

^{::clerk/width :wide
  ::clerk/visibility {:code :hide}}

(show-sci
 [demo.mathbox/Hamilton])
