/**
 * Config for grunt-contrib-uglify task
 */
module.exports = function () {
    return {
        "options" : {/**/},
        "uglifyJS" : {
            "files" : {
                "www/dist/bison.baroid.min.js" : "www/dist/bison.baroid.js"
            }
        },
        "uglifyBaroidLibs" : {
            "files" : {
                //"www/dist/js"
            }
        }
    }
};