package inc.bison.my;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;

/**
 * Created by Clark on 10/18/2014.
 */
public class MyIntents {

    private Class aClass = null;
    private Context context = null;
    private Activity activity = null;

    public MyIntents(Context context, Class aClass) {
        this.context = context;
        this.aClass = aClass;
    }//end constructor

    public void launchActivity() {
        Intent intent = new Intent(this.context, this.aClass);
        this.context.startActivity(intent);
    }//end launchActivity

}//end MyIntents
