A prepared package for new HTML/CSS/JS projects and easy coding (parcel version).

## Features

- Automatic bundler with Parcel [ ParcelJS: https://parceljs.org/ ]
- `npm run dev`: Local webserver for development (serve + watch)
- `npm run build`: Automatic build & view production files and size detailed report [ Parcel-plugin-bundle-visualiser: https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser ]
- `npm run deploy`: Optional deploy `dist` folder (master branch) to `gh-pages` branch for GitHub Pages [ GitHub Pages: https://pages.github.com/ ]

### HTML

- Allow write Pug template code (HTML preprocessor) [ Pug: https://pugjs.org/ ]

### CSS

- Allow write PostCSS code (pre, post and transform CSS with JS) [ PostCSS: https://postcss.org/ ]
  * Convert modern CSS into browsers can understand [ postcss-preset-env: https://preset-env.cssdb.org/features ]
  * Auto add CSS prefix properties [Autoprefixer: https://autoprefixer.github.io/ ]
  * Improve import PostCSS files (partials and globs) [ postcss-easy-import: https://github.com/TrySound/postcss-easy-import ]
  * Support for CSS mixins (functions-in-css) [ postcss-mixins: https://github.com/postcss/postcss-mixins ]
  * Auto import Google Fonts [ PostCSS-font-magician: https://github.com/jonathantneal/postcss-font-magician ]
  * Auto minify & optimize CSS code with clean-css [ CleanCSS: https://github.com/jakubpawlowicz/clean-css ]
- Review CSS code for improve quality, tips and avoid errors [ StyleLint: https://stylelint.io/ ]

### JS

- Allow write ES201x (ES8/ES7/ES6) Javascript with Babel (JS transpiler to ES5) [ Babel: https://babeljs.io/ ]
- Review Javascript code for improve quality, tips and avoid errors [ ESLint: https://eslint.org/ ]

#### Typescript (ts branch)

- Allow write Typescript code (Superset of Javascript) [ Typescript: https://www.typescriptlang.org/ ]
- Review Typescript code for improve quality, tips and avoid errors [ TSLint: https://palantir.github.io/tslint/ ]

## Requisites

- Git https://git-scm.com/
- NodeJS/NPM https://nodejs.org/en/
- ParcelJS https://parceljs.org/
