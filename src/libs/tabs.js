/* Tabs Function
   ========================================================================= */

(function($) {
    $.fn.tabs = function() {
        this.each(function() {
            $(this).on('click', 'li', function(e) {
                e.preventDefault();
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('.tabs').find('.tab-block').removeClass('active').eq($(this).index()).addClass('active');
            });
        });
    };

})(jQuery);