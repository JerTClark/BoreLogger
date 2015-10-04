package xml.validate.validator;

import org.xml.sax.SAXException;
import xml.validate.util.ErrorHandlerImpl;

import javax.xml.XMLConstants;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;
import javax.xml.validation.Validator;
import java.io.IOException;
import java.net.URL;

public class MyXMLValidator {
    private URL xmlUrl, schemaUrl;
    private SchemaFactory schemaFactory;
    private Schema schema;
    private StreamSource streamSource;
    private ErrorHandlerImpl errorHandler;
    private Validator validator;

    /**
     * @param xmlUrl The XML document to validate
     * @param schemaUrl The XML Schema file against which to validate
     *                  the XML document
     */
    public MyXMLValidator(URL xmlUrl, URL schemaUrl) {
        this.xmlUrl = xmlUrl;
        this.schemaUrl = schemaUrl;
        this.configure();
    }

    /**
     * Configures the validation of the current URL XML
     * document using the currently set URL XML Schema document
     */
    private void configure() {
        this.schemaFactory = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
    }

    /**
     * @return a boolean indicating that the currently configured URL XML document
     * is a <b>valid</b> instance of the currently configured URL XML Schema document
     * <b>true</b> if it is a valid instance
     * <b>false</b> if it is not
     */
    public boolean isValidInstance() {
        this.errorHandler = new ErrorHandlerImpl();
        try {
            this.schema = this.schemaFactory.newSchema(this.getSchemaUrl());
            this.validator = this.schema.newValidator();
            this.validator.setErrorHandler(this.errorHandler);
            this.streamSource = new StreamSource(this.getXmlUrl().getFile());
            this.validator.validate(this.streamSource);
        } catch (SAXException e) {
            System.out.println("SAXException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } catch (IOException e) {
            System.out.println("IOException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        }
        return !this.errorHandler.validationError;
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