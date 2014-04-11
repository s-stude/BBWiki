define(function (require) {

    var text = require('text');
    var urlDecoder = require('urlDecoder');

    return {
        onError: function (error) {
            alert(error.message);
            console.error(error);
        },

        load: function (href, next) {

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