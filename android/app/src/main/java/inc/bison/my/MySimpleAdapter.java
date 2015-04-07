package inc.bison.my;

import android.content.Context;
import android.graphics.Typeface;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.SimpleAdapter;
import android.widget.TextView;

import java.io.File;
import java.util.ArrayList;
import java.util.Map;

/**
 * Created by Clark on 9/18/2014.
 */
public class MySimpleAdapter extends SimpleAdapter {

    private Context context = null;
    private ArrayList<Map<String, String>> listItems = null;
    private int listItemLayout = 0;
    private String[] keys = null;
    private int[] listItemTextView = null;

    public MySimpleAdapter(Context context, ArrayList<Map<String, String>> listItems,
                           int listItemLayout, String[] keys, int[] listItemTextView) {
        super(context, listItems, listItemLayout, keys, listItemTextView);
        this.context = context;
        this.listItems = listItems;
        this.listItemLayout = listItemLayout;
        this.keys = keys;
        this.listItemTextView = listItemTextView;
    }//end constructor

    public MySimpleAdapter(Context context, ArrayList<Map<String, File>> listItems,
                           int listItemLayout, String[] keys, int[] listItemTextView, String wasteParam) {
        super(context, listItems, listItemLayout, keys, listItemTextView);
        this.context = context;
        this.listItemLayout = listItemLayout;
        this.keys = keys;
        this.listItemTextView = listItemTextView;
    }//end constructor

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        Typeface typeface = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Thin.ttf");
        Typeface typefaceBold = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Regular.ttf");
        View v = convertView;
        if (v == null) {
            LayoutInflater inflater = (LayoutInflater) this.context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            v = inflater.inflate(this.listItemLayout, null);
        }//end i
        String item = this.listItems.get(position).get(this.keys[0]).toString();//-- 0 for now

        TextView textView = (TextView) v.findViewById(listItemTextView[0]);//-- 0 for now...
        textView.setTypeface(typefaceBold);
        textView.setText(item);
        return v;
    }//end getView
}//end MySimpleAdapter