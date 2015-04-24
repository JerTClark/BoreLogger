angular.module("baroidApp")
    .value("BaroidOptionCategories", [
        {
            "title":"Calculators",
            "description":"& Interactive tools for Drilling",
            "buttons": [
                {
                    "name":"Cubic FPM",
                    "code":0,
                    "state":"baroid"
                },
                {
                    "name":"Annular Velocity",
                    "code":1,
                    "state":"baroid"
                },
                {
                    "name":"HDD Pullback",
                    "code":2,
                    "state":"pullback"
                },
                {
                    "name":"Charts",
                    "code":3,
                    "state":"baroid"
                },
                {
                    "name":"Product Guide",
                    "code":4,
                    "state":"products"
                }
            ]
        }
    ]);