angular.module("baroidApp")
    .value("BaroidOptionCategories", [
        {
            "title":"Baroid",
            "description":"Interactive tools for Drilling",
            "buttons": [
                {
                    "name":"Annular Velocity",
                    "description":"Calculate annular velocity given drill bit diameter, drill pipe diameter, and pump output.",
                    "purpose":"Hole cleaning and stability",
                    "code":1,
                    "state":"annular"
                },
                {
                    "name":"HDD Pullback",
                    "description":"Calculate a recommended pullback speed given soil type, bore length, hole diameter, etc.",
                    "purpose":"Rate of speed per rod in minutes; fluid mix recommendations",
                    "code":2,
                    "state":"pullback"
                },
                {
                    "name":"Conversion",
                    "description":"Convert various units of measurement into other units",
                    "purpose":"Convert units of measurement",
                    "code":3,
                    "state":"conversion"
                },
                {
                    "name":"Product Guide",
                    "description":"A listing of baroid products. Touch the name of the product for a description.",
                    "purpose":"Drilling fluid formation",
                    "code":4,
                    "state":"products"
                }
            ]
        }
    ]);