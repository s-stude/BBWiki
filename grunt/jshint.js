module.exports = {
    options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
            jQuery: true
        }
    },

    gruntfile: ['gruntfile.js'],

    appjs: ['<%= vars.appdir %>/widgets/main.js', '<%= vars.appdir %>/widgets/**/*.js']
};