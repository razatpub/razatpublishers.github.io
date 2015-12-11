/*var carouselContainer = $('.carousel');
var slideInterval = 3000;

function toggleCaption() {
    var caption = carouselContainer.find('.active').find('.carousel-caption');
    caption.slideToggle();
}


carouselContainer.carousel({
    interval: slideInterval,
    cycle: true,
    pause: "hover"
}).on('slid slide', toggleCaption).trigger('slid');*/


$(document).scroll(function () {

    // Show element after user scrolls past 
    // the top edge of its parent 
    $('.serv-img').each(function () {
        var t = $(this).parent().offset().top;
        if (y > t) {
            $(this).fadeIn();
        } else {
            $(this).fadeOut();
        }
    });
});