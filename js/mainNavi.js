$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('nav').addClass('fixed-top');
    } else {
      $('nav').removeClass('fixed-top');
    }
  });