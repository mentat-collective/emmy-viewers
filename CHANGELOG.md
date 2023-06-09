# Changelog

## [unreleased]

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
