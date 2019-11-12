$searchMobile = $('.search-mobile');

$searchMobile.on('shown.bs.dropdown', function() {
    $(this).find('.search-mobile__input').focus();
    overlayAddFn();
});

$searchMobile.on('hidden.bs.dropdown', function() {
    overlayRemFn();
});

