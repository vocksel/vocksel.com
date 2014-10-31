var Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    permalinks = require('metalsmith-permalinks'),
    templates  = require('metalsmith-templates'),
    sass       = require('metalsmith-sass'),
    serve      = require('metalsmith-serve'),
    watch      = require('metalsmith-watch');
var argv       = require('yargs').argv;

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
