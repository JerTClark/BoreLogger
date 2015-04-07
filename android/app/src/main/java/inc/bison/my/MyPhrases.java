package inc.bison.my;

import android.content.Context;

import inc.bison.borelogger.R;

/**
 * Created by Clark on 10/24/2014.
 */
public class MyPhrases {

    private String[] phraseArray = null;
    private Context context = null;

    public MyPhrases(Context context) {
        this.context = context;
    }//end constructor

    public String getPhrase() {
        this.phraseArray = this.context.getResources().getStringArray(R.array.funny_phrases);
        int random = (int)((Math.random() * this.phraseArray.length));
        return this.phraseArray[random];
    }//end getPhrase()

}//end MyPhrases
