describe('Sanity check', function(){

    it('nowtv.com contains nowtv', function(){
        expect('nowtv.com').toContain('nowtv');
    });

});

describe("Another Sanity Test", function () {
    it("test that true is truthy", function () {
        expect(true).toBeTruthy();
    });
});