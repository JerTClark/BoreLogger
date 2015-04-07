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
import inc.bison.documents.TextFileToBoreJournal;
import inc.bison.interfaces.ContinueBoreJournalInterface;
import inc.bison.interfaces.ConvertBoreJournalInterface;
import inc.bison.my.MyGlobals;
import inc.bison.my.MyHashMapMaker;
import inc.bison.my.MyShareIntent;
import inc.bison.my.MySimpleAdapter;
import inc.bison.my.MyToast;
import inc.bison.my.OpenWith;

/**
 * Created by Clark on 10/26/2014.
 */
public class ContinueBoreJournalDialog extends AlertDialog {

    private final String mapKey = "bore_log";
    private Context context = null;
    private ArrayList<Map<String, File>> listOfBoreJournals = null;
    private View titleView, contentView = null;
    private ListView listView = null;
    private MySimpleAdapter mySimpleAdapter = null;
    private TextView titleTextView, subTitleTextView = null;
    private String text = null;
    private ContinueBoreJournalInterface continueBoreJournalInterface = null;
    private ConvertBoreJournalInterface convertBoreJournalInterface = null;
    private int CODE = 0;

    public ContinueBoreJournalDialog(Context context, ContinueBoreJournalInterface continueBoreJournalInterface) {
        super(context);
        this.context = context;
        this.listOfBoreJournals = this.initListOfBoreJournals();
        this.continueBoreJournalInterface = continueBoreJournalInterface;
        this.CODE = MyGlobals.CONTINUE_JOURNAL;
    }//end constructor

    public ContinueBoreJournalDialog(Context context, ConvertBoreJournalInterface convertBoreJournalInterface, int CODE) {
        super(context);
        this.context = context;
        this.listOfBoreJournals = this.initListOfBoreJournals();
        this.convertBoreJournalInterface = convertBoreJournalInterface;
        this.CODE = CODE;
    }//end constructor

    public ContinueBoreJournalDialog(Context context, int CODE) {
        super(context);
        this.context = context;
        this.listOfBoreJournals = this.initListOfBoreJournals();
        this.CODE = CODE;
    }//end constructor

    private ArrayList<Map<String, File>> initListOfBoreJournals() {
        MyHashMapMaker myHashMapMaker = new MyHashMapMaker();
        ArrayList<Map<String, File>> tempList = new ArrayList<Map<String, File>>();
        ArrayList<File> listOfBoreJournals = new ArrayList<File>(Arrays.asList(new File(MyGlobals.BORE_JOURNAL_FOLDER).listFiles()));
        Collections.sort(listOfBoreJournals, new Comparator<File>() {
            @Override
            public int compare(File lhs, File rhs) {
                return lhs.compareTo(rhs);
            }//end compare
        });//end Collections.sort()
        for(File eachFile : listOfBoreJournals) {
            tempList.add(myHashMapMaker.addToArrayList(mapKey, eachFile));
        }//end for-each
        return tempList;
    }//end initListOfBoreJournals()

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

        this.titleTextView.setText("Bore journals");
        this.titleTextView.setTypeface(typeface);
        this.titleTextView.setTextColor(holo_blue);
        titleTextView.setTextAppearance(context, android.R.style.TextAppearance_Holo_Large);
        if(this.CODE == MyGlobals.CONTINUE_JOURNAL) this.subTitleTextView.setText("Select a bore journal to continue");
        else if(this.CODE == MyGlobals.CONVERT_JOURNAL) this.subTitleTextView.setText("Select a bore journal to convert");
        else if(this.CODE == MyGlobals.SHARE) this.subTitleTextView.setText("Select a bore journal to share");
        else this.subTitleTextView.setText("Select a bore journal to open");
        this.subTitleTextView.setTypeface(typefaceThin);

        //-- The content view
        final LayoutInflater contentInflater = (LayoutInflater) this.context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        this.contentView = contentInflater.inflate(R.layout.list_view, null);
        this.listView = (ListView) this.contentView.findViewById(R.id.listView);

        this.mySimpleAdapter = new MySimpleAdapter(this.context, this.listOfBoreJournals, R.layout.title_view,
                new String[] {this.mapKey}, new int[] {R.id.title_view_titleTextView}, "placeholder") {
            @Override
            public View getView(int position, View convertView, ViewGroup parent) {
                Typeface typeface = Typeface.createFromAsset(context.getAssets(), "fonts/Roboto-Light.ttf");
                View v = convertView;
                if (v == null) {
                    LayoutInflater inflater = (LayoutInflater) getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
                    v = inflater.inflate(R.layout.title_view, null);
                }//end if

                String text = listOfBoreJournals.get(position).get(mapKey).getName();

                TextView titleTextView = (TextView) v.findViewById(R.id.title_view_titleTextView);
                titleTextView.setText(text);
                titleTextView.setTypeface(typeface);

                Date date = new Date(listOfBoreJournals.get(position).get(mapKey).lastModified());
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
                File selectedBoreJournal = listOfBoreJournals.get(position).get(mapKey);
                if(MyGlobals.showDebugToasts)
                    new MyToast(context, "You selected", selectedBoreJournal.getAbsolutePath(), R.drawable.bison_document);
                if(CODE == MyGlobals.CONTINUE_JOURNAL) continueBoreJournalInterface.continueBoreJournal(new TextFileToBoreJournal(selectedBoreJournal.getAbsolutePath()).getBoreJournal());
                else if(CODE == MyGlobals.CONVERT_JOURNAL) convertBoreJournalInterface.onBoreJournalSelectedToConvert(new TextFileToBoreJournal(selectedBoreJournal.getAbsolutePath()).getBoreJournal());
                else if(CODE == MyGlobals.SHARE) new MyShareIntent(context, selectedBoreJournal.getAbsolutePath()).share();
                else new OpenWith(context, selectedBoreJournal.getAbsolutePath()).execute();
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

}//end ContinueBoreJournalDialog