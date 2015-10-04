package xml.xpath;

import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import javax.xml.namespace.NamespaceContext;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.*;
import java.io.IOException;
import java.net.URL;

/**
 * A class for evaluating XPathExpressions against an XML document
 */
public class MyXPath {
    private URL xmlUrl;
    private XPathFactory xPathFactory;
    private XPathExpression xPathExpression;
    private XPath xPath;
    private InputSource inputSource;
    private String xPathString, result;

    /**
     * @param xmlUrl The XML document against which to execute XPath expressions
     */
    public MyXPath(URL xmlUrl) {
        this.xmlUrl = xmlUrl;
        this.configure();
    }

    /**
     * @param xmlUrl The XML document against which to execute XPath expressions
     * @param xPathString A string XPath expression to execute against the XML
     *                        document
     */
    public MyXPath(URL xmlUrl, String xPathString) {
        this.xmlUrl = xmlUrl;
        this.xPathString = xPathString;
        this.configure();
    }

    /**
     * Configures the XPath prior to executing the expression
     */
    private void configure() {
        this.xPathFactory = XPathFactory.newInstance();
        this.xPath = this.xPathFactory.newXPath();
        try {
            this.inputSource = new InputSource(this.getXmlUrl().openStream());
        } catch (IOException e) {
            System.out.println("IOException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        }
    }

    /**
     * Executes the evaluation of the current XPath expression against the
     * current XML document with the intent of obtaining a String result
     * <b>Note:</b> To evaluate with a namespace context, first call <b>setNamespaceAware()</b>
     * passing the prefix and uri of the namespace context
     * @return The result of evaluating the current XPathExpression
     * against the current XML document
     */
    public String evaluateString() {
        try {
            this.xPathExpression = this.xPath.compile(this.getXPathString());
            this.result = this.xPathExpression.evaluate(this.inputSource);
        } catch (XPathExpressionException e) {
            System.out.println("XPathExpressionException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        }
        return result;
    }

    /**
     * Evaluates the current XPath expression against the current XML document
     * with the intent of obtaining a NodeList as a result
     * <b>Note:</b> To evaluate with a namespace context, first call <b>setNamespaceAware()</b>
     * passing the prefix and uri of the namespace context
     * @return A NodeList result from evaluating the current XPath expression
     */
    public NodeList evaluateNodeList() {
        NodeList nodeList = null;
        try {
            DocumentBuilder documentBuilder = DocumentBuilderFactory.newInstance().newDocumentBuilder();
            Document document = documentBuilder.parse(this.getXmlUrl().getFile());
            nodeList = (NodeList) xPath.evaluate(this.getXPathString(), document, XPathConstants.NODESET);
        } catch (ParserConfigurationException e) {
            System.out.println("ParserConfigurationException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } catch (SAXException e) {
            System.out.println("SAXException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } catch (IOException e) {
            System.out.println("IOException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } catch (XPathExpressionException e) {
            System.out.println("XPathExpressionException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        }
        return nodeList;
    }

    public URL getXmlUrl() {
        return xmlUrl;
    }

    /**
     * @param xmlUrl The XML document to execute XPath expressions against
     */
    public void setXmlUrl(URL xmlUrl) {
        this.xmlUrl = xmlUrl;
        this.configure();
    }

    public String getXPathString() {
        return xPathString;
    }

    /**
     * This setter will reset the InputSource so that repeated evaluations
     * can be done against the XML document
     * @param xPathString The string to compile into a XPathExpression
     *                    and execute against the currently configured
     *                    XML document
     */
    public void setXPathString(String xPathString) {
        this.xPathString = xPathString;
        this.configure();
    }

    /**
     * Set the XPath object to be namespace aware with the provided context
     * @param prefix The namespace prefix
     * @param uri The namespace uri
     */
    public void setNamespaceAware(String prefix, String uri) {
        NamespaceContext namespaceContext = new MyNamespaceContext(prefix, uri);
        this.xPath.setNamespaceContext(namespaceContext);
    }

    /**
     * Creates a new instance of the XPath object effectively resetting it
     */
    public void setNamespaceUnaware() {
        this.configure();
    }

}