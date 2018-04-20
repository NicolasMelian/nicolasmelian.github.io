$(document).ready(function() {
  $(".nav-item a").click(function(e) {
    if (this.getAttribute("href").charAt(0) == "#") {
      e.preventDefault();
      $(this).addClass("active");
      $(this).removeClass("active");
      $("html, body").stop();
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
      }, 1400)
    } else {
      $($(this)).attr("target", "_blank")
    }
  })
})

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}