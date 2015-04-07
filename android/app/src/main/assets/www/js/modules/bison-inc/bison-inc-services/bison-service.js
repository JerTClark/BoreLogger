angular.module("bisonInc").service("bisonService", [function () {
    var self = this;
    self.setType = function (type) {
        self.type = type;
    };
    self.getType = function () {
        return self.type;
    };
    self.setActiveLog = function (activeLog) {
        self.activeLog = activeLog;
    };
    self.getActiveLog = function () {
        if (self.activeLog) {
            return self.activeLog;
        } else {
            return {
                type: "",
                customer: "",
                conduit: "",
                location: "",
                length: "",
                drillPipe:""
            }
        }
    };
    self.setID = function (id) {
        self.activeLog["id"] = id;
    };
    self.setMonthDate = function (monthDate) {
        self.activeLog["monthDate"] = monthDate;
    };
    self.setYear = function (year) {
        self.activeLog["year"] = year;
    };
    self.finalize = function(id, monthDate, year) {
        self.setID(id);
        self.setMonthDate(monthDate);
        self.setYear(year);
    };
    self.getActiveDateObject = function () {
        return self.activeLog["date"];
    };
    self.getActiveLocates = function () {
        return self.activeLog["locates"];
    };
}]);