package xml.parse.error;

import org.xml.sax.ErrorHandler;
import org.xml.sax.SAXException;
import org.xml.sax.SAXParseException;
/**
 * An overly simplistic implementation of {@link org.xml.sax.ErrorHandler}
 */
public class MyErrorHandler implements ErrorHandler {
    /**
     * Set to true if an error has occurred
     */
    boolean hasError = false;
    /**
     * The error that occurred if {@link #hasError} is true
     */
    SAXException saxException = null;

    @Override
    public void warning(SAXParseException exception) throws SAXException {
        this.hasError = true;
        this.saxException = exception;
    }
    @Override
    public void error(SAXParseException exception) throws SAXException {
        this.hasError = true;
        this.saxException = exception;
    }
    @Override
    public void fatalError(SAXParseException exception) throws SAXException {
        this.hasError = true;
        this.saxException = exception;
    }

}
