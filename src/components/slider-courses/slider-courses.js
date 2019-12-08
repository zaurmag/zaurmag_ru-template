jQuery(document).ready(function($) {
    $('.slider-courses').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        lazyLoad: true,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        navText: ['<svg class="icon icon-angle-left"><use xlink:href="#angle-left"></use></svg>', '<svg class="icon icon-angle-right"><use xlink:href="#angle-right"></use></svg>'],
        responsive: {
            0: {
                items: 1
            },
            769: {
                items: 2
            },
            992: {
                items: 1
            }
        }
    });
}); // end ready

