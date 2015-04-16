//.value("BaroidSoilTypesTest", {
//    "Gravel/Cobble": {
//        "type": "Gravel/Cobble",
//        "value": 1,
//        "getValue": function () {
//            return 1;
//        }
//    },
//    "Sand/Gravel": {
//        "type": "Sand/Gravel",
//        "value": 2,
//        "getValue": function () {
//            return 2;
//        }
//    },
//    "CoarseSand": {
//        "type": "CoarseSand",
//        "value": 3,
//        "getValue": function () {
//            return 3;
//        }
//    },
//    "Fine/MediumSand": {
//        "type": "Fine/MediumSand",
//        "value": 4,
//        "getValue": function () {
//            return 4;
//        }
//    },
//    "Sandy/Clay": {
//        "type": "Sandy/Clay",
//        "value": 5,
//        "getValue": function () {
//            return 5;
//        }
//    },
//    "Clay": {
//        "type": "Clay",
//        "value": 6,
//        "getValue": function () {
//            return 6;
//        }
//    },
//    "Rock": {
//        "type": "Rock",
//        "value": 7,
//        "getValue": function () {
//            return 7;
//        }
//    }
//});

//console.group("Keeping tabs on $scope.input");
//console.info("Input Object: %O should reflect input values", $scope.input);
//console.groupEnd();



/**
 * @desc Depends on $scope.input["diameter"], $scope.input["drillpipe"], and $scope.input["soil"]["value"]
 * @type {number} Estimated Funnel Viscosity (of the mix)
 */
//$scope.estimatedFunnelViscosity = 0;

/**
 * @desc Depends on $scope.input["soil"]["value"], $scope.input["diameter"], and $scope.input["length"]
 * @type {number} Estimated Fluid Volume (of the hole)
 */
//$scope.estimatedFluidVolume = 0;

/**
 * @desc Depends on $scope.estimatedFunnelViscosity, $scope.input["soil"]["value"], and $scope.input["pump"]
 * @type {number} Actual Pump Output (of the rig)
 */
//$scope.actualPumpOutput = 0;

/**
 * @desc $scope.input["soil"]["value"], $scope.estimatedFluidVolume, $scope.input["length"], $scope.input["drillpipe"],
 *     and $scope.actualPumpOutput
 * @type {number} Recommended Pullback Speed (minutes per drill pipe)
 */
//$scope.recommendedPullbackSpeed = 0;
