package xml.parse.dom;

import org.w3c.dom.*;
import org.xml.sax.SAXException;
import xml.parse.error.MyErrorHandler;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.net.URL;

/**
 * An implementation of DOMParser for parsing an XML document represented by
 * a {@link java.net.URL} object.
 */
public class MyDOMParser {
    /**
     * A {@link java.net.URL} object representation of the XML document we intend to parse
     */
    private URL xmlUrl;
    /**
     * A {@link org.w3c.dom.Document} obtained by calling {@link #parseForDocument}
     */
    private Document document;
    /**
     * Default constructor
     * @param url the {@link java.net.URL} object representing the XML document to be parsed
     */
    public MyDOMParser(URL url) {
        this.xmlUrl = url;
    }
    /**
     * Parses the currently configured {@link java.net.URL} XML document
     * @return a {@link org.w3c.dom.Document} obtained from parsing the
     * {@link java.net.URL} representation of the XML document
     */
    public Document parseForDocument() {
        DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder documentBuilder;
        MyErrorHandler errorHandler = new MyErrorHandler();
        try {
            documentBuilder = documentBuilderFactory.newDocumentBuilder();
            documentBuilder.setErrorHandler(errorHandler);
            this.document = documentBuilder.parse(this.getXmlUrl().getFile());
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
        return this.document;
    }
    /**
     * @return the {@link java.net.URL} object representing the XML document to be parsed
     */
    public URL getXmlUrl() {
        return xmlUrl;
    }
    /**
     * @param xmlUrl the {@link java.net.URL} object representing the XML document to be parsed
     */
    public void setXmlUrl(URL xmlUrl) {
        this.xmlUrl = xmlUrl;
    }
    /**
     * @return The {@link org.w3c.dom.Document} object
     */
    public Document getDocument() {
        return document;
    }
}