# sicmutils-clerk

This is a very early stage set of demos and extensions for SICMUtils and Clerk
backed by Mathbox. More later!

> If you find this work interesting, please consider sponsoring it via [Github
> Sponsors](https://github.com/sponsors/sritchie). Thank you!

## Links

- [SICMUtils repository][SICMUTILS]
- The [Road to Reality Newsletter](https://roadtoreality.substack.com/)
- [Road to Reality Discord
  Server](https://roadtoreality.substack.com/p/road-to-reality-discord-server?s=w)
- [Clerk][CLERK], the notebook rendering engine used by SICMUtils
- [In-progress executable version](https://github.com/sicmutils/fdg-book) of
  _Functional Differential Geometry_ ([book link][FDG])
- [In-progress executable version](https://github.com/sicmutils/sicm-book) of
  Sussman and Wisdom's _Structure and Interpretation of Classical Mechanics_
  ([book link][SICM])
- [Mathbox](https://gitgud.io/unconed/mathbox) by @unconed
- [mathbox-react](https://github.com/ChristopherChudzicki/mathbox-react) by
  @ChristopherChudzicki

## Demo Instructions

The demos include both Clojure and Clojurescript code. Two environments means
two build tools, so you'll need to have these installed:

- [clj](https://clojure.org/guides/getting_started), for running the JVM side
- [shadow-cljs](https://shadow-cljs.github.io/docs/UsersGuide.html#_installation)
  for building the JS bundle used by the demos. This is a lovely system that
  will automatically rebuild the bundle any time you save a cljs file.
  - You'll also need [node.js](https://nodejs.org/en/download/package-manager/)
    installed, to install the initial `npm` dependencies.

When those are all set (the links include installation instructions),

Clone the repository:

```bash
git clone git@github.com:sicmutils/sicmutils-clerk.git
cd sicmutils-clerk
```

Generate the JS bundle for the demos by running the following commands in one
terminal window:

```bash
npm install
shadow-cljs watch sicm-browser
```

In another tab, start a Clojure repl with `clj`. This REPL has the full
[SICMUtils
API](https://cljdoc.org/d/sicmutils/sicmutils/CURRENT/api/sicmutils.env)
available, so run some tests for fun:

```clojure
(->infix (((exp D) (literal-function 'f)) 'x))
;;=> "f(x) + Df(x) + 1/2 D²f(x) + 1/6 D³f(x) + ..."
```

Next, start a webserver for Clerk, (the literate programming viewer) by running
the following commands:

```clojure
;; point Clerk at our newly-generated JS bundle instead of its default:
(swap! clerk-config/!resource->url
       assoc
       "/js/viewer.js"
       "http://localhost:9000/out/main.js")

;; Start the clerk server.
(clerk/serve!
 {:browse? true :port 7777})
```

Now run `(clerk/show! <path/to/file.clj>)` to run any of the demos. Some
examples to try:

```clojure
;; intro:
(clerk/show! "src/demo.clj")

;; Mathbox basics:
(clerk/show! "src/cube_controls.clj")

;; functions:
(clerk/show! "src/functions.clj")
(clerk/show! "src/polar.clj")

;; symbolic physics:
(clerk/show! "src/einstein.clj")

;; vega, symbolic, double-pendulum
(clerk/show! "src/pendulum.clj")

;; mathbox physics:
(clerk/show! "src/oscillator.clj")
(clerk/show! "src/ellipsoid.clj")
(clerk/show! "src/double_ellipsoid.clj")

;; browser/client comms:
(clerk/show! "src/live_oscillator.clj")
```

> NOTE: Clojure is far more pleasant if you can get a REPL running from inside
> of your favorite code editor. I'll update this repo with links to a good
> "Getting Started" resource; but please open an issue if you're having trouble
> and I'll get you sorted.

If you're running a REPL from inside your editor, see the [Clerk
homepage](https://github.com/nextjournal/clerk#editor-workflow) for instructions
on how to trigger `clerk-show!` with a key command, making dynamic interaction
much more fun.

Enjoy!

[CLERK]: https://github.com/nextjournal/clerk
[SICMUTILS]: https://github.com/sicmutils/sicmutils
[SICM]: http://mitpress.mit.edu/books/structure-and-interpretation-classical-mechanics
[FDG]: http://mitpress.mit.edu/books/functional-differential-geometry
