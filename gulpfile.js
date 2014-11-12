var gulp        = require('gulp');
var connect     = require('gulp-connect');
var imagemin    = require('gulp-imagemin');
var sass        = require('gulp-sass');
var frontMatter = require('gulp-front-matter');

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

// Temporary files, like the Sass cache.
var temp = [
  '.sass-cache'
]


// Clean Up
// =============================================================================

gulp.task('clean', function(cb) {
  del(paths.dest, cb);
});

gulp.task('clean-temp', function(cb) {
  del(temp, cb);
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
  return gulp.src(join(paths.src, '**/*.md'))
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

// Development
// =============================================================================

gulp.task('server', function() {
  connect.server({
    root: paths.dest,
    port: 80
  });
});

gulp.task('watch', function() {
  gulp.watch(join(paths.css, '**'), ['styles']);

  gulp.watch(join(paths.img, '**'), ['images']);

  gulp.watch(join(paths.src, '**/*.{md,jade}'), ['metalsmith'])
});


// Default
// =============================================================================

gulp.task('build', function() {
  // Always clean the directory before compiling
  runSequence('clean', [
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
