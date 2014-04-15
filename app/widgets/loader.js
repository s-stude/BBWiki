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
                cachedNext(notFoundText.replace('$URL$',urlDecoder.replaceUrlDelimiterToDefault(cachedHref)));
                return;
            }

            // TODO: Remove hardcoded val
            _this.load('/docs/404.md', cachedNext);
        },

        load: function (href, next) {

            _this = this;
            cachedNext = next;
            cachedHref = href;

            if (window && window.wikiCfg && window.wikiCfg.wikiVirtualDir) {
                href = window.wikiCfg.wikiVirtualDir + href;
            }

            var decodedUrl = urlDecoder.replaceUrlDelimiterToDefault(href);
            console.log('Loading: ', decodedUrl);

            text.get(decodedUrl, function (source) {

                next(source);

            }, this.onError);
        }
    };

});