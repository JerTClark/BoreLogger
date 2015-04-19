package inc.bison.borelogger;

import android.app.Activity;
import android.os.Bundle;
import android.app.Fragment;
import android.preference.PreferenceManager;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.EditText;

import java.io.File;
import java.util.ArrayList;

import inc.bison.dialogs.ListLocatesDialog;
import inc.bison.documents.BoreJournal;
import inc.bison.documents.BoreLog;
import inc.bison.my.MyGlobals;
import inc.bison.my.MyToast;

/**
 * This class provides an interface for entering and recording locates for either a bore log
 * or a bore journal
 */

public class LocatesFragment extends Fragment implements ListLocatesDialog.OnUpdateLocatesListener {

    private OnLocateListener locateListener;
    private View view = null;
    private CheckBox checkBox, noteBox = null;
    private EditText depthEditText, crossingEditText, noteEditText = null;
    private Button recordLocateButton, finishedButton = null;
    private BoreLog boreLog = null;
    private BoreJournal boreJournal = null;
    private boolean formatDepthsOn, isABoreLog = false;

    public LocatesFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setHasOptionsMenu(true);
        MyGlobals.showDebugToasts = PreferenceManager.getDefaultSharedPreferences(getActivity()).getBoolean(getActivity().getString(R.string.debug_toasts_key), false);

        //TODO Experimental feature here
        this.formatDepthsOn = PreferenceManager.getDefaultSharedPreferences(getActivity()).getBoolean(getActivity().getString(R.string.format_depths_key), false);

        Bundle bundle = this.getArguments();

        /**
         =======================================================================================
         If its a Bore Log
         =======================================================================================
         */
        if (bundle.getString(MyGlobals.TYPE).equals(MyGlobals.BORE_LOG)) {

            isABoreLog = true;
            this.boreLog = new BoreLog();

            //-- Reconstruct the BoreLog
            this.boreLog.setCustomer(bundle.getString(MyGlobals.CUSTOMER));
            this.boreLog.setConduit(bundle.getString(MyGlobals.CONDUIT));
            this.boreLog.setLocation(bundle.getString(MyGlobals.LOCATION));
            this.boreLog.setDate(bundle.getString(MyGlobals.DATE));
            this.boreLog.setLengthOfBore(bundle.getString(MyGlobals.LENGTH));
            this.boreLog.setLocates(bundle.getStringArrayList(MyGlobals.LOCATES));
            this.boreLog.init();

            //-- See if this Bore Log has an existing file that's usable
            if (new File(this.boreLog.getTextFilePath()).exists()) {
                if (MyGlobals.showDebugToasts) {
                    new MyToast(this.getActivity(), "File exists", this.boreLog.getTextFilePath(), 0);
                }//end if
            }
            //Attempt to create the file if it doesn't exist
            else {
                if (MyGlobals.showDebugToasts) {
                    new MyToast(this.getActivity(), "Attempting to create text file", this.boreLog.getTextFilePath(), 0);
                }//end if

                this.boreLog.getMyBoreLogTextPrinter().printTextFile();
                this.boreLog.writeLocatesList();

                //Check again for the file
                if (new File(this.boreLog.getTextFilePath()).exists()) {
                    new MyToast(this.getActivity(), "New text file created successfully", this.boreLog.getTextFilePath(), 0);
                } else
                    new MyToast(this.getActivity(), "ERROR: file not found or could not be created", this.boreLog.getTextFilePath(), 0);
            }
        }//end if
        /**
         =======================================================================================
         If it's a Bore Journal
         =======================================================================================
         */
        else if (bundle.getString(MyGlobals.TYPE).equals(MyGlobals.BORE_JOURNAL)) {
            isABoreLog = false;
            this.boreJournal = new BoreJournal();

            //-- Reconstruct the BoreJournal
            this.boreJournal.setCustomer(bundle.getString(MyGlobals.CUSTOMER));
            this.boreJournal.setLocation(bundle.getString(MyGlobals.LOCATION));
            this.boreJournal.setDate(bundle.getString(MyGlobals.DATE));
            this.boreJournal.setLocates(bundle.getStringArrayList(MyGlobals.LOCATES));
            this.boreJournal.init();

            //-- See if this Bore Log has an existing file that's usable
            if (new File(this.boreJournal.getPathToFile()).exists()) {
                if (MyGlobals.showDebugToasts) {
                    new MyToast(this.getActivity(), "File exists", this.boreJournal.getPathToFile(), 0);
                }
            }
            //-- If not, try to create one based on this Bore Log object's values
            else {
                this.boreJournal.getMyBoreJournaler().printTextFile();
                this.boreJournal.writeLocatesList();
                //-- If all this fails, show a warning
                if (new File(this.boreJournal.getPathToFile()).exists()) {
                    new MyToast(this.getActivity(), "New file made", this.boreJournal.getPathToFile(), 0);
                } else
                    new MyToast(this.getActivity(), "ERROR: file not found", this.boreJournal.getPathToFile() + " wasn't created for some reason", 0);

            }//end else

        }//end if Bore Journal

    }//end onCreate()

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        this.view = inflater.inflate(R.layout.fragment_locates, container, false);
        this.checkBox = new CheckBox(this.getActivity());
        this.noteBox = new CheckBox(this.getActivity());
        this.depthEditText = new EditText(this.getActivity());
        this.crossingEditText = new EditText(this.getActivity());
        this.noteEditText = new EditText(this.getActivity());
        this.recordLocateButton = new Button(this.getActivity());
        this.finishedButton = new Button(this.getActivity());
        return this.view;
    }//end onCreateView()

    @Override
    public void onResume() {
        super.onResume();
        MyGlobals.showDebugToasts = PreferenceManager.getDefaultSharedPreferences(getActivity()).getBoolean(getActivity().getString(R.string.debug_toasts_key), false);
    }//end onResume()

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        this.finishedButton = (Button) view.findViewById(R.id.finish_button);
        this.recordLocateButton = (Button) view.findViewById(R.id.enter_button);
        this.checkBox = (CheckBox) view.findViewById(R.id.utility_radio_button);
        this.noteBox = (CheckBox) view.findViewById(R.id.note_radio_button);
        this.depthEditText = (EditText) view.findViewById(R.id.depth_editText);
        this.crossingEditText = (EditText) view.findViewById(R.id.utility_editText);
        this.noteEditText = (EditText) view.findViewById(R.id.note_editText);
        this.crossingEditText.setVisibility(View.GONE);
        this.noteEditText.setVisibility(View.GONE);
        this.checkBox.setChecked(false);
        this.noteBox.setChecked(false);

        if (!formatDepthsOn) this.depthEditText.setHint("feet\"inches\"");
        if (isABoreLog) this.noteBox.setVisibility(View.GONE);

        //-- Crossing/Station CheckBox
        this.checkBox.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if (isChecked) {
                    crossingEditText.setVisibility(View.VISIBLE);
                } else {
                    crossingEditText.setVisibility(View.GONE);
                }//end if-else
            }//end onCheckedChanged()
        });//end CompoundButton.OnCheckedChangeListener() anonymous inner class

        //-- Note box (Bore Journal's only)
        this.noteBox.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if (isChecked) noteEditText.setVisibility(View.VISIBLE);
                else noteEditText.setVisibility(View.GONE);
            }//end onCheckedChanged()
        });//end CompoundButton.OnCheckedChangedListener()

        //-- Record Locate button
        this.recordLocateButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //-- Depth AND Crossing, or Depth ONLY
                String locate = null;
                if (checkBox.isChecked()) {
                    if (formatDepthsOn)
                        locate = depthEditText.getText().toString().replace(" ", "\'") + "\"" + " " + crossingEditText.getText().toString();
                    else
                        locate = depthEditText.getText().toString() + " " + crossingEditText.getText().toString();
                    checkBox.setChecked(false);
                } else {
                    if (formatDepthsOn)
                        locate = depthEditText.getText().toString().replace(" ", "\'") + "\"";
                    else locate = depthEditText.getText().toString();
                }//end if-else
                //-- EditTexts
                if (!formatDepthsOn) depthEditText.setHint("feet\"inches\"");
                depthEditText.setText("");
                crossingEditText.setText("");
                depthEditText.requestFocus();

                //TODO Use onLocateListener interface
                if (isABoreLog) {
                    boreLog.addLocate(locate);
                    if (MyGlobals.showDebugToasts)
                        new MyToast(getActivity(), "Locates so far", boreLog.getLocates().toString().replace("[", "").replace("]", ""), 0);
                }//end if
                else {
                    if (noteBox.isChecked() && !noteEditText.getText().toString().equals("")) {
                        locate = locate + MyGlobals.NOTE + noteEditText.getText().toString();
                        noteBox.setChecked(false);
                    }//end if
                    boreJournal.addLocate(locate);
                    noteEditText.setText("");
                    if (MyGlobals.showDebugToasts)
                        new MyToast(getActivity(), "Locates so far", boreJournal.getLocates().toString().replace("[", "").replace("]", ""), 0);
                }//end else

            }//end onClick()

        });//end View.OnClickListener() anonymous inner class

        this.finishedButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (isABoreLog) {
                    if (MyGlobals.showDebugToasts)
                        new MyToast(getActivity(), "Path to bore log text file", boreLog.getTextFilePath(), 0);
                    boreLog.getMyBoreLogTextPrinter().checkForEndBore();
                    locateListener.onLocatesFinished(MyGlobals.BORE_LOG_CODE);
                } else {
                    if (MyGlobals.showDebugToasts)
                        new MyToast(getActivity(), "Path to bore journal text file", boreJournal.getPathToFile(), 0);
                    locateListener.onLocatesFinished(MyGlobals.BORE_JOURNAL_CODE);
                }//end if-else
            }//end onClick()
        });//end View.OnClickListener() anonymous inner class

        this.getActivity().invalidateOptionsMenu();//TESTING

    }//end onActivityCreated()

    @Override
    public void onAttach(Activity activity) {
        super.onAttach(activity);
        try {
            this.locateListener = (OnLocateListener) activity;
        } catch (ClassCastException e) {
            throw new ClassCastException(activity.toString()
                    + " must implement BoreLogGeneralInfoFragmentListener");
        }//end try-catch
    }//end onAttach()

    @Override
    public void onDetach() {
        super.onDetach();
        this.locateListener = null;
    }//end onDetach()

    public interface OnLocateListener {
        public void onLocatesFinished(int code);
    }//end onLocateListener()

    @Override
    public void onCreateOptionsMenu(Menu menu, MenuInflater inflater) {
        // If the drawer is open, show the global app actions in the action bar. See also
        // showGlobalContextActionBar, which controls the top-left area of the action bar.
        inflater.inflate(R.menu.locates, menu);
        super.onCreateOptionsMenu(menu, inflater);
    }//end onCreateOptionsMenu()

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.list_locates:
                if (this.isABoreLog)
                    new ListLocatesDialog(getActivity(), this.boreLog.getLocates(), MyGlobals.BORE_LOG_CODE, this).show();
                else
                    new ListLocatesDialog(getActivity(), this.boreJournal.getLocates(), MyGlobals.BORE_JOURNAL_CODE, this).show();
                break;
        }//end switch
        return super.onOptionsItemSelected(item);
    }//end onOptionsItemSelected()

    @Override
    public void onUpdateLocates(ArrayList<String> newLocates, int CODE) {
        if (CODE == MyGlobals.BORE_LOG_CODE) {
            this.boreLog.setLocates(newLocates);
            this.boreLog.getMyBoreLogTextPrinter().overwriteTextFile();
            refreshLocatesList(this.boreLog.getLocates(), MyGlobals.BORE_LOG_CODE);
        } else {
            this.boreJournal.setLocates(newLocates);
            this.boreJournal.getMyBoreJournaler().overwriteTextFile();
            refreshLocatesList(this.boreJournal.getLocates(), MyGlobals.BORE_JOURNAL_CODE);
        }//end if-else
    }//end interface

    private void refreshLocatesList(ArrayList<String> locates, int CODE) {
        new ListLocatesDialog(getActivity(), locates, CODE, this).show();
    }//end refreshLocatesList()


    /**
     =======================================================================================
      FIXME Getters for testing REMOVE from production
     =======================================================================================
    */
    public BoreLog getBoreLog() {
        return boreLog;
    }
    public BoreJournal getBoreJournal() {
        return boreJournal;
    }
    public boolean isABoreLog() {
        return isABoreLog;
    }
}//end LocatesFragment