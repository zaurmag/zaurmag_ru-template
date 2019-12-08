var path = require('./path/path.js');
module.exports = function () {
    $.gulp.task('img:build', function(done) {
        return $.gulp.src([path.path.src.img, path.path.src.imgComp])
            .pipe($.plugins.changed(path.path.build.img))
            .pipe($.plugins.plumber())
            .pipe($.plugins.tinypng('J7PHQA2MyeIgr8WkaJHWH0J89I3XssPD'))
            .pipe($.gulp.dest(path.path.build.img));
        done();
    });
};
