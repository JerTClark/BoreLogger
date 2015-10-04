package xml.parse.sax;

import junit.framework.TestCase;
import xml.resources.XmlResource;

import java.util.ArrayList;

public class TestMySAXParser extends TestCase {
    MySAXParser mySAXParser;
    ArrayList<MySAXParseResult> results = new ArrayList<MySAXParseResult>();

    public void setUp() {
        this.mySAXParser = new MySAXParser(XmlResource.BORELOG.getResource());
        this.results = this.mySAXParser.parseForResults();
    }
    /**
     * This test is dependent on the user's implementation of the DefaultHandler
     */
    public void testWeObtainResults() {
        assertNotNull(this.results);
        assertTrue(!this.results.isEmpty());
    }
}
