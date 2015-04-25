angular.module("baroidApp")

    .value("BaroidAnnularVelocityInputs", {
        "Inputs": [
            {
                "type": "number",
                "inputName": "drillBitDiameter",
                "title": "Drill bit",
                "step":"0.01",
                "hint": "Diameter in inches",
                "isRequired": true,
                "errorMessage": "Number required"
            },
            {
                "type": "number",
                "inputName": "drillPipeDiameter",
                "title": "Drill pipe",
                "step":"0.01",
                "hint": "Diameter in inches",
                "isRequired": true,
                "errorMessage": "Number required"
            },
            {
                "type": "number",
                "inputName": "pumpOutput",
                "title": "Pump output",
                "step":"0.01",
                "hint": "Gallons per minute",
                "isRequired": true,
                "errorMessage": "Number required"
            }
        ]
    });