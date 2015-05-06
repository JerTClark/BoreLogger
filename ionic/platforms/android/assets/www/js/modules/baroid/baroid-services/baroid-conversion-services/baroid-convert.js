angular.module("baroidApp")
    .service("BaroidConverter", ["BaroidConvertInches", "BaroidConvertFeet", "BaroidConvertMiles", "BaroidConvertGallons",
        "BaroidConvertCentimeters", "BaroidConvertMeters", "BaroidConvertLiters",
        function (BaroidConvertInches, BaroidConvertFeet, BaroidConvertMiles, BaroidConvertGallons,
                  BaroidConvertCentimeters, BaroidConvertMeters, BaroidConvertLiters) {

            this.convert = function (stringName, numberValue) {
                var conversion;
                switch (stringName) {
                    case "Inches":
                        BaroidConvertInches.setInches(numberValue);
                        conversion = BaroidConvertInches.getConversions();
                        break;
                    case "Feet":
                        BaroidConvertFeet.setFeet(numberValue);
                        conversion = BaroidConvertFeet.getConversions();
                        break;
                    case "Miles":
                        BaroidConvertMiles.setMiles(numberValue);
                        conversion = BaroidConvertMiles.getConversions();
                        break;
                    case "Gallons":
                        BaroidConvertGallons.setGallons(numberValue);
                        conversion = BaroidConvertGallons.getConversions();
                        break;
                    case "Centimeters":
                        BaroidConvertCentimeters.setCentimeters(numberValue);
                        conversion = BaroidConvertCentimeters.getConversions();
                        break;
                    case "Meters":
                        BaroidConvertMeters.setMeters(numberValue);
                        conversion = BaroidConvertMeters.getConversions();
                        break;
                    case "Liters":
                        BaroidConvertLiters.setLiters(numberValue);
                        conversion = BaroidConvertLiters.getConversions();
                        break;
                    default:
                        conversion = {};
                        break;
                }
                return conversion;
            }

        }])
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
                }
            };
        };
    })
    .service("BaroidConvertFeet",
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
                "toMillimeters": {
                    "title": feet + " feet to millimeters",
                    "value": ((feet / 3.281) * 1000)
                },
                "toMeters": {
                    "title": feet + " feet to meters",
                    "value": (feet / 3.281)
                },
                "toMiles": {
                    "title": feet + " feet to miles",
                    "value": (feet / 5280)
                },
                "toKilometers": {
                    "title": feet + " feet to kilometers",
                    "value": ((feet / 5280) / 1.609)
                }
            };
        };
    })
    .service("BaroidConvertMiles",
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
    })
    .service("BaroidConvertGallons",
    function () {
        var gallons, cups;
        this.setGallons = function (gallonsValue) {
            gallons = gallonsValue;
            cups = (gallons * 16);
        };
        this.getConversions = function () {
            return {
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
                "toLiters": {
                    "title": gallons + " gallons to liters",
                    "value": (gallons * 3.7854121)
                },
                "toMilliliters": {
                    "title": gallons + " gallons to milliliters",
                    "value": ((gallons * 3.7854121) * 1000)
                }
            }
        }
    })
    .service("BaroidConvertCentimeters",
    function () {
        var centimeters;
        this.setCentimeters = function (centimetersValue) {
            centimeters = centimetersValue;
        };
        this.getConversions = function () {
            return {
                "toMillimeters":{
                    "title": centimeters + " centimeters to millimeters",
                    "value": (centimeters * 10)
                },
                "toMeters":{
                    "title": centimeters + " centimeters to meters",
                    "value": (centimeters / 100)
                },
                "toInches":{
                    "title": centimeters + " centimeters to inches",
                    "value": (centimeters * 0.39370)
                },
                "toFeet":{
                    "title": centimeters + " centimeters to feet",
                    "value": ((centimeters * 0.39370) / 12)
                }
            }
        }
    })
    .service("BaroidConvertMeters",
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
                    "tile": meters + " meters to kilometers",
                    "value": (meters / 1000)
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
                    "tile": meters + " meters to miles",
                    "value": ((meters * 3.28084) / 5280)
                }
            };
        };
    })
    .service("BaroidConvertLiters",
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
                "toCups": {
                    "title": liters + " liters to cups",
                    "value": ((liters / 3.7854121) * 16)
                },
                "toGallons": {
                    "title": liters + " liters to gallons",
                    "value": (liters / 3.7854121)
                }
            };
        };
    });