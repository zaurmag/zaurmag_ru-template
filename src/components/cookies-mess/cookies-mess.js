// ****************** Cookies modal message ******************
var cookieOptions = { expires: 3, path: '/' };
if ($.cookie('visit') == undefined) {
    $('body').append('<div class="cookies-mess"><div class="container"><div class="row align-items-center"><div class="col-lg-9 col-md-8">Для лучшего отображения сайта мы принимаем файлы Cookie. Дальнейший просмотр сайта возможен только при условии соглашения использования файлов Cookie.</div><div class="col-lg-3 col-md-4 mt-3 mt-md-0 text-md-left text-center"><a href="#" class="btn btn-success btn-smm py-0 px-3 btn-set-cookie mr-2">Ok!</a><a class="btn btn-danger btn-smm py-0 px-2" href="https://ru.wikipedia.org/wiki/Cookie" target="_blank" rel="nofollow">Подробнее</a></div></div></div>');

    $(window).on('load', function() {
        setTimeout(function() {
            $('.cookies-mess').addClass('show');
        }, 4000);
    });

    $('.btn-set-cookie').on('click', function(){
        $.cookie('visit', true, cookieOptions);
        $('.cookies-mess').removeClass('show');
        setTimeout(function() {
            $('.cookies-mess').remove();
        }, 200);
        return false;
    });
};
