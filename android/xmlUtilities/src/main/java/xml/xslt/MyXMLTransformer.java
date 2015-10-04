package xml.xslt;

import org.w3c.dom.Document;
import org.xml.sax.SAXException;
import xml.xslt.error.XsltErrorHandler;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
import java.io.File;
import java.io.IOException;
import java.net.URL;

/**
 * Transforms an XML document according to an XSLT stylesheet
 */
public class MyXMLTransformer {
    private URL xmlUrl, xsltUrl;
    private TransformerFactory transformerFactory;
    private XsltErrorHandler errorHandler;
    private Transformer transformer;
    private DocumentBuilder documentBuilder;
    private Document document;
    private DOMSource domSource;
    final String RESULT_FILE;

    /**
     * @param xmlUrl The XML document to transform
     * @param xsltUrl The XSLT stylesheet to effect the transformation
     * @param RESULT_FILE A string specifying the name of the file result of
     *                    the transformation (not the full path)
     */
    public MyXMLTransformer(URL xmlUrl, URL xsltUrl, String RESULT_FILE) {
        this.RESULT_FILE = RESULT_FILE;
        this.xsltUrl = xsltUrl;
        this.xmlUrl = xmlUrl;
        this.configure();
    }

    /**
     * Explicitly specifying the full path is not required if the XML Result document
     * is to be stored beside the XML document resource
     * @return The output file as determined from replacing the XSLT stylesheet
     * filename with that of the output file's name in a java.io.File instance
     */
    public File getOutputFile() {
        return new File(this.xmlUrl.getFile().replaceAll(new File(this.xmlUrl.getFile()).getName(), this.RESULT_FILE));
    }

    /**
     * Configures the class members prior to transforming the XML document
     */
    private void configure() {
        this.transformerFactory = TransformerFactory.newInstance();
        this.errorHandler = new XsltErrorHandler();
        try {
            this.transformer = this.transformerFactory.newTransformer(new StreamSource(this.getXsltUrl().getFile()));
            this.transformer.setErrorListener(this.errorHandler);
            this.documentBuilder = DocumentBuilderFactory.newInstance().newDocumentBuilder();
            this.document = this.documentBuilder.parse(this.getXmlUrl().getFile());
            this.domSource = new DOMSource(this.document);
        } catch (TransformerConfigurationException e) {
            System.out.println("TransformerConfigurationException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
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
    }

    /**
     * Transforms the XML document outputting the result beside the XML document
     */
    public void transform() {
        StreamResult streamResult = new StreamResult(this.getOutputFile());
        try {
            this.transformer.transform(this.domSource, streamResult);
        } catch (TransformerException e) {
            System.out.println("TransformerException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        }
    }

    public URL getXmlUrl() {
        return xmlUrl;
    }

    /**
     * This setter calls a private <b>configure()</b> method
     * If intending to set both the XSLT stylesheet and the XML document
     * use <b>setXmlUrlAndXsltUrl()</b> instead
     * @param xmlUrl The XML document to transform
     */
    public void setXmlUrl(URL xmlUrl) {
        this.xmlUrl = xmlUrl;
        this.configure();
    }

    public URL getXsltUrl() {
        return xsltUrl;
    }

    /**
     * This setter calls a private <b>configure()</b> method
     * If intending to set both the XSLT stylesheet and the XML document
     * use <b>setXmlUrlAndXsltUrl()</b> instead
     * @param xsltUrl The XSLT stylesheet to use
     */
    public void setXsltUrl(URL xsltUrl) {
        this.xsltUrl = xsltUrl;
        this.configure();
    }

    /**
     * Set <b>both</b> the XML document and XSLT stylesheet so as to avoid
     * calling <b>configure()</b> twice
     * @param xmlUrl The XML document to transform
     * @param xsltUrl The XSLT stylesheet to use
     */
    public void setXmlUrlAndXsltUrl(URL xmlUrl, URL xsltUrl) {
        this.xmlUrl = xmlUrl;
        this.xsltUrl = xsltUrl;
        this.configure();
    }

}