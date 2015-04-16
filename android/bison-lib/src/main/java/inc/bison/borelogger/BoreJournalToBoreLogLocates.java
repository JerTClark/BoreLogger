package inc.bison.borelogger;

import java.util.ArrayList;

import inc.bison.my.MyGlobals;

/**
 * Created by Clark on 10/26/2014.
 */
public class BoreJournalToBoreLogLocates {

    private ArrayList<String> boreJournalLocates = null;

    public BoreJournalToBoreLogLocates(ArrayList<String> boreJournalLocates) {
        this.boreJournalLocates = boreJournalLocates;
    }//end constructor

    public ArrayList<String> convertLocates() {
        ArrayList<String> tempArrayList = new ArrayList<String>();
        String string = null;
        for(String eachLocate : this.boreJournalLocates) {
            string = eachLocate.substring(0, eachLocate.indexOf(MyGlobals.BORE_JOURNAL_RECORDED_TIME));
            //Remove any notes that may exist
            if(string.contains(MyGlobals.NOTE)) {
                string = string.substring(0, string.indexOf(MyGlobals.NOTE));
            }//end if
            tempArrayList.add(string);
        }//end for-each
        return tempArrayList;
    }//end convertLocates()

}//end BoreJournalToBoreLogLocates
