module.exports = {
    appcss: {
        files: {
            '<%= vars.dist %>/css/<%= vars.distappcss %>': ['<%= vars.appdir %>/widgets/**/*.css']
        }
    },
    distcss: {
        files: {
            '<%= vars.dist %>/css/<%= vars.distcss %>': [
                '<%= vars.dist %>/css/<%= vars.distvendorcss %>',
                '<%= vars.dist %>/css/<%= vars.distappcss %>'
            ]
        }
    }
};