#Getting cordova.x.jar
A sad story:

>I had followed a few [SO] threads to no avail. I wrote my own build.xml, blindly hoping... nope.

However, it seems I found some decent direction from the [cordova docs]. This particular page deals
in Android WebViews. My current dilemma is how to create **my own Activity subclass of CordovaActivity**
as is done in the whole build process of an Ionic/Cordova app.

I want to do this in Java-- the whole WebView is great, and I can load an **index.html** fine (even
Angular and Ionic are working!)-- but the navigation is dead. And besides all that, I want more granular
control.

##Step 1:

From [Apache]'s archives, I download the [cordova-android-3.5.0.zip] per the instructions. I haven't
verified that this process won't work with even the latest version, but by the time I figured these
basic steps out, I'm ready to save that for another day.

##Step 2:

Extract the ZIP file to anywhere. At this point, the directions from the [cordova docs] seem straight-
forward, but for whatever reason, I had to draw on [SO] for the lacking commands required to successfully
build the jar. Here are the directions from Cordova:

>1. To follow these instructions, make sure you have the latest Cordova distribution. Download it from
cordova.apache.org and unzip its Android package.
2. Navigate to the Android package's /framework directory and run ant jar. It creates the Cordova .jar
file, formed as /framework/cordova-3.5.0.jar.
3. Copy the .jar file into the Android project's /libs directory.

Sounds great. Problem is that first I had to set the right **Android Target**. To find the *latest* version
of the Android SDK I was capable of adding, I ran

    $ android list targets

I tried following the [SO] command, but what worked for me was using the ID of the **latest** SDK version.
See the output of the above command:

    ----------
    id: 10 or "Google Inc.:Google APIs:22" <----- (SEE THE "id:"?)
         Name: Google APIs
         Type: Add-On
         Vendor: Google Inc.
         Revision: 1
         Description: Android + Google APIs
         Based on Android 5.1 (API level 22)
         Libraries:
          * com.android.future.usb.accessory (usb.jar)
              API for USB Accessories
          * com.google.android.media.effects (effects.jar)
              Collection of video effects
          * com.google.android.maps (maps.jar)
              API for Google Maps
         Skins: HVGA, QVGA, WQVGA400, WQVGA432, WSVGA, WVGA800 (default), WVGA854, WXGA720, WXGA800, WXGA800-7in
     Tag/ABIs : no ABIs.
     
The next command sets the target version of Android for which Cordova will be compiled:

    $ android update project -p . -t 10
    
**NOTE** that the "10" at the end corresponds to the latest version. Now I can finally run:

    $ ant jar

Looking at the build.xml file, you can see this does the following:

    <target name="jar" depends="-compile">
            <jar
                basedir="bin/classes"
                excludes="org/apache/cordova/R.class,org/apache/cordova/R$*.class"
                jarfile="cordova-${version}.jar" />
    </target>

And as hoped, I now see **BUILD SUCCESSFUL** in my prompt and a **cordova-3.5.0.jar** file as promised
by the [cordova docs].

##Step 3:

Now just copy the jar file. In the root of the project (I did this via Android Studio's **Project** view
hierarchy), create a folder called "lib" and then paste the cordova-3.5.0.jar into that folder.

Right-click cordova-3.5.0.jar and choose to add it as a Library for the **app** module. Verify that you


#Where to put the files

Per an article on Embedding CordovaWebView in [Android WebView]:

>Now that the a Fragment in your Android project has been configured to accept a Cordova web view the
 final step is to copy content.
 Be sure to build your Phonegap project for the android platform first before copying.
 Copy the application's HTML and JavaScript files to the Android project's /assets/www directory.
 This should also include any plugins that were added during the Phonegap build process.
  
    /platforms/android/assets/www -> /assets/www

I am really unclear as to how to go about the Cordova build. WTF do I run the command? I assume it has
to be from the location of the **config.xml** file... Idk. Seems like what I've already done in the Ionic
project. Anyhow, according to the above quote, I need to also include any plugins.

>Copy native source/JARs for any plugins your Phonegap project uses.
 
    /platforms/android/libs -> /libs
    /platforms/android/src -> /src/main/java

>(do not include the default activity added by the Phonegap build)

**NOTE** I skipped the copying of the src/ -> /src/main/java due to errors indicating duplicate classes
in assets/www, but this was a **mistake**. Be sure to copy **everything** listed in the step before this
from **/platforms/android/assets/www -> /assets/www**-- these plugins are **JavaScript** files! The plugins
in the step **/platforms/android/src -> /src/main/java** are **Java** files.
(whew! being dumb is *hard work!*)


#Getting the CordovaWebView to work

I'm trying to get the CordovaWebView to work in a fragment without much success. Never even got it working
in an Activity, but due to some [Android WebView] documentation found on using the widget in a fragment,
I'm going to try.

##Solution

Found at [Patrick Boos' SO answer] where he deftly takes all the noise sounded off at the [Android WebView]
article and applies that logic to the parent Activity of the fragment. I tried to do it this way before, and
need to note what he did differently... Before that, here's what the Fragment's onCreateView looks like:

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        rootView = inflater.inflate(R.layout.fragment_cordova, container, false);
        cordovaWebView = (CordovaWebView) rootView.findViewById(R.id.orgApacheCordovaWebView);
        Config.init(getActivity());
        cordovaWebView.loadUrl(Config.getStartUrl());
        return rootView;
    }//end onCreateView()



[Apache]:http://archive.apache.org/dist/cordova/platforms/
[cordova-android-3.5.0.zip]:http://archive.apache.org/dist/cordova/platforms/cordova-android-3.5.0.zip
[SO]:http://stackoverflow.com/questions/24387842/cordova-jar-is-missing-in-phonegap-3-5-0
[cordova docs]:http://cordova.apache.org/docs/en/3.5.0/guide_platforms_android_webview.md.html
[Android WebView]:https://github.com/Adobe-Marketing-Cloud-Apps/app-sample-android-phonegap/wiki/Embed-Webview-in-Android-Fragment
[Patrick Boos' SO answer]:http://stackoverflow.com/questions/13070205/android-phonegap-and-fragments