describe("State", function ( ) {

    describe("Home", function () {
        it("should have an ion-view with view-title \"Options\"", function () {
            browser.get("http://localhost:8100/#/");
            expect(element(by.id("options")).getWebElement().getText()).toEqual("Options");
        });
    });
    //it(, function () {
    //    browser.get('http://localhost:28000/document/new');
    //    expect(element(by.id('header')).getWebElement().getText()).toEqual("Create a new document");
    //});

});