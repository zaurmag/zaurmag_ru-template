jQuery(document).ready(function($) {
    // Delete load btn
    $.ajaxSetup({
        complete: function() {
            $('.last_item').next('.loadmore').remove();
        }
    });

    // Show more ajax pagination
    if ($('.loadmore').length) {
        $('body').on('click', '.loadmore:not(.loading)', function(event) {
            event.preventDefault();
            var more = $(this);
            var container = $(this).prev('.ajax-pagination');
            var defaultText = more.html();
            more.addClass('loading').html(more.data('loading'));
            var offset = more.data('offset');
            var items = more.data('items');
            var theme = more.data('theme');
            var fpage = '';
            var format = '';
            var tax = '';
            var tag = '';
            var search = '';
            if (more.data('fpage')) fpage = '&fpage=' + more.data('fpage');
            if (more.data('format')) format = '&format=' + more.data('format');
            if (more.data('category')) tax = '&cat=' + more.data('category');
            if (more.data('tag')) tag = '&tag=' + more.data('tag');
            if (more.data('search')) search = '&search=' + more.data('search');
            console.log(search);
            $.ajax({
                url: '/wp-content/themes/' + theme + '/ajax-posts.php?offset=' + offset + '&items=' + items + fpage + format + tax + tag + search
            }).done(function(html) {
                container.after(html);
                more.data('offset', offset + items).removeClass('loading').html(defaultText);
                if ($.trim(html) === '') {
                    more.remove();
                } else {
                    $('html, body').animate({ scrollTop: $('.ajax-pagination:last').offset().top}, 900);
                }
            });
        });
    }
}); // end ready
