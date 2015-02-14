module.exports = function (grunt) {

    /* Global config */
    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),

        /*Properties here are used for creating and deleting required folders*/
        makeFolders: {
            options: {
                buildFolder: "/* path to the production build folder */",
                tempFolder: "/* a temporary folder for holding pre-minified files-- will be deleted*/"
            }
        }
    });

    /* Load npm tasks */
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    /* watch config */
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
                livereload: true
            }
        }
    });

    /* concat config */
    grunt.config("concat", {
        concatJS: {
            src: [/* javascript file to concatenate */],
            dest: ""/* put them all in this file */,
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
        this.requiresConfig(this.name + ".options.buildFolder");
        this.requiresConfig(this.name + ".options.tempFolder");
        this.requires(/* any other tasks that must be complete prior to this task */);
        var buildFolder = this.options().buildFolder,
            tempFolder = this.options().tempFolder;
        grunt.file.mkdir(buildFolder);
        grunt.file.mkdir(tempFolder);
    });
     /* TODO create a task to delete the temp folder once the watch task completes and 
	 * another task to delete the build directory prior to a rebuild, possibly making
	 * backup of the old one 
	 */
    grunt.registerTask("test", function(){
        console.log("Testing complete");
    });
};