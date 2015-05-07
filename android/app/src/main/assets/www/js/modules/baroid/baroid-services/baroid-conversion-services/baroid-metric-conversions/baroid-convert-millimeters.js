angular.module("baroidApp").service("BaroidConvertMillimeters",
    [function () {
        var millimeters, centimeters, meters;
        this.setMillimeters = function (millimetersValue) {
            millimeters = millimetersValue;
            centimeters = (millimeters * 0.1);
            meters = (millimeters * 0.001);
        };
        this.getConversions = function () {
            return {
                "toInches": {
                    "title": millimeters + " millimeters to inches",
                    "value": (centimeters * 0.393701)
                },
                "toFeet": {
                    "title": millimeters + " millimeters to feet",
                    "value": (centimeters * 0.0328084)
                },
                "toYards": {
                    "title": millimeters + " millimeters to yards",
                    "value": ((centimeters * 0.0328084) / 3)
                },
                "toMiles": {
                    "title": millimeters + " millimeters to miles",
                    "value": ((centimeters * 0.0328084) / 5280)
                },
                "toCentimeters": {
                    "title": millimeters + " millimeters to centimeters",
                    "value": (centimeters)
                },
                "toMeters": {
                    "title": millimeters + " millimeters to meters",
                    "value": (meters)
                },
                "toKilometers": {
                    "title": millimeters + " millimeters to kilometers",
                    "value": (meters * 1000)
                }
            }
        }
    }]);