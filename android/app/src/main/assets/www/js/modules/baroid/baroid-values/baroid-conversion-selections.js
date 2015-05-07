angular.module("baroidApp")
    .value("BaroidConversionSelections", [
        /*Distance*/
        "Inches",
        "Feet",
        "Yards",
        "Miles",
        /*Volume*/
        "Gallons"
    ])
    .value("BaroidConversionSelectionsMetric", [
        /*Distance*/
        "Millimeters",
        "Centimeters",
        "Meters",
        "Kilometers",
        /*Volume*/
        "Liters"
    ]);