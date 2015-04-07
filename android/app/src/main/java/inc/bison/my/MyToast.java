package inc.bison.my;

import android.content.Context;
import android.graphics.Typeface;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import inc.bison.borelogger.R;

/**
 * Created by Clark on 10/2/2014.
 */
public class MyToast extends Toast {

    private Context context = null;
    private String message = null;
    private String header = null;
    private int drawableResourceId = 0;

    public MyToast(Context context, String message) {
        super(context);
        this.context = context;
        this.message = message;
        makeText(this.context, this.message, Toast.LENGTH_LONG).show();
    }//end constructor

    public MyToast(Context context, String header, String message, int drawableResourceID) {
        super(context);
        this.context = context;
        this.header = header;
        this.message = message;
        this.drawableResourceId = drawableResourceID;
        //-- View UI References
        View myToastView;
        LayoutInflater inflater = (LayoutInflater) this.context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        myToastView = inflater.inflate(R.layout.my_toast, null);
        ImageView myToastImageView = (ImageView) myToastView.findViewById(R.id.my_toast_imageView);
        TextView myToastHeaderTextView = (TextView) myToastView.findViewById(R.id.my_toast_header_textView);
        TextView myToastMessageView = (TextView) myToastView.findViewById(R.id.my_toast_message_textView);
        //-- Font and color
        Typeface typefaceBold = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Bold.ttf");
        Typeface typefaceThin = Typeface.createFromAsset(this.context.getAssets(), "fonts/Roboto-Light.ttf");
        int black = this.context.getResources().getColor(R.color.black);
        int gray = this.context.getResources().getColor(R.color.dark_gray);
        //-- Setting image, style, and text
        myToastImageView.setImageResource(this.drawableResourceId);
        myToastHeaderTextView.setTypeface(typefaceBold);
        myToastHeaderTextView.setTextColor(black);
        myToastHeaderTextView.setText(this.header);
        myToastMessageView.setTypeface(typefaceThin);
        myToastMessageView.setTextColor(gray);
        myToastMessageView.setText(this.message);

        setView(myToastView);
        setDuration(Toast.LENGTH_LONG);
        show();
    }//end constructor

}//end MyToast