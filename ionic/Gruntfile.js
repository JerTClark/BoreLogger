/**
 * Manages the build by
 * <ul>
 * <li>creating bundled, minified javascript files from www/js and www/lib</li>
 * <li>copying the platform/android/assets/www folder to the native app's assets folder</li>
 * </ul>
 */
module.exports = function (grunt) {
    /**
     * var's for typical <b>grunt-contrib</b> type tasks
     */
    var jsFolder = "www/dist/js",
        libFolder = "www/dist/lib",
        jsConcatFile = "bison-baroid.js",
        libBisonConcatFile = "bison-libs.bundle.js",
        libBaroidConcatFile = "baroid-libs.bundle.js";
    /**
     * var's for copying the www folder <b>to my native app's assets</b> folder for quick deploy
     */
    var assetsWWWFolderSrc = "platforms/android/assets/www",
        assetsWWWFolderDest = "C:/Users/jerem_000/Desktop/BoreLogger/android/app/src/main/assets";
    /**
     * The global config
     */
    grunt.config.init({
        /**
         * read in <b>.json</b> files
         */
        "pkg": grunt.file.readJSON("package.json"),
        "ref": grunt.file.readJSON("ref.json"),
        /**
         * <b>make</b> task
         */
        "folders": {
            "options": {
                "minJSFolder": jsFolder,
                "minLibsFolder": libFolder
            }
        },
        /**
         * <b>grunt-contrib-watch</b> task
         */
        "watch": {
            "javascript": {
                "files": ["www/js/**/*.js"],
                "tasks": ["watch-javascript"],
                "options": {
                    "spawn": false
                }
            },
            "html": {
                "files": ["www/**/*.html"],
                "tasks": ["watch-html"],
                "options": {
                    /*"livereload": false*/
                }
            },
            "libs": {
                "files": ["www/lib/**/*"],
                "tasks": ["watch-libs"],
                "options": {}
            },
            "assets": {
                "files": ["platforms/android/assets/**/*"],
                "tasks": ["watch-assets"],
                "options": {}
            }
        },
        /**
         * <b>grunt-contrib-concat</b> task
         */
        "concat": {
            "javascript": {
                "src": "www/js/**/*.js",
                "dest": jsFolder + "/" + jsConcatFile,
                "options": {
                    "separator": "\n"
                }
            },
            /**
             * Bower and other dependencies for the <b>Bison</b> module
             */
            "bison-lib": {
                "src": [
                    "www/lib/jquery/dist/jquery.min.js",
                    "www/lib/ionic/js/ionic.bundle.min.js",
                    "www/lib/angular-sanitize/angular-sanitize.min.js",
                    "www/lib/angular-ui-router/release/angular-ui-router.min.js",
                    "www/lib/ngCordova/dist/ng-cordova.min.js",
                    "www/lib/datejs/build/date.js",
                    "www/lib/jsPDF/dist/jspdf.min.js"
                ],
                "dest": libFolder + "/" + libBisonConcatFile
            },
            /**
             * Bower and other dependencies for the <b>Baroid</b> module
             */
            "baroid-lib": {
                "src": [
                    "www/lib/jquery/dist/jquery.min.js",
                    "www/lib/ionic/js/ionic.bundle.min.js",
                    "www/lib/angular-sanitize/angular-sanitize.min.js",
                    "www/lib/angular-ui-router/release/angular-ui-router.min.js",
                    "www/lib/ngCordova/dist/ng-cordova.min.js"
                ],
                "dest": libFolder + "/" + libBaroidConcatFile
            }
        },
        /**
         * <b>grunt-contrib-uglify</b> task
         */
        "uglify": {
            "options": {/**/},
            "javascript": {
                "files": {
                    "www/dist/js/bison-baroid.bundle.min.js": jsFolder + "/" + jsConcatFile
                }
            },
            "bison-lib": {
                "files": {
                    "www/dist/lib/bison-libs.bundle.min.js": libFolder + "/" + libBisonConcatFile
                }
            },
            "baroid-lib": {
                "files": {
                    "www/dist/lib/baroid-libs.bundle.min.js": libFolder + "/" + libBaroidConcatFile
                }
            }
        },
        /**
         * <b>copy-www</b> task
         */
        "copy-www": {
            "options": {
                "src": [assetsWWWFolderSrc],
                "dest": assetsWWWFolderDest
            }
        }
    });
    /**
     * Load <b>npm tasks</b>
     */
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    /**
     * This will be called by the <b>watch:javascript</b> task when changes are detected
     */
    grunt.registerTask("watch-javascript", function () {
        console.log("Javascript change detected");
    });
    /**
     * This will be called by the <b>watch:html</b> task when changes are detected
     */
    grunt.registerTask("watch-html", function () {
        console.log("HTML change detected");
    });
    /**
     * This will be called by the <b>watch:libs</b> task when changes are detected
     */
    grunt.registerTask("watch-libs", function () {
        console.log("Libs change detected");
    });
    /**
     * This will be called by the <b>watch:assets</b> task when changes are detected
     */
    grunt.registerTask("watch-assets", function () {
        console.log("Assets change detected");
    });
    /**
     * <b>Create folders</b> required by other tasks
     */
    grunt.registerTask("folders", "Create the build and temp folders", function () {
        this.requiresConfig(this.name + ".options.minJSFolder");
        this.requiresConfig(this.name + ".options.minLibsFolder");
        var minJSDir = this.options().minJSFolder,
            minLibDir = this.options().minLibsFolder;
        grunt.file.mkdir(minJSDir);
        grunt.file.mkdir(minLibDir);
    });
    /**
     * Config for the <b>clean</b> task
     */
    grunt.registerTask('clean', 'Remove the grunt-created directories and their contents', function () {
        grunt.config.requires("folders.options.minJSFolder");
        grunt.config.requires("folders.options.minLibsFolder");
        grunt.file.delete(grunt.config.get("folders.options.minJSFolder"));
        grunt.file.delete(grunt.config.get("folders.options.minLibsFolder"));
    });
    /**
     * Register the <b>copy-www</b> task
     */
    grunt.registerTask("copy-www", "Copy the platform/android/assets/www folder to specified location", function () {
        grunt.config.requires("copy-www.options.src");
        grunt.config.requires("copy-www.options.dest");

        var srcFiles = grunt.config.get("copy-www.options.src"),
            destFile = grunt.config.get("copy-www.options.dest"),
            index = "www";

        var recursiveCopy = function (source, destination) {
            if (grunt.file.isDir(source)) {
                grunt.file.recurse(source, function (file) {
                    recursiveCopy(file, destination);
                });
            } else {
                grunt.log.writeln("Copying " + source + " to " + destination);
                grunt.file.copy(source, destination + "/" + source.substring(source.indexOf(index)));
            }
        };

        srcFiles.forEach(function (file) {
            recursiveCopy(file, destFile);
        });
    });
    /**
     * This alias will be the preeminent build automation as this grows
     */
    grunt.registerTask("smash", "Concat and uglify js files and libs", ["clean", "folders", "concat", "uglify"]);
};