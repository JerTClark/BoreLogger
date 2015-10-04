package xml.parse.util;

import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLStreamConstants;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import javax.xml.stream.events.XMLEvent;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * A helper class for handling the processing of events and XMLEvent types whose
 * int value correspond to an <b>XMLStreamConstants</b> constant
 */
public class MyXMLStreamProcessor {
    private XMLStreamReader xmlStreamReader = null;
    private int eventType;

    public MyXMLStreamProcessor() {}

    /**
     * Instantiate an instance with an XMLStreamReader
     */
    public MyXMLStreamProcessor(XMLStreamReader xmlStreamReader) {
        this.xmlStreamReader = xmlStreamReader;
    }

    public XMLStreamReader getXmlStreamReader() {
        return xmlStreamReader;
    }

    public void setXmlStreamReader(XMLStreamReader xmlStreamReader) {
        this.xmlStreamReader = xmlStreamReader;
    }

    public HashMap<String, String> getEventsOfType(int typeDesired) {
        HashMap<String, String> events = new HashMap<>();
        try {
            while (this.getXmlStreamReader().hasNext()) {
                int eventType = this.getXmlStreamReader().getEventType();
                if(eventType == typeDesired) {
                    events.put("", "");
                }
            }
        } catch (XMLStreamException e) {
            System.out.println("XMLStreamException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        }
        return events;
    }

    public void process(int event) {
        switch (event) {
            case XMLStreamConstants.ATTRIBUTE:
                System.out.println(event + " = ATTRIBUTE");
                break;
            case XMLStreamConstants.CDATA:
                System.out.println(event + " = CDATA");
                break;
            case XMLStreamConstants.CHARACTERS:
                System.out.println(event + " = CHARACTERS");
                break;
            case XMLStreamConstants.COMMENT:
                System.out.println(event + " = COMMENT");
                break;
            case XMLStreamConstants.DTD:
                System.out.println(event + " = DTD");
                break;
            case XMLStreamConstants.END_DOCUMENT:
                System.out.println(event + " = END_DOCUMENT");
                break;
            case XMLStreamConstants.END_ELEMENT:
                System.out.println(event + " = END_ELEMENT");
                break;
            case XMLStreamConstants.ENTITY_DECLARATION:
                System.out.println(event + " = ENTITY_DECLARATION");
                break;
            case XMLStreamConstants.ENTITY_REFERENCE:
                System.out.println(event + " = ENTITY_REFERENCE");
                break;
            case XMLStreamConstants.NAMESPACE:
                System.out.println(event + " = NAMESPACE");
                break;
            case XMLStreamConstants.NOTATION_DECLARATION:
                System.out.println(event + " = NOTATION_DECLARATION");
                break;
            case XMLStreamConstants.PROCESSING_INSTRUCTION:
                System.out.println(event + " = PROCESSING_INSTRUCTION");
                break;
            case XMLStreamConstants.SPACE:
                System.out.println(event + " = SPACE");
                break;
            case XMLStreamConstants.START_DOCUMENT:
                System.out.println(event + " = START_DOCUMENT");
                break;
            case XMLStreamConstants.START_ELEMENT:
                System.out.println(event + " = START_ELEMENT");
                break;
            default:
                System.out.println("Unhandled event value: " + event);
        }
    }

}
