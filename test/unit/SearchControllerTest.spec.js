"use strict";

describe("Search Controller", function () {
    var $controller, controller;

    beforeEach(module("app"));

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    beforeEach(function () {
        controller = $controller('SearchCtrl', {});
    });

    it("should not display any message when we first load the page", function () {
        expect(controller.message).toBeNull();
    });

    it("should display message 'Enter at least three characters to begin search' when less than more than zero and less than three characters are entered in the search box", function () {
        controller.search("12");
        expect(controller.message).toEqual('Enter at least three characters to begin search');
    });

    it("should remove the message when all characters in the search box are removed", function () {
        controller.search("");
        expect(controller.message).toBeNull();
    });

    it("should remove the message when three or more characters are entered in the search box", function () {
        controller.search("123");
        expect(controller.message).toBeNull();
    });
});