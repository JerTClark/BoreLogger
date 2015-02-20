// An example configuration file
// Remember to start the selenium server

exports.config = {

    seleniumServerJar: 'C:/Users/jerem_000/AppData/Roaming/npm/node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
    chromeDriver:'C:/Users/jerem_000/AppData/Roaming/npm/node_modules/protractor/selenium/chromedriver.exe',

    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to this configuration file
    specs: [
        'tests/e2e/*.js',
        'tests/e2e/**/*.js'
    ],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};

//Installing and Starting the Server

//To install and start the standalone Selenium Server manually, use the webdriver-manager command line tool, which comes with Protractor.
//Run the update command: webdriver-manager update This will install the server and ChromeDriver.
//Run the start command: webdriver-manager start This will start the server. You will see a lot of output logs, starting with INFO. The last line will be 'Info - Started org.openqa.jetty.jetty.Server'.
//Leave the server running while you conduct your test sessions.
//In your config file, set seleniumAddress to the address of the running server. This defaults to http://localhost:4444/wd/hub.

//Starting the Server from a Test Script
//To start the standalone Selenium Server from within your test script, set these options in your config file:
//seleniumServerJar - The location of the jar file for the standalone Selenium Server. Specify a file location.
//seleniumPort - The port to use to start the standalone Selenium Server. If not specified, defaults to 4444.
//seleniumArgs - Array of command line options to pass to the server. For a full list, start the server with the -help flag.

//Connecting to a Running Server
//To connect to a running instance of a standalone Selenium Server, set this option:
//seleniumAddress - Connect to a running instance of a standalone Selenium Server. The address will be a URL.
//Please note that if you set seleniumAddress, the settings for seleniumServerJar, seleniumPort and seleniumArgs will be ignored (it will also override the sauce options listed below).