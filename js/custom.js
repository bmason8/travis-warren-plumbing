$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
})

$(window).on('resize', function(){
      var win = $(this);
      if (win.width() < 600) { 

      $('#nav-adjust').removeClass('right');

      }
    else
    {
        $('#nav-adjust').addClass('right');
    }

});

// Smooth scroll functionality
$(function () {
    $('a[href^="#"]').click(function (e) {
        var target = $(this).attr('href');
        var strip = target.slice(1);
        var anchor = $("a[name='" + strip + "']");
        var headerHeight = $('header').outerHeight();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: anchor.offset().top - headerHeight
        }, 'slow');
    });
});

// calculate the scroll position for adding shake animation on footer image.
var offset2 = ($('.bounceTrigger').offset().top + -500);
var circleImage = $('.animateTest');

$(document).scroll(function() {
    position2 = $(this).scrollTop();
    if (position2 >= offset2) {
        circleImage.addClass('animated bounce');
    } 
    else {
        circleImage.removeClass('animated bounce');
    }
    })