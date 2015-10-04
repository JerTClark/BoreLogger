package xml.parse.stax;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.net.URL;

/**
 * An StAX Parser implementation using the StAX Cursor API
 */
public class MyStAXCursorParser {
    private URL xmlUrl;
    private XMLInputFactory xmlInputFactory;
    private InputStream inputStream;
    private XMLStreamReader xmlStreamReader;

    /**
     * @param url The XML document to parse
     */
    public MyStAXCursorParser(URL url) {
        this.xmlUrl = url;
        this.configure();
    }

    /**
     * Configures the XMLStreamReader with the assigned URL XML document
     */
    private void configure() {
        this.xmlInputFactory = XMLInputFactory.newInstance();
        try {
            this.inputStream = new FileInputStream(this.getXmlUrl().getFile());
            this.xmlStreamReader = this.xmlInputFactory.createXMLStreamReader(this.inputStream);
        } catch (FileNotFoundException e) {
            System.out.println("FileNotFoundException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } catch (XMLStreamException e) {
            System.out.println("XMLStreamException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        }
    }

    /**
     * Parses the currently configured URL XML document
     */
    public void parse() {
        try {
            while(this.xmlStreamReader.hasNext()) {
                int event = this.xmlStreamReader.next();
                //TODO do something with the event
            }
        } catch (XMLStreamException e) {
            System.out.println("XMLStreamException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        }
    }

    public URL getXmlUrl() {
        return xmlUrl;
    }

    public void setXmlUrl(URL xmlUrl) {
        this.xmlUrl = xmlUrl;
        this.configure();
    }

}
