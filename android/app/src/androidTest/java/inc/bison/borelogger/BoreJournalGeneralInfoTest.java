package inc.bison.borelogger;

import android.app.ActionBar;
import android.app.FragmentManager;
import android.support.test.InstrumentationRegistry;
import android.support.test.espresso.Espresso;
import android.support.test.espresso.action.ViewActions;
import android.support.test.espresso.matcher.ViewMatchers;
import android.test.ActivityInstrumentationTestCase2;
import android.test.FlakyTest;
import android.test.TouchUtils;
import android.test.ViewAsserts;
import android.test.suitebuilder.annotation.LargeTest;
import android.test.suitebuilder.annotation.SmallTest;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.io.File;
import java.util.Calendar;

import inc.bison.documents.BoreJournal;
import inc.bison.documents.BoreLog;
import inc.bison.my.MyMonthGetter;

@LargeTest
public class BoreJournalGeneralInfoTest extends ActivityInstrumentationTestCase2<BoreLogger> {

    //BoreLogger Activity and HomeScreen Fragment
    private BoreLogger boreLogger;
    private ActionBar boreLoggerActionBar;
    private Button newBoreJournalButton;
    private BoreJournalGeneralInfo boreJournalGeneralInfo;
    private FragmentManager fragmentManager;

    //BoreJournalGeneralInfo Fragment
    private EditText customerEditText, locationEditText;
    private LinearLayout customerLinearLayout, locationLinearLayout, dateLinearLayout;
    private DatePicker datePicker;
    private TextView titleTextView, subTitleTextView, customerTextView, locationTextView, dateTextView;
    private Button doneButton;
    private BoreJournal mockBoreJournal;
    private BoreJournalGeneralInfo.BoreJournalGeneralInfoFragmentListener boreJournalGeneralInfoFragmentListener;

    private final String CUSTOMER = "Washington Gas", LOCATION = "1234 Street";
    private String DATE;
    private String[] mockLocates = new String[]{"3 6", "4 5", "5 6"};
    private String[] mockLocatesFormatted = new String[]{"Depth 1: 3\'6\"",
            "Depth 2: 4\'5\"", "Depth 3: 5\'6\""};

    //Must implement constructor
    public BoreJournalGeneralInfoTest() {
        super(BoreLogger.class);
    }

    /**
     =======================================================================================
      Set up
     =======================================================================================
    */
    @Override
    public void setUp() throws Exception {
        super.setUp();
        injectInstrumentation(InstrumentationRegistry.getInstrumentation());
        setActivityInitialTouchMode(true);

        //Activity
        boreLogger = getActivity();
        //Action Bar
        boreLoggerActionBar = boreLogger.getActionBar();
        //Interface
        boreJournalGeneralInfoFragmentListener = boreLogger;
        //Fragment stuff
        fragmentManager = boreLogger.getFragmentManager();
        HomeScreen homeScreen = (HomeScreen)fragmentManager.findFragmentById(R.id.container);
        newBoreJournalButton = (Button) homeScreen.getActivity().findViewById(R.id.new_bore_journal_button);
        TouchUtils.clickView(this, newBoreJournalButton);//Click to obtain access to -->
        //--> BoreLogGeneralInfoFragment!
        boreJournalGeneralInfo = (BoreJournalGeneralInfo)fragmentManager.findFragmentById(R.id.container);

        //EditTexts
        customerEditText = (EditText) boreJournalGeneralInfo.getActivity().findViewById(R.id.generalInfo_customerEditText);
        locationEditText = (EditText) boreJournalGeneralInfo.getActivity().findViewById(R.id.generalInfo_locationEditText);
        datePicker = (DatePicker) boreJournalGeneralInfo.getActivity().findViewById(R.id.generalInfo_datePicker);

        //Setting each OnEditorActionListener
        customerEditText.setOnEditorActionListener(boreJournalGeneralInfo);
        locationEditText.setOnEditorActionListener(boreJournalGeneralInfo);

        //LinearLayouts
        customerLinearLayout = (LinearLayout) boreJournalGeneralInfo.getActivity().findViewById(R.id.generalInfo_customerLinearLayout);
        locationLinearLayout = (LinearLayout) boreJournalGeneralInfo.getActivity().findViewById(R.id.generalInfo_locationLinearLayout);
        dateLinearLayout = (LinearLayout) boreJournalGeneralInfo.getActivity().findViewById(R.id.generalInfo_dateLinearLayout);

        //TextViews
        titleTextView = (TextView) boreJournalGeneralInfo.getActivity().findViewById(R.id.generalInfo_Header);
        subTitleTextView = (TextView) boreJournalGeneralInfo.getActivity().findViewById(R.id.generalInfo_SubHeader);
        customerTextView = (TextView) boreJournalGeneralInfo.getActivity().findViewById(R.id.generalInfo_customerTextView);
        locationTextView = (TextView) boreJournalGeneralInfo.getActivity().findViewById(R.id.generalInfo_locationTextView);
        dateTextView = (TextView) boreJournalGeneralInfo.getActivity().findViewById(R.id.generalInfo_dateTextView);

        //Buttons
        doneButton = (Button) boreJournalGeneralInfo.getActivity().findViewById(R.id.generalInfo_doneButton);

        //OnClickListeners
        doneButton.setOnClickListener(boreJournalGeneralInfo);

        //Get the current date to match the DatePicker later
        Calendar calendar = Calendar.getInstance();
        DATE = new MyMonthGetter().monthToString(calendar.get(Calendar.MONTH))
                + "-" + calendar.get(Calendar.DAY_OF_MONTH)
                + "-" + calendar.get(Calendar.YEAR);

        //Mock BoreJournal instantiate and initialize
        mockBoreJournal = new BoreJournal(CUSTOMER, LOCATION);
        mockBoreJournal.setDate(DATE);
        mockBoreJournal.init();
    }

    /**
     =======================================================================================
      Sanity check
     =======================================================================================
    */
    @SmallTest
    public void testBoreJournalGeneralInfo_allPreconditions() {
        //Activity & Fragment
        assertNotNull("Bore Logger is not null", boreLogger);
        assertNotNull("Bore Logger Action Bar is not null", boreLoggerActionBar);
        assertNotNull("Bore Logger Fragment Manager is not null", fragmentManager);
        assertNotNull("New Bore Journal Button is not null", newBoreJournalButton);
        assertNotNull("Bore Journal General Info is not null", boreJournalGeneralInfo);
        assertNotNull("BoreJournalGeneralInfo.BoreLogGeneralInfoFragmentInteractionListener is not null",
                boreJournalGeneralInfoFragmentListener);
        //Inputs
        assertNotNull("Customer EditText is not null", customerEditText);
        assertNotNull("Location EditText is not null", locationEditText);
        assertNotNull("DatePicker is not null", datePicker);

        //Layouts
        assertNotNull("Customer LinearLayout is not null", customerLinearLayout);
        assertNotNull("Location LinearLayout is not null", locationLinearLayout);
        assertNotNull("DatePicker LinearLayout is not null", dateLinearLayout);

        //TextViews
        assertNotNull("Title TextView is not null", titleTextView);
        assertNotNull("SubTitle TextView is not null", subTitleTextView);
        assertNotNull("Customer TextView is not null", customerTextView);
        assertNotNull("Location TextView is not null", locationTextView);
        assertNotNull("Date TextView is not null", dateTextView);

        //Buttons
        assertNotNull("Done Button is not null", doneButton);

        //BoreLogGeneralInfo instance of Bore Log
        assertNotNull("BoreJournalGeneralInfo Fragment BoreJournal instance is not null", boreJournalGeneralInfo.getBoreJournal());
        assertNull("BoreJournalGeneralInfo Fragment BoreLog instance getCustomer() is null", boreJournalGeneralInfo.getBoreJournal().getCustomer());
        assertNull("BoreJournalGeneralInfo Fragment BoreLog instance getLocation() is null", boreJournalGeneralInfo.getBoreJournal().getLocation());
        assertNull("BoreJournalGeneralInfo Fragment BoreLog instance getDate() is null", boreJournalGeneralInfo.getBoreJournal().getDate());

        //Mock BoreLog
        assertNotNull("MockBoreJournal instance of BoreLog is not null", mockBoreJournal);
        assertEquals("MockBoreJournal Customer is not null", CUSTOMER, mockBoreJournal.getCustomer());
        assertEquals("MockBoreJournal Location is not null", LOCATION, mockBoreJournal.getLocation());
        assertEquals("MockBoreJournal Date is not null", DATE, mockBoreJournal.getDate());
        assertNotNull("MockBoreJournal PathToTextFile value is not null", mockBoreJournal.getPathToFile());
        assertNotNull("MockBoreJournal MyBoreJournaler is not null", mockBoreJournal.getMyBoreJournaler());

    }

    /**
     =======================================================================================
      General Info EditText
     =======================================================================================
    */
    @FlakyTest
    public void testBoreJournalGeneralInfo_CreatingANewBoreJournal() {

        //Customer EditText
        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_customerEditText))
                .perform(ViewActions.typeText(mockBoreJournal.getCustomer()));
        assertEquals(CUSTOMER, customerEditText.getText().toString());
        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_customerEditText))
            .perform(ViewActions.pressImeActionButton());

        //Location EditText
        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_locationEditText))
                .perform(ViewActions.typeText(mockBoreJournal.getLocation()));
        assertEquals(LOCATION, locationEditText.getText().toString());
        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_locationEditText))
                .perform(ViewActions.pressImeActionButton());

        Espresso.onView(ViewMatchers.withId(R.id.container))
                .perform(ViewActions.swipeUp());

        pause(2000);

        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_doneButton))
                .perform(ViewActions.closeSoftKeyboard(), ViewActions.click());

        //Assertions on the generated Bore Log
        assertEquals(mockBoreJournal.getCustomer(), boreJournalGeneralInfo.getBoreJournal().getCustomer());
        assertEquals(mockBoreJournal.getLocation(), boreJournalGeneralInfo.getBoreJournal().getLocation());
        assertEquals(mockBoreJournal.getDate(), boreJournalGeneralInfo.getBoreJournal().getDate());

    }

    //Confirm that a File exists
    @FlakyTest(tolerance = 2)
    public void testBoreJournalGeneralInfo_FileExists() {
        mockBoreJournal.init();
        assertNotNull("mockBoreLog.getTextFilePath()", mockBoreJournal.getPathToFile());
        String path = mockBoreJournal.getPathToFile();
        File fileToCheck = new File(path);
        assertTrue("Checking for the BoreLog file", fileToCheck.exists());
        if (fileToCheck.exists()) {
            assertTrue("Deleted the file", fileToCheck.delete());
        }
    }

    //Utility to pause test
    private void pause(int time) {
        try {
            Thread.sleep(time);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
