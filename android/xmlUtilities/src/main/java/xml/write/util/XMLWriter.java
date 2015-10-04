package xml.write.util;

import jer.javax.xml.stream.events.*;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;

public interface XMLWriter {

    public File getWritableFile() throws FileNotFoundException;
    public StartDocument createStartDocument();
    public StartDocument createStartDocument(boolean standalone);
    public EndDocument createEndDocument();
    public Namespace createNamespaceElement(String prefix, String uri);
    public void addNamespace(MyNamespace myNamespace);
    public MyNamespace getNamespace(String name);
    public HashMap<String, MyNamespace> getNamespaces();
    public XMLEvent lineBreak();
    public XMLEvent singleTab();
    public XMLEvent createText(String text);
    public XMLEvent createDTD(String dtd);
    public HashMap<String, XMLEvent> elementMap(String prefix, String uri, String elementName, int nestLevel);
    public Attribute createAttribute(String key, String value);
    public Comment createComment(String commentText);
    public XMLWriter addComment(String commentText, int indentation, boolean breakLines);
    public XMLWriter startElement(HashMap<String, XMLEvent> map, boolean breakLines);
    public XMLWriter endElement(HashMap<String, XMLEvent> map, boolean breakLines);
    public XMLWriter add(XMLEvent event);
    public XMLWriter add(List<XMLEvent> events);
    public void writeDocument();

}
