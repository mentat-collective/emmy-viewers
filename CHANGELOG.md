# Changelog

## [unreleased]

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
