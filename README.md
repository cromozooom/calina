## Use

with tina

```bash
npm install
npm run dev
```

of for only hugo

```bash
npm install
npm hugo server
```

## For tailwind

You need to add this to your `hugo.toml`:

```toml
[module]
  [module.hugoVersion]
    extended = false
    min      = "0.112.0"
  [[module.mounts]]
    source = "assets"
    target = "assets"
  [[module.mounts]]
    source = "hugo_stats.json"
    target = "assets/watching/hugo_stats.json"

[build]
  writeStats = true
  [[build.cachebusters]]
    source = "assets/watching/hugo_stats\\.json"
    target = "styles\\.css"
  [[build.cachebusters]]
    source = "(postcss|tailwind)\\.config\\.js"
    target = "css"
  [[build.cachebusters]]
    source = "assets/.*\\.(js|ts|jsx|tsx)"
    target = "js"
  [[build.cachebusters]]
    source = "assets/.*\\.(.*)$"
    target = "$1"
```

Then run your project as usual.
