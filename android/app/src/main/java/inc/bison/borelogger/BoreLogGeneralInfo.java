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

import java.io.File;

import inc.bison.documents.BoreLog;
import inc.bison.my.MyMonthGetter;
import inc.bison.my.MyToast;

public class BoreLogGeneralInfo extends Fragment implements View.OnClickListener, TextView.OnEditorActionListener {

    private BoreLogGeneralInfoFragmentListener mListener;
    private EditText customerEditText, conduitEditText, locationEditText, lengthOfBoreEditText = null;
    private LinearLayout customerLinearLayout, conduitLinearLayout, locationLinearLayout,
            lengthOfBoreLinearLayout, dateLinearLayout = null;
    private TextView titleTextView, subTitleTextView, customerTextView, conduitTextView, locationTextView, lengthOfBoreTextView, dateTextView = null;
    private Button doneButton, conduitBackButton, locationBackButton,
            lengthOfBoreBackButton, dateBackButton = null;
    private DatePicker datePicker = null;
    private View view = null;

    private BoreLog boreLog = null;

    //-- Empty Constructor
    public BoreLogGeneralInfo() {
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
        view = inflater.inflate(R.layout.fragment_bore_log_general_info, container, false);
        //-- Button
        this.doneButton = new Button(this.getActivity());
//        this.customerBackButton = new Button(this.getActivity());
        this.conduitBackButton = new Button(this.getActivity());
        this.locationBackButton = new Button(this.getActivity());
        this.lengthOfBoreBackButton = new Button(this.getActivity());
        this.dateBackButton = new Button(this.getActivity());
        //-- EditText
        this.customerEditText = new EditText(this.getActivity());
        this.conduitEditText = new EditText(this.getActivity());
        this.locationEditText = new EditText(this.getActivity());
        this.lengthOfBoreEditText = new EditText(this.getActivity());
        //-- LinearLayout
        this.customerLinearLayout = new LinearLayout(this.getActivity());
        this.conduitLinearLayout = new LinearLayout(this.getActivity());
        this.locationLinearLayout = new LinearLayout(this.getActivity());
        this.lengthOfBoreLinearLayout = new LinearLayout(this.getActivity());
        this.dateLinearLayout = new LinearLayout(this.getActivity());
        //-- DatePicker
        this.datePicker = new DatePicker(this.getActivity());
        //-- TextViews
        this.titleTextView = new TextView(this.getActivity());
        this.subTitleTextView = new TextView(this.getActivity());
        this.customerTextView = new TextView(this.getActivity());
        this.conduitTextView = new TextView(this.getActivity());
        this.locationTextView = new TextView(this.getActivity());
        this.lengthOfBoreTextView = new TextView(this.getActivity());
        this.dateTextView = new TextView(this.getActivity());
        return view;
    }//end onCreateView()

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        this.boreLog = new BoreLog();
        Typeface typefaceBold = Typeface.createFromAsset(this.getActivity().getAssets(), "fonts/Roboto-Bold.ttf");
        Typeface typefaceLight = Typeface.createFromAsset(this.getActivity().getAssets(), "fonts/Roboto-Light.ttf");

        //-- EditText
        this.customerEditText = (EditText) this.view.findViewById(R.id.generalInfo_customerEditText);
        this.conduitEditText = (EditText) this.view.findViewById(R.id.generalInfo_conduitEditText);
        this.locationEditText = (EditText) this.view.findViewById(R.id.generalInfo_locationEditText);
        this.lengthOfBoreEditText = (EditText) this.view.findViewById(R.id.generalInfo_lengthOfBoreEditText);
        //-- LinearLayout
        this.customerLinearLayout = (LinearLayout) this.view.findViewById(R.id.generalInfo_customerLinearLayout);
        this.conduitLinearLayout = (LinearLayout) this.view.findViewById(R.id.generalInfo_conduitLinearLayout);
        this.locationLinearLayout = (LinearLayout) this.view.findViewById(R.id.generalInfo_locationLinearLayout);
        this.lengthOfBoreLinearLayout = (LinearLayout) this.view.findViewById(R.id.generalInfo_lengthOfBoreLinearLayout);
        this.dateLinearLayout = (LinearLayout) this.view.findViewById(R.id.generalInfo_dateLinearLayout);
        this.conduitLinearLayout.setVisibility(View.GONE);
        this.locationLinearLayout.setVisibility(View.GONE);
        this.lengthOfBoreLinearLayout.setVisibility(View.GONE);
        this.dateLinearLayout.setVisibility(View.GONE);
        //-- DatePicker
        this.datePicker = (DatePicker) this.view.findViewById(R.id.generalInfo_datePicker);
        //-- TextViews
        this.titleTextView = (TextView) this.view.findViewById(R.id.generalInfo_Header);
        this.subTitleTextView = (TextView) this.view.findViewById(R.id.generalInfo_SubHeader);
        this.customerTextView = (TextView) this.view.findViewById(R.id.generalInfo_customerTextView);
        this.conduitTextView = (TextView) this.view.findViewById(R.id.generalInfo_conduitTextView);
        this.locationTextView = (TextView) this.view.findViewById(R.id.generalInfo_locationTextView);
        this.lengthOfBoreTextView = (TextView) this.view.findViewById(R.id.generalInfo_lengthOfBoreTextView);
        this.dateTextView = (TextView) this.view.findViewById(R.id.generalInfo_dateTextView);

        //-- Button
        this.doneButton = (Button) this.view.findViewById(R.id.generalInfo_doneButton);
//        this.customerBackButton = (Button) this.view.findViewById(R.id.generalInfo_customerBackButton);
        this.conduitBackButton = (Button) this.view.findViewById(R.id.generalInfo_conduitBackButton);
        this.locationBackButton = (Button) this.view.findViewById(R.id.generalInfo_locationBackButton);
        this.lengthOfBoreBackButton = (Button) this.view.findViewById(R.id.generalInfo_lengthOfBoreBackButton);
        this.dateBackButton = (Button) this.view.findViewById(R.id.generalInfo_dateBackButton);
        this.doneButton.setVisibility(View.GONE);
        this.doneButton.setOnClickListener(this);
//        this.customerBackButton.setOnClickListener(this);
        this.conduitBackButton.setOnClickListener(this);
        this.locationBackButton.setOnClickListener(this);
        this.lengthOfBoreBackButton.setOnClickListener(this);
        this.dateBackButton.setOnClickListener(this);
        //-- OnEditorActionListeners
        this.customerEditText.setOnEditorActionListener(this);
        this.conduitEditText.setOnEditorActionListener(this);
        this.locationEditText.setOnEditorActionListener(this);
        this.lengthOfBoreEditText.setOnEditorActionListener(this);

        //-- Typeface
        this.titleTextView.setTypeface(typefaceBold);
        this.subTitleTextView.setTypeface(typefaceLight);
        this.customerTextView.setTypeface(typefaceBold);
        this.customerEditText.setTypeface(typefaceLight);
        this.conduitTextView.setTypeface(typefaceBold);
        this.conduitEditText.setTypeface(typefaceLight);
        this.conduitBackButton.setTypeface(typefaceLight);
        this.locationTextView.setTypeface(typefaceBold);
        this.locationEditText.setTypeface(typefaceLight);
        this.locationBackButton.setTypeface(typefaceLight);
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
            mListener = (BoreLogGeneralInfoFragmentListener) activity;
        } catch (ClassCastException e) {
            throw new ClassCastException(activity.toString()
                    + " must implement BoreLogGeneralInfoFragmentListener");
        }//end try-catch block
    }//end onAttach()

    //-- OnDetach()
    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }//end onDetach()

    public interface BoreLogGeneralInfoFragmentListener {
        public void doneButtonClicked(BoreLog aBoreLog);
    }//end BoreLogGeneralInfoFragmentListener() interface

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.generalInfo_doneButton:
                this.boreLog.setDate(new MyMonthGetter().monthToString(this.datePicker.getMonth()) + "-" + this.datePicker.getDayOfMonth()
                        + "-" + this.datePicker.getYear());
                this.mListener.doneButtonClicked(this.boreLog);
                break;
            case R.id.generalInfo_conduitBackButton:
                this.conduitLinearLayout.setVisibility(View.GONE);
                this.customerLinearLayout.setVisibility(View.VISIBLE);
                break;
            case R.id.generalInfo_locationBackButton:
                this.locationLinearLayout.setVisibility(View.GONE);
                this.conduitLinearLayout.setVisibility(View.VISIBLE);
                break;
            case R.id.generalInfo_lengthOfBoreBackButton:
                this.lengthOfBoreLinearLayout.setVisibility(View.GONE);
                this.locationLinearLayout.setVisibility(View.VISIBLE);
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
                case R.id.generalInfo_customerEditText:
                    entry = this.customerEditText.getText().toString();
                    if(!entry.equals("")) {
                        this.boreLog.setCustomer(entry);
                        customerLinearLayout.setVisibility(View.GONE);
                        conduitLinearLayout.setVisibility(View.VISIBLE);
                    }//end if
                    else if(entry.equals("")) {
                        new MyToast(getActivity(), "Empty field", "Enter something here", 0);
                    }//end else
                    break;
                case R.id.generalInfo_conduitEditText:
                    entry = conduitEditText.getText().toString();
                    if(!entry.equals("")) {
                        this.boreLog.setConduit(entry);
                        conduitLinearLayout.setVisibility(View.GONE);
                        locationLinearLayout.setVisibility(View.VISIBLE);
                    }//end if
                    else if(entry.equals("")) {
                        new MyToast(getActivity(), "Empty field", "Enter something here", 0);
                    }//end else
                    break;
                case R.id.generalInfo_locationEditText:
                    entry = locationEditText.getText().toString();
                    if(!entry.equals("")) {
                        this.boreLog.setLocation(entry);
                        locationLinearLayout.setVisibility(View.GONE);
                        lengthOfBoreLinearLayout.setVisibility(View.VISIBLE);
                    }//end if
                    else if(entry.equals("")) {
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

}//end BoreLogGeneralInfo