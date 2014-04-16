define(function (require) {

    var Backbone = require('Backbone');
    var urlDecoder = require('urlDecoder');

    var View = Backbone.View.extend({

        events: {
            'click a': 'navigate'
        },

        render: function (source) {

            this.$el.html(source);

            this.$('img').each(function () {
                var $img = $(this);
                var src = $img.attr('src');
                $img.attr('src', urlDecoder.prependWithSubdomain(src));
            });

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