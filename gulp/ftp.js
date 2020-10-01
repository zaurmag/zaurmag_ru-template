var path = require('./path/path.js');

module.exports = function () {
    $.gulp.task('ftp:build', function(done) {

        var conn = $.vinylFtp.create( {
            host:     '192.168.0.113',
            user:     'zaurmag',
            password: 'zaur4495544',
            parallel: 10,
            //log:      gutil.log
        } );

        var globs = [
            path.path.build.style + '/**',
            path.path.build.js + '/**',
            path.path.build.img + '/**',
            path.path.build.fonts + '/**'
        ];

        // using base = '.' will transfer everything to /public_html correctly
        // turn off buffering in gulp.src for best performance

        return $.gulp.src( globs, {
                base: 'dist/',
                buffer: false
            })
            .pipe( conn.newer('.')) // only upload newer files
            .pipe( conn.dest('.' ));

        done();
    });
}
