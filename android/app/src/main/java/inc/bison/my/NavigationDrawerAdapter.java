package inc.bison.my;

import android.app.Activity;
import android.content.Context;
import android.graphics.Typeface;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import inc.bison.borelogger.R;

/**
 * Created by Clark on 7/9/2014.
 */
public class NavigationDrawerAdapter extends ArrayAdapter<String> {

    private final Context context;
    private final String listItems[];
    private final int images[];

    public NavigationDrawerAdapter(Context context, String[] listItems, int[] images) {
        super(context, R.layout.list_item, listItems);
        this.context = context;
        this.listItems = listItems;
        this.images = images;
    }//end Constructor

    @Override
    public View getView(int position, View view, ViewGroup parent) {
        LayoutInflater inflater = ((Activity) context).getLayoutInflater();

        View rowView= inflater.inflate(R.layout.list_item, null);

        TextView txtTitle = (TextView) rowView.findViewById(R.id.list_item_textView);
        ImageView imageView = (ImageView) rowView.findViewById(R.id.thumbnail);
        Typeface typeface = Typeface.createFromAsset(context.getAssets(), "fonts/ROUGD___.TTF");

        txtTitle.setText(listItems[position]);
        txtTitle.setTypeface(typeface);

        imageView.setImageResource(images[position]);

        return rowView;

    }//end getView()
}//end NavigationDrawerAdapter
