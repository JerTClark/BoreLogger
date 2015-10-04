package inc.bison.cordova;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import org.apache.cordova.Config;
import org.apache.cordova.CordovaActivity;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.*;

import java.util.concurrent.ExecutorService;

import inc.bison.borelogger.R;


public class BisonCordovaActivity extends CordovaActivity implements CordovaInterface {

    private CordovaWebView cordovaWebView;
    private CordovaPlugin activityResultCallback = null;
    private boolean activityResultKeepRunning = false, keepRunning = false;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cordova);
        cordovaWebView = (CordovaWebView) findViewById(R.id.cordovaActivityWebView);
        Config.init(this);
        cordovaWebView.loadUrl("file:///android_asset/www/index.html");
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_cordova, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public Activity getActivity() {
        return this;
    }

    @Override
    public void startActivityForResult(CordovaPlugin cordovaPlugin, Intent intent, int requestCode) {
        this.activityResultCallback = cordovaPlugin;
        this.activityResultKeepRunning = this.keepRunning;

        // If multitasking turned on, then disable it for activities that return results
        if (cordovaPlugin != null) {
            this.keepRunning = false;
        }//end if

        // Start activity
        super.startActivityForResult(intent, requestCode);
    }//end startActivityForResult()

    @Override
    public void setActivityResultCallback(CordovaPlugin cordovaPlugin) {
        this.activityResultCallback = cordovaPlugin;
    }//end setActivityResultCallback()

    @Override
    public Object onMessage(String s, Object o) {
        return null;
    }//end onMessage()

    @Override
    public ExecutorService getThreadPool() {
        return null;
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        super.onActivityResult(requestCode, resultCode, intent);
        CordovaPlugin callback = this.activityResultCallback;
        if (callback != null) {
            callback.onActivityResult(requestCode, resultCode, intent);
        }//end if
    }//end onActivityResult()

}
