package xml.resources;

import java.net.URL;

public enum DtdResource {
    EXAMPLE("dtd-example.dtd");

    private String path;
    private ClassLoader classLoader = this.getClass().getClassLoader();

    DtdResource() {}
    DtdResource(String path) {
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
