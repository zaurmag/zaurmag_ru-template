jQuery(document).ready(function($) {
    enquire.register("screen and (max-width: 480px)", {
        match: function() {
            // Init flex menu
            $('.breadcrumbs__list').flexMenu({
                threshold: 2,
                cutoff: 1,
                linkText: 'Еще',
                showOnHover: false,
                linkTitle: 'Показать еще',
                popupAbsolute: false,
                linkTextAll: "Вы здесь: Навигационная цепочка",
                linkTitleAll: "Показать/скрыть навигационную цепочку - хлебные крошки"
            });
        },
        deferSetup: false,
        setup: function() {},
        unmatch: function() {
            $('.breadcrumbs__list').flexMenu({
                undo: true
            });
        }
    });
}); // end ready

