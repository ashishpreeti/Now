(function () {
    "use strict";

    angular.module('app')
           .factory('dataService', ['$http', dataService]);

    function dataService($http) {

        return {
            getJson: function() {
                return $http.get('data.json')
                    .then(
                    function(response) {
                        return response.data;
                    },
                    function(httpError) {
                        throw httpError.status + " : " + httpError.data;
                    });
            }
        }
    }

}());