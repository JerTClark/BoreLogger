angular.module("bisonInc")
    .service("bisonPDFService", ["bisonService", "BisonPDFValues",
        "BisonPDFLogoData", "$q", "$cordovaToast",
        function (bisonService, BisonPDFValues, BisonPDFLogoData, $q,
                  $cordovaToast) {
            var self = this;
            var output;
            var bisonPDF = {};
            var boreLogToConvert = {};

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

            /*Getter*/
            var getBoreLogToConvert = function () {
                return boreLogToConvert;
            };

            /**
             * Move to the next line,
             * Start a new column,
             * or Begin a new page
             */
            var nextLine = function () {
                if (Y === 285 && X === 15) {
                    nextColumn();
                } else if (Y === 285 && X > 15) {
                    bisonPDF.addPage();
                    resetXY();
                } else {
                    Y += NEXT_Y;
                }
            };

            /**
             * Start a new "column" Testing
             */
            var nextColumn = function () {
                Y = 65;
                X = 110;
            };


            /*Generic promise factory*/
            function getPromise(asyncTask, param) {
                var q = $q.defer();
                asyncTask(q, param);
                return q.promise;
            }

            /*Show a toast*/
            function toast(message) {
                if (!window.chrome) {
                    $cordovaToast.show(message, "short", "bottom");
                }
            }

            /**
             * Handles order of code execution
             */
            var createPDF = function (promise) {
                /*Show a toast*/
                function toast(message) {
                    if (!window.chrome) {
                        $cordovaToast.show(message, "short", "bottom");
                    }
                }

                getPromise(init)
                    .then(function (result) {
                        toast(result);
                        getPromise(writePDFHeader, result);
                    }).then(function (result) {
                        //toast(result);
                        getPromise(addImage);
                    }).then(function (result) {
                        //toast(result);
                        drawSecondLine();
                        getPromise(writeLocates);
                    }).then(function (result) {
                        //toast(result);
                        toast("Saving your PDF");
                        savePDF(promise);
                    }).catch(function (error) {
                        console.log("Error: " + error);
                        toast("An error occurred creating the PDF: " + error);
                    });

            };

            /*Setter*/
            var setBoreLogToConvert = function () {
                boreLogToConvert = bisonService.getActiveLog();
            };

            /*Called first from self.getPDF()*/
            var init = function (q) {
                bisonPDF = new jsPDF();
                setBoreLogToConvert();
                output = getBoreLogToConvert()["id"] + ".pdf";
                q.resolve("Creating your document");
            };

            /**
             * Writing the Header text
             */
            var writePDFHeader = function (q) {
                console.log(bisonPDF);
                /*Write the Header*/
                bisonPDF.setTextColor(255, 0, 0);
                bisonPDF.setFont(BisonPDFValues.FONT.TIMES);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.TITLE);

                /*Write the subtitle*/
                nextLine();
                bisonPDF.setTextColor(100);
                bisonPDF.text(X, Y + 1, BisonPDFValues.TEXT.SUBTITLE);
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
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.CUSTOMER);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X + 45, Y, BisonPDFValues.PUNC.SPACE + boreLogToConvert["customer"]);
                bisonPDF.setTextColor(0);

                /*Conduit*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.CONDUIT);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X + 45, Y, BisonPDFValues.PUNC.SPACE + boreLogToConvert["conduit"]);
                bisonPDF.setTextColor(0);

                /*Location*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.LOCATION);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X + 45, Y, BisonPDFValues.PUNC.SPACE + boreLogToConvert["location"]);
                bisonPDF.setTextColor(0);

                /*Length of bore*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.LENGTH_OF_BORE);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X + 45, Y, BisonPDFValues.PUNC.SPACE + boreLogToConvert["length"]
                + BisonPDFValues.PUNC.SPACE + BisonPDFValues.TEXT.LINEAR_FEET);
                bisonPDF.setTextColor(0);

                /*Drill pipe length*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.DRILL_PIPE_LENGTH);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X + 45, Y, BisonPDFValues.PUNC.SPACE + boreLogToConvert["drillPipe"]
                + BisonPDFValues.PUNC.SPACE + BisonPDFValues.TEXT.FEET);
                bisonPDF.setTextColor(0);

                /*Date*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.DATE);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X + 45, Y, BisonPDFValues.PUNC.SPACE + boreLogToConvert["date"]);
                bisonPDF.setTextColor(0);
                nextLine();
                /*Header ends by adding a new line buffer*/
                q.resolve("Header done");
                //return "Header done";
            };

            /**
             * Writing the Locates involves the potential
             * for outgrowing the current page, but nextLine()
             * handles checking for that
             */
            var writeLocates = function (q) {
                var counter = 1;
                boreLogToConvert["locates"].forEach(function (locate) {
                    bisonPDF.text(X, Y, BisonPDFValues.TEXT.LOCATE
                    + BisonPDFValues.PUNC.SPACE
                    + counter + BisonPDFValues.PUNC.COLON
                    + BisonPDFValues.PUNC.SPACE
                    + BisonPDFValues.PUNC.SPACE + locate);
                    counter++;
                    nextLine();
                });
                q.resolve("Locates written");
                //return "Locates written";
            };

            /**
             * Add the Bison Logo to the PDF
             */
            var addImage = function (q) {
                bisonPDF.addImage(BisonPDFLogoData, "PNG", 160, 5, 40, 50);
                q.resolve("Image added");
                //return "Image added";
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
            var savePDF = function (promise) {
                if (promise) {
                    /*Save using the PDF buffer*/
                    promise.resolve(bisonPDF.output());
                    //promise.resolve(bisonPDF.save(output));
                    cleanup();
                } else {
                    /*Saves the doc using data-uri*/
                    bisonPDF.save(output);
                    cleanup();
                }
            };

            /**
             * This should be the ONLY method necessary to "get"
             * a PDF into the controller/download button
             */
            self.getPDF = function (promise) {
                if (promise) {
                    createPDF(promise);
                } else {
                    createPDF();
                }
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
        }]);