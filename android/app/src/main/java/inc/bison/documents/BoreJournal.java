package inc.bison.documents;

import java.util.ArrayList;
import java.util.Calendar;

import inc.bison.my.MyBoreJournaler;
import inc.bison.my.MyGlobals;

/**
 * Created by Clark on 10/23/2014.
 */
public class BoreJournal {

    private String customer = null;
    private String location = null;
    private String pathToFile = null;
    private String date = null;
    private ArrayList<String> locates = null;
    private MyBoreJournaler myBoreJournaler = null;

    public BoreJournal() {
        this.locates = new ArrayList<String>();
    }//end empty constructor

    public BoreJournal(String customer, String location) {
        this.customer = customer;
        this.location = location;
        this.locates = new ArrayList<String>();
    }//end constructor

    //-- To String method
    public String toString() {
        return "Customer: " + this.getCustomer()
                + "\nLocation: " + this.getLocation()
                + "\nDate: " + this.getDate();
    }//end toString()

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public ArrayList<String> getLocates() {
        return locates;
    }

    public void setLocates(ArrayList<String> locates) {
        this.locates = locates;
    }

    public String getPathToFile() {
        return pathToFile;
    }

    public void setPathToFile(String pathToFile) {
        this.pathToFile = pathToFile;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public MyBoreJournaler getMyBoreJournaler() {
        return this.myBoreJournaler;
    }

    public void init() {
        this.initPathToFile();
        this.myBoreJournaler = new MyBoreJournaler(this);
    }

    public void initPathToFile() {
        StringBuilder builder = new StringBuilder(5000);
        builder.append(MyGlobals.BORE_JOURNAL_FOLDER);
        builder.append(this.getCustomer().replace(" ", ""));
        builder.append("_");
        builder.append(this.getLocation().replace(" ", ""));
        builder.append("_");
        builder.append(this.getDate().replace(",", "-").replace(" ", "-"));
        builder.append(".txt");
        this.pathToFile = builder.toString();
        //this.pathToFile = MyGlobals.BORE_JOURNAL_FOLDER + this.getCustomer().replace(" ", "") + "_" + this.getLocation().replace(" ", "") + "_" + this.getDate().replace(" ", "-").replace(",", "") + ".txt";
    }//end initPathToFile()

    public void addScannedLocate(String locate) {
        this.locates.add(locate);
    }//end addScannedLocate()

    public void addLocate(String locate) {
        int depthNumber = this.locates.size() + 1;
        String pre = "Depth " + depthNumber + ": ";

        Calendar calendar = Calendar.getInstance();
        int month = calendar.get(Calendar.MONTH) + 1;
        int day = calendar.get(Calendar.DATE);
        int year = calendar.get(Calendar.YEAR);
        int hour = calendar.get(Calendar.HOUR_OF_DAY);
        int minute = calendar.get(Calendar.MINUTE);
        int second = calendar.get(Calendar.SECOND);
        String append = MyGlobals.BORE_JOURNAL_RECORDED_TIME + month +
                MyGlobals.DAY + day +
                MyGlobals.YEAR + year +
                MyGlobals.HOUR + hour +
                MyGlobals.MIN + minute +
                MyGlobals.SEC+ second;
        String addToList = pre + locate + append;
        this.locates.add(addToList);
        this.getMyBoreJournaler().printLocate(addToList);
    }//end addLocate()

    public void writeLocatesList() {
        for(String locate : this.locates) {
            this.myBoreJournaler.printLocate(locate);
        }//end for-each
    }//end writeLocatesList()

}//end BoreJournal