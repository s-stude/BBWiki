define(function(require){

    var Backbone = require('Backbone');

    var HeaderView = Backbone.View.extend({

        render: function(source){
            this.$el.html(source);
            return this;
        }
    });

    return HeaderView;
});