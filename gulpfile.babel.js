'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import babelify from 'babelify';
import eslint from 'gulp-eslint';
import gulpIf from 'gulp-if';
import source from 'vinyl-source-stream';
import runSequence from 'run-sequence';
import path from 'path';
import del from 'del';
import {stream as wiredep} from 'wiredep';
import hbsConfig from './app/_data/hbs.config';

// Global vars
const $ = gulpLoadPlugins(),
      reload = browserSync.reload,
      hbsOptions = {
        batch : ['app/_partials/'],
        helpers: {}
      },
      wiredepOpts = {
        bowerJson: require('./bower.json'),
        directory: './bower_components'
      };

// Compile .hbs files to .html
gulp.task('hbs', () => {
  return gulp.src('app/_pages/**/*.hbs')
    .pipe($.compileHandlebars(hbsConfig, hbsOptions))
    .pipe($.rename({ extname: '.html' }))
    .pipe($.flatten())
    .pipe(gulp.dest('app/pages'))
    .pipe(reload({stream: true}));
});

// Compiling scss to css
gulp.task('styles', () => {
  return gulp.src('app/scss/main.scss')
    .pipe($.sass())
    .pipe($.autoprefixer({browsers: ['last 4 versions']}))
    .pipe($.plumber({ errorHandler: function() {
      console.log('error');
    }}))
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream: true}));
});

// Compiling ES6 files to JS
gulp.task('scripts', () => {
  browserify({
    entries: 'app/js/es6/main.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('app/js/'))
  .pipe(reload({stream: true}));
});

// eslint task
gulp.task('lint', () => {
  return gulp.src('app/js/es6/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// BrowserSync task
gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      index: "home.html",
      baseDir: ['app/pages', 'app/'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });
});

// Inject dependencies files
gulp.task('inject', () => {
  const _sources = gulp.src(['css/*.css', 'js/*.js']);

  return gulp.src('app/_partials/*.hbs')
    .pipe(wiredep(wiredepOpts))
    .pipe($.inject(_sources))
    .pipe(gulp.dest('app/_partials'));
});

// useref task concat and minified the css and js files
gulp.task('useref', () => {
  return gulp.src('app/pages/*.html')
    .pipe($.useref())
    .pipe(gulpIf('*.js', $.uglify()))
    .pipe(gulpIf('*.css', $.cssnano()))
    .pipe(gulp.dest('dist'))
});

// optimized images
gulp.task('images', () => {
  return gulp.src('app/images/*.+(jpg|png|gif|svg)')
  .pipe($.cache($.imagemin()))
  .pipe(gulp.dest('dist/images'))
});

// move fonts to dist
gulp.task('fonts', () => {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

// clean dist folder
gulp.task('clean:dist', () => {
  return del.sync('dist')
});

// Watching changes
gulp.task('watch', () => {
  gulp.watch(['app/_pages/**/*.hbs', 'app/_partials/*.hbs'], ['hbs']);
  gulp.watch('app/scss/**/*.scss', ['styles']);
  gulp.watch('app/js/es6/**/*.js', ['scripts']);
});

// Build task
gulp.task('build', (cb) => {
  runSequence('clean:dist', ['styles', 'scripts', 'useref', 'images', 'fonts'], cb)
});

// default task
gulp.task('default', () => {
  runSequence(['hbs', 'styles', 'scripts', 'inject', 'browserSync', 'watch']);
});
