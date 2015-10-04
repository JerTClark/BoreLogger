package xml.parse.dom;

import org.w3c.dom.*;

import java.net.URL;
/**/
public class MyDOMParserImpl implements MyDomParserHelper {
    /**/
    private Document document;
    /**
     * Default constructor
     * @param xmlUrl the {@link java.net.URL} representation of the XML document
     *               we want to parse
     */
    public MyDOMParserImpl(URL xmlUrl) {
        this.document = new MyDOMParser(xmlUrl).parseForDocument();
    }
    /**/
    @Override
    public void inspectElement() {
        Element rootElement = this.document.getDocumentElement();
        String rootElementName = rootElement.getTagName();
        if (rootElement.hasAttributes()) {
            NamedNodeMap rootElementAttr = rootElement.getAttributes();
            for (int i = 0; i < rootElementAttr.getLength(); i++) {
                Attr attr = (Attr) rootElementAttr.item(i);
                //TODO do something with the root element attributes
                System.out.println("Attr name: " + attr.getNodeName());
                System.out.println("Attr value: " + attr.getNodeValue());
            }
        }
        if (rootElement.hasChildNodes()) {
            this.inspectChildNodes(rootElement.getChildNodes());
        }
    }
    /**/
    @Override
    public void inspectChildNodes(NodeList childNodes) {
        for (int i = 0; i < childNodes.getLength(); i++) {
            Node child = childNodes.item(i);
            if (child.getNodeType() == Node.ELEMENT_NODE) {
                //TODO do something with the child node name
                System.out.println("ChildNode name: " + child.getNodeName());
                //TODO do something with the child node value
                if (child.getNodeValue() != null) System.out.println("ChildNode value: " + child.getNodeValue());
                if (child.hasAttributes()) {
                    NamedNodeMap childAttr = child.getAttributes();
                    for (int j = 0; j < childAttr.getLength(); j++) {
                        Attr attr = (Attr) childAttr.item(j);
                        //TODO do something with the child node attributes
                        System.out.println("Attr name: " + attr.getNodeName());
                        System.out.println("Attr value: " + attr.getNodeValue());
                    }
                }
            } else if (child.getNodeType() == Node.TEXT_NODE) {
                String s = child.getNodeValue().trim();
                //TODO do something with the child node that's a text node
                if (s.length() > 0) System.out.println(s);
            }
            if (child.hasChildNodes()) {
                this.inspectChildNodes(child.getChildNodes());
            }
        }
    }
}