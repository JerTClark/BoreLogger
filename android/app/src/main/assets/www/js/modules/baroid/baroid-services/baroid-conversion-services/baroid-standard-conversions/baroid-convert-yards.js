angular.module("baroidApp").service("BaroidConvertYards",
    [function () {
        var yards, feet;
        this.setYards = function (yardsValue) {
            yards = yardsValue;
            feet = (yards / 3);
        };
        this.getConversions = function () {
            return {
                "toInches": {
                    "title": yards + " yards to inches",
                    "value": (feet * 12)
                },
                "toFeet": {
                    "title": yards + " yards to feet",
                    "value": (feet)
                },
                "toMiles": {
                    "title": yards + " yards to miles",
                    "value": (feet / 5280)
                },
                "toMillimeters": {
                    "title": yards + " yards to millimeters",
                    "value": (feet * 304.8)
                },
                "toCentimeters": {
                    "title": yards + " yards to centimeters",
                    "value": (feet * 30.48)
                },
                "toMeters": {
                    "title": yards + " yards to meters",
                    "value": (feet * 0.3048)
                },
                "toKilometers": {
                    "title": yards + " yards to kilometers",
                    "value": (feet * 0.0003048)
                }
            }
        }
    }]);