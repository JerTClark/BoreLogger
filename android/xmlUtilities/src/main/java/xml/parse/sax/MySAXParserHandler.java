package xml.parse.sax;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.SAXParseException;
import org.xml.sax.helpers.DefaultHandler;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * A sample implementation of a DefaultHandler subclass. In this class,
 * we call each "thing" that we quantify as "being parsed" a <b>result</b>.
 * These <b>results</b> are modelled by another class named {@link MySAXParseResult}.
 * In this implementation, we're interested in two things:
 * <ol>
 *     <li>Elements and any attributes they might have</li>
 *     <li>and Text or Characters occurring in the XML document</li>
 * </ol>
 */
public class MySAXParserHandler extends DefaultHandler {
    /**
     * Empty constructor, nothing special
     */
    public MySAXParserHandler() { }
    /**
     * A list for storing {@link MySAXParseResult} objects.
     * See that class for additional information on what exactly is
     * being stored.
     */
    private ArrayList<MySAXParseResult> saxParseResults;
    /**
     * Keep track of the "current context" in which we are parsing (i.e.,
     * the parent element of the results being parsed)
     */
    private MySAXParseResult currentParseResult = null;
    /**
     * @return the list of {@link MySAXParseResult} obtained from parsing with this handler
     */
    public ArrayList<MySAXParseResult> getSaxParseResults() {
        return saxParseResults;
    }
    /**
     * Initializes the list of {@link MySAXParseResult} results
     */
    @Override
    public void startDocument() throws SAXException {
        this.saxParseResults = new ArrayList<>();
    }
    /**
     * The parsing has begun and we are now collecting our "results" to store in objects
     * of type {@link MySAXParseResult} before adding them to a collective list in memory.
     * In this method, we are interested in several things that are happening insomuch that
     * it is easier to read the comments as these things occur below.
     */
    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
        MySAXParseResult saxParseResult = new MySAXParseResult(MySAXParseResultType.Element);
        saxParseResult.setText(qName);
        if (attributes.getLength()>0) {
            saxParseResult.setHasAttributes(true);
            for (int i = 0; i < attributes.getLength(); i++) {
                saxParseResult.addAttribute(attributes.getQName(i), attributes.getValue(i));
            }
        }
        /**
         * We don't want the <b>root</b> or document element here, or else we'd only
         * add sub-results to it and no other elements using the somewhat trivial
         * means in place. Instead, we're looking for elements at least one XPath
         * step forward from the root element. We check for this result being the root
         * element by checking the list of result's size is greater than zero. If it
         * is, AND if there currently isn't a current result assigned, we can set the
         * current result to this one.
         */
        if(this.currentParseResult == null && this.saxParseResults.size() > 0) this.currentParseResult = saxParseResult;
        /**
         * The current result will be set to null by the <b>endElement</b> method
         * implementation this class overrides. If there is a presently assigned
         * current result in which this result should be nested, the following condition
         * will be satisfied, indicating that we have just processed a sub-result
         * (the local {@link MySAXParseResult} variable)
         */
        else if (this.currentParseResult != null) {
            if(!this.currentParseResult.hasSubResults()) this.currentParseResult.setHasSubResults(true);
            this.currentParseResult.addSubResult(saxParseResult);
        }
        /**
         * Finally, we add the local {@link MySAXParseResult} to the list of {@link MySAXParseResult}
         */
        this.saxParseResults.add(saxParseResult);
    }
    /**
     * When we reach the end of an element, set the current result to null, as we
     * will no longer be adding results to its list of sub-results. This allows the
     * next result to become our current result if it happens to be an element.
     */
    @Override
    public void endElement(String uri, String localName, String qName) throws SAXException {
        if(this.currentParseResult != null && this.currentParseResult.getText().equals(qName)) this.currentParseResult = null;
    }
    /**
     * Lastly, we handle adding results that are of MySAXParseResultType.Text to our
     * list of results.
     */
    @Override
    public void characters(char[] ch, int start, int length) throws SAXException {
        String s = (new String(ch, start, length));
        //no whitespace allowed!
        if(s.trim().length() > 0) {
            MySAXParseResult saxParseResult = new MySAXParseResult(MySAXParseResultType.Text);
            saxParseResult.setText(s.trim());
            this.saxParseResults.add(saxParseResult);
            if (this.currentParseResult != null) this.currentParseResult.addSubResult(saxParseResult);
        }
    }
    /**
     * If there's an action we need to take when the end of the XML document is
     * reached, this is the place to do that. For example, we can close resources,
     * notify a UI, whatever.
     */
    @Override
    public void endDocument() throws SAXException {
//        System.out.println("Done!");
    }
    /**
     * Error handling begins here
     */
    @Override
    public void error(SAXParseException e) throws SAXException {
        System.out.println("Error: " + e.getMessage());
    }

    @Override
    public void fatalError(SAXParseException e) throws SAXException {
        System.out.println("Fatal error: " + e.getMessage());
    }

    @Override
    public void warning(SAXParseException e) throws SAXException {
        System.out.println("Warning: " + e.getMessage());
    }
}
