(ns emmy.viewer.kernel.schema
  "Malli contracts for the backend-neutral kernel domain, as uncompiled data.

  Enums derive from domain constants; backend names remain open. No global
  registry is installed. Instrumentation is scoped and reversible."
  (:require [emmy.viewer.kernel.backend :as backend]
            [emmy.viewer.kernel.plan :as plan]
            [malli.core :as m]
            [malli.instrument :as mi]))

(def Convention
  "A calling convention shared with Emmy's compiler."
  (into [:enum] plan/conventions))

(def Expr
  "A frozen Emmy expression, or its lowered form."
  [:or number? :symbol [:sequential :any]])

(def Shape
  "The tree with each leaf replaced by its index; nil for a scalar."
  [:schema {:registry {::shape [:or nat-int? [:vector [:ref ::shape]]]}}
   [:maybe ::shape]])

(def Plan
  "Everything the kernel decides about a function before backend lowering."
  [:map {:closed true}
   [:convention Convention]
   [:state [:vector :symbol]]
   [:state-shape Shape]
   [:params [:vector :symbol]]
   [:outputs [:vector Expr]]
   [:shape Shape]])

(def CompileOpts
  "Options of `emmy.expression.compile/compile-state-fn` read by the kernel.
  Open: other keys pass through to Emmy."
  [:map
   [:calling-convention {:optional true} Convention]
   [:generic-params? {:optional true} :boolean]
   [:simplify? {:optional true} :boolean]
   [:arity {:optional true} nat-int?]])

(def Dims
  "The cardinalities exposed by each runtime kernel."
  [:map [:state nat-int?] [:outputs nat-int?] [:params nat-int?]])

(def Backend
  "A registered keyword or any KernelBackend value; backend names are open."
  [:or :keyword [:fn #(satisfies? emmy.viewer.kernel.backend/KernelBackend %)]])

(m/=> emmy.viewer.kernel.plan/plan
      [:=> [:cat ifn? [:or false? [:sequential :any]] :any CompileOpts] Plan])

(m/=> emmy.viewer.kernel.backend/resolve-backend
      [:=> [:cat Backend]
       [:fn #(satisfies? emmy.viewer.kernel.backend/KernelBackend %)]])

(def ^:private nses
  '#{emmy.viewer.kernel.plan emmy.viewer.kernel.backend})

(defn instrument!
  "Instrument the kernel domain functions until [[unstrument!]]."
  []
  (mi/instrument! {:filters [(apply mi/-filter-ns nses)]}))

(defn unstrument!
  "Reverse [[instrument!]] for the kernel domain."
  []
  (mi/unstrument! {:filters [(apply mi/-filter-ns nses)]}))
