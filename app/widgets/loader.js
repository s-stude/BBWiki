define(function (require) {

    var $ = require('jQuery');
    var urlDecoder = require('urlDecoder');

    var source404 = '# Sorry, 404...\n ' +
        'This page ($URL$) was not found. Please be careful with URLs. ([go to Index](/))';

    return {
        load: function (href, next) {

            href = urlDecoder.prependWithSubdomain(href);

            var decodedUrl = urlDecoder.toRealDelimiters(href);
            console.log('Loading: ', decodedUrl);

            var $ajax = $.ajax({
                type: 'GET',
                url: decodedUrl,
                cache: false
            });

            $ajax.success(function(source){
                next(source);
            });

            $ajax.error(function(error){
                next(source404.replace('$URL$',urlDecoder.toRealDelimiters(decodedUrl)));
            });
        }
    };

});