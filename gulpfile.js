'use strict';

global.$ = {
    path: {
        task: require('./gulp/path/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    vinylFtp: require('vinyl-ftp'),
    browserSync: require('browser-sync').create(),
    plugins: require('gulp-load-plugins')({
        overridePattern: true,
        pattern: '*'
    })
};

$.path.task.forEach(function(taskPath){
    require(taskPath)();
});

$.gulp.task('build', $.gulp.series(
    'spriteSvg:build',
    $.gulp.parallel(
        'pug:build',
        'style:build',
        'js:build',
        'img:build',
        'spriteImg:build'
        //'fonts:build'
    ))
);
$.gulp.task('default', $.gulp.series(
    'build',
    'ftp:build',
    $.gulp.parallel(
    'critical:build',
    'watch',
    'bsync',
    'favicons:build'

)));
