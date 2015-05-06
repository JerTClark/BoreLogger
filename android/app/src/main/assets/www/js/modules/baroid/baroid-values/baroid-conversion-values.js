angular.module("baroidApp")
    .value("BaroidConversionValues", {
        "Inches": {
            "type": "number",
            "inputName": "inches",
            "title": "Inches",
            "hint": "Enter inches here",
            "isRequired": true,
            "show": "Inches",
            "errorMessage": "Number required"
        },
        "Feet": {
            "type": "number",
            "inputName": "feet",
            "title": "Feet",
            "hint": "Enter feet here",
            "isRequired": true,
            "show": "Feet",
            "errorMessage": "Number required"
        },
        "Miles": {
            "type": "number",
            "inputName": "miles",
            "title": "Miles",
            "hint": "Enter miles here",
            "isRequired": true,
            "show": "Miles",
            "errorMessage": "Number required"
        },
        "Gallons": {
            "type": "number",
            "inputName": "gallons",
            "title": "Gallons",
            "hint": "Enter gallons here",
            "isRequired": true,
            "show": "Gallons",
            "errorMessage": "Number required"
        }
    })
    .value("BaroidConversionValuesMetric", {
        "Centimeters": {
            "type": "number",
            "inputName": "centimeters",
            "title": "Centimeters",
            "hint": "Enter centimeters here",
            "isRequired": true,
            "show": "Centimeters",
            "errorMessage": "Number required"
        },
        "Meters": {
            "type": "number",
            "inputName": "meters",
            "title": "Meters",
            "hint": "Enter meters here",
            "isRequired": true,
            "show": "Meters",
            "errorMessage": "Number required"
        },
        "Liters": {
            "type": "number",
            "inputName": "liters",
            "title": "Liters",
            "hint": "Enter liters here",
            "isRequired": true,
            "show": "Liters",
            "errorMessage": "Number required"
        }
    });