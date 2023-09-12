(ns emmy.viewer.plot-test
  (:require [clojure.test :refer [is deftest testing]]
            [emmy.viewer.plot :as plot]))

(deftest format-tests
  (testing "format-number"
    (is (= "123" (plot/format-number 123)))
    (is (= "123.10" (plot/format-number 123.1))
        "Any decimal part triggers the default precision of 2.")

    (is (= "123" (plot/format-number 123.001))
        "If the precision leaves nothing after the decimal point, prints as an
        integer.")

    (is (= "123.11" (plot/format-number 123.11)))
    (is (= "123.11" (plot/format-number 123.111))
        "decimals are truncated to 2 by default")

    (is (= "123.667" (plot/format-number 123.6666 3))
        "Supplying `n` rounds the input number to that many decimal places."))

  (testing "label-pi"
    (is (= "0"      (plot/label-pi 0)))
    (is (= "0"      (plot/label-pi -0)))
    (is (= "π"      (plot/label-pi Math/PI)))
    (is (= "-π"     (plot/label-pi (- Math/PI))))
    (is (= "1.34π"  (plot/label-pi (* 1.34123 Math/PI) 2)))
    (is (= "1.30π"  (plot/label-pi (* 1.3 Math/PI) 2)))
    (is (= "π"      (plot/label-pi (* 1.001 Math/PI) 2)))
    (is (= "1.001π" (plot/label-pi (* 1.001 Math/PI) 3)))))
