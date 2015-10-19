(function () {
    "use strict";

    angular.module('app')
        .controller('anotherController', ['dataService',anotherController]);

    function anotherController(dataService) {
        var vm = this;
        var promise = dataService.getJson();
        promise.then(function (data) {
            console.log("movies ...."+ data);
            console.log("movies data ...."+ data.movies);
            vm.movies = data.movies;
        });

    }


}());
