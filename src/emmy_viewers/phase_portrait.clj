^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns emmy-viewers.phase-portrait
  (:require [nextjournal.clerk :as clerk]
            [mentat.clerk-utils.show :refer [show-sci]]))

;; ## Phase Portrait

;; TODO move all of the business into here and make this a cljc file.

^{::clerk/width :wide
  ::clerk/visibility {:code :hide}}
(show-sci
 [demo.mathbox/Hamilton])
