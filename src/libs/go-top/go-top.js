// ======= Go Top =======
(function($) {
    jQuery.fn.scrollToTop = function() {
        $(this).hide();
        if ($(window).scrollTop() != "0") {
            $(this).fadeIn("slow")
        }
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() == "0") {
                $(scrollDiv).fadeOut("slow")
            } else {
                $(scrollDiv).fadeIn("slow")
            }
        });
        $(this).on('click', function(e) {
            e.preventDefault();

            $("html, body").animate({
                scrollTop: 0
            }, 300)
        });
    }
})(jQuery);
