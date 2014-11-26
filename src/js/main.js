(function() {
  var s = skrollr.init();

  // Trying to get Skrollr to work properly on mobile devices is taking up too
  // much time. Parallax on mobile is on hold until after v5 is released.
  if (s.isMobile()) {
    s.destroy();
  }
})();
