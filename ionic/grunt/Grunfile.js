module.exports = function (grunt) {

    var ref = require('../ref.json'),
        spawn = require("child_process");

    function install() {
        var command = this.command + " " + arguments[0],
            callback = this.callback;
        console.log(command);
        spawn.exec(command, function (err, stdout, stderr) {
            if (err) {
                console.log(err);
            } else {
                console.log(stdout);
                callback();
            }
        });
    }

    grunt.config.init({
        npm: {
            options: {
                dependencies: ref["nodeDependencies"],
                devDependencies: ref["nodeDevDependencies"]
            }
        },
        bower: {
            options: {
                dependencies: ref["bowerDependencies"],
                devDependencies: ref["bowerDevDependencies"]
            }
        },
        cordova: {
            options: {
                plugins: ref["cordovaPlugins"]
            }
        }
    });

    grunt.registerTask("npm", "Runs npm install --save && --save-dev", function () {
        this.requiresConfig(this.name + ".options.dependencies");
        this.requiresConfig(this.name + ".options.devDependencies");
        var dependencies = this.options().dependencies,
            devDependencies = this.options().devDependencies,
            depString = "", devDepString = "",
            asyncCallback = this.async();
        dependencies.forEach(function (item) {
            depString += item + " ";
        });
        devDependencies.forEach(function (item) {
            devDepString += item + " ";
        });
        var secondCallToInstall = function () {
            install.call({"command":"npm install --save","callback":asyncCallback}, depString);
        };
        install.call({"command":"npm install --save-dev","callback":secondCallToInstall}, devDepString);
    });

    grunt.registerTask("bower", "Runs bower install --save && --save-dev", function () {
        this.requiresConfig(this.name + ".options.dependencies");
        this.requiresConfig(this.name + ".options.devDependencies");
        var dependencies = this.options().dependencies,
            devDependencies = this.options().devDependencies,
            asyncCallback = this.async();
        dependencies.forEach(install, {"command":"bower install --save","callback":asyncCallback});
        devDependencies.forEach(install, {"command":"bower install --save-dev","callback":asyncCallback});
    });

    grunt.registerTask("cordova", "Runs cordova app install", function () {
        this.requiresConfig(this.name + ".options.plugins");
        var plugins = this.options().plugins,
            pluginsList = "",
            asyncCallback = this.async();
        plugins.forEach(function (item) {
            pluginsList += item + " ";
        });
        install.call({"command":"cordova plugin add","callback":asyncCallback}, pluginsList);
    });

    grunt.registerTask("default", ["npm", "bower", "cordova"]);

};