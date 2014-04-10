define(function (require) {

    var $ = require('jQuery');
    var text = require('text');
    var urlDecoder = require('urlDecoder');

    return {
        onSuccess: function (source) {
            $('.js-app').html(source);
        },

        onError: function (error) {
            alert(error.message);
            console.error(error);
        },

        load: function (href) {
            var decodedUrl = urlDecoder.replaceUrlDelimiterToDefault(href);
            console.log('try to load', decodedUrl);
            text.get(decodedUrl, this.onSuccess, this.onError);
        }
    };

});