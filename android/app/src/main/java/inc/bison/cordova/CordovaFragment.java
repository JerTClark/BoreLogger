package inc.bison.cordova;

import android.app.Fragment;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebViewClient;
import android.widget.Toast;

import org.apache.cordova.Config;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaWebViewClient;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import inc.bison.borelogger.R;
import inc.bison.my.MyToast;

public class CordovaFragment extends Fragment implements CordovaInterface {

    private CordovaWebView cordovaWebView;
    protected CordovaPlugin activityResultCallback = null;
    protected boolean activityResultKeepRunning;
    protected boolean keepRunning = true;
    private ExecutorService threadPool = Executors.newCachedThreadPool();

    //Return this instance
    public CordovaFragment getInstance() {
        return this;
    }//end getInstance()

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_cordova, container, false);
        cordovaWebView = (CordovaWebView) rootView.findViewById(R.id.orgApacheCordovaWebView);
        Config.init(getActivity());
        cordovaWebView.loadUrl(Config.getStartUrl());
        return rootView;
    }//end onCreateView()

    public Object onMessage(String id, Object data) {
        return null;
    }//end onMessage()

    public void onDestroy() {
        super.onDestroy();
        if (cordovaWebView.pluginManager != null) {
            cordovaWebView.pluginManager.onDestroy();
        }//end if
    }//end onDestroy()

    @Override
    public ExecutorService getThreadPool() {
        return threadPool;
    }//end getThreadPool()

    @Override
    public void setActivityResultCallback(CordovaPlugin plugin) {
        this.activityResultCallback = plugin;
    }//end setActivityResult()

    public void startActivityForResult(CordovaPlugin command, Intent intent, int requestCode) {
        this.activityResultCallback = command;
        this.activityResultKeepRunning = this.keepRunning;

        // If multitasking turned on, then disable it for activities that return results
        if (command != null) {
            this.keepRunning = false;
        }//end if

        // Start activity
        super.startActivityForResult(intent, requestCode);
    }//end startActivityForResult()

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        super.onActivityResult(requestCode, resultCode, intent);
        CordovaPlugin callback = this.activityResultCallback;
        if (callback != null) {
            callback.onActivityResult(requestCode, resultCode, intent);
        }//end if
    }//end onActivityResult()

}//end CordovaFragment