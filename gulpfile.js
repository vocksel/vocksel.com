var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug'); // formerly Jade

var del = require('del');
var path = require('path');
var git = require('simple-git');


// Configuration
// =============================================================================

// This is where the source code is stored.
const SOURCE_DIR = 'src'
const BUILD_DIR = 'build'

// Used for retrieving files/folders in the source directory.
function src(f) {
  return path.join(SOURCE_DIR, f);
}

var locals = {
  site: {
    title: 'David Minnerly',
    url: 'http://davidminnerly.com'
  }
}

// Paths to the files that need to be compiled.
var paths = {
  css: src('css'),
  img: src('img'),
  js: src('js'),

  // Static files that don't require pre-processing. They're simply moved when
  // building the site.
  static: [
    src('favicon.ico')
  ]
}

// Remote repositories for deploying the site. These can only be pushed to with
// proper authorization.
var remotes = {
  staging: 'ssh://git@davidminnerly.com/~/beta.davidminnerly.git',
  production: 'ssh://git@davidminnerly.com/~/davidminnerly.git'
}

// Compiling
// =============================================================================

function clean(done) {
  return del(BUILD_DIR, done);
}

function styles() {
  return gulp.src(path.join(paths.css, 'main.scss'), { base: SOURCE_DIR })
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(BUILD_DIR));
}

function images() {
  return gulp.src(path.join(paths.img, '**'), { base: SOURCE_DIR })
    .pipe(gulp.dest(BUILD_DIR));
}

function scripts() {
  return gulp.src(path.join(paths.js, '**'), { base: SOURCE_DIR })
    .pipe(plumber())
    .pipe(gulp.dest(BUILD_DIR));
}

function templates() {
  return gulp.src(path.join(SOURCE_DIR, '*.pug'))
    .pipe(plumber())
    .pipe(pug({
      locals: locals
    }))
    .pipe(gulp.dest(BUILD_DIR));
}

// Moving files that aren't processed by the above tasks.
function move() {
  return gulp.src(paths.static)
    .pipe(plumber())
    .pipe(gulp.dest(BUILD_DIR));
}

gulp.task('compile', gulp.parallel(move, templates, styles, images, scripts));
gulp.task('build', gulp.series(clean, 'compile'));


// Development
// =============================================================================

function server() {
  connect.server({
    root: BUILD_DIR
  });
}

function watch(done) {
  // All watched tasks should include `.pipe(plumber())` at the beginning of the
  // stream. This prevents you from having to rerun tasks if an error occurs.
  //
  // Very helpful when working with Sass. If you mess up a variable name or
  // @import path, everything is still running fine.

  gulp.watch(paths.static, move);

  // Gets all Sass files, even the ones in bower_components.
  gulp.watch(path.join(SOURCE_DIR, '**/*.scss'), styles);

  gulp.watch(path.join(paths.img, '**'), images);

  gulp.watch(path.join(paths.js, '**'), scripts);

  gulp.watch(path.join(SOURCE_DIR, '**/*.pug'), templates);

  done()
}

gulp.task('serve', gulp.series('build', gulp.parallel(server, watch)))


// Deployment
// =============================================================================

var buildRepo = git(BUILD_DIR)

function makeRelease(done) {
  buildRepo
    .init()
    .add('.')
    .commit('Release');
  done()
}

function setupRemote(remote) {
  buildRepo.addRemote('origin', remote)
}

function setupStaging(done) {
  setupRemote(remotes.staging)
  done()
}

function setupProduction(done) {
  setupRemotes(remotes.production)
  done()
}

function push(done) {
  buildRepo.push(['-f', 'origin', 'master']);
  done()
}

gulp.task('deploy:setup', gulp.series('build', makeRelease));
gulp.task('deploy:staging', gulp.series('deploy:setup', setupStaging, push));
gulp.task('deploy:prod', gulp.series('deploy:setup', setupProduction, push));
gulp.task('deploy', gulp.parallel('deploy:staging'));


// Default
// =============================================================================

gulp.task('default', gulp.parallel('serve'));
