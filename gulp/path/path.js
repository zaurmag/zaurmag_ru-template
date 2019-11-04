var cmsPath = 'W:/domains/farmer-online/templates/template_zm_it/';
module.exports = {
    path: {
        build: { // Build files
            html: 'dist/',
            style: 'dist/css',
            img: 'dist/images',
            imgFavicons: 'dist/images/favicons',
            js: 'dist/js',
            fonts: 'dist/fonts',
            zip: 'zip',
            //Replace in cms template
            // style: cmsPath + '/css',
            // img: cmsPath + '/images',
            // js: cmsPath + '/js',
            // fonts: cmsPath + '/fonts'
        },
        src: { // Source files
            pug: 'src/*.pug',
            style: 'src/base/styles.sass',
            img: 'src/images/**/*.+(png|jpg|jpeg|gif)',
            imgComp: 'src/components/**/*.+(png|jpg|jpeg|gif)',
            pngIcons: 'src/images/icons/png/*.png',
            svgIcons: 'src/images/icons/svg/*.svg',
            js: 'src/**/*.js',
            fonts: 'src/fonts/*',
            favicon: 'src/images/favicon.png'
        },
        watch: { // Watch files
            pug: 'src/**/*.pug',
            style: 'src/**/*'
        },
        clean: {
            all: './dist'
        }
    }
};
