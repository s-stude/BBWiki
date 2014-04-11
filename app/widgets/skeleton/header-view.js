define(function(require){

    var Backbone = require('Backbone');
    var template = require('text!../../../docs/header.md');
    var md = require('md');

    var HeaderView = Backbone.View.extend({

        render: function(){
            this.$el.html(md(template));
            return this;
        }
    });

    return HeaderView;
});