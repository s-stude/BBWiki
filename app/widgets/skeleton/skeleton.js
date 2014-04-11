define(function (require) {

    var $ = require('jQuery');
    var IndexView = require('./index-view');
    var HeaderView = require('./header-view');
    var md = require('md');
    var loader = require('loader');

    var mainView = new IndexView();
    $('.js-app').html(mainView.el);

    var headerView = new HeaderView();
    $('.js-page-header').html(headerView.el);

    return {
        show: function (o) {

            var headerMdPath = '/docs/header.md';
            loader.load(headerMdPath, function (source) {
                headerView.render(md(source));
            });

            loader.load(o.href, function (source) {
                mainView.render(md(source));
            });
        }
    };

});