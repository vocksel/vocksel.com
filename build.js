
// Metalsmith
var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');
var templates   = require('metalsmith-templates');
var sass        = require('metalsmith-sass');
var watch       = require('metalsmith-watch');
var ignore      = require('metalsmith-ignore');

// Utilities
var yargs       = require('yargs');

// Server
var connect     = require('connect');
var serveStatic = require('serve-static');

var argv = yargs
  .default('serve', true)
  .argv;

/**
 * Because metalsmith-watch doesn't support files outside of the source
 * directory, I've moved the templates into the source directory and required
 * metalsmith-ignore so the template files don't get built.
 */

Metalsmith(__dirname)
  .use(sass())
  .use(markdown({
    gfm: true,
    tables: true
  }))
  .use(templates({
    engine: 'jade',
    directory: 'src/templates'
  }))
  .use(ignore([
    'templates/*'
  ]))
  .use(permalinks({
    relative: false
  }))
  .use(watch())
  .build(function(err) {
    if (err) throw err;
  });

// Pass --no-serve if you don't want to run the web server
if (argv.serve) {
  connect()
    .use(serveStatic(__dirname + '/build'))
    .listen(80);
}
