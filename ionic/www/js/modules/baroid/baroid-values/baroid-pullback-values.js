angular.module("baroidApp")
    .value("BaroidPullbackNumericInputs", [
        {
            "type":"number",
            "inputName":"length",
            "title":"Length",
            "hint":"Length in feet",
            "isRequired":true,
            "errorMessage":"This is required"
        },
        {
            "type":"number",
            "inputName":"diameter",
            "title":"Diameter",
            "hint":"Diameter in inches",
            "isRequired":true,
            "errorMessage":"This is required"
        },
        {
            "type":"number",
            "inputName":"drillpipe",
            "title":"Drillpipe",
            "hint":"Drillpipe length in feet",
            "isRequired":true,
            "errorMessage":"This is required"
        },
        {
            "type":"range",
            "min":1,
            "max":7,
            "labelClass":"range range-assertive",
            "inputName":"soil",
            "title":"Soil",
            "hint":"Soil type",
            "isRequired":true,
            "errorMessage":"This is required"
        },
        {
            "type":"number",
            "inputName":"pump",
            "title":"Pump",
            "hint":"Pump rating in GPM",
            "isRequired":true,
            "errorMessage":"This is required"
        }
    ])
    /**
     * These multipliers' values must be calculated by their index + 1
     */
    .value("BaroidSoilTypes", [
        "Gravel/Cobble",
        "Sand/Gravel",
        "CoarseSand",
        "Fine/MediumSand",
        "Sandy/Clay",
        "Clay",
        "Rock"
    ]);