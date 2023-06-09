(ns emmy.portal
  "Functions for launching portal with Emmy-Viewers-specific viewers installed."
  (:require [clojure.java.io :as io]
            [emmy.viewer :as ev]
            [emmy.expression.render :as xr]
            [emmy.portal.deps :as deps]
            [portal.api :as p]))

(def viewers
  "Vector of paths to the cljs files in this project that declare Portal viewers.
  Each of these is intended to be evaluated in Portal's SCI context,
  via [[portal.api/eval-str]]."
  ["emmy/portal/tex.cljs"
   "emmy/portal/reagent.cljs"
   "emmy/portal/mafs.cljs"
   "emmy/portal/leva.cljs"])

(defn prepare!
  "Installs any npm dependencies specified by a `deps.cljs` file in some
  dependency. This will guarantee that the various viewers installed
  by [[install!]] will function.

  NOTE: You'll need to call this once when configuring your project, not on each
  invocation of [[start!]]."
  []
  (deps/npm-install!))

(defn install!
  "Given any number of `path`s, evaluates the `cljs` file at each path
  via [[portal.api/eval-str]].

  Given no arguments, installs all of the viewers specified in [[viewers]]."
  ([] (apply install! viewers))
  ([path]
   (-> (io/resource path)
       (slurp)
       (p/eval-str)))
  ([path & more]
   (run! install! (cons path more))))

(defn start!
  "Initializes Portal with all project-specific dependencies,
  calls [[clojure.core/add-tap]] with [[#'portal.api/submit]] and returns the
  result of [[portal.api/open]].

  `opts` can contain:

  - any [Portal option](https://github.com/djblue/portal#options)

  - `:emmy.portal/tex`: optional map of [KaTeX
    options](https://katex.org/docs/options.html)

  - `:emmy.portal/mafs`: `{:theme :default}` will assert the default theme for
    Mafs plots. No other options are currently supported."
  ([] (start! {}))
  ([opts]
   (let [p (p/open (assoc opts :on-load install!))]
     (p/register! #'ev/expand)
     (p/register! #'xr/->TeX)
     (add-tap #'p/submit)
     p)))
