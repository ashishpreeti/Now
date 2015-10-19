(function () {
    "use strict";

    angular.module('app')
        .factory('soapService', ['$soap', soapService]);

    function soapService($soap) {
        var base_url = "http://www.webservicex.net/geoipservice.asmx",
        //var base_url = "http://localhost:8088/mockGeoIPServiceSoap",
            soapAction = "GetGeoIP",
            soapParams = {IPAddress : "192.168.1.10"};


        return {
            getJson: getJson
        };

        function getJson() {
            return $soap.post(base_url, soapAction, soapParams);
        }
    }

}());
