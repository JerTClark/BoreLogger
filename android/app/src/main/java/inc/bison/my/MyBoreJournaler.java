package inc.bison.my;

import android.util.Log;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintWriter;

import inc.bison.data.BoreJournalXMLWriter;
import inc.bison.documents.BoreJournal;

public class MyBoreJournaler {

    private BoreJournal boreJournal = null;
    private BoreJournalXMLWriter boreJournalXMLWriter = null;

        public MyBoreJournaler(BoreJournal boreJournal) {
            this.boreJournal = boreJournal;
            this.boreJournalXMLWriter = new BoreJournalXMLWriter(this.boreJournal);
        }//end constructor

        public void printTextFile() {
            //-- Test for Bore Logs folder, Make it if it doesn't exist
            boolean exists = false;
            File boreLogFolder = new File(MyGlobals.BORE_LOG_FOLDER);
            if(!boreLogFolder.exists()) exists = boreLogFolder.mkdirs();

            File boreLogTextFile = new File(this.boreJournal.getPathToFile());
            PrintWriter printWriter = null;
            try {
                //FIXME Is overwriting appropriate here?
                printWriter = new PrintWriter(new FileOutputStream(boreLogTextFile, false));
            } catch (FileNotFoundException e) {
                Log.d(this.getClass().getSimpleName(), e.getMessage());
            }//end try-catch
            if(printWriter != null) {
                printWriter.println(MyGlobals.BORE_DATA_SHEET_TITLE);
                printWriter.println(MyGlobals.EMPTY_LINE);
                printWriter.println(MyGlobals.CUSTOMER + this.boreJournal.getCustomer());
                printWriter.println(MyGlobals.LOCATION + this.boreJournal.getLocation());
                printWriter.println(MyGlobals.DATE + this.boreJournal.getDate());
                printWriter.println(MyGlobals.EMPTY_LINE);
                printWriter.close();
            }//end if
            /**
             * TODO testing
             */
            this.boreJournalXMLWriter.createXMLFile();
        }//end printTextFile()

        //-- PrintWriter println() each locate individually
        public void printLocate(String locate) {
            File boreLogTextFile = new File(this.boreJournal.getPathToFile());
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
            this.boreJournalXMLWriter.createXMLFile();
        }//end printLocate()


    public void overwriteTextFile() {
        //-- Test for Bore Logs folder, Make it if it doesn't exist
        boolean exists = false;
        File boreLogFolder = new File(MyGlobals.BORE_LOG_FOLDER);
        if(!boreLogFolder.exists()) exists = boreLogFolder.mkdirs();

        File boreJournalTextFile = new File(this.boreJournal.getPathToFile());
        PrintWriter printWriter = null;
        try {
            printWriter = new PrintWriter(new FileOutputStream(boreJournalTextFile, false));
        } catch (FileNotFoundException e) {
            Log.d(this.getClass().getSimpleName(), e.getMessage());
        }//end try-catch
        if(printWriter != null) {
            printWriter.println(MyGlobals.BORE_DATA_SHEET_TITLE);
            printWriter.println(MyGlobals.EMPTY_LINE);
            printWriter.println(MyGlobals.CUSTOMER + this.boreJournal.getCustomer());
            printWriter.println(MyGlobals.LOCATION + this.boreJournal.getLocation());
            printWriter.println(MyGlobals.DATE + this.boreJournal.getDate());
            printWriter.println(MyGlobals.EMPTY_LINE);
            for(String eachLocate : this.boreJournal.getLocates()) {
                printWriter.println(eachLocate);
            }//end for-each
            printWriter.close();
        }//end if
        /**
         * TODO testing
         */
        this.boreJournalXMLWriter.createXMLFile();
    }//end overwriteTextFile()

}//end MyBoreJournaler