(function () {
    "use strict";

    angular.module('app')
        .filter('noResultsFound', function () {
            return function (input) {
                if (input !== 'undefined' && input == 0) {
                    return true;
                } else  {
                    return false;
                }
            };
        });

    angular.module('app').
        filter('matchFound', function () {
            return function (input, allMovies) {
                //filtered.length != main.movies.length && filtered.length !== 0 && !main.message
                if (input !== 'undefined' && allMovies !== 'undefined'  && input.length !== 0) {
                    return true;
                } else {
                    return false;
                }
            };
        })
}());