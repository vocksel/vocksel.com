var gulp        = require('gulp');
var connect     = require('gulp-connect');
var imagemin    = require('gulp-imagemin');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var plumber     = require('gulp-plumber');
var notify      = require('gulp-notify');

var del         = require('del');
var path        = require('path');
var runSequence = require('run-sequence');

var join = path.join;


// Helpers
// =============================================================================

// Used with Plumber to handle errors
function onError(err) {
  notify.onError({
    title: "Gulp",
    subtitle: "Failure!",
    message: "Error: <%= error.message %>",
    sound: "Beep"
  })(err);

  this.emit('end');
}


// Configuration
// =============================================================================

// Locations where files are stored. Commonly used with 'path.join' and a
// globbing pattern
var paths = {
  src: 'src',
  css: 'src/css',
  img: 'src/img',
  dest: 'build',

  // Static files that don't require any pre-processing
  static: [
    'src/favicon.ico'
  ]
}


// Clean Up
// =============================================================================

gulp.task('clean', function(cb) {
  del(paths.dest, cb);
});


// Compiling
// =============================================================================

gulp.task('styles', function() {
  return gulp.src(join(paths.css, '**/*.scss'), { base: paths.src })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass({
      sourcemap: false,
      style: 'compressed'
    }))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('images', function() {
  return gulp.src(join(paths.img, '**'), { base: paths.src })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true
    }))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('jade', function() {
  return gulp.src(join(paths.src, '*.jade'))
    .pipe(plumber({ errorHandler: onError }))
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(paths.dest));
});

// Moving files that aren't processed by the above tasks.
gulp.task('move', function() {
  return gulp.src(paths.static)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest(paths.dest));
});


// Development
// =============================================================================

gulp.task('server', function() {
  connect.server({
    root: paths.dest,
    port: 80
  });
});

gulp.task('watch', function() {
  // All watched tasks should include `.pipe(plumber())` at the beginning of the
  // stream. This prevents you from having to rerun tasks if an error occurs.
  //
  // Very helpful when working with Sass. If you mess up a variable name or
  // @import path, everything is still running fine.

  gulp.watch(paths.static, ['move']);

  gulp.watch(join(paths.css, '**'), ['styles']);

  gulp.watch(join(paths.img, '**'), ['images']);

  gulp.watch(join(paths.src, '*.jade'), ['jade'])
});


// Default
// =============================================================================

gulp.task('build', function() {
  // Always clean the directory before compiling
  runSequence('clean', [
    'move',
    'styles',
    'images',
    'jade'
  ]);
});

gulp.task('serve', [
  'build',
  'server',
  'watch'
]);

gulp.task('default', ['serve']);
