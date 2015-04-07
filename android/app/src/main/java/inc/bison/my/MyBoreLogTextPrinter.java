package inc.bison.my;

import android.util.Log;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;
import java.util.regex.Pattern;

import inc.bison.data.BoreLogXMLWriter;
import inc.bison.documents.BoreLog;

public class MyBoreLogTextPrinter {

    private BoreLog boreLog = null;
    private BoreLogXMLWriter boreLogXMLWriter = null;

    public MyBoreLogTextPrinter(BoreLog boreLog) {
        this.boreLog = boreLog;
        this.boreLogXMLWriter = new BoreLogXMLWriter(this.boreLog);
    }//end constructor

    public void printTextFile() {
        //-- Test for Bore Logs folder, Make it if it doesn't exist
        boolean exists = false;
        File boreLogFolder = new File(MyGlobals.BORE_LOG_FOLDER);
        if(!boreLogFolder.exists()) exists = boreLogFolder.mkdirs();

        File boreLogTextFile = new File(this.boreLog.getTextFilePath());
        PrintWriter printWriter = null;
        try {
            printWriter = new PrintWriter(new FileOutputStream(boreLogTextFile, true));
        } catch (FileNotFoundException e) {
            Log.d(this.getClass().getSimpleName(), e.getMessage());
        }//end try-catch
        if(printWriter != null) {
            printWriter.println(MyGlobals.BORE_DATA_SHEET_TITLE);
            printWriter.println(MyGlobals.EMPTY_LINE);
            printWriter.println(MyGlobals.CUSTOMER + this.boreLog.getCustomer());
            printWriter.println(MyGlobals.CONDUIT + this.boreLog.getConduit());
            printWriter.println(MyGlobals.LOCATION + this.boreLog.getLocation());
            printWriter.println(MyGlobals.LENGTH + this.boreLog.getLengthOfBore());
            printWriter.println(MyGlobals.DATE + this.boreLog.getDate());
            printWriter.println(MyGlobals.EMPTY_LINE);
            printWriter.println(MyGlobals.BEGIN_BORE);
            printWriter.close();
        }//end if
        /**
         * TODO testing
         */
        this.boreLogXMLWriter.createXMLFile();
    }//end printTextFile()

    //-- PrintWriter println() each locate individually
    public void printLocate(String locate) {
        File boreLogTextFile = new File(this.boreLog.getTextFilePath());
        PrintWriter printWriter = null;
        try {
            printWriter = new PrintWriter(new FileOutputStream(boreLogTextFile, true));
        } catch (FileNotFoundException e) {
            Log.d(this.getClass().getSimpleName(), e.getMessage());
        }//end try-catch
        if(printWriter != null) {
            printWriter.println(locate);
            printWriter.close();
        }//end if
        /**
         * TODO testing
         */
        this.boreLogXMLWriter.createXMLFile();
    }//end printLocate()

    public void overwriteTextFile() {
        //-- Test for Bore Logs folder, Make it if it doesn't exist
        boolean exists = false;
        File boreLogFolder = new File(MyGlobals.BORE_LOG_FOLDER);
        if(!boreLogFolder.exists()) exists = boreLogFolder.mkdirs();

        File boreLogTextFile = new File(this.boreLog.getTextFilePath());
        PrintWriter printWriter = null;
        try {
            printWriter = new PrintWriter(new FileOutputStream(boreLogTextFile, false));
        } catch (FileNotFoundException e) {
            Log.d(this.getClass().getSimpleName(), e.getMessage());
        }//end try-catch
        if(printWriter != null) {
            printWriter.println(MyGlobals.BORE_DATA_SHEET_TITLE);
            printWriter.println(MyGlobals.EMPTY_LINE);
            printWriter.println(MyGlobals.CUSTOMER + this.boreLog.getCustomer());
            printWriter.println(MyGlobals.CONDUIT + this.boreLog.getConduit());
            printWriter.println(MyGlobals.LOCATION + this.boreLog.getLocation());
            printWriter.println(MyGlobals.LENGTH + this.boreLog.getLengthOfBore());
            printWriter.println(MyGlobals.DATE + this.boreLog.getDate());
            printWriter.println(MyGlobals.EMPTY_LINE);
            printWriter.println(MyGlobals.BEGIN_BORE);
            for(String eachLocate : this.boreLog.getLocates()) {
                printWriter.println(eachLocate);
            }//end for-each
            printWriter.close();
        }//end if
        /**
         * TODO testing
         */
        this.boreLogXMLWriter.createXMLFile();
    }//end overwriteTextFile()

    //Check to see if the "End bore" has already been added to a file
    public void checkForEndBore() {
        Scanner scanner = null;
        String line = "";
        boolean hasEndBore = false;
        try {
            scanner = new Scanner(new FileReader(this.boreLog.getTextFilePath()));
        } catch (Exception e) {
            Log.e("CheckForEndBore", e.getMessage() + " PATH: " + this.boreLog.getTextFilePath());
        }//end try-catch
        if(scanner != null) {
            while (scanner.hasNext()) {
                line = scanner.nextLine();
            }//end while
            if(!line.equals(MyGlobals.END_BORE)) {
                this.boreLog.getMyBoreLogTextPrinter().printLocate(MyGlobals.END_BORE);
            }//end if
        }//end if
    }

}//end MyBoreLogTextPrinter
