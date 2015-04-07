package inc.bison.documents;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Log;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import inc.bison.my.MyGlobals;
import inc.bison.my.MyToast;
import inc.bison.pdfwriter.PDFWriter;
import inc.bison.pdfwriter.StandardFonts;

public class BoreLogPDF {

    private Context context = null;
    private BoreLog boreLog = null;//-- I will get a fully initialized Bore Log object from the Bore Log text file
    private PDFWriter boreLogPDFWriter = null;//-- PDFWriter

    public BoreLogPDF() {

    }//end empty constructor

    public BoreLogPDF(Context context, BoreLog boreLog) {
        this.context = context;
        this.boreLog = boreLog;
        this.boreLog.init();
    }//end constructor

    public BoreLogPDF(Context context, String pathToBoreLog) {
        this.context = context;
        this.boreLog = new TextFileToBoreLog(pathToBoreLog).getBoreLog();
        this.boreLog.init();
    }//end constructor

    //-- Getters and Setters
    public BoreLog getBoreLog() {
        return boreLog;
    }

    public void setBoreLog(BoreLog boreLog) {
        this.boreLog = boreLog;
    }//end Getters and Setters

    public void execute() {
        if(MyGlobals.showDebugToasts) new MyToast(this.context, "Pre-determined PDF path", this.boreLog.getPDFName(), 0);
        this.createPDF();
    }//end execute()

    //-- PDF work goes here
    private void createPDF() {
        //-- Get PDFWriter() object
        boreLogPDFWriter = new PDFWriter();
        //-- Set font to Times Roman
        boreLogPDFWriter.setFont(StandardFonts.SUBTYPE, StandardFonts.TIMES_ROMAN);
        //--BELOW: This is where the BORE-SPECIFIC DATA is written to the PDF document
        //-- Header "Bison, Inc. Bore Data Sheet"
        boreLogPDFWriter.addText(10, 800, 35, "Bison, Inc. Bore Data Sheet");
        boreLogPDFWriter.addLine(10, 790, 550, 790);
        //-- Customer Info
        boreLogPDFWriter.addText(10, 775, 14, MyGlobals.CUSTOMER + this.boreLog.getCustomer());
        //-- Date Info
        boreLogPDFWriter.addText(10, 760, 14, MyGlobals.DATE + this.boreLog.getDate());
        //-- Location Info
        boreLogPDFWriter.addText(10, 745, 14, MyGlobals.LOCATION + this.boreLog.getLocation());
        //-- Product Info
        boreLogPDFWriter.addText(10, 730, 14, MyGlobals.CONDUIT + this.boreLog.getConduit());
        //-- Length of Bore Info
        boreLogPDFWriter.addText(10, 715, 14, MyGlobals.LENGTH + this.boreLog.getLengthOfBore());
        boreLogPDFWriter.addLine(10, 710, 550, 710);
        //-- Begin Bore marker
        boreLogPDFWriter.addText(10, 685, 14, MyGlobals.BEGIN_BORE);
        //-- Calls method to scan and write depths
        getDepthsAndUtilities();
        //-- Add an image to PDF
        try {
            Bitmap bisonLogo = BitmapFactory.decodeStream(this.context.getAssets().open("bitmaps/enhanced_bison_logo_smoke_pdf.png"));
            boreLogPDFWriter.addImage(475, 690, bisonLogo);
        } catch (IOException e) {
            Log.d(this.getClass().getSimpleName(), e.getMessage());
            showFailMessage(e.getMessage());
        }//end try-catch block
        //-- Output to File
        outputToFile(this.boreLog.getPDFName(), boreLogAsString(), MyGlobals.ENCODING);
    }//end createPDF()

    //-- Depths and Utilities
    private void getDepthsAndUtilities() {
        //-- Depths begin at line 12 with current Bore Log text files but will change when comments are added
        int lineCounter = 1; //-- Used as a counter of locates
        int topPositionFromBottom = 670;//-- Control variable measuring bottom to top
        int leftPosition = 10;//-- Control variable measuring left-to-right
        int columnNumber = 1;//-- Control variable representing current column number
        for(String eachLocate : this.boreLog.getLocates()) {
            //-- Else-if line progression reaches line 12 and above, record the data (depths and utilities)
            /**
             * TODO WTF was I trying to do here? Originally, this was
             * if(lineCounter > 3)...
             */
            if(lineCounter > 0) {
                //-- Write each depth by calling writeDepth()
                writeDepth(leftPosition, topPositionFromBottom, eachLocate);
                //-- Decrement topPositionFromBottom parameter by 15 for each line written
                topPositionFromBottom -= 15;
                //-- Determine if creating a new page is necessary
                if(topPositionFromBottom <= 30) {
                    //-- If maximum of three (3) columns has been exceeded
                    if(columnNumber == 3) {
                        //-- Start a new page
                        boreLogPDFWriter.newPage();
                        //-- Reset columnNumber, leftPosition, and topPositionFromBottom
                        columnNumber = 1;
                        leftPosition = 10;
                        topPositionFromBottom = 670;
                    }//end if
                    //-- Else create a new column by adjusting leftPosition and topPositionFromBottom values
                    else {
                        //-- Shifts the leftPosition to the right by a value of 80
                        leftPosition += 200;
                        //-- Resets topPositionFromBottom to 700
                        topPositionFromBottom = 670;
                        //-- Increments column by 1
                        columnNumber ++;
                    }//end else
                }//end if
            }//end else-if
            lineCounter++; //-- Increment line counter by 1 each iteration of while loop
        }//end for-each
        endBore(leftPosition, topPositionFromBottom);
    }//end getDepthsAndUtilities()

    //-- Writes each depth to PDF
    private void writeDepth(int leftPosition, int topPositionFromBottom, String text) {
        boreLogPDFWriter.addText(leftPosition, topPositionFromBottom, 14, text);
    }//end writeDepth()

    //-- Adds "End Bore" to PDF
    public void endBore(int leftPosition, int topPositionFromBottom) {
        //-- Add text "End Bore"
        boreLogPDFWriter.addText(leftPosition, topPositionFromBottom, 14, MyGlobals.END_BORE);
    }//-- end endBore()

    //-- Returns boreLogPDFWriter.asString()
    private String boreLogAsString() {
        return boreLogPDFWriter.asString();
    }//end boreLogAsString()

     //-- outputToFile
    private void outputToFile(String fileName, String pdfContent, String encoding) {
        File newFile = new File(fileName);
        try {
            //-- TEST for LG phone, this line might need be commented-out
            newFile.createNewFile();
            try {
                FileOutputStream pdfFile = new FileOutputStream(newFile);
                pdfFile.write(pdfContent.getBytes(encoding));
                pdfFile.close();
                showSuccessMessage();
            } catch(FileNotFoundException e) {
                Log.d(this.getClass().getSimpleName(), e.getMessage());
                showFailMessage(e.getMessage());
            }//end inner try-catch block
        } catch(IOException e) {
            Log.d(this.getClass().getSimpleName(), e.getMessage());
            showFailMessage(e.getMessage());
        }//end outer try-catch block
    }//end outputToFile()

    //-- Displays message on successful creation of PDF file
    private void showSuccessMessage() {
        new MyToast(this.context, "PDF file created", this.boreLog.getPDFName() + " created successfully", 0);
    }//end showSuccessMessage()

    private void showFailMessage(String message) {
        new MyToast(this.context, "ERROR", this.boreLog.getPDFName() + " couldn't be created:"
                + "\n" + message, 0);
    }//showFailMessage()

}// end BoreLogPDF class