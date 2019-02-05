'use strict'

const gulp = require(`gulp`)
const $ = require(`gulp-load-plugins`)()
const del = require(`del`)
const log = require(`fancy-log`)
const lazypipe = require(`lazypipe`)
const args = require(`yargs`).argv
const browserSync = require(`browser-sync`).create()
const path = require(`path`)
const reload = browserSync.reload
const Parcel = require('parcel-bundler')

const isDev = args.prod !== true
const themeDir = `themes/hiswe-theme`

function onError(err) {
  $.util.beep()
  if (err.annotated) {
    $.util.log(err.annotated)
  } else if (err.message) {
    $.util.log(err.message)
  } else {
    $.util.log(err)
  }
  return this.emit(`end`)
}

////////
// CSS
////////

const autoprefixer = require('autoprefixer')
const cssDest = `${themeDir}/source`

const cssDev = lazypipe().pipe($.sourcemaps.write)

const cssProd = lazypipe().pipe($.cleanCss)

function cleanCSS() {
  if (isDev) return Promise.resolve()
  return del([`${cssDest}/*.css`, `${cssDest}/*.css.map`])
}

function copyHighlightJSFile() {
  return gulp
    .src(`./node_modules/highlight.js/styles/solarized-light.css`)
    .pipe($.rename({ extname: `.scss` }))
    .pipe(gulp.dest(`${themeDir}/sass`))
}

function compileSass() {
  return gulp
    .src(`${themeDir}/sass/index.scss`)
    .pipe($.plumber(onError))
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.postcss([autoprefixer({ browsers: ['ie 10', 'last 2 versions'] })]))
    .pipe($.if(isDev, cssDev(), cssProd()))
    .pipe($.rename({ basename: `hiswe-theme` }))
    .pipe(gulp.dest(cssDest))
    .pipe($.if(isDev, browserSync.stream()))
}

const css = gulp.series(cleanCSS, copyHighlightJSFile, compileSass)

////////
// JS
////////

const themeFolder = path.join(__dirname, `/themes/hiswe-theme`)
const jsSource = path.join(themeFolder, `client-javascript/index.js`)
const jsDest = path.join(themeFolder, `source`)

const bundleJs = new Parcel(jsSource, {
  outDir: jsDest,
  outFile: `hiswe-theme.js`,
  watch: false,
})
bundleJs.on(`buildEnd`, reload)
const js = () => bundleJs.bundle()

js.description = `Bundle front-app, app server & api-server`

gulp.task(`js`, js)

////////
// ASSETS
////////

const svgTemplates = [`default-svg`, `default-scss`, `default-demo`]

// • ic_access_time_black_24px
const materialNameReg1 = /ic_([^\d]*)_black_24px/
// june 2018: material come with a new file pattern
// • baseline-rss_feed-24px
const materialNameReg2 = /(?:outline|baseline)-([^\d]*)-24px/

const icons = () => {
  return gulp
    .src(`icons/*.svg`)
    .pipe(
      $.cheerio({
        run: $ => {
          // remove Google's background path
          $(`path[fill=none]`).remove()
          $(`rect[fill=none]`).remove()
          // remove Google's bounding box
          $(`#Bounding_Boxes`).replaceWith($(`#Bounding_Boxes`).html())
          $(`#Outline`).replaceWith($(`#Outline`).html())
        },
        parserOptions: {
          xmlMode: true,
        },
      })
    )
    .pipe(
      $.rename(path => {
        const { basename } = path
        const isMaterialIcon1 = materialNameReg1.test(basename)
        const isMaterialIcon2 = materialNameReg2.test(basename)
        if (!isMaterialIcon1 && !isMaterialIcon2) return
        if (isMaterialIcon1) {
          path.basename = materialNameReg1.exec(basename)[1].replace(/_/g, `-`)
        }
        if (isMaterialIcon2) {
          path.basename = materialNameReg2.exec(basename)[1].replace(/_/g, `-`)
        }
      })
    )
    .pipe(
      $.svgSymbols({
        id: `icon-%f`,
        class: `.icon--%f`,
        fontSize: 20,
        templates: svgTemplates,
        svgAttrs: { class: `svg-icon-library` },
      })
    )
    .pipe($.rename({ basename: `svg-icons` }))
    .pipe($.if(/[.]svg$/, gulp.dest(`${themeDir}/layout`)))
    .pipe($.if(/[.]html$/, gulp.dest('.tmp')))
    .pipe($.if(/[.]scss$/, gulp.dest(`${themeDir}/sass`)))
}
icons.description = `bundle SVG files`

////////
// DEV
////////

const build = gulp.series(
  icons,
  gulp.parallel(css, js)
)

function bs() {
  return browserSync.init({
    proxy: `http://localhost:4000`,
    open: false,
    port: 7000,
    ghostMode: false,
  })
}

// https://github.com/gulpjs/gulp/issues/1626#issuecomment-231020035
function reloadBrowser(done) {
  setTimeout(reload, 500)
  done()
}

function watch() {
  gulp.watch(`source/**/**.{md,svg,png,jpg}`, reloadBrowser)
  gulp.watch(
    [
      `${themeDir}/sass/**/*.{scss,css}`,
      `!${themeDir}/sass/solarized-light.scss`,
    ],
    css
  )
  gulp.watch(`${themeDir}/client-javascript/*.js`, js)
}

const bsAndWatch = done => {
  bs()
  watch()
  done()
}

gulp.task(`dev`, bsAndWatch)
gulp.task(`build`, build)
gulp.task(`sass`, compileSass)
gulp.task(`css`, css)
gulp.task(`icons`, icons)
