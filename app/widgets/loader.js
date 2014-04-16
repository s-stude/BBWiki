define(function (require) {

    var text = require('text');
    var urlDecoder = require('urlDecoder');

    var cachedNext,
        cachedHref,
        _this,
        maxErrorDepth = 5,
        currentErrorDepth = 0;

    var notFoundText = '# Sorry, 404...\n ' +
        'This page ($URL$) was not found. Please be careful with URLs. ([go to Index](/))';

    return {
        onError: function (error) {

            ++currentErrorDepth;

            if (currentErrorDepth > maxErrorDepth) {
                console.error(error);
                cachedNext(notFoundText.replace('$URL$',urlDecoder.toRealDelimiters(cachedHref)));
                return;
            }

            // TODO: Remove hardcoded val
            _this.load('/docs/404.md', cachedNext);
        },

        load: function (href, next) {

            _this = this;
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