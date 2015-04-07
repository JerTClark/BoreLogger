angular.module("bisonInc").service("bisonDateService", ["bisonService", function (bisonService) {
    var self = this;
    self.dateRecord = {};
    /**
     * Set value bisonService.activeLog["dateObj"]
     * @returns {Object} dateObj
     */
    self.getBisonDateObject = function (dateValue) {
        //Determine @dateToParse by bisonService.activeLog["type"]
        var dateToParse = bisonService.getType() === "journal" ?
            new Date().format("M d Y H m s") :
            new Date(dateValue)
                .format("M d Y H m s");
        //Return the dateObj
        return self.parseDate(dateToParse);
    };

    /**
     * Set value of bisonService.activeLog["date"]
     * @returns {String}
     */
    self.humanReadableDate = function (dateArg) {
        return bisonService.getType() === "journal" ?
            new Date().format("M d Y") :
            new Date(dateArg)
                .format("M d Y");
    };

    /**
     * Set the value of bisonService.activeLog["id"]
     * @returns {string}
     */
    self.generateBisonID = function (customer, location) {
        var id = customer + location + self.dateRecord.bisonDateToFileFormat();
        return id.replace(/\s/g, "");
    };
    self.parseDate = function (dateToParse) {
        var dateArray = dateToParse.toString().split(" ");
        self.dateRecord = {
            originalDate: dateToParse,
            month: dateArray[0],
            date: dateArray[1],
            year: dateArray[2],
            hour: dateArray[3],
            minute: dateArray[4],
            second: dateArray[5],
            bisonDateToString: function () {
                return this.month + ". " + this.date + ", " +
                    this.year;
            },
            bisonTimeToString: function () {
                return this.hour + ":" + this.minute + ":" + this.second;
            },
            bisonDateToFileFormat: function () {
                return this.month + this.date + this.year + "-" + this.hour + this.minute + this.second;
            }
        };
        return {
            originalDate: dateToParse,
            month: dateArray[0],
            date: dateArray[1],
            year: dateArray[2],
            hour: dateArray[3],
            minute: dateArray[4],
            second: dateArray[5]
        }
    }
}]);