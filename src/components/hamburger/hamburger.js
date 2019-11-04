jQuery(document).ready(function($) {
    $hamburger = $('.hamburger');
    $menu = $('.menu');

    enquire.register("screen and (max-width: 768px)", {
        match: function() {

        },
        deferSetup: true,
        setup: function() {
            $hamburger.on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                $this = $(this);

                if ($menu.is(':visible')) {
                    hideMenu($hamburger, $menu);
                }
                if (!$menu.is(':visible')) {
                    showMenu($hamburger, $menu);
                }
            });

            // Hide sidebar on page click/tap.
            $(document).on('click touchend', function(event) {
                if ($(event.target).closest($hamburger).length) return;
                hideMenu($hamburger, $menu);
            });
        },
        unmatch: function() {
            $menu.show();
            $(document).off();
        }
    });

    function showMenu(hamburger, menu) {
        hamburger.parent().addClass('show');
        menu.slideDown(200);
    }

    function hideMenu(hamburger, menu) {
        hamburger.parent().removeClass('show');
        menu.slideUp(200);
    }
}); // end ready
