define(function (require) {

    var Backbone = require('Backbone');
    var navigator = require('navigator');
    var urlDecoder = require('urlDecoder');

    var View = Backbone.View.extend({

        initialize: function(){
            console.log('Initializing View');
        },

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
            window.location = matchedParts.fullPath();
        }

    });

    return View;
});