package inc.bison.documents;

import android.util.Log;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

import inc.bison.documents.BoreLog;
import inc.bison.my.MyGlobals;

/**
 * Created by Clark on 10/26/2014.
 */
public class TextFileToBoreLog {

    private String pathToTextFile = null;

    public TextFileToBoreLog(String pathToTextFile) {
        this.pathToTextFile = pathToTextFile;
    }//end

    public BoreLog getBoreLog() {
        BoreLog boreLog = new BoreLog();
        boreLog.initLocatesList();
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
                    boreLog.setCustomer(lineRead.replace(MyGlobals.CUSTOMER, ""));
                else if (lineRead.startsWith(MyGlobals.CONDUIT))
                    boreLog.setConduit(lineRead.replace(MyGlobals.CONDUIT, ""));
                else if (lineRead.startsWith(MyGlobals.LOCATION))
                    boreLog.setLocation(lineRead.replace(MyGlobals.LOCATION, ""));
                else if (lineRead.startsWith(MyGlobals.DATE))
                    boreLog.setDate(lineRead.replace(MyGlobals.DATE, ""));
                else if (lineRead.startsWith(MyGlobals.LENGTH))
                    boreLog.setLengthOfBore(lineRead.replace(MyGlobals.LENGTH, ""));
                else if (lineRead.startsWith(MyGlobals.DEPTH)) boreLog.addScannedLocate(lineRead);
            }//end while
            scanner.close();
        }//end if
        return boreLog;
    }//end getBoreLog()

}//end TextFileToBoreLog