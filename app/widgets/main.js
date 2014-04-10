require.config({

    paths: {
        'Backbone': '../../vendor_libs/backbone-min',

//        'hbs/handlebars'    : '../../vendor_libs/hbs/handlebars',
//        'hbs/i18nprecompile': '../../vendor_libs/hbs/i18nprecompile',
//        'hbs/json2'         : '../../vendor_libs/hbs/json2',
//        'hbs'               : '../../vendor_libs/rjs-hbs',

        'jQuery': '../../vendor_libs/jquery-min',
        'text': '../../vendor_libs/rjs.text',
        'underscore': '../../vendor_libs/underscore-min',

        'md': '../../vendor_libs/marked'
    },

    shim: {
        'jQuery': {
            exports: '$'
        },
        'Backbone': {
            deps: ['jQuery', 'underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    },

    packages: [
        {
            name: 'index',
            main: 'index'
        },
        {
            name: 'loader',
            main: 'loader'
        }
    ]
});

requirejs.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }

    throw err;
};

require(['Backbone', 'router', 'loader', 'urlDecoder'], function (Backbone, Router, loader, urlDecoder) {

    $('.js-app').on('click', 'a', function (e) {
        var href = $(this).attr('href');
        var matchedParts = urlDecoder.toMatchedParts(href);
        window.location = matchedParts.routePart + matchedParts.resourcePathReplaced;

        return false;
    });

    window.Router = new Router();
    Backbone.history.start();
});