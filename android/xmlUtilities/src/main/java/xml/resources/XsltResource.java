package xml.resources;

import java.net.URL;

public enum XsltResource {

    CATALOG("catalog.xsl"), IDENTITY("identityTransform.xsl"), OVERVIEW("overview.xsl"),
    REMOVE_DUPLICATE_TITLES("removeDuplicateTitles.xsl");

    private String path;
    private ClassLoader classLoader = this.getClass().getClassLoader();

    XsltResource() {}
    XsltResource(String path) {
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