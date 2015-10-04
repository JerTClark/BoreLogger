package xml.validate.util;

import org.xml.sax.SAXException;
import org.xml.sax.SAXParseException;
import org.xml.sax.helpers.DefaultHandler;

public class Validator extends DefaultHandler {
    public boolean validationError = false;
    public SAXParseException saxParseException = null;

    @Override
    public void error(SAXParseException e) throws SAXException {
        validationError = true;
        saxParseException = e;
    }

    @Override
    public void warning(SAXParseException e) throws SAXException { }

    @Override
    public void fatalError(SAXParseException e) throws SAXException {
        validationError = true;
        saxParseException = e;
    }
}
