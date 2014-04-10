define(function(require){

    var $ = require('jQuery');
    var IndexView = require('./index-view');
    var HeaderView = require('./header-view');

    return {
        show: function(o){
            var mainView = new IndexView();
            var headerView = new HeaderView();

            $('.js-page-header').html(headerView.render().el);

            $('.js-app').html(mainView.render().el);
        }
    };

});