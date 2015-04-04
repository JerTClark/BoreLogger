angular.module("baroidApp")
    .value("BaroidOptionCategories", [
        {
            "title":"Calculators",
            "description":"& Interactive tools for Drilling",
            "buttons": [
                {
                    "name":"Cubic FPM",
                    "code":0
                },
                {
                    "name":"Annular Velocity",
                    "code":1
                },
                {
                    "name":"HDD Pullback",
                    "code":2
                },
                {
                    "name":"Charts",
                    "code":3
                }
            ]
        }
    ]);