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

  $(".tiles-item").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        background: "url(" + $(this).data("bg") + ")",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "50%, 50%",
      });
    }
  });

  $(".grid-item").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        background: "url(" + $(this).data("bg") + ")",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "50%, 50%",
      });
    }
  });
});
