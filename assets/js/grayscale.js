(function($) {
  "use strict";

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset() != undefined && $("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Image slider - leave off the src on img tags
  // use the data-lazy attribute like <img data-lazy=$URL>
  $(".slider").slick({
    autoplay: true,
    mobileFirst: true,
    lazyLoad: "ondemand",
    arrows: true,
    dots: true
  });

  ["red", "yellow", "green", "blue", "purple"].forEach(function(room) {
    var disp =".display".concat(room);
    var slicknav = ".nav".concat(room);

    $(disp).slick({
      mobileFirst: true,
      lazyLoad: "ondemand",
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    $(slicknav).slick({
      mobileFirst: true,
      lazyLoad: "ondemand",
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      asNavFor: disp
    });
  });
})(jQuery);
