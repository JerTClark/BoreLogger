package inc.bison.borelogger;

import android.app.ActionBar;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.Fragment;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.content.BroadcastReceiver;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.v4.widget.DrawerLayout;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;

import java.io.File;
import java.util.ArrayList;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import inc.bison.cordova.BaroidCordovaFragment;
import inc.bison.cordova.CordovaFragment;
import inc.bison.dialogs.ContinueBoreJournalDialog;
import inc.bison.dialogs.ContinueBoreLogDialog;
import inc.bison.documents.BoreJournal;
import inc.bison.documents.BoreLog;
import inc.bison.fragments.NavigationDrawerFragment;
import inc.bison.interfaces.ContinueBoreJournalInterface;
import inc.bison.interfaces.ContinueBoreLogInterface;
import inc.bison.interfaces.ConvertBoreJournalInterface;
import inc.bison.interfaces.FragmentInteractionListener;
import inc.bison.my.MyGlobals;
import inc.bison.my.MyIntents;
import inc.bison.my.MyPhrases;
import inc.bison.my.MyToast;

public class BoreLogger extends Activity
        implements NavigationDrawerFragment.NavigationDrawerCallbacks, FragmentInteractionListener,
        HomeScreen.OnFragmentInteractionListener, BoreLogGeneralInfo.BoreLogGeneralInfoFragmentListener,
        LocatesFragment.OnLocateListener, ContinueBoreLogInterface, ContinueBoreJournalInterface,
        BoreJournalGeneralInfo.BoreJournalGeneralInfoFragmentListener,
        BoreJournalToBoreLogFragment.BoreJournalToBoreLogAdditionalInfoFragmentListener,
        ConvertBoreJournalInterface, CordovaInterface {

    // Fragment managing the behaviors, interactions and presentation of the navigation drawer.
    private NavigationDrawerFragment mNavigationDrawerFragment;

    //CordovaFragment
    private final ExecutorService threadPool = Executors.newCachedThreadPool();
    private CordovaFragment cordovaFragment = new CordovaFragment();
    private CordovaPlugin activityResultCallback;

    // Used to store the last screen title. For use in {@link #restoreActionBar()}.
    private CharSequence mTitle;
    private ActionBar actionBar = null;

    //-- OnCreate()
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_bore_logger);

        actionBar = getActionBar();
        if(actionBar != null) actionBar.setSubtitle(new MyPhrases(this).getPhrase());

        mNavigationDrawerFragment = (NavigationDrawerFragment)
                getFragmentManager().findFragmentById(R.id.navigation_drawer);
        mTitle = getTitle();
        // Set up the drawer.
        mNavigationDrawerFragment.setUp(
                R.id.navigation_drawer,
                (DrawerLayout) findViewById(R.id.drawer_layout));
        MyGlobals.showDebugToasts = PreferenceManager.getDefaultSharedPreferences(this).getBoolean(getString(R.string.debug_toasts_key), false);
        checkForFolders();

    }//end onCreate()

    private void checkForFolders() {
        ArrayList<String> foldersMade = new ArrayList<String>();
        ArrayList<String> foldersExist = new ArrayList<String>();
        ArrayList<String> cannotMake = new ArrayList<String>();

        for(String folderToMake : MyGlobals.APP_FOLDERS) {
            File folder = new File(folderToMake);
            if(folder.exists()) foldersExist.add(folder.getName());
            else if(folder.mkdir()) foldersMade.add(folder.getName());
            else cannotMake.add(folder.getName());
        }

        if(MyGlobals.showDebugToasts) {
            if (!foldersExist.isEmpty())
                new MyToast(this, "Folders that already exist", foldersExist.toString(), 0);
            if (!foldersMade.isEmpty())
                new MyToast(this, "Folders that were made", foldersMade.toString(), 0);
            if (!cannotMake.isEmpty())
                new MyToast(this, "Folders that couldn\'t be made", cannotMake.toString(), 0);
        }//end if

    }//end checkForFolders

    //-- OnNavigationDrawerItemSelected()
    @Override
    public void onNavigationDrawerItemSelected(int position) {
        // update the main content by replacing fragments
        FragmentManager fragmentManager = getFragmentManager();
        FragmentTransaction ft = fragmentManager.beginTransaction();

        //-- Home Screen Fragment
        if(position == 0) {
            ft.replace(R.id.container, new HomeScreen())
                    .commit();
            onSectionAttached(0);
        }//end if
        //-- New Bore Log Fragment
        if(position == 1) {
            ft.replace(R.id.container, new BoreLogGeneralInfo())
                    .commit();
            onSectionAttached(1);
        }//end if
        if(position == 2) {
            ft.replace(R.id.container, new BoreJournalGeneralInfo())
                    .commit();
            onSectionAttached(2);
        }//end if
    }//end OnNavigationDrawerItemSelected()

    //-- OnSectionAttached()
    public void onSectionAttached(int number) {
        switch (number) {
            case 0:
                mTitle = getResources().getString(R.string.home);
                break;
            case 1:
                mTitle = getString(R.string.title_section1);
                break;
            case 2:
                mTitle = getString(R.string.title_section2);
                break;
        }//end switch()
    }//end OnSectionAttached()

    //------------------------------------------------------------------ Menu
    //-- RestoreActionBar()
    public void restoreActionBar() {
        if(actionBar != null) {
            actionBar.setNavigationMode(ActionBar.NAVIGATION_MODE_STANDARD);
            actionBar.setDisplayShowTitleEnabled(true);
            actionBar.setTitle(mTitle);
        }//end if
    }//end RestoreActionBar()

    //-- OnCreateOptionsMenu()
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        if (!mNavigationDrawerFragment.isDrawerOpen()) {
            // Only show items in the action bar relevant to this screen
            // if the drawer is not showing. Otherwise, let the drawer
            // decide what to show in the action bar.
            getMenuInflater().inflate(R.menu.bore_logger, menu);
            restoreActionBar();
            return true;
        }//end if
        return super.onCreateOptionsMenu(menu);
    }//end OnCreateOptionsMenu()

    //-- OnOptionsItemSelected()
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();
        if (id == R.id.action_settings) {
            new MyIntents(this, Settings.class).launchActivity();
            return true;
        }//end if
        if(id == R.id.open) {
            openDialog(MyGlobals.OPEN);
            return true;
        }//end if
        if(id == R.id.share) {
            openDialog(MyGlobals.SHARE);
            return true;
        }//end if
        if(id == R.id.calculators) {
            //TODO Implement calculators
            getFragmentManager().beginTransaction().replace(R.id.container, new BaroidCordovaFragment()).commit();
            return true;
        }//end if
        if(id == R.id.lab_item) {
            attachCordovaFragment();
            return true;
        }//end if
        return super.onOptionsItemSelected(item);
    }//end OnOptionsItemSelected()

    private void openDialog(final int action) {
        String[] choices = new String[] {"Bore Log", "Bore Journal", "Bore Log PDFs"};
        AlertDialog.Builder builder = new AlertDialog.Builder(this, AlertDialog.THEME_HOLO_LIGHT);
        if(action == MyGlobals.OPEN) builder.setTitle("Which do you want to open?");
        else builder.setTitle("Which do you want to share?");
        builder.setItems(choices, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                switch(which) {
                    case 0:
                        openLogDialog(action);
                        break;
                    case 1:
                        openJournalDialog(action);
                        break;
                    case 2:
                        if(action == MyGlobals.SHARE) openPDFDialog(MyGlobals.SHARE_PDF);
                        else openPDFDialog(action);
                        break;
                }//end switch
            }//end onClick()
        });//end DialogInterface.OnClickListener() anonymous inner class
        builder.setCancelable(true);
        builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {

            }//end onClick()
        });//end DialogInterface.OnClickListener() anonymous inner class
        builder.show();
    }//end openDialog()

    private void openJournalDialog(int action) {
        if(action == MyGlobals.SHARE)
            new ContinueBoreJournalDialog(this, action).show();
        else new ContinueBoreJournalDialog(this, this, MyGlobals.OPEN).show();
    }//end openJournalDialog()

    private void openLogDialog(int action) {
        if(action == MyGlobals.SHARE)
            new ContinueBoreLogDialog(this, action).show();
        else new ContinueBoreLogDialog(this, this, MyGlobals.OPEN).show();
    }//end openLogDialog()

    private void openPDFDialog(int action) {
        if(action == MyGlobals.SHARE_PDF)
            new ContinueBoreLogDialog(this, action).show();
        else new ContinueBoreLogDialog(this, this, MyGlobals.OPEN_PDF).show();
    }//end openPDFDialog()

    // A placeholder fragment containing a simple view.
    public static class PlaceholderFragment extends Fragment {
        // The fragment argument representing the section number for this fragment.
        private static final String ARG_SECTION_NUMBER = "section_number";

        // Returns a new instance of this fragment for the given section number.
        public static PlaceholderFragment newInstance(int sectionNumber) {
            PlaceholderFragment fragment = new PlaceholderFragment();
            Bundle args = new Bundle();
            args.putInt(ARG_SECTION_NUMBER, sectionNumber);
            fragment.setArguments(args);
            return fragment;
        }//end PlaceholderFragment newInstance()

        public PlaceholderFragment() {
        }//end empty constructor

        //-- OnCreateView()
        @Override
        public View onCreateView(LayoutInflater inflater, ViewGroup container,
                                 Bundle savedInstanceState) {
            View rootView = inflater.inflate(R.layout.fragment_bore_logger, container, false);
            return rootView;
        }//end OnCreateView()

        //-- OnAttach()
        @Override
        public void onAttach(Activity activity) {
            super.onAttach(activity);
            ((BoreLogger) activity).onSectionAttached(
                    getArguments().getInt(ARG_SECTION_NUMBER));
        }//end OnAttach()

    }//end PlaceholderFragment

    //-------------------------------------------------------------------Interfaces

    @Override
    public void onFragmentInteraction() {

    }//end portalButtonPressed()

    //--
    @Override
    public void onBoreJournalSelectedToConvert(BoreJournal boreJournal) {
        if(MyGlobals.showDebugToasts)
            new MyToast(this, "Bore Journal object continued", boreJournal.toString(), 0);
        FragmentManager fragmentManager = getFragmentManager();
        FragmentTransaction ft = fragmentManager.beginTransaction();
        //-- Pass the LocatesFragment a path to the working text file of this Bore Journal
        Bundle bundle = new Bundle();
        //-- Break the Bore Journal down for reconstruction
        bundle.putString(MyGlobals.CUSTOMER, boreJournal.getCustomer());
        bundle.putString(MyGlobals.LOCATION, boreJournal.getLocation());
        bundle.putStringArrayList(MyGlobals.LOCATES, boreJournal.getLocates());//-- Will be populated by text file

        BoreJournalToBoreLogFragment boreJournalToBoreLogFragment = new BoreJournalToBoreLogFragment();
        boreJournalToBoreLogFragment.setArguments(bundle);
        ft.replace(R.id.container, boreJournalToBoreLogFragment)
                .commit();
    }//end onBoreJournalSelectedToConvert()

    @Override
    public void onBoreLogConverted(BoreLog aBoreLog) {
        if (MyGlobals.showDebugToasts) {
            new MyToast(this, "Bore Log object converted from Journal", aBoreLog.toString(), 0);
            new MyToast(this, "BoreLog converted locates", aBoreLog.getLocates().toString().replace("[", "").replace("]", ""), 0);
        }//end if
        aBoreLog.init();
        aBoreLog.getMyBoreLogTextPrinter().overwriteTextFile();
        aBoreLog.getMyBoreLogTextPrinter().checkForEndBore();

        //-- See if this Bore Log has an existing file that's usable
        if (new File(aBoreLog.getTextFilePath()).exists()) {
            new MyToast(this, "Success", aBoreLog.getTextFilePath() + " created successfully from a bore journal", 0);
            getFragmentManager().beginTransaction().replace(R.id.container, new HomeScreen()).commit();        }
        //-- If not, try to create one based on this Bore Log object's values
        else {
            aBoreLog.getMyBoreLogTextPrinter().overwriteTextFile();
            aBoreLog.getMyBoreLogTextPrinter().checkForEndBore();
            //-- If all this fails, show a warning
            if (new File(aBoreLog.getTextFilePath()).exists()) {
                new MyToast(this, "New file made", aBoreLog.getTextFilePath() + " was created from a bore journal", 0);
                getFragmentManager().beginTransaction().replace(R.id.container, new HomeScreen()).commit();
            } else
                new MyToast(this, "ERROR: file not found", aBoreLog.getTextFilePath() + " wasn't created for some reason", 0);
        }//end if-else
    }//end onBoreLogConverted()

    @Override
    public void boreLogSelected(BoreLog boreLog) {
        if (MyGlobals.showDebugToasts){
            new MyToast(this, "Bore log object created", boreLog.toString(), 0);
            new MyToast(this, "Locates so far", boreLog.getLocates().toString().replace("[", "").replace("]", ""), 0);
        }//end if
        FragmentManager fragmentManager = getFragmentManager();
        FragmentTransaction ft = fragmentManager.beginTransaction();
        //-- Pass the LocatesFragment a path to the working text file of this Bore Log
        Bundle bundle = new Bundle();
        boreLog.init();//-- Only init the path, as this file already exists
        bundle.putString(MyGlobals.TYPE, MyGlobals.BORE_LOG);
        //-- Break the BoreLog down for reconstruction
        bundle.putString(MyGlobals.CUSTOMER, boreLog.getCustomer());
        bundle.putString(MyGlobals.CONDUIT, boreLog.getConduit());
        bundle.putString(MyGlobals.LOCATION, boreLog.getLocation());
        bundle.putString(MyGlobals.DATE, boreLog.getDate());
        bundle.putString(MyGlobals.LENGTH, boreLog.getLengthOfBore());
        bundle.putStringArrayList(MyGlobals.LOCATES, boreLog.getLocates());
        bundle.putString(MyGlobals.PATH_TO_FILE, boreLog.getTextFilePath());
        LocatesFragment locatesFragment = new LocatesFragment();
        locatesFragment.setArguments(bundle);
        ft.replace(R.id.container, locatesFragment)
                .commit();
    }//end boreLogSelected()

    @Override
    public void continueBoreJournal(BoreJournal boreJournal) {
        if(MyGlobals.showDebugToasts)
            new MyToast(this, "Bore Journal object continued", boreJournal.toString(), 0);
        FragmentManager fragmentManager = getFragmentManager();
        FragmentTransaction ft = fragmentManager.beginTransaction();
        //-- Pass the LocatesFragment a path to the working text file of this Bore Journal
        Bundle bundle = new Bundle();
        bundle.putString(MyGlobals.TYPE, MyGlobals.BORE_JOURNAL);
        //-- Break the BoreLog down for reconstruction
        bundle.putString(MyGlobals.CUSTOMER, boreJournal.getCustomer());
        bundle.putString(MyGlobals.LOCATION, boreJournal.getLocation());
        bundle.putString(MyGlobals.DATE, boreJournal.getDate());
        bundle.putStringArrayList(MyGlobals.LOCATES, boreJournal.getLocates());//-- Will be populated by text file
        LocatesFragment locatesFragment = new LocatesFragment();
        locatesFragment.setArguments(bundle);
        ft.replace(R.id.container, locatesFragment)
                .commit();
    }//end continueBoreJournal()

    @Override
    public void doneButtonClicked(BoreJournal boreJournal) {
        if(MyGlobals.showDebugToasts)
            new MyToast(this, "Bore Journal object created", boreJournal.toString(), 0);
        boreJournal.init();
        boreJournal.getMyBoreJournaler().printTextFile();
        FragmentManager fragmentManager = getFragmentManager();
        FragmentTransaction ft = fragmentManager.beginTransaction();
        //-- Pass the LocatesFragment a path to the working text file of this Bore Journal
        Bundle bundle = new Bundle();
        bundle.putString(MyGlobals.TYPE, MyGlobals.BORE_JOURNAL);
        //-- Break the BoreLog down for reconstruction
        bundle.putString(MyGlobals.CUSTOMER, boreJournal.getCustomer());
        bundle.putString(MyGlobals.LOCATION, boreJournal.getLocation());
        bundle.putString(MyGlobals.DATE, boreJournal.getDate());
        bundle.putStringArrayList(MyGlobals.LOCATES, boreJournal.getLocates());//-- Will be empty
        LocatesFragment locatesFragment = new LocatesFragment();
        locatesFragment.setArguments(bundle);
        ft.replace(R.id.container, locatesFragment)
                .commit();
    }//end doneButtonClicked()

    /**
     * Handles HomeScree button clicks
     * @param whichButton the id of the button clicked
     */
    @Override
    public void onFragmentInteraction(int whichButton) {
        switch (whichButton) {
            case R.id.new_bore_log_button:
                mNavigationDrawerFragment.selectItem(1);
                onSectionAttached(1);
                if(actionBar != null) actionBar.setTitle(mTitle);
                break;
            case R.id.continue_bore_log_button:
                new ContinueBoreLogDialog(this, this).show();
                if(actionBar != null) actionBar.setTitle(getString(R.string.app_name));
                break;
            case R.id.new_bore_journal_button:
                mNavigationDrawerFragment.selectItem(2);
                onSectionAttached(2);
                if(actionBar != null) actionBar.setTitle(mTitle);
                break;
            case R.id.continue_bore_journal_button:
                new ContinueBoreJournalDialog(this, this).show();
                if(actionBar != null) actionBar.setTitle(getString(R.string.app_name));
                break;
            case R.id.boreJournalToBoreLog_button:
                new ContinueBoreJournalDialog(this, this, MyGlobals.CONVERT_JOURNAL).show();
                if(actionBar != null) actionBar.setTitle(getString(R.string.app_name));
                break;
            case R.id.create_pdf_button:
                new ContinueBoreLogDialog(this, this, MyGlobals.CONVERT_LOG_TO_PDF).show();
                if(actionBar != null) actionBar.setTitle(getString(R.string.app_name));
                break;
        }//end switch
    }//end portalButtonPressed()

    //-- Called from BoreLogGeneralInfo
    @Override
    public void doneButtonClicked(BoreLog boreLog) {
        if(boreLog != null) {
            if(MyGlobals.showDebugToasts)
                new MyToast(this, "Bore Log data", boreLog.toString(), 0);
            FragmentManager fragmentManager = getFragmentManager();
            FragmentTransaction ft = fragmentManager.beginTransaction();
            //-- Pass the LocatesFragment a path to the working text file of this Bore Log
            Bundle bundle = new Bundle();
            boreLog.init();//-- This init() with create a new bore log text file
            bundle.putString(MyGlobals.TYPE, MyGlobals.BORE_LOG);
            //-- Break the BoreLog down for reconstruction
            bundle.putString(MyGlobals.CUSTOMER, boreLog.getCustomer());
            bundle.putString(MyGlobals.CONDUIT, boreLog.getConduit());
            bundle.putString(MyGlobals.LOCATION, boreLog.getLocation());
            bundle.putString(MyGlobals.DATE, boreLog.getDate());
            bundle.putString(MyGlobals.LENGTH, boreLog.getLengthOfBore());
            bundle.putStringArrayList(MyGlobals.LOCATES, boreLog.getLocates());
            bundle.putString(MyGlobals.PATH_TO_FILE, boreLog.getTextFilePath());

            LocatesFragment locatesFragment = new LocatesFragment();
            locatesFragment.setArguments(bundle);
            ft.replace(R.id.container, locatesFragment)
                    .commit();
        }//end if
    }//end doneButtonClicked()

    @Override
    public void onLocatesFinished(int code) {
        mNavigationDrawerFragment.selectItem(0);
        onSectionAttached(0);
        if(actionBar != null) actionBar.setTitle(mTitle);
    }//end onLocatesFinished()

    /**
     * Everything CordovaFragment
     */
    private void attachCordovaFragment() {
        getFragmentManager().beginTransaction().replace(R.id.container, cordovaFragment).commit();
    }//end attachCordovaFragment()

    @Override
    public void startActivityForResult(CordovaPlugin cordovaPlugin, Intent intent, int requestCode) {
        activityResultCallback = cordovaPlugin;
        cordovaFragment.startActivityForResult(activityResultCallback, intent, requestCode);
//        startActivityForResult(intent, requestCode);
    }//end startActivityForResult()

    @Override
    public void setActivityResultCallback(final CordovaPlugin cordovaPlugin) {
        cordovaFragment.setActivityResultCallback(cordovaPlugin);
    }//end setActivityResultCallback()

    @Override
    public Activity getActivity() {
        return this;
    }//end getActivity()

    @Override
    public Object onMessage(final String message, final Object data) {
        return cordovaFragment.onMessage(message, data);
    }//end onMessage()

    @Override
    public ExecutorService getThreadPool() {
        return cordovaFragment.getThreadPool();
    }//end getThreadPool()

    private CordovaFragment getCordovaFragment() {
        // the CordovaFragment is the one implementing CordovaInterface
        return cordovaFragment.getInstance();
    }//end getCordovaFragment()

}//end BoreLogger Activity