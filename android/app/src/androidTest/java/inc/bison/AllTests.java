package inc.bison;

import junit.framework.TestCase;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import inc.bison.borelogger.ApplicationTest;
import inc.bison.borelogger.BoreJournalGeneralInfoTest;
import inc.bison.borelogger.BoreLogGeneralInfoTest;
import inc.bison.borelogger.BoreLoggerHomeScreenFragmentTest;
import inc.bison.borelogger.LocatesFragmentTestBoreJournal;
import inc.bison.borelogger.LocatesFragmentTestBoreLog;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        ApplicationTest.class,
        BoreJournalGeneralInfoTest.class,
        BoreLogGeneralInfoTest.class,
        BoreLoggerHomeScreenFragmentTest.class,
        LocatesFragmentTestBoreJournal.class,
        LocatesFragmentTestBoreLog.class
})
public class AllTests {
}
