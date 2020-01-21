jQuery(document).ready(function($) {
    /**
     * Links Authors Comments
     */
    $('.external-reference').replaceWith(function() {
        return '<a class="author_comment" onclick="return !window.open(this.href)" href="' + $(this).data('link') + '" title="' + $(this).data('link') + '" rel="nofollow">' + $(this).html() + '</a>';
    });

// Add target blank all links in comments text
    $('.c_comments__comment-text').each(function(){
        $(this).find('a').attr("target", "_blank");
    });

// Prevent event cancel comment link
    $('#cancel-comment-reply-link').on('click', function(e){
        e.preventDefault();
    });

});
