module.exports = function (grunt) {
    require('load-grunt-config')(grunt, {
        config: {
            vars: {
                appdir: 'app',

                dist: 'wwwroot/public',
                distroot: 'wwwroot',

                distjs: 'main.js',

                distcss: 'styles.css',
                distvendorcss: 'vendor.css',
                distappcss: 'app.css'
            }
        }
    });
};