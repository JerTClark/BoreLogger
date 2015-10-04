package inc.bison.cordova;

import android.app.Activity;
import android.content.Context;
import android.content.ContextWrapper;
import android.content.Intent;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;

import java.util.concurrent.ExecutorService;

public class CordovaContext extends ContextWrapper {

    CordovaInterface cordovaInterface;

    public CordovaContext(Context base, CordovaInterface cordovaInterface) {
        super(base);
        this.cordovaInterface = cordovaInterface;
    }//end constructor

    //CordovaInterface methods
    public void startActivityForResult(CordovaPlugin command, Intent intent, int requestCode) {
        cordovaInterface.startActivityForResult(command, intent, requestCode);
    }
    public void setActivityResultCallback(CordovaPlugin plugin) {
        cordovaInterface.setActivityResultCallback(plugin);
    }
    public Activity getActivity() {
        return cordovaInterface.getActivity();
    }
    public Object onMessage(String id, Object data) {
        return cordovaInterface.onMessage(id, data);
    }
    public ExecutorService getThreadPool() {
        return cordovaInterface.getThreadPool();
    }//end getThreadPool()

}
