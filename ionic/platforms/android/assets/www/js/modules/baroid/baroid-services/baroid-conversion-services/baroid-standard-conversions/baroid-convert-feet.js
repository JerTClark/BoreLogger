angular.module("baroidApp").service("BaroidConvertFeet",
    function () {
        var feet;
        this.setFeet = function (feetValues) {
            feet = feetValues;
        };
        this.getConversions = function () {
            return {
                "toInches": {
                    "title": feet + " feet to inches",
                    "value": (feet * 12)
                },
                "toYards": {
                    "title": feet + " feet to yards",
                    "value": (feet / 3)
                },
                "toMiles": {
                    "title": feet + " feet to miles",
                    "value": (feet / 5280)
                },
                "toMillimeters": {
                    "title": feet + " feet to millimeters",
                    "value": (feet * 304.8)
                },
                "toCentimeters": {
                    "title": feet + " feet to millimeters",
                    "value": (feet * 30.48)
                },
                "toMeters": {
                    "title": feet + " feet to meters",
                    "value": (feet * 0.3048)
                },
                "toKilometers": {
                    "title": feet + " feet to kilometers",
                    "value": (feet * 0.0003048)
                }
            };
        };
    });