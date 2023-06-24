# Emmy-Viewers

A library of functions for building high-performance interactive 2D and 3D
mathematical scenes powered by the [Emmy][emmy-url] computer algebra system.

Emmy-Viewers makes it easy to use either [Clerk][clerk-url] or
[Portal][portal-url]

<div align="center">

[![Build Status][build-status]][build-status-url]
[![License][license]][license-url]
[![cljdoc badge][cljdoc]][cljdoc-url]
[![Clojars Project][clojars]][clojars-url]
[![Discord Shield][discord]][discord-url]

</div>

## Quickstart with Clerk

Install `Emmy-Viewers` into your Clojure project using the instructions at its
Clojars page:

[![Clojars Project][clojars]][clojars-url]

Or grab the most recent code using a Git dependency:

```clj
;; replace $GIT_SHA with the sha you'd like to target!

{io.github.mentat-collective/emmy-viewers
  {:git/url "https://github.com/mentat-collective/emmy-viewers.git"
  :git/sha "$GIT_SHA"}}
```

Then install Clerk: [![Clojars Project][clerk-clojars]][clerk-clojars-url]

Create a namespace called `emmy.demo`, and install our default Clerk viewers
from `emmy.clerk`:

```clojure
(ns emmy.demo
  (:refer-clojure
   :exclude [+ - * / zero? compare divide numerator denominator
             infinite? abs ref partial =])
  (:require [emmy.clerk :as ec]
            [emmy.env :as e :refer :all]
            [emmy.mafs :as mafs]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]
            [nextjournal.clerk :as clerk]))

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)
```

Add this line to the file to plot a function using the [Mafs][mafs-url]:

```clojure
(mafs/of-x sin {:color :blue})
```

Render it by calling `(nextjournal.clerk/show! "src/emmy/demo.clj")` at the
REPL. You'll see the following:

;; TODO insert picture, add more getting started info with a MathBox example.

## Quickstart with Portal

;; TODO fill in.

## Demo Instructions

The project's [demos][emmy-viewers-url] are generated using Nextjournal's
[Clerk][clerk-url]. If you'd like to edit or play with the demos, you'll need to
install

- The [Clojure command line tool](https://clojure.org/guides/install_clojure)
- [Babashka](https://github.com/babashka/babashka#installation)

Next, clone the repository:

```bash
git clone git@github.com:mentat-collective/emmy-viewers.git
cd emmy-viewers
```

Run this command in the cloned repository:

```sh
bb clerk-watch
```

This will open a browser window to `http://localhost:7777` with the contents of
the documentation notebook. Any edits you make to any file in the `src` or `dev`
directories will be picked up and displayed in the browser on save.

## Dependencies

These viewers are built on the following libraries:

- [MathBox.cljs][mathbox-url]
- [JSXGraph.cljs][jsxgraph-url]
- [Mafs.cljs][mafs-url]
- [Leva.cljs][leva-url]

## Thanks and Support

To support this work and my other open source projects, consider sponsoring me
via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank you
to my current sponsors!

## License

Copyright © 2022-2023 Sam Ritchie.

Distributed under the [MIT License](LICENSE). See [LICENSE](LICENSE).

[build-status-url]: https://github.com/mentat-collective/emmy-viewers/actions/workflows/kondo.yml
[build-status]: https://github.com/mentat-collective/emmy-viewers/actions/workflows/kondo.yml/badge.svg?branch=main
[clerk-clojars-url]: https://clojars.org/io.github.nextjournal/clerk
[clerk-clojars]: https://img.shields.io/clojars/v/io.github.nextjournal/clerk.svg
[clerk-url]: https://github.com/nextjournal/clerk
[cljdoc-url]: https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT
[cljdoc]: https://cljdoc.org/badge/org.mentat/emmy-viewers
[clojars-url]: https://clojars.org/org.mentat/emmy-viewers
[clojars]: https://img.shields.io/clojars/v/org.mentat/emmy-viewers.svg
[discord-url]: https://discord.gg/hsRBqGEeQ4
[discord]: https://img.shields.io/discord/731131562002743336?style=flat&colorA=000000&colorB=000000&label=&logo=discord
[emmy-url]: https://github.com/mentat-collective/emmy
[emmy-viewers-url]: https://emmy-viewers.mentat.org
[fdg-url]: http://mitpress.mit.edu/books/functional-differential-geometry
[github-url]: https://github.com/mentat-collective/emmy-viewers
[jsxgraph-url]: https://jsxgraph.mentat.org
[leva-url]: https://leva.mentat.org
[license-url]: LICENSE
[license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[mafs-url]: https://mafs.mentat.org
[mathbox-url]: https://mathbox.mentat.org
[mentat-slack-url]: https://clojurians.slack.com/archives/C041G9B1AAK
[portal-url]: https://github.com/djblue/portal
[reagent-url]: https://reagent-project.github.io/
[sicm-url]: http://mitpress.mit.edu/books/structure-and-interpretation-classical-mechanics
