define(function (require) {

    var $ = require('jQuery');
    var md = require('md');

    var IndexView = require('./index-view');
    var HeaderView = require('./header-view');
    var MarkdownView = require('./markdown-view');

    var loader = require('loader');

    var mainView = new MarkdownView();
    $('.js-app').html(mainView.el);

    var headerView = new MarkdownView();
    $('.js-page-header').html(headerView.el);

    return {
        show: function (o) {

            // TODO: hardcoded
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