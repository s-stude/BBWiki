define(function (require) {

    var Backbone = require('Backbone');
    var navigator = require('navigator');
    var urlDecoder = require('urlDecoder');

    var IndexView = Backbone.View.extend({

        events: {
            'click a': 'navigate'
        },

        render: function (source) {
            this.$el.html(source);
            return this;
        },

        navigate: function (e) {
            e.preventDefault();

            var href = this.$(e.target).attr('href');

            var matchedParts = urlDecoder.toMatchedParts(href);
window.location = '#page/' + matchedParts.resourcePathReplaced;
            //navigator.go('page/', matchedParts.resourcePathReplaced);
        }

    });

    return IndexView;
});