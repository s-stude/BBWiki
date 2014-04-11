module.exports = {
    appcss: {
        files: {
            '<%= vars.dist %>/css/build/<%= vars.distappcss %>': ['<%= vars.appdir %>/widgets/**/*.css']
        }
    },
    distcss: {
        files: {
            '<%= vars.dist %>/css/<%= vars.distcss %>': [
                '<%= vars.dist %>/css/build/<%= vars.distvendorcss %>',
                '<%= vars.dist %>/css/build/<%= vars.distappcss %>'
            ]
        }
    }
};