document.addEventListener('DOMContentLoaded', function () {
    var imageLeft = document.querySelector('.why__img');

    new simpleParallax(imageLeft, {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
    });
});

var $header = $(".header");
var scroll = 0;
var active = "active";

$(window).scroll(function () {
    if ($(window).scrollTop() > scroll) {
        $header.addClass(active);
    } else {
        $header.removeClass(active);
    }
});



$('.hidden-menu li').click(function () {

    $('#hmt').prop('checked', false);
})

