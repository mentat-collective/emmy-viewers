# emmy-viewers/clerk template

This directory contains a [`deps-new`][deps-new-url] template that creates a new
[Emmy-Viewers][emmy-viewers-url] project with everything described in the
["Quickstart via Clerk"](https://emmy-viewers.mentat.org/#quickstart-via-clerk)
section of the [`Emmy-Viewers` documentation notebook][emmy-viewers-notebook]
already configured.

To use the template, install the [`deps-new`][deps-new-url] tool:

```sh
clojure -Ttools install io.github.seancorfield/deps-new '{:git/tag "v0.5.0"}' :as new
```

Then create a project using the `emmy-viewers/clerk` template:

```
clojure -Sdeps '{:deps {io.github.mentat-collective/emmy-viewers {:git/sha "a4305edee1f04ebae1064d64f78502969b435387"}}}' \
-Tnew create \
:template emmy-viewers/clerk \
:name myusername/my-emmy-project
```

> **Note**
> The `:name` argument should match the GitHub slug (ie,
> `org_name/project_name`) where you expect to host the project. The above
> command will create a new project in the folder `my-emmy-project` in the
> directory where you run the command.
>
> To use a different version of the template, delete the `:git/tag` entry and
> replace the `:git/sha` above with the long-form SHA of version you need from
> the [Emmy commit
> history](https://github.com/mentat-collective/emmy-viewers/commits/main).

The generated project will contains more guides and information in its
`README.md` and in the generated Clerk notebook.

## Template Keyword Options

You can customize the `emmy-viewers/clerk` template by supplying any of the
following key-value pairs to the above command (See
[`template.edn`][template-edn-url] for default values):

- `:description`: This string is inserted at the top of your generated project's
  README.md.
- `:emmy-viewers-sha`: the hash of the Emmy-Viewers version you'd like to use in
  the template. (`emmy-viewers/clerk` uses a [git
  dependency](https://clojure.org/news/2018/01/05/git-deps) for Emmy-Viewers and
  Clerk.)
- `:clerk-port`: the port used by `clerk/serve!` during interactive development.
- `:clerk-sha`: the hash of the Clerk version you'd like to use in the template.
- `:clj-version`: the version of Clojure required by the generated project.
- `:http-server-port`: The port used by `bb serve` and `bb publish-local` to
  serve the local statically built site.
- `:cname`: If you're serving your GitHub Pages build from a custom URL, pass
  the value (like `"emmy-viewers.mentat.org"`) of the custom site via this
  argument.

## Thanks and Support

To support this work and my other open source projects, consider sponsoring me
via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank you
to my current sponsors!

## License

Copyright © 2023 Sam Ritchie.

Distributed under the [MIT License](LICENSE). See [LICENSE](LICENSE).

[clojars-url]: https://clojars.org/org.mentat/emmy
[clerk-url]: https://clerk.vision
[deps-new-url]: https://github.com/seancorfield/deps-new
[emmy-viewers-url]: https://github.com/mentat-collective/emmy-viewers
[emmy-viewers-notebook]: https://emmy-viewers.mentat.org
[shadow-url]: https://shadow-cljs.github.io/docs/UsersGuide.html
[template-edn-url]: https://github.com/mentat-collective/emmy-viewers/blob/main/resources/emmy-viewers/clerk/template.edn
