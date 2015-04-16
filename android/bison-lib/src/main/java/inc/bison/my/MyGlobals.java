package inc.bison.my;

public class MyGlobals {

    //Replaces previously used android.os.Environment getExternalStorageDirectory().getAbsolutePath()
    private static final String SDCARD = "/storage/emulated/0";

    //-- Bundles
    public final static String TYPE = "type";
    public final static String BORE_LOG = "log";
    public final static String BORE_JOURNAL = "journal";

    //-- Documentation
    public final static String BORE_DATA_SHEET_TITLE = "Bison, Inc. Bore Data Sheet";
    public final static String CUSTOMER = "Customer: ";
    public final static String CONDUIT = "Description: ";
    public final static String LOCATION = "Location: ";
    public final static String LENGTH = "Length of Bore: ";
    public final static String DATE = "Date: ";
    public final static String LOCATES = "locates";
    public final static String BEGIN_BORE = "Begin bore";
    public final static String END_BORE = "End bore";
    public final static String EMPTY_LINE = "";
    public final static String DEPTH = "Depth ";
    public final static String PATH_TO_FILE = "path_to_file";
    public final static String BORE_JOURNAL_RECORDED_TIME = "#m#";
    public final static String DAY = "#d#", YEAR = "#y#", HOUR = "#h#", MIN = "#n#", SEC = "#s#";
    public final static String NOTE = "#N#";

    //-- File paths
    public final static String BISON_BORE_LOGGER_FOLDER =  SDCARD + "/BisonBoreLogger/";
    public final static String DATA_FOLDER = BISON_BORE_LOGGER_FOLDER + ".data/";
    public final static String JOURNAL_DATA_FOLDER = DATA_FOLDER + "journals/";
    public final static String LOG_DATA_FOLDER = DATA_FOLDER + "logs/";
    public final static String BORE_LOG_FOLDER = BISON_BORE_LOGGER_FOLDER + "BoreLogs/";
    public final static String BORE_JOURNAL_FOLDER = BISON_BORE_LOGGER_FOLDER + "BoreJournals/";
    public final static String BORE_LOG_PDF = BISON_BORE_LOGGER_FOLDER + "BoreLogsPDF/";
    public final static String[] APP_FOLDERS = {BISON_BORE_LOGGER_FOLDER, DATA_FOLDER, JOURNAL_DATA_FOLDER,
            LOG_DATA_FOLDER, BORE_LOG_FOLDER, BORE_JOURNAL_FOLDER, BORE_LOG_PDF};

    //-- Private String objects
    public static final String ENCODING = "ISO-8859-1";

    //-- Preferences
    public static boolean showDebugToasts = false;
    public static boolean startWithCustomLocateNumber = false;
    public static int initialLocateNumber = 0;

    //-- Codes
    public final static int CONTINUE_JOURNAL = 0;
    public final static int CONVERT_JOURNAL = 1;
    public final static int OPEN = 2;
    public final static int OPEN_PDF = 3;
    public final static int CONVERT_LOG_TO_PDF = 4;
    public final static int BORE_LOG_CODE = 5;//was 0
    public final static int BORE_JOURNAL_CODE = 6;//was 1
    public final static int SHARE = 7;
    public final static int SHARE_PDF = 8;

}//end MyGlobals