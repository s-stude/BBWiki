define(function(require){

    var cachedRouter;

    return {

        init: function(router){
            cachedRouter = router;
        },

        go: function(route, param){

            cachedRouter.navigate(route, param, { trigger: true });
        }
    };

});