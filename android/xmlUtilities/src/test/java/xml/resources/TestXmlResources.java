package resources;

import junit.framework.TestCase;
import xml.resources.XmlResource;

public class TestXmlResources extends TestCase {
    public void testCatalogResource() {

        assertTrue(XmlResource.CATALOG.getResource().toString().contains("build/resources/main/example/catalog.xml"));
    }
}
