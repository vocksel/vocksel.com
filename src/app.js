import { setupPhotoWaypoints } from './js/photo-coloring';
import template from './views/index.pug';
import locals from '../locals.babel.js';

function propagateDocument() {
  // We're wrapping the locals in a `self` key because pug-loader doesn't seem
  // to be respecting the query.
  //
  // Setting `self: true` for the query should wrap the locals in a `self` key
  // for us, but it doesn't seem to be working.
  //
  // We'll only have Pug in the project for a little while longer, so this is
  // just a workaround until its replaced.
  const html = template({ self: locals })
  document.write(html)
}

propagateDocument()
setupPhotoWaypoints()
