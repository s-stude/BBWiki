define(function(require){

    var Backbone = require('Backbone');

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            '/:path': 'index',
            'page/:path': 'loadPage'
        },

        index: function(path){
            require('index').show();
        },

        loadPage:function(path){
            require('loader').load(path);
        }
    });

    return AppRouter;

});