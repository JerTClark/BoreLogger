package inc.bison.borelogger;

import android.app.Activity;
import android.app.Fragment;
import android.app.FragmentTransaction;
import android.content.Context;
import android.graphics.Typeface;
import android.os.Bundle;
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
import inc.bison.my.MyMonthGetter;
import inc.bison.my.MyToast;

/**
 * Created by Clark on 10/26/2014.
 */
public class BoreJournalGeneralInfo extends Fragment implements View.OnClickListener, TextView.OnEditorActionListener {

    private BoreJournalGeneralInfoFragmentListener mListener;
    private EditText customerEditText, locationEditText = null;
    private LinearLayout customerLinearLayout, locationLinearLayout, dateLinearLayout = null;
    private TextView titleTextView, subTitleTextView, customerTextView, locationTextView, dateTextView = null;
    private Button doneButton = null;
    private DatePicker datePicker = null;
    private View view = null;

    private BoreJournal boreJournal = null;

    //-- Empty Constructor
    public BoreJournalGeneralInfo() {
        // Required empty public constructor
    }//end empty constructor

    //-- OnCreate()
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }//end onCreate()

    //-- OnCreateView()
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        view = inflater.inflate(R.layout.fragment_bore_journal_general_info, container, false);
        //-- Button
        this.doneButton = new Button(this.getActivity());
        //-- EditText
        this.customerEditText = new EditText(this.getActivity());
        this.locationEditText = new EditText(this.getActivity());
        //-- LinearLayout
        this.customerLinearLayout = new LinearLayout(this.getActivity());
        this.locationLinearLayout = new LinearLayout(this.getActivity());
        this.dateLinearLayout = new LinearLayout(this.getActivity());
        //-- DatePicker
        this.datePicker = new DatePicker(this.getActivity());
        //-- TextViews
        this.titleTextView = new TextView(this.getActivity());
        this.subTitleTextView = new TextView(this.getActivity());
        this.customerTextView = new TextView(this.getActivity());
        this.locationTextView = new TextView(this.getActivity());
        this.dateTextView = new TextView(this.getActivity());
        return view;
    }//end onCreateView()

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        this.boreJournal = new BoreJournal();
        Typeface typefaceBold = Typeface.createFromAsset(this.getActivity().getAssets(), "fonts/Roboto-Bold.ttf");
        Typeface typefaceLight = Typeface.createFromAsset(this.getActivity().getAssets(), "fonts/Roboto-Light.ttf");

        //-- EditText
        this.customerEditText = (EditText) this.view.findViewById(R.id.generalInfo_customerEditText);
        this.locationEditText = (EditText) this.view.findViewById(R.id.generalInfo_locationEditText);
        //-- LinearLayout
        this.customerLinearLayout = (LinearLayout) this.view.findViewById(R.id.generalInfo_customerLinearLayout);
        this.locationLinearLayout = (LinearLayout) this.view.findViewById(R.id.generalInfo_locationLinearLayout);
        this.dateLinearLayout = (LinearLayout) this.view.findViewById(R.id.generalInfo_dateLinearLayout);
        //-- DatePicker
        this.datePicker = (DatePicker) this.view.findViewById(R.id.generalInfo_datePicker);
        //-- TextViews
        this.titleTextView = (TextView) this.view.findViewById(R.id.generalInfo_Header);
        this.subTitleTextView = (TextView) this.view.findViewById(R.id.generalInfo_SubHeader);
        this.customerTextView = (TextView) this.view.findViewById(R.id.generalInfo_customerTextView);
        this.locationTextView = (TextView) this.view.findViewById(R.id.generalInfo_locationTextView);
        this.locationEditText.setOnEditorActionListener(this);
        this.dateTextView = (TextView) this.view.findViewById(R.id.generalInfo_dateTextView);

        //-- Button
        this.doneButton = (Button) this.view.findViewById(R.id.generalInfo_doneButton);
        this.doneButton.setOnClickListener(this);

        //-- Typeface
        this.titleTextView.setTypeface(typefaceBold);
        this.subTitleTextView.setTypeface(typefaceLight);
        this.customerTextView.setTypeface(typefaceBold);
        this.customerEditText.setTypeface(typefaceLight);
        this.locationTextView.setTypeface(typefaceBold);
        this.locationEditText.setTypeface(typefaceLight);
        this.dateTextView.setTypeface(typefaceBold);
        this.doneButton.setTypeface(typefaceLight);
    }//end onActivityCreated()

    //-- OnAttach()
    @Override
    public void onAttach(Activity activity) {
        super.onAttach(activity);
        try {
            mListener = (BoreJournalGeneralInfoFragmentListener) activity;
        } catch (ClassCastException e) {
            throw new ClassCastException(activity.toString()
                    + " must implement BoreJournalGeneralInfoFragmentListener");
        }//end try-catch block
    }//end onAttach()

    //-- OnDetach()
    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }//end onDetach()

    public interface BoreJournalGeneralInfoFragmentListener {
        public void doneButtonClicked(BoreJournal aBoreJournal);
    }//end BoreLogGeneralInfoFragmentListener() interface

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.generalInfo_doneButton:
                if(!this.customerEditText.getText().toString().equals("") && !this.locationEditText.getText().toString().equals("")) {
                    this.boreJournal.setCustomer(this.customerEditText.getText().toString());
                    this.boreJournal.setLocation(this.locationEditText.getText().toString());
                    this.boreJournal.setDate(new MyMonthGetter().monthToString(this.datePicker.getMonth()) + "-" + this.datePicker.getDayOfMonth()
                            + "-" + this.datePicker.getYear());
                    this.mListener.doneButtonClicked(this.boreJournal);
                } else new MyToast(getActivity(), "Empty field", "Enter the required information to continue", 0);
                break;
        }//end switch()
    }//end onClick

    @Override
    public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {
        if(actionId == EditorInfo.IME_ACTION_NEXT) {
            InputMethodManager inputMethodManager = (InputMethodManager) this.getActivity().getSystemService(Context.INPUT_METHOD_SERVICE);
            inputMethodManager.hideSoftInputFromWindow(this.datePicker.getWindowToken(), 0);
        }//end if
        return true;
    }//end onEditorAction()

    //TODO For testing
    public BoreJournal getBoreJournal() {
        return boreJournal;
    }

}//end BoreJournalGeneralInfo