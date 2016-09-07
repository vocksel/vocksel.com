var gulp        = require('gulp');
var connect     = require('gulp-connect');
var sass        = require('gulp-sass');
var plumber     = require('gulp-plumber');

var del         = require('del');
var path        = require('path');


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


// Clean Up
// =============================================================================

gulp.task(function clean(done) {
  del(paths.dest, done);
});


// Compiling
// =============================================================================

gulp.task('styles', function() {
  return gulp.src(path.join(paths.css, 'main.scss'), { base: paths.src })
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('images', function() {
  return gulp.src(path.join(paths.img, '**'), { base: paths.src })
    .pipe(gulp.dest(paths.dest));
});

gulp.task('scripts', function() {
  return gulp.src(path.join(paths.js, '**'), { base: paths.src })
    .pipe(plumber())
    .pipe(gulp.dest(paths.dest));
});

// Moving files that aren't processed by the above tasks.
gulp.task('move', function() {
  return gulp.src(paths.static)
    .pipe(plumber())
    .pipe(gulp.dest(paths.dest));
});


// Development
// =============================================================================

gulp.task('server', function() {
  connect.server({
    root: paths.dest
  });
});

gulp.task('watch', function() {
  // All watched tasks should include `.pipe(plumber())` at the beginning of the
  // stream. This prevents you from having to rerun tasks if an error occurs.
  //
  // Very helpful when working with Sass. If you mess up a variable name or
  // @import path, everything is still running fine.

  gulp.watch(paths.static, gulp.parallel('move'));

  // Gets all Sass files, even the ones in bower_components.
  gulp.watch(path.join(paths.src, '**/*.scss'), gulp.parallel('styles'));

  gulp.watch(path.join(paths.img, '**'), gulp.parallel('images'));

  gulp.watch(path.join(paths.js, '**'), gulp.parallel('scripts'));

  done()
});


// Default
// =============================================================================

gulp.task('compile', gulp.parallel('move', 'styles', 'images', 'scripts'))

gulp.task('build', gulp.series('clean', 'compile'))

gulp.task('serve', gulp.series('build', 'server', 'watch'));

gulp.task('default', gulp.parallel('serve'))
