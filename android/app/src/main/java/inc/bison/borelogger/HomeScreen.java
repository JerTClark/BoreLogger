package inc.bison.borelogger;

import android.app.Activity;
import android.content.Context;
import android.graphics.Typeface;
import android.os.Bundle;
import android.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

public class HomeScreen extends Fragment implements View.OnClickListener {

    private Context context = null;
    private HomeScreen.OnFragmentInteractionListener mListener = null;
    private View homeScreenView = null;
    private Button newBoreLogButton, continueBoreLogButton, newBoreJournalButton, continueBoreJournalButton,
        journalToLogButton, createPDFButton = null;
    private TextView newBoreLogTextView, newBoreJournalTextView, createPDFTextView = null;

    public HomeScreen() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }//end onCreate()

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
//        setHasOptionsMenu(true);
        this.homeScreenView = inflater.inflate(R.layout.fragment_bore_log_options, container, false);

        this.newBoreLogButton = new Button(this.getActivity());
        this.continueBoreLogButton = new Button(this.getActivity());
        this.newBoreJournalButton = new Button(this.getActivity());
        this.createPDFButton = new Button(this.getActivity());
        this.newBoreLogTextView = new TextView(this.getActivity());
        this.newBoreJournalTextView = new TextView(this.getActivity());
        this.createPDFTextView = new TextView(this.getActivity());

        this.context = this.getActivity().getApplicationContext();

        return this.homeScreenView;
    }//end onCreateView()

    @Override
    public void onAttach(Activity activity) {
        super.onAttach(activity);
        try {
            this.mListener = (OnFragmentInteractionListener) activity;
        } catch (ClassCastException e) {
            throw new ClassCastException(activity.toString()
                    + " must implement BoreLogGeneralInfoFragmentListener");
        }//end try-catch()
    }//end onAttach()

    @Override
    public void onDetach() {
        super.onDetach();
        this.mListener = null;
    }//end onDetach()

    public interface OnFragmentInteractionListener {
        public void onFragmentInteraction(int whichButton);
    }//end BoreLogGeneralInfoFragmentListener()

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        Typeface typeface = Typeface.createFromAsset(this.getActivity().getAssets(), "fonts/Roboto-Light.ttf");
        Typeface typefaceBold = Typeface.createFromAsset(this.getActivity().getAssets(), "fonts/Roboto-Bold.ttf");

        this.newBoreLogButton = (Button) this.homeScreenView.findViewById(R.id.new_bore_log_button);
        this.continueBoreLogButton = (Button) this.homeScreenView.findViewById(R.id.continue_bore_log_button);
        this.newBoreJournalButton = (Button) this.homeScreenView.findViewById(R.id.new_bore_journal_button);
        this.createPDFButton = (Button) this.homeScreenView.findViewById(R.id.create_pdf_button);
        this.continueBoreJournalButton = (Button) this.homeScreenView.findViewById(R.id.continue_bore_journal_button);
        this.journalToLogButton = (Button) this.homeScreenView.findViewById(R.id.boreJournalToBoreLog_button);

        this.newBoreLogButton.setTypeface(typeface);
        this.continueBoreLogButton.setTypeface(typeface);
        this.newBoreJournalButton.setTypeface(typeface);
        this.createPDFButton.setTypeface(typeface);
        this.continueBoreJournalButton.setTypeface(typeface);
        this.journalToLogButton.setTypeface(typeface);

        this.newBoreLogTextView = (TextView) this.homeScreenView.findViewById(R.id.new_bore_log_title);
        this.newBoreJournalTextView = (TextView) this.homeScreenView.findViewById(R.id.new_bore_journal_title);
        this.createPDFTextView = (TextView) this.homeScreenView.findViewById(R.id.createPDF_textView1);

        this.newBoreLogTextView.setTypeface(typefaceBold);
        this.newBoreJournalTextView.setTypeface(typefaceBold);
        this.createPDFTextView.setTypeface(typefaceBold);

        //-- OnClickListeners()
        this.newBoreLogButton.setOnClickListener(this);
        this.continueBoreLogButton.setOnClickListener(this);
        this.newBoreJournalButton.setOnClickListener(this);
        this.createPDFButton.setOnClickListener(this);
        this.continueBoreJournalButton.setOnClickListener(this);
        this.journalToLogButton.setOnClickListener(this);

    }//end onActivityCreated()

    @Override
    public void onClick(View v) {
          this.mListener.onFragmentInteraction(v.getId());
    }//end onClick()

}//end HomeScreen
