package inc.bison.dialogs;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.graphics.Typeface;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.Map;

import inc.bison.borelogger.R;
import inc.bison.documents.TextFileToBoreLog;
import inc.bison.documents.BoreLogPDF;
import inc.bison.interfaces.ContinueBoreLogInterface;
import inc.bison.my.MyGlobals;
import inc.bison.my.MyHashMapMaker;
import inc.bison.my.MyShareIntent;
import inc.bison.my.MySimpleAdapter;
import inc.bison.my.MyToast;
import inc.bison.my.OpenWith;

/**
 * Created by Clark on 10/25/2014.
 */
public class ContinueBoreLogDialog extends AlertDialog {

    private final String mapKey = "bore_log";
    private Context context = null;
    private ArrayList<Map<String, File>> listOfBoreLogs = null;
    private View titleView, contentView = null;
    private ListView listView = null;
    private MySimpleAdapter mySimpleAdapter = null;
    private TextView titleTextView, subTitleTextView = null;
    private String text = null;
    private ContinueBoreLogInterface continueBoreLogInterface = null;
    private int CODE = 0;

    public ContinueBoreLogDialog(Context context, ContinueBoreLogInterface continueBoreLogInterface) {
        super(context);
        this.context = context;
        this.listOfBoreLogs = this.initListOfBoreLogs();
        this.continueBoreLogInterface = continueBoreLogInterface;
    }//end constructor

    public ContinueBoreLogDialog(Context context, ContinueBoreLogInterface continueBoreLogInterface, int CODE) {
        super(context);
        this.CODE = CODE;
        this.context = context;
        this.listOfBoreLogs = this.initListOfBoreLogs();
        this.continueBoreLogInterface = continueBoreLogInterface;
    }//end constructor

    public ContinueBoreLogDialog(Context context, int CODE) {
        super(context);
        this.CODE = CODE;
        this.context = context;
        this.listOfBoreLogs = this.initListOfBoreLogs();
    }//end constructor

    private ArrayList<Map<String, File>> initListOfBoreLogs() {
        MyHashMapMaker myHashMapMaker = new MyHashMapMaker();
        ArrayList<Map<String, File>> tempList = new ArrayList<Map<String, File>>();
        ArrayList<File> listOfFiles = null;
        if(this.CODE != MyGlobals.OPEN_PDF && this.CODE != MyGlobals.SHARE_PDF) {
            listOfFiles = new ArrayList<File>(Arrays.asList(new File(MyGlobals.BORE_LOG_FOLDER).listFiles()));
//            for (File boreLogFile : new File(MyGlobals.BORE_LOG_FOLDER).listFiles()) {
//                tempList.add(myHashMapMaker.addToArrayList(this.mapKey, boreLogFile));
//            }//end for-each
        }//end if
        else {
            listOfFiles = new ArrayList<File>(Arrays.asList(new File(MyGlobals.BORE_LOG_PDF).listFiles()));
//            for (File boreLogFile : new File(MyGlobals.BORE_LOG_PDF).listFiles()) {
//                tempList.add(myHashMapMaker.addToArrayList(this.mapKey, boreLogFile));
//            }//end for-each
        }//end if-else
        Collections.sort(listOfFiles, new Comparator<File>() {
            @Override
            public int compare(File lhs, File rhs) {
                return lhs.compareTo(rhs);
            }//end compareTo()
        });//end Collections.sort()
        for(File eachFile : listOfFiles) {
            tempList.add(myHashMapMaker.addToArrayList(mapKey, eachFile));
        }//end for-each
        return tempList;
    }//end initListOfBoreLogs()

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        //-- The title view
        LayoutInflater inflater = (LayoutInflater) this.context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        this.titleView = inflater.inflate(R.layout.title_view, null);

        this.titleTextView = (TextView) titleView.findViewById(R.id.title_view_titleTextView);
        this.subTitleTextView = (TextView) titleView.findViewById(R.id.title_view_subTitleTextView);
        ImageView imageView = (ImageView) titleView.findViewById(R.id.title_view_imageView);
        imageView.setVisibility(View.GONE);

        Typeface typeface = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Bold.ttf");
        Typeface typefaceThin = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Light.ttf");
        int holo_blue = this.context.getResources().getColor(android.R.color.holo_blue_dark);

        if(this.CODE != MyGlobals.OPEN_PDF && this.CODE != MyGlobals.SHARE_PDF) this.titleTextView.setText("Bore logs");
        else if(this.CODE == MyGlobals.SHARE) this.titleTextView.setText("Bore logs");
        else this.titleTextView.setText("Bore log PDFs");
        this.titleTextView.setTypeface(typeface);
        this.titleTextView.setTextColor(holo_blue);
        titleTextView.setTextAppearance(context, android.R.style.TextAppearance_Holo_Large);
        if(this.CODE == 0) this.subTitleTextView.setText("Select a bore log to continue");
        else if(this.CODE == MyGlobals.OPEN) this.subTitleTextView.setText("Select a bore log to open");
        else if(this.CODE == MyGlobals.CONVERT_LOG_TO_PDF) this.subTitleTextView.setText("Select a bore log to finalize");
        else if(this.CODE == MyGlobals.SHARE) this.subTitleTextView.setText("Select a bore log to share");
        else if(this.CODE == MyGlobals.SHARE_PDF) this.subTitleTextView.setText("Select a bore log PDF to share");
        else this.subTitleTextView.setText("Select a PDF to open");
        this.subTitleTextView.setTypeface(typefaceThin);

        //-- The content view
        final LayoutInflater contentInflater = (LayoutInflater) this.context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        this.contentView = contentInflater.inflate(R.layout.list_view, null);
        this.listView = (ListView) this.contentView.findViewById(R.id.listView);

        this.mySimpleAdapter = new MySimpleAdapter(this.context, this.listOfBoreLogs, R.layout.title_view,
                new String[] {this.mapKey}, new int[] {R.id.title_view_titleTextView}, "placeholder") {
            @Override
            public View getView(int position, View convertView, ViewGroup parent) {
                Typeface typeface = Typeface.createFromAsset(context.getAssets(), "fonts/Roboto-Light.ttf");
                View v = convertView;
                if (v == null) {
                    LayoutInflater inflater = (LayoutInflater) getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
                    v = inflater.inflate(R.layout.title_view, null);
                }//end if

                String text = listOfBoreLogs.get(position).get(mapKey).getName();

                TextView titleTextView = (TextView) v.findViewById(R.id.title_view_titleTextView);
                titleTextView.setText(text);
                titleTextView.setTypeface(typeface);

                Date date = new Date(listOfBoreLogs.get(position).get(mapKey).lastModified());
                TextView subTitleTextView = (TextView) v.findViewById(R.id.title_view_subTitleTextView);
                subTitleTextView.setText("Last mod: " + date);
                subTitleTextView.setTypeface(typeface);

                ImageView thumbnail = (ImageView) v.findViewById(R.id.title_view_imageView);
                thumbnail.setImageResource(R.drawable.bison_document);

                return v;
            }//end getView
        };
        this.listView.setAdapter(this.mySimpleAdapter);

        this.listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int position, long l) {
                File selectedBoreLog = listOfBoreLogs.get(position).get(mapKey);
                if(MyGlobals.showDebugToasts)
                    new MyToast(context, "You selected", selectedBoreLog.getAbsolutePath(), R.drawable.bison_document);
                if(CODE == 0) continueBoreLogInterface.boreLogSelected(new TextFileToBoreLog(selectedBoreLog.getAbsolutePath()).getBoreLog());
                else if(CODE == MyGlobals.CONVERT_LOG_TO_PDF) {
                    new BoreLogPDF(context, new TextFileToBoreLog(selectedBoreLog.getAbsolutePath()).getBoreLog()).execute();
                }//end else if
                else if(CODE == MyGlobals.SHARE_PDF || CODE == MyGlobals.SHARE)
                    new MyShareIntent(context, selectedBoreLog.getAbsolutePath()).share();
                else new OpenWith(context, selectedBoreLog.getAbsolutePath()).execute();
                dismiss();
            }//end onClick()
        });//end AdapterView.OnItemClickListener() anonymous inner class

        setCustomTitle(this.titleView);
        setView(this.contentView);
        setButton(AlertDialog.BUTTON_NEGATIVE, "Cancel", new OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                dismiss();
            }//end onClick()
        });//end OnClickListener()

        super.onCreate(savedInstanceState);
    }//end onCreate()

}//end ContinueBoreLogDialog