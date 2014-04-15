define(function (require) {

    var options = {
        defaultRoutePart: '#page',

        defaultUrlDelimiter : '/',
        replacedUrlDelimiter: '>',

        defaultUrlDelimiterRegex : /\//g,
        replacedUrlDelimiterRegex: /->/g,

        routePartRegex: /(#[A-z]+)/,
        urlPartRegex  : /\/.+/,
        urlIndexRegex : /^\/$/
    };

    return {

        toMatchedParts              : function (href) {

            var route, url;

            if(href === '/'){

                return {
                    routePart           : '#index',
                    resourcePath        : '',
                    resourcePathReplaced: '',
                    fullPath: function(){
                        return this.resourcePathReplaced ? this.routePart + options.defaultUrlDelimiter + this.resourcePathReplaced : this.routePart;
                    }
                };

            }

            if (options.routePartRegex.test(href)) {
                route = href.match(options.routePartRegex)[0];
            }

            if (options.urlPartRegex.test(href)) {
                url = href.match(options.urlPartRegex)[0]
            }

            if (!route && !url) {
                alert('Wrong url');
            }

            var urlWithReplacedDelimiter = url.replace(options.defaultUrlDelimiterRegex, options.replacedUrlDelimiter);

            return {
                routePart           : route || options.defaultRoutePart,
                resourcePath        : url,
                resourcePathReplaced: urlWithReplacedDelimiter,
                fullPath: function(){
                    return this.resourcePathReplaced ? this.routePart + options.defaultUrlDelimiter + this.resourcePathReplaced : this.routePart;
                }
            };
        },
        replaceUrlDelimiterToDefault: function (href) {
            return href.replace(options.replacedUrlDelimiterRegex, options.defaultUrlDelimiter);
        }
    };

});