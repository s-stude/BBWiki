define(function(require){

    var $ = require('jQuery');
    var IndexView = require('./index-view');
    var HeaderView = require('./header-view');
    var md = require('md');
    var loader = require('loader');

    return {
        show: function(o){
            var mainView = new IndexView();
            var headerView = new HeaderView();

            $('.js-page-header').html(headerView.render().el);

            $('.js-app').html(mainView.render().el);

            loader.load(o.href, function(source){
                console.log('Loading: ', o.href);
                $('.js-app').html(md(source));
            });
        }
    };

});