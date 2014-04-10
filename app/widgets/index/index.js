define(function(require){

    var $ = require('jQuery');
    var IndexView = require('./index-view');

    return {
        show: function(o){
            var view = new IndexView();
            $('.js-app').html(view.render().el);
        }
    };

});