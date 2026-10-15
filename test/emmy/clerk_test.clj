(ns emmy.clerk-test
  (:require [clojure.test :refer [deftest is testing]]
            [emmy.clerk :as ec]
            [emmy.env :as e]
            [nextjournal.clerk.viewer :as viewer]))

(defn- tex-string
  "Returns the TeX source string wrapped by a Clerk TeX viewer value."
  [v]
  (viewer/->value v))

(deftest ->TeX-tests
  (let [expr (e/+ 'x 'x)]
    (testing "without :simplify?, renders the original expression"
      (is (= (str (e/->TeX expr))
             (tex-string (ec/->TeX expr))))
      (is (= (tex-string (ec/->TeX expr))
             (tex-string (ec/->TeX expr :simplify? false)))))

    (testing ":simplify? true renders the simplified expression"
      (is (= (str (e/->TeX (e/simplify expr)))
             (tex-string (ec/->TeX expr :simplify? true))))
      (is (not= (tex-string (ec/->TeX expr))
                (tex-string (ec/->TeX expr :simplify? true)))))

    (testing "the result is a Clerk TeX viewer value"
      (is (= (viewer/->viewer (viewer/tex "x"))
             (viewer/->viewer (ec/->TeX expr)))))))

(deftest tex?-tests
  (testing "plain values are never TeX-wrapped"
    (is (false? (boolean (ec/tex? "x"))))
    (is (false? (boolean (ec/tex? 'x))))
    (is (false? (boolean (ec/tex? (e/+ 'x 'y))))))

  (if-let [render-tex? (resolve 'emmy.expression.render/tex?)]
    (testing "agrees with emmy.expression.render/tex? when Emmy ships it"
      (let [wrapped (e/->TeX 'x)]
        (is (= (boolean (@render-tex? wrapped))
               (boolean (ec/tex? wrapped))))))
    (testing "degrades to a constant false when Emmy lacks render/tex?"
      (is (false? (ec/tex? (e/->TeX 'x)))))))

(deftest tex-viewer-tests
  (let [wrapped (reify Object (toString [_] "x^{2}"))
        out     (viewer/->value
                 ((:transform-fn ec/tex-viewer) (viewer/ensure-wrapped wrapped)))]
    (is (= "x^{2}" (tex-string out))
        "renders the string form of the wrapped value as TeX")))

(deftest install!-tests
  (testing "install! registers tex-viewer after literal-viewer"
    (let [captured (atom nil)]
      (with-redefs [viewer/add-viewers! (fn [vs] (reset! captured vs))]
        (ec/install!))
      (let [names (mapv :name @captured)]
        (is (= `ec/meta-viewer (first names)))
        (is (= [`ec/literal-viewer `ec/tex-viewer]
               (take-last 2 names)))))))
