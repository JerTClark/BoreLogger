package inc.bison.my;

import java.io.File;
import java.util.HashMap;

/**
 * Created by Clark on 10/18/2014.
 */
public class MyHashMapMaker {

    public MyHashMapMaker() {

    }//end constructor()

    //-- String, String
    public HashMap<String, String> addToArrayList(String key, String value) {
        HashMap<String, String> hashMap = new HashMap<String, String>();
        hashMap.put(key, value);
        return hashMap;
    }//end addToArrayList()

    public HashMap<String, File> addToArrayList(String key, File value) {
        HashMap<String, File> hashMap = new HashMap<String, File>();
        hashMap.put(key, value);
        return hashMap;
    }//end addToArrayList()

}//end MyHashMapMaker