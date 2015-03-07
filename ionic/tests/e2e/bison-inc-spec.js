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

    /**
     * Be sure that each Page Object is obtained
     */
    xdescribe("Passing basic test", function () {
        it("should pass the basic test", function () {
            expect(homeState.test).toEqual(3);
            expect(newBoreLogState.test).toEqual(3);
            expect(locatesModal.test).toEqual(3);
            expect(editLocatesModal.test).toEqual(3);
            expect(continueState.test).toEqual(3);
            expect(resumeState.test).toEqual(3);
            expect(settingsState.test).toEqual(3);
        });
    });

    /**
     * Testing New bore log state for a Bore Journal
     */
    xdescribe("New bore log state (Bore Journal)", function () {
        beforeEach(function () {
            homeState.get();
            homeState.createBoreJournalButton.click();
        });
        it("should have certain categories with descriptions", function () {

        });
    });

    /**
     * Testing Locates modal for a Bore Log
     */
    xdescribe("Locates modal (Bore Log)", function () {
        /**
         * Note: you can't access the locates-modal unless
         * the bisonGenInfoForm is $valid. This means all the input
         * fields must be entered
         */
        beforeEach(function () {
            homeState.get();
            homeState.createBoreLogButton.click();
            newBoreLogState.customerInput.sendKeys("Washington Gas");
            newBoreLogState.conduitInput.sendKeys("(1) 12\" Plastic");
            newBoreLogState.locationInput.sendKeys("123 Some Street");
            newBoreLogState.lengthOfBoreInput.sendKeys("1,234 LF (15\' Rods)");
            newBoreLogState.dateInput.sendKeys("12312016");
            browserHelper.scroll(newBoreLogState.topButton);
            newBoreLogState.topButton.click();
        });

        it("should have the right title", function () {
            expect(locatesModal.typeHeader.getText()).toEqual("Bore log locates");
        });

    });

    /**
     * Testing Locate modal for a Bore Journal
     */
    xdescribe("Locates modal (Bore Journal)", function () {
        /**
         * Note: you can't access the locates-modal unless
         * the bisonGenInfoForm is $valid. Required input
         * fields must be entered
         */
        beforeEach(function () {
            homeState.get();
            homeState.createBoreJournalButton.click();
            newBoreLogState.customerInput.sendKeys("Washington Gas");
            newBoreLogState.locationInput.sendKeys("123 Some Street");
            browserHelper.scroll(newBoreLogState.topButton);
            newBoreLogState.topButton.click();
        });

        it("should have the right title", function () {
            expect(locatesModal.typeHeader.getText()).toEqual("Bore journal locates");
        });
    });

    /**
     * Testing Continue state when continuing a Bore Log
     */
    xdescribe("Continue state (Bore Log)", function () {
        beforeEach(function () {
            homeState.get();
            homeState.continueBoreLogButton.click();
        });
    });

    /**
     * Testing Continue state when continuing a Bore Journal
     */
    xdescribe("Continue state (Bore Journal)", function () {
        beforeEach(function () {
            homeState.get();
            homeState.continueBoreJournalButton.click();
        });
    });

    /**
     * Testing the Resume state when resuming a Bore Log
     * NOTE: will fail if there are no entries in the database
     */
    xdescribe("Resume state (resuming a Bore Log)", function () {
        beforeEach(function () {
            homeState.get();
            homeState.continueBoreLogButton.click();
            browserHelper.swipeLeft("#continue-item-0")
        });
    });

    /**
     * Testing the Resume state when resuming a Bore Journal
     * NOTE: will fail if there are no entries in the database
     */
    xdescribe("Resume state (resuming a Bore Journal)", function () {
        beforeEach(function () {
            homeState.get();
            homeState.continueBoreJournalButton.click();
            browserHelper.swipeLeft("#continue-item-0")
        });
    });

    /**
     * Testing the Resume state when converting a Bore Journal
     * NOTE: will fail if there are no entries in the database
     */
    xdescribe("Resume state (converting a Bore Journal)", function () {
        beforeEach(function () {
            homeState.get();
            homeState.convertBoreLogButton.click();
            browserHelper.swipeLeft("#continue-item-0")
        });
    });

    /**
     * Testing the Resume state when creating a PDF
     * NOTE: will fail if there are no entries in the database
     */
    xdescribe("Resume state (creating a PDF)", function () {
        beforeEach(function () {
            homeState.get();
            homeState.createPdfButton.click();
            browserHelper.swipeLeft("#continue-item-0")
        });
    });


});