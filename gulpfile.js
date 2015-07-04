'user strict';

var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var less        = require('gulp-less');
var concat      = require('gulp-concat');
var sourcemaps  = require('gulp-sourcemaps');
var minifyCSS   = require('gulp-minify-css');
var connect     = require('gulp-connect');
var open        = require('gulp-open');
var browserify  = require('gulp-browserify');
var html        = require('html-browserify');
var del         = require('del');

/**
 * Clean generated source folders
 */
gulp.task('clean', function(callback){
    del(['./public/js', './public/css'], callback);
});

/**
 * Building App and Source Maps
 */
gulp.task('scripts', function(){
    return gulp.src('src/js/index.js')
              .pipe(sourcemaps.init({loadMaps: true}))
              .pipe(browserify({insertGlobals: true,transform: html}))
              .pipe(sourcemaps.write('.'))
              .pipe(gulp.dest('./public/js'))
              .pipe(connect.reload());
});

/**
 *  Concatenate minify and transalte less to css
 */
gulp.task('styles', function(){
  return gulp.src('src/less/solrjs.less')
            .pipe(sourcemaps.init())
            .pipe(less({ sourceMap : true}))
            .pipe(minifyCSS())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./public/css'))
            .pipe(connect.reload());
});

/**
 * Using watch to recompile javascript and less
 */
gulp.task('watch', function(){
    return gulp.watch('src/**/*.{js,less}', ['styles', 'scripts']);
});

/**
 *
 */
 gulp.task('connect', function(){
     connect.server({
        root: ['./public'],
        port: 8000,
        livereload: true
      });
 });

gulp.task('open', function(){
  var options = {
    url: 'http://localhost:8000',
    app: 'chrome'
  };
  return gulp.src('./index.html')
              .pipe(open('http://localhost:8000', options));
});
/*
 * Default Tasks
 */
gulp.task('default', ['clean','connect', 'scripts', 'styles', 'watch', 'open' ])
