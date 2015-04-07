package inc.bison.my;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.webkit.MimeTypeMap;

/**
 * Created by Clark on 10/27/2014.
 */
public class MyShareIntent {

    private Context context = null;
    private String pathToFile = null;
    private String fileExtension = null;

    public MyShareIntent(Context context, String pathToFile) {
        this.context = context;
        this.pathToFile = pathToFile;
        this.fileExtension = this.pathToFile.substring(this.pathToFile.lastIndexOf(".") + 1);
    }//end constructor

    public void share() {
        Intent sendIntent = new Intent(Intent.ACTION_SEND);
        sendIntent.setType(this.getMimeType());//-- Not sure if necessary
        sendIntent.putExtra(Intent.EXTRA_STREAM, Uri.parse("file:///" + pathToFile));//-- Not sure about this if file:// or file:///
        this.context.startActivity(Intent.createChooser(sendIntent, "Share using..."));
    }//end share()

    private String getMimeType() {
        String mime = null;
        MimeTypeMap mimeTypeMap = MimeTypeMap.getSingleton();
        mime = mimeTypeMap.getMimeTypeFromExtension(this.fileExtension);
        return mime;
    }//end getMineType

}//end MyShareIntent