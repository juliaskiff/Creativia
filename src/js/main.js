var $ = require("jquery");
$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrow: true,
  });
});