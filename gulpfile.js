var gulp        = require('gulp');
var connect     = require('gulp-connect');
var imagemin    = require('gulp-imagemin');
var sass        = require('gulp-sass');
var frontMatter = require('gulp-front-matter');
var plumber     = require('gulp-plumber');
var notify      = require('gulp-notify');

var gulpsmith   = require('gulpsmith');
var markdown    = require('metalsmith-markdown');
var templates   = require('metalsmith-templates');
var permalinks  = require('metalsmith-permalinks');

var del         = require('del');
var path        = require('path');
var runSequence = require('run-sequence');
var jade        = require('jade');
var assign      = require('lodash.assign');

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
  ],

  // Temporary files, like the Sass cache.
  temp: [
    '.sass-cache'
  ]
}


// Clean Up
// =============================================================================

gulp.task('clean', function(cb) {
  del(paths.dest, cb);
});

gulp.task('clean-temp', function(cb) {
  del(paths.temp, cb);
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

/**
 * I intend to only use Metalsmith temporarily. It was a great stand-alone
 * solution, but now that I have the power of Gulp, I'd like to use it solely
 * for my build system.
 */
gulp.task('metalsmith', function() {
  // Only markdown files directly in the source are being handled. This is to
  // prevent docs included with Bower components from being compiled.
  return gulp.src(join(paths.src, '*.md'))
    .pipe(plumber({ errorHandler: onError }))
    .pipe(frontMatter()).on('data', function(file) {
      assign(file, file.frontMatter);
      delete file.frontMatter;
    })
    .pipe(gulpsmith()
      .use(markdown({
        gfm: true,
        tables: true
      }))
      .use(templates({
        engine: 'jade',
        directory: 'src/templates'
      }))
      .use(permalinks({
        relative: false
      })))
    .pipe(gulp.dest(paths.dest));
});

// Moving files that aren't processed by the above tasks.
gulp.task('move', function() {
  return gulp.src(paths.static)
    .pipe(gulp.dest(paths.dest));
})


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
  // If you mess up a variable name or path you don't need to worry.

  gulp.watch(paths.static, ['move']);

  gulp.watch(join(paths.css, '**'), ['styles']);

  gulp.watch(join(paths.img, '**'), ['images']);

  gulp.watch(join(paths.src, '**/*.{md,jade}'), ['metalsmith'])
});


// Default
// =============================================================================

gulp.task('build', function() {
  // Always clean the directory before compiling
  runSequence('clean', [
    'move',
    'styles',
    'images',
    'metalsmith'
  ]);
});

gulp.task('serve', [
  'build',
  'server',
  'watch'
]);

gulp.task('default', ['serve']);
