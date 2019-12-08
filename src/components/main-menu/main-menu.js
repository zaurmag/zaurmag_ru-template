jQuery(document).ready(function($) {
    // Vars
    var $mainWrap = $('.main-wrap');
    var $mainMenu = $('.main-menu__nav');
    var $hamburger = $('.hamburger');
    var $topMenu = $('.top-menu__list');

    // Init flex menu
    $mainMenu.flexMenu({
        threshold: 8,
        linkText: 'Еще',
        showOnHover: true,
        popupClass: 'sub-menu',
        linkTitle: 'Показать еще',
        shouldApply: function(){
            $mainMenu.parents('.main-menu').addClass('main-menu--loaded');
            return true;
        }
    });

    // Functions show/hide mobile nav
    function showMenu(hamburger, menu) {
        menu.addClass('nav-mobile--show');
        hamburger.addClass('hamburger--show');
    }
    function hideMenu(hamburger, menu) {
        menu.removeClass('nav-mobile--show');
        hamburger.removeClass('hamburger--show');
    }

    enquire.register("screen and (max-width: 992px)", {
        match: function() {
            // Creat Nav mobile object in DOM
            $mainWrap.before('<nav class="nav-mobile" />');

            // Move Main menu
            $mainMenu.appendTo('.nav-mobile').removeClass('main-menu__nav').addClass('nav-mobile__nav nav-mobile__nav--main');
            $('.nav-mobile__nav--main').before('<div class="nav-mobile__title">Рубрики</div>');
            var $navMobile = $('.nav-mobile');

            // Move Top menu
            $topMenu.prependTo($navMobile).removeClass('top-menu__list').addClass('nav-mobile__nav nav-mobile__nav--topnav');
            $('.nav-mobile__nav--topnav').before('<div class="nav-mobile__title">Главное меню</div>');

            var $navMobile = $('.nav-mobile');

            // Event click hamburger
            $hamburger.on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                $this = $(this);

                if($navMobile.hasClass('nav-mobile--show')) {
                    hideMenu($this, $navMobile);
                    overlayRemFn();
                } else {
                    showMenu($this, $navMobile);
                    overlayAddFn();
                }
            });

            // Hide sidebar on page click/tap.
            $(document).on('click touchend', function(event) {
                if ($(event.target).closest($hamburger).length || $(event.target).closest($navMobile).length) return;
                hideMenu($hamburger, $navMobile);
                overlayRemFn();
            });

            // Destroy flexmenu
            $mainMenu.flexMenu({
                undo: true
            });
            $('.main-menu').removeClass('main-menu--loaded');
        },
        deferSetup: false,
        setup: function() {

        },
        // Unmatch
        unmatch: function() {
            // Move Main menu
            $('.nav-mobile__nav--main').removeClass('nav-mobile__nav nav-mobile__nav--main').addClass('main-menu__nav').appendTo('.main-menu > .container');

            // Move top menu
            $('.nav-mobile__nav--topnav').removeClass('nav-mobile__nav nav-mobile__nav--topnav').addClass('top-menu__list').appendTo('.top-menu');

            // Init flex menu
            $mainMenu.flexMenu({
                threshold: 8,
                linkText: 'Еще',
                showOnHover: true,
                popupClass: 'sub-menu',
                linkTitle: 'Показать еще',
                shouldApply: function(){
                    $mainMenu.parents('.main-menu').addClass('main-menu--loaded');
                    return true;
                }
            });

            // Remove Nav mobile
            $('.nav-mobile').remove();
        }
    });
});
