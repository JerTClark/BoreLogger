angular.module("baroidApp").service("BaroidConvertMeters",
    function () {
        var meters;
        this.setMeters = function (metersValue) {
            meters = metersValue;
        };
        this.getConversions = function () {
            return {
                "toMillimeters": {
                    "title": meters + " meters to millimeters",
                    "value": (meters * 1000)
                },
                "toCentimeters": {
                    "title": meters + " meters to centimeters",
                    "value": (meters * 100)
                },
                "toKilometers": {
                    "title": meters + " meters to kilometers",
                    "value": (meters / 1000)
                },
                "toInches": {
                    "title": meters + " meters to inches",
                    "value": ((meters * 3.28084) * 12)
                },
                "toFeet": {
                    "title": meters + " meters to feet",
                    "value": (meters * 3.28084)
                },
                "toYards": {
                    "title": meters + " meters to yards",
                    "value": (meters * 1.09361)
                },
                "toMiles": {
                    "title": meters + " meters to miles",
                    "value": ((meters * 3.28084) / 5280)
                }
            };
        };
    });