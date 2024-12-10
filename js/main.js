var windows = $(window);
var stick = $(".header-bottom");
windows.on("scroll", function () {
  var scroll = windows.scrollTop();
  if (scroll < 5) {
    stick.removeClass("new-header");
  } else {
    stick.addClass("new-header");
  }
});