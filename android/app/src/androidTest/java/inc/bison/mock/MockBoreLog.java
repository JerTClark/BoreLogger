package inc.bison.mock;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;

import inc.bison.documents.BoreLog;
import inc.bison.my.MyMonthGetter;

public class MockBoreLog {

    public MockBoreLog() {

        BoreLog mockBoreLog;

        final String CUSTOMER = "Washington Gas", CONDUIT = "(1) 12\" Plastic",
                LOCATION = "1234 Street", LENGTH_OF_BORE = "200 LF (10\' Rods)";
        String DATE;

        String[] mockLocatesFormatted = new String[]{"Depth 1: 3\'6\"",
                "Depth 2: 4\'5\"", "Depth 3: 5\'6\" Water @ 5' 8\" Top", "Depth 4: 6\'5\"",
                "Depth 5: 5\'4\" Creek", "Depth 6: 4\'3\"", "Depth 7: 3\'2\" Station 1+35"};

        Calendar calendar = Calendar.getInstance();
        DATE = new MyMonthGetter().monthToString(calendar.get(Calendar.MONTH))
                + "-" + calendar.get(Calendar.DAY_OF_MONTH)
                + "-" + calendar.get(Calendar.YEAR);

        //Set up the mockBoreLog
        mockBoreLog = new BoreLog(CUSTOMER, CONDUIT, LOCATION, LENGTH_OF_BORE, DATE);
        mockBoreLog.init();
        mockBoreLog.setLocates(new ArrayList<String>(Arrays.asList(mockLocatesFormatted)));

    }

}
