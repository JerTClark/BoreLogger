package inc.bison.documents;

import android.preference.PreferenceManager;

import java.io.File;
import java.util.ArrayList;

import inc.bison.my.MyBoreLogTextPrinter;
import inc.bison.my.MyGlobals;

/**
 * Created by Clark on 10/23/2014.
 */
public class BoreLog {

    private String customer, conduit, location, lengthOfBore, date = null;
    private String textFilePath = null;
    private ArrayList<String> locates = null;
    private MyBoreLogTextPrinter myBoreLogTextPrinter = null;
    private int customDepthNumber = 0;

    public BoreLog() {
        this.locates = new ArrayList<String>();
    }//end constructor

    public BoreLog(String customer, String conduit, String location, String lengthOfBore, String date) {
        this.customer = customer;
        this.conduit = conduit;
        this.location = location;
        this.lengthOfBore = lengthOfBore;
        this.date = date;
        this.textFilePath = MyGlobals.BORE_LOG_FOLDER + this.customer + "_" + this.location + "_" + this.date + ".txt";
        this.locates = new ArrayList<String>();
    }//end constructor

    //-- To String method
    public String toString() {
        return "Customer: " + this.getCustomer()
                + "\nConduit: " + this.getConduit()
                + "\nLocation: " + this.getLocation()
                + "\nLength Of Bore: " + this.getLengthOfBore()
                + "\nDate: " + this.getDate();
    }//end toString()

    //-- Getters and Setters
    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getConduit() {
        return conduit;
    }

    public void setConduit(String conduit) {
        this.conduit = conduit;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getLengthOfBore() {
        return lengthOfBore;
    }

    public void setLengthOfBore(String lengthOfBore) {
        this.lengthOfBore = lengthOfBore;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public ArrayList<String> getLocates() {
        return locates;
    }

    public void setLocates(ArrayList<String> locates) {
        this.locates = locates;
    }

    public MyBoreLogTextPrinter getMyBoreLogTextPrinter() {
        return myBoreLogTextPrinter;
    }

    public String getTextFilePath() {
        return textFilePath;
    }

    public void setTextFilePath(String textFilePath) {
        this.textFilePath = textFilePath;
    }//end Getters and Setters

    public void init() {
        this.initTextFilePath();
        this.initMyBoreLogTextPrinter();
    }//end init()

    public void initTextFilePath() {
        StringBuilder builder = new StringBuilder(5000);
        builder.append(MyGlobals.BORE_LOG_FOLDER);
        builder.append(this.customer.replace(" ", ""));
        builder.append("_");
        builder.append(this.location.replace(" ", ""));
        builder.append("_");
        builder.append(this.date.replace(",", "-").replace(" ", "-"));
        builder.append(".txt");
        this.textFilePath = builder.toString();
        //this.textFilePath = MyGlobals.BORE_LOG_FOLDER + this.customer.replace(" ", "") + "_" + this.location.replace(" ", "") + "_" + this.date.replace(",", "-").replace(" ", "-") + ".txt";
    }//end initTextFilePath

    public void initLocatesList() {
        this.locates = new ArrayList<String>();
    }//end initLocatesList()

    public void initMyBoreLogTextPrinter() {
        this.myBoreLogTextPrinter = new MyBoreLogTextPrinter(this);
    }//end initMyBoreLogTextPrinter

    public void addLocate(String locate) {
        String pre = "";

        if(MyGlobals.startWithCustomLocateNumber) {
            if (this.locates.isEmpty() || this.customDepthNumber == 0) {
                //This is the first locate using the custom number
                this.customDepthNumber = MyGlobals.initialLocateNumber;
            } else {
                //Continue incrementing from original custom depth
                this.customDepthNumber++;
            }
            //Create the prepended String
            pre = "Depth " + this.customDepthNumber + ": ";
        } else {
            //Default locate numbering
            int depthNumber = this.locates.size() + 1;
            pre = "Depth " + depthNumber + ": ";
        }

        //Add the new formatted locate to the list
        this.locates.add(pre + locate);
        //Write the new formatted locate to file
        this.myBoreLogTextPrinter.printLocate(pre + locate);
    }//end addLocate

    public void addScannedLocate(String locate) {
        this.locates.add(locate);
    }//end addScannedLocate()

    public void writeLocatesList() {
        for(String locate : this.locates) {
            this.myBoreLogTextPrinter.printLocate(locate);
        }//end for-each
    }//end writeLocatesList()

    public String getPDFName() {
        String text = new File(this.getTextFilePath()).getName();
        String pdf = text.replace(".txt", ".pdf").replace("-", "");
        return MyGlobals.BORE_LOG_PDF + pdf;
    }//end getPDFName()

}//end BoreLog