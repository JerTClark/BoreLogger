package inc.bison.data;

import android.util.Log;
import android.util.Xml;

import org.xmlpull.v1.XmlSerializer;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import inc.bison.documents.BoreLog;
import inc.bison.my.MyGlobals;

public class BoreLogXMLWriter {

    private final String CUSTOMER = "customer", CONDUIT = "description", LOCATION = "location",
        LENGTH_OF_BORE = "length-of-bore", DATE = "date", BORE_LOG = "bore-log", TAB = "\t", NEW_LINE = "\n",
        NS = "bison", LOCATES = "locates-list", LOCATE = "locate";
    private BoreLog boreLog;
    private String xmlFilePath;

    public BoreLogXMLWriter(BoreLog boreLog) {
        this.boreLog = boreLog;
        this.xmlFilePath = getXmlFilePath();
    }

    private String getXmlFilePath() {
//        this.boreLog.init();
        return new File(this.boreLog.getTextFilePath()).getName().replace(".txt", ".bison");
    }

    public void createXMLFile() {
        XmlSerializer xmlSerializer = Xml.newSerializer();

        try {
            xmlSerializer.setOutput(new FileWriter(MyGlobals.LOG_DATA_FOLDER + this.xmlFilePath));
            //Writes the header stuff (aka "<?xml version="1.0" encoding="utf-8"?>")
            xmlSerializer.startDocument("UTF-8", true);
            xmlSerializer.text(NEW_LINE);

            //Begin the data documentation with an opening <bore-log> tag
            xmlSerializer.startTag("", BORE_LOG);
            xmlSerializer.attribute("", "id", new File(this.xmlFilePath).getName().replace(".bison",""));//try to set an id attr
            xmlSerializer.text(NEW_LINE);

            //-- Customer
            xmlSerializer.text(TAB);
            xmlSerializer.startTag("", CUSTOMER);
            xmlSerializer.text(this.boreLog.getCustomer());
            xmlSerializer.endTag("", CUSTOMER);
            xmlSerializer.text(NEW_LINE);

            //-- Conduit
            xmlSerializer.text(TAB);
            xmlSerializer.startTag("", CONDUIT);
            xmlSerializer.text(this.boreLog.getConduit());
            xmlSerializer.endTag("", CONDUIT);
            xmlSerializer.text(NEW_LINE);

            //-- Location
            xmlSerializer.text(TAB);
            xmlSerializer.startTag("", LOCATION);
            xmlSerializer.text(this.boreLog.getLocation());
            xmlSerializer.endTag("", LOCATION);
            xmlSerializer.text(NEW_LINE);

            //-- Length of Bore
            xmlSerializer.text(TAB);
            xmlSerializer.startTag("", LENGTH_OF_BORE);
            xmlSerializer.text(this.boreLog.getLengthOfBore());
            xmlSerializer.endTag("", LENGTH_OF_BORE);
            xmlSerializer.text(NEW_LINE);

            //-- Date
            xmlSerializer.text(TAB);
            xmlSerializer.startTag("", DATE);
            xmlSerializer.text(this.boreLog.getDate());
            xmlSerializer.endTag("", DATE);
            xmlSerializer.text(NEW_LINE);

            //-- Locates
            xmlSerializer.text(TAB);
            xmlSerializer.text(TAB);
            xmlSerializer.startTag("", LOCATES);
            xmlSerializer.text(NEW_LINE);
            for(String locate : this.boreLog.getLocates()) {
                xmlSerializer.text(TAB);
                xmlSerializer.text(TAB);
                xmlSerializer.text(TAB);
                xmlSerializer.startTag("", LOCATE);
                xmlSerializer.text(locate);
                xmlSerializer.endTag("", LOCATE);
                xmlSerializer.text(NEW_LINE);
            }
            xmlSerializer.text(TAB);
            xmlSerializer.endTag("", LOCATES);
            xmlSerializer.text(NEW_LINE);

            //Close out the </bore-log> tag
            xmlSerializer.endTag("", BORE_LOG);

            //End the document
            xmlSerializer.endDocument();

        } catch (IOException e) {
            Log.e("BoreLogXMLWriter", e.getMessage() + " PATH: " + this.xmlFilePath);
        }

    }

}