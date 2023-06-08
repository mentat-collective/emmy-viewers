(ns emmy.mathbox.primitives
  (:refer-clojure :exclude [format repeat vector])
  (:require [emmy.viewer :as ev]))

(defn group [opts & children]
  (into ['mathbox.primitives.base/Group opts] children))

(defn inherit [opts & children]
  (into ['mathbox.primitives.base/Inherit opts] children))

(defn unit [opts & children]
  (into ['mathbox.primitives.base/Unit opts] children))

(defn camera [opts]
  ['mathbox.primitives.camera/Camera opts])

(defn area [opts]
  ['mathbox.primitives.data/Area opts])

(defn array [opts]
  ['mathbox.primitives.data/Array opts])

(defn interval [opts]
  ['mathbox.primitives.data/Interval opts])

(defn matrix [opts]
  ['mathbox.primitives.data/Matrix opts])

(defn scale [opts]
  ['mathbox.primitives.data/Scale opts])

(defn volume [opts]
  ['mathbox.primitives.data/Volume opts])

(defn voxel [opts]
  ['mathbox.primitives.data/Voxel opts])

(defn axis [opts]
  ['mathbox.primitives.draw/Axis opts])

(defn face [opts]
  ['mathbox.primitives.draw/Face opts])

(defn grid [opts]
  ['mathbox.primitives.draw/Grid opts])

(defn line [opts]
  ['mathbox.primitives.draw/Line opts])

(defn point [opts]
  ['mathbox.primitives.draw/Point opts])

(defn strip [opts]
  ['mathbox.primitives.draw/Strip opts])

(defn surface [opts]
  ['mathbox.primitives.draw/Surface opts])

(defn ticks [opts]
  ['mathbox.primitives.draw/Ticks opts])

(defn vector [opts]
  ['mathbox.primitives.draw/Vector opts])

(defn clamp [opts]
  ['mathbox.primitives.operator/Clamp opts])

(defn grow [opts]
  ['mathbox.primitives.operator/Grow opts])

(defn join [opts]
  ['mathbox.primitives.operator/Join opts])

(defn lerp [opts]
  ['mathbox.primitives.operator/Lerp opts])

(defn memo [opts]
  ['mathbox.primitives.operator/Memo opts])

(defn readback [opts]
  ['mathbox.primitives.operator/Readback opts])

(defn repeat [opts]
  ['mathbox.primitives.operator/Repeat opts])

(defn resample [opts]
  ['mathbox.primitives.operator/Resample opts])

(defn slice [opts]
  ['mathbox.primitives.operator/Slice opts])

(defn split [opts]
  ['mathbox.primitives.operator/Split opts])

(defn spread [opts]
  ['mathbox.primitives.operator/Spread opts])

(defn subdivide [opts]
  ['mathbox.primitives.operator/Subdivide opts])

(defn swizzle [opts]
  ['mathbox.primitives.operator/Swizzle opts])

(defn transpose [opts]
  ['mathbox.primitives.operator/Transpose opts])

(defn dom [opts]
  ['mathbox.primitives.overlay/Dom opts])

(defn html [opts]
  ['mathbox.primitives.overlay/Html opts])

(defn move [opts & children]
  (into ['mathbox.primitives.present/Move opts] children))

(defn play [opts]
  ['mathbox.primitives.present/Play opts])

(defn present [opts & children]
  (into ['mathbox.primitives.present/Present opts] children))

(defn reveal [opts & children]
  (into ['mathbox.primitives.present/Reveal opts] children))

(defn slide [opts & children]
  (into ['mathbox.primitives.present/Slide opts] children))

(defn step [opts]
  ['mathbox.primitives.present/Step opts])

(defn compose [opts]
  ['mathbox.primitives.rtt/Compose opts])

(defn rtt [opts & children]
  (into ['mathbox.primitives.rtt/Rtt opts] children))

(defn shader [opts]
  ['mathbox.primitives.shader/Shader opts])

(defn format [opts]
  ['mathbox.primitives.text/Format opts])

(defn label [opts]
  ['mathbox.primitives.text/Label opts])

(defn retext [opts]
  ['mathbox.primitives.text/Retext opts])

(defn text [opts]
  ['mathbox.primitives.text/Text opts])

(defn clock [opts & children]
  (into ['mathbox.primitives.time/Clock opts] children))

(defn now [opts & children]
  (into ['mathbox.primitives.time/Now opts] children))

(defn fragment [opts & children]
  (into ['mathbox.primitives.transform/Fragment opts] children))

(defn layer [opts & children]
  (into ['mathbox.primitives.transform/Layer opts] children))

(defn mask [opts & children]
  (into ['mathbox.primitives.transform/Mask opts] children))

(defn transform [opts & children]
  (into ['mathbox.primitives.transform/Transform opts] children))

(defn transform4 [opts & children]
  (into ['mathbox.primitives.transform/Transform4 opts] children))

(defn vertex [opts & children]
  (into ['mathbox.primitives.transform/Vertex opts] children))

(defn cartesian
  "TODO is this default viewer a good idea?"
  [opts & children]
  (ev/tagged
   (into ['mathbox.primitives.view/Cartesian opts] children)
   #(ev/render
     ['mathbox.core/MathBox {}
      %])))

(defn cartesian4 [opts & children]
  (into ['mathbox.primitives.view/Cartesian4 opts] children))

(defn polar [opts & children]
  (into ['mathbox.primitives.view/Polar opts] children))

(defn spherical [opts & children]
  (into ['mathbox.primitives.view/Spherical opts] children))

(defn stereographic [opts & children]
  (into ['mathbox.primitives.view/Stereographic opts] children))

(defn stereographic4 [opts & children]
  (into ['mathbox.primitives.view/Stereographic4 opts] children))

(defn view [opts & children]
  (into ['mathbox.primitives.view/View opts] children))
