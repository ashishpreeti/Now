"use strict";
describe('Iceberg Movies', function(){
    beforeEach( function(){
        browser.driver.get('http://localhost:3000');
    });

    describe("List movies", function () {
        it('should navigate to Iceberg Movies and see list of movies and actors', function () {
            var list = element.all(by.repeater('actor in movie.actors.list'));
            expect(list.count()).toBe(102);
        });

        it("should list 20 movies", function () {
            var list = element.all(by.repeater("movie in filteredResults = (main.movies |  filter:searchText) | orderBy:'+title'| limitTo:20 "));
            expect(list.count()).toBe(20);
        });

        it("should display movie title on the home page", function () {
            var title = element(by.binding('movie.title'));
            expect(title.getText()).toBe('20 Days in the Valley');
        });

    });

    describe("Search Movies ", function () {
        it("should display message to enter more chars for search", function () {
            element(by.model('searchText')).sendKeys('12');
            var message = element(by.binding('main.message'));
            expect(message.getText()).toBe("Enter at least three characters to begin search");
        });

        it("should do the search and display the result message", function () {
            element(by.model('searchText')).sendKeys('The W');
            var message = element(by.id('matchedResults'));
            expect(message.getText()).toBe("Matched 8 of 160 movies total");
        });

        it("should display no results message when no match found", function () {
            element(by.model('searchText')).sendKeys('XYUYUYUYYYUUY');
            var message = element(by.id('noMatch'));
            expect(message.getText()).toBe("No matching items");
        });

    });

});