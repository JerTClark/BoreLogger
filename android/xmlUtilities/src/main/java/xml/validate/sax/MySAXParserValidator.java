package xml.validate.sax;

import org.xml.sax.SAXException;
import org.xml.sax.SAXNotRecognizedException;
import org.xml.sax.SAXNotSupportedException;
import xml.validate.util.Validator;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import java.io.IOException;
import java.net.URL;

public class MySAXParserValidator {
    private URL xmlUrl, schemaUrl;
    private SAXParserFactory saxParserFactory;
    private SAXParser saxParser;
    private Validator validator;

    /**
     * @param xmlUrl The XML document to validate
     * @param schemaUrl The XML Schema file against which to validate
     *                  the XML document
     */
    public MySAXParserValidator(URL xmlUrl, URL schemaUrl) {
        this.xmlUrl = xmlUrl;
        this.schemaUrl = schemaUrl;
        this.configure();
    }

    /**
     * Configure the SAXParser to validate the current URL XML document
     * against the currently set URL XML Schema file
     */
    private void configure() {
        this.saxParserFactory = SAXParserFactory.newInstance();
        this.saxParserFactory.setNamespaceAware(true);
        this.saxParserFactory.setValidating(true);
        try {
            this.saxParserFactory.setFeature("http://xml.org/sax/features/validation", true);
            this.saxParserFactory.setFeature("http://apache.org/xml/features/validation/schema", true);
            this.saxParserFactory.setFeature("http://apache.org/xml/features/validation/schema-full-checking", true);
        } catch (ParserConfigurationException e) {
            System.out.println("ParserConfigurationException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } catch (SAXNotRecognizedException e) {
            System.out.println("SAXNotRecognizedException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } catch (SAXNotSupportedException e) {
            System.out.println("SAXNotSupportedException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        }
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
            this.saxParser = this.saxParserFactory.newSAXParser();
            saxParser.setProperty("http://java.sun.com/xml/jaxp/properties/schemaLanguage",
                    "http://www.w3.org/2001/XMLSchema");
            saxParser.setProperty("http://java.sun.com/xml/jaxp/properties/schemaSource",
                    this.getSchemaUrl().getFile());
            saxParser.parse(this.getXmlUrl().getFile(), this.validator);
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
