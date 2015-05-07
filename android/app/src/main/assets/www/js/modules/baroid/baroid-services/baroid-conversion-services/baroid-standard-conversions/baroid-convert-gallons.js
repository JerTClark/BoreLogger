angular.module("baroidApp").service("BaroidConvertGallons",
    function () {
        var gallons, cups;
        this.setGallons = function (gallonsValue) {
            gallons = gallonsValue;
            cups = (gallons * 16);
        };
        this.getConversions = function () {
            return {
                "toMilliliters": {
                    "title": gallons + " gallons to milliliters",
                    "value": ((gallons * 3.7854121) * 1000)
                },
                "toLiters": {
                    "title": gallons + " gallons to liters",
                    "value": (gallons * 3.7854121)
                },
                "toFluidOunces": {
                    "title": gallons + " gallons to fluid ounces",
                    "value": (gallons * 128)
                },
                "toCups": {
                    "title": gallons + " gallons to cups",
                    "value": cups
                },
                "toPints": {
                    "title": gallons + " gallons to pints",
                    "value": (cups / 2)
                },
                "toQuarts": {
                    "title": gallons + " gallons to quarts",
                    "value": (gallons * 4)
                },
                "toCubicInches": {
                    "title": gallons + " gallons to cubic inches",
                    "value": (gallons * 231)
                },
                "toCubicFeet": {
                    "title": gallons + " gallons to cubic feet",
                    "value": (gallons * 0.133681)
                },
                "toCubicYards": {
                    "title": gallons + " gallons to cubic yards",
                    "value": ((gallons * 0.133681) * 0.037037037)
                },
                "toCubicMeters": {
                    "title": gallons + " gallons to cubic meter",
                    "value": (gallons * 0.00378541)
                }
            }
        }
    });