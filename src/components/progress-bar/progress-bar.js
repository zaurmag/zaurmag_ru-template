$(window).scroll (function () {
    var ratio = $(document).scrollTop () / (($(document).height () - $(window).height ()) / 100);
    $(".progress-bar__indikator").width (ratio + "%");
});
