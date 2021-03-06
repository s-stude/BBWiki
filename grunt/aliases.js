module.exports = {
    default: [
//        'clean:distroot',
        'jshint',
        'copy:basicdocs',
        'copy:appjs',
        'copy:vendorjs',
        'requirejs:appcss',
        'cssmin:appcss',
        'cssmin:distcss',
        'copy:apptemplates',
        'copy:rootpages',
        'copy:glyphicons'
    ],
    live: [
        'default',

        'connect:basic',

        'watch'
//        'watch:appjs',
//        'watch:vendorjs',
//        'watch:appcss',
//        'watch:apptemplates'
    ],

    reqjs: ['clean:rjsbuild', 'requirejs:dev'],

    release: [
        'clean:distroot',
        'jshint',
        'copy:basicdocs',
        'requirejs', // only before 'copy:release'
        'copy:release', // only after 'requirejs' task
        'cssmin:appcss',
        'cssmin:distcss',
        'clean:rjsbuild',
        'clean:csssbuild',
        'concat'
    ],

    'live-release': ['release', 'connect:alive'],

    'live-release-watch': ['release', 'connect:basic', 'watch:release']
};