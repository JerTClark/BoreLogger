#Android Single- Class- and All- Testing with ADB

The correct syntax for running all tests with adb is:

    adb shell am instrument -w COM.PACKAGE.NAME.TO.TEST/ANDROID.TEST.RUNNER.FROM.GRADLE
    
The *COM.PACKAGE.NAME* refers to **applicationId** from your **build.gradle**'s **defaultConfig**
closure (or in a particular productFlavor closure). *.TO* refers to the **applicationIdSuffix** you
specify in your **debug** (equivalent) buildType. *.TEST* as far as I can tell is appended
automatically and may derive from the *AndroidManifest.xml* that's automatically created for your
androidTest apk(?).

The *ANDROID.TEST.RUNNER.FROM.GRADLE* is specified in your **build.gradle**'s **defaultConfig**
closure (or in a particular productFlavor closure?) via the *testInstrumentationRunner* field. Mine
(from following instructions Android's **[Test Support Library Setup]** guide is as follows:

    testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
    
#Android's docs on Test Support Library class

Refer to the **[Test Support Library Setup]** guide! It includes essential configuration instructions
that make everything in the scope of these notes possible. The **Espresso** library alone is worth days
of saved head-on-wall-pounding as it solves a ton of UI interaction issues (and testMethods that contain
these interactions **do not** require the @UIThread annotation). Just for an example:

    Espresso.onView(ViewMatchers.withId(R.id.generalInfo_doneButton))
        .perform(ViewActions.closeSoftKeyboard(), ViewActions.click());

You can shorten the code using static imports, but I'm writing it out for the sake of hopefully learning
something.

#Troubleshooting Your Setup with ADB

Solving the issue of how to run my tests through adb was possible through discovering this command
that lists which instrumentation packages have been installed *on the device* [SO-source]:

    adb shell pm list instrumentation

This listed two options and its how I made the connection to Android developers guide on
the [InstrumentationTestRunner] class. My output was:

    instrumentation:inc.bison.borelogger.test/android.test.InstrumentationTestRunner (target=inc.bison.borelogger)         
    instrumentation:inc.bison.borelogger.debug.test/android.support.test.runner.AndroidJUnitRunner (target=inc.bison.borelo
    gger.debug)

The [InstrumentationTestRunner] doc is another worthy read. It lists the various syntax for running
different test scenarios via adb.

#Running the ADB commands

I'm able to run test from a single (example) class by:

    adb shell am instrument -w -e class inc.bison.borelogger.BoreLoggerHomeScreenFragmentTest
    inc.bison.borelogger.debug.test/android.support.test.runner.AndroidJUnitRunner

I can run all tests with:

    adb shell am instrument -w inc.bison.borelogger.debug.test/android.support.test.runner.AndroidJUnitRunner

And (**my ultimate goal in all of this**) running a single (example) test with:

    adb shell am instrument -w -e class
    inc.bison.borelogger.BoreLoggerHomeScreenFragmentTest#testBoreLoggerHomeScreenFragmentTest_Preconditions
    inc.bison.borelogger.debug.test/android.support.test.runner.AndroidJUnitRunner


**NOTE: ALL COMMAND EXAMPLES ARE SINGLE COMMANDS**
(lines were only broken per space requirements)

[Test Support Library Setup]:http://developer.android.com/tools/testing-support-library/index.html#setup
[SO-source]:http://stackoverflow.com/questions/21294945/error-unable-to-find-instrumentation-info-for-componentinfo
[InstrumentationTestRunner]:http://developer.android.com/reference/android/test/InstrumentationTestRunner.html