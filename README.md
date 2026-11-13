# kow.fm
v 27

The 27th version of the greatest blog in the world.

## Build it?

```bash
bundle exec jekyll build
```

## Run it

```bash
bundle exec jekyll serve
```

### Customize navigation links

I don't actually now how this part works. I'll need to figure out maybe.

This allows you to set which pages you want to appear in the navigation area and configure order of the links.

For instance, to only link to the `about` and the `portfolio` page, add the following to you `_config.yml`:

```yaml
header_pages:
  - about.md
  - portfolio.md
```

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
