(ns emmy.viewer.compile-test
  "The compile side of the Kernel contract in ClojureScript, the path Portal
  uses: the :js backend plans a function (emmy.viewer.kernel.plan is cljc) and
  emits the adapter around Emmy's :js function."
  (:require [cljs.test :refer [deftest is testing]]
            [emmy.env :as e]
            [emmy.viewer.compile :as vc]
            [emmy.viewer.kernel.backend :as backend]
            [emmy.viewer.kernel.plan :as plan]))

(deftest plan-in-cljs
  (let [p (plan/plan (fn [[x y]] (e/up x (e/* x y))) false [0 0] {})]
    (is (= :structure (:convention p)))
    (is (= 2 (count (:state p))))
    (is (= [0 1] (:state-shape p)))
    (is (= [0 1] (:shape p)))))

(deftest js-backend-form-in-cljs
  (let [form (vc/compiled-fn (fn [x] (e/* x x)) false [0]
                             {:calling-convention :native :arity 1})
        [[ctor arg adapter] [inner-ctor]] form]
    (testing "the :js kernel form wraps Emmy's js/Function in the contract adapter"
      (is (= 'js/Function. ctor))
      (is (= "fb" arg))
      (is (re-find #"fb\.batch = function" adapter))
      (is (re-find #"fb\.dims = \{state: 1, outputs: 1, params: 0\}" adapter))
      (is (= 'js/Function. inner-ctor)))))

(deftest js-backend-registered-in-cljs
  (is (satisfies? backend/KernelBackend (backend/resolve-backend :js))))
