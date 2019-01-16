require('./mobaward');
require('./wow.min');
require('./popper.min');
require('./owl.carousel.min');
require('./jquery-3.3.1.min');
//require('./bootstrap.min');

require('./css/about.css');
require('./css/about-certificates.css');
require('./css/animate.css');
require('./css/bootstrap.min.css');
//require('./css/fontawesome-all.css');
require('./css/index_style.css');
require('./css/main.css');
require('./css/mobaward.css');
require('./css/owl.carousel.min.css');
require('./css/owl.theme.default.min.css');

$(window).scroll(function(){
  if ($(document).scrollTop() > $(".main-menu").height()) {
    $(".main-menu").addClass("fixed-top");
  } else {
    $(".main-menu").removeClass("fixed-top");
  }
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    width: 100,
    height: 100,
    items:1
  });
});
