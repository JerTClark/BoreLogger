package xml.resources;

import java.net.URL;

public enum SchemaResource {

    CATALOG("catalog.xsd");

    private String path;
    private ClassLoader classLoader = this.getClass().getClassLoader();

    SchemaResource() {}
    SchemaResource(String path) {
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
