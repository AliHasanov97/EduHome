var windows = $(window);
var stick = $(".header-bottom");
windows.on("scroll", function () {
  var scroll = windows.scrollTop();
  if (scroll < 5) {
    stick.removeClass("new-header");
    $(".header-bottom").css("height","125px")
  } else {
    stick.addClass("new-header");
    $(".new-header").css("height","80px")
    $(".new-header").css("height","60px")
  }
});