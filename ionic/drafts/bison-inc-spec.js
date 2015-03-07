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

    /**Utility to quickly scroll to elements*/
    var BrowserHelper = function () {
        return {
            scroll: function () {
                var webElement = arguments[0].getWebElement();
                browser.executeScript(function () {
                    arguments[0].scrollIntoView();
                }, webElement);
            },
            /**
             * @param elemId The id of the element ("#continue-item-0")
             */
            swipeLeft: function(elemId) {
                /*Requires jQuery loaded before Angular*/
                /**
                 * May not need to use browser.executeScript()
                 */
                browser.executeScript(function () {
                    angular.element(elemId).parent().css("-webkit-transform", "translate3d(-139px, 0px, 0px)");
                    angular.element(".item-options").removeClass("invisible");
                });
            }
        }
    };

    /**
     * Home state (aka Options screen)
     */
    var StateHome = function () {
        return {
            test: 1 + 2,
            get: function () {
                browser.get("http://localhost:8100/#/");
            },
            refreshAllOptions: function () {
                return element.all(by.repeater("category in optionCategories"));
            },
            /**
             * ionNavBar is universally accessible from any state.
             * Use home.ionNavBar to test the view-title values of each state.
             */
            ionNavBar: element(by.id("bison-nav-bar")),
            allOptions: element.all(by.repeater("category in optionCategories")),
            /*Categories*/
            boreLogCategory: element(by.cssContainingText(".bison-category", "Bore Log")),
            boreJournalCategory: element(by.cssContainingText(".bison-category", "Bore Journal")),
            pdfCategory: element(by.cssContainingText(".bison-category", "Create PDF")),
            /*Category descriptions*/
            boreLogCategoryDescription: element(by.cssContainingText(".bison-description", "Record a completed bore")),
            boreJournalCategoryDescription: element(by.cssContainingText(".bison-description", "Record an ongoing bore")),
            pdfCategoryDescription: element(by.cssContainingText(".bison-description", "A billable report")),
            /*Buttons*/
            createBoreLogButton: element(by.id("button0")),
            continueBoreLogButton: element(by.id("button1")),
            createBoreJournalButton: element(by.id("button2")),
            continueBoreJournalButton: element(by.id("button3")),
            convertBoreLogButton: element(by.id("button4")),
            createPdfButton: element(by.id("button5")),
            settingsButton: element(by.id("options-settings-button"))
        }
    };

    /**
     * New bore log state
     * NOTE: New bore log state is recycled
     * Using $stateParams, it detects that a user selection was made
     * via Continue state.
     */
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
            /*Category descriptions*/
            customerCategoryDescription: element(by.cssContainingText(".bison-description", "the company for whom the work is performed")),
            conduitCategoryDescription: element(by.cssContainingText(".bison-description", "product (for ex., (1) 12\" Plastic)")),
            locationCategoryDescription: element(by.cssContainingText(".bison-description", "place most readily associated with the job site")),
            lengthOfBoreCategoryDescription: element(by.cssContainingText(".bison-description", "footage drilled (no comma, just the number)")),
            dateCategoryDescription: element(by.cssContainingText(".bison-description", "start or end of the job")),
            drillPipeCategoryDescription: element(by.cssContainingText(".bison-description", "length of drill pipe used")),
            /*Buttons*/
            topButton: element(by.buttonText("Save & Add locates")),
            bottomButton: element(by.buttonText("Save & Quit")),
            editLocatesButton: element(by.buttonText("Edit locates")),
            /*Inputs*/
            customerInput: element(by.id("0-input")),
            conduitInput: element(by.id("1-input")),
            locationInput: element(by.id("2-input")),
            lengthOfBoreInput: element(by.id("3-input")),
            dateInput: element(by.id("4-input")),
            /*Toggle*/
            //drillPipeToggle: element(by.id("drillPipeToggle")),
            drillPipeToggle: element(by.css(".toggle-assertive")),
            /*Text changed by toggle*/
            drillPipeToggleText: element(by.binding("drillPipeLength")),
            fillOutNewBoreLogForm: function () {
                /*Fill out the form*/
                browserHelper.scroll(newBoreLogState.customerInput);
                newBoreLogState.customerInput.sendKeys(newBoreLogState.boreLogMock.customer);
                newBoreLogState.conduitInput.sendKeys(newBoreLogState.boreLogMock.conduit);
                newBoreLogState.locationInput.sendKeys(newBoreLogState.boreLogMock.location);
                newBoreLogState.lengthOfBoreInput.sendKeys(newBoreLogState.boreLogMock.lengthOfBore);
                newBoreLogState.dateInput.sendKeys(newBoreLogState.boreLogMock.date);
            },
            /*Mock data*/
            boreLogMock: {
                customer: "My Customer",
                conduit: "(1) Piece\" ofPipe",
                location: "1234 DrillBit Street",
                lengthOfBore: "500",
                date: "04272004"
            },
            /*Mock data*/
            boreJournalMock: {
                customer: "My Customer",
                location: "1234 DrillBit Street"
            },
            /*Mock data*/
            locatesMock: {
                locate0: {
                    feet:"3",
                    inches:"4",
                    crossing:""
                },
                locate1: {
                    feet:"4",
                    inches:"5",
                    crossing:""
                },
                locate2: {
                    feet:"5",
                    inches:"6",
                    crossing:"AT&T @ 3\' Top"
                },
                locate3: {
                    feet:"6",
                    inches:"7",
                    crossing:"Water @ 4\' Btm"
                },
                locate4: {
                    feet:"7",
                    inches:"6",
                    crossing:"Creek"
                }
            }
        }
    };

    /**
     * The locates modal
     * A template passed to bisonFormButtonPanel directive
     */
    var LocatesModal = function () {
        return {
            test: 1 + 2,
            locatesModalTitle: element(by.id("locates-modal-title")),
            locatesModalCloseButton: element(by.id("close-locates-modal")),
            locatesModalShowDeleteButton: element(by.id("locates-modal-show-delete-button")),
            locatesModalShowReorderButton: element(by.id("locates-modal-show-reorder-button")),
            locatesModalFeetInput: element(by.id("feet")),
            locatesModalInchesInput: element(by.id("inches")),
            locatesModalTopButton: element(by.id("locates-modal-top-button")),
            locatesModalBottomButton: element(by.id("locates-modal-bottom-button")),
            locatesModalShowContentItem: element(by.id("locates-modal-show-content")),
            locatesModalShowHeaderSpan: element(by.id("modal-show-header")),
            locatesModalHideHeaderSpan: element(by.id("modal-hide-header")),
            locatesModalPopupInput: element(by.id("popupInput")),
            locatesModalPopupCancelButton: element(by.cssContainingText("button-positive","Cancel")),
            locatesModalPopupEnterButton: element(by.cssContainingText("button-positive","Enter")),
            locatesModalListItem0: element(by.id("locate-modal-value-0"))
            /**
             * The Locates list
             * Each locate is shown as text in a span with
             * an id "locate-modal-value-$index" where $index
             * is its position in the array of
             * $scope.modal.values (<-- in the directive)
             * or $scope.getModalValues() (<-- in the controller)
             */
        }
    };

    /**
     * Edit locates modal
     * Template passed to bisonFormButtonPanel
     */
    var EditLocatesModal = function () {
        return {
            test: 1 + 2,
            editLocatesModalTitle: element(by.id("edit-locates-modal-title")),
            editLocatesModalCloseButton: element(by.id("close-edit-locates-modal")),
            editLocatesModalShowDeleteButton: element(by.id("edit-locates-show-delete-button")),
            editLocatesModalShowReorderButton: element(by.id("edit-locates-show-reorder-button")),
            editLocatesModalPopupInput: element(by.id("popupInput")),
            editLocatesModalPopupCancelButton: element(by.cssContainingText("button-positive","Cancel")),
            editLocatesModalPopupEnterButton: element(by.cssContainingText("button-positive","Enter"))
        }
    };

    /**
     * Continue state
     * Presents the user with a list of logs with which they can resume
     * interaction (or convert, depending on Home state selection)
     */
    var StateContinue = function () {
        return {
            test: 1 + 2,
            continueSelectElem: element(by.id("continue-select")),
            continueSearchInput: element(by.id("continue-search-input")),
            /*Use BrowserHelper swipeleft([continue-item-N]) to uncover the buttons*/
            continueSampleDeleteButton: element(by.id("continue-delete-button-0")),
            continueSampleSelectButton: element(by.id("continue-select-button-0")),
            continuePDFDownloadButton: element(by.id("pdfDownload"))
        }
    };

    var StateSettings = function () {
        return {
            test: 1+2,
            allElements: element.all(by.repeater("category in settingsCategories")),
            settingsClearLocalCacheButton: element(by.buttonText("Clear local cache")),
            settingsAboutThisAppButton: element(by.buttonText("About this app"))
        }
    };

    /*Same as New bore log state*/
    var StateResume = function () {
        return new StateNewBoreLog();
    };

    var browserHelper = new BrowserHelper();
    var homeState = new StateHome();
    var newBoreLogState = new StateNewBoreLog();
    var locatesModal = new LocatesModal();
    var editLocatesModal = new EditLocatesModal();
    var continueState = new StateContinue();
    var resumeState = new StateResume();
    var settingsState = new StateSettings();

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
     * Testing the functionality of the Home state
     */
    xdescribe("Home State", function () {
        beforeEach(function () {
            homeState.get();
        });
        it("should begin having the title \"Options\"", function () {
            expect(homeState.ionNavBar.getText()).toEqual("Options");
        });
        it("should help me understand how \"by.repeater\" works", function () {
            expect(homeState.allOptions.getText()).toEqual(["Bore Log\nCreate\nContinue",
                "Bore Journal\nCreate\nContinue", "", ""]);//Some not in view
            browserHelper.scroll(homeState.createPdfButton);
            expect(homeState.refreshAllOptions().getText()).toEqual(["",
                "Bore Journal\nCreate\nContinue\nConvert",
                "Create PDF\nCreate", ""]);//Will change if file options are shown
        });
        it("should expose the count() function", function () {
            expect(homeState.allOptions.count()).toEqual(4);
        });
        it("should take you to General info and back to Options", function () {
            homeState.createBoreLogButton.click();
            expect(newBoreLogState.ionNavBar.getText()).toEqual("Options\nGeneral info");
            newBoreLogState.backButton.click();//Matches more than one element
            expect(homeState.ionNavBar.getText()).toEqual("Options");
            homeState.createBoreJournalButton.click();
            expect(newBoreLogState.ionNavBar.getText()).toEqual("Options\nGeneral info");
            newBoreLogState.backButton.click();//Matches more than one element
            expect(homeState.ionNavBar.getText()).toEqual("Options");
        });
        it("should take you to \"Continue\" state showing \"Continue\" or \"Convert\" in the view-title", function () {
            homeState.continueBoreLogButton.click();
            expect(homeState.ionNavBar.getText()).toEqual("Options\nContinue log");
            newBoreLogState.backButton.click();//Matches more than one element
            homeState.continueBoreJournalButton.click();
            expect(homeState.ionNavBar.getText()).toEqual("Options\nContinue journal");
            newBoreLogState.backButton.click();//Matches more than one element
            browserHelper.scroll(homeState.convertBoreLogButton);
            homeState.convertBoreLogButton.click();
            expect(homeState.ionNavBar.getText()).toEqual("Options\nConvert journal");
            newBoreLogState.backButton.click();//Matches more than one element
            browserHelper.scroll(homeState.createPdfButton);
            homeState.createPdfButton.click();
            expect(homeState.ionNavBar.getText()).toEqual("Options\nConvert log");
        });
        it("should have descriptions for each category", function () {
            homeState.boreLogCategory.click();
            homeState.boreJournalCategory.click();
            var desc1 = element(by.cssContainingText(".bison-description", "Record a completed bore"));
            var desc2 = element(by.cssContainingText(".bison-description", "Record an ongoing bore"));
            expect(desc1.getText()).toEqual("Record a completed bore");
            expect(desc2.getText()).toEqual("Record an ongoing bore");
            browserHelper.scroll(homeState.pdfCategory);
            var desc3 = element(by.cssContainingText(".bison-description", "A billable report"));
            homeState.pdfCategory.click();
            expect(desc3.getText()).toEqual("A billable report");
        });
    });

    /**
     * Testing New bore log state for a Bore Log
     */
    describe("New bore log state (Bore Log)", function () {
        beforeEach(function () {
            homeState.get();
            homeState.createBoreLogButton.click();
        });
        xit("should have 6 categories and 6 descriptions", function () {
            /**
             * Note: the value of 1 is representative of the drillPipeLength
             * Category (which is not to be included in the ngRepeat
             */
            var theDrillPipeCategory = 1;
            expect(newBoreLogState.allElements.count()).toEqual(6 - theDrillPipeCategory);

            newBoreLogState.customerCategory.click();
            expect(newBoreLogState.customerCategoryDescription.getText()).toEqual("the company for whom the work is performed");
            newBoreLogState.customerCategory.click();

            newBoreLogState.conduitCategory.click();
            expect(newBoreLogState.conduitCategoryDescription.getText()).toEqual("product (for ex., (1) 12\" Plastic)");
            newBoreLogState.conduitCategory.click();

            newBoreLogState.locationCategory.click();
            expect(newBoreLogState.locationCategoryDescription.getText()).toEqual("place most readily associated with the job site");
            newBoreLogState.locationCategory.click();

            browserHelper.scroll(newBoreLogState.lengthOfBoreCategory);
            newBoreLogState.lengthOfBoreCategory.click();
            expect(newBoreLogState.lengthOfBoreCategoryDescription.getText()).toEqual("footage drilled (no comma, just the number)");
            newBoreLogState.lengthOfBoreCategory.click();

            browserHelper.scroll(newBoreLogState.dateCategory);
            newBoreLogState.dateCategory.click();
            expect(newBoreLogState.dateCategoryDescription.getText()).toEqual("start or end of the job");
            newBoreLogState.dateCategory.click();

            browserHelper.scroll(newBoreLogState.drillPipeCategory);
            newBoreLogState.drillPipeCategory.click();
            expect(newBoreLogState.drillPipeCategoryDescription.getText()).toEqual("length of drill pipe used");
            newBoreLogState.drillPipeCategory.click();

        });

        xit("should display 5 input fields and 1 toggle to the user for input", function () {

            newBoreLogState.fillOutNewBoreLogForm();
            browserHelper.scroll(newBoreLogState.drillPipeToggle);
            newBoreLogState.drillPipeToggle.click();

            expect(newBoreLogState.customerInput.getAttribute("value")).toEqual(newBoreLogState.boreLogMock.customer);
            expect(newBoreLogState.conduitInput.getAttribute("value")).toEqual(newBoreLogState.boreLogMock.conduit);
            expect(newBoreLogState.locationInput.getAttribute("value")).toEqual(newBoreLogState.boreLogMock.location);
            expect(newBoreLogState.lengthOfBoreInput.getAttribute("value")).toEqual(newBoreLogState.boreLogMock.lengthOfBore);
            expect(newBoreLogState.dateInput.getAttribute("value")).toEqual("2004-04-27");/*Date value format*/
            expect(newBoreLogState.drillPipeToggleText.getText()).toEqual("15\'");

        });

        xit("should have 1 button for adding locates that is disabled until all required fields are valid", function () {
            /*This is the button that should be disabled*/
            browserHelper.scroll(newBoreLogState.topButton);
            expect(newBoreLogState.topButton.getAttribute("disabled")).toEqual("true");
            /*Fill out the form*/
            browserHelper.scroll(newBoreLogState.customerInput);
            newBoreLogState.fillOutNewBoreLogForm();
            browserHelper.scroll(newBoreLogState.topButton);
            expect(newBoreLogState.topButton.getAttribute("disabled")).toBeNull();
        });
        xit("should allow you quit", function () {
            newBoreLogState.bottomButton.click();
            expect(homeState.ionNavBar.getText()).toEqual("Options");
            homeState.createBoreLogButton.click();

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