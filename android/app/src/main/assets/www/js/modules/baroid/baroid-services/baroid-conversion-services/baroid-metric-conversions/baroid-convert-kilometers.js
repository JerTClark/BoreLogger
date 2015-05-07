angular.module("baroidApp").service("BaroidConvertKilometers",
    function () {
        var kilometers, miles, meters;
        this.setKilometers = function (kilometersValue) {
            kilometers = kilometersValue;
            miles = (kilometers * 0.62137);
            meters = (kilometers * 1000);
        };
        this.getConversions = function () {
            return {
                "toInches": {
                    "title": kilometers + " kilometers to inches",
                    "value": ((miles * 5280) * 12)
                },
                "toFeet": {
                    "title": kilometers + " kilometers to feet",
                    "value": (miles * 5280)
                },
                "toYards":  {
                    "title": kilometers + " kilometers to yards",
                    "value": ((miles * 5280) / 3)
                },
                "toMiles":  {
                    "title": kilometers + " kilometers to miles",
                    "value": (miles)
                },
                "toMillimeters":  {
                    "title": kilometers + " kilometers to millimeters",
                    "value": (meters * 1000)
                },
                "toCentimeters":  {
                    "title": kilometers + " kilometers to centimeters",
                    "value": (meters * 100)
                },
                "toMeters":  {
                    "title": kilometers + " kilometers to inches",
                    "value": (meters)
                }
            }
        }
    });