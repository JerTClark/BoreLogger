package inc.bison.my;

import android.os.Environment;

import junit.framework.TestCase;

/**
 * Testing public static values exposed by the MyGlobals class
 */
public class MyGlobalsTest extends TestCase {

    //-- File paths
    final String BISON_BORE_LOGGER_FOLDER = Environment.getExternalStorageDirectory().getAbsolutePath() + "/BisonBoreLogger/";
    final String DATA_FOLDER = BISON_BORE_LOGGER_FOLDER + ".data/";
    final String JOURNAL_DATA_FOLDER = DATA_FOLDER + "journals/";
    final String LOG_DATA_FOLDER = DATA_FOLDER + "logs/";
    final String BISON_IONIC_FOLDER = Environment.getExternalStorageDirectory().getAbsolutePath() + "/BisonIonic";//The hybrid app's folder
    final String TESTING_DATA_FILE = DATA_FOLDER + "tests.txt";
    final String BORE_LOG_FOLDER = BISON_BORE_LOGGER_FOLDER + "BoreLogs/";
    final String BORE_JOURNAL_FOLDER = BISON_BORE_LOGGER_FOLDER + "BoreJournals/";
    final String BORE_LOG_PDF = BISON_BORE_LOGGER_FOLDER + "BoreLogsPDF/";

    final String[] APP_FOLDERS = {BISON_BORE_LOGGER_FOLDER, DATA_FOLDER, JOURNAL_DATA_FOLDER,
            LOG_DATA_FOLDER, BORE_LOG_FOLDER, BORE_JOURNAL_FOLDER, BORE_LOG_PDF};


    //Values passed via Bundles (ie, to LocatesFragment)
    public void testMyGlobals_Bundles() {

        //-- Bundles
        final String TYPE = "type";
        final String BORE_LOG = "log";
        final String BORE_JOURNAL = "journal";

        assertEquals("MyGlobals.TYPE", TYPE, MyGlobals.TYPE);
        assertEquals("MyGlobals.BORE_LOG", BORE_LOG, MyGlobals.BORE_LOG);
        assertEquals("MyGlobals.BORE_JOURNAL", BORE_JOURNAL, MyGlobals.BORE_JOURNAL);

    }

    //Values used in Documentation
    public void testMyGlobals_Documentation() {
        
        //-- Documentation
        final String BORE_DATA_SHEET_TITLE = "Bison, Inc. Bore Data Sheet";
        final String CUSTOMER = "Customer: ";
        final String CONDUIT = "Description: ";
        final String LOCATION = "Location: ";
        final String LENGTH = "Length of Bore: ";
        final String DATE = "Date: ";
        final String LOCATES = "locates";
        final String BEGIN_BORE = "Begin bore";
        final String END_BORE = "End bore";
        final String EMPTY_LINE = "";
        final String DEPTH = "Depth ";
        final String PATH_TO_FILE = "path_to_file";
        final String BORE_JOURNAL_RECORDED_TIME = "#m#";
        final String DAY = "#d#", YEAR = "#y#", HOUR = "#h#", MIN = "#n#", SEC = "#s#";
        final String NOTE = "#N#";

        //-- Bore Log properties
        assertEquals("MyGlobals.CUSTOMER", CUSTOMER, MyGlobals.CUSTOMER);
        assertEquals("MyGlobals.CONDUIT", CONDUIT, MyGlobals.CONDUIT);
        assertEquals("MyGlobals.LOCATION", LOCATION, MyGlobals.LOCATION);
        assertEquals("MyGlobals.LENGTH", LENGTH, MyGlobals.LENGTH);
        assertEquals("MyGlobals.DATE", DATE, MyGlobals.DATE);
        assertEquals("MyGlobals.LOCATES", LOCATES, MyGlobals.LOCATES);

        //--PDF documentation
        assertEquals("MyGlobals.BORE_DATA_SHEET_TITLE", BORE_DATA_SHEET_TITLE, MyGlobals.BORE_DATA_SHEET_TITLE);
        assertEquals("MyGlobals.BEGIN_BORE", BEGIN_BORE, MyGlobals.BEGIN_BORE);
        assertEquals("MyGlobals.END_BORE", END_BORE, MyGlobals.END_BORE);
        assertEquals("MyGlobals.EMPTY_LINE", EMPTY_LINE, MyGlobals.EMPTY_LINE);
        assertEquals("MyGlobals.DEPTH", DEPTH, MyGlobals.DEPTH);

        //-- Other
        assertEquals("MyGlobals.PATH_TO_FILE", PATH_TO_FILE, MyGlobals.PATH_TO_FILE);

        //-- Bore Journal symbols
        assertEquals("MyGlobals.DAY", DAY, MyGlobals.DAY);
        assertEquals("MyGlobals.BORE_JOURNAL_RECORDED_TIME", BORE_JOURNAL_RECORDED_TIME, MyGlobals.BORE_JOURNAL_RECORDED_TIME);
        assertEquals("MyGlobals.YEAR", YEAR, MyGlobals.YEAR);
        assertEquals("MyGlobals.HOUR", HOUR, MyGlobals.HOUR);
        assertEquals("MyGlobals.MIN", MIN, MyGlobals.MIN);
        assertEquals("MyGlobals.SEC", SEC, MyGlobals.SEC);
        assertEquals("MyGlobals.NOTE", NOTE, MyGlobals.NOTE);

    }

    //File Paths, etc
    public void testMyGlobals_FilePaths() {

        assertEquals("MyGlobals.BISON_BORE_LOGGER_FOLDER", BISON_BORE_LOGGER_FOLDER, MyGlobals.BISON_BORE_LOGGER_FOLDER);
        assertEquals("MyGlobals.DATA_FOLDER", DATA_FOLDER, MyGlobals.DATA_FOLDER);
        assertEquals("MyGlobals.JOURNAL_DATA_FOLDER", JOURNAL_DATA_FOLDER, MyGlobals.JOURNAL_DATA_FOLDER);
        assertEquals("MyGlobals.LOG_DATA_FOLDER", LOG_DATA_FOLDER, MyGlobals.LOG_DATA_FOLDER);
        assertEquals("MyGlobals.TESTING_DATA_FILE", TESTING_DATA_FILE, MyGlobals.TESTING_DATA_FILE);
        assertEquals("MyGlobals.BORE_LOG_FOLDER", BORE_LOG_FOLDER, MyGlobals.BORE_LOG_FOLDER);
        assertEquals("MyGlobals.BORE_JOURNAL_FOLDER", BORE_JOURNAL_FOLDER, MyGlobals.BORE_JOURNAL_FOLDER);
        assertEquals("MyGlobals.BORE_LOG_PDF", BORE_LOG_PDF, MyGlobals.BORE_LOG_PDF);
        assertEquals("MyGlobals.BISON_IONIC_FOLDER", BISON_IONIC_FOLDER, MyGlobals.BISON_IONIC_FOLDER);

    }

    //APP_FOLDERS array
    public void testMyGlobals_AppFoldersArray() {

        for (int i = 0; i < APP_FOLDERS.length; i++) {
            assertEquals("MyGlobals.APP_FOLDERS[" + i + "]", APP_FOLDERS[i], MyGlobals.APP_FOLDERS[i]);
        }

    }

    //-- Preferences
    public void testMyGlobals_PreferencesNotNull() {

        //-- Preferences
        boolean showDebugToasts = false;
        boolean startWithCustomLocateNumber = false;
        int initialLocateNumber = 0;

        assertNotNull("MyGlobals.showDebugToasts is not null", MyGlobals.showDebugToasts);
        assertNotNull("MyGlobals.startWithCustomLocateNumber is not null", MyGlobals.startWithCustomLocateNumber);
        assertNotNull("MyGlobals.initialLocateNumber is not null", MyGlobals.initialLocateNumber);

    }

    //Codes and encodings
    public void testMyGlobals_CodesAndEncodings() {

        //-- Codes
        final String ENCODING = "ISO-8859-1";
        final int CONTINUE_JOURNAL = 0;
        final int CONVERT_JOURNAL = 1;
        final int OPEN = 2;
        final int OPEN_PDF = 3;
        final int CONVERT_LOG_TO_PDF = 4;
        final int BORE_LOG_CODE = 5;//was 0
        final int BORE_JOURNAL_CODE = 6;//was 1
        final int SHARE = 7;
        final int SHARE_PDF = 8;

        assertEquals("MyGlobals.ENCODING", ENCODING, MyGlobals.ENCODING);
        assertEquals("MyGlobals.CONTINUE_JOURNAL", CONTINUE_JOURNAL, MyGlobals.CONTINUE_JOURNAL);
        assertEquals("MyGlobals.CONVERT_JOURNAL", CONVERT_JOURNAL, MyGlobals.CONVERT_JOURNAL);
        assertEquals("MyGlobals.OPEN", OPEN, MyGlobals.OPEN);
        assertEquals("MyGlobals.OPEN_PDF", OPEN_PDF, MyGlobals.OPEN_PDF);
        assertEquals("MyGlobals.CONVERT_LOG_TO_PDF", CONVERT_LOG_TO_PDF, MyGlobals.CONVERT_LOG_TO_PDF);
        assertEquals("MyGlobals.BORE_LOG_CODE", BORE_LOG_CODE, MyGlobals.BORE_LOG_CODE);
        assertEquals("MyGlobals.BORE_JOURNAL_CODE", BORE_JOURNAL_CODE, MyGlobals.BORE_JOURNAL_CODE);
        assertEquals("MyGlobals.SHARE", SHARE, MyGlobals.SHARE);
        assertEquals("MyGlobals.SHARE_PDF", SHARE_PDF, MyGlobals.SHARE_PDF);

    }

}