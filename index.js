
// Metalsmith
var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');
var templates   = require('metalsmith-templates');
var sass        = require('metalsmith-sass');
var watch       = require('metalsmith-watch');

// Utilities
var argv        = require('yargs').argv;

// Server
var connect     = require('connect');
var serveStatic = require('serve-static');

Metalsmith(__dirname)
  .use(sass())
  .use(markdown({
    gfm: true,
    tables: true
  }))
  .use(templates('jade'))
  .use(permalinks({
    relative: false
  }))
  .use(watch())
  .build(function(err) {
    if (err) throw err;
  });

// Optionally run a webserver if --serve is passed on the command line
if (argv.serve) {
  connect()
    .use(serveStatic(__dirname + '/build'))
    .listen(80);
}
