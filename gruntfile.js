module.exports = function (grunt) {
    require('load-grunt-config')(grunt, {
        config: {
            pkg: grunt.file.readJSON('package.json'),
            vars: {
                appdir: 'app',

                dist: 'wwwroot/sub/public',
                distroot: 'wwwroot',

                distjs: 'main.js',

                distcss: 'styles.css',
                distvendorcss: 'vendor.css',
                distappcss: 'app.css'
            }
        }
    });
};