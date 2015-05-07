angular.module("baroidApp").service("BaroidConvertCentimeters",
    function () {
        var centimeters, meters;
        this.setCentimeters = function (centimetersValue) {
            centimeters = centimetersValue;
            meters = (centimeters / 100);
        };
        this.getConversions = function () {
            return {
                "toMillimeters":{
                    "title": centimeters + " centimeters to millimeters",
                    "value": (centimeters * 10)
                },
                "toMeters":{
                    "title": centimeters + " centimeters to meters",
                    "value": (meters)
                },
                "toKilometers": {
                    "title": centimeters + " centimeters to kilometers",
                    "value": (meters * 0.001)
                },
                "toInches":{
                    "title": centimeters + " centimeters to inches",
                    "value": (centimeters * 0.39370)
                },
                "toFeet":{
                    "title": centimeters + " centimeters to feet",
                    "value": ((centimeters * 0.39370) / 12)
                },
                "toYards": {
                    "title": centimeters + " centimeters to yards",
                    "value": (((centimeters * 0.39370) / 12) / 3)
                },
                "toMiles": {
                    "title": centimeters + " centimeters to miles",
                    "value": (((centimeters * 0.39370) / 12) / 5280)
                }
            }
        }
    });