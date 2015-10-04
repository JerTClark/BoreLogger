package xml.xslt.error;

import javax.xml.transform.ErrorListener;
import javax.xml.transform.TransformerException;

public class XsltErrorHandler implements ErrorListener {
    TransformerException e = null;

    @Override
    public void warning(TransformerException exception) throws TransformerException {
        this.e = exception;
    }

    @Override
    public void error(TransformerException exception) throws TransformerException {
        this.e = exception;
    }

    @Override
    public void fatalError(TransformerException exception) throws TransformerException {
        this.e = exception;
    }
}
