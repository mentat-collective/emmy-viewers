(ns emmy.mathlive.interpreter-test
  (:require [clojure.test :refer [is deftest testing]]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [emmy.complex :as c]
            [emmy.env :as e]
            [emmy.mathlive :as ml]
            [emmy.mathlive.interpreter :as i]
            [emmy.structure :as s]))

(deftest atom-tests
  (testing "numbers pass through"
    (is (= 1 (i/process 1)))
    (is (= 1.5 (i/process 1.5))))

  (testing "strings"
    (is (= 'x (i/process "x")))
    (is (= "hello" (i/process "'hello'")) "quoted strings are string literals")
    (is (= 'pi (i/process "Pi")))
    (is (= 'E (i/process "ExponentialE")))
    (is (= c/I (i/process "ImaginaryUnit"))))

  (testing "object forms"
    (is (= 1.5 (i/process {"num" "1.5"})))
    (is (= 12 (i/process {:num "12"})))
    (is (= 'x (i/process {"sym" "x"})))
    (is (= "s" (i/process {"str" "s"})))
    (is (= '(+ x 1) (i/process {"fn" ["Add" "x" 1]})))
    (is (= {"foo" 1} (i/process {"foo" 1})) "unknown maps are returned as-is")))

(deftest arithmetic-tests
  (is (= '(+ 1 x) (i/process ["Add" 1 "x"])))
  (is (= 3 (i/process ["Add" 1 2])) "numeric arguments are evaluated")
  (is (= '(- x 1) (i/process ["Subtract" "x" 1])))
  (is (= '(- x) (i/process ["Negate" "x"])))
  (is (= '(* 2 x) (i/process ["Multiply" 2 "x"])))
  (is (= '(/ 1 x) (i/process ["Divide" 1 "x"])))
  (is (= (e// 1 2) (i/process ["Rational" 1 2])))
  (is (= '(/ x 2) (i/process ["Half" "x"])))
  (is (= '(+ 1 (* 2 x)) (i/process ["Add" 1 ["Multiply" 2 "x"]])) "nesting")
  (is (= 3 (i/process ["Delimiter" ["Add" 1 2]])))
  (is (= '(= x 2) (i/process ["Equal" "x" 2]))))

(deftest power-tests
  (is (= '(expt x 2) (i/process ["Power" "x" 2])))
  (is (= 8 (i/process ["Power" 2 3])))
  (is (= '(exp x) (i/process ["Power" "ExponentialE" "x"])))
  (is (= '(sqrt x) (i/process ["Sqrt" "x"])))
  (is (= (list 'expt 'x (e// 1 3)) (i/process ["Root" "x" 3])))
  (is (= '(exp x) (i/process ["Exp" "x"])))
  (is (= '(log x) (i/process ["Ln" "x"])))
  (is (= '(/ (log x) (log 2)) (i/process ["Log" "x" 2])))
  (is (= '(/ (log x) (log 10)) (i/process ["Log" "x"]))))

(deftest trig-tests
  (doseq [[f sym] [["Sin" 'sin] ["Cos" 'cos] ["Tan" 'tan]
                   ["Arcsin" 'asin] ["Arccos" 'acos] ["Arctan" 'atan]
                   ["Sinh" 'sinh] ["Cosh" 'cosh]]]
    (is (= (list sym 'x) (i/process [f "x"])) f))

  (is (= '(/ (sinh x) (cosh x)) (i/process ["Tanh" "x"]))
      "operators Emmy expands symbolically are expanded")

  (testing "InverseFunction heads"
    (is (= '(asin x) (i/process [["InverseFunction" "Sin"] "x"])))
    (is (= '(acos x) (i/process [["InverseFunction" "Cos"] "x"])))
    (is (= '(atan x) (i/process [["InverseFunction" "Tan"] "x"])))))

(deftest application-tests
  (is (= '(f x y) (i/process ["f" "x" "y"]))
      "unknown heads become literal function applications")
  (is (= (s/up 1 'x) (i/process ["List" 1 "x"])))
  (is (= (s/up 'x 'y) (i/process ["Sequence" "x" "y"])))
  (is (= 'x (i/process ["Sequence" "x"])))
  (is (nil? (i/process ["Sequence"]))))

(deftest mathjson->expression-tests
  (is (= '(+ 1 x)
         (e/freeze (ml/mathjson->expression ["Add" 1 "x"]))))
  (is (= '(sin x)
         (e/freeze (e/simplify (ml/mathjson->expression ["Sin" "x"])))))
  (is (= '(up x 2)
         (e/freeze (ml/mathjson->expression ["List" "x" 2]))))
  (is (= 1 (e/freeze
            (e/simplify
             (ml/mathjson->expression
              ["Add"
               ["Power" ["Sin" "x"] 2]
               ["Power" ["Cos" "x"] 2]]))))
      "results take part in Emmy simplification"))

(def ^:private gen-int
  (gen/choose -1000 1000))

(defspec numeric-arithmetic-matches-emmy 100
  (prop/for-all [a gen-int b gen-int]
    (and (= (e/+ a b) (i/process ["Add" a b]))
         (= (e/- a b) (i/process ["Subtract" a b]))
         (= (e/* a b) (i/process ["Multiply" a b]))
         (= (e/- a) (i/process ["Negate" a])))))

(defspec divide-matches-emmy 100
  (prop/for-all [a gen-int
                 b (gen/such-that (complement zero?) gen-int)]
    (= (e// a b)
       (i/process ["Divide" a b])
       (i/process ["Rational" a b]))))

(defspec symbolic-add-is-literal-sum 100
  (prop/for-all [xs (gen/vector (gen/elements ["x" "y" "z"]) 2 5)]
    (= (e/simplify (apply e/+ (map symbol xs)))
       (e/simplify (ml/mathjson->expression (into ["Add"] xs))))))
