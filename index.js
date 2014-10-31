
// Metalsmith
var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');
var templates   = require('metalsmith-templates');
var sass        = require('metalsmith-sass');
var serve       = require('metalsmith-serve');
var watch       = require('metalsmith-watch');

// Utilities
var argv        = require('yargs').argv;

var Smithy = Metalsmith(__dirname);

Smithy
  .use(sass())
  .use(markdown({
    gfm: true,
    tables: true
  }))
  .use(templates('jade'))
  .use(permalinks({
    relative: false
  }));

if (argv.serve) {
  Smithy
    .use(serve())
    .use(watch());
}

Smithy
  .build(function(err) {
    if (err) throw err;
  });
