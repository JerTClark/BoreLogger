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
import java.util.regex.Pattern;

import javax.annotation.RegEx;

import inc.bison.documents.BoreLog;
import inc.bison.documents.TextFileToBoreLog;
import inc.bison.my.MyGlobals;
import inc.bison.my.MyMonthGetter;

@LargeTest
public class BoreLogGeneralInfoTest extends ActivityInstrumentationTestCase2<BoreLogger> {

    //BoreLogger Activity and HomeScreen Fragment
    private BoreLogger boreLogger;
    private ActionBar boreLoggerActionBar;
    private Button newBoreLogButton;
    private BoreLogGeneralInfo boreLogGeneralInfo;
    private HomeScreen homeScreen;
    private FragmentManager fragmentManager;

    //BoreLogGeneralInfo Fragment
    private EditText customerEditText, conduitEditText, locationEditText, lengthOfBoreEditText;
    private LinearLayout customerLinearLayout, conduitLinearLayout, locationLinearLayout,
            lengthOfBoreLinearLayout, dateLinearLayout;
    private DatePicker datePicker;
    private TextView titleTextView, subTitleTextView, customerTextView, conduitTextView, locationTextView, lengthOfBoreTextView, dateTextView;
    private Button doneButton, conduitBackButton, locationBackButton,
            lengthOfBoreBackButton, dateBackButton;
    private BoreLog mockBoreLog;
    private BoreLogGeneralInfo.BoreLogGeneralInfoFragmentListener boreLogGeneralInfoFragmentListener;

    private final String CUSTOMER = "Washington Gas", CONDUIT = "(1) 12\" Plastic",
            LOCATION = "1234 Street", LENGTH_OF_BORE = "200 LF (10\' Rods)";
    private String DATE;

    //Must implement constructor
    public BoreLogGeneralInfoTest() {
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
        boreLogGeneralInfoFragmentListener = boreLogger;
        //Fragment stuff
        fragmentManager = boreLogger.getFragmentManager();
        homeScreen = (HomeScreen)fragmentManager.findFragmentById(R.id.container);
        newBoreLogButton = (Button) homeScreen.getActivity().findViewById(R.id.new_bore_log_button);
        TouchUtils.clickView(this, newBoreLogButton);//Click to obtain access to -->
        //--> BoreLogGeneralInfoFragment!
        boreLogGeneralInfo = (BoreLogGeneralInfo)fragmentManager.findFragmentById(R.id.container);

        //EditTexts
        customerEditText = (EditText) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_customerEditText);
        conduitEditText = (EditText) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_conduitEditText);
        locationEditText = (EditText) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_locationEditText);
        lengthOfBoreEditText = (EditText) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_lengthOfBoreEditText);
        datePicker = (DatePicker) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_datePicker);

        //Setting each OnEditorActionListener
        customerEditText.setOnEditorActionListener(boreLogGeneralInfo);
        conduitEditText.setOnEditorActionListener(boreLogGeneralInfo);
        locationEditText.setOnEditorActionListener(boreLogGeneralInfo);
        lengthOfBoreEditText.setOnEditorActionListener(boreLogGeneralInfo);

        //LinearLayouts
        customerLinearLayout = (LinearLayout) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_customerLinearLayout);
        conduitLinearLayout = (LinearLayout) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_conduitLinearLayout);
        locationLinearLayout = (LinearLayout) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_locationLinearLayout);
        lengthOfBoreLinearLayout = (LinearLayout) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_lengthOfBoreLinearLayout);
        dateLinearLayout = (LinearLayout) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_dateLinearLayout);

        //TextViews
        titleTextView = (TextView) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_Header);
        subTitleTextView = (TextView) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_SubHeader);
        customerTextView = (TextView) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_customerTextView);
        conduitTextView = (TextView) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_conduitTextView);
        locationTextView = (TextView) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_locationTextView);
        lengthOfBoreTextView = (TextView) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_lengthOfBoreTextView);
        dateTextView = (TextView) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_dateTextView);

        //Buttons
        doneButton = (Button) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_doneButton);
        conduitBackButton = (Button) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_conduitBackButton);
        locationBackButton = (Button) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_locationBackButton);
        lengthOfBoreBackButton = (Button) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_lengthOfBoreBackButton);
        dateBackButton = (Button) boreLogGeneralInfo.getActivity().findViewById(R.id.generalInfo_dateBackButton);

        //OnClickListeners
        doneButton.setOnClickListener(boreLogGeneralInfo);
        conduitBackButton.setOnClickListener(boreLogGeneralInfo);
        locationBackButton.setOnClickListener(boreLogGeneralInfo);
        lengthOfBoreBackButton.setOnClickListener(boreLogGeneralInfo);
        dateBackButton.setOnClickListener(boreLogGeneralInfo);

        //Get the current date to match the DatePicker later
        Calendar calendar = Calendar.getInstance();
        DATE = new MyMonthGetter().monthToString(calendar.get(Calendar.MONTH))
                + "-" + calendar.get(Calendar.DAY_OF_MONTH)
                + "-" + calendar.get(Calendar.YEAR);

        //Mock BoreLog instantiate and initialize
        mockBoreLog = new BoreLog(CUSTOMER, CONDUIT, LOCATION, LENGTH_OF_BORE, DATE);
        mockBoreLog.init();
    }

    /**
     =======================================================================================
      Sanity check
     =======================================================================================
    */
    @SmallTest
    public void testAllConditions_Preconditions() {
        //Activity & Fragment
        assertNotNull("Bore Logger is not null", boreLogger);
        assertNotNull("Bore Logger Action Bar is not null", boreLoggerActionBar);
        assertNotNull("Bore Logger Fragment Manager is not null", fragmentManager);
        assertNotNull("New Bore Log Button is not null", newBoreLogButton);
        assertNotNull("Bore Log General Info is not null", boreLogGeneralInfo);
        assertNotNull("BoreLogGeneralInfo.BoreLogGeneralInfoFragmentInteractionListener is not null",
                boreLogGeneralInfoFragmentListener);
        //Inputs
        assertNotNull("Customer EditText is not null", customerEditText);
        assertNotNull("Conduit EditText is not null", conduitEditText);
        assertNotNull("Location EditText is not null", locationEditText);
        assertNotNull("Length of Bore EditText is not null", lengthOfBoreEditText);
        assertNotNull("DatePicker is not null", datePicker);
        //Layouts
        assertNotNull("Customer LinearLayout is not null", customerLinearLayout);
        assertNotNull("Conduit LinearLayout is not null", conduitLinearLayout);
        assertNotNull("Location LinearLayout is not null", locationLinearLayout);
        assertNotNull("Length of Bore LinearLayout is not null", lengthOfBoreLinearLayout);
        assertNotNull("DatePicker LinearLayout is not null", dateLinearLayout);
        //TextViews
        assertNotNull("Title TextView is not null", titleTextView);
        assertNotNull("SubTitle TextView is not null", subTitleTextView);
        assertNotNull("Customer TextView is not null", customerTextView);
        assertNotNull("Conduit TextView is not null", conduitTextView);
        assertNotNull("Location TextView is not null", locationTextView);
        assertNotNull("Length of Bore TextView is not null", lengthOfBoreTextView);
        assertNotNull("Date TextView is not null", dateTextView);
        //Buttons
        assertNotNull("Done Button is not null", doneButton);
        assertNotNull("Conduit Back Button is not null", conduitBackButton);
        assertNotNull("Location Back Button is not null", locationBackButton);
        assertNotNull("Length of Bore Button is not null", lengthOfBoreBackButton);
        assertNotNull("Date Button is not null", dateBackButton);
        //BoreLogGeneralInfo instance of Bore Log
        assertNotNull("BoreLogGeneralInfo Fragment BoreLog instance is not null", boreLogGeneralInfo.getBoreLog());
        assertNull("BoreLogGeneralInfo Fragment BoreLog instance getCustomer() is null", boreLogGeneralInfo.getBoreLog().getCustomer());
        assertNull("BoreLogGeneralInfo Fragment BoreLog instance getConduit() is null", boreLogGeneralInfo.getBoreLog().getConduit());
        assertNull("BoreLogGeneralInfo Fragment BoreLog instance getLocation() is null", boreLogGeneralInfo.getBoreLog().getLocation());
        assertNull("BoreLogGeneralInfo Fragment BoreLog instance getLengthOfBore() is null", boreLogGeneralInfo.getBoreLog().getLengthOfBore());
        assertNull("BoreLogGeneralInfo Fragment BoreLog instance getDate() is null", boreLogGeneralInfo.getBoreLog().getDate());
        //Mock BoreLog
        assertNotNull("MockBoreLog instance of BoreLog is not null", mockBoreLog);
        assertEquals("MockBoreLog Customer is not null", CUSTOMER, mockBoreLog.getCustomer());
        assertEquals("MockBoreLog Conduit is not null", CONDUIT, mockBoreLog.getConduit());
        assertEquals("MockBoreLog Location is not null", LOCATION, mockBoreLog.getLocation());
        assertEquals("MockBoreLog LengthOfBore is not null", LENGTH_OF_BORE, mockBoreLog.getLengthOfBore());
        assertEquals("MockBoreLog Date is not null", DATE, mockBoreLog.getDate());
        assertNotNull("MockBoreLog TextFilePath value is not null", mockBoreLog.getTextFilePath());
        assertNotNull("MockBoreLog MyBoreLogTextPrinter is not null", mockBoreLog.getMyBoreLogTextPrinter());
    }

    /**
     =======================================================================================
      General Info EditText
     =======================================================================================
    */
    @FlakyTest(tolerance = 2)
    public void testCreatingANewBoreLog_BoreLogGeneralInfoFragment() {
        //Customer EditText
        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_customerEditText))
                .perform(ViewActions.typeText(mockBoreLog.getCustomer()));
        assertEquals(CUSTOMER, customerEditText.getText().toString());
        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_customerEditText))
            .perform(ViewActions.pressImeActionButton());

        //Conduit EditText
        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_conduitEditText))
                .perform(ViewActions.typeText(mockBoreLog.getConduit()));
        assertEquals(CONDUIT, conduitEditText.getText().toString());
        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_conduitEditText))
                .perform(ViewActions.pressImeActionButton());

        //Location EditText
        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_locationEditText))
                .perform(ViewActions.typeText(mockBoreLog.getLocation()));
        assertEquals(LOCATION, locationEditText.getText().toString());
        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_locationEditText))
                .perform(ViewActions.pressImeActionButton());

        //Length Of Bore EditText
        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_lengthOfBoreEditText))
                .perform(ViewActions.typeText(mockBoreLog.getLengthOfBore()));
        assertEquals(LENGTH_OF_BORE, lengthOfBoreEditText.getText().toString());
        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_lengthOfBoreEditText))
                .perform(ViewActions.pressImeActionButton(), ViewActions.closeSoftKeyboard());

        View decorView = boreLogger.getWindow().getDecorView();
        ViewGroup.LayoutParams layoutParams = doneButton.getLayoutParams();
        assertNotNull("Button's layout params are not null", layoutParams);
        assertEquals(View.VISIBLE, doneButton.getVisibility());

        int x = (int)doneButton.getX();
        int y = (int)doneButton.getY();
        boreLogger.findViewById(R.id.container).scrollTo(x, y);

        ViewAsserts.assertOnScreen(decorView, doneButton);

        Espresso.onView(ViewMatchers.withId(R.id.generalInfo_doneButton))
                .perform(ViewActions.closeSoftKeyboard(), ViewActions.click());

        //Testing the window scroll to top
        boreLogger.findViewById(R.id.container).scrollTo(0, 0);

        //Synchronize date property
        mockBoreLog.setDate(boreLogGeneralInfo.getBoreLog().getDate());

        //Assertions on the generated Bore Log
        assertEquals(mockBoreLog.getCustomer(), boreLogGeneralInfo.getBoreLog().getCustomer());
        assertEquals(mockBoreLog.getConduit(), boreLogGeneralInfo.getBoreLog().getConduit());
        assertEquals(mockBoreLog.getLocation(), boreLogGeneralInfo.getBoreLog().getLocation());
        assertEquals(mockBoreLog.getLengthOfBore(), boreLogGeneralInfo.getBoreLog().getLengthOfBore());
        assertEquals(mockBoreLog.getDate(), boreLogGeneralInfo.getBoreLog().getDate());
    }

    //
    @FlakyTest(tolerance = 2)
    public void testFileExists_PostCreatingANewBoreLog() {

        mockBoreLog.init();
        assertNotNull("mockBoreLog.getTextFilePath()", mockBoreLog.getTextFilePath());
        String path = mockBoreLog.getTextFilePath();
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


    /**
     =======================================================================================
      Garbage
     =======================================================================================
    */
    //Persist created Bore Log
//    boreLogResult = new BoreLog(boreLogGeneralInfo.getBoreLog().getCustomer(),
//    boreLogGeneralInfo.getBoreLog().getConduit(), boreLogGeneralInfo.getBoreLog().getLocation(),
//    boreLogGeneralInfo.getBoreLog().getLengthOfBore(), boreLogGeneralInfo.getBoreLog().getDate());
//
//    //Assert the equality of properties between the persisted boreLogResult and the Bore Log created
//    assertEquals(boreLogResult.getCustomer(), boreLogGeneralInfo.getBoreLog().getCustomer());
//    assertEquals(boreLogResult.getConduit(), boreLogGeneralInfo.getBoreLog().getConduit());
//    assertEquals(boreLogResult.getLocation(), boreLogGeneralInfo.getBoreLog().getLocation());
//    assertEquals(boreLogResult.getLengthOfBore(), boreLogGeneralInfo.getBoreLog().getLengthOfBore());
//    assertEquals(boreLogResult.getDate(), boreLogGeneralInfo.getBoreLog().getDate());

}
