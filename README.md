A prepared package for new HTML/CSS/JS projects and easy coding using Parcel bundler.

![parcel-document-blank starter-kit](src/img/parcel-document-blank.png)

# Features

## 1. Organization

| Feature                           | Description                                                |
| --------------------------------- | ---------------------------------------------------------- |
| 📦 [Parcel2][1]                   | Automatic Parcel 2 bundler                                 |
| 📊 [Parcel Bundle Visualiser][16] | Generate size report into parcel-bundle-reports/           |
| ⚙️ [NPM Scripts][2]               | Preconfigured scripts (development, build and clean tasks) |
| 🦋 [Prettier][14]                 | Opinionated code formatter.                                |

[1]: https://v2.parceljs.org/
[2]: https://docs.npmjs.com/misc/scripts
[14]: https://prettier.io/
[16]: https://v2.parceljs.org/features/production/

### NPM Scripts

| NPM Command              | Description                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------- |
| `npm run dev`            | Local webserver for development (serve + watch)                                       |
| `npm run watch`          | Watch changes (dev for use with external server: apache, nginx, local server...)      |
| `npm run report`         | Generate reports into `parcel-bundle-reports/` and `build/bundle-buddy.json`          |
| `npm run build`          | Automatic production build (for website upload).                                      |
| `npm run gh-pages`       | Automatic production build for GitHub Pages. <sup>\*</sup>                            |
| `npm run deploy`         | Deploy `build` folder to GitHub Pages.                                                |
| `npm run lintcss`        | Lint CSS files with stylelint (`src/css/\*.css` )                                     |
| `npm run lintjs`         | Lint Javascript files with eslint (`src/js/\*.js` )                                   |
| `npm run clean:cache`    | Remove `.parcel-cache`, `dist` and `build` folder.                                    |
| `npm run clean:all`      | Reset default repo and remove cache and all npm generated files.                      |

<sup>\*</sup> <small>GitHub Pages URL is https://user.github.io/<strong>reponame</strong>/.</small> Don't forget change `name` to **reponame** in your `package.json`.</small><br>

## 2. HTML & Styles

| Feature                       | Description                                                |
| ----------------------------- | ---------------------------------------------------------- |
| 🏷️ [HTMLHint][15]             | Static code analysis tool for HTML.                        |
| 🌀 [PostCSS][3]               | Pre, post and transform CSS with JS                        |
| 👓 [PostCSS Preset-env][4]    | Convert modern CSS into browsers can understand            |
| 🍂 [Autoprefixer][5]          | Auto add CSS prefix properties                             |
| ➕ [PostCSS Mixins][6]        | Support for CSS mixins (functions-in-css)                  |
| 🅰️ [PostCSS Font Magician][7] | Auto import Google Fonts                                   |
| 🤵 [StyleLint][9]             | Review CSS code for improve quality, tips and avoid errors |

[3]: https://postcss.org/
[4]: https://preset-env.cssdb.org/features
[5]: https://autoprefixer.github.io/
[6]: https://github.com/postcss/postcss-mixins
[7]: https://github.com/jonathantneal/postcss-font-magician
[9]: https://stylelint.io/
[15]: https://htmlhint.com/

## 3. Javascript

| Feature                   | Description                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| 💼 [Babel][10]            | Transpile Future Javascript to ES5.                                |
| 🎁 [Babel Preset-env][11] | Smart preset to write ES2015+ (ES6/ES7/ES8) Javascript.            |
| 🌎 [Browserlist][12]      | Compatibilize code to specific browsers.                           |
| 👁️ [ESLint][13]           | Review Javascript code for improve quality, tips and avoid errors. |

[10]: https://babeljs.io/
[11]: https://babeljs.io/docs/en/babel-preset-env
[12]: https://browserl.ist/
[13]: https://eslint.org/

# Usage

- `master` branch: Vanilla document blank project
- `vue` branch: VueJS document blank project

## Requirements / Recommended

- node 12+ / npm 6+: https://github.com/nodesource/distributions/blob/master/README.md#debinstall
- Prettier for VSCode: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- Icons for VSCode: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
- ESLint for VSCode: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- StyleLint for VSCode: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

## Master branch

```
git clone https://github.com/ManzDev/parcel-document-blank folder-project
cd folder-project
rm -rf .git && git init
npm install
npm run dev
```

## Vue branch

```
git clone -b vue https://github.com/ManzDev/parcel-document-blank folder-project
cd folder-project
rm -rf .git && git init
npm install
npm run dev
```
