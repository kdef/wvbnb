# Willamette Valley Bed and Breakfast

[Willamette Valley Bed and Breakfast](https://www.willamettevalleybandb.com) is an inn located in the wine country of Oregon, USA. This repo holds the source for the website.

## Development

Use [Hugo](https://github.com/gohugoio/hugo) (extended version) to generate the website HTML and assets.

Build the site and serve it at http://localhost:1313/ with:
```
hugo -F serve
```
If there is an error related to SCSS make sure you're really using the _extended_ version of Hugo.

Hugo's templating and menu system are used to build most of the content. New pages should be added to the appropriate menus in `config.toml`. The base template in `layouts/_default/baseof.html` has multiple blocks and all of them have default content, except the `main` block.

Always use the `relURL` function for URLs. This ensures that links work when the baseURL contains a path other than `/`, i.e. `kdef.github.io/wvbnb/`.

Blocks:
* `title` - in `<head>` tag, defaults to `{{ .Params.Title }} "|" {{ .Site.Title }}`
* `stylesheets` - in `<head>` tag, defaults to `stylesheets.html` partial
* `main` - first thing inside the `<body>` tag, no default
* `footer` - immediately after `main` in the `<body>` tag, defaults to `footer.html` partial
* `scripts` - immediately after `footer` in `<body>` tag, defaults to `scripts.html` partial

## Release

1. Checkout and update the `master` branch
2. Use `git tag -l` to see all previous releases
3. Bump the version and `git tag` it
4. Push with `git push --tags` to trigger a GitHub Actions publish to `gh-pages` branch (see [.deploy.yml](.github/workflows/deploy.yml))
