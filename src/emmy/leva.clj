(ns emmy.leva
  (:require [emmy.viewer :as ev]))

;; TODO update docstrings for special components, get examples in

;; ## Special Inputs

(defn button
  "Returns a schema entry that defines a button, given a function `on-click` and a
  map `opt` of options.

  The `opts` allowed are any found in the types

  - [`ButtonSettings`](https://github.com/pmndrs/leva/blob/33b2d9948818c5828409e3cf65baed4c7492276a/packages/leva/src/types/public.ts#L47)
  - [`GenericSchemaItemOptions`](https://github.com/pmndrs/leva/blob/33b2d9948818c5828409e3cf65baed4c7492276a/packages/leva/src/types/public.ts#L144-L149)

  In [public.ts](https://github.com/pmndrs/leva/blob/33b2d9948818c5828409e3cf65baed4c7492276a/packages/leva/src/types/public.ts)
  in [Leva's repository](https://github.com/pmndrs/leva). "
  ([on-click]
   (button on-click {}))
  ([on-click opts]
   (list 'leva.core/button on-click opts)))

(defn button-group
  "Returns a schema entry that defines a button group, given either

  - a label and a map of `{<string> (fn [get] ,,,)}`
  - only the map

  Where `get` is of type `string => value`, and allows you to query the internal
  leva store.

  Feel free to ignore `get` and query the stateful atom associated with
  this [[Controls]] instance from the value function."
  ([opts]
   (list 'leva.core/button-group opts))
  ([label opts]
   (list 'leva.core/button-group label opts)))

(defn monitor
  "Returns a schema entry that defines a \"monitor\", given as a first argument
  either

  - a no-arg function that returns a number, or
  - a react `MutableRefObject` returned by `useRef`, where `(.-current ref)`
    returns a number

  and an optional settings map as a second argument. The supported (optional)
  settings are

  - `:graph`: if true, the returned monitor shows a graph. if false, the monitor
    displays a number.

  - `:interval`: the number of milliseconds to wait between queries of
    `object-or-fn`."
  ([object-or-fn]
   (list 'leva.core/monitor object-or-fn))
  ([object-or-fn settings]
   (list 'leva.core/monitor object-or-fn settings)))

(defn folder
  "Given a sub-schema `schema` and an optional map of folder `settings`, returns a
  schema entry that wraps `schema` in a subfolder.

  The supported (optional) settings are

  - `:collapsed` if true, the folder will be collapsed on initial render.
    Defaults to false.

  - `:render` (fn [get] <boolean>), providing dynamic control or whether or not
    the folder appears.

      `get` is of type `string => value`, and allows you to query the internal
      leva store. If the `:render` fn returns true, this folder will be rendered in
      the panel; if false it won't render.

  - `:color` color string, sets the color of the folder title.

  - `:order` number, sets the order of this folder relative to other components
    at the same level."
  ([schema]
   (list 'leva.core/folder schema))
  ([schema settings]
   (list 'leva.core/folder schema settings)))

;; ## Components

(defn config [opts & children]
  (ev/fragment
   (into ['leva.core/Config opts] children)))

(defn subpanel [opts & children]
  (ev/fragment
   (into ['leva.core/Subpanel opts] children)))

(defn controls [opts]
  (ev/fragment
   ['leva.core/Controls opts]))
