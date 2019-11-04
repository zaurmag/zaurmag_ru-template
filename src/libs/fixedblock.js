/* ============================================================================
   Fixed block Func
   ========================================================================= */
(function($) {
    $.fn.addFixClass = function(options) {
        options = $.extend({
            offset: 200,
            timeAnimate: 500,
            destroy: false
        }, options);
        var fixClass = $(this);
        $(window).bind('scroll', function() {
            addClassFn();
        });
        if ($(window).scrollTop() >= options.offset && !options.destroy) {
            addClassFn();
        }
        function addClassFn() {
            if ($(window).scrollTop() >= options.offset && !options.destroy) {
                $(fixClass).removeClass('static').addClass("fixed");
                setTimeout(function() {
                    $(fixClass).addClass("animate");
                }, options.timeAnimate);
            } else {
                $(fixClass).addClass('static').removeClass("fixed");
                setTimeout(function() {
                    $(fixClass).removeClass("animate");
                }, options.timeAnimate);
            }
        }
        if (options.destroy) {
            $(window).unbind('scroll');
            $(fixClass).addClass('static').removeClass('fixed animate');
        }
    };
})(jQuery);