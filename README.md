# Emmy-viewers

A library of [Clerk][clerk-url] viewers and [Reagent][reagent-url] components
designed for visual representation and exploration of mathematical objects in
the [Emmy][emmy-url] computer algebra system.

<div align="center">

[![Build Status][build-status]][build-status-url]
[![License][license]][license-url]
[![cljdoc badge][cljdoc]][cljdoc-url]
[![Clojars Project][clojars]][clojars-url]
[![Discord Shield][discord]][discord-url]

</div>

These viewers are built on the following libraries:

- [MathBox.cljs][mathbox-url]
- [JSXGraph.cljs][jsxgraph-url]
- [Mafs.cljs][mafs-url]
- [Leva.cljs][leva-url]

## Quickstart

Install `emmy-viewers` into your ClojureScript project using the instructions at
its Clojars page:

[![Clojars Project][clojars]][clojars-url]

Or grab the most recent code using a Git dependency:

```clj
;; deps
{io.github.mentat-collective/emmy-viewers
  {:git/sha "$GIT_SHA"}}
```

The project is currently in alpha stage, so you'll have to do your own
source-code reading to figure out what's available. See the [demo
directory][emmy-viewers-url] for examples and inspiration, then go read the
associated code for each notebook linked at the top of its page.

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

## Thanks and Support

To support this work and my other open source projects, consider sponsoring me
via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank you
to my current sponsors!

## License

Copyright © 2022-2023 Sam Ritchie.

Distributed under the [MIT License](LICENSE). See [LICENSE](LICENSE).

[build-status-url]: https://github.com/mentat-collective/emmy-viewers/actions/workflows/kondo.yml
[build-status]: https://github.com/mentat-collective/emmy-viewers/actions/workflows/kondo.yml/badge.svg?branch=main
[cljdoc-url]: https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT
[cljdoc]: https://cljdoc.org/badge/org.mentat/emmy-viewers
[clojars-url]: https://clojars.org/org.mentat/emmy-viewers
[clojars]: https://img.shields.io/clojars/v/org.mentat/emmy-viewers.svg
[discord-url]: https://discord.gg/hsRBqGEeQ4
[discord]: https://img.shields.io/discord/731131562002743336?style=flat&colorA=000000&colorB=000000&label=&logo=discord
[license-url]: LICENSE
[license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[mentat-slack-url]: https://clojurians.slack.com/archives/C041G9B1AAK
[github-url]: https://github.com/mentat-collective/emmy-viewers
[reagent-url]: https://reagent-project.github.io/
[clerk-url]: https://github.com/nextjournal/clerk
[emmy-url]: https://github.com/mentat-collective/emmy
[emmy-viewers-url]: https://emmy-viewers.mentat.org
[mathbox-url]: https://mathbox.mentat.org
[mafs-url]: https://mafs.mentat.org
[jsxgraph-url]: https://jsxgraph.mentat.org
[leva-url]: https://leva.mentat.org
[sicm-url]: http://mitpress.mit.edu/books/structure-and-interpretation-classical-mechanics
[fdg-url]: http://mitpress.mit.edu/books/functional-differential-geometry
