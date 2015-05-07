angular.module("baroidApp")
    .service("BaroidConvertInches",
    function () {
        var inches;
        this.setInches = function (inchesValue) {
            inches = inchesValue;
        };
        this.getConversions = function () {
            return {
                "toFeet": {
                    "title": inches + " inches to feet",
                    "value": (inches / 12)
                },
                "toYards": {
                    "title": inches + " inches to yards",
                    "value": ((inches / 12) * 3)
                },
                "toMiles": {
                    "title": inches + " inches to miles",
                    "value": ((inches / 12) / 5280)
                },
                "toMillimeters": {
                    "title": inches + " inches to millimeters",
                    "value": ((inches / 39.37) * 1000)
                },
                "toCentimeters": {
                    "title": inches + " inches to centimeters",
                    "value": ((inches / 39.37) * 100)
                },
                "toMeters": {
                    "title": inches + " inches to meters",
                    "value": (inches / 39.37)
                },
                "toKilometers": {
                    "title": inches + " inches to kilometers",
                    "value": ((inches / 12) * 0.0003048)
                }
            };
        };
    });