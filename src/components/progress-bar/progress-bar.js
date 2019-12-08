jQuery(document).ready(function($) {
    var $progressBar = $('.progress-bar');

    $(window).scroll (function () {
        var ratio = $(document).scrollTop () / (($(document).height () - $(window).height ()) / 100);
        $(".progress-bar__indikator").width (ratio + "%");
    });

    enquire.register("screen and (max-width: 992px)", {
        match: function() {
            $progressBar.removeClass('sticky-top');
        },
        deferSetup: false,
        setup: function() {},
        unmatch: function() {
            $progressBar.addClass('sticky-top');
        }
    });
}); // end ready

