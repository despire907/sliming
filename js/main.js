jQuery(document).ready(function($) {

    var top_header = $('.parallax-content');
    top_header.css({'background-position': 'center center'}); // better use CSS

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        top_header.css({'background-position': 'center calc(50% + ' + (st * .5) + 'px)'});
    });
});