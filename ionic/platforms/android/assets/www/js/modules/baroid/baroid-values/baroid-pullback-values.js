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
        {
            "type":"Gravel/Cobble",
            "value":1
        },
        {
            "type":"Sand/Gravel",
            "value":2
        },
        {
            "type":"CoarseSand",
            "value":3
        },
        {
            "type":"Fine/MediumSand",
            "value":4
        },
        {
            "type":"Sandy/Clay",
            "value":5
        },
        {
            "type":"Clay",
            "value":6
        },
        {
            "type":"Rock",
            "value":7
        }
    ]);