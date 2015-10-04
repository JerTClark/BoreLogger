package xml.resources;

import java.net.URL;

public enum XmlResource {

    BORELOG("bore-log.xml"), CATALOG("catalog.xml"), MY_CATALOG("my-catalog.xml"),
    OVERVIEW("overview.xml"), SAMPLE("sample.xml"), SCHEMA_SAMPLE("schema-sample.xml"),
    USE_BASIC_SCHEMA("use-basic-schema.xml"), USE_DTD_EXAMPLE("use-dtd-example.xml");

    private String path;
    private ClassLoader classLoader = this.getClass().getClassLoader();

    XmlResource(){}
    XmlResource(String path) {
        this.path = path;
    }

    public URL getResource() {
        return this.classLoader.getResource("example/" + this.path);
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}