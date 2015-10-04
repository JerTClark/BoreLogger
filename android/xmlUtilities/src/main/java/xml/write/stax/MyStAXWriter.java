package xml.write.stax;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import jer.javax.xml.stream.XMLEventFactory;
import jer.javax.xml.stream.XMLEventWriter;
import jer.javax.xml.stream.XMLOutputFactory;
import jer.javax.xml.stream.XMLStreamException;
import jer.javax.xml.stream.events.Attribute;
import jer.javax.xml.stream.events.Comment;
import jer.javax.xml.stream.events.EndDocument;
import jer.javax.xml.stream.events.Namespace;
import jer.javax.xml.stream.events.StartDocument;
import jer.javax.xml.stream.events.XMLEvent;

import xml.write.util.MyNamespace;
import xml.write.util.XMLWriter;

public class MyStAXWriter implements XMLWriter {
    private final String START = "start", END = "end", INDENT = "indent";
    private final ClassLoader classLoader;
    /**
     * The string name of the XML document to be created/written
     */
    private String xmlFileName;
    /**
     * The destination folder. <b>This must exist</b> beforehand.
     */
    private final String OUTPUT_FOLDER;
    /**
     * A reference to the XML document to be created/written as a java.io.File
     * object. This is created from the combination of the ClassLoader, the
     * string OUTPUT_FOLDER, and the string xmlFileName.
     */
    private File xmlFileRef;
    /**
     * An internal class instance of XMLEventFactory for creating XMLEvents
     */
    private XMLEventFactory factory = XMLEventFactory.newInstance();
    /**
     * An internal class instance of XMLEventWriter for writing XMLEvents
     */
    private XMLEventWriter xmlEventWriter;
    /**
     * A list of XMLEvents used to queue such references prior to actually writing the
     * XMLDocument
     */
    private List<XMLEvent> eventsList;
    /**
     * A list of namespaces associated with the XML document to be created/written
     */
    private HashMap<String,MyNamespace> myNamespaceMap;
    /**
     * Default constructor will set the values of members declared <b>final</b>:
     * <ul>
     *     <li>ClassLoader classLoader
     *      <p>The ClassLoader used to access resources on the classpath</p></li>
     *     <li>String OUTPUT_FOLDER
     *     <p>The destination folder of the XML document to be created/written relative to the classpath</p></li>
     * </ul>
     */
    public MyStAXWriter(String xmlFileName) {
        this.classLoader = this.getClass().getClassLoader();
        this.OUTPUT_FOLDER = "example";
        this.xmlFileName = xmlFileName;
        this.eventsList = new ArrayList<>();
        this.myNamespaceMap = new HashMap<>();
    }
    /**
     * @param destinationFolder The destination folder relative to the classpath
     *                          for the XML document to be created
     * @param xmlFileName The simple name of the file to be created/written
     */
    public MyStAXWriter(String destinationFolder, String xmlFileName) {
        this.classLoader = this.getClass().getClassLoader();
        this.OUTPUT_FOLDER = destinationFolder;
        this.xmlFileName = xmlFileName;
        this.eventsList = new ArrayList<>();
        this.myNamespaceMap = new HashMap<>();
    }
    /**
     * Use this constructor when this is part of a sub-project dependency
     * and the desired output XML document should be written to a different
     * build output
     * @param outputFolder The output folder on the classpath
     * @param xmlFileName The simple name of the file to be created/written
     * @param callerClass The class object on which to call getClassLoader()
     */
    public MyStAXWriter(String outputFolder, String xmlFileName, Class callerClass) {
        this.classLoader = callerClass.getClassLoader();
        this.OUTPUT_FOLDER = outputFolder;
        this.xmlFileName = xmlFileName;
        this.eventsList = new ArrayList<>();
        this.myNamespaceMap = new HashMap<>();
    }
    /**
     * Returns a java.io.File reference to the XML document to be written.
     * This will be created by obtaining the destination folder relative to the
     * classpath and adding the String xmlFileName to the end of its path
     * @return File reference to the XML document to be created/written
     * relative to the classpath
     */
    @Override
    public File getWritableFile() throws FileNotFoundException {
        boolean success = false;
        File destFolder = new File(this.classLoader.getResource(this.OUTPUT_FOLDER).getPath());
        success = destFolder.exists() || destFolder.mkdir();
        this.xmlFileRef = new File(this.classLoader.getResource(OUTPUT_FOLDER).getPath() + "/" + this.xmlFileName);
        try {
            success = this.xmlFileRef.createNewFile() || this.xmlFileRef.exists();
        } catch (IOException e) {
            System.out.println("IOException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        }
        if(success) return this.xmlFileRef;
        else throw new FileNotFoundException("File not found: " + this.xmlFileRef.getPath());
    }
    /**
     * Create an StartDocument XMLEvent with version="1.0" and encoding="UTF-8"
     * and standalone="yes"
     */
    @Override
    public StartDocument createStartDocument() {
        return this.factory.createStartDocument("UTF-8", "1.0", true);
    }
    /**
     * Create an StartDocument XMLEvent with version="1.0" and encoding="UTF-8"
     * @param standalone a boolean for the standalone attribute
     */
    @Override
    public StartDocument createStartDocument(boolean standalone) {
        return this.factory.createStartDocument("UTF-8", "1.0", standalone);
    }
    /**/
    @Override
    public EndDocument createEndDocument() {
        return this.factory.createEndDocument();
    }
    /**
     * Creates a Namespace XMLEvent from the provided arguments
     * @param prefix the namespace prefix
     * @param uri the namespace uri
     */
    @Override
    public Namespace createNamespaceElement(String prefix, String uri) {
        return this.factory.createNamespace(prefix, uri);
    }
    /**
     * Add an instance of MyNamespace to the HashMap of namespaces
     * associated with this XML document
     */
    @Override
    public void addNamespace(MyNamespace myNamespace) {
        this.myNamespaceMap.put(myNamespace.getName(), myNamespace);
    }
    /**
     * Gets a MyNamespace object for the associated name value
     * @param name the name of the namespace desired
     * @return MyNamespace with name property of argument
     */
    @Override
    public MyNamespace getNamespace(String name) {
        return this.myNamespaceMap.get(name);
    }
    /**
     * Getter for the HashMap of MyNamespace objects
     */
    @Override
    public HashMap<String, MyNamespace> getNamespaces() {
        return this.myNamespaceMap;
    }
    /**
     * Create a "\n" newline character for a line break in the XML document
     */
    @Override
    public XMLEvent lineBreak() {
        return this.factory.createDTD("\n");
    }
    /**
     * Create a "\t" tab character for an indentation in the XML document
     */
    @Override
    public XMLEvent singleTab() {
        return this.factory.createDTD("\t");
    }
    /**
     * Create characters for adding text to an XML document
     */
    @Override
    public XMLEvent createText(String text) {
        return this.factory.createCharacters(text);
    }
    /**
     * Create a custom DTD
     */
    @Override
    public XMLEvent createDTD(String dtd) {
        return this.factory.createDTD(dtd);
    }
    /**
     * A convenience method used for obtaining a HashMap String to XMLEvent
     * instance containing the keys and values as follows
     * <ul>
     *     <li>"start": the XMLEvent StartElement</li>
     *     <li>"end": the XML EndElement</li>
     *     <li>"indent": an indentation DTD XMLEvent constructed from a StringBuilder
     *     containing a number of "\t" characters corresponding the the indentations param</li>
     * </ul>
     * @return HashMap containing the described String keys and their associated XMLEvent values
     * @param prefix the namespace prefix
     * @param uri the namespace uri
     * @param elementName the elementName of the XMLEvent element
     * @param indentations the number of indentations required for each new line
     *                  (included for easy reference)
     */
    @Override
    public HashMap<String, XMLEvent> elementMap(String prefix, String uri,
                                                String elementName, int indentations) {
        HashMap<String, XMLEvent> map = new HashMap<>();
        map.put(START, this.factory.createStartElement(prefix, uri, elementName));
        map.put(END, this.factory.createEndElement(prefix, uri, elementName));
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < indentations; i++) {
            stringBuilder.append("\t");
        }
        map.put(INDENT, this.createDTD(stringBuilder.toString()));
        return map;
    }
    /**
     * Creates an XMLEvent Attribute for adding to the document
     * @param key The name of the Attribute to add
     * @param value The value of this Attribute
     * @return an Attribute XMLEvent for adding to an XMLEvent element
     */
    @Override
    public Attribute createAttribute(String key, String value) {
        return this.factory.createAttribute(key, value);
    }
    /**
     * Creates a comment in the XML document
     * @param commentText the string text of the comment
     */
    @Override
    public Comment createComment(String commentText) {
        return this.factory.createComment(commentText);
    }
    /**/
    @Override
    public XMLWriter addComment(String commentText, int indentation, boolean breakLines) {
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < indentation; i++) {
            stringBuilder.append("\t");
        }
        XMLEvent indent = this.createDTD(stringBuilder.toString());
        Comment comment = this.createComment(commentText);
        if (breakLines) this.add(this.lineBreak());
        this.add(indent)
                .add(comment);
        return this;
    }
    /**
     * A convenience method aimed at reducing code noise which handles everything
     * required to start a new XML element
     * @param map A HashMap of an element obtained from calling
     *            MyStAXWriter.elementMap()
     * @param breakLines whether or not to add a line break prior to starting
     *                   this element
     */
    public XMLWriter startElement(HashMap<String, XMLEvent> map, boolean breakLines) {
        if (breakLines) this.add(this.lineBreak());
        this.add(map.get(INDENT))
                .add(map.get(START));
        return this;
    }
    /**
     * A convenience method aimed at reducing code noise which handles everything
     * required to end a new XML element
     * @param map A HashMap of an element obtained from calling
     *            MyStAXWriter.elementMap()
     * @param breakLines whether or not to add a line break prior to ending
     *                   this element
     */
    public XMLWriter endElement(HashMap<String, XMLEvent> map, boolean breakLines) {
        if (breakLines) this.add(this.lineBreak())
                .add(map.get(INDENT));
        this.add(map.get(END));
        return this;
    }
    /**
     * Adds an XMLEvent to the <b>eventList</b> queue to be written
     * to the XML document to be created/written
     * @param event an XMLEvent to add to the eventList queue
     */
    @Override
    public XMLWriter add(XMLEvent event) {
        this.eventsList.add(event);
        return this;
    }
    /**
     * Adds a list of XMLEvents to the queue of events to be written to the
     * XML document
     * @param events a list of XMLEvents
     */
    @Override
    public XMLWriter add(List<XMLEvent> events) {
        this.eventsList.addAll(events);
        return this;
    }
    /**
     * Creates/writes the XML document using the XMLEvents that are currently
     * ordered in the XMLEvent list queue
     */
    @Override
    public void writeDocument() {
        XMLOutputFactory xmlOutputFactory = XMLOutputFactory.newInstance();
        XMLEventWriter xmlEventWriter = null;
        try {
            xmlEventWriter = xmlOutputFactory.createXMLEventWriter(
                    new FileOutputStream(this.getWritableFile()));
            for (XMLEvent xmlEvent : this.eventsList) {
                xmlEventWriter.add(xmlEvent);
            }
        } catch (FileNotFoundException e) {
            System.out.println("FileNotFoundException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } catch (XMLStreamException e) {
            System.out.println("XMLStreamException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } finally {
            if (xmlEventWriter != null) {
                try {
                    xmlEventWriter.flush();
                    xmlEventWriter.close();
                } catch (XMLStreamException e) {
                    System.out.println("XMLStreamException: " + e.getMessage());
                    System.out.println("Caused by: " + e.getCause());
                }
            }
        }
    }
}