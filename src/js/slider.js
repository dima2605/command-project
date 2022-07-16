$(document).ready(function(){
    $('.reviews').slick({
        dots: true,
        dotsClass: "my-dots",
        // fade: true,
        lazyLoad: 'progressive',
        mobileFirst: true,
        respondTo: 'min',
    });
  });