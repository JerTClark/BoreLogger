/***
 * Reference:
 *
 * //Locators
 * by.css(".my-class")
 * by.id("myid")
 * by.model("name")
 * by.binding("bindingname")
 *
 * var el = element(locator);
 * el.click();//Click on the element
 * el.sendKeys("abc");//Send keys to the element (usually an input)
 * el.clear();//Clear the text in the element (usually an input)
 * el.getAttribute("value");//Get the value of an attribute, ie get the value of an input
 * el.getText()
 *
 * All elements return a promise and are then-able
 *
 * element.all(locator).then(function(elements){
 * //elements is an array of elements
 * }
 *
 * element.all(locator).count();//number of elements
 * element.all(locator).get(index);//get by index
 *
 */

describe("BoreLoggerByState", function () {

    var MyHelper = function () {
        return {
            scroll: function () {
                var webElement = arguments[0].getWebElement();
                browser.executeScript(function () {
                    arguments[0].scrollIntoView();
                }, webElement);
            }
        }
    };

    var stateHome = function () {
        return {
            test: 1 + 2,
            get: function () {
                browser.get("http://localhost:8100/#/");
            },
            refreshAllOptions: function () {
                return element.all(by.repeater("category in optionCategories"));
            },
            ionNavBar: element(by.id("bison-nav-bar")),
            allOptions: element.all(by.repeater("category in optionCategories")),
            boreLogCategory: element(by.cssContainingText(".bison-category", "Bore Log")),
            boreJournalCategory: element(by.cssContainingText(".bison-category", "Bore Journal")),
            pdfCategory: element(by.cssContainingText(".bison-category", "Create PDF")),
            createBoreLogButton: element(by.id("button0")),
            continueBoreLogButton: element(by.id("button1")),
            createBoreJournalButton: element(by.id("button2")),
            continueBoreJournalButton: element(by.id("button3")),
            convertBoreLogButton: element(by.id("button4")),
            createPdfButton: element(by.id("button5"))
        }
    };

    var stateNewBoreLog = function () {
        return {
            test: 1 + 2,
            get: function () {
                browser.get("http://localhost:8100/#/new-bore-log");
            },
            ionNavBar: element(by.id("bison-nav-bar")),
            backButton: element(by.cssContainingText(".back-button", "")),
            allElements: element.all(by.repeater("field in boreLogModel")),
            customerCategory: element(by.cssContainingText(".bison-category", "Customer")),
            conduitCategory: element(by.cssContainingText(".bison-category", "Conduit")),
            locationCategory: element(by.cssContainingText(".bison-category", "Location")),
            lengthOfBoreCategory: element(by.cssContainingText(".bison-category", "Length of bore")),
            dateCategory: element(by.cssContainingText(".bison-category", "Date"))
        }
    };

    var helper = new MyHelper();
    var home = new stateHome();
    var newLog = new stateNewBoreLog();


    beforeEach(function () {
        home.get();
    });

    xit("should pass the basic test", function () {
        expect(home.test).toEqual(3);
        expect(newLog.test).toEqual(3);
    });

    it("should have the title \"Options\"", function () {
        expect(home.ionNavBar.getText()).toEqual("Options");
    });

    it("should help me understand how \"by.repeater\" works", function () {
        expect(home.allOptions.getText()).toEqual(["Bore Log\nCreate\nContinue",
                "Bore Journal\nCreate\nContinue\nConvert", "", ""]);//Some not in view
        helper.scroll(home.createPdfButton);
        expect(home.refreshAllOptions().getText()).toEqual(["",
            "Bore Journal\nCreate\nContinue\nConvert",
            "Create PDF\nCreate", ""]);//Will change if file options are shown
    });

    it("should take you to General info and back to Options", function () {
        home.createBoreLogButton.click();
        expect(newLog.ionNavBar.getText()).toEqual("Options\nGeneral info");
        newLog.backButton.click();//Matches more than one element
        expect(home.ionNavBar.getText()).toEqual("Options");
        home.createBoreJournalButton.click();
        expect(newLog.ionNavBar.getText()).toEqual("Options\nGeneral info");
        newLog.backButton.click();//Matches more than one element
        expect(home.ionNavBar.getText()).toEqual("Options");
    });

    it("should have click-able category headers", function () {
        home.boreLogCategory.click();
        home.boreJournalCategory.click();
        helper.scroll(home.pdfCategory);
        home.pdfCategory.click();
    });

    it("should have descriptions for each category", function () {
        home.boreLogCategory.click();
        home.boreJournalCategory.click();
        var desc1 = element(by.cssContainingText(".bison-description", "Record a completed bore"));
        var desc2 = element(by.cssContainingText(".bison-description", "Record an ongoing bore"));
        expect(desc1.getText()).toEqual("Record a completed bore");
        expect(desc2.getText()).toEqual("Record an ongoing bore");
        helper.scroll(home.pdfCategory);
        var desc3 = element(by.cssContainingText(".bison-description", "A billable report"));
        home.pdfCategory.click();
        expect(desc3.getText()).toEqual("A billable report");
    });

    it("should not change state (yet) when these buttons are clicked", function () {
        home.continueBoreLogButton.click();
        expect(home.ionNavBar.getText()).toEqual("Options");
        home.continueBoreJournalButton.click();
        expect(home.ionNavBar.getText()).toEqual("Options");
        home.convertBoreLogButton.click();
        expect(home.ionNavBar.getText()).toEqual("Options");
        helper.scroll(home.createPdfButton);
        home.createPdfButton.click();
        expect(home.ionNavBar.getText()).toEqual("Options");
    });
});