# Changelog

## [unreleased]

## [0.3.2]

- #80 bumps the Mafs.cljs and Mafs dependencies to Mafs 0.18.8, fixing #78.

## [0.3.1]

- #74 adds resources to the published jar.

## [0.3.0]

- #70:

  - Adds

    - `emmy.mathbox.physics.{phase-vectors,lagrangian-phase-vectors,hamiltonian-phase-vectors,routhian-phase-vectors}`
      for building out phase portraits like those in the Phase Portrait and
      Quartic Well examples.

    - many geodesics to the Klein bottle examples.

    - a matrix basis visualization example to `examples.mathbox.geom`.

  - `ode-curve` now sets `:simplify?` to `false` by default.

  - Converts the phase portrait and quartic well examples to use all server side
    code and components.

  - `emmy.viewer.components.physics/Evolve` now adds a `:tick` entry into its
    state to force re-renders, since the `:state` array is mutable.

- #69:

  - Adds
    `emmy.mathbox.physics.{lagrangian-curve,hamiltonian-curve,routhian-curve,geodesic}`
    to the existing `ode-curve` function.

  - Adds
    `emmy.viewer.physics.{evolve-lagrangian,evolve-hamiltonian,evolve-routhian}`
    to the existing `evolve` function.

  - Updates the `emmy.viewer.components.physics/Evolve` component to use a
    pre-allocated JS output array instead of forcing an allocation on each tick.

## [0.2.0]

- #57:

  - Adds `emmy.viewer.physics/evolve`, for running realtime physics simulations
    and updating state into a client-side atom.

  - Adds `emmy.mathbox.physics/comet`, for rendering points with trailing,
    fading-out history.

  - Updates `examples.simulation.{oscillator,ellipsoid,double-ellipsoid}` to use
    the new server-side style.

  - Modifies `emmy.viewer/with-let` to allow any number of binding pairs, not
    just one.

  - Adds `emmy.clerk/multiviewer` for presenting literals via `emmy.clerk/multi`
    with their TeX and original representations, both simplified and
    unsimplified.

  - Adds a missing `:offset` argument and `:z-index`, `:z-bias` and `:z-offset`
    to `emmy.mathbox.components.plot/Ticks`.

  - Adds `:start?` and `end?` arguments to to
    `emmy.mathbox.components.plot/LabeledAxis`. Also, the `:z-index`, `:z-order`
    and `:z-bias` arguments are now passed through to `Ticks` if not supplied
    directly.

  - Makes the `range` argument for `emmy.mathbox.components.plot/SceneAxes`
    optional.

  - Moves `ode-compile` from `emmy.mathbox.physics` to `emmy.viewer.physics`.

- #56:

  - removes `demo.mathbox` and `demo.mathlive` from the published jar, and
    converts `demo.mathbox` into an examples-directory-only
    `examples.simulation.utils`. The next step is to convert all remaining cljc
    files into clj files using the new APIs.

  - adds `hickory` and `deep-diff2` as provided dependencies to fix the cljdoc
    build.

- #55 fixes a bug with live-updating ranges not updating axis labels.

- #53:

  - Consolidates `emmy.mafs.{core,coordinate,debug,line,plot}` into `emmy.mafs`.
    This allows docstrings to appear properly on the ClojureScript side when
    using `emmy.mafs`, which all my documentation says to do.

  - Moves the CLJS files for `emmy.mathbox.{plot,physics}`and
    `emmy.viewer.stopwatch` over to `emmy.mathbox.components.{plot,physics}` and
    `emmy.viewer.components.stopwatch`.

  - All reagent-fragment-generating `.clj` files are now `cljc` files and
    included by `emmy.viewer.sci`. This enables "editor mode" in the latest
    Clerk builds.

## [0.1.0]

- #49:

  - Performs a bunch of README etc updates in preparation for the `0.1.0`
    release.

  - Bumps portal to `0.42.1` and enables the Leva portal viewers.

  - Removes custom JS compilation from the `emmy-viewers/clerk` template, which
    no longer needs it thanks to our precompiled JS.

  - Sets a default camera `:up` direction of `[0 0 1]`, removing the need to
    emit in `xzy` order. This would almost certainly have been ultra confusing
    to anyone trying to extend the library. Thanks to @ChristopherChudzicki for
    the suggestion here.

- #44:

  - Adds `emmy.viewer.physics` and `emmy.mathbox.physics` in support of the new
    `emmy.mathbox.physics/ode-curve` function, similar to `parametric-curve` but
    powered by a derivative function and initial state. See the new
    [ode](https://emmy-viewers.mentat.org/dev/examples/mathbox/ode) example page
    for a demo.

  - Adds a new Lorenz attractor example at `examples.mathbox.ode`.

  - Adds `emmy.clerk/{build!,serve!,halt!}` to make it more straightforward to
    configure Clerk with our custom JS bundle.

  - Adds a var-arg `viewers` argument for other viewers to
    `emmy.clerk/install!`.

  - Adds `emmy.viewer.stopwatch` with a client and server-side stopwatch
    component; this is currently alpha, but will be used for running physics
    animations.

  - Migrates `examples.simulation.toroid` to full server-side style with no more
    custom viewer.

- #32 updates the `emmy-viewers/clerk` template to use the new pre-compiled
  bundle and all of the good stuff in it.

- #40 is a huge PR that adds a full 3D plotting system into emmy-viewers!!

  - Adds `emmy.viewer.plot` with `format-number` and `label-pi` functions,
    replacing `mafs.core/labelPi`.

  - Upgrades the `examples.manifold.pq-knot` to full server-side function style,
    removing it from the JS bundle.

  - Fixes the `:emmy.portal/mafs` viewer so that its theming applies in scope;
    this lets you toggle the theme away by activating `:emmy.portal/reagent`
    without affecting the other Mafs scenes in portal.

  - Adds our first set of ClojureScript tests

  - Adds the following functions in `emmy.mathbox.plot`, backed by components on
    the ClojureScript side:

    - `scene` sets up a batteries-included MathBox scene that can host all of
      the objects and curves described below.

    - `point`, `line` and `vector` provide geometric primitives; `point` even
      supports LaTeX labels.

    - `parametric-curve`, `of-x`, `of-y` and `of-z` support 1d => 1d curves

    - `polar-surface`, `of-xy`, `of-yz` and `of-xz` support 2d => 1d surface
      plotting

    - `parametric-surface` supports full 2d => 3d surface generation

    - `vector-field` is still in progress, but the basics work. This will
      eventually expand into the ability to generate vectors along 1d intervals,
      2d areas or 3d volumes.

  Huge thanks to Chris Chudzicki of https://www.math3d.org/, who inspired my API
  here. Steven Petryk and his work on Mafs filled in the gaps for me.

  See these namespaces for examples of the new API in action:

    - https://emmy-viewers.mentat.org/dev/examples/mathbox/functions
    - https://emmy-viewers.mentat.org/dev/examples/mathbox/geom
    - https://emmy-viewers.mentat.org/dev/examples/manifold/fdg
    - https://emmy-viewers.mentat.org/dev/examples/manifold/pq_knot

- #39:

  - moves `emmy.mafs.compile` to `emmy.viewer.compile`, for future use by
    MathBox.

  - ports examples over the new style with `emmy.clerk` and friends.

- #34 renames `emmy-viewers.sci` to `emmy.viewer.sci`.

- #30:

  - Adds `emmy.mathbox`, with functions for creating Reagent fragments that
    configure the components from [MathBox.cljs](https://mathbox.mentat.org/)
    for Clerk (no Portal yet!)

  - `dev/emmy_viewers/mathbox.clj` shows off a basic demo

- #32:

  - Adds `emmy.mathlive`, with functions for creating Reagent fragments that
    configure the components from [MathLive.cljs](https://mathlive.mentat.org/)
    for Portal or Clerk

  - `dev/emmy_viewers/mathlive.clj` shows off a basic demo

  - `emmy/portal/mathlive.cljs` gives Portal the ability to render MathLive
    Mathfield instances by loading MathLive into portal's SCI context.

- #31:

  - Adds `emmy.jsxgraph`, with functions for creating Reagent fragments that
    configure the components from [JSXGraph.cljs](https://jsxgraph.mentat.org/)
    for Portal or Clerk

  - `dev/emmy_viewers/jsxgraph.clj` shows off some basic demos, though these are
    not yet organized

  - `emmy/portal/jsxgraph.cljs` gives Portal the ability to render JSXGraph
    components by loading JSXGraph into portal's SCI context.

- #29:

  - Upgrades viewer dependencies (other than MathBox) to versions compatible
    with Portal and able to be evaluated via SCI

  - Adds `emmy.leva`, with functions for creating Reagent fragments that
    configure the components from [Leva.cljs](https://leva.mentat.org/) for
    Portal or Clerk

  - `dev/emmy_viewers/leva.clj` shows off some basic demos, though these are not
    yet organized

  - `emmy.viewer/fragment` now tags its inputs as Reagent components, vs the
    accidental `mafs`-specific tagging that existed before. `mafs` components
    receive correct metadata to render with or without styling.

  - `emmy/portal/leva.cljs` gives Portal the ability to render Leva components
    by loading Leva into portal's SCI context.

- #26:

  - Adds `emmy.clerk` with support for configuring Clerk projects and specific
    notebooks with this project's viewers.

    Call `emmy.clerk/install!` within a notebook to activate viewers, and
    `emmy.clerk/install-css!` in your `dev/user.clj` to configure Clerk with the
    CSS required to render Mafs and friends.

  - Adds `emmy.viewer` with metadata augmentation and functions for declaring
    Reagent fragments that can create `reagent.core/atom` instances on the
    client side, and query and manipulate them.

  - Adds `emmy.mafs` as an aggregate namespace for the new `emmy.mafs.{core,
    coordinates, line, debug, plot}`. These namespaces allow you to create
    Reagent fragments that render in Clerk or Portal using
    [Mafs.cljs](https://github.com/mentat-collective/mafs.cljs), and take
    advantage of Emmy's compilation wherever possible.

  - Upgrades `mafs.cljs` to `0.3.0` and `clerk-utils` to `0.6.0`.

  - Adds `dev/emmy_viewers/mafs.clj`, `dev/examples/mafs.clj` and
    `dev/examples/portal.clj` to the static site published to
    `https://emmy-viewers.mentat.org`. (These are still quite scattershot and
    not built for exposition yet!)

  - Modifies `dev/user.clj` to launch with a pre-built JS bundle by default,
    instead of compiling each time. This will make `bb clerk-watch` or other
    ways of invoking `user/serve!` or `user/build!` much faster.

- #28:

  - Adds [Portal](https://github.com/djblue/portal) support for all existing
    Emmy-Viewers code via `emmy.portal`. See `emmy.portal/{prepare!, install!,
    start!}`.

    This required the custom viewers `emmy.portal.mafs`, `emmy.portal.tex` and
    `emmy.portal.reagent`, as well as `emmy.portal.deps` for installing the NPM
    deps necessary to make each plugin work.

    I'll continue the pattern here for MathBox, Leva and JSXGraph as they come
    along.

  - adds `emmy.viewer.css` with CSS maps for each of the Emmy-Viewers
    dependencies. Eventually each of these will move down into the appropriate
    sub-project.
