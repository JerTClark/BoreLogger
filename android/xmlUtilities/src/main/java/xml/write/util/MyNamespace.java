package xml.write.util;

public class MyNamespace {
    private final String name;
    private final String prefix;
    private final String uri;

    public MyNamespace(String name, String prefix, String uri) {
        this.name = name;
        this.prefix = prefix;
        this.uri = uri;
    }

    public String getName() {
        return name;
    }

    public String getPrefix() {
        return prefix;
    }

    public String getUri() {
        return uri;
    }
}
