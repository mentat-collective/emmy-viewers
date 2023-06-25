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
[![cljdoc badge](https://cljdoc.org/badge/org.mentat/emmy)](https://cljdoc.org/d/org.mentat/emmy/CURRENT)
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
;; Install Clerk: [![Clojars
;; Project](https://img.shields.io/clojars/v/io.github.nextjournal/clerk.svg)](https://clojars.org/io.github.nextjournal/clerk)
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
;; Add this line to plot the sine function using
;; the [Mafs.cljs](https://mafs.mentat.org/) 2D plotting library:

(mafs/of-x sin {:color :blue})
;;
;; TODO Clerk Demo

;; ### Quickstart via Portal

;; ## Specific Guides
;;
;; TODO fill in specific guides.

;; - mafs
;; - mathbox
;; - leva

;; ## Demos
;;
;; - [examples.complex](/dev/examples/complex.html)
;; - [examples.continued-fractions](/dev/examples/continued_fractions.html)
;; - [examples.expression](/dev/examples/expression.html)
;; - [examples.functions](/dev/examples/functions.html)
;; - [examples.index.md](/dev/examples/index.md)
;; - [examples.mafs](/dev/examples/mafs.html)
;; - [examples.manifold.pq-knot](/dev/examples/manifold/pq_knot)
;; - [examples.mathbox.cube-controls](/dev/examples/mathbox/cube_controls.html)
;; - [examples.matrix](/dev/examples/matrix.html)
;; - [examples.modint](/dev/examples/modint.html)
;; - [examples.number](/dev/examples/number.html)
;; - [examples.operator](/dev/examples/operator.html)
;; - [examples.polynomial](/dev/examples/polynomial.html)
;; - [examples.power-series](/dev/examples/power_series.html)
;; - [examples.quaternion](/dev/examples/quaternion.html)
;; - [examples.rational-function](/dev/examples/rational_function.html)
;; - [examples.simulation.cylinder-flow](/dev/examples/simulation/cylinder_flow.html)
;; - [examples.simulation.double-ellipsoid](/dev/examples/simulation/double_ellipsoid.html)
;; - [examples.simulation.ellipsoid](/dev/examples/simulation/ellipsoid.html)
;; - [examples.simulation.lorenz](/dev/examples/simulation/lorenz.html)
;; - [examples.simulation.oscillator](/dev/examples/simulation/oscillator.html)
;; - [examples.simulation.phase-portrait](/dev/examples/simulation/phase_portrait.html)
;; - [examples.simulation.quartic-well](/dev/examples/simulation/quartic_well.html)
;; - [examples.simulation.toroid](/dev/examples/simulation/toroid.html)
;; - [examples.stern-brocot](/dev/examples/stern_brocot.html)
;; - [examples.structure](/dev/examples/structure.html)
;; - [examples.symbolic.einstein](/dev/examples/symbolic/einstein.html)
;; - [examples.vega.pendulum](/dev/examples/vega/pendulum.html)

;; ## Emmy-Viewers via SCI
;;
;; `Emmy` is compatible with [SCI, the Small Clojure
;; Interpreter](https://github.com/babashka/sci).
;;
;; To install `Emmy-Viewers` into your SCI context, require the
;; `emmy-viewers.sci` namespace and call `emmy-viewers.sci/install!`:

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
;; in a folder called `my-notebook-project`, run the following command:

^{::clerk/visibility {:code :hide}}
(clerk/md
 (format "
```sh
clojure -Sdeps '{:deps {io.github.mentat-collective/emmy-viewers {:git/sha \"%s\"}}}' \\
-Tnew create \\
:template emmy-viewers/clerk \\
:name myusername/my-notebook-project
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

;; If you want to show off your use of Emmy-Viewers, please [file a
;; ticket](https://github.com/mentat-collective/emmy-viewers/issues/new) and let
;; us know!

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
