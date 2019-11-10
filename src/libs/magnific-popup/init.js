jQuery(document).ready(function($) {
    // Popup image
    $('.popup-image--js').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        removalDelay: 300,
        mainClass: 'mfp-scale'
    });
}); // end ready
