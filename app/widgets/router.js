define(function(require){

    var Backbone = require('Backbone');

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'page',

            'index': 'page',
            'index/:path': 'page',

            'page': 'page',
            'page/:path': 'page'
        },

        page: function(path){
            require('skeleton').show({
                href: path || '/docs/index.md'
            });
        }
    });

    return AppRouter;

});