(ns emmy.viewer.raster.schema
  "Malli contracts of raster lowering and glue, as uncompiled malli data.

  Domain plans and expressions live in [[emmy.viewer.kernel.schema]]. Function
  contracts are inert until [[instrument!]] turns them on for a scoped,
  reversible run. No registry is installed globally."
  (:require [emmy.viewer.raster.glue :as glue]
            [emmy.viewer.raster.lower :as lower]
            [emmy.viewer.kernel.schema :as kernel-schema]
            [malli.core :as m]
            [malli.instrument :as mi]))

(def KernelForm
  "The source of one `raster.core/deftm` kernel."
  [:and seq? [:fn #(= 'raster.core/deftm (first %))]])

(def Module
  "A wasm module as base64."
  :string)

(m/=> emmy.viewer.raster.lower/lower
      [:=> [:cat [:sequential :symbol] kernel-schema/Expr] kernel-schema/Expr])

(m/=> emmy.viewer.raster.lower/kernel-form
      [:=> [:cat :symbol kernel-schema/Plan] KernelForm])

(m/=> emmy.viewer.raster.glue/glue
      [:=> [:cat kernel-schema/Plan Module :boolean] :string])

(def ^:private nses
  '#{emmy.viewer.raster.lower emmy.viewer.raster.glue})

(defn instrument!
  "Checks calls to raster lowering and glue until [[unstrument!]]."
  []
  (mi/instrument! {:filters [(apply mi/-filter-ns nses)]}))

(defn unstrument!
  "Reverses [[instrument!]] for raster lowering and glue."
  []
  (mi/unstrument! {:filters [(apply mi/-filter-ns nses)]}))
