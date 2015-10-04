# The xmlUtilities module
This module is designed to handle various XML related tasks from parsing to
transforming and is built with re-usability and convenience in mind.

## xml.parse package
Contains various parser implementations requiring only a URL to an XML document
resource we wish to parse. These classes require additional methods and enhancements
for project-specific implementations, but contain enough skeleton code to get
started quickly. Implementations include

- DOMParser
- SAXParser
- StAXParser

See the API for usage.

## xml.resources
Contains enumerations representing DTD, Schema, XML, and XSLT resources. These
are by default configured to work with the files in resources/examples and should
be changed to project-specific requirements.

## xml.validation
Only Schema validation is built-in to these classes. There are three implementations
of Schema validation using

- DOMParser
- SAXParser
- Validator

See the API for usage.

## xml.xpath
A class that allows XPath addressing of XML documents. See the API for usage.

## xml.xslt
A class for transforming XML documents using a provided XSLT stylesheet. See the
API for usage.