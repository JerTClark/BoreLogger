angular.module("baroidApp")
    .value("BaroidOptionCategories", [
        {
            "title":"Baroid",
            "description":"Interactive tools for Drilling",
            "buttons": [
                {
                    "name":"Annular Velocity",
                    "code":1,
                    "state":"annular"
                },
                {
                    "name":"HDD Pullback",
                    "code":2,
                    "state":"pullback"
                },
                {
                    "name":"Conversion",
                    "code":3,
                    "state":"conversion"
                },
                {
                    "name":"Product Guide",
                    "code":4,
                    "state":"products"
                }
            ]
        }
    ]);