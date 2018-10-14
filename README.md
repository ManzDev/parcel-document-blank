A prepared package for new HTML/CSS/JS projects and easy coding using Parcel bundler.

## Features

- Automatic bundler with Parcel [ ParcelJS: https://parceljs.org/ ]
- NPM Scripts: Tasks for fast development & generation
- For HTML binding use `export func` on functions and use `global.func()`.

### HTML

- Allow write Pug template code (HTML preprocessor) [ Pug: https://pugjs.org/ ]

### CSS

- Allow write PostCSS code (pre, post and transform CSS with JS) [ PostCSS: https://postcss.org/ ]
  - Convert modern CSS into browsers can understand [ postcss-preset-env: https://preset-env.cssdb.org/features ]
  - Auto add CSS prefix properties [Autoprefixer: https://autoprefixer.github.io/ ]
  - Improve import PostCSS files (partials and globs) [ postcss-easy-import: https://github.com/TrySound/postcss-easy-import ]
  - Support for CSS mixins (functions-in-css) [ postcss-mixins: https://github.com/postcss/postcss-mixins ]
  - Auto import Google Fonts [ PostCSS-font-magician: https://github.com/jonathantneal/postcss-font-magician ]
  - Auto minify & optimize CSS code with clean-css [ CleanCSS: https://github.com/jakubpawlowicz/clean-css ]
- Review CSS code for improve quality, tips and avoid errors [ StyleLint: https://stylelint.io/ ]

### JS

- Allow write ES201x (ES8/ES7/ES6) Javascript with Babel (JS transpiler to ES5) [ Babel: https://babeljs.io/ ]
- Review Javascript code for improve quality, tips and avoid errors [ ESLint: https://eslint.org/ ]

### Other branches

#### Typescript (ts branch)

- Allow write Typescript code (Superset of Javascript) [ Typescript: https://www.typescriptlang.org/ ]
- Review Typescript code for improve quality, tips and avoid errors [ TSLint: https://palantir.github.io/tslint/ ]

#### Simple HTML (nopug branch)

- Allow write pure HTML instead Pug files.

## Scripts

| NPM Command | Description |
|---------|-------------|
| `npm run dev` | Local webserver for development (serve + watch) |
| `npm run watch` | Watch changes (dev for use with external server: apache, nginx, local server...) |
| `npm run build` | Automatic production build (for upload). Includes size detailed report ([parcel-plugin-bundle-visualiser](https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser)) <sup>*</sup> |
| `npm run clean:cache` | Remove `.cache`, `dist` and `build` folder. |
| `npm run clean:all` | Reset default repo and remove cache and all npm generated files. |
| `npm run deploy` | Optional deploy `build` folder (master branch) to `gh-pages` branch for [GitHub Pages](https://pages.github.com/). |

<sup>*</sup> Change `--public-url /` for your project URL path. For example, on repo user.github.io/repo-name/sample-web/ use `--public-url /repo-name/sample-web/`.

## Requisites

- Git https://git-scm.com/
- NodeJS/NPM https://nodejs.org/en/
- ParcelJS https://parceljs.org/
