module.exports = {
    appcss: {
        options: {
            optimizeCss: 'standard.keepLines',
            cssImportIgnore: null,
            cssIn: '<%= vars.appdir %>/css/<%= vars.distvendorcss %>',
            out: '<%= vars.dist %>/css/build/<%= vars.distvendorcss %>'

        }
    },

    dev: {
        options: {
            mainConfigFile: "<%= vars.appdir %>/widgets/main.js",
            name: "main",
            dir: '<%= vars.dist %>/rjs-build/',
            preserveLicenseComments: true,
            optimize: "none"
        }
    },

    release: {
        options: {
            mainConfigFile: "<%= vars.appdir %>/widgets/main.js",
            name: "main",
            dir: '<%= vars.dist %>/rjs-build/',
            preserveLicenseComments: false,
            optimize: "uglify2",
            generateSourceMaps: true
        }
    }
};