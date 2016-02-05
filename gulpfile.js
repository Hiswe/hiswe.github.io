'use strict';

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var del 				= require('del');
var lazypipe 		= require('lazypipe');
var args        = require('yargs').argv;
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

var isDev       = args.prod !== true;
var themeDir 		= 'themes/hiswe-theme';

function onError(err) {
  $.util.beep();
  if (err.annotated)      { $.util.log(err.annotated); }
  else if (err.message)   { $.util.log(err.message); }
  else                    { $.util.log(err); }
  return this.emit('end');
}

////////
// CSS
////////

var autoprefixer  = require('autoprefixer');
var cssDest 			= themeDir + '/source/css'

var cssDev        = lazypipe()
  .pipe($.sourcemaps.write);

var cssProd       = lazypipe()
  .pipe($.minifyCss)

gulp.task('clean-css', function (cb) {
  if (isDev) return cb();
  return del([themeDir + '/*.css', cssDest + '/*.css.map'], cb);
});

gulp.task('css', ['clean-css'], function () {
  return gulp
  	.src(themeDir + '/stylus/style.styl')
    .pipe($.plumber(onError))
    .pipe($.sourcemaps.init())
    .pipe($.stylus())
    .pipe($.postcss([
        autoprefixer({ browsers: ['ie 10', 'last 2 versions'], }),
      ]))
    .pipe($.if(isDev, cssDev(), cssProd()))
    .pipe(gulp.dest(cssDest))
    .pipe($.if(isDev, reload({stream: true})));
});

////////
// DEV
////////

gulp.task('build', ['css']);

gulp.task('dev', ['build'], function () {
  browserSync.init({
    proxy: 'http://localhost:4000',
    open: false,
    port: 7000,
    ghostMode: false,
  });
  gulp.watch('source/**/**.{md, svg, png, jpg}', function () {
    setTimeout(reload, 500);
  });
  gulp.watch(themeDir + '/stylus/**/*.styl',  ['css']);
});

gulp.task('default', ['build']);



