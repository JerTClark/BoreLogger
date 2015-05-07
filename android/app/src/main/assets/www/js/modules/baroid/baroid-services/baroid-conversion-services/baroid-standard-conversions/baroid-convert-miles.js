angular.module("baroidApp").service("BaroidConvertMiles",
    function () {
        var miles;
        this.setMiles = function (milesValue) {
            miles = milesValue;
        };
        this.getConversions = function () {
            return {
                "toInches": {
                    "title": miles + " miles to inches",
                    "value": ((miles * 5280) * 12)
                },
                "toFeet": {
                    "title": miles + " miles to feet",
                    "value": (miles * 5280)
                },
                "toYards": {
                    "title": miles + " miles to yards",
                    "value": ((miles * 5280) / 3)
                },
                "toMillimeters":{
                    "title": miles + " miles to millimeters",
                    "value": (((miles * 5280) * 30.48) * 10)
                },
                "toCentimeters": {
                    "title": miles + " miles to centimeters",
                    "value": ((miles * 5280) * 30.48)
                },
                "toMeters":{
                    "title": miles + " miles to meters",
                    "value": ((miles * 5280) / 3.28084)
                },
                "toKilometers": {
                    "title": miles + " miles to kilometers",
                    "value": (miles * 1.609344)
                }
            }
        }
    });