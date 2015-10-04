package xml.example;

import jer.javax.xml.stream.events.XMLEvent;
import xml.write.stax.MyStAXWriter;
import xml.write.util.MyNamespace;
import java.util.HashMap;

public class UsingMyStAXWriter {
    /**
     * In this example, we have all logic contained in a single method
     */
    public static void main(String[] args) {
        /**
         * Step 0: these are convenient strings to have for accessing
         * StartElements and EndElements as well as indentation
         */
        final String START = "start";
        final String END = "end";
        final String INDENT = "indent";
        /**
         * Step 1: obtain a MyStAXWriter by calling <b>new</b> and passing an
         * XML document name
         */
        MyStAXWriter myStAXWriter = new MyStAXWriter("usingMyStAXWriter.xml");
        /**
         * Step 2: define all of the necessary HashMaps of String, XMLEvent to add
         * to the XML document. These include the root element and all sub-elements
         * which will have both StartElement and EndElement XMLEvents-- both must be
         * added in the order which they should appear in the final document
         *
         * (Optional) Configure a list of namespaces for easy reference
         *
         */
        //create a convenient namespace object
        myStAXWriter.addNamespace(new MyNamespace("jer","jer","http://jer.cla.com/namespace"));
        //convenient references to events we'll add to the XML document
        HashMap<String, XMLEvent> rootElement = myStAXWriter.elementMap(
                myStAXWriter.getNamespace("jer").getPrefix(),
                myStAXWriter.getNamespace("jer").getUri(),"root",0);
        HashMap<String, XMLEvent> subElement = myStAXWriter.elementMap("","","sub",1);
        HashMap<String, XMLEvent> doubleNested = myStAXWriter.elementMap("", "", "double", 2);
        HashMap<String, XMLEvent> tripleNested = myStAXWriter.elementMap(
                myStAXWriter.getNamespace("jer").getPrefix(),
                myStAXWriter.getNamespace("jer").getUri(),
                "triple",
                3
        );
        /**
         * Step 3: chaining calls to the <b>add</b> method adds each XMLEvent to
         * a queue of XMLEvents in the <b>order in which they should be written</b>
         * to the XML document, calling <b>writeDocument</b> when done to create
         * the XML document
         */
        myStAXWriter.add(myStAXWriter.createStartDocument())
                .startElement(rootElement,true)//a convenience method (see below)
                .add(myStAXWriter.createNamespaceElement(myStAXWriter.getNamespace("jer").getPrefix(),
                        myStAXWriter.getNamespace("jer").getUri()))
                /**
                 * For nesting elements, the pattern for adding via the HashMap
                 * follows something like (in granular steps)
                 * 1.) add a lineBreak
                 * 2.) get the INDENT of the map
                 * 3.) get the START of the map
                 * 4.) (optional) add line break, attribute, text
                 * 5.) (optional) nest another sub-element
                 * 6.) (if necessary) get the INDENT of the map
                 * 7.) get the END of the map
                 *
                 * See the startElement and endElements on how to do this in less steps
                 */
                .add(myStAXWriter.lineBreak())
                .add(subElement.get(INDENT))
                .add(subElement.get(START))
                /**
                 * adding another nested element using the startElement
                 * convenience method
                 *
                 * incorporating things like comments, characters, and other
                 * elements becomes a matter of adding them between the call to
                 * startElement and endElement
                 *
                 * we have to remember to use the counterpart endElement
                 * method later when we want to add an end element
                 */
                .addComment("Double-nested element below", 2, true)//a comment
                .startElement(doubleNested, true)
                .add(myStAXWriter.createAttribute("attribute", "The value of it"))//an attribute
                //adding another, more deeply nested element
                .startElement(tripleNested, true)
                .add(myStAXWriter.createText("Here is some text"))
                .endElement(tripleNested, false)
                //add the same element again
                .startElement(tripleNested, true)
                .add(myStAXWriter.createText("Here's some more text"))
                .endElement(tripleNested, false)

                /**
                 * END XMLEvents might need to be padded with lineBreak and INDENT
                 */
                .endElement(doubleNested, true)
                .endElement(subElement, true)
                .add(myStAXWriter.lineBreak())
                .add(rootElement.get(END))
                .add(myStAXWriter.createEndDocument())
                .writeDocument();//writes the document
    }
}
