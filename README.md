# Willamette Valley Bed and Breakfast

[Willamette Valley Bed and Breakfast](https://willamettevalleybandb.com) is an inn located in the wine country of Oregon, USA. This repo holds the source for the website.

## Development

Use `hugo` to generate the website HTML and assets.

Hugo's templating and menu system are used to build most of the content. New pages should be added to the appropriate menus in `config.toml`. The base template in `layouts/_default/baseof.html` has multiple blocks and all of them have default content, except the `main` block.

* `title` - in `<head>` tag, defaults to `{{ .Params.Title }} "|" {{ .Site.Title }}`
* `stylesheets` - in `<head>` tag, defaults to `stylesheets.html` partial
* `main` - first thing inside the `<body>` tag, no default
* `footer` - immediately after `main` in the `<body>` tag, defaults to `footer.html` partial
* `scripts` - immediately after `footer` in `<body>` tag, defaults to `scripts.html` partial

## Release

1. Checkout and update the `master` branch
2. Run the `release.sh` script to build the site with `HUGO_ENV=production`
3. Checkout the `gh-pages` branch
4. Commit the `production` directory and push
