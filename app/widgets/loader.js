define(function (require) {

    var text = require('text');
    var urlDecoder = require('urlDecoder');

    var cachedNext, _this, maxErrorDepth = 5, currentErrorDepth = 0;

    return {
        onError: function (error) {

            ++currentErrorDepth;

            if (currentErrorDepth > maxErrorDepth) {
                alert(error);
                return;
            }

            // TODO: Remove hardcoded val
            _this.load('/docs/404.md', cachedNext);
        },

        load: function (href, next) {

            _this = this;
            cachedNext = next;

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