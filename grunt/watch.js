module.exports = {
    appjs: {
        files: ['<%= vars.appdir %>/widgets/main.js', '<%= vars.appdir %>/widgets/**/*.js'],
        tasks: ['jshint', 'copy:appjs'],
        options: {
            livereload: true
        }
    },
    vendorjs: {
        files: ['vendor_libs/**/*.js'],
        tasks: ['copy:vendorjs']
    },
    appcss: {
        files: ['<%= vars.appdir %>/css/<%= vars.distvendorcss %>', '<%= vars.appdir %>/widgets/**/*.css'],
        tasks: ['requirejs:appcss', 'cssmin:appcss', 'cssmin:distcss'],
        options: {
            livereload: true
        }
    },
    apptemplates: {
        files: ['<%= vars.appdir %>/widgets/**/*.html','<%= vars.appdir %>/widgets/**/*.hbs', '<%= vars.appdir %>/*.html'],
        tasks: ['copy:apptemplates'],
        options: {
            livereload: true
        }
    },
    roottempaltes: {
        files: ['<%= vars.appdir %>/*.html'],
        tasks: ['copy:roottempaltes'],
        options: {
            livereload: true
        }
    }

//            release:{
//                files:[
//                    '<%= vars.appdir %>/widgets/main.js',
//                    '<%= vars.appdir %>/widgets/**/*.js',
//                    '<%= vars.appdir %>/css/<%= vars.distvendorcss %>',
//                    '<%= vars.appdir %>/widgets/**/*.css',
//                    '<%= vars.appdir %>/*.html',
//                    '<%= vars.appdir %>/widgets/**/*.html'
//                ],
//                tasks:[
//                    'requirejs',    // only before 'copy:release'
//                    'copy:release', // only after 'requirejs' task
//                    'cssmin:appcss',
//                    'cssmin:distcss',
//                    'clean:rjsbuild']
//            }
};