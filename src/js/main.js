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
function colorScroll() {
  var inFocusOffset = "50%"; // Top of the image meets middle of viewport.
  var outOfFocusOffset = "-10%"; // Last bit of the image meets top of viewport.

  var $photos = $(".js-color-scroll");

  function toggleColor(element) {
    $(element).toggleClass("grayscale colorize")
  }

  function waypointHandler(direction) {
    toggleColor(this.element)
  }

  $photos.waypoint(waypointHandler, { offset: inFocusOffset });
  $photos.waypoint(waypointHandler, { offset: outOfFocusOffset });
}

colorScroll()
