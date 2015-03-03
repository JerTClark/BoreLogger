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

    //Helps to quickly scroll to elements
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

    //Home
    var StateHome = function () {
        return {
            test: 1 + 2,
            get: function () {
                browser.get("http://localhost:8100/#/");
            },
            refreshAllOptions: function () {
                return element.all(by.repeater("category in optionCategories"));
            },
            //The ionNavBar
            ionNavBar: element(by.id("bison-nav-bar")),
            allOptions: element.all(by.repeater("category in optionCategories")),
            //Categories
            boreLogCategory: element(by.cssContainingText(".bison-category", "Bore Log")),
            boreJournalCategory: element(by.cssContainingText(".bison-category", "Bore Journal")),
            pdfCategory: element(by.cssContainingText(".bison-category", "Create PDF")),
            //Category descriptions
            boreLogCategoryDescription: element(by.cssContainingText(".bison-description", "Record a completed bore")),
            boreJournalCategoryDescription: element(by.cssContainingText(".bison-description", "Record an ongoing bore")),
            pdfCategoryDescription: element(by.cssContainingText(".bison-description", "A billable report")),
            //Buttons
            createBoreLogButton: element(by.id("button0")),
            continueBoreLogButton: element(by.id("button1")),
            createBoreJournalButton: element(by.id("button2")),
            continueBoreJournalButton: element(by.id("button3")),
            convertBoreLogButton: element(by.id("button4")),
            createPdfButton: element(by.id("button5"))
        }
    };

    //New-bore-log
    var StateNewBoreLog = function () {
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
            dateCategory: element(by.cssContainingText(".bison-category", "Date")),
            drillPipeCategory: element(by.cssContainingText(".bison-category", "Drill pipe")),
            //Category descriptions
            customerCategoryDescription: element(by.cssContainingText(".bison-description", "the company for whom the work is performed")),
            conduitCategoryDescription: element(by.cssContainingText(".bison-description", "product (for ex., (1) 12\" Plastic)")),
            locationCategoryDescription: element(by.cssContainingText(".bison-description", "place most readily associated with the job site")),
            lengthOfBoreCategoryDescription: element(by.cssContainingText(".bison-description", "footage drilled (no comma, just the number)")),
            dateCategoryDescription: element(by.cssContainingText(".bison-description", "start or end of the job")),
            drillPipeCategoryDescription: element(by.cssContainingText(".bison-description", "length of drill pipe used")),
            //Buttons
            topButton: element(by.buttonText("Double-check")),
            bottomButton: element(by.buttonText("Continue")),
            editLocatesButton: element(by.buttonText("Edit locates")),
            //Inputs
            customerInput: element(by.id("0-input")),
            conduitInput: element(by.id("1-input")),
            locationInput: element(by.id("2-input")),
            lengthOfBoreInput: element(by.id("3-input")),
            dateInput: element(by.id("4-input")),
            //Toggle
            drillPipeToggle: element(by.id("drillPipeToggle"))
        }
    };

    //Locates-modal
    var LocatesModal = function () {
        return {
            test: 1 + 2,
            locateModalTitle: element(by.id("locate-modal-title")),
            showHideHeader: element(by.id("modal-show-hide-header")),
            customerHeader: element(by.id("Customer-modal-header")),
            conduitHeader: element(by.id("Conduit-modal-header")),
            locationHeader: element(by.id("Location-modal-header")),
            lengthOfBoreHeader: element(by.id("Length of bore-modal-header")),
            dateHeader: element(by.id("Date-modal-header")),
            customerPre: "Customer: ",
            conduitPre: "Conduit: ",
            locationPre: "Location: ",
            lengthOfBorePre: "Length of bore: ",
            datePre: "Date: "
        }
    };

    //Continue-state
    var StateContinue = function () {
        return {
            test: 1 + 2
        }
    };

    //New-bore-log
    var StateResume = function () {
        return {
            test: 1 + 2,
            ionNavBar: element(by.id("bison-nav-bar")),
            backButton: element(by.cssContainingText(".back-button", "")),
            allElements: element.all(by.repeater("field in boreLogModel")),
            customerCategory: element(by.cssContainingText(".bison-category", "Customer")),
            conduitCategory: element(by.cssContainingText(".bison-category", "Conduit")),
            locationCategory: element(by.cssContainingText(".bison-category", "Location")),
            lengthOfBoreCategory: element(by.cssContainingText(".bison-category", "Length of bore")),
            dateCategory: element(by.cssContainingText(".bison-category", "Date")),
            drillPipeCategory: element(by.cssContainingText(".bison-category", "Drill pipe")),
            //-- Buttons
            topButton: element(by.buttonText("Double-check")),
            bottomButton: element(by.buttonText("Continue")),
            editLocatesButton: element(by.buttonText("Edit locates")),
            //-- Inputs
            customerInput: element(by.id("0-input")),
            conduitInput: element(by.id("1-input")),
            locationInput: element(by.id("2-input")),
            lengthOfBoreInput: element(by.id("3-input")),
            dateInput: element(by.id("4-input")),
            //-- Toggle
            drillPipeToggle: element(by.id("drillPipeToggle"))
        }
    };

    var helper = new MyHelper();
    var home = new StateHome();
    var newLog = new StateNewBoreLog();
    var locatesModal = new LocatesModal();
    var continueState = new StateContinue();
    var resumeState = new StateResume();

    xdescribe("Basic Options state navigation test", function () {

        beforeEach(function () {
            home.get();
        });

        it("should pass the basic test", function () {
            expect(home.test).toEqual(3);
            expect(newLog.test).toEqual(3);
            expect(locatesModal.test).toEqual(3);
            expect(continueState.test).toEqual(3);
            expect(resumeState.test).toEqual(3);
        });
        it("should begin having the title \"Options\"", function () {
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
        it("should take you to the appropriate \"Continue\" state", function () {
            home.continueBoreLogButton.click();
            expect(home.ionNavBar.getText()).toEqual("Options\nContinue log");
            newLog.backButton.click();//Matches more than one element
            home.continueBoreJournalButton.click();
            expect(home.ionNavBar.getText()).toEqual("Options\nContinue journal");
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
            home.convertBoreLogButton.click();
            expect(home.ionNavBar.getText()).toEqual("Options");
            helper.scroll(home.createPdfButton);
            home.createPdfButton.click();
            expect(home.ionNavBar.getText()).toEqual("Options");
        });
    });

    xdescribe("New bore log state", function () {
        beforeEach(function () {
            home.get();
        });
        it("should have certain categories, each with descriptions", function () {

        });
    });

    xdescribe("Testing the Locates modal from New bore log", function () {

        /**
         * Note: you can't access the locates-modal unless
         * the bisonGenInfoForm is $valid. This means all the input
         * fields must be entered
         */
        beforeEach(function () {
            home.get();
            home.createBoreLogButton.click();
            newLog.customerInput.sendKeys("Washington Gas");
            newLog.conduitInput.sendKeys("(1) 12\" Plastic");
            newLog.locationInput.sendKeys("123 Some Street");
            newLog.lengthOfBoreInput.sendKeys("1,234 LF (15\' Rods)");
            newLog.dateInput.sendKeys("12312016");
            helper.scroll(newLog.topButton);
            newLog.topButton.click();
            expect(locatesModal.typeHeader.getText()).toEqual("Bore log");
        });

        it("should take you \"home\" when \"Cancel\" is clicked", function () {
            home.createBoreJournalButton.click();
            helper.scroll(newLog.bottomButton);
            newLog.bottomButton.click();
            expect(home.ionNavBar.getText()).toEqual("Options");
        });

        //TODO This is obsolete due to layout change
        xit("should display \"Bore log\" when accessed from \"Create\" (Bore Log) button", function () {
            home.createBoreLogButton.click();
            newLog.customerInput.sendKeys("Washington Gas");
            newLog.conduitInput.sendKeys("(1) 12\" Plastic");
            newLog.locationInput.sendKeys("123 Some Street");
            newLog.lengthOfBoreInput.sendKeys("1,234 LF (15\' Rods)");
            newLog.dateInput.sendKeys("12312016");
            helper.scroll(newLog.topButton);
            newLog.topButton.click();
            expect(locatesModal.typeHeader.getText()).toEqual("Bore log");
        });

        it("should display \"Bore journal\" when accessed from \"Create\" (Bore Journal) button", function () {
            home.createBoreJournalButton.click();
            newLog.customerInput.sendKeys("Washington Gas");
            newLog.locationInput.sendKeys("123 Some Street");
            helper.scroll(newLog.topButton);
            newLog.topButton.click();
            expect(locatesModal.typeHeader.getText()).toEqual("Bore journal");
        });

        //TODO this will be changed to reflect the current locates
        it("should reflect the entries of the user on the previous screen", function () {
            home.createBoreLogButton.click();
            newLog.customerInput.sendKeys("Washington Gas");
            newLog.conduitInput.sendKeys("(1) 12\" Plastic");
            newLog.locationInput.sendKeys("123 Some Street");
            newLog.lengthOfBoreInput.sendKeys("1,234 LF (15\' Rods)");
            newLog.dateInput.sendKeys("12312016");
            helper.scroll(newLog.topButton);
            newLog.topButton.click();
            expect(locatesModal.customerHeader.getText()).toEqual(locatesModal.customerPre + "Washington Gas");
            expect(locatesModal.conduitHeader.getText()).toEqual(locatesModal.conduitPre + "(1) 12\" Plastic");
            expect(locatesModal.locationHeader.getText()).toEqual(locatesModal.locationPre + "123 Some Street");
            //expect(locatesModal.lengthOfBoreHeader.getText()).toEqual(locatesModal.lengthOfBorePre + "1,234 LF (15\' Rods)");
        });

    });
});