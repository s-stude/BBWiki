module.exports = {

    basicdocs:{
        files:[
            {
                expand:true,
                cwd:'<%= vars.appdir %>/',
                src:['docs/**'],
                dest:'<%= vars.distroot %>/'
            }
        ]
    },

    appjs:{
        files:[
            {
                expand:true,
                cwd:'<%= vars.appdir %>/',
                src:['widgets/main.js', 'widgets/**'],
                dest:'<%= vars.dist %>/'
            }
        ]
    },

    vendorjs:{
        files:[
            {
                expand:true,
                src:['vendor_libs/**', 'static_components/**'],
                dest:'<%= vars.distroot %>/'
            }
        ]
    },

    rootpages:{
        files:[
            {
                expand:true,
                cwd:'<%= vars.appdir %>/',
                src:['*.html', 'images/**'],
                dest:'<%= vars.distroot %>/'
            }
        ]
    },

    glyphicons:{
        files:[
            {
                expand:true,
                src:['static_components/fonts/*.*'],
                dest:'<%= vars.distroot %>/'
            }
        ]
    },

    roottempaltes: {
        files:[
            {
                expand:true,
                cwd:'<%= vars.appdir %>/',
                src:['*.html'],
                dest:'<%= vars.distroot %>/'
            }
        ]
    },

    apptemplates:{
        files:[
            {
                expand:true,
                cwd:'<%= vars.appdir %>/',
                src:['widgets/**/*.html', 'widgets/**/*.hbs'],
                dest:'<%= vars.dist %>/'
            }
        ]
    },

    release:{
        files:[
            {
                expand:true,
                src:['static_components/fonts/*.*'],
                dest:'<%= vars.distroot %>/'
            },
            {
                expand:true,
                src:['vendor_libs/require.js'],
                dest:'<%= vars.distroot %>/'
            },
            {
                expand:true,
                cwd:'<%= vars.dist %>/rjs-build',
                src:['main.js', '*.map'],
                dest:'<%= vars.dist %>/widgets'
            },
            {
                expand:true,
                cwd:'<%= vars.appdir %>/',
                src:['*.html', 'images/**'],
                dest:'<%= vars.distroot %>/'
            }
        ]
    }
};
