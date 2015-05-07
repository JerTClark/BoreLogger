angular.module("baroidApp")
    .service("BaroidConverter", ["BaroidConvertInches", "BaroidConvertFeet", "BaroidConvertYards", "BaroidConvertMiles",
        "BaroidConvertGallons",
        "BaroidConvertMillimeters", "BaroidConvertCentimeters", "BaroidConvertMeters", "BaroidConvertKilometers",
        "BaroidConvertLiters",
        function (BaroidConvertInches, BaroidConvertFeet, BaroidConvertYards, BaroidConvertMiles,
                  BaroidConvertGallons,
                  BaroidConvertMillimeters, BaroidConvertCentimeters, BaroidConvertMeters, BaroidConvertKilometers,
                  BaroidConvertLiters) {

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
                    case "Yards":
                        BaroidConvertYards.setYards(numberValue);
                        conversion = BaroidConvertYards.getConversions();
                        break;
                    case "Miles":
                        BaroidConvertMiles.setMiles(numberValue);
                        conversion = BaroidConvertMiles.getConversions();
                        break;
                    case "Gallons":
                        BaroidConvertGallons.setGallons(numberValue);
                        conversion = BaroidConvertGallons.getConversions();
                        break;
                    case "Millimeters":
                        BaroidConvertMillimeters.setMillimeters(numberValue);
                        conversion = BaroidConvertMillimeters.getConversions();
                        break;
                    case "Centimeters":
                        BaroidConvertCentimeters.setCentimeters(numberValue);
                        conversion = BaroidConvertCentimeters.getConversions();
                        break;
                    case "Meters":
                        BaroidConvertMeters.setMeters(numberValue);
                        conversion = BaroidConvertMeters.getConversions();
                        break;
                    case "Kilometers":
                        BaroidConvertKilometers.setKilometers(numberValue);
                        conversion = BaroidConvertKilometers.getConversions();
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

        }]);