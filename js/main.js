$(document).ready(function () {
  "use strict";

  $(".grid").masonry({
    // options
    itemSelector: ".grid-item",
  });

  $(".test-popup-link").magnificPopup({
    type: "image",
  });
});
