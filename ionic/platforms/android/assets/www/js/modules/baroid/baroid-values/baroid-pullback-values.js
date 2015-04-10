angular.module("baroidApp")
/**
 * These are object representations for each grid row of inputs
 * (which should contain two columns apiece)
 */
    .value("BaroidPullbackInputs", {
        "RowOne": [
            {
                "type": "number",
                "inputName": "length",
                "title": "Bore length",
                "hint": "Length in feet",
                "isRequired": true,
                "errorMessage": "Number required"
            },
            {
                "type": "number",
                "inputName": "diameter",
                "title": "Diameter",
                "hint": "Diameter in inches",
                "isRequired": true,
                "errorMessage": "Number required"
            }
        ],
        "RowTwo": [
            {
                "type": "number",
                "inputName": "drillpipe",
                "title": "Drillpipe",
                "hint": "Drillpipe length in feet",
                "isRequired": true,
                "errorMessage": "Number required"
            },
            {
                "type": "number",
                "inputName": "pump",
                "title": "Pump rating",
                "hint": "Pump rating in GPM",
                "isRequired": true,
                "errorMessage": "Number required"
            }],
        "RowThree":[
            {
                "type":"range",
                "min":1,
                "max":7,
                "labelClass":"range range-assertive",
                "inputName":"soil",
                "title":"Soil",
                "hint":"Soil type",
                "isRequired":true,
                "errorMessage":"Required"
            }
        ]
    })

/**
 * These multipliers' values must be calculated by their index + 1
 */
.value("BaroidSoilTypes", [
    {
        "type": "Gravel/Cobble",
        "value": 1
    },
    {
        "type": "Sand/Gravel",
        "value": 2
    },
    {
        "type": "CoarseSand",
        "value": 3
    },
    {
        "type": "Fine/MediumSand",
        "value": 4
    },
    {
        "type": "Sandy/Clay",
        "value": 5
    },
    {
        "type": "Clay",
        "value": 6
    },
    {
        "type": "Rock",
        "value": 7
    }
])
    .value("BaroidEstimatedFunnelViscosity", {
        "1":85,
        "2":55,
        "3":37,
        "4":37,
        "5":44,
        "6": function (diameter, length) {
            var M64, I58, I59;

            if(diameter < 8) {
                I58 = 0;
            }
            else {
                I58 = 1;
            }

            if(length < 500) {
                I59 = 0;
            }
            else {
                I59 = 1;
            }

            M64 = I58 + I59;

            if(M64 === 0) {
                return 52;
            }
            else {
                return 72;
            }

        },
        "7":37
    });