^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy-viewers.notebook
  #:nextjournal.clerk
  {:toc true
   :no-cache true}
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.env :as e :refer :all]
            [mentat.clerk-utils.docs :as docs]
            [nextjournal.clerk :as clerk]))

;; # Emmy-Viewers [ALPHA!]
;;
;; Visualizations over [Emmy](https://emmy.mentat.org).

{::clerk/visibility {:code :hide}}
(clerk/html
 [:<>
  [:center
   (clerk/md
    "[![Build Status](https://github.com/mentat-collective/emmy/actions/workflows/kondo.yml/badge.svg?branch=main)](https://github.com/mentat-collective/emmy/actions/workflows/kondo.yml)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mentat-collective/emmy/blob/main/LICENSE)
[![cljdoc badge](https://cljdoc.org/badge/org.mentat/emmy)](https://cljdoc.org/d/org.mentat/emmy/CURRENT)")]])
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
;; TODO
;;
;; ## Quickstart
;;
;; Grab the most recent code using a Git dependency:

^{::clerk/visibility {:code :hide}}
(docs/git-dependency
 "mentat-collective/emmy-viewers")

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
;; `emmy.sci`](https://cljdoc.org/d/org.mentat/emmy/CURRENT/api/emmy.sci)
;; for an SCI config and distinct SCI namespace objects that you can piece
;; together.
;;
;; > Note that `Emmy` does not ship with a dependency on SCI, so you'll
;; > need to install your own version.
;;
;; ## Emmy-Viewers via Clerk
;;
;; Using `Emmy-Viewers` with Nextjournal's [Clerk](https://clerk.vision/) gives
;; you the ability to write notebooks like this one.
;;
;; Doing this requires that you generate a custom ClojureScript build for your
;; Clerk project. The easiest way to do this for an existing project is with
;; the [`clerk-utils` project](https://clerk-utils.mentat.org/). Follow the
;; instructions on the [`clerk-utils` guide for custom
;; ClojureScript](https://clerk-utils.mentat.org/#custom-clojurescript-builds).
;;
;; If this is your first time using Clerk, use the [`emmy/clerk` template
;; described below](#project-template) to generate a new project with all steps
;; described in ["Emmy-Viewers via SCI"](#emmy-viewers-via-sci) already
;; completed.
;;
;; ## Project Template
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

;; `Emmy` ships with a configuration that allows
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

;; For more information on me and my work, visit https://samritchie.io.

;; ## License

;; Copyright © 2022-2023 Sam Ritchie.

;; Distributed under the [MIT
;; License](https://github.com/mentat-collective/emmy/blob/main/LICENSE).
;; See [LICENSE](https://github.com/mentat-collective/emmy/blob/main/LICENSE).
