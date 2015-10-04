package xml.parse.sax;

import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;

/**
 * A SAX parser implementation primarily distinguished in that by default
 * it uses {@link xml.parse.sax.MySAXParserHandler} implementation of the
 * typical {@link org.xml.sax.helpers.DefaultHandler} to handle parsing in
 * a manner suiting a general interest in Elements and Text occurrences in
 * the XML document. Parsing an XML document with this class will result in
 * an {@link java.util.ArrayList} of {@link MySAXParseResult} objects in which
 * are stored the information of interest.
 */
public class MySAXParser {
    private URL xmlUrl;
    private MySAXParserHandler mySaxParserHandler;
    /**
     * Default constructor
     * @param xmlUrl The XML document to parse
     */
    public MySAXParser(URL xmlUrl) {
        this.xmlUrl = xmlUrl;
    }
    /**
     * Parses the currently configured URL XML document with the presently
     * configured settings using the default implementation of {@link xml.parse.sax.MySAXParserHandler}
     * which extends the DefaultHandler class.
     * @return a list of {@link MySAXParseResult} that results from parsing the current
     * XML document with the default {@link MySAXParserHandler} configuration.
     */
    public ArrayList<MySAXParseResult> parseForResults() {
        SAXParserFactory saxParserFactory = SAXParserFactory.newInstance();
        SAXParser saxParser = null;
        try {
            saxParser = saxParserFactory.newSAXParser();
            this.mySaxParserHandler = new MySAXParserHandler();
            saxParser.parse(this.getXmlUrl().getFile(), this.mySaxParserHandler);
        } catch (ParserConfigurationException e) {
            System.out.println("ParserConfigurationException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } catch (SAXException e) {
            System.out.println("SAXException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } catch (IOException e) {
            System.out.println("IOException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        }
        return this.mySaxParserHandler.getSaxParseResults();
    }
    /**
     * A simple getter.
     * @return a URL object pointing to the XML document we want to parse
     */
    public URL getXmlUrl() {
        return xmlUrl;
    }
    /**
     * Sets the XML document we want to parse via a URL object.
     * @param xmlUrl the URL object pointing to the XML document we want to parse
     */
    public void setXmlUrl(URL xmlUrl) {
        this.xmlUrl = xmlUrl;
    }
}