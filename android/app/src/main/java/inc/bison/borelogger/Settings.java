package inc.bison.borelogger;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.preference.EditTextPreference;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.preference.SwitchPreference;

import inc.bison.borelogger.R;
import inc.bison.my.MyGlobals;
import inc.bison.my.MyToast;

/**
 * Created by Clark on 10/25/2014.
 */
public class Settings extends PreferenceActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        addPreferencesFromResource(R.xml.settings);
        final SwitchPreference showToasts = (SwitchPreference) findPreference(getString(R.string.debug_toasts_key));
        final SwitchPreference useLocateOffset = (SwitchPreference) findPreference(getString(R.string.use_init_depth_key));
        final EditTextPreference initLocateNumberEditTextPreference = (EditTextPreference) findPreference("init_locate");

        //Locate offset
        initLocateNumberEditTextPreference.setOnPreferenceChangeListener(new Preference.OnPreferenceChangeListener() {
            @Override
            public boolean onPreferenceChange(Preference preference, Object newValue) {
                SharedPreferences.Editor editor = PreferenceManager.getDefaultSharedPreferences(getApplicationContext()).edit();
                if(newValue != null && !newValue.toString().equals("")) {
                    int num = Integer.valueOf(newValue.toString());
                    if (num == 0) {
                        //Toggle false
                        editor.putBoolean(getString(R.string.use_init_depth_key), false);
                    } else {
                        //Toggle true
                        editor.putBoolean(getString(R.string.use_init_depth_key), true);
                    }
                    editor.apply();
                    MyGlobals.initialLocateNumber = num;
                } else {
                    editor.putBoolean(getString(R.string.use_init_depth_key), false);
                }
                boolean bool = MyGlobals.startWithCustomLocateNumber = PreferenceManager.getDefaultSharedPreferences(getApplicationContext()).getBoolean(getString(R.string.use_init_depth_key), false);
                useLocateOffset.setChecked(bool);
                if(MyGlobals.showDebugToasts) new MyToast(getApplicationContext(), "Offset locates = " + MyGlobals.startWithCustomLocateNumber, "ShPref val = " + bool, 0);
                return true;
            }
        });

        //Offset toggle
        useLocateOffset.setOnPreferenceChangeListener(new Preference.OnPreferenceChangeListener() {
            @Override
            public boolean onPreferenceChange(Preference preference, Object newValue) {
                boolean val = (Boolean) newValue;
                int number = Integer.valueOf(PreferenceManager.getDefaultSharedPreferences(getApplicationContext()).getString(getString(R.string.init_locate_key), "0"));
                String message, title = "";
                if(val) {
                    title = "Warning!";
                    message = "Locates will be incremented beginning at Depth " + number + " as you\'ve specified above";
                } else {
                    title = "Everything\'s normal";
                    message = "Locates will increment beginning at Depth 1";
                }
                MyGlobals.startWithCustomLocateNumber = val;
                new MyToast(getApplicationContext(), title, message, 0);
                return true;
            }
        });

        //Debug toasts
        showToasts.setOnPreferenceClickListener(new Preference.OnPreferenceClickListener() {
            @Override
            public boolean onPreferenceClick(Preference preference) {
                if(MyGlobals.showDebugToasts) new MyToast(getApplicationContext(), "Test from OnPrefClick", preference.toString(), 0);
                return true;
            }
        });
        showToasts.setOnPreferenceChangeListener(new Preference.OnPreferenceChangeListener() {
            @Override
            public boolean onPreferenceChange(Preference preference, Object newValue) {
                MyGlobals.showDebugToasts = (Boolean) newValue;
                new MyToast(getApplicationContext(), "Test from OnPrefChange", String.valueOf(MyGlobals.showDebugToasts), 0);
                return true;
            }
        });
    }//end onCreate()

}//end Settings