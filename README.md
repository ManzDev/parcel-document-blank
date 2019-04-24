A prepared package for new HTML/CSS/JS projects and easy coding using Parcel bundler.

## Features

### 1. Organization

| Feature  | Description |
|----------|-------------|
| 📦 [Parcel](https://parceljs.org/) | Automatic bundler |
| ⚙️ [NPM Scripts](https://docs.npmjs.com/misc/scripts) | Preconfigured scripts (development, build and clean tasks) |
| 🚩 HTML Binding | Use `export func` on functions and use `global.func()` |

### 2. Styles

| Feature  | Description |
|----------|-------------|
| 🌀 [PostCSS](https://postcss.org/) | Pre, post and transform CSS with JS |
| 🔫 [postcss-preset-env](https://preset-env.cssdb.org/features) | Convert modern CSS into browsers can understand |
| 🍂 [Autoprefixer](https://autoprefixer.github.io/) | Auto add CSS prefix properties |
| ➰ [postcss-easy-import](https://github.com/TrySound/postcss-easy-import) | Improve import PostCSS files (partials and globs) |
| ➕ [postcss-mixins](https://github.com/postcss/postcss-mixins) | Support for CSS mixins (functions-in-css) |
| 🅰️ [postcss-font-magician](https://github.com/jonathantneal/postcss-font-magician) | Auto import Google Fonts |
| 🔧 [CleanCSS](https://github.com/jakubpawlowicz/clean-css) | Auto minify & optimize CSS code |
| 🤵 [StyleLint](https://stylelint.io/) | Review CSS code for improve quality, tips and avoid errors |

### 3. Javascript

| Feature  | Description |
|----------|-------------|
| 💼 [Babel](https://babeljs.io/) | Transpile Javascript to ES5. |
| 🎁 [preset-env](https://babeljs.io/docs/en/babel-preset-env) | Smart preset to write ES2015+ (ES6/ES7/ES8) Javascript. |
| 🌎 [Browserlist](https://browserl.ist/) | Compatibilize code to specific browsers. |
| 👁️ [ESLint](https://eslint.org/) | Review Javascript code for improve quality, tips and avoid errors |

## Usage

- `master` branch: Vanilla document blank project
- `vue` branch: VueJS document blank project

### 1. Master branch

```
git clone https://github.com/ManzDev/parcel-document-blank folder-project
cd folder-project
rm -rf .git
npm install
npm run dev
```

### 2. Vue branch

```
git clone -b vue https://github.com/ManzDev/parcel-document-blank folder-project
cd folder-project
rm -rf .git
npm install
npm run dev
```

## NPM Scripts

| NPM Command     | Description    |
|-----------------|----------------|
| `npm run dev`   | Local webserver for development (serve + watch) |
| `npm run watch` | Watch changes (dev for use with external server: apache, nginx, local server...) |
| `npm run build` | Automatic production build (for upload). <br><small><sup>*</sup> Includes size detailed report ([parcel-plugin-bundle-visualiser](https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser))</small> |
| `npm run clean:cache` | Remove `.cache`, `dist` and `build` folder. |
| `npm run clean:all` | Reset default repo and remove cache and all npm generated files. |
| `npm run deploy` | Optional deploy `build` folder (master branch) to `gh-pages` branch for [GitHub Pages](https://pages.github.com/). |

<sup>*</sup> Change `--public-url /` for your project URL path. For example, on repo user.github.io/repo-name/sample-web/ use `--public-url /repo-name/sample-web/`.
