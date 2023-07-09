^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy-viewers.notebook
  #:nextjournal.clerk{:toc true :no-cache true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.leva :as leva]
            [emmy.mafs :as mafs]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]
            [mentat.clerk-utils.docs :as docs]
            [nextjournal.clerk :as clerk]))

{:nextjournal.clerk/width :wide}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; # Emmy-Viewers
;;
;; A library of functions for building high-performance interactive symbolic
;; representations and 2D and 3D mathematical scenes powered by
;; the [Emmy](https://github.com/mentat-collective/emmy) computer algebra
;; system.

^{::clerk/visibility {:code :hide}}
(clerk/html
 [:<>
  [:center
   (clerk/md
    "[![Build Status](https://github.com/mentat-collective/emmy/actions/workflows/kondo.yml/badge.svg?branch=main)](https://github.com/mentat-collective/emmy/actions/workflows/kondo.yml)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mentat-collective/emmy/blob/main/LICENSE)
[![cljdoc badge](https://cljdoc.org/badge/org.mentat/emmy-viewers)](https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT)
[![Clojars Project](https://img.shields.io/clojars/v/org.mentat/emmy-viewers.svg)](https://clojars.org/org.mentat/emmy-viewers)
[![Discord Shield](https://img.shields.io/discord/731131562002743336?style=flat&colorA=000000&colorB=000000&label=&logo=discord)](https://discord.gg/hsRBqGEeQ4)")]])
;;
;; </div>
;;
;; > The interactive documentation on this page was generated
;; > using [Clerk](https://github.com/nextjournal/clerk). Follow
;; > the [instructions in the
;; > README](https://github.com/mentat-collective/emmy/tree/main#interactive-documentation-via-clerk)
;; > to run and modify this notebook on your machine!
;; >
;; > See the [Github
;; > project](https://github.com/mentat-collective/emmy-viewers) for more
;; > details, and the [cljdoc
;; > page](https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT/doc/readme) for
;; > detailed API documentation.
;;
;; ## What is Emmy-Viewers?
;;
;; Emmy-Viewers is a library of tools for visually rendering mathematical
;; objects found in the [Emmy](https://github.com/mentat-collective/emmy)
;; computer algebra system. These tools allow you to build interactive scenes
;; for exploring physical and mathematical worlds.
;;
;; The first example uses the functions in
;; the [`emmy.mafs`](https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT/api/emmy.mafs)
;; namespace to plot
;;
;; - `((cube D) tanh)`, the third derivative of the [hyperbolic tangent
;;   function](https://mathworld.wolfram.com/HyperbolicTangent.html), shifted by
;;   the `x`-value of the (interactive, try sliding!) pink point in the scene, and
;; - the inequality between that function and `(cos x)`:
;;
;; > The 'show code' link below will expand the example's source.

^{::clerk/visibility {:code :fold}}
(emmy.viewer/with-let [!phase [0 0]]
  (let [shifted (emmy.viewer/with-params {:atom !phase :params [0]}
                  (fn [shift]
                    (((cube D) tanh) (- identity shift))))]
    (emmy.mafs/mafs
     {:height 400}
     (emmy.mafs/cartesian)
     (emmy.mafs/of-x shifted)
     (emmy.mafs/inequality
      {:y {:<= shifted :> cos} :color :blue})
     (emmy.mafs/movable-point
      {:atom !phase :constrain "horizontal"}))))

;; The next example uses the functions
;; in [`emmy.mathbox.plot`](https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT/api/emmy.mathbox.plot) and [`emmy.leva`](https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT/api/emmy.leva)
;; to plot the functions
;;
;; - $f(x, y) := D^3\tanh(x) + \sin(y-\texttt{phase})$
;; - $g(y) := \texttt{shift} * \cos(y - \texttt{phase})$
;;
;; where $\texttt{phase}$ is supplied by the interactive slider hovering in the
;; top right:

^{::clerk/visibility {:code :fold}}
(emmy.viewer/with-let [!phase {:phase 0}]
  (emmy.mathbox.plot/scene
   (emmy.leva/controls
    {:folder {:name "Intro Demo"}
     :schema {:phase {:min -4 :max 4 :step 0.01}}
     :atom !phase})
   (emmy.mathbox.plot/of-y
    {:z (ev/with-params {:atom !phase :params [:phase]}
          (fn [shift]
            (fn [y]
              (* shift (sin (- y shift))))))

     :color "LimeGreen"})
   (emmy.mathbox.plot/of-xy
    {:color "#3090FF"
     :z (ev/with-params {:atom !phase :params [:phase]}
          (fn [shift]
            (fn [[x y]]
              (+ (((cube D) tanh) x)
                 (sin (- y shift))))))})))

;; Emmy-Viewers uses either [Clerk](https://github.com/nextjournal/clerk) or
;; [Portal](https://github.com/djblue/portal) as a presentation environment.
;;
;;
;; ## Quickstart

;;Install Emmy-Viewers into your Clojure project using the instructions at its
;; Clojars page:

;; [![Clojars
;; Project](https://img.shields.io/clojars/v/org.mentat/emmy-viewers.svg)](https://clojars.org/org.mentat/emmy-viewers)
;;
;; Or grab the most recent code by adding a Git dependency to your `deps.edn`
;; file:

^{::clerk/visibility {:code :hide}}
(clerk/md
 (format
  "```clojure
{:deps
  {org.mentat/emmy-viewers
    {:git/url \"https://github.com/mentat-collective/emmy-viewers.git\"
     :git/sha \"%s\"}}}
  ```" (docs/git-sha)))

;; Next visit ["Quickstart via Clerk"](#quickstart-via-clerk) to build scenes
;; using [Clerk](http://github.com/nextjournal/clerk), or ["Quickstart via
;; Portal"](#quickstart-via-portal) to
;; use [Portal](https://github.com/djblue/portal).
;;
;;
;; ### Quickstart via Clerk
;;
;; The fastest way to get started with Clerk is to use the [`emmy-viewers/clerk`
;; project template](#clerk-project-template). Jump there, or read on to set
;; Clerk up manually.

;; Install Clerk by adding the following entry to your `deps.edn`:
;;
;; ```clojure
;; {:deps
;;  {<your other dependencies>
;;   io.github.nextjournal/clerk {:mvn/version "0.14.919"}}}
;; ```
;;
;; Require and start `emmy.clerk` in your `user.clj`:
;;
;; ```clojure
;; (ns user
;;   (:require [emmy.clerk :as ec]))

;; ;; start Clerk's built-in webserver on the default port 7777, opening the
;; ;; browser when done
;; (ec/serve! {:browse true})
;; ```
;;
;; > See Clerk's ["Using
;; > Clerk"](https://github.com/nextjournal/clerk#-using-clerk) section for more
;; > configuration options. Replace any call in that guide to
;; > `nextjournal.clerk/{serve!,halt!,build!}` with
;; > `emmy.clerk/{serve!,halt!,build!}`.

;; Create a file called `emmy/demo.clj` and install our default Clerk viewers
;; from `emmy.clerk`:

;; ```clojure
;; (ns emmy.demo
;;   (:refer-clojure
;;    :exclude [+ - * / zero? compare divide numerator denominator
;;              infinite? abs ref partial =])
;;   (:require [emmy.clerk :as ec]
;;             [emmy.env :as e :refer :all]
;;             [emmy.mafs :as mafs]
;;             [emmy.mathbox.plot :as plot]
;;             [emmy.viewer :as ev]
;;             [nextjournal.clerk :as clerk]))

;; ^{::clerk/visibility {:code :hide :result :hide}}
;; (ec/install!)
;; ```
;;
;; > This namespace imports every function
;; > from [`emmy.env`](https://cljdoc.org/d/org.mentat/emmy/0.31.0/api/emmy.env).
;; > You'll need to build your mathematical functions out of these `emmy.env`
;; > functions to use them with Emmy-Viewers 2D and 3D plotting capabilities.
;;
;; Thanks to the `ec/install!` call above, the return values of all Emmy-Viewers
;; functions will be able to present themselves graphically.
;;
;; Add this line to plot the sine function using
;; the [Mafs.cljs](https://mafs.mentat.org/) 2D plotting library:

(mafs/of-x sin {:color :blue})

;; Render it by calling `(nextjournal.clerk/show! "src/emmy/demo.clj")` at the
;; REPL.

;; > See the [Mafs Guide](/dev/examples/mafs) for 2D plotting examples.

;; Use `plot/scene` to render multiple plots onto a 3D canvas:

(plot/scene
 (plot/of-x {:z sin})
 (plot/parametric-curve
  {:f (up sin cos (/ identity 3))
   :t [-10 10]
   :color :green}))

;; > See the [MathBox Guide](/dev/examples/mafs) for 3D plotting examples.
;;
;; Next, try clicking the 'show code' link for the examples at the top of the
;; page and pasting their source into your namespace. Then visit the ["Specific
;; Guides"](#specific-guides) section, and click through ["Demos"](#demos) for
;; inspiration.

;; ### Quickstart via Portal
;;
;; Follow the [Portal Usage
;; instructions](https://github.com/djblue/portal#usage) to the point where you
;; have the Portal dependency installed and loadable.
;;
;; You'll also need to install [node.js](https://nodejs.org/en/) to download
;; JavaScript dependencies.
;;
;; Test your installation by running this command at the REPL:

;; ```clojure
;; (require '[portal.api :as p])
;; ```
;;
;; If this returns `nil` you're all set.

;; Require `emmy.portal` in your `user.clj`, and call `prepare!` to make sure
;; you've downloaded all JavaScript dependencies from `npm`:
;;
;; ```clojure
;; (ns user
;;   (:require [emmy.portal :as ep]))
;;
;; ;; This really only needs to be run once, but run it at each system start to
;; ;; be safe.
;; (ep/prepare!)
;; ```
;;
;; Start the Emmy-Viewers customization of Portal:
;;
;; ```clojure
;; (def portal
;;   (ep/start!
;;    {:emmy.portal/tex {:macros {"\\f" "#1f(#2)"}}
;;     :theme :portal.colors/zenburn}))
;; ```
;;
;; The options passed above are optional; `:emmy.portal/tex` customizes
;; the [katex](https://katex.org/) viewer with any option allowed by [katex's
;; option support](https://katex.org/docs/options.html), while `:theme` sets a
;; custom theme. You can pass any [Portal
;; theme](https://cljdoc.org/d/djblue/portal/0.42.1/doc/ui-concepts/themes) that
;; you like, or remove this entry.
;;
;; Use `tap>` to send values to Portal:

;; ```clojure
;; (tap> (mafs/of-x sin {:color :indigo}))
;; ```
;;
;; `tap>` an Emmy symbolic expression:
;;
;; ```clojure
;; (tap> (((exp D) (literal-function 'f)) 'x))
;; ```
;;
;; then click the cell in the Portal UI and choose `:emmy.portal/tex` from the
;; viewer list at the bottom. You should see the expression transform into
;; nicely typeset mathematics.
;;
;; > Currently anything from `emmy.mafs`, `emmy.leva`, `emmy.jsxgraph` and
;; > `emmy.mathlive` will render. MathBox support is coming soon!

;; Visit the ["Specific Guides"](#specific-guides) section, and click
;; through ["Demos"](#demos) for inspiration.

;; ## Specific Guides
;;
;; - [Mafs Guide](/dev/examples/mafs)
;; - [MathBox Guide](/dev/examples/mathbox)
;; - [Leva Guide](/dev/examples/leva)
;;
;; [JSXGraph.cljs](https://github.com/mentat-collective/jsxgraph.cljs)
;; and [MathLive.cljs](https://github.com/mentat-collective/jsxgraph.cljs)
;; guides are coming soon.

;; ## Demos
;;
;; These demos are in-progress, more advanced demonstrations of the capabilities
;; of Emmy-Viewers. I'm using these as test cases to flesh out the more settled API, so please read them with that in mind!
;;
;; - [examples.manifold.fdg](/dev/examples/manifold/fdg)
;; - [examples.manifold.klein](/dev/examples/manifold/klein)
;; - [examples.manifold.pq-knot](/dev/examples/manifold/pq_knot)
;; - [examples.mathbox.cube-controls](/dev/examples/mathbox/cube_controls)
;; - [examples.mathbox.functions](/dev/examples/mathbox/functions)
;; - [examples.mathbox.geom](/dev/examples/mathbox/geom)
;; - [examples.mathbox.ode](/dev/examples/mathbox/ode)
;; - [examples.mathbox.quickstart](/dev/examples/mathbox/quickstart)
;; - [examples.simulation.cylinder-flow](/dev/examples/simulation/cylinder_flow)
;; - [examples.simulation.double-ellipsoid](/dev/examples/simulation/double_ellipsoid)
;; - [examples.simulation.ellipsoid](/dev/examples/simulation/ellipsoid)
;; - [examples.simulation.lorenz](/dev/examples/simulation/lorenz)
;; - [examples.simulation.oscillator](/dev/examples/simulation/oscillator)
;; - [examples.simulation.phase-portrait](/dev/examples/simulation/phase_portrait)
;; - [examples.simulation.quartic-well](/dev/examples/simulation/quartic_well)
;; - [examples.simulation.toroid](/dev/examples/simulation/toroid)
;; - [examples.vega.pendulum](/dev/examples/vega/pendulum)

;; ## Emmy-Viewers via SCI
;;
;; `Emmy-Viewers` is compatible with [SCI, the Small Clojure
;; Interpreter](https://github.com/babashka/sci).
;;
;; To install the Reagent components and code defined in `Emmy-Viewers` into
;; your SCI context, require the `emmy-viewers.sci` namespace and call
;; `emmy-viewers.sci/install!`:

;; ```clj
;; (ns myproject.sci-extensions
;;   (:require [emmy-viewers.sci]))

;; (emmy-viewers.sci/install!)
;; ```
;;
;; If you want more granular control, see the [cljdoc page for
;; `emmy.viewer.sci`](https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT/api/emmy.viewer.sci)
;; for an SCI config and distinct SCI namespace objects that you can piece
;; together.
;;
;; ## Clerk Project Template
;;
;; `Emmy-Viewers` includes
;; a [`deps-new`](https://github.com/seancorfield/deps-new) template called
;; [`emmy-viewers/clerk`](https://github.com/mentat-collective/emmy-viewers/tree/main/resources/emmy-viewers/clerk)
;; that makes it easy to configure a new Clerk project with everything described
;; in ["Emmy-Viewers via SCI"](#emmy-viewers-via-sci) already configured.

;; First, install the [`deps-new`](https://github.com/seancorfield/deps-new)
;; tool:

;; ```sh
;; clojure -Ttools install io.github.seancorfield/deps-new '{:git/tag "v0.5.0"}' :as new
;; ```

;; To create a new Clerk project based on
;; [`emmy-viewers/clerk`](https://github.com/mentat-collective/emmy/tree/main/resources/emmy/clerk)
;; in a folder called `my-emmy-project`, run the following command:

^{::clerk/visibility {:code :hide}}
(clerk/md
 (format "
```sh
clojure -Sdeps '{:deps {io.github.mentat-collective/emmy-viewers {:git/sha \"%s\"}}}' \\
-Tnew create \\
:template emmy-viewers/clerk \\
:name myusername/my-emmy-project
```" (docs/git-sha)))

;; The README.md file in the generated project contains information on how to
;; develop within the new project.

;; If you have an existing Clerk notebook project and are considering adding
;; `Emmy-Viewers`, you might consider
;; using [`emmy-viewers/clerk`](https://github.com/mentat-collective/emmy-viewers/tree/main/resources/emmy-viewers/clerk)
;; to get some ideas on how to structure your own project.

;; ## clj-kondo config

;; `Emmy-Viewers` ships with a configuration that allows
;; [clj-kondo](https://github.com/clj-kondo/clj-kondo) to lint the library's
;; macros.

;; To install the exported linter configuration:

;; 1. Install clj-kondo using [these
;;    instructions](https://github.com/clj-kondo/clj-kondo/blob/master/doc/install.md).
;;    I highly recommend configuring [editor
;;    integration](https://github.com/clj-kondo/clj-kondo/blob/master/doc/editor-integration.md)
;;    for your text editor.

;; 2. If it doesn't exist yet, create a `.clj-kondo` folder in your project:

;; ```sh
;; mkdir .clj-kondo
;; ```

;; 3. Run `clj-kondo` using the following command. This will import the `emmy`
;; config and populate `clj-kondo`'s cache with linting information about all of
;; your dependencies:
;;
;; ```sh
;; # If you're using Leiningen:
;; clj-kondo --copy-configs --dependencies --lint$(lein classpath)"

;; # If you're using deps.edn:
;; clj-kondo --copy-configs --dependencies --lint "$(clojure -Spath)"
;; ```
;;
;; > The steps listed here mirror the [instructions in the clj-kondo
;; repo](https://github.com/clj-kondo/clj-kondo/blob/master/doc/config.md#importing).

;; ## Who is using Emmy-Viewers?
;;
;; - [The Road to Reality series](https://github.com/mentat-collective/road-to-reality)
;;
;; > If you want to show off your use of Emmy-Viewers, please [file a
;; > ticket](https://github.com/mentat-collective/emmy-viewers/issues/new) and
;; > let us know!

;; ## Thanks and Support

;; To support this work and my other open source projects, consider sponsoring
;; me via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank
;; you to my current sponsors!
;;
;; I'm grateful to [Clojurists Together](https://www.clojuriststogether.org/)
;; for financial support during this library's creation. Please
;; consider [becoming a member](https://www.clojuriststogether.org/developers/)
;; to support this work and projects like it.
;;
;; For more information on me and my work, visit https://samritchie.io.

;; ## License

;; Copyright © 2022-2023 Sam Ritchie.

;; Distributed under the [MIT
;; License](https://github.com/mentat-collective/emmy/blob/main/LICENSE).
;; See [LICENSE](https://github.com/mentat-collective/emmy/blob/main/LICENSE).
