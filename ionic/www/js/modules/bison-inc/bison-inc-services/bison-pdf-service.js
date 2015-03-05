angular.module("bisonInc")
    .service("bisonPDFService", ["bisonService","BisonPDFValues", "BisonPDFLogoData",
        function (bisonService, BisonPDFValues, BisonPDFLogoData) {
            var self = this;
            var output;
            var bisonPDF = {};
            var boreLogToConvert = {};
            var bisonPDFPromise = null;

            /*Page layout properties*/
            /**
             * @type {number} Position from top
             */
            var Y = 15;
            /**
             * @type {number} Amount to move down for new line
             */
            var NEXT_Y = 5;
            /**
             * @type {number} Initial position from left
             */
            var X = 15;

            /**
             * If this isn't done, consecutive PDFs will
             * begin where the last PDF values left off
             */
            var resetXY = function () {
                Y = 15;
                X = 15;
            };

            /*TODO Solely for exposing experimental features to testing*/
            self.test = function () {
                console.log(BisonPDFValues.TEXT.BEGIN_BORE + " " + BisonPDFValues.TEXT.END_BORE);
            };

            /*Called first from self.getPDF()*/
            var init = function () {
                bisonPDF = new jsPDF();
                setBoreLogToConvert();
                output = getBoreLogToConvert()["id"] + ".pdf";
            };

            /*Getter and setter*/
            var setBoreLogToConvert = function () {
                boreLogToConvert = bisonService.getActiveLog();
            };
            var getBoreLogToConvert = function () {
                return boreLogToConvert;
            };

            /**
             * Handles order of code execution
             */
            var createPDF = function (promise) {
                init();
                if(promise) promise.notify("Writing header");
                writePDFHeader();
                if(promise) promise.notify("Adding logo");
                addImage();
                drawSecondLine();
                if(promise) promise.notify("Writing locates");
                writeLocates();
                if(promise) promise.notify("Saving");
                save(promise);
            };

            /**
             * Move to the next line,
             * Start a new column,
             * or Begin a new page
             */
            var nextLine = function () {
                if(Y === 285 && X === 15) {
                    nextColumn();
                } else if ( Y=== 285 && X > 15 ) {
                    bisonPDF.addPage();
                    resetXY();
                } else {
                    Y+=NEXT_Y;
                }
            };

            /**
             * Start a new "column" Testing
             */
            var nextColumn = function () {
                Y = 65;
                X = 110;
            };

            /**
             * Writing the Header text
             */
            var writePDFHeader = function () {
                /*Write the Header*/
                bisonPDF.setTextColor(255,0,0);
                bisonPDF.setFont(BisonPDFValues.FONT.TIMES);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X,Y,BisonPDFValues.TEXT.TITLE);

                /*Write the subtitle*/
                nextLine();
                bisonPDF.setTextColor(100);
                bisonPDF.text(X,Y+1,BisonPDFValues.TEXT.SUBTITLE);
                bisonPDF.setTextColor(0);

                /*Draw a blue line to separate header*/
                //bisonPDF.setDrawColor(0,0,255);
                //bisonPDF.setLineWidth(0.5);
                //bisonPDF.line(X,Y+3,155,Y+3);

                /*Buffer space*/
                nextLine();

                /*Customer*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X,Y,BisonPDFValues.TEXT.CUSTOMER);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X+45,Y,BisonPDFValues.PUNC.SPACE + boreLogToConvert["customer"]);
                bisonPDF.setTextColor(0);

                /*Conduit*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X,Y,BisonPDFValues.TEXT.CONDUIT);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X+45,Y,BisonPDFValues.PUNC.SPACE + boreLogToConvert["conduit"]);
                bisonPDF.setTextColor(0);

                /*Location*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X,Y,BisonPDFValues.TEXT.LOCATION);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X+45,Y,BisonPDFValues.PUNC.SPACE + boreLogToConvert["location"]);
                bisonPDF.setTextColor(0);

                /*Length of bore*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X,Y,BisonPDFValues.TEXT.LENGTH_OF_BORE);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X+45,Y,BisonPDFValues.PUNC.SPACE + boreLogToConvert["length"]
                    + BisonPDFValues.PUNC.SPACE + BisonPDFValues.TEXT.LINEAR_FEET);
                bisonPDF.setTextColor(0);

                /*Drill pipe length*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X,Y,BisonPDFValues.TEXT.DRILL_PIPE_LENGTH);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X+45,Y,BisonPDFValues.PUNC.SPACE + boreLogToConvert["drillPipe"]
                    + BisonPDFValues.PUNC.SPACE + BisonPDFValues.TEXT.FEET);
                bisonPDF.setTextColor(0);

                /*Date*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X,Y,BisonPDFValues.TEXT.DATE);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X+45,Y,BisonPDFValues.PUNC.SPACE + boreLogToConvert["date"]);
                bisonPDF.setTextColor(0);
                nextLine();/*Header ends by adding a new line buffer*/
            };

            /**
             * Writing the Locates involves the potential
             * for outgrowing the current page, but nextLine()
             * handles checking for that
             */
            var writeLocates = function() {
                var counter = 1;
                boreLogToConvert["locates"].forEach(function (locate) {
                    bisonPDF.text(X, Y, BisonPDFValues.TEXT.LOCATE + BisonPDFValues.PUNC.SPACE
                        + counter + BisonPDFValues.PUNC.COLON + BisonPDFValues.PUNC.SPACE
                        + BisonPDFValues.PUNC.SPACE + locate);
                    counter++;
                    nextLine();
                });


            };

            /**
             * Add the Bison Logo to the PDF
             */
            var addImage = function () {
                bisonPDF.addImage(BisonPDFLogoData, "PNG", 160, 5, 40, 50);
            };

            /**
             * Draw the separator line to divide the header from locates
             */
            var drawSecondLine = function () {
                nextLine();
                //bisonPDF.setDrawColor(255,0,0);
                //bisonPDF.line(X,Y,200,Y);
            };

            /**
             * LAST The save() function is called LAST
             * The variable output is the item returned from getPDF()
             */
            var save = function (promise) {
                if(promise) {
                    promise.resolve(bisonPDF.output())
                } else {
                    /*Saves the doc using data-uri*/
                    bisonPDF.save(output);
                }
            };

            /**
             * This should be the ONLY method necessary to "get"
             * a PDF into the controller/download button
             */
            self.getPDF = function(promise) {
                if(promise) {
                    createPDF(promise);
                } else {
                    createPDF();
                }
                cleanup();
            };

            /**
             * Everything here is just experimental
             * @type {Promise}
             */
            /*Clean-up*/
            var cleanup = function () {
                resetXY();
                bisonPDF = {};
                boreLogToConvert = {};
            };

            /*Run after writeHeaders() to test some output*/
            var locatesTest = function () {
                bisonPDF.text(X, Y, "Locates begin where Y = " + Y);
                bisonPDF.text(110, Y, "At x = 100; Locates begin where Y = " + Y);
                /*Testing for the point at which a new column should be made*/
                for(var i = 0; i <= 100; i++) {
                    bisonPDF.text(X, Y, i + ". Y is " + Y);
                    nextLine();
                }
            }
        }]);