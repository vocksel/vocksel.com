import gulp from 'gulp';
import connect from 'gulp-connect';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import del from 'del';
import path from 'path';
import git from 'simple-git'
import moment from 'moment';

// Configuration
// =============================================================================

// This is where the source code is stored.
const SOURCE_DIR = 'src'
const BUILD_DIR = 'build'

// Used for retrieving files/folders in the source directory.
function src(f) {
  return path.join(SOURCE_DIR, f);
}

// Current year and my age, for copyright and displaying how old I am,
// respectively. Now these don't have to be updated every year.
const year = moment().year();
const age = moment().diff("1996-07-15", 'years');

// Properties are referenced as 'self.property' in Pug files.
// (e.g. 'self.title')
const locals = {
  title: 'David Minnerly',
  repo: 'https://github.com/vocksel/my-website',
  copyright: '&copy; ' + year + ' David Minnerly',
  age: age
}

// Paths to the files that need to be compiled.
const paths = {
  css: src('css'),
  views: src('views'),

  // Static files that don't require pre-processing. They're simply moved when
  // building the site.
  static: [
    src('img/**'),
    src('js/**'),
    src('favicon.ico')
  ]
}

// Remote repositories for deploying the site. These can only be pushed to with
// proper authorization.
const remotes = {
  staging: 'ssh://git@davidminnerly.com/~/beta.davidminnerly.git',
  production: 'ssh://git@davidminnerly.com/~/davidminnerly.git'
}

// Helpers
// =============================================================================

// Changes `site/page.html` to `site/page/index.html`.
//
// This is used in conjunction with gulp-rename to change all of our lone html
// files to folders with index files.
//
// This allows us to access all of our pages at http://example.org/page/,
// instead of having to append `.html` to the end.
function fileToFolder(file) {
  file.dirname = path.join(file.dirname, file.basename)
  file.basename = 'index'
}

// Compiling
// =============================================================================

export function clean() {
  return del(BUILD_DIR)
}

export function styles() {
  return gulp.src(path.join(paths.css, 'main.scss'), { base: SOURCE_DIR })
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        // Anything installed via NPM can be easily referenced by its folder
        // name when importing.
        //
        // For example, instead of "../../node_modules/inuitcss", we can simply
        // use "inuitcss".
        path.join(__dirname, 'node_modules')
      ]
    }))
    .pipe(gulp.dest(BUILD_DIR));
}

export function views() {
  return gulp.src(path.join(paths.views, '**/*.pug'))
    .pipe(plumber())
    .pipe(pug({
      self: true,
      locals: locals,
      basedir: SOURCE_DIR
    }))

    // We're using gulpif to ignore the index file in the root so that it will
    // compile normally.
    //
    // Every other pug file (that's not a partial) will be compiled to a folder
    // with an `index.html`. This allows us to access pages at
    // http://davidminnerly.com/page/ instead of having a trailing `.html`.
    .pipe(gulpif('!index*', rename(fileToFolder)))

    .pipe(gulp.dest(BUILD_DIR));
}

// Moving files that aren't processed by the above tasks.
export function move() {
  return gulp.src(paths.static, { base: SOURCE_DIR })
    .pipe(gulp.dest(BUILD_DIR));
}

// Development
// =============================================================================

export function server() {
  connect.server({
    root: BUILD_DIR
  });
}

export function watch(done) {
  // All watched tasks should include `.pipe(plumber())` at the beginning of the
  // stream. This prevents you from having to rerun tasks if an error occurs.
  //
  // Very helpful when working with Sass. If you mess up a variable name or
  // @import path, everything is still running fine.

  gulp.watch(paths.static, move);
  gulp.watch(src('**/*.scss'), styles);
  gulp.watch(src('**/*.pug'), views);

  done()
}

// Deployment
// =============================================================================

let buildRepo = git(BUILD_DIR)

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
  setupRemote(remotes.production)
  done()
}

function push(done) {
  buildRepo.push(['-f', 'origin', 'master']);
  done()
}

// Default
// =============================================================================

export const compile = gulp.parallel(move, views, styles)
export const build = gulp.series(clean, compile)
export const serve = gulp.series(build, gulp.parallel(server, watch));

export const deploySetup = gulp.series(build, makeRelease)
export const deployStaging = gulp.series(deploySetup, setupStaging, push);
export const deployProd = gulp.series(deploySetup, setupProduction, push);
export const deploy = deployStaging

export default serve;
