define(function (require) {

    var options= {
        defaultUrlDelimiter :'/',
        replacedUrlDelimiter: '->',

        defaultUrlDelimiterRegex: /\//g,
        replacedUrlDelimiterRegex: /->/g
    };

    return {


        toMatchedParts: function (href) {

            var linkRegexp = /(#[A-z]+\/)(.+)/;

            var matches = linkRegexp.exec(href);
            if (matches.length < 3) {
                alert('Wrong link: ' + href);
                return false;
            }

            var route = matches[1]; // #page
            var path = '/' + matches[2]; // path/to/web/page.md

            var replacedPath = path.replace(options.defaultUrlDelimiterRegex, options.replacedUrlDelimiter);

            return {
                routePart           : route,
                resourcePath        : path,
                resourcePathReplaced: replacedPath
            };
        },
        replaceUrlDelimiterToDefault: function(href){
            return href.replace(options.replacedUrlDelimiterRegex, options.defaultUrlDelimiter);
        }
    };

});