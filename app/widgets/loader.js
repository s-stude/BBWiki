define(function (require) {

    var text = require('text');
    var urlDecoder = require('urlDecoder');

    return {
        onError: function (error) {
            alert(error.message);
            console.error(error);
        },

        load: function (href, next) {
            var decodedUrl = urlDecoder.replaceUrlDelimiterToDefault(href);

            text.get(decodedUrl, function(source){
                next(source);
            }, this.onError);
        }
    };

});