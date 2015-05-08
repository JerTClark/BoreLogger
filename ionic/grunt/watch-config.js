/**
 * Config for grunt-contrib-watch task
 */
module.exports = function () {
    return {
        "watchJS": {
            "files": ["www/js/**/*.js"],
            "tasks": ["notify"],
            "options": {
                "spawn": false
            }
        },
        "watchHTML": {
            "files": ["www/**/*.html"],
            "tasks": ["notify"],
            "options": {
                /*"livereload": false*/
            }
        }
    }
};