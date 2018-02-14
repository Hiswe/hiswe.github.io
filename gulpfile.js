'use strict'

const gulp        = require( `gulp` )
const $           = require( `gulp-load-plugins` )()
const del 				= require( `del` )
const lazypipe 		= require( `lazypipe` )
const args        = require( `yargs` ).argv
const browserSync = require( `browser-sync` ).create()
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
const cssDest 			= `${ themeDir }/source/css`

const cssDev        = lazypipe()
  .pipe( $.sourcemaps.write )

const cssProd       = lazypipe()
  .pipe( $.minifyCss )

function cleanCSS() {
  if (isDev) return Promise.resolve()
  return del([`${themeDir}/*.css`,`${cssDest}/*.css.map`])
}

function compileCSS() {
  return gulp
  .src( `${themeDir}/stylus/style.styl` )
  .pipe( $.plumber(onError) )
  .pipe( $.sourcemaps.init() )
  .pipe( $.stylus({
    'include css': true,
  }) )
  .pipe( $.postcss([
    autoprefixer({ browsers: ['ie 10', 'last 2 versions'], }),
  ]) )
  .pipe( $.if(isDev, cssDev(), cssProd()) )
  .pipe( gulp.dest(cssDest) )
  .pipe( $.if(isDev, reload({stream: true})) )
}

const css = gulp.series( cleanCSS, compileCSS )

////////
// DEV
////////

const build = css

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

function watch() {
  gulp.watch( `source/**/**.{md,svg,png,jpg}`, reloadBrowser )
  gulp.watch( `${ themeDir }/stylus/**/*.styl`,  css )
}

const bsAndWatch = () => {
  bs()
  watch()
}

const dev = gulp.series(build, bsAndWatch)

gulp.task( `dev`, dev )
gulp.task( `build`, build )
gulp.task( `css`, css )
gulp.task( `default`, build )
