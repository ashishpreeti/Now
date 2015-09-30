(function() {

    "use strict";
    var app = angular.module('app', []);

    function SearchCtrl(dataService) {
        // load data
        var vm = this;
        var promise = dataService.getJson();
        promise.then(function (data) {
            vm.movies = data.movies;
        });

        vm.message = null;
        vm.search = function (text) {
            if (text.length < 3 && text.length > 0) {
                vm.message = "Enter at least three characters to begin search";
            } else {
                vm.message = null;
            }
        };
    }

    app.controller('SearchCtrl', ['dataService', SearchCtrl]);


})();
