package inc.bison.my;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.webkit.MimeTypeMap;

import java.io.File;

/**
 * Created by Clark on 10/18/2014.
 */
public class OpenWith {

    private Context context = null;
    private String pathOfFileToOpen = null;
    private String fileExtension = null;
    private String mimeType = null;

    public OpenWith(Context context, String pathOfFileToOpen) {
        this.context = context;
        this.pathOfFileToOpen = pathOfFileToOpen;
        //-- Is there a good else option to use here?
        if(this.pathOfFileToOpen.contains(".")) {
            this.fileExtension = this.pathOfFileToOpen.substring(this.pathOfFileToOpen.lastIndexOf(".") + 1);//-- The + 1 removes the "." so ".pdf" is just "pdf"
            this.mimeType = this.getMimeType();
        }//end if
    }//end constructor

    public void execute() {
        makeIntent();
    }//end execute()

    private void makeIntent() {
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setDataAndType(Uri.fromFile(new File(this.pathOfFileToOpen)), this.mimeType);
        this.context.startActivity(Intent.createChooser(intent, "Open with..."));
    }//end makeIntent()

    private String getMimeType() {
        String mime = null;
        MimeTypeMap mimeTypeMap = MimeTypeMap.getSingleton();
        mime = mimeTypeMap.getMimeTypeFromExtension(this.fileExtension);
        return mime;
    }//end getMineType

}
