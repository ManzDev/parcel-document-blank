A prepared package for new HTML/CSS/JS projects and easy coding using Parcel bundler.

## Usage

##### Vanilla document blank

```
git clone https://github.com/ManzDev/parcel-document-blank folder-project
cd folder-project
rm -rf .git
npm install
npm run dev
```

##### Vue document blank

```
git clone -b vue https://github.com/ManzDev/parcel-document-blank folder-project
cd folder-project
rm -rf .git
npm install
npm run dev
```

## Features

- 📦 Automatic bundler with [Parcel](https://parceljs.org/)
- ⚙️ Preconfigured [NPM Scripts](https://docs.npmjs.com/misc/scripts) (development, build and clean tasks)
- 🚩 For HTML binding use `export func` on functions and use `global.func()`

### CSS

- 🌀 [PostCSS](https://postcss.org/) (Pre, post and transform CSS with JS)
  - 🔫 Convert modern CSS into browsers can understand with [postcss-preset-env](https://preset-env.cssdb.org/features)
  - 🍂 Auto add CSS prefix properties with [Autoprefixer](https://autoprefixer.github.io/)
  - ➰ Improve import PostCSS files (partials and globs) with [postcss-easy-import](https://github.com/TrySound/postcss-easy-import)
  - ➕ Support for CSS mixins (functions-in-css) [postcss-mixins](https://github.com/postcss/postcss-mixins)
  - 🅰️ Auto import Google Fonts [PostCSS-font-magician](https://github.com/jonathantneal/postcss-font-magician)
  - 🔧 Auto minify & optimize CSS code with [CleanCSS](https://github.com/jakubpawlowicz/clean-css)
- 🤵 Review CSS code for improve quality, tips and avoid errors with [StyleLint](https://stylelint.io/)

### JS

- 💼 Allow write ES2015+ (ES5/ES6/ES8) Javascript with [Babel](https://babeljs.io/) (JS transpiler to ES5)
- 👁️ Review Javascript code for improve quality, tips and avoid errors with [ESLint](https://eslint.org/)

### VueJS (vue branch)

- ✌️ Prepared branch for [VueJS](https://vuejs.org/) (Javascript framework)

## Scripts

| NPM Command     | Description    |
|-----------------|----------------|
| `npm run dev`   | Local webserver for development (serve + watch) |
| `npm run watch` | Watch changes (dev for use with external server: apache, nginx, local server...) |
| `npm run build` | Automatic production build (for upload). <br><small><sup>*</sup> Includes size detailed report ([parcel-plugin-bundle-visualiser](https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser))</small> |
| `npm run clean:cache` | Remove `.cache`, `dist` and `build` folder. |
| `npm run clean:all` | Reset default repo and remove cache and all npm generated files. |
| `npm run deploy` | Optional deploy `build` folder (master branch) to `gh-pages` branch for [GitHub Pages](https://pages.github.com/). |

<sup>*</sup> Change `--public-url /` for your project URL path. For example, on repo user.github.io/repo-name/sample-web/ use `--public-url /repo-name/sample-web/`.
