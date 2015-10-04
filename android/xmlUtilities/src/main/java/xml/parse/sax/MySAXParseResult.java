package xml.parse.sax;

import java.util.ArrayList;
import java.util.HashMap;
/**
 * Elsewhere, instances of this class may be simply referred to as a "result"
 * with respect to the obvious objective of parsing an XML document using the
 * SAXParser with {@link xml.parse.sax.MySAXParserHandler}.
 */
public class MySAXParseResult {
    /**
     * An enum representing either Element or Text
     */
    private MySAXParseResultType type;
    /**
     * Despite the name, this is used to hold either the text of characters parsed
     * or name of elements, depending on the type of result being parsed
     */
    private String text = "";
    /**
     * A boolean representing whether or not this result has Attributes.
     * <b>Note:</b> will only be true for results of {@link xml.parse.sax.MySAXParseResultType}
     * Element
     */
    private boolean hasAttributes = false;
    /**
     * A boolean representing whether or not this result has sub-results (a.k.a,
     * is a parent element with child elements)
     * <b>Note:</b> will only be true for results of {@link xml.parse.sax.MySAXParseResultType}
     * Element
     */
    private boolean hasSubResults = false;
    /**
     * A HashMap property used for storing Attribute key/value pairs
     * should the result be of {@link xml.parse.sax.MySAXParseResultType} Element.
     */
    private HashMap<String, String> attributes = new HashMap<>();
    /**
     * A list of child elements is stored in this object when this result
     * is of {@link xml.parse.sax.MySAXParseResultType} Element and also a
     * parent to said child elements. This is currently determined by the
     * DefaultHandler subclass, {@link xml.parse.sax.MySAXParserHandler}
     */
    private ArrayList<MySAXParseResult> subResults = new ArrayList<>();
    /**
     * Default constructor
     * @param type the {@link xml.parse.sax.MySAXParseResultType} enum type
     *             to be associated with this result.
     */
    public MySAXParseResult(MySAXParseResultType type) {
        this.type = type;
    }
    /**
     * @return the enum {@link xml.parse.sax.MySAXParseResultType} which can
     * be either Element or Text
     */
    public MySAXParseResultType getType() {
        return type;
    }
    /**
     * @return the {@link java.lang.String} value obtained from calling name() on this object's
     * {@link xml.parse.sax.MySAXParseResultType} type property
     */
    public String getTypeName() {
        return this.getType().name();
    }
    /**
     * @return whether or not this result type is {@link xml.parse.sax.MySAXParseResultType}
     * Element or not
     */
    public boolean isElement() {
        return this.type.name().equals(MySAXParseResultType.Element.name());
    }
    /**
     * @param type the {@link xml.parse.sax.MySAXParseResultType} type of this result
     */
    public void setType(MySAXParseResultType type) {
        this.type = type;
    }
    /**
     * @return whether or not this result has attributes
     */
    public boolean hasAttributes() {
        return hasAttributes;
    }
    /**
     * @param hasAttributes whether or not this result will have attributes or not
     */
    public void setHasAttributes(boolean hasAttributes) {
        this.hasAttributes = hasAttributes;
    }
    /**
     * @return whether or not this result has sub-elements
     */
    public boolean hasSubResults() {
        return hasSubResults;
    }
    /**
     * @param hasSubResults whether or not this result has sub-elements
     */
    public void setHasSubResults(boolean hasSubResults) {
        this.hasSubResults = hasSubResults;
    }
    /**
     * @return this result's map of attributes
     */
    public HashMap<String, String> getAttributes() {
        return attributes;
    }
    /**
     * @param attributes a map of name, value attributes of this result
     */
    public void setAttributes(HashMap<String, String> attributes) {
        this.attributes = attributes;
    }
    /**
     * @return either the name of the element or the text of the characters
     * depending on the result's {@link xml.parse.sax.MySAXParseResultType} type
     */
    public String getText() {
        return text;
    }
    /**
     * @param text either the name of the element or the text of the characters
     * depending on the result's {@link xml.parse.sax.MySAXParseResultType} type
     */
    public void setText(String text) {
        this.text = text;
    }
    /**
     * @return a list of the sub-results (a.k.a, child elements) contained in
     * this result
     */
    public ArrayList<MySAXParseResult> getSubResults() {
        return subResults;
    }
    /**
     * @param mySAXParseResults a list of results that should be contained in
     *                          this result as its child elements
     */
    public void setSubResults(ArrayList<MySAXParseResult> mySAXParseResults) {
        this.subResults = subResults;
    }
    /**
     * A convenience-, chain-able method useful for adding attribute key/value
     * pairs for this result. The attribute name and value will be added to
     * this result's list of attributes.
     * @param key the name of the attribute to be added
     * @param value the value of the attribute to be added
     */
    public MySAXParseResult addAttribute(String key, String value) {
        this.attributes.put(key, value);
        return this;
    }
    /**
     * A convenience-, chain-able method for adding a result sub-element
     * to this result's list of sub-elements. By keeping track of the
     * current "context" node, we can keep track of its sub-elements and add them
     * to this list.
     * @param saxParseResult the instance of {@link xml.parse.sax.MySAXParseResult}
     *                       to add to this instance's list of sub-results, or child
     *                       elements
     */
    public MySAXParseResult addSubResult(MySAXParseResult saxParseResult) {
        this.subResults.add(saxParseResult);
        return this;
    }
}