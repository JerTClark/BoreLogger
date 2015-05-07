module.exports = function (grunt) {

    /* Global config */
    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),

        /*Properties here are used for creating and deleting required folders*/
        makeFolders: {
            options: {
                miniJSFolder: "www/js/min"
            }
        }
    });

    /* Load npm tasks */
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    /**
     * NOTE: > ionic serve while developing reloads on changes
     */
    grunt.config("watch", {
        watchJS: {
            files: [/* javascript file to watch */],
            tasks: [/* tasks to do when they change*/],
            options: {
                spawn: false
            }
        },
        watchHTML: {
            files: [/* html files to watch */],
            tasks: [/* tasks to do when they change */],
            options: {
                livereload: false
            }
        }
    });

    /* concat config */
    grunt.config("concat", {
        concatJS: {
            src: [/* javascript file to concatenate */],
            dest: "www/js/min/bison.js",
            options: {
                separator: ";"
            }
        }
    });

    /* uglify config */
    grunt.config("uglify", {
        options: {/**/},
        uglifyTask1: {
            files: {
                "": ""
                /*the destination file : the source file (to uglify)*/
            }
        }
    });

    grunt.registerTask("makeFolders", "Create the build and temp folders", function () {
        this.requiresConfig(this.name + ".options.miniJSFolder");
        this.requires(/* any other tasks that must be complete prior to this task */);
        var buildFolder = this.options().miniJSFolder;
        grunt.file.mkdir(buildFolder);
    });
     /* TODO create a task to delete the temp folder once the watch task completes and 
	 * another task to delete the build directory prior to a rebuild, possibly making
	 * backup of the old one 
	 */
    grunt.registerTask("test", function(){
        console.log("Testing complete");
    });
};