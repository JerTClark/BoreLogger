package inc.bison.data;

import android.util.Log;
import android.util.Xml;

import org.xmlpull.v1.XmlSerializer;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import inc.bison.documents.BoreJournal;
import inc.bison.my.MyGlobals;

public class BoreJournalXMLWriter {
    private final String CUSTOMER = "customer", LOCATION = "location", DATE = "date",
            BORE_JOURNAL = "bore-journal", TAB = "\t", NEW_LINE = "\n",
            NS = "bison", LOCATES = "locates-list", LOCATE = "locate",
            MONTH = "month", DAY = "day", YEAR = "year", HOUR = "hour", MINUTE = "minute",
            SECOND = "second", NOTE = "note";
    private BoreJournal boreJournal;
    private String xmlFilePath;

    public BoreJournalXMLWriter(BoreJournal boreJournal) {
        this.boreJournal = boreJournal;
        this.xmlFilePath = getXmlFilePath();
    }

    private String getXmlFilePath() {
        return new File(this.boreJournal.getPathToFile()).getName().replace(".txt", ".bison");
    }

    public void createXMLFile() {
        XmlSerializer xmlSerializer = Xml.newSerializer();

        try {
            xmlSerializer.setOutput(new FileWriter(MyGlobals.JOURNAL_DATA_FOLDER + this.xmlFilePath));
            //Writes the header stuff (aka "<?xml version="1.0" encoding="utf-8"?>")
            xmlSerializer.startDocument("UTF-8", true);
            xmlSerializer.text(NEW_LINE);

            //Begin the data documentation with an opening <bore-journal> tag
            xmlSerializer.startTag("", BORE_JOURNAL);
            xmlSerializer.attribute("", "id", new File(this.xmlFilePath).getName().replace(".bison",""));//try to set an id attr
            xmlSerializer.text(NEW_LINE);

            //-- Customer
            xmlSerializer.text(TAB);
            xmlSerializer.startTag("", CUSTOMER);
            xmlSerializer.text(this.boreJournal.getCustomer());
            xmlSerializer.endTag("", CUSTOMER);
            xmlSerializer.text(NEW_LINE);

            //-- Location
            xmlSerializer.text(TAB);
            xmlSerializer.startTag("", LOCATION);
            xmlSerializer.text(this.boreJournal.getLocation());
            xmlSerializer.endTag("", LOCATION);
            xmlSerializer.text(NEW_LINE);

            //-- Date
            xmlSerializer.text(TAB);
            xmlSerializer.startTag("", DATE);
            xmlSerializer.text(this.boreJournal.getDate());
            xmlSerializer.endTag("", DATE);
            xmlSerializer.text(NEW_LINE);

            //-- Locates
            xmlSerializer.text(TAB);
            xmlSerializer.text(TAB);
            xmlSerializer.startTag("", LOCATES);
            xmlSerializer.text(NEW_LINE);
            xmlSerializer.text(NEW_LINE);
            for(String locate : this.boreJournal.getLocates()) {
                int monthIndex = locate.lastIndexOf(MyGlobals.BORE_JOURNAL_RECORDED_TIME),
                        dayIndex = locate.lastIndexOf(MyGlobals.DAY),
                        yearIndex = locate.lastIndexOf(MyGlobals.YEAR),
                        hourIndex = locate.lastIndexOf(MyGlobals.HOUR),
                        minuteIndex = locate.lastIndexOf(MyGlobals.MIN),
                        secondIndex = locate.lastIndexOf(MyGlobals.SEC);
                String depth = locate.substring(0, monthIndex),
                        month = locate.substring(monthIndex, dayIndex).replace(MyGlobals.BORE_JOURNAL_RECORDED_TIME, ""),
                        day = locate.substring(dayIndex, yearIndex).replace(MyGlobals.DAY, ""),
                        year = locate.substring(yearIndex, hourIndex).replace(MyGlobals.YEAR, ""),
                        hour = locate.substring(hourIndex, minuteIndex).replace(MyGlobals.HOUR, ""),
                        minute = locate.substring(minuteIndex, secondIndex).replace(MyGlobals.MIN, ""),
                        second = locate.substring(secondIndex).replace(MyGlobals.SEC, "");

                //-- In the event of a note
                String note = "";
                int noteIndex = 0;
                boolean hasNote = depth.contains(MyGlobals.NOTE);
                if(hasNote) {
                    noteIndex = depth.lastIndexOf(MyGlobals.NOTE);
                    note = depth.substring(noteIndex).replace(MyGlobals.NOTE, "");
                    depth = depth.substring(0, noteIndex);
                }//end if

                //Write the data to XML
                xmlSerializer.text(TAB);
                xmlSerializer.text(TAB);
                xmlSerializer.text(TAB);
                xmlSerializer.startTag("", LOCATE);
                xmlSerializer.attribute("", MONTH, month);
                xmlSerializer.attribute("", DAY, day);
                xmlSerializer.attribute("", YEAR, year);
                xmlSerializer.attribute("", HOUR, hour);
                xmlSerializer.attribute("", MINUTE, minute);
                xmlSerializer.attribute("", SECOND, second);
                xmlSerializer.text(depth);

                //Note tags and stuff
                if(hasNote) {
                    xmlSerializer.text(NEW_LINE);
                    xmlSerializer.text(TAB);
                    xmlSerializer.text(TAB);
                    xmlSerializer.text(TAB);
                    xmlSerializer.text(TAB);
                    xmlSerializer.startTag("", NOTE);
                    xmlSerializer.text(note);
                    xmlSerializer.endTag("", NOTE);
                    xmlSerializer.text(NEW_LINE);
                }

                xmlSerializer.endTag("", LOCATE);
                xmlSerializer.text(NEW_LINE);
                xmlSerializer.text(NEW_LINE);
            }
            xmlSerializer.text(TAB);
            xmlSerializer.endTag("", LOCATES);
            xmlSerializer.text(NEW_LINE);

            //Close out the </bore-log> tag
            xmlSerializer.endTag("", BORE_JOURNAL);

            //End the document
            xmlSerializer.endDocument();

        } catch (IOException e) {
            Log.e("BoreLogXMLWriter", e.getMessage() + " PATH: " + this.xmlFilePath);
        }

    }
}
