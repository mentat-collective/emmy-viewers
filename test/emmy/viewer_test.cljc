(ns emmy.viewer-test
  (:require [clojure.test :refer [is deftest]]
            [emmy.expression.analyze :as a]
            [emmy.viewer :as v]))

(deftest with-let-tests
  (with-redefs [gensym (a/monotonic-symbol-generator 1 "x")]
    (is (= '(reagent.core/with-let [x1 (reagent.core/atom {:k "v"})]
              (reagent.core/with-let [x2 (reagent.core/atom {:k2 "v2"})]
                (clojure.core/merge
                 (clojure.core/deref x1)
                 (clojure.core/deref x2))))
           (v/with-let [a {:k "v"}
                        c {:k2 "v2"}]
             `(merge @~a @~c)))
        "with-let generates nested binding levels.")))
