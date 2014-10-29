var Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    permalinks = require('metalsmith-permalinks'),
    templates  = require('metalsmith-templates'),
    sass       = require('metalsmith-sass');

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
  .build(function(err) {
    if (err) throw err;
  });
