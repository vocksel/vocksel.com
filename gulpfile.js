var gulp        = require('gulp');
var connect     = require('gulp-connect');
var sass        = require('gulp-sass');
var plumber     = require('gulp-plumber');

var del         = require('del');
var path        = require('path');
var git         = require('simple-git')


// Configuration
// =============================================================================

// Locations where files are stored. Commonly used with 'path.join' and a
// globbing pattern
var paths = {
  src:   'src',
  css:   'src/css',
  img:   'src/img',
  js:    'src/js',
  dest: 'build',

  // These are static files that don't have any preprocessing, but still need to
  // be moved when building the site.
  static: [
    'src/favicon.ico',
    'src/**/*.html'
  ]
}

// Remote repositories for deploying the site. These can only be pushed to with
// proper authorization.
var remotes = {
  staging: "ssh://git@davidminnerly.com/~/beta.davidminnerly.git",
  production: "ssh://git@davidminnerly.com/~/davidminnerly.git"
}

// Compiling
// =============================================================================

function clean(done) {
  del(paths.dest, done);
}

function styles() {
  return gulp.src(path.join(paths.css, 'main.scss'), { base: paths.src })
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(paths.dest));
}

function images() {
  return gulp.src(path.join(paths.img, '**'), { base: paths.src })
    .pipe(gulp.dest(paths.dest));
}

function scripts() {
  return gulp.src(path.join(paths.js, '**'), { base: paths.src })
    .pipe(plumber())
    .pipe(gulp.dest(paths.dest));
}

// Moving files that aren't processed by the above tasks.
function move() {
  return gulp.src(paths.static)
    .pipe(plumber())
    .pipe(gulp.dest(paths.dest));
}

gulp.task('compile', gulp.parallel(move, styles, images, scripts))
gulp.task('build', gulp.series(clean, 'compile'))


// Development
// =============================================================================

function server() {
  connect.server({
    root: paths.dest
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
  gulp.watch(path.join(paths.src, '**/*.scss'), styles);

  gulp.watch(path.join(paths.img, '**'), images);

  gulp.watch(path.join(paths.js, '**'), scripts);

  done()
}

gulp.task('serve', gulp.series('build', server, watch))


// Deployment
// =============================================================================

var buildRepo = git(paths.dest)

function makeRelease(done) {
  buildRepo
    .init()
    .add('.')
    .commit("Release");
  done()
}

function setupRemote(remote) {
  buildRepo.addRemote('origin', remove)
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

gulp.task('deploy:setup', gulp.series('build', makeRelease))
gulp.task('deploy:staging', gulp.series('deploy:setup', setupStaging, push))
gulp.task('deploy:prod', gulp.series('deploy:setup', setupProduction, push))


// Default
// =============================================================================

gulp.task('default', gulp.parallel('serve'))
