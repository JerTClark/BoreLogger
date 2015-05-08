/**
 * Config for grunt-contrib-concat task
 */
module.exports = function () {
    return {
        "concatJS": {
            "src": "www/js/**/*.js",
            "dest": "www/dist/js/bison.baroid.js",
            "options": {
                "separator": "\n"
            }
        },
        /**
         * Bower and other dependencies for the Bison module
         */
        "concatBisonLibs": {
            "src": [
                "lib/jquery/dist/jquery.min.js",
                "lib/ionic/js/ionic.bundle.min.js",
                "lib/angular-sanitize/angular-sanitize.min.js",
                "lib/angular-ui-router/release/angular-ui-router.min.js",
                "lib/ngCordova/dist/ng-cordova.min.js",
                "lib/datejs/build/date.js",
                "lib/jsPDF/dist/jspdf.min.js"
            ],
            "dest": "www/dist/lib/bison.bundle.js"
        },
        /**
         * Bower and other dependencies for the Baroid module
         */
        "concatBaroidLibs": {
            "src": [
                "lib/jquery/dist/jquery.min.js",
                "lib/ionic/js/ionic.bundle.min.js",
                "lib/angular-sanitize/angular-sanitize.min.js",
                "lib/angular-ui-router/release/angular-ui-router.min.js",
                "lib/ngCordova/dist/ng-cordova.min.js"
            ],
            "dest": "www/dist/lib/baroid.bundle.js"
        }
    }
};