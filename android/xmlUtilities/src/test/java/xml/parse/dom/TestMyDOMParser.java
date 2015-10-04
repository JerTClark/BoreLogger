package xml.parse.dom;

import junit.framework.TestCase;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import xml.resources.XmlResource;

public class TestMyDOMParser extends TestCase {

    private MyDOMParser myDOMParser;
    private Document document;

    public void setUp() {
        this.myDOMParser = new MyDOMParser(XmlResource.OVERVIEW.getResource());
        this.document = this.myDOMParser.parseForDocument();
    }

    public void testRootElement() {
        Element rootElement = this.document.getDocumentElement();
        assertNotNull(rootElement);
        assertEquals("catalog", rootElement.getNodeName());
    }

}
