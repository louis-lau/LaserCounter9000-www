// smooth scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

var fixedSwitchPosition = $("#landing").height() - 128;
$( window ).resize(function() {
  fixedSwitchPosition = $("#landing").height() - 128;
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() >= fixedSwitchPosition) {
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    }
});
