package inc.bison.dialogs;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.SharedPreferences;
import android.graphics.Typeface;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.Map;

import inc.bison.borelogger.R;
import inc.bison.my.MyGlobals;
import inc.bison.my.MyHashMapMaker;
import inc.bison.my.MySimpleAdapter;
import inc.bison.my.MyToast;

/**
 * Created by Clark on 10/27/2014.
 */
public class ListLocatesDialog extends AlertDialog {

    private Context context = null;
    private ArrayList<String> locates = null;
    private ArrayList<Map<String, String>> mapArrayList = null;
    private int CODE = MyGlobals.BORE_LOG_CODE;
    private final String mapKey = "locate";
    private View titleView, contentView = null;
    private ListView listView = null;
    private MySimpleAdapter mySimpleAdapter = null;
    private TextView titleTextView, subTitleTextView = null;
    private String text = null;
    private OnUpdateLocatesListener updateLocatesListener = null;

    public ListLocatesDialog(Context context, ArrayList<String> locates, int code, OnUpdateLocatesListener updateLocatesListener) {
        super(context, AlertDialog.THEME_HOLO_LIGHT);
        this.context = context;
        this.locates = locates;
        this.mapArrayList = this.initListOfLocates();
        this.CODE = code;
        this.updateLocatesListener = updateLocatesListener;
    }//end constructor

    private ArrayList<Map<String, String>> initListOfLocates() {
        MyHashMapMaker myHashMapMaker = new MyHashMapMaker();
        ArrayList<Map<String, String>> tempList = new ArrayList<Map<String, String>>();
        for(String eachLocate : this.locates) {
            tempList.add(myHashMapMaker.addToArrayList(this.mapKey, eachLocate));
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
        imageView.setImageResource(R.drawable.bison_logo);

        Typeface typeface = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Bold.ttf");
        Typeface typefaceThin = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Light.ttf");
        int holo_blue = this.context.getResources().getColor(android.R.color.holo_blue_dark);

        this.titleTextView.setText("Locates");
        this.titleTextView.setTypeface(typeface);
        this.titleTextView.setTextColor(holo_blue);
        titleTextView.setTextAppearance(context, android.R.style.TextAppearance_Holo_Large);

        //-- Is it a bore log or journal?
        if(this.CODE == MyGlobals.BORE_LOG_CODE) this.subTitleTextView.setText("for this Bore Log");
        else this.subTitleTextView.setText("for this bore journal");
        this.subTitleTextView.setTypeface(typefaceThin);

        //-- The content view
        final LayoutInflater contentInflater = (LayoutInflater) this.context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        this.contentView = contentInflater.inflate(R.layout.list_view, null);
        this.listView = (ListView) this.contentView.findViewById(R.id.listView);

        this.mySimpleAdapter = new MySimpleAdapter(this.context, this.mapArrayList, R.layout.title_view,
                new String[] {this.mapKey}, new int[] {R.id.title_view_titleTextView}) {
            @Override
            public View getView(int position, View convertView, ViewGroup parent) {
                Typeface typeface = Typeface.createFromAsset(context.getAssets(), "fonts/Roboto-Light.ttf");
                Typeface handWriting = Typeface.createFromAsset(context.getAssets(), "fonts/RockSalt.ttf");
                View v = convertView;
                if (v == null) {
                    LayoutInflater inflater = (LayoutInflater) getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
                    v = inflater.inflate(R.layout.title_view, null);
                }//end if

                String text = mapArrayList.get(position).get(mapKey);

                TextView titleTextView = (TextView) v.findViewById(R.id.title_view_titleTextView);
                titleTextView.setText(text);
                titleTextView.setTypeface(handWriting);

                TextView subTitleTextView = (TextView) v.findViewById(R.id.title_view_subTitleTextView);
                subTitleTextView.setText("(touch to edit)");
                subTitleTextView.setTypeface(typeface);
                subTitleTextView.setTextColor(context.getResources().getColor(R.color.gray));
                subTitleTextView.setVisibility(View.GONE);

                ImageView thumbnail = (ImageView) v.findViewById(R.id.title_view_imageView);
                thumbnail.setImageResource(0);
                thumbnail.setVisibility(View.GONE);

                return v;
            }//end getView
        };
        this.listView.setAdapter(this.mySimpleAdapter);

        this.listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int position, long l) {
                if(MyGlobals.showDebugToasts)
                    new MyToast(context, "Locate", mapArrayList.get(position).get(mapKey), 0);
                new OnLocateSelectedDialog(context, mapArrayList.get(position).get(mapKey), position).showDialog();
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

    private class OnLocateSelectedDialog {

        private Context context = null;
        private String locateSelected = null;
        private AlertDialog.Builder builder = null;
        private int position = 0;

        public OnLocateSelectedDialog(Context context, String locateSelected, int position) {
            this.context = context;
            this.locateSelected = locateSelected;
            this.position = position;
        }//end constructor()

        public void showDialog() {
            this.builder = new AlertDialog.Builder(this.context, AlertDialog.THEME_HOLO_LIGHT);
            View titleView;
            LayoutInflater inflater = (LayoutInflater) this.context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            titleView = inflater.inflate(R.layout.title_view, null);
            Typeface typeface = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Light.ttf");
            Typeface typefaceBold = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Bold.ttf");
            int holo_blue = this.context.getResources().getColor(android.R.color.holo_blue_dark);
            int gray = this.context.getResources().getColor(R.color.dark_gray);

            TextView header = (TextView) titleView.findViewById(R.id.title_view_titleTextView);
            TextView subHeader = (TextView) titleView.findViewById(R.id.title_view_subTitleTextView);
            ImageView imageView = (ImageView) titleView.findViewById(R.id.title_view_imageView);
            imageView.setImageResource(R.drawable.bison_logo);
            header.setText("What would you like to do?");
            header.setTypeface(typefaceBold);
            header.setTextColor(holo_blue);
            subHeader.setText(locateSelected);
            subHeader.setTypeface(typeface);
            subHeader.setTextColor(gray);

            String[] choices = new String[] {"Edit", "Delete", "Insert"};
            this.builder.setCustomTitle(titleView);
            this.builder.setItems(choices, new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    switch(which) {
                        case 0:
                            edit();
                            break;
                        case 1:
                            delete();
                            break;
                        case 2:
                            insert();
                            break;
                    }//end switch
                }//end onClick()
            });//end DialogInterface.OnClickListener() anonymous inner class
            builder.setCancelable(true);
            builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {

                }//end onClick()
            });//end DialogInterface.OnClickListener() anonymous inner class
            builder.show();
        }//end showDialog()

        private void edit() {
            this.builder = new AlertDialog.Builder(this.context,AlertDialog.THEME_HOLO_LIGHT);
            View titleView;
            LayoutInflater inflater = (LayoutInflater) this.context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            titleView = inflater.inflate(R.layout.title_view, null);
            Typeface typeface = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Light.ttf");
            Typeface typefaceBold = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Bold.ttf");
            int holo_blue = this.context.getResources().getColor(android.R.color.holo_blue_dark);
            int gray = this.context.getResources().getColor(R.color.dark_gray);

            TextView header = (TextView) titleView.findViewById(R.id.title_view_titleTextView);
            TextView subHeader = (TextView) titleView.findViewById(R.id.title_view_subTitleTextView);
            ImageView imageView = (ImageView) titleView.findViewById(R.id.title_view_imageView);
            imageView.setImageResource(R.drawable.bison_logo);
            header.setText("Now editing");
            header.setTypeface(typefaceBold);
            header.setTextColor(holo_blue);
            subHeader.setText(locateSelected);
            subHeader.setTypeface(typeface);
            subHeader.setTextColor(gray);

            View contentView;
            contentView = inflater.inflate(R.layout.edit_locate, null);

            TextView textView = (TextView) contentView.findViewById(R.id.edit_locate_textView1);
            TextView subTextView = (TextView) contentView.findViewById(R.id.edit_locate_textView2);

            final EditText editText = (EditText) contentView.findViewById(R.id.edit_locate_editText);
            textView.setText("Now editing");
            textView.setTypeface(typefaceBold);
            subTextView.setText("\"" + locateSelected + "\"");
            subTextView.setTypeface(typeface);
            editText.setHint(locateSelected);
            editText.setText(locateSelected);
            editText.setTypeface(typeface);

//            this.builder.setCustomTitle(titleView);
            this.builder.setView(contentView);
            this.builder.setCancelable(true);
            this.builder.setNegativeButton("Cancel", new OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    //-- Cancels
                }//end onClick()
            });//end OnClickListener() anonymous inner class
            this.builder.setPositiveButton("Ok", new OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    locates.remove(position);
                    locates.add(position, editText.getText().toString());
                    if(MyGlobals.showDebugToasts)
                        new MyToast(context, "New entry", locates.get(position), 0);
                    updateLocatesListener.onUpdateLocates(locates, CODE);
                }//end onClick()
            });//end OnClickListener() anonymous inner class
            this.builder.show();
        }//end edit()

        private void delete() {
            this.builder = new AlertDialog.Builder(this.context,AlertDialog.THEME_HOLO_LIGHT);
            View titleView;
            LayoutInflater inflater = (LayoutInflater) this.context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            titleView = inflater.inflate(R.layout.title_view, null);
            Typeface typeface = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Light.ttf");
            Typeface typefaceBold = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Bold.ttf");
            int holo_blue = this.context.getResources().getColor(android.R.color.holo_blue_dark);
            int gray = this.context.getResources().getColor(R.color.dark_gray);

            TextView header = (TextView) titleView.findViewById(R.id.title_view_titleTextView);
            TextView subHeader = (TextView) titleView.findViewById(R.id.title_view_subTitleTextView);
            ImageView imageView = (ImageView) titleView.findViewById(R.id.title_view_imageView);
            imageView.setImageResource(R.drawable.bison_logo);
            header.setText("Delete this locate?");
            header.setTypeface(typefaceBold);
            header.setTextColor(holo_blue);
            subHeader.setText(locateSelected);
            subHeader.setTypeface(typeface);
            subHeader.setTextColor(gray);

            this.builder.setCustomTitle(titleView);
            this.builder.setCancelable(true);
            this.builder.setMessage(locateSelected + " will be removed");
            this.builder.setNegativeButton("Cancel", new OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    //-- Cancels
                }//end onClick()
            });//end OnClickListener() anonymous inner class
            this.builder.setPositiveButton("Ok", new OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    locates.remove(position);
                    locates = strippedList(locates);//-- Remove "Depth X: " (which are now out of numerical order)
                    locates = reNumberList(locates);//-- Re-adds "Depth X: " (restoring numerical order)
                    if(MyGlobals.showDebugToasts)
                        new MyToast(context, "Deleted", locateSelected, 0);
                    updateLocatesListener.onUpdateLocates(locates, CODE);
                }//end onClick()
            });//end OnClickListener() anonymous inner class
            this.builder.show();
        }//end delete()

        private void insert() {
            final SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(context);
            this.builder = new AlertDialog.Builder(this.context,AlertDialog.THEME_HOLO_LIGHT);
            View titleView;
            LayoutInflater inflater = (LayoutInflater) this.context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            titleView = inflater.inflate(R.layout.title_view, null);
            Typeface typeface = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Light.ttf");
            Typeface typefaceBold = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Bold.ttf");
            int holo_blue = this.context.getResources().getColor(android.R.color.holo_blue_dark);
            int gray = this.context.getResources().getColor(R.color.dark_gray);

            TextView header = (TextView) titleView.findViewById(R.id.title_view_titleTextView);
            TextView subHeader = (TextView) titleView.findViewById(R.id.title_view_subTitleTextView);
            ImageView imageView = (ImageView) titleView.findViewById(R.id.title_view_imageView);
            imageView.setImageResource(R.drawable.bison_logo);
            header.setText("Insert a locate");
            header.setTypeface(typefaceBold);
            header.setTextColor(holo_blue);
            subHeader.setText("prior to " + locateSelected);
            subHeader.setTypeface(typeface);
            subHeader.setTextColor(gray);

            View contentView;
            contentView = inflater.inflate(R.layout.edit_locate, null);

            TextView textView = (TextView) contentView.findViewById(R.id.edit_locate_textView1);
            TextView subTextView = (TextView) contentView.findViewById(R.id.edit_locate_textView2);

            final EditText editText = (EditText) contentView.findViewById(R.id.edit_locate_editText);
            textView.setText("The new locate will be inserted prior to ");
            textView.setTypeface(typefaceBold);
            subTextView.setText(locateSelected);
            subTextView.setTypeface(typeface);
            if(sharedPreferences.getBoolean(this.context.getString(R.string.format_depths_key), false)) editText.setHint("feet[space]inches");
            else editText.setHint("feet\'inches\"");
            editText.setTypeface(typeface);

            this.builder.setCustomTitle(titleView);
            this.builder.setView(contentView);
            this.builder.setCancelable(true);
            this.builder.setNegativeButton("Cancel", new OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    //-- Cancels
                }//end onClick()
            });//end OnClickListener() anonymous inner class
            this.builder.setPositiveButton("Ok", new OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    String newLocate = editText.getText().toString();;
                    if(sharedPreferences.getBoolean(context.getString(R.string.format_depths_key), false))
                        newLocate = newLocate.replace(" ", "\'") + "\"";
                    locates.add(position, newLocate);
                    locates = strippedList(locates);//-- Remove "Depth X: " (which are now out of numerical order)
                    locates = reNumberList(locates);//-- Re-adds "Depth X: " (restoring numerical order)
                    if(MyGlobals.showDebugToasts)
                        new MyToast(context, "Inserted", editText.getText().toString() + " prior to " + locateSelected, 0);
                    updateLocatesListener.onUpdateLocates(locates, CODE);
                }//end onClick()
            });//end OnClickListener() anonymous inner class
            this.builder.show();
        }//end insert()

        private ArrayList<String> strippedList(ArrayList<String> originalList) {
            ArrayList<String> strippedList = new ArrayList<String>();
            for(String eachLocate : originalList) {
                eachLocate = eachLocate.substring(eachLocate.lastIndexOf(": ") + 2);
                strippedList.add(eachLocate);
            }//end for-each
            return strippedList;
        }//end strippedList()

        private ArrayList<String> reNumberList(ArrayList<String> strippedList) {
            ArrayList<String> reNumberedList = new ArrayList<String>();
            int counter = 1;
            for(String eachStrippedLocate : strippedList) {
                eachStrippedLocate = "Depth " + counter + ": " + eachStrippedLocate;
                reNumberedList.add(eachStrippedLocate);
                counter++;
            }//end for-each
            return reNumberedList;
        }//end reNumberList()

    }//end OnLocateSelectedDialog

    public interface OnUpdateLocatesListener {
        public void onUpdateLocates(ArrayList<String> newLocates, int code);
    }//end interface

}//end ListLocatesDialog