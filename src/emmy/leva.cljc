(ns emmy.leva
  "Server-side rendering functions for the components declared in the
  [`leva.core`](https://cljdoc.org/d/org.mentat/leva.cljs/CURRENT/api/leva.core)
  namespace of the [`Leva.cljs` project](https://leva.mentat.org)."
  (:require [emmy.viewer :as ev]))

;; ## Special Inputs

(defn button
  "Given a quoted ClojureScript function `on-click` and a map `opt` of options,
  returns a client-side fragment that generates a schema entry defining a
  button.

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
  "Returns a client-side fragment that generates a schema entry defining a button group,
  given either

  - a label and a map of `{<string> '(fn [get] ,,,)}` where the `fn` is a quoted
    ClojureScript function
  - only the map

  Where `get` is of type `string => value`, and allows you to query the internal
  leva store.

  Feel free to ignore `get` and query the stateful atom associated with
  this [[controls]] instance from the value function."
  ([opts]
   (list 'leva.core/button-group opts))
  ([label opts]
   (list 'leva.core/button-group label opts)))

(defn monitor
  "Returns a client-side fragment that generates a schema entry defining a
  \"monitor\", given as a first argument either

  - a no-arg (quoted ClojureScript) function that returns a number, or
  - a symol referencing a react `MutableRefObject` returned by `useRef`,
    where `(.-current ref)` returns a number

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
  client-side fragment that generates a schema entry wrapping `schema` in a
  subfolder.

  The supported (optional) settings are

  - `:collapsed`: if true, the folder will be collapsed on initial render.
    Defaults to false.

  - `:render`: quoted ClojureScript function of hte form `(fn [get] <boolean>)`,
    providing dynamic control or whether or not the folder appears.

      `get` is of type `string => value`, and allows you to query the internal
      leva store. If the `:render` fn returns true, this folder will be rendered in
      the panel; if false it won't render.

  - `:color`: color string, sets the color of the folder title.

  - `:order`: number, sets the order of this folder relative to other components
    at the same level."
  ([schema]
   (list 'leva.core/folder schema))
  ([schema settings]
   (list 'leva.core/folder schema settings)))

;; ## Components

(defn config
  "Returns a fragment that configures a Leva panel with the supplied map of `opts`
  without explicitly rendering any inputs into it.

  If `:store` is not provided, configures the globally available Leva panel.

  See the
  type [`LevaRootProps`](https://github.com/pmndrs/leva/blob/main/packages/leva/src/components/Leva/LevaRoot.tsx#L13-L93)
  for a full list of available entries for `opts` and documentation for each.

  You can pass any number of `children` components if you like for
  organizational purposes.

  If you pass `:store`, any [[controls]] component in `children` will use that
  store vs the store of the global panel.

  NOTE: We recommend using [[sub-panel]] to declare non-global Leva panels,
  rather than worrying about creating and passing your own Leva store via
  `:store`. But for advanced use cases, please feel free!"
  [opts & children]
  (ev/fragment
   (into ['leva.core/Config opts] children)))

(defn sub-panel
  "Returns a fragment that will configure a non-global, standalone Leva panel with
  the supplied map of `opts`.

  Any instance of [[controls]] passed as `children` will render into this
  subpanel and not touch the global store.

  See the
  type [`LevaRootProps`](https://github.com/pmndrs/leva/blob/main/packages/leva/src/components/Leva/LevaRoot.tsx#L13-L93)
  for a full list of available entries for `opts` and documentation for each."
  [opts & children]
  (ev/fragment
   (into ['leva.core/SubPanel opts] children)))

(defn controls
  "Returns a fragment that will render inputs into a global or local Leva control
  panel, possibly synchronizing the panel's state into a provided atom.

  Placing this component anywhere in the render tree will add controls to the
  global Leva panel.

  To modify a local Leva panel, nest this component inside of a [[sub-panel]].

  Supported `opts` are:

  - `:schema`: A leva schema definition. Any value _not_ present in the supplied
    `:atom` should provide an `:onChange` handler.

  - `:atom`: symbol referencing an atom of key => initial value for schema
    entries. Any entry found in both `:atom` and in `:schema` will remain
    synchronized between the panel and the supplied `:atom`.

  - `:folder`: optional map with optional keys `:name` and `:settings`:

    - `:name`: if provided, these controls will be nested inside of a folder
      with this name.

    - `:settings`: optional map customizing the folder's settings.
      See [[folder]] for a description of the supported options."
  [opts]
  (ev/fragment
   ['leva.core/Controls opts]))
