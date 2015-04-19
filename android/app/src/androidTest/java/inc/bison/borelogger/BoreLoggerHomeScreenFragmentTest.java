package inc.bison.borelogger;

import android.app.ActionBar;
import android.app.Fragment;
import android.app.FragmentManager;
import android.content.Context;
import android.test.ActivityInstrumentationTestCase2;
import android.test.TouchUtils;
import android.test.UiThreadTest;
import android.test.ViewAsserts;
import android.test.suitebuilder.annotation.LargeTest;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.Arrays;

/**
 * Run tests from this class using:
 * adb shell am instrument -w -e class inc.bison.borelogger.BoreLoggerHomeScreenFragmentTest#methodName inc.bison.borelogger.debug.test/android.support.test.runner.AndroidJUnitRunner
 */
@LargeTest
public class BoreLoggerHomeScreenFragmentTest extends ActivityInstrumentationTestCase2<BoreLogger>
        implements HomeScreen.OnFragmentInteractionListener{

    //BoreLogger Activity
    private BoreLogger boreLogger;
    private ActionBar boreLoggerActionBar;
    private FragmentManager boreLoggerFragmentManager;
    private Fragment homeScreenFragment;//Initial fragment inflated
    private Button newBoreLogButton, continueBoreLogButton,
            newBoreJournalButton, continueBoreJournalButton, convertJournalButton,
            createPDFButton;
    private TextView boreLogTextView, boreJournalTextView, pdfTextView;
    private HomeScreen.OnFragmentInteractionListener onClickListener;

    //Utils for testing
    private Button[] allButtons;
    private TextView[] allTextViews;
    int BUTTON_CLICKED_ID = 0;

    //Must provide constructor and pass the class of Activity subclass to test
    public BoreLoggerHomeScreenFragmentTest() {
        super(BoreLogger.class);
    }

    /**
     =======================================================================================
      Set up
     =======================================================================================
    */
    @Override
    protected void setUp() throws Exception {
        super.setUp();
        setActivityInitialTouchMode(true);//Must call before getActivity()

        //The host activity
        boreLogger = getActivity();
        onClickListener = boreLogger;
        boreLoggerFragmentManager = boreLogger.getFragmentManager();
        boreLoggerActionBar = boreLogger.getActionBar();

        homeScreenFragment = boreLoggerFragmentManager.findFragmentById(R.id.container);

        //Home Screen Fragment Buttons
        newBoreLogButton = (Button) homeScreenFragment.getActivity().findViewById(R.id.new_bore_log_button);
        continueBoreLogButton = (Button) homeScreenFragment.getActivity().findViewById(R.id.continue_bore_log_button);
        newBoreJournalButton = (Button) homeScreenFragment.getActivity().findViewById(R.id.new_bore_journal_button);
        continueBoreJournalButton = (Button) homeScreenFragment.getActivity().findViewById(R.id.continue_bore_journal_button);
        convertJournalButton = (Button) homeScreenFragment.getActivity().findViewById(R.id.boreJournalToBoreLog_button);
        createPDFButton = (Button) homeScreenFragment.getActivity().findViewById(R.id.create_pdf_button);

        //Collect all the Buttons in an array
        allButtons = new Button[]{newBoreLogButton, continueBoreLogButton, newBoreJournalButton,
            continueBoreJournalButton, convertJournalButton, createPDFButton};//createPDFButton not in view

        //TextViews
        boreLogTextView = (TextView) homeScreenFragment.getActivity().findViewById(R.id.new_bore_log_title);
        boreJournalTextView = (TextView) homeScreenFragment.getActivity().findViewById(R.id.new_bore_journal_title);
        pdfTextView = (TextView) homeScreenFragment.getActivity().findViewById(R.id.createPDF_textView1);

        //Collect all the TextViews in an array
        allTextViews = new TextView[] {boreLogTextView, boreJournalTextView, pdfTextView};
    }

    /**
     =======================================================================================
      Tear down
     =======================================================================================
    */
    @Override
    protected void tearDown() throws Exception {
        super.tearDown();
    }

    /**
     =======================================================================================
      Sanity check
     =======================================================================================
    */
    public void testBoreLoggerHomeScreenFragmentTest_allPreconditions() {
        //Activity
        assertNotNull("BoreLogger is not null", boreLogger);
        //Fragment stuff
        assertNotNull("FragmentManager is not null", boreLoggerFragmentManager);
        assertNotNull("HomeScreen Fragment is not null", homeScreenFragment);
        //Buttons
        assertNotNull("Create Bore Log Button is not null", newBoreLogButton);
        assertNotNull("Continue Bore Log Button is not null", continueBoreLogButton);
        assertNotNull("Create Bore Journal Button is not null", newBoreJournalButton);
        assertNotNull("Continue Bore Journal Button is not null", continueBoreJournalButton);
        assertNotNull("Convert Journal to Log Button is not null", convertJournalButton);
        assertNotNull("Create PDF Button is not null", createPDFButton);
        //ActionBar
        assertNotNull("BoreLogger ActionBar is not null", boreLoggerActionBar);
        //TextViews
        assertNotNull("Bore Log TextView is not null", boreLogTextView);
        assertNotNull("Bore Journal TextView is not null", boreJournalTextView);
        assertNotNull("PDF TextView is not null", pdfTextView);

    }

    /**
     =======================================================================================
      Action Bar
     =======================================================================================
    */
    public void testBoreLoggerHomeScreenFragmentTest_ActionBar() {
        //Title
        String expected = boreLogger.getTitle().toString();
        assertEquals(expected, boreLoggerActionBar.getTitle());
        //Subtitle
        ArrayList<String> subtitles = new ArrayList<>(Arrays.asList(boreLogger.getResources().getStringArray(R.array.funny_phrases)));
        assertTrue("Action Bar subtitle comes from pre-set array resource", subtitles.contains(boreLoggerActionBar.getSubtitle()));

        //Home
//        DrawerActions.openDrawer(R.id.drawer_layout);
    }

    /**
     =======================================================================================
      Button tests
     =======================================================================================
    */
    @UiThreadTest
    public void testBoreLoggerHomeScreenFragmentTest_ButtonsLayoutAndClick() {
        View decorView = boreLogger.getWindow().getDecorView();
        for(Button eachButton : allButtons) {
            ViewGroup.LayoutParams layoutParams = eachButton.getLayoutParams();
            assertNotNull("Button's layout params are not null", layoutParams);
            assertEquals(layoutParams.width, WindowManager.LayoutParams.MATCH_PARENT);
            assertEquals(layoutParams.height, WindowManager.LayoutParams.WRAP_CONTENT);

            int x = (int)eachButton.getX();
            int y = (int)eachButton.getY();

            boreLogger.findViewById(R.id.container).scrollTo(x, y);
            ViewAsserts.assertOnScreen(decorView, eachButton);

            //Clicks
            onFragmentInteraction(eachButton.getId());
            assertEquals(eachButton.getId(), BUTTON_CLICKED_ID);
        }
    }
    /**
     =======================================================================================
      Each Button
     =======================================================================================
    */

    public void testBoreLoggerHomeScreenFragmentTest_NewBoreLogButtonActionBarTitle() {
        TouchUtils.clickView(this, newBoreLogButton);
        assertEquals("Bore Log", boreLoggerActionBar.getTitle().toString());
    }

    public void testBoreLoggerHomeScreenFragmentTest_NewBoreJournalButtonActionBarTitle() {
        TouchUtils.clickView(this, newBoreJournalButton);
        assertEquals("Bore Journal", boreLoggerActionBar.getTitle().toString());
    }

    //FIXME
    public void xtestBoreLoggerHomeScreenFragmentTest_createPDFButtonDialog() {

        int x = (int)createPDFButton.getX();
        int y = (int)createPDFButton.getY();
        boreLogger.findViewById(R.id.container).scrollTo(x, y);

        TouchUtils.clickView(this, createPDFButton);

        LayoutInflater inflater = (LayoutInflater) boreLogger.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View titleView = inflater.inflate(R.layout.title_view, null);

        TextView titleViewTextView = (TextView) titleView.findViewById(R.id.title_view_titleTextView);
        TextView subtitleTextView = (TextView) titleView.findViewById(R.id.title_view_subTitleTextView);

        assertEquals("Bore logs", titleViewTextView.getText().toString());
        assertEquals("Select a bore log to finalize", subtitleTextView.getText().toString());
    }

    /**
     =======================================================================================
      TextViews
     =======================================================================================
    */
    public void testBoreLoggerHomeScreenFragmentTest_TextViewsLayout() {
        View decorView = boreLogger.getWindow().getDecorView();
        for(TextView eachTextView : allTextViews) {
            ViewGroup.LayoutParams layoutParams = eachTextView.getLayoutParams();
            assertNotNull("TextView's layout params are not null", layoutParams);
            assertEquals(layoutParams.width, WindowManager.LayoutParams.MATCH_PARENT);
            assertEquals(layoutParams.height, WindowManager.LayoutParams.WRAP_CONTENT);

            int x = (int) eachTextView.getX();
            int y = (int) eachTextView.getY();

            boreLogger.findViewById(R.id.container).scrollTo(x, y);
            ViewAsserts.assertOnScreen(decorView, eachTextView);
        }

        //The TextView's text
        assertEquals(homeScreenFragment.getActivity().getString(R.string.bore_log), boreLogTextView.getText().toString());
        assertEquals(homeScreenFragment.getActivity().getString(R.string.new_bore_journal), boreJournalTextView.getText().toString());
        assertEquals(homeScreenFragment.getActivity().getString(R.string.create_pdf), pdfTextView.getText().toString());
    }

    /**
     * HomeScreen Fragment interface
     * @param whichButton {Button} The button on the fragment that was clicked
     */
    @Override
    public void onFragmentInteraction(int whichButton) {
        BUTTON_CLICKED_ID = whichButton;
    }

}//end BoreLoggerHomeScreenFragmentTest