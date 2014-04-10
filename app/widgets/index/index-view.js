define(function(require){

    var Backbone = require('Backbone');
    var indexMd = require('text!../../../docs/index.md');
    var md = require('md');

    var IndexView = Backbone.View.extend({

        tagName: 'span',

        render: function(){
            this.$el.html(md(indexMd));
            return this;
        }

    });

    return IndexView;
});