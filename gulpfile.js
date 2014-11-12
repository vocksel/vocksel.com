var gulp        = require('gulp');
var cache       = require('gulp-cache');
var imagemin    = require('gulp-imagemin');
var sass        = require('gulp-sass');
var connect     = require('connect');
var del         = require('del');
var path        = require('path');
var serveStatic = require('serve-static');
var runSequence = require('run-sequence');

var join = path.join;


// Configuration
// =============================================================================

// Locations where files are stored. Commonly used with 'path.join' and a
// globbing pattern
var paths = {
  src: 'src',
  css: 'src/css',
  img: 'src/img',
  dest: 'build'
}


// Clean Up
// =============================================================================

gulp.task('clean', function(callback) {
  del(paths.dest, callback);
});


// Compiling
// =============================================================================

gulp.task('styles', function() {
  return gulp.src(join(paths.css, '**/*.scss'), { base: paths.src })
    .pipe(sass({
      sourcemap: false,
      style: 'compressed'
    }))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('images', function() {
  return gulp.src(join(paths.img, '**'), { base: paths.src })
    .pipe(cache(imagemin({
      optimizationLevel: 5,
      progressive: true
    })))
    .pipe(gulp.dest(paths.dest));
});


// Development
// =============================================================================

gulp.task('server', function() {
  var root = join(__dirname, paths.dest);

  connect()
    .use(serveStatic(root))
    .listen(80);
});

gulp.task('watch', function() {
  gulp.watch(join(paths.css, '**'), ['styles']);

  gulp.watch(join(paths.img, '**'), ['images']);
});


// Default
// =============================================================================

gulp.task('build', function() {
  // Always clean the directory before compiling
  runSequence('clean', ['styles', 'images']);
});

gulp.task('serve', [
  'build',
  'server',
  'watch'
]);

gulp.task('default', ['serve']);
