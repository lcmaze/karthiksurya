$(function() {
    var $gallery = $('.gallery a').simpleLightbox();
});

$('.main-slider').owlCarousel({
    dots: false,
    loop: true,
    margin: 0,
    nav: false,
    responsive: {
        0: {
            items: 1
        }
    }
})