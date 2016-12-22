/**
 * Turns images from grayscale to color as you scroll over them.
 *
 * You need to apply the .js-color-scroll and .grayscale classes to the image
 * that you want to use. The first class is the hook we use, and the second is
 * to ensure images are grayscale by default.
 *
 * It can be setup so that .grayscale is applied when the script runs, but
 * then the images are briefly in color as the page loads.
 *
 * This method requires adding two classes in the markup, but the images being
 * grayscale immediately is very desirable.
 *
 * Example:

    <img class="js-color-scroll  grayscale" src="/img/sample.pmg">

 */

import $ from 'jquery'
import 'waypoints/lib/noframework.waypoints.js';

const IN_FOCUS_OFFSET= '50%'; // Top of the image meets middle of viewport.
const OUT_OF_FOCUS_OFFSET = '-10%'; // Last bit of the image meets top of viewport.

function toggleColor(element) {
  $(element).toggleClass("grayscale colorize")
}

function newPhotoWaypoint(element, offset) {
  new Waypoint({
    element: element,
    offset: offset,
    handler: () => toggleColor(element),
  })
}

export function setupPhotoWaypoints() {
  const photos = document.getElementsByClassName('js-color-scroll');
  const offsets = [ IN_FOCUS_OFFSET, OUT_OF_FOCUS_OFFSET ];

  for (let photo of photos) {
    for (let offset of offsets) {
      newPhotoWaypoint(photo, offset)
    }
  }
}
