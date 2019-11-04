var path = require('./path/path.js');

module.exports = function (done) {
    $.gulp.task('favicons:build', function() {
        return $.gulp.src(path.path.src.favicon)
            .pipe($.plugins.plumber())
            .pipe($.plugins.favicons({
                html: 'favicons.html',
                pipeHTML: true,
                path: 'images/favicons/',
                replace: true,
                icons: {
                    appleIcon: true,
                    favicons: true,
                    online: false,
                    appleStartup: false,
                    android: true,
                    firefox: true,
                    yandex: true,
                    windows: true,
                    coast: true
                }
            }))
            .pipe($.gulp.dest(path.path.build.imgFavicons));
        done();
    });
};
