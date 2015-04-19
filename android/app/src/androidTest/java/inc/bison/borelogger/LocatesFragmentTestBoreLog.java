package inc.bison.borelogger;

import android.app.ActionBar;
import android.app.FragmentManager;
import android.support.test.InstrumentationRegistry;
import android.support.test.espresso.Espresso;
import android.support.test.espresso.action.ViewActions;
import android.support.test.espresso.matcher.ViewMatchers;
import android.test.ActivityInstrumentationTestCase2;
import android.test.FlakyTest;
import android.test.ViewAsserts;
import android.test.suitebuilder.annotation.SmallTest;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;

import java.io.File;
import java.util.Calendar;

import inc.bison.dialogs.ListLocatesDialog;
import inc.bison.documents.BoreJournal;
import inc.bison.documents.BoreLog;
import inc.bison.my.MyMonthGetter;

public class LocatesFragmentTestBoreLog extends ActivityInstrumentationTestCase2<BoreLogger> {

    //BoreLogger Activity, HomeScreen Fragment, an Interface
    private BoreLogger boreLogger;
    private ActionBar boreLoggerActionBar;
    private HomeScreen homeScreen;
    private FragmentManager fragmentManager;
    private BoreLogGeneralInfo.BoreLogGeneralInfoFragmentListener boreLogGeneralInfoFragmentListener;

    //Locates Fragment
    private LocatesFragment locatesFragment;
    private ListLocatesDialog.OnUpdateLocatesListener locatesListener;
    private CheckBox crossingCheckBox, noteCheckBox = null;
    private EditText depthEditText, crossingEditText, noteEditText = null;
    private Button recordLocateButton, finishedButton = null;
    private boolean formatDepthsOn, isABoreLog = false;

    //Mock data
    private BoreLog mockBoreLog;

    private final String CUSTOMER = "Washington Gas", CONDUIT = "(1) 12\" Plastic",
            LOCATION = "1234 Street", LENGTH_OF_BORE = "200 LF (10\' Rods)";
    private String DATE;
    private String[] mockLocates = new String[]{"3 6", "4 5", "5 6", "6 5", "5 4", "4 3", "3 2"};
    private String[] mockCrossings = new String[] {"0","1","Water @ 5' 8\" Top","3","Creek","5","Station 1+35"};
    private String[] mockLocatesFormatted = new String[]{"Depth 1: 3\'6\"",
                "Depth 2: 4\'5\"", "Depth 3: 5\'6\" Water @ 5' 8\" Top", "Depth 4: 6\'5\"",
                "Depth 5: 5\'4\" Creek", "Depth 6: 4\'3\"", "Depth 7: 3\'2\" Station 1+35"};


    //Must use this constructor
    public LocatesFragmentTestBoreLog() {
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
        injectInstrumentation(InstrumentationRegistry.getInstrumentation());
        setActivityInitialTouchMode(true);

        //Activity
        boreLogger = getActivity();
        //Action Bar
        boreLoggerActionBar = boreLogger.getActionBar();
        //Fragment stuff
        fragmentManager = boreLogger.getFragmentManager();
        homeScreen = (HomeScreen)fragmentManager.findFragmentById(R.id.container);
        //Interfaces
        boreLogGeneralInfoFragmentListener = boreLogger;

        //Get the current date to match the DatePicker later
        Calendar calendar = Calendar.getInstance();
        DATE = new MyMonthGetter().monthToString(calendar.get(Calendar.MONTH))
                + "-" + calendar.get(Calendar.DAY_OF_MONTH)
                + "-" + calendar.get(Calendar.YEAR);

        //Mock Bore Log and Bore Journal
        mockBoreLog = new BoreLog(CUSTOMER, CONDUIT, LOCATION, LENGTH_OF_BORE, DATE);
        mockBoreLog.init();

        //Pass the Bore Log Bundle
        boreLogGeneralInfoFragmentListener.doneButtonClicked(mockBoreLog);

        //Pause for one second
        pause(1000);

        //Locates Fragment
        locatesFragment = (LocatesFragment) fragmentManager.findFragmentById(R.id.container);

        //EditTexts
        depthEditText = (EditText) locatesFragment.getActivity().findViewById(R.id.depth_editText);
        crossingEditText = (EditText) locatesFragment.getActivity().findViewById(R.id.utility_editText);
        noteEditText = (EditText) locatesFragment.getActivity().findViewById(R.id.note_editText);
        //CheckBoxes
        crossingCheckBox = (CheckBox) locatesFragment.getActivity().findViewById(R.id.utility_radio_button);
        noteCheckBox = (CheckBox) locatesFragment.getActivity().findViewById(R.id.note_radio_button);
        //Buttons
        recordLocateButton = (Button) locatesFragment.getActivity().findViewById(R.id.enter_button);
        finishedButton = (Button) locatesFragment.getActivity().findViewById(R.id.finish_button);
        //Interface
        locatesListener = locatesFragment;

    }

    /**
     =======================================================================================
      Bore Log locates
     =======================================================================================
    */
    @FlakyTest(tolerance = 2)
    public void testLocatesFragment_LayoutAndView() {

        //Get a reference to the decorView
        View decorView = boreLogger.getWindow().getDecorView();

        //Sanity checks
        assertNotNull("LocatesFragment is not null", locatesFragment);
        assertTrue("LocatesFragment boolean isABoreLog", locatesFragment.isABoreLog());
        assertNotNull("The LocateFragment's Bore Log is not null", locatesFragment.getBoreLog());

        //Assert that the fragment receives the Bore Log
        assertEquals("LocatesFragment instance of BoreLog Customer", mockBoreLog.getCustomer(), locatesFragment.getBoreLog().getCustomer());
        assertEquals("LocatesFragment instance of BoreLog Conduit", mockBoreLog.getConduit(), locatesFragment.getBoreLog().getConduit());
        assertEquals("LocatesFragment instance of BoreLog Location", mockBoreLog.getLocation(), locatesFragment.getBoreLog().getLocation());
        assertEquals("LocatesFragment instance of BoreLog LengthOfBore", mockBoreLog.getLengthOfBore(), locatesFragment.getBoreLog().getLengthOfBore());
        assertEquals("LocatesFragment instance of BoreLog Date", mockBoreLog.getDate(), locatesFragment.getBoreLog().getDate());

        //Ensure that the soft keyboard is closed
        Espresso.onView(ViewMatchers.withId(R.id.container))
                .perform(ViewActions.closeSoftKeyboard());

        //Assert the following are shown on screen
        ViewAsserts.assertOnScreen(decorView, depthEditText);
        ViewAsserts.assertOnScreen(decorView, crossingCheckBox);

        //Assert the following are not shown on the screen
        assertEquals("Crossing EditText should be invisible", View.GONE, crossingEditText.getVisibility());
        assertEquals("Note EditText should be invisible", View.GONE, noteEditText.getVisibility());
        assertEquals("Note CheckBox should be invisible", View.GONE, noteCheckBox.getVisibility());

        //Assert that click on Crossing CheckBox shows the Crossing EditText
        Espresso.onView(ViewMatchers.withId(R.id.utility_radio_button))
                .perform(ViewActions.click());
        ViewAsserts.assertOnScreen(decorView, crossingEditText);

        //Assert that click on Crossing CheckBox hides the Crossing EditText
        Espresso.onView(ViewMatchers.withId(R.id.utility_radio_button))
                .perform(ViewActions.click());
        assertEquals("Crossing EditText should be invisible", View.GONE, crossingEditText.getVisibility());

    }

    public void testLocatesFragment_EnteringLocates() {

        View decorView = boreLogger.getWindow().getDecorView();
        assertNotNull("LocatesFragment is not null", locatesFragment);
        ViewAsserts.assertOnScreen(decorView, depthEditText);

        //Enter and assertEquals on mockLocates
        for (int i = 0; i < mockLocates.length; i++) {
            Espresso.onView(ViewMatchers.withId(R.id.depth_editText))
                    .perform(ViewActions.typeText(mockLocates[i]));

            //If [i] is an even number and at least 2, enter a crossing
            if(i >= 2 && i % 2 == 0) {
                //Click the Crossing CheckBox
                Espresso.onView(ViewMatchers.withId(R.id.utility_radio_button))
                        .perform(ViewActions.click());
                //Enter the
                ViewAsserts.assertOnScreen(decorView, crossingEditText);
                Espresso.onView(ViewMatchers.withId(R.id.utility_editText))
                        .perform(ViewActions.typeText(mockCrossings[i]));
            }

            Espresso.onView(ViewMatchers.withId(R.id.enter_button))
                    .perform(ViewActions.click());

            assertEquals("Locate for " + mockLocates[i], mockLocatesFormatted[i], locatesFragment.getBoreLog().getLocates().get(i));
        }

        //Loop through the entered locates and assert their values were recorded as expected
        for(int i = 0; i < mockLocates.length; i++) {
            assertEquals("Locate for " + mockLocates[i], mockLocatesFormatted[i], locatesFragment.getBoreLog().getLocates().get(i));
        }

        //Clean up
        assertNotNull("mockBoreLog.getTextFilePath()", mockBoreLog.getTextFilePath());
        String path = mockBoreLog.getTextFilePath();
        File fileToCheck = new File(path);
        assertTrue("Checking for the BoreLog file", fileToCheck.exists());
        if (fileToCheck.exists()) {
            assertTrue("Deleted the file", fileToCheck.delete());
        }

    }

    /**
     =======================================================================================
      Sanity check
     =======================================================================================
    */
    @SmallTest
    public void testLocatesFragment_allPreconditions() {
        //Activity & Fragment
        assertNotNull("Bore Logger is not null", boreLogger);
        assertNotNull("Bore Logger Action Bar is not null", boreLoggerActionBar);
        assertNotNull("Bore Logger Fragment Manager is not null", fragmentManager);
        assertNotNull("BoreLogGeneralInfo.BoreLogGeneralInfoFragmentInteractionListener is not null",
                boreLogGeneralInfoFragmentListener);

        //Mock Bore Log
        assertNotNull("MockBoreLog instance of BoreLog is not null", mockBoreLog);
        assertEquals("MockBoreLog Customer", CUSTOMER, mockBoreLog.getCustomer());
        assertEquals("MockBoreLog Conduit", CONDUIT, mockBoreLog.getConduit());
        assertEquals("MockBoreLog Location", LOCATION, mockBoreLog.getLocation());
        assertEquals("MockBoreLog LengthOfBore", LENGTH_OF_BORE, mockBoreLog.getLengthOfBore());
        assertEquals("MockBoreLog Date", DATE, mockBoreLog.getDate());
        assertNotNull("MockBoreLog TextFilePath value is not null", mockBoreLog.getTextFilePath());
        assertNotNull("MockBoreLog MyBoreLogTextPrinter is not null", mockBoreLog.getMyBoreLogTextPrinter());

        //LocatesFragment
        assertNotNull("LocatesFragment is not null", locatesFragment);
        assertNotNull("ListLocatesDialog.OnUpdateLocateListener is not null", locatesListener);
        assertNotNull("Crossing CheckBox is not null", crossingCheckBox);
        assertNotNull("Note CheckBox is not null", noteCheckBox);
        assertNotNull("Depth EditText is not null", depthEditText);
        assertNotNull("Crossing EditText is not null", crossingEditText);
        assertNotNull("Note EditText is not null", noteEditText);
        assertNotNull("RecordLocate Button is not null", recordLocateButton);
        assertNotNull("Finished Button is not null", finishedButton);
        assertNotNull("boolean formatDepthsOn is not null", formatDepthsOn);
        assertNotNull("boolean isABoreLog is not null", isABoreLog);

    }

    /**
     * Pauses execution for a specified time
     * @param milliseconds {int} the amount of time to pause execution in milliseconds
     */
    public void pause(int milliseconds) {
        try {
            Thread.sleep(milliseconds);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}