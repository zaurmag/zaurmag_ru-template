jQuery(document).ready(function($) {
    // Popup image
    $('.portfolio__btn--zoom').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        removalDelay: 300,
        mainClass: 'mfp-scale'
    });
}); // end ready
