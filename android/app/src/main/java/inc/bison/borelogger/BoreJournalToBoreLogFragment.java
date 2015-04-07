package inc.bison.borelogger;

import android.app.Activity;
import android.content.Context;
import android.graphics.Typeface;
import android.os.Bundle;
import android.app.Fragment;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;

import inc.bison.documents.BoreJournal;
import inc.bison.documents.BoreLog;
import inc.bison.my.MyGlobals;
import inc.bison.my.MyMonthGetter;
import inc.bison.my.MyToast;

/**
 * Created by Clark on 10/26/2014.
 */
public class BoreJournalToBoreLogFragment extends Fragment implements View.OnClickListener, TextView.OnEditorActionListener {

    private BoreJournalToBoreLogAdditionalInfoFragmentListener mListener;
    private EditText conduitEditText, lengthOfBoreEditText = null;
    private LinearLayout conduitLinearLayout, lengthOfBoreLinearLayout, dateLinearLayout = null;
    private TextView titleTextView, subTitleTextView, conduitTextView, lengthOfBoreTextView, dateTextView = null;
    private Button doneButton, lengthOfBoreBackButton, dateBackButton = null;
    private DatePicker datePicker = null;
    private View view = null;

    private BoreJournal boreJournal = null;//-- Created from Bundle object
    private BoreLog boreLog = null;//-- Created from BoreJournal object

    //-- Empty Constructor
    public BoreJournalToBoreLogFragment() {
        // Required empty public constructor
    }//end empty constructor

    //-- OnCreate()
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Bundle bundle = this.getArguments();
        this.boreJournal = new BoreJournal();
        this.boreLog = new BoreLog();
        //-- Reconstruct the BoreLog
        this.boreJournal.setCustomer(bundle.getString(MyGlobals.CUSTOMER));
        this.boreJournal.setLocation(bundle.getString(MyGlobals.LOCATION));
        this.boreJournal.setDate(bundle.getString(MyGlobals.DATE));
        this.boreJournal.setLocates(bundle.getStringArrayList(MyGlobals.LOCATES));
//        this.boreJournal.init();
        this.boreLog.setCustomer(this.boreJournal.getCustomer());
        this.boreLog.setLocation(this.boreJournal.getLocation());
        this.boreLog.setLocates(new BoreJournalToBoreLogLocates(this.boreJournal.getLocates()).convertLocates());
        this.boreLog.setLengthOfBore("To be entered here");
        this.boreLog.setDate("To be entered here");
        this.boreLog.setConduit("To be entered here");
        if(MyGlobals.showDebugToasts) {
            new MyToast(getActivity(), "BoreLog object", this.boreLog.toString(), 0);
            new MyToast(getActivity(), "BoreLog converted locates", this.boreLog.getLocates().toString().replace("[", "").replace("]", ""), 0);
        }//end if
    }//end onCreate()

    //-- OnCreateView()
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        view = inflater.inflate(R.layout.fragment_bore_journal_to_log_additional_info, container, false);
        //-- Button
        this.doneButton = new Button(this.getActivity());
//        this.customerBackButton = new Button(this.getActivity());
        this.lengthOfBoreBackButton = new Button(this.getActivity());
        this.dateBackButton = new Button(this.getActivity());
        //-- EditText
        this.conduitEditText = new EditText(this.getActivity());
        this.lengthOfBoreEditText = new EditText(this.getActivity());
        //-- LinearLayout
        this.conduitLinearLayout = new LinearLayout(this.getActivity());
        this.lengthOfBoreLinearLayout = new LinearLayout(this.getActivity());
        this.dateLinearLayout = new LinearLayout(this.getActivity());
        //-- DatePicker
        this.datePicker = new DatePicker(this.getActivity());
        //-- TextViews
        this.titleTextView = new TextView(this.getActivity());
        this.subTitleTextView = new TextView(this.getActivity());
        this.conduitTextView = new TextView(this.getActivity());
        this.lengthOfBoreTextView = new TextView(this.getActivity());
        this.dateTextView = new TextView(this.getActivity());
        return view;
    }//end onCreateView()

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        Typeface typefaceBold = Typeface.createFromAsset(this.getActivity().getAssets(), "fonts/Roboto-Bold.ttf");
        Typeface typefaceLight = Typeface.createFromAsset(this.getActivity().getAssets(), "fonts/Roboto-Light.ttf");

        //-- EditText
        this.conduitEditText = (EditText) this.view.findViewById(R.id.generalInfo_conduitEditText);
        this.lengthOfBoreEditText = (EditText) this.view.findViewById(R.id.generalInfo_lengthOfBoreEditText);
        //-- LinearLayout
        this.conduitLinearLayout = (LinearLayout) this.view.findViewById(R.id.generalInfo_conduitLinearLayout);
        this.lengthOfBoreLinearLayout = (LinearLayout) this.view.findViewById(R.id.generalInfo_lengthOfBoreLinearLayout);
        this.dateLinearLayout = (LinearLayout) this.view.findViewById(R.id.generalInfo_dateLinearLayout);
//        this.conduitLinearLayout.setVisibility(View.GONE);
        this.lengthOfBoreLinearLayout.setVisibility(View.GONE);
        this.dateLinearLayout.setVisibility(View.GONE);
        //-- DatePicker
        this.datePicker = (DatePicker) this.view.findViewById(R.id.generalInfo_datePicker);
        //-- TextViews
        this.titleTextView = (TextView) this.view.findViewById(R.id.generalInfo_Header);
        this.subTitleTextView = (TextView) this.view.findViewById(R.id.generalInfo_SubHeader);
        this.conduitTextView = (TextView) this.view.findViewById(R.id.generalInfo_conduitTextView);
        this.lengthOfBoreTextView = (TextView) this.view.findViewById(R.id.generalInfo_lengthOfBoreTextView);
        this.dateTextView = (TextView) this.view.findViewById(R.id.generalInfo_dateTextView);

        //-- Button
        this.doneButton = (Button) this.view.findViewById(R.id.generalInfo_doneButton);
//        this.customerBackButton = (Button) this.view.findViewById(R.id.generalInfo_customerBackButton);
        this.lengthOfBoreBackButton = (Button) this.view.findViewById(R.id.generalInfo_lengthOfBoreBackButton);
        this.dateBackButton = (Button) this.view.findViewById(R.id.generalInfo_dateBackButton);
        this.doneButton.setVisibility(View.GONE);
        this.doneButton.setOnClickListener(this);
//        this.customerBackButton.setOnClickListener(this);
        this.lengthOfBoreBackButton.setOnClickListener(this);
        this.dateBackButton.setOnClickListener(this);
        //-- OnEditorActionListeners
        this.conduitEditText.setOnEditorActionListener(this);
        this.lengthOfBoreEditText.setOnEditorActionListener(this);

        //-- Typeface
        this.titleTextView.setTypeface(typefaceBold);
        this.subTitleTextView.setTypeface(typefaceLight);
        this.conduitTextView.setTypeface(typefaceBold);
        this.conduitEditText.setTypeface(typefaceLight);
        this.lengthOfBoreTextView.setTypeface(typefaceBold);
        this.lengthOfBoreEditText.setTypeface(typefaceLight);
        this.lengthOfBoreBackButton.setTypeface(typefaceLight);
        this.dateTextView.setTypeface(typefaceBold);
        this.dateBackButton.setTypeface(typefaceLight);
        this.doneButton.setTypeface(typefaceLight);
    }//end onActivityCreated()

    //-- OnAttach()
    @Override
    public void onAttach(Activity activity) {
        super.onAttach(activity);
        try {
            mListener = (BoreJournalToBoreLogAdditionalInfoFragmentListener) activity;
        } catch (ClassCastException e) {
            throw new ClassCastException(activity.toString()
                    + " must implement BoreJournalToBoreLogAdditionalInfoFragmentListener");
        }//end try-catch block
    }//end onAttach()

    //-- OnDetach()
    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }//end onDetach()

    public interface BoreJournalToBoreLogAdditionalInfoFragmentListener {
        public void onBoreLogConverted(BoreLog aBoreLog);
    }//end BoreLogGeneralInfoFragmentListener() interface

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.generalInfo_doneButton:
                this.boreLog.setDate(new MyMonthGetter().monthToString(this.datePicker.getMonth()) + "-" + this.datePicker.getDayOfMonth()
                        + "-" + this.datePicker.getYear());
                this.mListener.onBoreLogConverted(this.boreLog);
                break;
            case R.id.generalInfo_lengthOfBoreBackButton:
                this.lengthOfBoreLinearLayout.setVisibility(View.GONE);
                this.conduitLinearLayout.setVisibility(View.VISIBLE);
                break;
            case R.id.generalInfo_dateBackButton:
                this.dateLinearLayout.setVisibility(View.GONE);
                this.lengthOfBoreLinearLayout.setVisibility(View.VISIBLE);
                break;
        }//end switch()
    }//end onClick

    @Override
    public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {
        String entry = null;
        if(actionId == EditorInfo.IME_ACTION_NEXT) {
            switch (v.getId()) {
                case R.id.generalInfo_conduitEditText:
                    entry = conduitEditText.getText().toString();
                    if (!entry.equals("")) {
                        this.boreLog.setConduit(entry);
                        conduitLinearLayout.setVisibility(View.GONE);
                        lengthOfBoreLinearLayout.setVisibility(View.VISIBLE);
                    }//end if
                    else if (entry.equals("")) {
                        new MyToast(getActivity(), "Empty field", "Enter something here", 0);
                    }//end else
                    break;
            }//end switch
        }//end if
        if(actionId == EditorInfo.IME_ACTION_DONE) {
            switch (v.getId()) {
                case R.id.generalInfo_lengthOfBoreEditText:
                    entry = lengthOfBoreEditText.getText().toString();
                    if(!entry.equals("")) {
                        this.boreLog.setLengthOfBore(entry);
                        lengthOfBoreLinearLayout.setVisibility(View.GONE);
                        dateLinearLayout.setVisibility(View.VISIBLE);
                        //-- Remove the soft keyboard
                        InputMethodManager inputMethodManager = (InputMethodManager) this.getActivity().getSystemService(Context.INPUT_METHOD_SERVICE);
                        inputMethodManager.hideSoftInputFromWindow(this.datePicker.getWindowToken(), 0);
                        this.doneButton.setVisibility(View.VISIBLE);
                    }//end if
                    else if(entry.equals("")) {
                        new MyToast(getActivity(), "Empty field", "Enter something here", 0);
                    }//end else
                    break;
            }//end switch
        }//end if
        return false;
    }//end onEditorAction()

}//end BoreJournalToBoreLogFragment