$(document).ready(function () {
  "use strict";

  if ($(window).width() <= 576) {
    $(".grid").masonry({
      // options
      itemSelector: ".grid-item",
      gutter: 20,
    });
  } else {
    $(".grid").masonry({
      // options
      itemSelector: ".grid-item",
      gutter: 40,
    });
  }

  $(".test-popup-link").magnificPopup({
    type: "image",
  });

  $(".grid-item--width1").each(function () {
    var ratio = 1.5;
    var width = $(this).width();
    var result = ratio * width;
    $(this).css("height", result);
  });

  $(".grid-item--width2").each(function () {
    var ratio = 0.665;
    var width = $(this).width();
    var result = ratio * width;
    $(this).css("height", result);
  });
});
