angular.module("baroidApp").service("BaroidConvertLiters",
    function () {
        var liters;
        this.setLiters = function (litersValue) {
            liters = litersValue;
        };
        this.getConversions = function () {
            return {
                "toMilliliters": {
                    "title": liters + " liters to milliliters",
                    "value": (liters * 1000)
                },
                "toFluidOunces": {
                    "title": liters + " liters to fluid ounces",
                    "value": (liters * 33.814)
                },
                "toCups": {
                    "title": liters + " liters to cups",
                    "value": (liters * 4.22675)
                },
                "toPints": {
                    "title": liters + " liters to pints",
                    "value": (liters * 2.11338)
                },
                "toQuarts": {
                    "title": liters + " liters to quarts",
                    "value": (liters * 1.05669)
                },
                "toGallons": {
                    "title": liters + " liters to gallons",
                    "value": (liters / 3.7854121)
                },
                "toCubicInches": {
                    "title": liters + " liters to cubic inches",
                    "value": (liters * 61.0237)
                },
                "toCubicFeet": {
                    "title": liters + " liters to cubic feet",
                    "value": (liters * 0.0353147)
                },
                "toCubicYards": {
                    "title": liters + " liters to cubic yards",
                    "value": ((liters * 0.0353147) * 0.037037037)
                },
                "toCubicMeters": {
                    "title": liters + " liters to cubic meter",
                    "value": (liters * 0.001)
                }
            };
        };
    });