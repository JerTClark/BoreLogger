package inc.bison.borelogger;

import android.app.ActionBar;
import android.app.FragmentManager;
import android.app.Instrumentation;
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

public class LocatesFragmentTestBoreJournal extends ActivityInstrumentationTestCase2<BoreLogger> {

    //BoreLogger Activity, HomeScreen Fragment, an Interface
    private BoreLogger boreLogger;
    private ActionBar boreLoggerActionBar;
    private HomeScreen homeScreen;
    private FragmentManager fragmentManager;
    private BoreJournalGeneralInfo.BoreJournalGeneralInfoFragmentListener boreJournalGeneralInfoFragmentListener;

    //Locates Fragment
    private LocatesFragment locatesFragment;
    private ListLocatesDialog.OnUpdateLocatesListener locatesListener;
    private CheckBox crossingCheckBox, noteCheckBox = null;
    private EditText depthEditText, crossingEditText, noteEditText = null;
    private Button recordLocateButton, finishedButton = null;
    private boolean formatDepthsOn, isABoreLog = false;

    //Mock data
    private BoreJournal mockBoreJournal = null;

    private final String CUSTOMER = "Washington Gas", CONDUIT = "(1) 12\" Plastic",
            LOCATION = "1234 Street", LENGTH_OF_BORE = "200 LF (10\' Rods)";
    private String DATE;

    private String[] mockLocates = new String[]{"3 6", "4 5", "5 6", "6 5", "5 4", "4 3", "3 2"};
    private String[] mockCrossings = new String[] {"0","1","Water @ 5' 8\" Top","3","Creek","5","Station 1+35"};
    private String mockNote = "Down for an hour due to maintenance";
    private String[] mockLocatesFormatted = new String[]{"Depth 1: 3\'6\"",
            "Depth 2: 4\'5\"", "Depth 3: 5\'6\" Water @ 5' 8\" Top", "Depth 4: 6\'5\"",
            "Depth 5: 5\'4\" Creek", "Depth 6: 4\'3\"", "Depth 7: 3\'2\" Station 1+35"};

    //Must use this constructor
    public LocatesFragmentTestBoreJournal() {
        super(BoreLogger.class);
    }

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
        boreJournalGeneralInfoFragmentListener = boreLogger;

        //Get the current date to match the DatePicker later
        Calendar calendar = Calendar.getInstance();
        DATE = new MyMonthGetter().monthToString(calendar.get(Calendar.MONTH))
                + "-" + calendar.get(Calendar.DAY_OF_MONTH)
                + "-" + calendar.get(Calendar.YEAR);

        //Mock Bore Log and Bore Journal
        mockBoreJournal = new BoreJournal(CUSTOMER, LOCATION);
        mockBoreJournal.setDate(DATE);
        mockBoreJournal.init();

        //Pass the Bore Log Bundle
        boreJournalGeneralInfoFragmentListener.doneButtonClicked(mockBoreJournal);

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
     Bore Journal locates
     =======================================================================================
     */
    public void testLocatesFragment_LayoutAndViewBoreJournal() {

        //Get a reference to the decorView
        View decorView = boreLogger.getWindow().getDecorView();
        assertNotNull("LocatesFragment is not null", locatesFragment);

        //Assert LocatesFragment has a Bore Journal
        assertFalse("LocatesFragment isABoreLog should be false", locatesFragment.isABoreLog());

        //Bore Journal
        assertNotNull("LocatesFragment instance of BoreJournal is not null", locatesFragment.getBoreJournal());
        assertEquals("LocatesFragment instance of BoreJournal Customer", mockBoreJournal.getCustomer(), locatesFragment.getBoreJournal().getCustomer());
        assertEquals("LocatesFragment instance of BoreJournal Location", mockBoreJournal.getLocation(), locatesFragment.getBoreJournal().getLocation());
        assertEquals("LocatesFragment instance of BoreJournal Date", mockBoreJournal.getDate(), locatesFragment.getBoreJournal().getDate());

        //Assert the following are shown on screen
        ViewAsserts.assertOnScreen(decorView, depthEditText);
        ViewAsserts.assertOnScreen(decorView, crossingCheckBox);
        ViewAsserts.assertOnScreen(decorView, noteCheckBox);

        //Assert the following are not shown on the screen
        assertEquals("Crossing EditText should be invisible", View.GONE, crossingEditText.getVisibility());
        assertEquals("Note EditText should be invisible", View.GONE, noteEditText.getVisibility());

        //Assert that click on Crossing CheckBox shows the Crossing EditText
        Espresso.onView(ViewMatchers.withId(R.id.utility_radio_button))
                .perform(ViewActions.click());
        ViewAsserts.assertOnScreen(decorView, crossingEditText);

        //Assert that click on Note CheckBox shows the Note EditText
        Espresso.onView(ViewMatchers.withId(R.id.note_radio_button))
                .perform(ViewActions.click());
        ViewAsserts.assertOnScreen(decorView, noteEditText);

        //Assert that click on Crossing CheckBox hides the Crossing EditText
        Espresso.onView(ViewMatchers.withId(R.id.utility_radio_button))
                .perform(ViewActions.click());
        assertEquals("Crossing EditText should be invisible", View.GONE, crossingEditText.getVisibility());

        //Assert that click on Note CheckBox hides the Note EditText
        Espresso.onView(ViewMatchers.withId(R.id.note_radio_button))
                .perform(ViewActions.click());
        assertEquals("Note EditText should be invisible", View.GONE, noteEditText.getVisibility());

    }

    /**
     =======================================================================================
      Entering Locates
     =======================================================================================
    */
    @FlakyTest(tolerance = 4)
    public void testLocatesFragment_EnteringLocatesBoreJournal() {

        View decorView = boreLogger.getWindow().getDecorView();
        assertNotNull("LocatesFragment is not null", locatesFragment);
        ViewAsserts.assertOnScreen(decorView, depthEditText);

        //Enter and assertEquals on mockLocates
        for (int i = 0; i < mockLocates.length; i++) {

            decorView.scrollTo(0,0);

            Espresso.onView(ViewMatchers.withId(R.id.depth_editText))
                    .perform(ViewActions.typeText(mockLocates[i]));

            //If [i] is an even number and at least 2, enter a crossing
            if(i >= 2 && i % 2 == 0) {
                //Click the Crossing CheckBox
                Espresso.onView(ViewMatchers.withId(R.id.utility_radio_button))
                        .perform(ViewActions.click());
                //Enter the crossing
                ViewAsserts.assertOnScreen(decorView, crossingEditText);
                Espresso.onView(ViewMatchers.withId(R.id.utility_editText))
                        .perform(ViewActions.typeText(mockCrossings[i]));
                pause(1000);
            }

            //Enter a note
            if( i == 3 ) {
                Espresso.onView(ViewMatchers.withId(R.id.note_radio_button))
                        .perform(ViewActions.click());
                Espresso.onView(ViewMatchers.withId(R.id.note_editText))
                        .perform(ViewActions.typeText(mockNote));
                pause(1000);
            }

            int x = (int) recordLocateButton.getX();
            int y = (int) recordLocateButton.getY();
            decorView.scrollTo(x, y);

            Espresso.onView(ViewMatchers.withId(R.id.enter_button))
                    .perform(ViewActions.click());

            assertTrue("Locate for " + mockLocates[i], locatesFragment.getBoreJournal().getLocates().get(i).startsWith(mockLocatesFormatted[i]));
        }

        //Loop through the entered locates and assert their values were recorded as expected
        for(int i = 0; i < mockLocates.length; i++) {
            assertTrue("Locate for " + mockLocates[i], locatesFragment.getBoreJournal().getLocates().get(i).startsWith(mockLocatesFormatted[i]));
            if( i == 3 ) {
                assertTrue("Bore Journal @ index 3 contains the entered note", locatesFragment.getBoreJournal().getLocates().get(3).contains(mockNote));
            }
        }

        //Clean up
        assertNotNull("mockBoreJournal.getTextFilePath()", mockBoreJournal.getPathToFile());
        String path = mockBoreJournal.getPathToFile();
        File fileToCheck = new File(path);
        assertTrue("Checking for the BoreJournal file", fileToCheck.exists());
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
    public void testLocatesFragment_SanityCheck() {
        //Activity & Fragment
        assertNotNull("Bore Logger is not null", boreLogger);
        assertNotNull("Bore Logger Action Bar is not null", boreLoggerActionBar);
        assertNotNull("Bore Logger Fragment Manager is not null", fragmentManager);
        assertNotNull("BoreJournalGeneralInfo.BoreJournalGeneralInfoFragmentInteractionListener is not null",
                boreJournalGeneralInfoFragmentListener);

        //Mock Bore Journal
        assertNotNull("MockBoreJournal instance of BoreJournal is not null", mockBoreJournal);
        assertEquals("MockBoreJournal Customer", CUSTOMER, mockBoreJournal.getCustomer());
        assertEquals("MockBoreJournal Location", LOCATION, mockBoreJournal.getLocation());
        assertEquals("MockBoreJournal Date", DATE, mockBoreJournal.getDate());
        assertNotNull("MockBoreJournal TextFilePath value is not null", mockBoreJournal.getPathToFile());
        assertNotNull("MockBoreJournal BoreJournaler", mockBoreJournal.getMyBoreJournaler());

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