define(function (require) {

    var text = require('text');
    var urlDecoder = require('urlDecoder');

    var cachedNext,
        cachedHref;

    var source404 = '# Sorry, 404...\n ' +
        'This page ($URL$) was not found. Please be careful with URLs. ([go to Index](/))';

    return {
        onError: function (error) {
                cachedNext(source404.replace('$URL$',urlDecoder.toRealDelimiters(cachedHref)));
        },

        load: function (href, next) {

            cachedNext = next;
            cachedHref = href;

            href = urlDecoder.prependWithSubdomain(href);

            var decodedUrl = urlDecoder.toRealDelimiters(href);
            console.log('Loading: ', decodedUrl);

            text.get(decodedUrl, function (source) {

                next(source);

            }, this.onError);
        }
    };

});