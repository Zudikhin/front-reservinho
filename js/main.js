$(document).ready(function () {
  "use strict";

  $(".tiles-grid").masonry({
    itemSelector: ".tiles-grid-item",
    columnWidth: ".tiles-grid-sizer",
    percentPosition: true,
    gutter: ".tiles-gutter-sizer",
  });

  $(".grid").masonry({
    // options
    itemSelector: ".grid-item",
    gutter: ".gutter-sizer",
  });

  $(".test-popup-link").magnificPopup({
    type: "image",
  });
});
