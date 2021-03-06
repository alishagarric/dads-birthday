# Infosec

> HTML templates including three themes

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Getting Started](#getting-started)
* [List of Gulp tasks](#list-of-gulp-tasks)
* [Configuration](#configuration)
* [Directory Structure](#directory-structure)
* [Dockerization](#dockerization)

## Features
This features a number of great software (in the words of their creators):
- [Lanyon](http://lanyon.getpoole.com/) - a content-first, sliding sidebar theme (originally) for Jekyll (by [mdo](http://mdo.fm)).
- [Gulp](http://gulpjs.com/) - a task automation tool.
- [Browsersync](https://www.browsersync.io/) - time-saving synchronised browser testing, keep multiple browsers & devices in sync when editing files.
- [EditorConfig](http://editorconfig.org/) - a config file for maintaining  consistent coding styles.


### StyleSheet
- [Sass](http://sass-lang.com/) - CSS with superpowers.
- [PostCSS](https://github.com/postcss/postcss) - a tool for transforming styles with JS plugins.
- [Autoprefixer](https://github.com/postcss/autoprefixer) - adding vendor prefixes by the rules of [Can I Use](http://caniuse.com/).
- [csso](https://github.com/css/csso) - a CSS minifier with structural optimizations.
- [Stylelint](http://stylelint.io/) - a mighty, modern CSS linter (with preconfigured ruleset by [Hugo Giraudel](https://sass-guidelin.es/)).

### Html
- [Jekyll](https://jekyllrb.com/) - a blog-aware, static site generator in Ruby.
- [HTMLHint](https://github.com/yaniswang/HTMLHint) - a Static Code Analysis Tool for HTML.
- [html-minifier](https://github.com/kangax/html-minifier) - a javascript-based HTML compressor/minifier.

## Installation

### Node version manager

Install [NVM](https://github.com/creationix/nvm). And use the latest version of NodeJS.

```
nvm install node
nvm use node
```

### Install Sass

Go to [sass-lang.com/install](http://sass-lang.com/install) for installation in command line.

```
gem install sass
```

Before install sass, you should [install Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [install Gem](https://rubygems.org/pages/download).

### Install Yarn

[Install Yarn globally](https://yarnpkg.com/docs/install/)

```
npm install --global yarn
```

### Install Babel

[Install Babel globally](https://babeljs.io/docs/usage/cli/#installation).

```
npm install --global babel-cli
```

### Install Gulp
[Install Gulp globally](http://gulpjs.com/).

```
npm install --global gulp-cli
```

### Install Jekyll & Bundler
[Install Jekyll and Bundler gems through RubyGems](https://jekyllrb.com/docs/quickstart/)

```
gem install jekyll bundler
```

## Getting started

1. Clone this repo

```bash
$ git clone https://github.com/lmnts-dev/infosec.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2. Install Dependencies

```bash
$ yarn install
```

3. Install Gem Dependencies
```bash
bundler install
```

4. Build the project

```bash
$ gulp
```

5. Stay up-to-date

```bash
$ git remote add upstream https://github.com/amazingsurge/jekyll-starter-kit.git
$ git pull upstream master
```

## List of Gulp tasks

To run separate task type in command line `gulp [task_name]`.
Almost all tasks also have watch mode - `gulp watch:[task_name]`, but you don't need to use it directly.

### Main tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`default`          | will start all tasks required by project in dev mode: initial build, watch files, run server with livereload
`build`            | builds all content and assets from `src` to `dist`.
`dev`              | builds your project without optimization.

### Core tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`styles`           | compile all scss from `src/styles` to `dist/assets/styles` folder. 
`scripts`          | compile all js from `src/scripts` to `dist/assets/scripts` folder. 
`html`             | compile all hbs files to html files.
`usemin`           | replaces references to non-optimized scripts or stylesheets into a set of HTML files

### Assets related tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`copy`             | copy files from `src/assets` path to `dist/assets` path.
`vendor`           | copy vendor files from registry distributions to `dist/assets/vendor` path.
`svgs`             | optimize svg files.
`sprite`           | generate svg sprite.
`fonts`            | copy files from `src/fonts` path to `dist/fonts` path.
`favicons`         | generate favicons to `dist/assets/favicons` path.
`images`           | optimize and copies images in `src/images` to `dist/assets/images`.

### Dev tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`clean`            | remove `dist` folder.
`beautify`         | beautify your source files in `src/styles` and `src/scripts`.
`server`           | start a BrowserSync instance.
`watch`            | watchs for changes in `src/` path and rebuilds parts of the site as necessary.

### Version tasks

Task name          | Description                                                      
:------------------|:----------------------------------
`version:major`    | MAJOR version when you make incompatible API changes
`version:minor`    | MINOR version when you add functionality in a backwards-compatible manner
`version:patch`    | PATCH version when you make backwards-compatible bug fixes.
`version`          | alias to `version:path`.

All available tasks are placed in a folder `tasks`. 

### Flags
* `gulp [task_name] --prod` or `gulp [task_name] --production` to run task in production mode.

### Workflow
Everything's ready to get started right away:

`npm start` - Compiles assets & html, launches development server:
- compiles styles & scripts are being compiled & concatenated
- compresses images & svgs
- builds the site & opens it in your default browser
- watches for changes and injects them right away

`npm run build` - Same as above, but in production mode:
- compiles & builds everything
- minifies & compresses everything

## Configuration
Global variables and site metadata can be found inside `config.js`. Your can make some modification in the file.

## Directory Structure

The `source` directory contains your entire application code, including CSS, JavaScript, HTML.

The rest of the folders and files only exist to make your life easier, and should not need to be touched.

Below you can find full details about significant files and folders.

```bash
├── README.md               # Readme file
├── package.json            # Dependencies for node.js
├── LICENSE                 # License
├── .babelrc                # Babel config file
├── .gitignore              # Git ignore rules
├── .htmlhintrc             # Settings for HTMLHint
├── postcss.config.js       # PostCSS config
├── gulpfile.babel.js       # The Gulp task manager configuration
├── /webpack/               # Webpack config
├── /tasks/                 # Gulp tasks definitions
├── /archives/              # Folder with zip archives
├── /dist/                  # Minified, optimized and compiled files
│   ├── /assets/            # Assets folder
│   │   ├── /styles/        # CSS files
│   │   ├── /scripts/       # JS files
│   │   ├── /fonts/         # Fonts folder
│   │   ├── /images/        # Images folder
│   │   ├── /svgs/          # Svg files
│   │   └── /favicons/      # Favicons files
│   └── *.html              # Rendered and compiled HTMLs from hbs
└── /src/                   # The source code of the application
    ├── /assets/            # Static assets files copy to dist
    ├── /styles/            # Stylesheets source
    ├── /scripts/           # Javascript source
    ├── /fonts/             # Font files
    ├── /images/            # Non compressed image files
    ├── /svgs/              # Non compressed svg files
    ├── /favicons/          # Favicon image
```

## Dockerization

1. Build and run the Container

```bash
$ docker-compose up
```

2. Run a command in a running container

```bash
$ docker-compose exec app <COMMAND>
```

3. Remove the old container before creating the new one

```bash
$ docker-compose rm -fs
```

## License

The code is available under the [MIT](https://github.com/amazingSurge/jekyll-starter-kit/blob/master/LICENSE) license.
