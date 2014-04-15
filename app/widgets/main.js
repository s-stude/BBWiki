require.config({

    paths: {
        'Backbone': '../../vendor_libs/backbone-min',

//        'hbs/handlebars'    : '../../vendor_libs/hbs/handlebars',
//        'hbs/i18nprecompile': '../../vendor_libs/hbs/i18nprecompile',
//        'hbs/json2'         : '../../vendor_libs/hbs/json2',
//        'hbs'               : '../../vendor_libs/rjs-hbs',

        'jQuery'    : '../../vendor_libs/jquery-min',
        'text'      : '../../vendor_libs/rjs.text',
        'underscore': '../../vendor_libs/underscore-min',

        'md': '../../vendor_libs/marked'
    },

    shim: {
        'jQuery'    : {
            exports: '$'
        },
        'Backbone'  : {
            deps   : ['jQuery', 'underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    },

    packages: [
        {
            name: 'skeleton',
            main: 'skeleton'
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

require(['Backbone', 'router', 'loader', 'urlDecoder', 'navigator'], function (Backbone, Router, loader, urlDecoder, navigator) {



//    $('.js-app').on('click', 'a', function (e) {
//        var href = $(this).attr('href');
//        var matchedParts = urlDecoder.toMatchedParts(href);
//
//        navigator.go('page/', matchedParts.resourcePathReplaced);
////
////        var newPath = window.location.protocol + '//' + window.location.host + window.location.pathname + matchedParts.routePart + matchedParts.resourcePathReplaced;
////        window.location = newPath;
//
//        return false;
//    });

    window.Router = new Router();
    navigator.init(window.Router);

    Backbone.history.start();
});