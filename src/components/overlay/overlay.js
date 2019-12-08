function overlayAddFn() {
    var overlay = document.createElement('div');
    var p = document.createElement("p");

    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    setTimeout(function() {
        document.body.classList.add('animate');
    }, 100);
}
function overlayRemFn() {
    jQuery(document).ready(function($) {
        var body = $('body');

        if(body.hasClass('animate')) {
            $('.overlay').remove();
        }
        body.removeClass('animate');
    });
}
