# Emmy-Viewers

Emmy-Viewers is a library of tools for visually rendering mathematical objects
found in the [Emmy](https://github.com/mentat-collective/emmy) computer algebra
system. These tools allow you to build symbolic representations and 2D and 3D
mathematical scenes for exploring physical and mathematical worlds.

<div align="center">

[![Build Status][build-status]][build-status-url]
[![License][license]][license-url]
[![cljdoc badge][cljdoc]][cljdoc-url]
[![Clojars Project][clojars]][clojars-url]
[![Discord Shield][discord]][discord-url]

</div>

## Examples

The first example uses the functions in the
[`emmy.mafs`](https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT/api/emmy.mafs)
namespace to plot

- `((cube D) tanh)`, the third derivative of the [hyperbolic tangent
  function](https://mathworld.wolfram.com/HyperbolicTangent.html), shifted by
  the `x`-value of the (interactive, try sliding!) pink point in the scene, and
- the inequality between that function and `(cos x)`:

```clojure
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
```

![2023-06-26 16 53 03](https://github.com/mentat-collective/emmy-viewers/assets/69635/075fe878-db6c-4249-84bd-d83109b3e3c9)

> **Note**
> To play with interactive versions of these examples, visit
> https://emmy-viewers.mentat.org.

The next example uses the functions in
[`emmy.mathbox.plot`](https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT/api/emmy.mathbox.plot)
and
[`emmy.leva`](https://cljdoc.org/d/org.mentat/emmy-viewers/CURRENT/api/emmy.leva)
to plot the functions

- $f(x, y) := D^3\tanh(x) + \sin(y-\texttt{phase})$
- $g(y) := \texttt{shift} * \cos(y - \texttt{phase})$

where $\texttt{phase}$ is supplied by the interactive slider hovering in the top
right:

```clojure
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
```

![2023-06-26 16 54 26](https://github.com/mentat-collective/emmy-viewers/assets/69635/b0a48fab-6d16-4a56-8504-3835c09c648b)

Emmy-Viewers uses either [Clerk][portal-url] or [Portal][portal-url] as a
presentation environment.

## Quickstart

Install `Emmy-Viewers` into your Clojure project using the instructions at its
Clojars page:

[![Clojars Project][clojars]][clojars-url]

Or grab the most recent code using a Git dependency:

```clj
;; replace $GIT_SHA with the sha you'd like to target!

{org.mentat/emmy-viewers
  {:git/url "https://github.com/mentat-collective/emmy-viewers.git"
   :git/sha "$GIT_SHA"}}
```

Next visit ["Quickstart via Clerk"](#quickstart-via-clerk) to build scenes using
[Clerk](http://github.com/nextjournal/clerk), or ["Quickstart via
Portal"](#quickstart-via-portal) to use
[Portal](https://github.com/djblue/portal).

### Quickstart via Clerk

The fastest way to get started with Clerk is to use the [`emmy-viewers/clerk`
project
template](https://github.com/mentat-collective/emmy-viewers/tree/main/resources/emmy_viewers/clerk).
Jump there, or read on to set Clerk up manually.

Install Clerk by adding the following entry to your `deps.edn`:

```clojure
{:deps
 {<your other dependencies>
  io.github.nextjournal/clerk {:mvn/version "0.14.919"}}}
```

Require and start `emmy.clerk` in your `user.clj`:

```clojure
(ns user
  (:require [emmy.clerk :as ec]))

;; start Clerk's built-in webserver on the default port 7777, opening the
;; browser when done
(ec/serve! {:browse true})
```

> **Note**
> See Clerk's ["Using
> Clerk"](https://github.com/nextjournal/clerk#-using-clerk) section for more
> configuration options. Replace any call in that guide to
> `nextjournal.clerk/{serve!,halt!,build!}` with
> `emmy.clerk/{serve!,halt!,build!}`.

Create a file called `emmy/demo.clj` and install our default Clerk viewers
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

> **Note**
> This namespace imports every function
> from [`emmy.env`](https://cljdoc.org/d/org.mentat/emmy/0.31.0/api/emmy.env).
> You'll need to build your mathematical functions out of these `emmy.env`
> functions to use them with Emmy-Viewers 2D and 3D plotting capabilities.

Thanks to the `ec/install!` call above, the return values of all Emmy-Viewers
functions will be able to present themselves graphically.

Add this line to plot the sine function using
the [Mafs.cljs](https://mafs.mentat.org/) 2D plotting library:

```clojure
(mafs/of-x sin {:color :blue})
```

Render it by calling `(nextjournal.clerk/show! "src/emmy/demo.clj")` at the
REPL. You'll see the following:

![Mafs plot example](https://github.com/mentat-collective/emmy-viewers/assets/69635/446cd61f-0795-4375-bb67-4a2b687c9a2e)

> See the [Mafs Guide](https://emmy-viewers.mentat.org/dev/examples/mafs) for 2D plotting examples.

Use `plot/scene` to render multiple plots onto a 3D canvas:

```clojure
(plot/scene
 (plot/of-x {:z sin})
 (plot/parametric-curve
  {:f (up sin cos (/ identity 3))
   :t [-10 10]
   :color :green}))
```

![MathBox plot example](https://github.com/mentat-collective/emmy-viewers/assets/69635/3349cff0-744c-40fa-b996-1d324162b3d9)

> See the [MathBox Guide](https://emmy-viewers.mentat.org/dev/examples/mathbox) for 3D plotting examples.

Next, try clicking the 'show code' link for the examples at the top of the
page and pasting their source into your namespace. Then visit the ["Specific
Guides"](#specific-guides) section, and click through ["Demos"](#demos) for
inspiration.

### Quickstart via Portal

Follow the [Portal Usage
instructions](https://github.com/djblue/portal#usage) to the point where you
have the Portal dependency installed and loadable.

You'll also need to install [node.js](https://nodejs.org/en/) to download
JavaScript dependencies.

Test your installation by running this command at the REPL:

```clojure
(require '[portal.api :as p])
```

If this returns `nil` you're all set.

Require `emmy.portal` in your `user.clj`, and call `prepare!` to make sure
you've downloaded all JavaScript dependencies from `npm`:

```clojure
(ns user
  (:require [emmy.portal :as ep]))

;; This really only needs to be run once, but run it at each system start to
;; be safe.
(ep/prepare!)
```

Start the Emmy-Viewers customization of Portal:

```clojure
(def portal
  (ep/start!
   {:emmy.portal/tex {:macros {"\\f" "#1f(#2)"}}
    :theme :portal.colors/zenburn}))
```

The options passed above are optional; `:emmy.portal/tex` customizes the
[katex](https://katex.org/) viewer with any option allowed by [katex's option
support](https://katex.org/docs/options.html), while `:theme` sets a custom
theme. You can pass any [Portal
theme](https://cljdoc.org/d/djblue/portal/0.42.1/doc/ui-concepts/themes) that
you like, or remove this entry.

Use `tap>` to send values to Portal:

```clojure
(tap> (mafs/of-x sin {:color :indigo}))
```

<div align="center">
  <img
    src="https://github.com/mentat-collective/emmy-viewers/assets/69635/47893495-c9fd-4b9b-97d0-41935994ec44"
    alt="Portal Mafs" title="Portal Mafs"
    height="400"/>
</div>

`tap>` an Emmy symbolic expression:

```clojure
(tap> (((exp D) (literal-function 'f)) 'x))
```

then click the cell in the Portal UI and choose `:emmy.portal/tex` from the
viewer list at the bottom. You should see the expression transform into nicely
typeset mathematics.

<div align="center">
  <img
    src="https://github.com/mentat-collective/emmy-viewers/assets/69635/7cbf9898-a10b-47a3-820a-5907e03e6e55"
    alt="Emmy Expression in Portal" title="Emmy Expression in Portal"
    height="250"/>
</div>

> **Note**
> Currently anything from `emmy.mafs`, `emmy.leva`, `emmy.jsxgraph` and
> `emmy.mathlive` will render. MathBox support is coming soon!

Visit the ["Specific Guides"](#specific-guides) section, and click
through ["Demos"](#demos) for inspiration.

## Specific Guides

- [MathBox Guide](https://emmy-viewers.mentat.org/dev/examples/mathbox)
- [Mafs Guide](https://emmy-viewers.mentat.org/dev/examples/mafs)
- [Leva Guide](https://emmy-viewers.mentat.org/dev/examples/leva)

[JSXGraph.cljs](https://github.com/mentat-collective/jsxgraph.cljs) and
[MathLive.cljs](https://github.com/mentat-collective/jsxgraph.cljs) guides are
coming soon.

## Computational Backends

Every function a viewer plots is compiled on the JVM before it reaches the
browser. Every compiled **Kernel**, whichever backend produced it, is callable
using Emmy's original calling convention (`:native`, `:structure`, or
`:primitive`) and carries the same browser-side contract:

- `f.batch(xs, n, ps, out)` evaluates `n` points from flattened row-major input
  states `xs`, using parameters `ps`, into `out` (or an allocated output buffer).
- `f.ready()` reports whether the kernel is ready to execute.
- `f.dims` gives the scalar counts `{state, outputs, params}`.

Viewers depend on the ClojureScript namespace `emmy.viewer.kernel`, not on a
particular backend: `kernel?`, `ready?`, `dims`, `batch!`, `bind`, and `bind-1d`
expose and preserve that contract. MathBox explicit surfaces sample their full
grid through `batch!` when the function is a Kernel and both ranges are given;
other functions retain per-point sampling.

On the JVM, backends implement `emmy.viewer.kernel.backend/KernelBackend` with
one method, `kernel-form`, and are added using `register-backend!`. The dynamic
var `emmy.viewer.compile/*backend*` accepts either a registered keyword or a
backend value:

- `:js` (the default) emits Emmy JavaScript with a batch adapter attached to
  the same per-point function.
- `:raster` compiles to WebAssembly with
  [raster](https://github.com/replikativ/raster). Emmy simplifies the function
  symbolically and raster compiles the output to a kernel that evaluates many
  points in one call. The module ships inside the fragment with Emmy's original
  calling convention and a JavaScript fallback.

```clojure
(require '[emmy.viewer.compile :as vc])

(binding [vc/*backend* :raster]
  (emmy.mafs/of-x (fn [x] (* x (sin x)))))
```

**Upgrading:** Existing viewer call sites stay the same. Choosing `:raster`
only changes the backend binding; introducing another backend means registering
an implementation of `KernelBackend`, not editing viewers or compile call sites.

Measured with `clojure -J-Xmx2g -M:raster:bench` (node 22, JDK 25, ns per
point; see `bench/results/latest.edn`). Each batch pass evaluates all points;
`surface-64` is a complete 64×64 grid on [-3, 3]² with two parameters.
These numbers come from a shared, busy machine, so single per-point timings
vary by up to 2x between runs; the batch columns are the stable result:

| function | `:js` per point | `:js` batch | `:raster` per point | `:raster` batch |
|---|---:|---:|---:|---:|
| `x sin x` | 67.0 | 16.5 | 62.1 | 6.5 |
| degree-7 polynomial | 280.5 | 291.5 | 43.7 | 4.0 |
| parametric curve, 2 outputs | 78.5 | 49.4 | 131.6 | 10.5 |
| `a sin(bx) + x²`, 2 params | 51.1 | 28.9 | 26.3 | 6.1 |
| MathBox surface, 3 outputs | 64.7 | 55.2 | 36.8 | 32.4 |
| `surface-64`: `a sin(bx) cos(y)` | 99.3 | 46.5 | 51.9 | 12.7 |
| double-pendulum state derivative | 89.8 | 80.3 | 63.4 | 35.0 |

What holds across runs: `:raster` batch is the fastest path for every case
(4 to 35 ns per point, 2x to 70x faster than `:js` per point), and a MathBox
`surface-64` grid evaluates in one call at about 13 ns per point. `:js` batch
is faster than, or within noise of, `:js` per point, so a viewer can batch
through the contract whichever backend compiled its function.

The raster backend needs raster on the classpath (the `:raster` alias). Things
to know:

- Compiling is slower: 0.1 to 0.5 s per function on the JVM, against a few ms
  for `:js`, and the fragment is 2 to 4 KB larger.

- raster's wasm math approximates the transcendental functions: `sin`/`cos`
  within 5e-6 and `atan`/`asin`/`acos` within 3e-5 of `java.lang.Math`. Plots
  cannot show the difference; long ODE integrations can drift from the `:js`
  result.
- A function raster cannot compile (a literal function, an operator outside its
  vocabulary) throws at build time and names the form. Bind `:js` for that
  viewer.
- The backend is layered: `emmy.viewer.kernel.plan` is backend-neutral;
  `emmy.viewer.raster.lower` (raster's vocabulary) and
  `emmy.viewer.raster.glue` (the browser side) are pure. Shared malli contracts
  live in `emmy.viewer.kernel.schema`, raster-specific ones in
  `emmy.viewer.raster.schema`; `emmy.viewer.raster` is the compilation boundary.
- Each fragment also carries the `:js` function. A browser without WebAssembly
  uses it, and so does any call made while a module larger than 4 KB is still
  compiling asynchronously (`f.batch` returns null then).
- Parameters are written to the module only when the caller passes a new
  parameter object, which is what the viewers do when a slider moves. Mutating
  the same array in place between calls is not seen.

## Demos

These demos are in-progress, more advanced demonstrations of the capabilities of
Emmy-Viewers. I'm using these as test cases to flesh out the more settled API,
so please read them with that in mind!

- [examples.manifold.fdg](https://emmy-viewers.mentat.org/dev/examples/manifold/fdg)
- [examples.manifold.klein](https://emmy-viewers.mentat.org/dev/examples/manifold/klein)
- [examples.manifold.pq-knot](https://emmy-viewers.mentat.org/dev/examples/manifold/pq_knot)
- [examples.mathbox.cube-controls](https://emmy-viewers.mentat.org/dev/examples/mathbox/cube_controls)
- [examples.mathbox.functions](https://emmy-viewers.mentat.org/dev/examples/mathbox/functions)
- [examples.mathbox.geom](https://emmy-viewers.mentat.org/dev/examples/mathbox/geom)
- [examples.mathbox.ode](https://emmy-viewers.mentat.org/dev/examples/mathbox/ode)
- [examples.mathbox.quickstart](https://emmy-viewers.mentat.org/dev/examples/mathbox/quickstart)
- [examples.simulation.cylinder-flow](https://emmy-viewers.mentat.org/dev/examples/simulation/cylinder_flow)
- [examples.simulation.oscillator](https://emmy-viewers.mentat.org/dev/examples/simulation/oscillator)
- [examples.simulation.ellipsoid](https://emmy-viewers.mentat.org/dev/examples/simulation/ellipsoid)
- [examples.simulation.double-ellipsoid](https://emmy-viewers.mentat.org/dev/examples/simulation/double_ellipsoid)
- [examples.simulation.lorenz](https://emmy-viewers.mentat.org/dev/examples/simulation/lorenz)
- [examples.simulation.phase-portrait](https://emmy-viewers.mentat.org/dev/examples/simulation/phase_portrait)
- [examples.simulation.quartic-well](https://emmy-viewers.mentat.org/dev/examples/simulation/quartic_well)
- [examples.simulation.toroid](https://emmy-viewers.mentat.org/dev/examples/simulation/toroid)
- [examples.vega.pendulum](https://emmy-viewers.mentat.org/dev/examples/vega/pendulum)

## Interactive Demos via Clerk

The project's [interactive documentation][emmy-viewers-url] was generated using
Nextjournal's [Clerk][clerk-url]. If you'd like to edit or play with the
documentation or demos, you'll need to install

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
the main documentation notebook. Any edits you make to any file in the `src` or
`dev` directories will be picked up and displayed in the browser on save.

## Dependencies

These viewers are built on the following libraries:

- [MathBox.cljs][mathbox-url]
- [JSXGraph.cljs][jsxgraph-url]
- [Mafs.cljs][mafs-url]
- [Leva.cljs][leva-url]
- [MathLive.cljs][mathlive-url]

## Thanks and Support

To support this work and my other open source projects, consider sponsoring me
via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank you
to my current sponsors!

I'm grateful to [Clojurists Together](https://www.clojuriststogether.org/) for
financial support during this library's creation. Please consider [becoming a
member](https://www.clojuriststogether.org/developers/) to support this work and
projects like it.

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
[mathlive-url]: https://mathlive.mentat.org
[mentat-slack-url]: https://clojurians.slack.com/archives/C041G9B1AAK
[portal-url]: https://github.com/djblue/portal
[reagent-url]: https://reagent-project.github.io/
[sicm-url]: http://mitpress.mit.edu/books/structure-and-interpretation-classical-mechanics
