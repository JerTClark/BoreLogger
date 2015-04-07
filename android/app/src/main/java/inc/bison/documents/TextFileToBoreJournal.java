package inc.bison.documents;

import android.util.Log;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

import inc.bison.documents.BoreJournal;
import inc.bison.documents.BoreLog;
import inc.bison.my.MyGlobals;

/**
 * Created by Clark on 10/26/2014.
 */
public class TextFileToBoreJournal {

    private String pathToTextFile = null;

    public TextFileToBoreJournal(String pathToTextFile) {
        this.pathToTextFile = pathToTextFile;
    }//end

    public BoreJournal getBoreJournal() {
        BoreJournal boreJournal = new BoreJournal();
        Scanner scanner = null;
        String lineRead = null;
        try {
            scanner = new Scanner(new File(this.pathToTextFile));
        } catch (FileNotFoundException e) {
            Log.d(this.getClass().getSimpleName(), e.getMessage());
        }//end try-catch
        if(scanner != null) {
            while (scanner.hasNext()) {
                lineRead = scanner.nextLine();
                if (lineRead.startsWith(MyGlobals.CUSTOMER))
                    boreJournal.setCustomer(lineRead.replace(MyGlobals.CUSTOMER, ""));
                else if (lineRead.startsWith(MyGlobals.LOCATION))
                    boreJournal.setLocation(lineRead.replace(MyGlobals.LOCATION, ""));
                else if (lineRead.startsWith(MyGlobals.DATE))
                    boreJournal.setDate(lineRead.replace(MyGlobals.DATE, ""));
                else if (lineRead.startsWith(MyGlobals.DEPTH)) boreJournal.addScannedLocate(lineRead);
            }//end while
            scanner.close();
        }//end if
        return boreJournal;
    }//end getBoreLog()

}//end TextFileToBoreJournal