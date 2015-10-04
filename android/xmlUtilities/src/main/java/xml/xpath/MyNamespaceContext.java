package xml.xpath;

import javax.xml.namespace.NamespaceContext;
import java.util.ArrayList;
import java.util.Iterator;

public class MyNamespaceContext implements NamespaceContext {
    public String uri;
    public String prefix;

    public MyNamespaceContext() {}

    /**
     * Constructor
     * @param prefix namespace prefix
     * @param uri namespace uri
     */
    public MyNamespaceContext(String prefix, String uri) {
        this.prefix = prefix;
        this.uri = uri;
    }

    /**
     * @param prefix namespace prefix
     * @return uri namespace uri
     */
    @Override
    public String getNamespaceURI(String prefix) {
        return uri;
    }
    /**
     * @param uri namespace uri
     */
    public void setNamespaceUri(String uri) {
        this.uri = uri;
    }
    /**
     * @param namespaceURI namespace uri
     */
    @Override
    public String getPrefix(String namespaceURI) {
        return prefix;
    }
    /**
     * @param prefix namespace prefix
     */
    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    /**
     * One uri may have multiple prefixes.
     * We will allow only one prefix per uri.
     * @param namespaceURI namespace uri
     * @return an iterator for all prefixes for a uri
     */
    @Override
    public Iterator getPrefixes(String namespaceURI) {
        if (namespaceURI == null) {
            throw new IllegalArgumentException("A null argument was received");
        }
        ArrayList<String> list = new ArrayList<>();
        if(this.uri.equals(namespaceURI)) {
            list.add(prefix);
        }
        return list.iterator();
    }
}
