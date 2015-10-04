package xml.parse.stax;

import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.events.XMLEvent;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.net.URL;

/**
 * A StAX Parser implementation utilizing the Iterator API
 */
public class MyStAXIteratorParser {
    private URL xmlUrl;
    private XMLEventReader xmlEventReader;
    private XMLInputFactory xmlInputFactory;
    private InputStream inputStream;

    /**
     * @param url The XML document to parse
     */
    public MyStAXIteratorParser(URL url) {
        this.xmlUrl = url;
        this.configure();
    }

    /**
     * Configures the XMLEventReader with the currently assigned URL XML document
     */
    private void configure() {
        this.xmlInputFactory = XMLInputFactory.newInstance();
        try {
            this.inputStream = new FileInputStream(this.getXmlUrl().getFile());
            this.xmlEventReader = this.xmlInputFactory.createXMLEventReader(this.inputStream);
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
            while(this.xmlEventReader.hasNext()) {
                XMLEvent xmlEvent = this.xmlEventReader.nextEvent();
                int eventType = xmlEvent.getEventType();
                //TODO do something with xmlEvent
            }
        } catch (XMLStreamException e) {
            System.out.println("XMLStreamException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } finally {
            if(this.xmlEventReader != null) {
                try {
                    this.xmlEventReader.close();
                } catch (XMLStreamException e) {
                    System.out.println("XMLStreamException: " + e.getMessage());
                    System.out.println("Caused by: " + e.getCause());
                }
            }
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
