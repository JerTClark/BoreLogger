package inc.bison;

import junit.framework.TestCase;

import org.junit.Test;

import inc.bison.Main;

import static junit.framework.Assert.assertEquals;

public class MainTest extends TestCase {

    /**/
    @Test
    public void testMain() {
        assertEquals("String", Main.test);
    }

}
