'use strict'

const gulp        = require( `gulp` )
const $           = require( `gulp-load-plugins` )()
const del 				= require( `del` )
const log         = require( `fancy-log` )
const lazypipe 		= require( `lazypipe` )
const args        = require( `yargs` ).argv
const browserSync = require( `browser-sync` ).create()
const webpack     = require( `webpack` )
const reload      = browserSync.reload

const isDev       = args.prod !== true
const themeDir 		= `themes/hiswe-theme`

function onError(err) {
  $.util.beep()
  if (err.annotated)      { $.util.log(err.annotated) }
  else if (err.message)   { $.util.log(err.message) }
  else                    { $.util.log(err) }
  return this.emit( `end` )
}

////////
// CSS
////////

const autoprefixer  = require('autoprefixer')
const cssDest 			= `${ themeDir }/source`

const cssDev        = lazypipe()
  .pipe( $.sourcemaps.write )

const cssProd       = lazypipe()
  .pipe( $.cleanCss )

function cleanCSS() {
  if (isDev) return Promise.resolve()
  return del([`${cssDest}/*.css`,`${cssDest}/*.css.map`])
}

function copyHighlightJSFile() {
  return gulp
  .src( `./node_modules/highlight.js/styles/solarized-light.css` )
  .pipe( $.rename({extname: `.scss`}) )
  .pipe( gulp.dest(`${themeDir}/sass`) )
}

function compileSass() {
  return gulp
  .src( `${themeDir}/sass/index.scss` )
  .pipe( $.plumber(onError) )
  .pipe( $.sourcemaps.init() )
  .pipe( $.sass() )
  .pipe( $.postcss([
    autoprefixer({ browsers: ['ie 10', 'last 2 versions'], }),
  ]) )
  .pipe( $.if(isDev, cssDev(), cssProd()) )
  .pipe( $.rename({basename: `hiswe-theme`}) )
  .pipe( gulp.dest(cssDest) )
  .pipe( $.if(isDev, browserSync.stream()) )
}

const css = gulp.series( cleanCSS, copyHighlightJSFile, compileSass )

////////
// JS
////////

const bundler     = webpack( require(`./webpack.config.js`) )

const js = done  => {
  bundler.run((err, stats) => {
    if (err) return done( err )
    const info = stats.toJson()
    if ( stats.hasErrors() ) return done( stats.toString({colors: true}) )
    done()
  })
}

js.description = `Bundle front-app, app server & api-server`

gulp.task( `js`, js )

////////
// ASSETS
////////

const svgTemplates  = [
  `default-svg`,
  `default-sass`,
  `default-demo`,
]

const icons = () => {
  return gulp
  .src( `icons/*.svg` )
  .pipe( $.cheerio({
    run: $ => {
      // remove Google's background path
      $( `path[fill=none]` ).remove()
    },
    parserOptions: {
      xmlMode: true,
    },
  }) )
  .pipe( $.rename( path => {
    const { basename }    = path
    const materialNameReg = /ic_([^\d]*)_black_24px/
    const isMaterialIcon  = materialNameReg.test(basename)
    if (!isMaterialIcon) return
    path.basename = materialNameReg.exec(basename)[1].replace(/_/g, `-`)
  }) )
  .pipe( $.svgSymbols({
    id:         `icon-%f`,
    class:      `.icon--%f`,
    fontSize:   20,
    templates:  svgTemplates,
    svgAttrs:   { class: `svg-icon-library` },
  }) )
  .pipe( $.rename({basename: `svg-icons`}) )
  .pipe( $.if( /[.]svg$/, gulp.dest(`${themeDir}/layout`)) )
  .pipe( $.if( /[.]html$/, gulp.dest('.tmp')) )
  .pipe( $.if( /[.]scss$/, gulp.dest(`${themeDir}/sass`)) )
}
icons.description = `bundle SVG files`

////////
// DEV
////////

const build = gulp.parallel(css, js)

function bs() {
  return browserSync.init({
    proxy:      `http://localhost:4000`,
    open:       false,
    port:       7000,
    ghostMode:  false,
  })
}

// https://github.com/gulpjs/gulp/issues/1626#issuecomment-231020035
function reloadBrowser( done ) {
  setTimeout( reload, 500 )
  done()
}

let hash
function watch() {
  gulp.watch( `source/**/**.{md,svg,png,jpg}`, reloadBrowser )
  gulp.watch( `${ themeDir }/sass/*.{scss,css}`,  css )
  bundler.watch({
    watch: true,
    progress: true,
    ignored: /node_modules/,
  }, (err, stats) => {
    log(`webpack watch bundle…`)
    if (err) return onError( err )
    const info = stats.toJson()
    if ( stats.hasErrors() ) return log( info.errors )
    if ( stats.hasWarnings() ) log( info.warnings )
    if ( hash !== stats.hash ) {
      hash = stats.hash
      log(`…BUNDLED`)
      setTimeout( reload, 400 )
    }
  })
}

const bsAndWatch = () => {
  bs()
  watch()
}

const dev = gulp.series(build, bsAndWatch)

gulp.task( `dev`, dev )
gulp.task( `build`, build )
gulp.task( `sass`, compileSass )
gulp.task( `css`, css )
gulp.task( `icons`, icons )
gulp.task( `default`, build )
