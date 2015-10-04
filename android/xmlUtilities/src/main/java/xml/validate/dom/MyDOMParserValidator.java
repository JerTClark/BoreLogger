package xml.validate.dom;

import org.xml.sax.SAXException;
import xml.validate.util.Validator;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.net.URL;

/**
 * Uses an implementation of DOMParser to validate an XML document
 * against an XML Schema
 */
public class MyDOMParserValidator {
    private URL xmlUrl, schemaUrl;
    private DocumentBuilderFactory documentBuilderFactory;
    private DocumentBuilder documentBuilder;
    private Validator validator;

    /**
     * @param xmlUrl The XML document to validate
     * @param schemaUrl The XML Schema file against which to validate
     *                  the XML document
     */
    public MyDOMParserValidator(URL xmlUrl, URL schemaUrl) {
        this.xmlUrl = xmlUrl;
        this.schemaUrl = schemaUrl;
        this.configure();
    }

    /**
     * Configures the DocumentBuilderFactory to validate the current URL XML
     * document using the currently set URL XML Schema document
     */
    private void configure() {
        this.documentBuilderFactory = DocumentBuilderFactory.newInstance();
        this.documentBuilderFactory.setNamespaceAware(true);
        this.documentBuilderFactory.setValidating(true);
        this.documentBuilderFactory.setAttribute(
                "http://java.sun.com/xml/jaxp/properties/schemaLanguage",
                "http://www.w3.org/2001/XMLSchema");
        this.documentBuilderFactory.setAttribute("http://java.sun.com/xml/jaxp/properties/schemaSource",
                this.getSchemaUrl().getFile());
    }

    /**
     * @return a boolean indicating that the currently configured URL XML document
     * is a <b>valid</b> instance of the currently configured URL XML Schema document
     * <b>true</b> if it is a valid instance
     * <b>false</b> if it is not
     */
    public boolean isValidInstance() {
        this.validator = new Validator();
        try {
            this.documentBuilder = this.documentBuilderFactory.newDocumentBuilder();
            this.documentBuilder.setErrorHandler(this.validator);
            this.documentBuilder.parse(this.getXmlUrl().getFile());
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
        return !this.validator.validationError;
    }

    public URL getXmlUrl() {
        return xmlUrl;
    }

    public void setXmlUrl(URL xmlUrl) {
        this.xmlUrl = xmlUrl;
    }

    public URL getSchemaUrl() {
        return schemaUrl;
    }

    public void setSchemaUrl(URL schemaUrl) {
        this.schemaUrl = schemaUrl;
    }

}
